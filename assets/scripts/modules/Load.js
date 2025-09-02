import {
    module
} from 'modujs'
import {
    $html
} from '../utils/dom'
import Swup from 'swup'
import SwupFragmentPlugin from '@swup/fragment-plugin'
import {
    toDash
} from '../utils/string'
import {
    CUSTOM_EVENT
} from '../config'

export default class extends module {
    constructor(m) {
        super(m)

        // Get Fragment rules
        this.rules = JSON.parse(this.getData('rules')) || []

        // Binding
        this.beforeContentReplaceBind = this.beforeContentReplace.bind(this)
        this.onContentReplaceBind = this.onContentReplace.bind(this)
        this.onVisitStartBind = this.onVisitStart.bind(this)
        this.onVisitEndBind = this.onVisitEnd.bind(this)
    }

    //////////////
    // Lifecycle
    //////////////

    init() {
        // Initialize Swup
        this.load = new Swup({
            containers: ['[data-load-container]'],
            animationSelector: '[class*="u-anim-page"]',
            animateHistoryBrowsing: true,
            linkToSelf: 'navigate',
            plugins: [
                new SwupFragmentPlugin({
                    rules: [{
                            from: this.rules.conseil,
                            to: `${this.rules.conseilDetails}/:name`,
                            containers: ['#modal'],
                            name: 'open-modal'
                        },
                        {
                            from: `${this.rules.conseilDetails}/:name`,
                            to: this.rules.conseil,
                            containers: ['#modal', '#listing'],
                            name: 'close-modal'
                        },
                        {
                            from: [
                                this.rules.events, /* /evenements */
                                `${this.rules.events}\\?(.*)`, /* /evenements?page=... */
                                `${this.rules.eventsCategory}(.*)`, /* /evenements/categorie... */
                                `${this.rules.events}/:year(\\d+)/:month(\\d+)/:day(\\d+)`, /* /evenements/2024/02/16 */
                                `${this.rules.events}/:year(\\d+)/:month(\\d+)/:day(\\d+)\\?(.*)` /* /evenements/2024/02/16?page=... */
                            ],
                            to: [
                                this.rules.events, /* /evenements */
                                `${this.rules.events}\\?(.*)`, /* /evenements?page=... */
                                `${this.rules.eventsCategory}(.*)`, /* /evenements/categorie... */
                                `${this.rules.events}/:year(\\d+)/:month(\\d+)/:day(\\d+)`, /* /evenements/2024/02/16 */
                                `${this.rules.events}/:year(\\d+)/:month(\\d+)/:day(\\d+)\\?(.*)` /* /evenements/2024/02/16?page=... */
                            ],
                            containers: ['#listing', '#filters'],
                            name: 'listing'
                        },
                        {
                            from: [
                                this.rules.news, /* /actualites */
                                `${this.rules.news}\\?(.*)`, /* /actualites?page=... */
                                `${this.rules.newsCategory}(.*)` /* /actualites/categorie... */
                            ],
                            to: [
                                this.rules.news, /* /actualites */
                                `${this.rules.news}\\?(.*)`, /* /actualites?page=... */
                                `${this.rules.newsCategory}(.*)` /* /actualites/categorie... */
                            ],
                            containers: ['#listing', '#filters'],
                            name: 'listing'
                        },
                        {
                            from: `${this.rules.babillard}(.*)`,
                            to: `${this.rules.babillard}(.*)`,
                            containers: ['#listing', '#filters'],
                            name: 'listing'
                        },
                    ]
                })
            ]
        })

        // Hooks
        this.load.hooks.on('visit:start', this.onVisitStartBind)
        this.load.hooks.before('content:replace', this.beforeContentReplaceBind)
        this.load.hooks.on('content:replace', this.onContentReplaceBind)
        this.load.hooks.on('visit:end', this.onVisitEndBind)
    }

    //////////////
    // Hooks
    //////////////

    onVisitStart(visit) {
        // To close all modals if needed
        window.dispatchEvent(new CustomEvent(CUSTOM_EVENT.VISIT_START))

        if (visit.fragmentVisit) {
            switch (visit.fragmentVisit.name) {
                case 'close-modal':
                    this.call('close', null, 'Dialog')
                    break;
                case 'listing':
                    this.call('scrollTo', {
                        target: this.el.querySelector('#listing'),
                        options: {
                            offset: -100
                        }
                    }, 'Scroll')
                    break;
            }
        }
    }

    onVisitEnd(visit) {
        window.dispatchEvent(new CustomEvent(CUSTOM_EVENT.VISIT_END))
    }

    async beforeContentReplace(visit) {
        if (visit.fragmentVisit) {
            for (let container of visit.fragmentVisit.containers) {
                const oldContainer = this.el.querySelector(container)
                this.call('removeScrollElements', oldContainer, 'Scroll')
            }
        }

        for (let container of visit.containers) {
            const oldContainer = this.el.querySelector(container)
            this.call('destroy', oldContainer, 'app')
        }
    }

    onContentReplace(visit) {
        if (visit.fragmentVisit) {
            if (visit.fragmentVisit.name == 'open-modal') {
                this.call('show', null, 'Dialog')
            }

            for (let container of visit.fragmentVisit.containers) {
                const newContainer = this.el.querySelector(container)
                this.call('addScrollElements', newContainer, 'Scroll')
            }
        }

        this.updateDocumentAttributes(visit)

        for (let container of visit.containers) {
            const newContainer = this.el.querySelector(container)
            this.call('update', newContainer, 'app')
        }
    }

    //////////////
    // Methods
    //////////////

    updateDocumentAttributes(visit) {
        if (visit.fragmentVisit) return

        // Retrieve HTML dataset on next container and update our real html element dataset accordingly
        const parser = new DOMParser()
        const nextDOM = parser.parseFromString(visit.to.html, 'text/html')
        const newDataset = Object.assign({}, nextDOM.querySelector('html').dataset)

        Object.entries(newDataset).forEach(([key, val]) => {
            $html.setAttribute(`data-${toDash(key)}`, val)
        })

    }

    goTo(url) {
        this.load.navigate(url)
    }
}