import {
    module
} from 'modujs';
import {
    CUSTOM_EVENT
} from '../config';

export default class Filters extends module {

    static CLASS = {
        OPEN: 'is-open',
        CALENDAR_OPEN: 'has-calendar-open',
        CATEGORIES_OPEN: 'has-categories-open'
    }

    constructor(m) {
        super(m)

        // Binding
        this.onPageLoadBind = this.onPageLoad.bind(this)

        // Flags
        this.isOpen = false

        // Events
        this.events = {
            click: {
                'toggleCalendar': 'toggleCalendar',
                'toggleCategories': 'toggleCategories'
            }
        }
    }

    //////////////
    // Lifecycle
    //////////////

    init() {
        this.bindEvents()
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
    }

    unbindEvents() {
        window.removeEventListener(CUSTOM_EVENT.VISIT_START, this.onPageLoadBind)
    }

    //////////////
    // Callbacks
    //////////////

    toggleCalendar(e) {
        this.closeCategories()

        if (this.el.classList.contains(Filters.CLASS.CALENDAR_OPEN)) {
            this.close()
        } else {
            this.openCalendar()
        }
    }

    toggleCategories(e) {
        this.closeCalendar()

        if (this.el.classList.contains(Filters.CLASS.CATEGORIES_OPEN)) {
            this.close()
        } else {
            this.openCategories()
        }
    }

    onPageLoad() {
        this.close()
    }

    //////////////
    // Methods
    //////////////

    open() {
        if (this.isOpen) return

        this.isOpen = true
        this.el.classList.add(Filters.CLASS.OPEN)
        this.call('scrollTo', {
            target: this.el,
            options: {
                offset: -70,
            }
        }, 'Scroll')
    }

    close() {
        if (!this.isOpen) return

        this.el.classList.remove(Filters.CLASS.OPEN)

        setTimeout(() => {
            this.el.classList.remove(Filters.CLASS.CALENDAR_OPEN)
            this.el.classList.remove(Filters.CLASS.CATEGORIES_OPEN)
            this.isOpen = false
        }, 300)
    }

    openCalendar() {
        this.open()
        this.el.classList.add(Filters.CLASS.CALENDAR_OPEN)
    }

    openCategories() {
        this.open()
        this.el.classList.add(Filters.CLASS.CATEGORIES_OPEN)
    }

    closeCalendar() {
        this.el.classList.remove(Filters.CLASS.CALENDAR_OPEN)
    }

    closeCategories() {
        this.el.classList.remove(Filters.CLASS.CATEGORIES_OPEN)
    }
}