import {
    module
} from 'modujs';
import {
    BREAKPOINTS
} from '../config';

export default class extends module {
    constructor(m) {
        super(m);

        // UI
        this.$buttons = this.$('button')
        this.$sections = this.$('section')

        // Events
        this.events = {
            'click': {
                'button': 'onButtonClick',
            }
        }
    }

    init() {}

    onButtonClick(e) {
        const $button = e.currentTarget
        const id = this.getData('id', $button)
        if (!id) return

        const $section = Array.from(this.$sections).find(($section) => $section.id === id)

        $section && this.call('scrollTo', {
            target: $section,
            options: {
                offset: -100,
            }
        }, 'Scroll')
    }

    onSectionInview(args) {
        if (window.innerWidth < BREAKPOINTS.FROM_MEDIUM) return

        const {
            target,
            way,
            from
        } = args
        const $targetButton = Array.from(this.$buttons).find(($button) => this.getData('id', $button) === target.id)

        if (way == 'enter') {
            this.$buttons.forEach(($button) => $button.classList.remove('is-active'))
            $targetButton.classList.add('is-active')
        } else {
            $targetButton.classList.remove('is-active')
        }
    }
}