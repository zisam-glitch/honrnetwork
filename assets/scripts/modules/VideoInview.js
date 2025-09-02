import {
    module
} from 'modujs'

export default class extends module {
    constructor(m) {
        super(m)

        this.$video = this.$('video')[0]
    }

    ///////////////
    // Lifecyle
    ///////////////
    init() {}

    destroy() {
        super.destroy()
    }

    ///////////////
    // Callbacks
    ///////////////
    onInview(args) {
        let $target

        if (args.target) {
            $target = args.target
        } else if (args.targetEl) {
            $target = args.targetEl
        } else {
            return
        }

        if (args.way === 'enter') {
            this.play()
        } else if (args.way === 'leave') {
            this.pause()
        }
    }

    ///////////////
    // Methods
    ///////////////
    play() {
        if (this.$video.paused) this.$video.play()
    }

    pause() {
        if (!this.$video.paused) this.$video.pause()
    }
}