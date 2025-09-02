/**
 * Determines if the argument is object-like.
 *
 * A value is object-like if it's not `null` and has a `typeof` result of "object".
 *
 * @param  {*} x - The value to be checked.
 * @return {boolean}
 */

const isObject = x => (x && typeof x === 'object')

/**
 * Determines if the argument is a function.
 *
 * @param  {*} x - The value to be checked.
 * @return {boolean}
 */

const isFunction = x => typeof x === 'function'

const isEmail = email => (email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
))

const isUrl = (url) => {
    const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
        'i'
    );
    return pattern.test(url);
}

let localStorageAvailable = null;
let sessionStorageAvailable = null;

const isLocalStorageAvailable = () => {
    return localStorageAvailable ? ? = isStorageAvailable(window.localStorage);
}

const isSessionStorageAvailable = () => {
    return sessionStorageAvailable ? ? = isStorageAvailable(window.sessionStorage);
}

/**
 * Detects whether a web storage API is both supported and available.
 *
 * @link     https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Feature-detecting_localStorage
 * @param  {Storage} storage - The Storage instance.
 * @return {boolean} Returns TRUE if the `localStorage` API is supported and available.
 */
function isStorageAvailable(storage) {
    try {
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (error) {
        return error instanceof DOMException && (
                // everything except Firefox
                error.code === 22 ||
                // Firefox
                error.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                error.name === 'QuotaExceededError' ||
                // Firefox
                error.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
};

export {
    isObject,
    isFunction,
    isEmail,
    isUrl,
    isLocalStorageAvailable,
    isSessionStorageAvailable
}