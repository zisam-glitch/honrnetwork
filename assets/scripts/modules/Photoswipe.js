import {
    module
} from 'modujs'
import PhotoSwipe from 'photoswipe'
import PhotoSwipeLightbox from 'photoswipe/lightbox'

export default class extends module {
    constructor(m) {
        super(m)

        // DOM
        this.$el = this.el

    }

    init() {
        this.lightbox = new PhotoSwipeLightbox({
            // Core
            gallery: this.$el,
            children: 'a',
            pswpModule: PhotoSwipe,
            // Styles
            arrowPrevSVG: this.getButton('arrow-left', 'Image précédente'),
            arrowNextSVG: this.getButton('arrow-right', 'Image suivante'),
            closeSVG: this.getButton('close', 'Fermer'),
            zoomSVG: '',
            padding: {
                top: 60,
                bottom: 40,
                left: 80,
                right: 80
            }
        })
        this.lightbox.init()
    }

    getButton(icon = '', label = '') {

        return `
            <span class="c-button -primary -circle -hidden-label">
                <span class="c-button_inner">
                    <span class="c-button_label-container">
                        <span class="c-button_label">
                            ${label}
                        </span>
                        <span class="c-button_label" aria-hidden="true">
                            ${label}
                        </span>
                    </span>
                    <span class="c-button_icon | o-icon">
                        <svg class="svg-${icon}" focusable="false" aria-hidden="true">
                            <use xlink:href="assets/images/sprite.svg#${icon}"></use>
                        </svg>
                    </span>
                </span>
            </span>
        `
    }

    destroy() {
        super.destroy()
        this.lightbox.destroy()
    }
}