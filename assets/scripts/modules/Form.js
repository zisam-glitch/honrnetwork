import {
    module
} from 'modujs'
import {
    CUSTOM_EVENT
} from '../config'

export default class Form extends module {

    static STATE = {
        IDLE: 'is-idle', // Form is ready
        PROCESSING: 'is-processing', // Form is being processed
        SENDING: 'is-sending', // Form is being sent and awaiting response
        INVALID: 'is-invalid', // Form is invalid (HTTP 400)
        ERRORED: 'is-errored', // Form can not be processed (HTTP 500)
        COMPLETED: 'is-completed', // Form was processed successfully (HTTP 201)
    }

    static MESSAGES = {
        CRITICAL: 'An error occured. Please try again later',
    }

    constructor(m) {
        super(m)

        // Binding
        this.onHandleSubmitBind = this.onHandleSubmit.bind(this)
        this.onResetClickBind = this.onResetClick.bind(this)

        // UI
        this.$el = this.el
        this.$error = this.$('error')[0]
        this.$success = this.$('success')[0]
        this.$resetButton = this.$('resetButton')[0]

        this.$success.ariaHidden = true
        this.$error.ariaHidden = true

        // Set initial state
        this.formState = Form.STATE.IDLE

        // Recaptcha
        this.sitekey = typeof window.app !== 'undefined' && window.app.hasOwnProperty('recaptchaPublicKey') ?
            window.app.recaptchaPublicKey :
            false;
        const useRecaptcha = this.getData('use-recaptcha')
        this.useRecaptcha = useRecaptcha == 'true' || useRecaptcha === ''
        this.badgeContainerId = 'grecaptcha-container-id'
    }

    ///////////////
    // Lifecyle
    ///////////////
    init() {
        this.bindEvents()
    }

    destroy() {
        super.destroy()
        this.unbindEvents()
    }

    ///////////////
    // Events
    ///////////////
    bindEvents() {
        this.$el.addEventListener('submit', this.onHandleSubmitBind)
        this.$resetButton ? .addEventListener('click', this.onResetClickBind)
    }

    unbindEvents() {
        this.$el.removeEventListener('submit', this.onHandleSubmitBind)
        this.$resetButton ? .removeEventListener('click', this.onResetClickBind)
    }

    ///////////////
    // Callbacks
    ///////////////
    onHandleSubmit(e) {
        e.preventDefault()

        // Save submit event
        this.submitEvent = e
        this.formData = this.getFormData(e.target)

        this.clearErrorState()

        if (!this.validateForm()) {
            return false
        }

        if (this.useRecaptcha && this.sitekey) {
            if (!window.hasRenderedRecaptcha) {
                this.clientId = grecaptcha.render(this.badgeContainerId, {
                    'sitekey': this.sitekey,
                    'theme': 'dark',
                    'size': 'invisible',
                    'badge': 'inline',
                })
                window.hasRenderedRecaptcha = true
            }

            grecaptcha.ready(() => {
                grecaptcha.execute(this.clientId)
                    .then(token => this.processForm(token))
            });
        } else {
            this.processForm()
        }
    }

    onResetClick(e) {
        e.preventDefault()

        // Reset form
        this.$el.reset()

        // Reset state
        this.setState(Form.STATE.IDLE)

        // Clear error message & state
        this.clearErrorMessage()
        this.clearErrorState()

        // Hide success & error message
        this.$success.ariaHidden = true
        this.$error.ariaHidden = true

        // Dispatch custom event
        window.dispatchEvent(new CustomEvent(
            CUSTOM_EVENT.FORM_RESET, {
                detail: {
                    $form: this.$el
                }
            }
        ))

        // Scroll to form
        requestAnimationFrame(() => {
            this.call('scrollTo', {
                target: this.$el,
                options: {
                    offset: -120,
                    duration: 1
                }
            }, 'Scroll')
        })
    }

    ///////////////
    // Methods
    ///////////////
    validateForm() {
        let isFormValid = true;

        [...this.submitEvent.target.elements].forEach($el => {

            // Ignore buttons & fieldsets
            if ($el.tagName === 'BUTTON' || $el.tagName === 'FIELDSET') {
                return
            }

            const $parent = $el.closest('.c-form_item') || null
            const $error = $parent ? $parent.querySelector('.c-form_error') : null

            const isValid = $el.checkValidity()

            // Remove error message on validation
            if ($parent) $parent.classList.remove('has-error')
            if ($error) $error.ariaHidden = true

            if (!isValid) {
                // Add error state to form item
                if ($parent) $parent.classList.add('has-error')
                if ($error) $error.ariaHidden = false

                // Add error state to form
                this.$el.classList.add('is-error')

                // Set form as invalid
                isFormValid = false
            }
        })

        requestAnimationFrame(() => {
            const $inputErrors = document.querySelectorAll('.has-error')
            $inputErrors && this.call('scrollTo', {
                target: $inputErrors[0],
                options: {
                    offset: -120,
                    duration: 1
                }
            }, 'Scroll')
        })

        return isFormValid
    }

    processForm(token) {
        // Check if form is busy
        if ([Form.STATE.PROCESSING, Form.STATE.SENDING].includes(this.formState)) {
            console.warn('Form is busy')
            return false
        }

        token && this.formData.append('g-recaptcha-response', token)

        // From is processing
        this.setState(Form.STATE.PROCESSING)

        // Clear error
        this.clearErrorMessage()

        try {
            this.submitForm()
        } catch (error) {
            console.error('[App.Form.handleSubmit]', error)
            this.setState(Form.STATE.ERRORED)
            this.setErrorMessage(Form.MESSAGES.CRITICAL)
        }
    }

    submitForm() {
        // Check if form is sending
        if (this.formState === Form.STATE.SENDING) {
            console.warn('Form is already sending')
            return false
        }

        // Check if I can access to the submit event
        if (!this.submitEvent) {
            throw new Error('Missing submit event object')
        }

        // Set state to sending
        this.setState(Form.STATE.SENDING)

        // Prepare fetch
        const form = this.submitEvent.target
        const formUrl = form.action

        const controller = new AbortController()

        const badgeContainerId = this.badgeContainerId

        // Start fetch
        fetch(formUrl, {
                method: form.method,
                body: this.formData,
                signal: controller.signal

            }).then(response => response.json())
            .then(response => {
                if (response && response.success) {
                    // Success
                    controller.abort()
                    this.setState(Form.STATE.COMPLETED)
                    this.$success.ariaHidden = false
                } else {
                    // Errors
                    const feedback = response.feedback
                    let $firstErrorField = null

                    feedback.forEach((error) => {
                        const $field = form.querySelector(`[name="${error.property}"]`)
                        const $parent = $field.closest('.c-form_item') || null
                        const $error = $parent ? $parent.querySelector('.c-form_error') : null

                        if ($parent) $parent.classList.add('has-error')
                        if ($error) {
                            $error.ariaHidden = false
                            $error.innerHTML = error.message
                        }

                        if (!$firstErrorField) {
                            $firstErrorField = $field
                        }
                    })

                    this.setState(Form.STATE.ERRORED)
                    this.setErrorMessage(Form.MESSAGES.CRITICAL)
                    $firstErrorField && this.call('scrollTo', {
                        target: $firstErrorField,
                        options: {
                            offset: -120,
                            duration: 1
                        }
                    }, 'Scroll')
                }
            }).catch(error => {
                console.error('[App.FormSupport.submitForm]', error)
                this.setState(Form.STATE.ERRORED)
                this.setErrorMessage(Form.MESSAGES.CRITICAL)
            })
    }

    getFormData(form) {
        const submission = form.dataset.submission
        const formData = new FormData(form)

        // Stringify and append to form data
        formData.append('submission', submission)

        return formData
    }

    setState(stateValue) {
        const prevState = this.formState
        this.formState = stateValue
        this.$el.classList.remove(prevState)
        this.$el.classList.add(this.formState)
    }

    setErrorMessage(message) {
        if (this.$error) {
            this.$error.innerHTML = message
            this.$error.ariaHidden = false
        } else {
            console.warn(message)
        }
    }

    clearErrorMessage() {
        if (this.$error) {
            this.$error.innerHTML = ''
        }
    }

    clearErrorState() {
        this.$el.classList.remove('is-error')
    }
}