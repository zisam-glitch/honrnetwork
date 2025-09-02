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

export default class ModalSearch extends module {

    static CLASS = {
        OPEN: 'has-modal-search-open',
        ACTIVE: 'is-active',
    }

    constructor(m) {
        super(m)

        // Binding
        this.onPageLoadBind = this.onPageLoad.bind(this)
        this.onTogglerClickBind = this.onTogglerClick.bind(this)
        this.onKeydownBind = this.onKeydown.bind(this)
        this.onKeyupBind = this.onKeyup.bind(this)

        // Toggler
        this.$toggler = document.querySelector('[data-modal-search-toggler]')

        // Input
        this.$input = this.el.querySelector('input')

        this.ctrlDown = false
    }

    //////////////
    // Lifecycle
    //////////////

    init() {

        // Bind events
        this.bindEvents()

        // Focus trap options
        this.focusTrapOptions = {

            clickOutsideDeactivates: true,

            initialFocus: this.$input,

            onActivate: () => {
                this.call('closeNav', null, 'Nav')
                this.call('close', null, 'ModalParking')
            },

            onPostActivate: () => {
                this.$toggler.setAttribute('aria-expanded', true)
                this.$toggler.classList.add(ModalSearch.CLASS.ACTIVE)
            },

            onDeactivate: () => {
                $html.classList.remove(ModalSearch.CLASS.OPEN)
                $html.classList.remove(CSS_CLASS.MODAL_OPEN)
                this.el.setAttribute('aria-hidden', true)
            },

            onPostDeactivate: () => {
                this.$toggler.setAttribute('aria-expanded', false)
                this.$toggler.classList.remove(ModalSearch.CLASS.ACTIVE)
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
        document.addEventListener('keydown', this.onKeydownBind)
        document.addEventListener('keyup', this.onKeyupBind)
    }

    unbindEvents() {
        window.removeEventListener(CUSTOM_EVENT.VISIT_START, this.onPageLoadBind)
        this.$toggler.removeEventListener('click', this.onTogglerClickBind)
        document.removeEventListener('keydown', this.onKeydownBind)
        document.removeEventListener('keyup', this.onKeyupBind)
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

    onKeydown(e) {
        if (e.key == 'Control' || e.key == 'Meta') {
            this.ctrlDown = true
        } else {
            if (this.ctrlDown && e.key == 'k') {
                this.open()
            }
        }
    }

    onKeyup(e) {
        if (e.key == 'Control' || e.key == 'Meta') {
            this.ctrlDown = false
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

        $html.classList.add(ModalSearch.CLASS.OPEN)
        $html.classList.add(CSS_CLASS.MODAL_OPEN)
        this.el.setAttribute('aria-hidden', false)

        requestAnimationFrame(() => {
            this.focusTrap.activate()
        })
    }

    close() {
        this.focusTrap ? .deactivate ? .()
    }
}