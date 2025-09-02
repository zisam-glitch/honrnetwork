import {
    module as Module
} from "modujs";

export default class Expandable extends Module {

    static ACTIVE_CLASS = 'is-active'
    static EXPANDED_CLASS = 'is-expanded'
    static DURATION = 300
    static EASING = 'cubic-bezier(0.1, 0.3, 0, 1)'

    constructor(m) {
        super(m);

        // UI
        this.$el = this.el
        this.$parent = this.$el.closest('[data-expandable-parent]') || null
        this.$container = this.$('container')[0]
        this.$inner = this.$('inner')[0]
        this.$button = this.$('button')[0]
        this.$buttonLabels = this.$button.querySelectorAll('.c-button_label')

        // Labels
        this.labelOpen = this.getData('label-open', this.$button)
        this.labelClose = this.getData('label-close', this.$button)

        // Binding
        this.toggleBind = this.toggle.bind(this);

        // Data
        this.shrunkHeight = `${this.$container.offsetHeight}px`
    }

    //////////////
    // Lifecycle
    //////////////

    init() {
        this.bindEvents();
    }

    destroy() {
        this.unbindEvents();
    }

    //////////////
    // Events
    //////////////

    bindEvents() {
        this.$button.addEventListener("click", this.toggleBind);
    }

    unbindEvents() {
        this.$button.removeEventListener("click", this.toggleBind);
    }

    //////////////
    // Methods
    //////////////

    toggle(e) {
        e.preventDefault()

        this.$inner.style.overflow = 'hidden'

        this.$el.classList.contains(Expandable.EXPANDED_CLASS) ? this.shrink() : this.expand()
    }

    expand() {
        this.isExpanding = true
        this.$el.classList.add(Expandable.EXPANDED_CLASS)

        const endHeight = `${this.$inner.offsetHeight}px`

        if (this.animation) {
            this.animation.cancel()
        }

        this.animation = this.$container.animate({
            height: [this.shrunkHeight, endHeight],
        }, {
            duration: Expandable.DURATION,
            easing: Expandable.EASING
        })

        this.animation.onfinish = () => this.onAnimationFinish(true)
        this.animation.oncancel = () => {
            this.isExpanding = false
            this.el.classList.remove(Expandable.ACTIVE_CLASS)
        }

        this.$buttonLabels.forEach($text => {
            $text.textContent = this.labelClose
        })

        this.$button.classList.add(Expandable.ACTIVE_CLASS)
        this.$parent ? .classList.add(Expandable.EXPANDED_CLASS)
    }

    shrink() {
        this.isClosing = false
        this.$el.classList.remove(Expandable.EXPANDED_CLASS)

        const startHeight = `${this.$inner.offsetHeight}px`

        if (this.animation) {
            this.animation.cancel()
        }

        this.animation = this.$container.animate({
            height: [startHeight, this.shrunkHeight],
        }, {
            duration: Expandable.DURATION,
            easing: Expandable.EASING
        })

        this.animation.onfinish = () => this.onAnimationFinish(false)
        this.animation.oncancel = () => {
            this.isClosing = false
            this.el.classList.add(Expandable.ACTIVE_CLASS)
        }

        this.$buttonLabels.forEach($text => {
            $text.textContent = this.labelOpen
        })

        this.$button.classList.remove(Expandable.ACTIVE_CLASS)
        this.$parent ? .classList.remove(Expandable.EXPANDED_CLASS)
    }

    onAnimationFinish(open) {
        this.animation = null

        this.isClosing = false
        this.isExpanding = false

        this.$inner.style.height = this.$inner.style.overflow = ''
    }
}