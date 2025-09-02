import {
    module
} from 'modujs';

export default class extends module {
    constructor(m) {
        super(m)

        // UI
        this.$selects = this.$('select')
        this.$forms = this.$('form')

        // Bindings
        this.onSelectChangeBind = this.onSelectChange.bind(this)
    }

    //////////////
    // Lifecycle
    //////////////

    init() {
        this.bindEvents()

        this.selectValues = []
        this.$selects.forEach(($select) => {
            this.selectValues.push($select.value)
        })
    }

    destroy() {
        super.destroy()
        this.unbindEvents()
    }

    //////////////
    // Events
    //////////////

    bindEvents() {
        this.$selects.forEach(($select) => {
            $select.addEventListener('change', this.onSelectChangeBind)
        })
    }

    unbindEvents() {
        this.$selects.forEach(($select) => {
            $select.removeEventListener('change', this.onSelectChangeBind)
        })
    }

    //////////////
    // Callbacks
    //////////////

    onSelectChange(e) {
        const $select = e.target
        const value = $select.value
        const $selectedForm = Array.from(this.$forms).find(($form) => $form.id == `form-${value}`)

        // Hide all forms except the selected one
        $selectedForm && this.$forms.forEach(($form) => {
            if ($form !== $selectedForm) {
                $form.classList.add('is-hidden')
            } else {
                $form.classList.remove('is-hidden')
            }
        })

        // Reset select value once form is hidden
        requestAnimationFrame(() => {
            const index = Array.from(this.$selects).indexOf($select)
            const oldValue = this.selectValues[index]
            $select.value = oldValue
        })
    }
}