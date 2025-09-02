import {
    module
} from 'modujs'

export default class extends module {
    constructor(m) {
        super(m)

        // UI
        this.$content = this.$('content')[0]
        this.$closeBtn = this.$('close')[0]

        // Binding
        this.onKeyDownBind = this.onKeyDown.bind(this)
        this.onTransitionEndBind = this.onTransitionEnd.bind(this)

        // Flag
        this.isOpen = false
    }

    //////////////
    // Lifecycle
    //////////////

    init() {
        this.$content.addEventListener('transitionend', this.onTransitionEndBind)
    }

    destroy() {
        super.destroy()
        this.$content.removeEventListener('transitionend', this.onTransitionEndBind)
    }

    //////////////
    // Callbacks
    //////////////

    onKeyDown(e) {
        if (e.key === 'Escape') {
            e.preventDefault()
            this.$closeBtn.click()
        }
    }

    onTransitionEnd(e) {
        const property = e.propertyName

        if (property !== 'transform' || !this.isOpen) return

        this.el.inert = false
        const $firstFocusable = this.el.querySelectorAll('[tabindex]')[0] || this.el
        $firstFocusable.focus()
    }

    //////////////
    // Methods
    //////////////

    show() {
        this.el.inert = true
        this.el.showModal()
        window.addEventListener('keydown', this.onKeyDownBind)

        this.isOpen = true

        requestAnimationFrame(() => {
            this.el.scrollTop = 0
        })
    }

    update() {
        this.el.scrollTop = 0
    }

    close() {
        window.removeEventListener('keydown', this.onKeyDownBind)
        this.el.close()
        this.isOpen = false
    }
}