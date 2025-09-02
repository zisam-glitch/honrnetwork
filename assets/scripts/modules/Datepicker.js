import {
    module
} from 'modujs';
import {
    $html
} from '../utils/dom';
import {
    createFocusTrap
} from "focus-trap";
import {
    CSS_CLASS,
    CUSTOM_EVENT
} from '../config'

export default class ModalDatepicker extends module {

    static CLASS = {
        OPEN: 'has-datepicker-open',
    }

    constructor(m) {
        super(m)

        // UI
        this.$el = this.el
        this.$activeToggler = null
        this.$container = this.$('container')[0]

        // Calendar
        this.today = new Date()
        this.minimum = new Date()
        this.minimum.setDate(this.today.getDate() + 4) // + 4 jours.

        this.calendarOptions = {
            startDate: this.minimum,
            events: [{
                date: {
                    start: 1,
                    end: this.minimum.getTime()
                },
            }],
            callbacks: {
                onDayClick: this.onDayClick.bind(this)
            },
            translations: {
                nextMonthLabel: {
                    fr: '<span class="u-screen-reader-text">Mois suivant</span>',
                    en: '<span class="u-screen-reader-text">Next month</span>',
                },
                prevMonthLabel: {
                    fr: '<span class="u-screen-reader-text">Mois précédent</span>',
                    en: '<span class="u-screen-reader-text">Previous month</span>'
                },
            },
            classes: {
                calendarEventClass: '-disabled'
            },
            displayEventsNumber: false,
        }

        // Focus trap options
        this.focusTrapOptions = {

            clickOutsideDeactivates: true,

            onActivate: () => {},

            onPostActivate: () => {
                this.$activeToggler.setAttribute('aria-expanded', true)
            },

            onDeactivate: () => {
                $html.classList.remove(ModalDatepicker.CLASS.OPEN)
                $html.classList.remove(CSS_CLASS.MODAL_OPEN)
                this.el.setAttribute('aria-hidden', true)
            },

            onPostDeactivate: () => {
                this.$activeToggler.setAttribute('aria-expanded', false)
                this.$activeToggler = null
                this.calendar ? .destroy()
            },
        }
    }

    //////////////
    // Lifecycle
    //////////////

    init() {
        this.bindEvents()

        // Create focus trap
        this.focusTrap = createFocusTrap(this.$container, this.focusTrapOptions)

        // Init calendar
        this.calendar = new bCalendar(this.$container, this.calendarOptions)
    }

    destroy() {
        super.destroy()
        this.unbindEvents()
        this.calendar ? .destroy()
    }

    //////////////
    // Events
    //////////////

    bindEvents() {
        window.addEventListener(CUSTOM_EVENT.FORM_RESET, this.onFormResetBind)
    }

    unbindEvents() {
        window.removeEventListener(CUSTOM_EVENT.FORM_RESET, this.onFormResetBind)
    }

    //////////////
    // Callbacks
    //////////////

    onDayClick(date, calendar) {
        if (date.date.getTime() < this.minimum.getTime()) {
            return false
        }

        const year = date.date.getUTCFullYear()
        const month = ('0' + (parseInt(date.date.getUTCMonth()) + 1)).slice(-2)
        const day = ('0' + date.date.getUTCDate()).slice(-2)
        const dateValue = `${year}-${month}-${day}`

        this.$activeToggler.previousElementSibling.value = dateValue

        const formatter = new Intl.DateTimeFormat('fr-FR', {
            day: "numeric",
            month: "long",
            year: "numeric",
        })

        const dateLabel = formatter.format(date.date)

        this.$activeToggler.innerHTML = dateLabel

        this.close()
    }

    //////////////
    // Methods
    //////////////

    open(args) {
        if (this.focusTrap.active) return

        // Store toggler element
        this.$activeToggler = args.$toggler

        // Get input value
        const inputValue = this.$activeToggler.previousElementSibling.value

        // Set calendar selected date
        this.calendar.selectedDate = inputValue ? new Date(inputValue + 'T00:00:00') : false
        this.calendar.refresh()

        // Prepare modal opening
        $html.classList.add(ModalDatepicker.CLASS.OPEN)
        $html.classList.add(CSS_CLASS.MODAL_OPEN)
        this.el.setAttribute('aria-hidden', false)

        requestAnimationFrame(() => {
            this.focusTrap.activate()
        })
    }

    close() {
        this.focusTrap ? .deactivate ? .()
    }
}