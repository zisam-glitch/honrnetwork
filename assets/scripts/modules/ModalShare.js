import {
    module
} from 'modujs';
import {
    $html
} from '../utils/dom'
import {
    createFocusTrap
} from "focus-trap";
import {
    CSS_CLASS
} from '../config'


export default class ModalShare extends module {

    static CLASS = {
        OPEN: 'has-modal-share-open',
    }

    constructor(m) {
        super(m)

        // Binding
        this.onTogglerClickBind = this.onTogglerClick.bind(this)

        // Toggler
        this.$toggler = document.querySelector('[data-modal-share-toggler]') || null

        this.events = {
            click: {
                close: 'close',
                share: 'share'
            },
        };

        this.$copy = this.$('copy')[0];
        this.$inner = this.$('inner')[0];
    }

    init() {

        if (!this.$toggler) return

        // Bind events
        this.bindEvents()

        // Focus trap options
        this.focusTrapOptions = {

            clickOutsideDeactivates: true,

            onActivate: () => {},

            onPostActivate: () => {
                this.$toggler.setAttribute('aria-expanded', true)
            },

            onDeactivate: () => {
                $html.classList.remove(ModalShare.CLASS.OPEN)
                $html.classList.remove(CSS_CLASS.MODAL_OPEN)
                this.$inner.setAttribute('aria-hidden', true)
            },

            onPostDeactivate: () => {
                this.$toggler.setAttribute('aria-expanded', false)
            },
        }

        this.focusTrap = createFocusTrap(this.$inner, this.focusTrapOptions)
    }

    destroy() {
        super.destroy()
        this.unbindEvents()
    }

    //////////////
    // Events
    //////////////
    bindEvents() {
        this.$toggler.addEventListener('click', this.onTogglerClickBind)
    }

    unbindEvents() {
        this.$toggler.removeEventListener('click', this.onTogglerClickBind)
    }

    //////////////
    // Callbacks
    //////////////
    onTogglerClick(e) {
        if (this.focusTrap ? .active) {
            this.close()
        } else {
            this.open()
        }
    }

    //////////////
    // Methods
    //////////////
    share(event) {
        const targetElement = event.curTarget;
        const shareMethod = this.getData('method', targetElement)
        const shareURL = window.location.href

        switch (shareMethod) {
            case 'facebook':
                {
                    const platformURL = `https://facebook.com/sharer/sharer.php?u=${shareURL}`;
                    this.openWindow(platformURL);
                    break;
                }

            case 'twitter':
                {
                    const text = encodeURIComponent(this.getData('text', targetElement));
                    const platformURL = `https://twitter.com/share?url=${shareURL}&amp;text=${text}`;
                    this.openWindow(platformURL);
                    break;
                }

            case 'mail':
                {
                    const subject = encodeURIComponent(this.getData('subject', targetElement));
                    const body = encodeURIComponent(this.getData('body', targetElement));
                    this.openMail(subject, `${body} ${shareURL}`);
                    break;
                }

            case 'linkedin':
                {
                    const encodedURL = encodeURIComponent(shareURL);
                    const platformURL = `http://www.linkedin.com/shareArticle?mini=true&amp;url=${encodedURL}`;
                    this.openWindow(platformURL);
                    break;
                }

            case 'copy':
                {
                    this.copyUrl(shareURL);
                    break;
                }
        }
    }

    openWindow(url) {
        window.open(url, 'Share', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=500, width=600');
    }

    openMail(subject, body) {
        window.location = 'mailto:?subject=' + subject + '&body=' + body;
    }

    copyUrl(url) {
        if (this.copyTimeout != undefined) {
            clearTimeout(this.copyTimeout);
        }

        this.$copy.innerText = this.getData('copy-success');
        this.$copy.style.opacity = "1";

        this.copyTimeout = setTimeout(() => {
            this.$copy.innerText = '';
            this.$copy.style.opacity = "0";
        }, 1500);

        window.copyToClipboard(url);
    }

    open() {
        if (this.focusTrap.active) return

        $html.classList.add(ModalShare.CLASS.OPEN)
        $html.classList.add(CSS_CLASS.MODAL_OPEN)
        this.$inner.setAttribute('aria-hidden', false)

        requestAnimationFrame(() => {
            this.focusTrap.activate()
        })
    }

    close() {
        this.focusTrap ? .deactivate ? .()
    }
}