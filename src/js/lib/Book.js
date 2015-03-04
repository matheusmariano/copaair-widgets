var $ = require('jquery'),
    defaults = {
        lang: 'es',
        origin: false,
        destination: false,
        // required field to submit form
        // to copa
        inputs: {
            tripType: "RT",
            flexibleSearch: "true",
            pos: "CMGS",
            "guestTypes[0].type": "ADT",
            "guestTypes[1].type": "CNN",
            "guestTypes[2].type": "INF",
            "guestTypes[0].amount": 1,
            "guestTypes[1].amount": 0,
            "guestTypes[2].amount": 0,
            "outboundOption.departureDay": null,
            "outboundOption.departureMonth": null,
            "outboundOption.departureYear": null,
            "inboundOption.departureDay": null,
            "inboundOption.departureMonth": null,
            "inboundOption.departureYear": null,
            "coupon": null,
            // origin
            "outboundOption.originLocationCode": null,
            "inboundOption.destinationLocationCode": null,
            // destination
            "outboundOption.destinationLocationCode": null,
            "inboundOption.originLocationCode": null,
            // // cabin class Business|Economy
            "cabinClass": "Economy",
            d1: null,
            lang: 'es'
        },
        formUrl: 'https://bookings.copaair.com/CMGS/' +
                       'AirLowFareSearchExternal.do?'
    }
;

/**
 * Book module
 */
class Book {

    constructor(options) {

        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;

        this.setDefaultBounds();
    }



    process() {

        // form.on('submit', function(event) {
        //     event.preventDefault();
        //     var httpQuery = $(this).serialize();
        //     var url = _this.options.formUrl;

        //     if(_this.validationError(form)){
        //         console.log('error in the form');
        //     }
        //     else{
        //         var searchWindow = window.open(url + httpQuery, '_blank');
        //         searchWindow.focus();
        //     }
        // });
    }

    setDefaultBounds() {

        if (this.options.origin) {
            this.setBounds('origin', this.options.origin);
        }

        if (this.options.destination) {
            this.setBounds('destination', this.options.destination)
        }
    }

    setBounds(bound, location) {

        if (bound === 'origin') {
            this.options.inputs["outboundOption.destinationLocationCode"] = location;
            this.options.inputs["inboundOption.destinationLocationCode"] = location;
        }

        if (bound === 'destination') {
            this.options.inputs["outboundOption.originLocationCode"] = location;
            this.options.inputs["inboundOption.originLocationCode"] = location;
        }

    }

    setDates() {

    }
}

module.exports = Book;
