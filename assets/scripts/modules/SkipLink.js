import {
    module
} from 'modujs';
import {
    CUSTOM_EVENT
} from '../config';

export default class extends module {
    constructor(m) {
        super(m);

        this.onPageLoadBind = this.onPageLoad.bind(this);

        this.$skipLinkContent = null;
        this.$mainContent = null;

        this.events = {
            click: {
                button: 'onClick'
            }
        }
    }

    //////////////
    // Lifecyle
    //////////////

    init() {
        this.bindEvents()
        this.onPageLoad()
    }

    destroy() {
        super.destroy()
        this.unbindEvents()
    }

    //////////////
    // Events
    //////////////

    bindEvents() {
        window.addEventListener(CUSTOM_EVENT.VISIT_END, this.onPageLoadBind)
    }

    unbindEvents() {
        window.removeEventListener(CUSTOM_EVENT.VISIT_END, this.onPageLoadBind)
    }

    onPageLoad() {
        this.$skipLinkContent = document.querySelector('[data-skip-link-content]');
        this.$mainContent = document.getElementById('main');

        requestAnimationFrame(() => {
            // Add tabindex="-1" to main content for accessibility
            if (this.$skipLinkContent) {
                this.$skipLinkContent.setAttribute('tabindex', '-1');
            } else if (this.$mainContent) {
                this.$mainContent.setAttribute('tabindex', '-1');
            }
        });
    }

    onClick(event) {
        event.preventDefault();

        let targetContent = this.$skipLinkContent || this.$mainContent || null;

        if (targetContent) {
            this.call('scrollTo', {
                target: targetContent,
                options: {
                    duration: 1,
                    offset: -100,
                },
            }, 'Scroll');

            targetContent.focus();
        }
    }
}