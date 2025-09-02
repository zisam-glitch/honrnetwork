import {
    module
} from 'modujs';

export default class extends module {
    constructor(m) {
        super(m)

        // UI
        this.$container = this.$('container')[0]

        // Data
        this.baseUrl = this.getData('url') || window.location.pathname
        this.category = this.getData('category') || null
        this.events = this.getData('events') || []
        this.selectedDate = this.getData('date') || new Date()

        // Calendar options
        this.options = {
            selectedDate: this.selectedDate,
            startDate: this.selectedDate, // No need to defined the startDate if it has to be today
            displayEventsNumber: false,
            translations: {
                nextMonthLabel: {
                    fr: '<span class="u-screen-reader-text">Mois suivant</span>'
                },
                prevMonthLabel: {
                    fr: '<span class="u-screen-reader-text">Mois précédent</span>'
                },
            },
            callbacks: {
                onDayClick: (args) => {
                    /** @type {Date} */
                    const date = args.date
                    const year = date.getFullYear()
                    // Month and day require a leading zero.
                    const month = ('0' + (date.getMonth() + 1)).slice(-2);
                    const day = ('0' + date.getDate()).slice(-2);

                    /**
                     * URL Examples
                     * /evenements
                     * /evenements/2024/02/16
                     * /evenements/sports
                     * /evenements/sports/2024/02/16
                     */

                    let url = this.baseUrl;

                    if (this.category) {
                        url += '/categorie/' + this.category;
                    }

                    url += `/${year}/${month}/${day}`;

                    this.call('goTo', url, 'Load')
                }
            }
        }


    }

    //////////////
    // Lifecycle
    //////////////

    init() {
        // Add events to options if any
        if (this.events) {
            this.options = {
                ...this.options,
                events: JSON.parse(this.events)
            }
        }

        // Init calendar
        this.calendar = new bCalendar(this.$container, this.options)
    }

    destroy() {
        super.destroy()
        this.calendar.destroy()
    }
}