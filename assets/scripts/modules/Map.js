import {
    module
} from 'modujs'
import {
    Loader
} from '@googlemaps/js-api-loader'

export default class GMap extends module {

    static get settings() {
        return {

            // Google Map API ID (for styles)
            // https://console.cloud.google.com/google/maps-apis/studio/styles/5016081f71262e87?project=city-clients
            MAP_ID: '61f10e4cc753f792',

            CLASS_LOADING: 'is-loading',
            CLASS_LOADED: 'is-loaded',
            CLASS_FILTERS_OPEN: 'has-filters',
            CLASS_FILTERS_ITEM_ACTIVE: 'is-active',
            CLASS_INFO_OPEN: 'has-info',
            CLASS_MARKER_ACTIVE: 'is-active',

            DEFAULT_LOCATION: 'parcs'
        }
    }

    constructor(m) {
        super(m);

        // DOM Elements
        this.$el = this.el
        this.$map = this.$('map')[0]
        this.$filtersInner = this.$('filtersInner')[0]
        this.$filterAccordion = Array.from(this.$('filterAccordion'))
        this.$filterCategories = Array.from(this.$('filterCategory'))
        this.$infoContent = this.$('infoContent')[0]

        // Vars
        this.gmapKey = this.getData('key')
        this.locationId = this.getData('location')
        this.filterAccordionsIds = this.$filterAccordion.map(c => c.getAttribute('data-module-accordion'))
        this.activeFilterAccordion = null
        this.$activeFilter = null
        this.$activeFilterCategory = null
        this.filtersIsOpen = false
        this.infoIsOpen = false
        this.locations = {}
        this.currentLocation = null
        this.mapItems = []
        this.$activeMarker = null

        // Events
        this.events = {
            click: {
                filtersToggler: 'toggleFilters',
                filterCategory: 'setFilterCategory',
                filter: 'setFilter',
                infoClose: 'closeInfo',
                close: 'close',
            }
        }
    }

    init() {

        this.gmapOptions = {
            mapId: GMap.settings.MAP_ID
        };

        // Load options
        (async () => {
            const response = await fetch('api/v1/map-options', {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const r = await response.json()
            this.gmapOptions = { ...this.gmapOptions,
                ...r
            }
        })()
        .then(() => {

                // Google Map loader
                const loader = new Loader({
                    apiKey: this.gmapKey,
                    version: 'weekly',
                    libraries: ['places']
                })

                loader.load().then(async () => {
                    const {
                        LatLngBounds
                    } = await google.maps.importLibrary('core')
                    const {
                        Map,
                        Polygon
                    } = await google.maps.importLibrary('maps')
                    const {
                        AdvancedMarkerElement
                    } = await google.maps.importLibrary('marker')

                    this.map = new Map(this.$map, this.gmapOptions)

                    this.google = {
                        LatLngBounds: LatLngBounds,
                        Marker: AdvancedMarkerElement,
                        // Animation: Animation,
                        Polygon: Polygon
                    }

                    this.$el.classList.add(GMap.settings.CLASS_LOADED)

                    const urlParams = new URLSearchParams(document.location.search)

                    const locationId = this.getData('location') || urlParams.get('id') || GMap.settings.DEFAULT_LOCATION
                    this.loadLocations(locationId, locationId !== GMap.settings.DEFAULT_LOCATION)

                })
            })
            .catch(e => console.log(e))

        // Set categories accordions callbacks
        for (let id of this.filterAccordionsIds) {
            this.call('setCallbacks', {
                onOpen: () => {
                    if (this.activeFilterAccordion) {
                        this.call('shrink', null, 'Accordion', this.activeFilterAccordion)
                    }

                    if (this.$activeFilterCategory) {
                        this.setFilter(null)
                        this.$activeFilterCategory = null
                    }

                    this.activeFilterAccordion = id

                    this.loadLocations(id)

                    // const scrollY = this.$filterAccordion.find(c => c.getAttribute('data-module-accordion') === id)?.offsetTop || 0
                    this.$filtersInner.scrollTop = scrollY

                    this.closeInfo()
                },
                onShrink: () => {
                    if (this.activeFilterAccordion === id) {
                        this.activeFilterAccordion = null
                    }

                    this.closeInfo()
                },
            }, 'Accordion', id)
        }
    }

    setFilterCategory(e) {

        if (this.activeFilterAccordion) {
            this.call('shrink', null, 'Accordion', this.activeFilterAccordion)
        }

        if (this.$activeFilterCategory) {
            this.setFilter(null)
        }

        this.setFilter(e)
        this.$activeFilterCategory = e.curTarget
    }

    toggleFilters() {

        if (this.filtersIsOpen) {
            this.closeFilters()
        } else {
            this.openFilters()
        }
    }

    openFilters() {
        if (this.filtersIsOpen) {
            return
        }

        this.filtersIsOpen = true
        this.$el.classList.add(GMap.settings.CLASS_FILTERS_OPEN)
    }

    closeFilters() {
        if (!this.filtersIsOpen) {
            return
        }

        this.filtersIsOpen = false
        this.$el.classList.remove(GMap.settings.CLASS_FILTERS_OPEN)
    }

    openInfo(item, isMarker = false) {

        if (!this.$infoContent) {
            return
        }

        if (this.infoIsOpen) {
            this.closeInfo()
        }

        if (isMarker) {
            this.$activeMarker = item.content
            this.$activeMarker.classList.add(GMap.settings.CLASS_MARKER_ACTIVE)
        }

        this.fitBounds(item)

        this.infoIsOpen = true
        this.$infoContent.innerHTML = item.tooltip
        this.$el.classList.add(GMap.settings.CLASS_INFO_OPEN)

    }

    closeInfo() {
        if (!this.infoIsOpen) {
            return
        }

        this.infoIsOpen = false
        this.$el.classList.remove(GMap.settings.CLASS_INFO_OPEN)

        if (this.$activeMarker) {
            this.$activeMarker.classList.remove(GMap.settings.CLASS_MARKER_ACTIVE)
            this.$activeMarker = null
        }

        setTimeout(() => {
            if (!this.infoIsOpen) {
                this.$infoContent.innerHTML = ''
            }
        }, 300)
    }

    close() {
        this.closeFilters()
        this.closeInfo()
    }

    setFilter(e) {

        if (e === null) {
            this.$activeFilter ? .classList.remove(GMap.settings.CLASS_FILTERS_ITEM_ACTIVE)
            this.$activeFilter = null
            return
        }

        const $target = e.curTarget
        const value = $target.dataset.value

        this.loadLocations(value)
        this.$activeFilter ? .classList.remove(GMap.settings.CLASS_FILTERS_ITEM_ACTIVE)
        $target.classList.add(GMap.settings.CLASS_FILTERS_ITEM_ACTIVE)
        this.$activeFilter = $target

        this.closeFilters()
        this.closeInfo()
    }

    loadLocations(master, single = false) {

        // Set location url
        let url = single ? 'api/v1/location' : 'api/v1/locations'
        if (master) {
            url += `/${master}`
        }

        // Return if new location = current location
        if (url === this.currentLocation) {
            return
        }

        // Set current location
        this.currentLocation = url

        // Hide current items (markers/polygons)
        for (let item of this.mapItems) {
            item.setMap(null)

            if (item.fillOpacity) {
                item.fillOpacity = 0
            }
        }

        // Display markers if already fetched and return
        const items = this.locations[url]
        if (typeof items !== 'undefined') {

            for (let item of items) {
                item.setMap(this.map)

                if (item.fillOpacity) {
                    item.fillOpacity = 1
                }
            }

            this.mapItems = items

            this.fitBounds()

            return
        }

        this.$el.classList.add(GMap.settings.CLASS_LOADING)

        fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(r => r.json())
            .then(r => {
                this.mapItems = []

                // Single location
                if (typeof r.place === 'object' && r.place.id) {
                    this.setItems(r.place)
                } else if (typeof r.places === 'object') {

                    const places = Object.values(r.places)
                    const placesLength = places.length

                    for (let i = 0; i < placesLength; i++) {
                        this.setItems(places[i], i, placesLength)
                    }

                } else {
                    this.loadLocations(GMap.settings.DEFAULT_LOCATION)
                }

                this.fitBounds()
                this.locations[url] = this.mapItems
                this.$el.classList.remove(GMap.settings.CLASS_LOADING)
            })
            .catch(e => console.log(e))
    }

    setItems(place, i = 0, placesLength = 0) {
        const {
            position,
            html,
            path,
            paths,
            tooltip
        } = place

        // Set marker html
        let content = document.createElement('div')
        content.innerHTML = html
        content = content.firstElementChild

        if (i > 0 && placesLength > 0) {
            content.setAttribute('style', `--delay: ${i/placesLength}s`)
        }

        if (placesLength === 1) {
            content.classList.add(GMap.settings.CLASS_MARKER_ACTIVE)
        }

        if (position) {

            const marker = new this.google.Marker({
                content,
                position,
                map: this.map,
            })

            marker.tooltip = tooltip

            marker.addListener('click', () => this.openInfo(marker, true))

            this.mapItems.push(marker)
        } else if (paths) {

            const polygon = new this.google.Polygon({
                content,
                paths,
                fillColor: '#FFE6BA',
                map: this.map,
            })

            polygon.tooltip = tooltip

            polygon.addListener('click', () => this.openInfo(polygon))

            this.mapItems.push(polygon)
        } else if (path) {

            const polygon = new this.google.Polygon({
                content,
                paths: path,
                fillColor: 'transparent',
                strokeColor: '#EE7600',
                map: this.map,
            })

            this.mapItems.push(polygon)
        }
    }

    fitBounds(item) {

        const items = item ? [item] : this.mapItems

        const areMarkers = items.every(item => typeof item.position !== 'undefined')

        if (areMarkers) {
            const bounds = new this.google.LatLngBounds()
            for (let item of items) {
                bounds.extend(item.position)
            }
            this.map.fitBounds(bounds)
            this.map.setZoom(Math.min(this.map.getZoom(), 15))
        } else {
            this.map.setZoom(13)
            this.map.setCenter(this.gmapOptions.options.center)
        }
    }
}