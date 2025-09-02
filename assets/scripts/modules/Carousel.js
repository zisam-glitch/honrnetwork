import {
    module
} from 'modujs';
import Swiper from 'swiper';
import {
    CAROUSEL_DEFAULT_ARGS,
    CAROUSEL_HERO_ARGS
} from "../constants/carousel";
import {
    Navigation,
    Pagination,
    Autoplay,
    A11y
} from 'swiper/modules';

export default class extends module {
    constructor(m) {
        super(m);

        // UI
        this.$container = this.$('container')[0]
        this.$prevButton = this.$('prev')[0] || null
        this.$nextButton = this.$('next')[0] || null
        this.$pagination = this.$('pagination')[0] || null


        // Data
        this.type = this.getData('type') || 'default'
        this.length = this.$('item').length

    }

    //////////////
    // Lifecycle
    //////////////
    init() {
        let args = {}

        switch (this.type) {
            case 'hero':
                args = CAROUSEL_HERO_ARGS({
                    modules: [Pagination, Autoplay, A11y],
                    $pagination: this.$pagination,
                });
                break;

            default:
                args = CAROUSEL_DEFAULT_ARGS({
                    modules: [Navigation, A11y],
                    $prevButton: this.$prevButton,
                    $nextButton: this.$nextButton,
                });
                break;
        }

        if (this.length > 1) {
            this.carousel = new Swiper(this.$container, args)
        }
    }

    destroy() {
        super.destroy()
        this.carousel ? .destroy(true, true)
    }
}