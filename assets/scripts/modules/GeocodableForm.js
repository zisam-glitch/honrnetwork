import Form from './Form';

/**
 * Add the class "js-geocodable" to inputs that can be used as the address
 * lat + lon will be added to the formData object on submission
 */
export default class GeocodableForm extends Form {
    constructor(m) {
        super(m)
        this.apiKey = this.getData('api-key')
    }

    init() {
        this.bindEvents()
        this.initMapsApi()
    }

    initMapsApi() {
        // Async loading
        if (typeof window.google === 'undefined') {
            // If google is undefined, add the script and retry.

            window._tmp_google_onload = () => {
                this.initMapsApi();
            };

            var script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?v=3.56&language=fr&callback=_tmp_google_onload&key=${this.apiKey}`;
            document.head.appendChild(script);

            return false;
        }
    }

    processForm(token) {
        // Check if form is busy
        if ([Form.STATE.PROCESSING, Form.STATE.SENDING].includes(this.formState)) {
            console.warn('Form is busy')
            return false
        }

        token && this.formData.append('g-recaptcha-response', token)

        // From is processing
        this.setState(Form.STATE.PROCESSING)

        // Clear error
        this.clearErrorMessage()

        this.geocodeAddress((coords) => {
            this.formData.set('lat', coords[0])
            this.formData.set('lon', coords[1])

            this.submitForm();
        }, () => {
            // Error
            console.error('[App.Form.handleSubmit]', 'An error occured with geocoding')
            this.setState(Form.STATE.ERRORED)
            this.setErrorMessage(Form.MESSAGES.CRITICAL)
        })

    }

    /**
     * Geocode the form's address fields.
     *
     * @param   {function} [done] - A callback function that is executed if the geocoding succeeds.
     * @param   {function} [fail] - A callback function that is executed if the geocoding fails.
     * @returns {this}
     */
    geocodeAddress(done, fail) {
        const geocoder = new window.google.maps.Geocoder();
        let address = '';

        this.$el.querySelectorAll('.js-geocodable').forEach(element => {
            address += ' ' + element.value;
        });

        geocoder.geocode({
            'address': address
        }, function(results, status) {
            if (status == window.google.maps.GeocoderStatus.OK) {
                var lat = results[0].geometry.location.lat();
                var lon = results[0].geometry.location.lng();

                if (typeof done === 'function') done([lat, lon])
            } else {
                if (typeof fail === 'function') fail()
            }
        });

        return this;
    }
}