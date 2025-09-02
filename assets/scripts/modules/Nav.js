import {
    module
} from 'modujs';
import {
    $html
} from '../utils/dom'
import {
    createFocusTrap
} from "focus-trap";
import {
    CSS_CLASS,
    CUSTOM_EVENT
} from '../config'

export default class Nav extends module {

    static CLASS = {
        OPEN: 'has-nav-open',
        ITEM_ACTIVE: 'is-active',
        PARENT_ACTIVE: 'has-item-active',
    }

    constructor(m) {
        super(m)

        // Events
        this.events = {
            click: {
                'itemToggler': 'onItemTogglerClick',
                'back': 'onBackClick',
            }
        }

        // Binding
        this.onTogglerClickBind = this.onTogglerClick.bind(this)
        this.onPageLoadBind = this.onPageLoad.bind(this)

        // Nav toggler
        this.$togglers = document.querySelectorAll('[data-nav-toggler]')
    }

    //////////////
    // Lifecycle
    //////////////

    init() {

        // Bind events
        this.bindEvents()

        // Focus trap options
        this.focusTrapOptions = {
            clickOutsideDeactivates: true,

            initialFocus: false,

            onActivate: () => {
                this.call('close', null, 'ModalSearch')
                this.call('close', null, 'ModalParking')
                this.call('stop', null, 'Scroll')
            },

            onPostActivate: () => {
                this.$togglers.forEach($toggler => {
                    $toggler.setAttribute('aria-expanded', true)
                })
            },

            onDeactivate: () => {
                $html.classList.remove(Nav.CLASS.OPEN)
                $html.classList.remove(CSS_CLASS.MODAL_OPEN)
                this.call('start', null, 'Scroll')
            },

            onPostDeactivate: () => {
                this.closeActiveItems()

                this.$togglers.forEach($toggler => {
                    $toggler.setAttribute('aria-expanded', false)
                })
            },
        }

        this.focusTrap = createFocusTrap('.c-header_inner', this.focusTrapOptions)
    }

    destroy() {
        super.destroy()
        this.unbindEvents()
    }

    //////////////
    // Events
    //////////////
    bindEvents() {
        window.addEventListener(CUSTOM_EVENT.VISIT_START, this.onPageLoadBind)

        this.$togglers.forEach($toggler => {
            $toggler.addEventListener('click', this.onTogglerClickBind)
        })
    }

    unbindEvents() {
        window.removeEventListener(CUSTOM_EVENT.VISIT_START, this.onPageLoadBind)

        this.$togglers.forEach($toggler => {
            $toggler.removeEventListener('click', this.onTogglerClickBind)
        })
    }

    //////////////
    // Callbacks
    //////////////

    onTogglerClick(e) {
        if (this.focusTrap ? .active) {
            this.closeNav()
        } else {
            this.openNav()
        }
    }

    onItemTogglerClick(e) {
        const $item = this.parent('item', e.curTarget)
        const isActive = $item.classList.contains(Nav.CLASS.ITEM_ACTIVE)
        const itemLevel = this.getData('level', $item)

        if (isActive && itemLevel == 'primary') {
            // If item is active and it's a primary level,
            // close nav, item will be closed by focus trap
            this.closeNav()

        } else {

            if (!this.focusTrap ? .active) {
                // If Nav is closed, open it
                this.openNav()
            }

            this.closeActiveItems($item.parentNode)

            requestAnimationFrame(() => {
                this.openItem($item)
            })
        }
    }

    onBackClick(e) {
        const $item = this.parent('item', e.curTarget)
        $item && this.closeItem($item)
    }

    onPageLoad() {
        this.closeNav()
    }

    //////////////
    // Methods
    //////////////

    openNav() {
        if (this.focusTrap.active) return

        $html.classList.add(Nav.CLASS.OPEN)
        $html.classList.add(CSS_CLASS.MODAL_OPEN)

        requestAnimationFrame(() => {
            this.focusTrap.activate()
        })
    }

    closeNav() {
        this.focusTrap ? .deactivate ? .()
    }

    openItem($item) {
        if (!$item) return

        $item.classList.add(Nav.CLASS.ITEM_ACTIVE)
        this.$('itemToggler', $item)[0] ? .setAttribute('aria-expanded', true)
        this.$('itemPanel', $item)[0] ? .setAttribute('aria-hidden', false)
        this.$('itemPanel', $item)[0] ? .scrollTo(0, 0)

        const $parent = this.parent('itemPanel', $item) || $item.parentNode
        $parent ? .classList.add(Nav.CLASS.PARENT_ACTIVE)
    }

    closeItem($item) {
        if (!$item) return

        $item.classList.remove(Nav.CLASS.ITEM_ACTIVE)
        this.$('itemToggler', $item)[0] ? .setAttribute('aria-expanded', false)
        this.$('itemPanel', $item)[0] ? .setAttribute('aria-hidden', true)

        const $parent = this.parent('itemPanel', $item) || $item.parentNode
        $parent ? .classList.remove(Nav.CLASS.PARENT_ACTIVE)
    }

    closeActiveItems($container = this.el) {
        const $items = this.$('item', $container)

        $items.forEach($item => {
            if ($item.classList.contains(Nav.CLASS.ITEM_ACTIVE)) {
                this.closeItem($item)
            }
        })
    }
}