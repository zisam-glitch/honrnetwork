import {
    module
} from 'modujs';
import {
    CUSTOM_EVENT
} from '../config';

export default class extends module {
    constructor(m) {
        super(m)

        // Events
        this.events = {
            click: 'open'
        }

        // Binding
        this.onFormResetBind = this.onFormReset.bind(this)

        // Labels
        this.placeholder = this.el.innerHTML
    }

    //////////////
    // Lifecyle
    //////////////

    init() {
        this.bindEvents()
    }

    destroy() {
        super.destroy()
        this.unbindEvents()
    }

    //////////////
    // Events
    //////////////

    bindEvents() {
        window.addEventListener(CUSTOM_EVENT.FORM_RESET, this.onFormResetBind)
    }

    unbindEvents() {
        window.removeEventListener(CUSTOM_EVENT.FORM_RESET, this.onFormResetBind)
    }

    //////////////
    // Callbacks
    //////////////

    onFormReset(e) {
        const $form = this.el.closest('form')

        if (e.detail.$form === $form) {
            this.reset()
        }
    }

    //////////////
    // Methods
    //////////////

    open() {
        this.call('open', {
            $toggler: this.el
        }, 'Datepicker')
    }

    reset() {
        this.el.innerHTML = this.placeholder
    }
}