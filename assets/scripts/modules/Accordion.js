// Props to https://css-tricks.com/how-to-animate-the-details-element-using-waapi/

import {
    module as Module
} from 'modujs'

export default class extends Module {
    constructor(m) {
        super(m)

        // Binding
        this.onClickBind = this.onClick.bind(this)

        // UI
        this.$summary = this.$('summary')[0]
        this.$content = this.$('content')[0]
        this.$parent = this.el.closest('[data-accordion-parent]') || null

        // Data
        this.animation = null
        this.isClosing = false
        this.isExpanding = false
    }

    init() {
        this.bindEvents()
    }

    destroy() {
        super.destroy()

        this.unbindEvents()
    }

    bindEvents() {
        this.$summary.addEventListener('click', this.onClickBind)
    }

    unbindEvents() {
        this.$summary.removeEventListener('click', this.onClickBind)
    }

    onClick(e) {
        e.preventDefault()

        this.el.style.overflow = 'hidden'

        if (this.isClosing || !this.el.open) {
            this.open()
        } else if (this.isExpanding || this.el.open) {
            this.shrink()
        }
    }

    shrink() {
        this.isClosing = true
        this.el.classList.remove('is-active')

        if (this.$parent) this.$parent.classList.remove('is-active')

        const startHeight = `${this.el.offsetHeight}px`
        const endHeight = `${this.$summary.offsetHeight}px`

        if (this.animation) {
            this.animation.cancel()
        }

        this.animation = this.el.animate({
            height: [startHeight, endHeight],
        }, {
            duration: 300,

            easing: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
        })

        this.animation.onfinish = () => this.onAnimationFinish(false)
        this.animation.oncancel = () => {
            this.isClosing = false
            this.el.classList.add('is-active')
        }

        this.onShrink ? .(this.el)
    }

    open() {
        this.el.style.height = `${this.el.offsetHeight}px`
        this.el.open = true

        window.requestAnimationFrame(() => this.expand())

        this.onOpen ? .(this.el)
    }

    expand() {
        this.isExpanding = true
        this.el.classList.add('is-active')

        if (this.$parent) this.$parent.classList.add('is-active')

        const startHeight = `${this.el.offsetHeight}px`
        const endHeight = `${this.$summary.offsetHeight + this.$content.offsetHeight}px`

        if (this.animation) {
            this.animation.cancel()
        }

        this.animation = this.el.animate({
            height: [startHeight, endHeight],
        }, {
            duration: 300,
            easing: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
        })

        this.animation.onfinish = () => this.onAnimationFinish(true)
        this.animation.oncancel = () => {
            this.isExpanding = false
            this.el.classList.remove('is-active')
        }
    }

    onAnimationFinish(open) {
        this.el.open = open

        this.animation = null

        this.isClosing = false
        this.isExpanding = false

        this.el.style.height = this.el.style.overflow = ''
    }

    setCallbacks({
        onOpen = () => {},
        onShrink = () => {}
    }) {
        this.onOpen = onOpen
        this.onShrink = onShrink
    }
}