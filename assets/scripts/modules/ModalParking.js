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
    CSS_CLASS,
    CUSTOM_EVENT
} from '../config'

export default class ModalParking extends module {

    static CLASS = {
        OPEN: 'has-modal-parking-open',
        ACTIVE: 'is-active',
    }

    constructor(m) {
        super(m)

        // Binding
        this.onTogglerClickBind = this.onTogglerClick.bind(this)
        this.onPageLoadBind = this.onPageLoad.bind(this)

        // Toggler
        this.$toggler = document.querySelector('[data-modal-parking-toggler]')

        // Close
        this.$close = this.$('close')[0]

        // ModalID
        this.modalId = this.el.dataset.id;

        // Events
        this.events = {
            click: {
                'close': 'close'
            }
        }
    }

    //////////////
    // Lifecycle
    //////////////

    init() {
        // Check session storage
        if (sessionStorage.getItem('candiacParkingModal') != this.modalId) {
            setTimeout(() => {
                this.open();
            }, 1000)
        }

        // Bind events
        this.bindEvents()

        // Focus trap options
        this.focusTrapOptions = {

            clickOutsideDeactivates: true,

            initialFocus: this.el,

            setReturnFocus: false,

            onActivate: () => {
                this.returnFocus = document.activeElement;

                this.call('close', null, 'ModalSearch')
                this.call('closeNav', null, 'Nav')
            },

            onPostActivate: () => {
                this.$toggler.setAttribute('aria-expanded', true)
                this.$toggler.classList.add(ModalParking.CLASS.ACTIVE)
            },

            onDeactivate: () => {
                if (document.activeElement !== this.$close) {
                    this.returnFocus = document.activeElement;
                }

                $html.classList.remove(ModalParking.CLASS.OPEN)
                $html.classList.remove(CSS_CLASS.MODAL_OPEN)
                this.el.setAttribute('aria-hidden', true)

                // Set session storage
                if (sessionStorage.getItem('candiacParkingModal') != this.modalId) {
                    sessionStorage.setItem('candiacParkingModal', this.modalId);
                }
            },

            onPostDeactivate: () => {
                this.returnFocus ? .focus ? .()
                this.returnFocus = false

                this.$toggler.setAttribute('aria-expanded', false)
                this.$toggler.classList.remove(ModalParking.CLASS.ACTIVE)
            },
        }

        this.focusTrap = createFocusTrap('.c-header_inner', this.focusTrapOptions)
    }

    destroy() {
        super.destroy()
        this.unbindEvents()
    }

    //////////////
    // Events
    //////////////
    bindEvents() {
        window.addEventListener(CUSTOM_EVENT.VISIT_START, this.onPageLoadBind)
        this.$toggler.addEventListener('click', this.onTogglerClickBind)
    }

    unbindEvents() {
        window.removeEventListener(CUSTOM_EVENT.VISIT_START, this.onPageLoadBind)
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

    onPageLoad() {
        this.close()
    }

    //////////////
    // Methods
    //////////////

    open() {
        if (this.focusTrap.active) return

        $html.classList.add(ModalParking.CLASS.OPEN)
        $html.classList.add(CSS_CLASS.MODAL_OPEN)
        this.el.setAttribute('aria-hidden', false)

        this.focusTrap ? .activate()
    }

    close() {
        this.focusTrap ? .deactivate ? .()
    }
}