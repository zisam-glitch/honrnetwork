import {
    module
} from 'modujs';
import {
    $html
} from '../utils/dom'

export default class ModalAlert extends module {

    static CLASS = {
        OPEN: 'has-modal-alert-open',
        HIDDEN: 'is-hidden',
    }

    constructor(m) {
        super(m)

        // UI
        this.$items = this.$('item')

        // Events
        this.events = {
            click: {
                'close': 'closeAlert'
            }
        }
    }

    //////////////
    // Lifecycle
    //////////////

    init() {
        let showModal = false
        this.$items.forEach(($item) => {
            const key = $item.dataset.sessionKey
            if (localStorage.getItem(key) == 'true') {
                $item.classList.add(ModalAlert.CLASS.HIDDEN)
            } else {
                showModal = true
            }
        });

        showModal && $html.classList.add(ModalAlert.CLASS.OPEN);
    }

    destroy() {
        super.destroy()
    }

    closeAlert(e) {
        const $target = e.curTarget;
        const $modal = $target.closest('[data-modal-alert="item"]')
        const key = $modal.dataset.sessionKey

        $modal.classList.add(ModalAlert.CLASS.HIDDEN)

        let allHidden = true;

        this.$items.forEach((item) => {
            if (!item.classList.contains(ModalAlert.CLASS.HIDDEN)) {
                allHidden = false;
            }
        });

        allHidden && $html.classList.remove(ModalAlert.CLASS.OPEN);

        // Set local storage
        localStorage.setItem(key, 'true');
    }
}