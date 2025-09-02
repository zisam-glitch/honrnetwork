import {
    module
} from 'modujs';
import {
    isLocalStorageAvailable,
    isSessionStorageAvailable
} from '../utils/is';
import * as VanillaCookieConsent from 'vanilla-cookieconsent';

export default class extends module {
    constructor(options) {
        super(options);
        var opts = this.getData('config');

        try {
            this.cookieConfig = JSON.parse(opts);
        } catch (e) {
            console.warn(e.message);
        }

        this.cookieConfig.categories = this.prepareCategories(this.cookieConfig.categories);

        VanillaCookieConsent.run(Object.assign({
            onConsent: () => {
                this.toggleCategoryFunctional();
            },
            onChange: ({
                changedCategories
            }) => {
                if (changedCategories.includes('functional')) {
                    this.toggleCategoryFunctional();
                }
            },
            onModalShow: () => {
                this.addDismissConsentModalEventListener();
            },
            onModalHide: () => {
                this.removeDismissConsentModalEventListener();
            },
        }, this.cookieConfig));

        this.events = {
            click: {
                'hide': 'hideModals',
                'show-preferences-modal': 'showPreferences',
            },
        };

        this.dismissConsentModalEventListener = (event) => {
            if (event.keyCode === 27) {
                VanillaCookieConsent.hide();
            }
        };
    }

    addDismissConsentModalEventListener() {
        document.addEventListener('keydown', this.dismissConsentModalEventListener, {
            passive: true
        });
    }

    removeDismissConsentModalEventListener() {
        document.removeEventListener('keydown', this.dismissConsentModalEventListener);
    }

    hideModals() {
        VanillaCookieConsent.hide();
        VanillaCookieConsent.hidePreferences();
    }

    showPreferences() {
        VanillaCookieConsent.showPreferences();
    }

    toggleCategoryFunctional() {
        const isAccepted = VanillaCookieConsent ? .acceptedCategory('functional');

        if (!isAccepted) {
            const cookies = VanillaCookieConsent.getConfig('categories') ? .functional ? .autoClear ? .cookies;
            if (Array.isArray(cookies) && cookies.length) {
                this.eraseStorageItems(cookies);
            }
        }
    }

    eraseStorageItems(cookies) {
        let localStorageKeys;
        let sessionStorageKeys;

        for (const {
                name: cookieName
            } of cookies) {
            if (isLocalStorageAvailable()) {
                localStorageKeys ? ? = getAllStorageKeys(window.localStorage);

                const foundCookies = findMatchingCookies(localStorageKeys, cookieName);
                for (const foundCookie of foundCookies) {
                    window.localStorage.removeItem(foundCookie);
                }
            }

            if (isSessionStorageAvailable()) {
                sessionStorageKeys ? ? = getAllStorageKeys(window.sessionStorage);

                const foundCookies = findMatchingCookies(sessionStorageKeys, cookieName);
                for (const foundCookie of foundCookies) {
                    window.sessionStorage.removeItem(foundCookie);
                }
            }
        }
    }

    prepareCategories(categories) {
        for (const [categoryName, categoryData] of Object.entries(categories)) {
            if (
                categoryData ? .autoClear ? .cookies &&
                Array.isArray(categoryData.autoClear.cookies) &&
                categoryData.autoClear.cookies.length > 0
            ) {
                categoryData.autoClear.cookies.map((cookie) => {
                    if (
                        cookie ? .name &&
                        typeof cookie.name === 'string'
                    ) {
                        const found = cookie.name.match(/^\/(.+)\/([a-z]+)?$/);
                        if (found) {
                            cookie.name = new RegExp(found[1], found[2]);
                        }
                    }

                    return cookie;
                });

                categories[categoryName].autoClear.cookies = categoryData.autoClear.cookies;
            }
        }

        return categories;
    }

    destroy() {
        //this.el.remove('click', '[data-cookie-consent="hide"]');
    }
}

/**
 * This function is copied from `findMatchingCookies()` from
 * {@link https://github.com/orestbida/cookieconsent/blob/v3.0.0-rc.17/src/utils/cookies.js vanilla-cookieconsent}.
 *
 * @param {string[]} allCookies
 * @param {string}   cookieName
 */
function findMatchingCookies(allCookies, cookieName) {
    if (cookieName instanceof RegExp) {
        return allCookies.filter((cookie) => cookieName.test(cookie));
    } else {
        const cookieIndex = allCookies.indexOf(cookieName);
        return cookieIndex > -1 ?
            [allCookies[cookieIndex]] :
            [];
    }
}


/**
 * Returns array with all the cookie names.
 *
 * This function is based on `getAllCookies()` from
 * {@link https://github.com/orestbida/cookieconsent/blob/v3.0.0-rc.17/src/utils/cookies.js vanilla-cookieconsent}.
 *
 * @param   {Storage} storage
 * @param   {?RegExp} [regex]
 * @returns {string[]}
 */
function getAllStorageKeys(storage, regex) {
    /**
     * @type {string[]}
     */
    const cookieNames = [];

    /**
     * Save only the item names
     */
    for (const name of Object.keys(storage)) {
        if (regex) {
            try {
                regex.test(name) && cookieNames.push(name);
                // eslint-disable-next-line no-empty
            } catch (e) {}
        } else {
            cookieNames.push(name);
        }
    }

    return cookieNames;
}