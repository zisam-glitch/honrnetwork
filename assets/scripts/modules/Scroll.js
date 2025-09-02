import {
    module
} from 'modujs'
import {
    lazyLoadImage
} from '../utils/image'
import LocomotiveScroll from 'locomotive-scroll'

export default class extends module {
    constructor(m) {
        super(m);

        // Binding
        this.onScrollBind = this.onScroll.bind(this)
    }

    ///////////////
    // Lifecycle
    ///////////////
    init() {

        if (history.scrollRestoration) {
            history.scrollRestoration = 'manual';
            window.scrollTo(0, 0)
        }

        this.scroll = new LocomotiveScroll({
            modularInstance: this,
            scrollCallback: this.onScrollBind,
            lenisOptions: {
                smoothWheel: false,
            }
        })
    }

    destroy() {
        this.scroll.destroy();
    }

    ///////////////
    // Callbacks
    ///////////////
    onScroll({
        scroll,
        limit,
        velocity,
        direction,
        progress
    }) {}

    ///////////////
    // Methods
    ///////////////

    /**
     * Lazy load the related image.
     *
     * @see ../utils/image.js
     *
     * It is recommended to wrap your `<img>` into an element with the
     * CSS class name `.c-lazy`. The CSS class name modifier `.-lazy-loaded`
     * will be applied on both the image and the parent wrapper.
     *
     * ```html
     * <div class="c-lazy o-ratio u-4:3">
     *     <img data-scroll data-scroll-call="lazyLoad, Scroll, main" data-src="http://picsum.photos/640/480?v=1" alt="" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
     * </div>
     * ```
     *
     * @param {LocomotiveScroll} args - The Locomotive Scroll instance.
     */
    lazyLoad(args) {
        lazyLoadImage(args.target, null, () => {
            //callback
        })
    }

    scrollTo(params) {
        let {
            target,
            options
        } = params

        options = Object.assign({
            // Defaults
            duration: 1,
        }, options)

        this.scroll ? .scrollTo(target, options)
    }

    addScrollElements(container) {
        this.scroll.addScrollElements(container)
    }

    removeScrollElements(container) {
        this.scroll.removeScrollElements(container)
    }

    stop() {
        this.scroll ? .lenisInstance.stop()
    }

    start() {
        this.scroll ? .lenisInstance.start()
    }
}