import {
    module
} from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);

        // UI
        this.$items = this.$('item')
        this.$select = this.$('select')

        // Events
        this.events = {
            change: {
                select: 'onChange'
            }
        }
    }

    ///////////////
    // Lifecycle
    ///////////////
    init() {}

    destroy() {
        super.destroy()
    }

    onChange(e) {
        const $target = e.curTarget;
        const value = $target.value;

        this.$items.forEach((item) => {
            item.classList.add('is-hidden')

            const itemCategory = item.getAttribute('data-category');
            if (value === 'all' || value === itemCategory) {
                item.classList.remove('is-hidden')
            } else {
                item.classList.add('is-hidden')
            }
        });
    }
}