import {
    module
} from 'modujs';
import {
    CUSTOM_EVENT
} from '../config';

export default class extends module {
    constructor(m) {
        super(m)

        // UI
        this.$input = this.$('input')[0]
        this.$label = this.$('label')[0]
        this.$reset = this.$('reset')[0]
        this.$parent = this.el.closest('.c-form_item') || null

        // Copy
        this.initialText = this.$label.textContent

        // Events
        this.onChangeBind = this.onChange.bind(this)
        this.onResetClickBind = this.onResetClick.bind(this)
        this.onFormResetBind = this.onFormReset.bind(this)
    }

    //////////////
    // Lifecycle
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
        this.$input.addEventListener('change', this.onChangeBind)
        this.$reset.addEventListener('click', this.onResetClickBind)
        window.addEventListener(CUSTOM_EVENT.FORM_RESET, this.onFormResetBind)
    }

    unbindEvents() {
        this.$input.removeEventListener('change', this.onChangeBind)
        this.$reset.removeEventListener('click', this.onResetClickBind)
        window.removeEventListener(CUSTOM_EVENT.FORM_RESET, this.onFormResetBind)
    }

    //////////////
    // Callbacks
    //////////////

    onChange(e) {
        const files = Array.from(e.target.files)

        if (files && files.length) {
            const labelContent = files.map(file => file.name).join(', ')
            this.$label.textContent = labelContent
            this.el.classList.add('has-file')
            this.$parent && this.$parent.classList.remove('has-error')
        }
    }

    onFormReset(e) {
        const $form = this.el.closest('form')

        if (e.detail.$form === $form) {
            this.reset()
        }
    }

    onResetClick(e) {
        e.preventDefault()
        this.reset()
    }

    //////////////
    // Metods
    //////////////

    reset() {
        this.$input.value = ''
        this.$label.textContent = this.initialText
        this.el.classList.remove('has-file')
        this.$parent && this.$parent.classList.remove('has-error')
    }
}