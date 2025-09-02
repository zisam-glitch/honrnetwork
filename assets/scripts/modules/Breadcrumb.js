import {
    module
} from 'modujs';

export default class extends module {
    constructor(m) {
        super(m)

        // UI
        this.$sublist = this.$('sublist')[0]
        this.$details = this.$('details')[0]
        this.$summary = this.$('summary')[0]

        // Binding
        this.onMouseEnterBind = this.onMouseEnter.bind(this)
        this.onMouseLeaveBind = this.onMouseLeave.bind(this)
        this.onClickBind = this.onClick.bind(this)
        this.onKeyDownBind = this.onKeyDown.bind(this)

        // Flags
        this.isOpen = false
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
        if (this.$summary) {
            this.$details.addEventListener('mouseenter', this.onMouseEnterBind)
            this.$details.addEventListener('mouseleave', this.onMouseLeaveBind)
            this.$summary.addEventListener('click', this.onClickBind)
        }
    }

    unbindEvents() {
        if (this.$summary) {
            this.$details.removeEventListener('mouseenter', this.onMouseEnterBind)
            this.$details.removeEventListener('mouseleave', this.onMouseLeaveBind)
            this.$summary.removeEventListener('click', this.onClickBind)
        }
    }

    //////////////
    // Callbacks
    //////////////
    onMouseEnter() {
        this.$summary.click()
    }

    onMouseLeave() {
        this.isOpen && this.$summary.click()
    }

    onClick(e) {
        this.isOpen = !this.isOpen

        if (this.isOpen) {
            window.addEventListener('keydown', this.onKeyDownBind)
        } else {
            window.removeEventListener('keydown', this.onKeyDownBind)
        }

        requestAnimationFrame(() => {
            this.el.classList.toggle('is-open')
            this.isOpen && this.computeMetrics()
        })
    }

    onKeyDown(e) {
        if (e.key === 'Escape') this.$summary.click()
    }

    //////////////
    // Methods
    //////////////
    computeMetrics() {
        if (this.$sublist) {
            const width = this.$sublist.clientWidth
            const height = this.$sublist.clientHeight

            this.el.style.setProperty('--list-width', `${width}px`)
            this.el.style.setProperty('--list-height', `${height}px`)
        }
    }
}