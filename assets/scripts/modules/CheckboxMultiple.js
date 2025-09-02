import {
    module
} from 'modujs'

export default class extends module {
    constructor(m) {
        super(m)

        // UI
        this.$inputs = this.$('input')

        // Date
        this.isRequired = this.getData('required') === 'true'

        this.events = {
            'change': 'onChange'
        }
    }

    init() {
        this.onChange()
    }

    destroy() {
        super.destroy()
    }

    onChange(e) {
        if (!this.isRequired) return

        const checked = this.el.querySelectorAll('input:checked')

        if (checked.length === 0) {
            this.setRequired(true)
            this.el.classList.add('is-invalid')
        } else {
            this.setRequired(false)
            this.el.classList.remove('is-invalid')
        }
    }

    setRequired(isRequired) {
        this.$inputs.forEach($input => {
            $input.required = isRequired
        })
    }
}