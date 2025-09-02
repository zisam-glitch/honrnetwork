import {
    module
} from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);

        this.onFilterClick = this.onFilterClick.bind(this)

        this.$list = this.$('list')[0]
        this.$filters = this.$('filter')
        this.$offers = Array.from(this.$list.children)
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.$filters.forEach($filter => {
            $filter.addEventListener('click', this.onFilterClick)
        })
    }

    onFilterClick(e) {
        const $target = e.target
        const category = $target.dataset.category

        this.$filters.forEach($filter => {
            $filter.classList.remove('is-active')
        })

        $target.classList.add('is-active')

        this.$list.classList.add('is-hidden')

        setTimeout(() => {
            this.$offers.forEach($offer => {
                $offer.classList.add('is-hidden')
            })

            requestAnimationFrame(() => {
                this.$offers.forEach($offer => {
                    let offerCategories = $offer.dataset.category.split(',');

                    if (category === 'all' ||
                        $offer.dataset.category == category ||
                        offerCategories.includes(category) ||
                        $offer.dataset.category == null) {
                        $offer.classList.remove('is-hidden')
                    }
                })
            })

            this.$list.classList.remove('is-hidden')
        }, 300);
    }

}