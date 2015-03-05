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
 * FormHelper module
 */
class FormHelper {

    constructor(options) {

        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;

        // set defautls values
        this.setDefaultBounds();
        this.setDates(this.options.datepicker, {returns:true, departure:true});

        // load events related with form helper and other modules
        this.events();
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

    setDates(datepicker, bounds) {
        // get current datepickers dates
        var departureDate = $(datepicker.options.departureSelector).datepicker('getDate'),
        returnDate = $(datepicker.options.returnSelector).datepicker('getDate');

        if (bounds.returns) {
            this.options.inputs["inboundOption.departureDay"] = returnDate.getUTCDate();
            this.options.inputs["inboundOption.departureMonth"] = returnDate.getMonth() + 1;
            this.options.inputs["inboundOption.departureYear"] = returnDate.getFullYear();
        }

        if(bounds.departure) {
            this.options.inputs["outboundOption.departureDay"] = departureDate.getUTCDate();
            this.options.inputs["outboundOption.departureMonth"] = departureDate.getMonth() + 1;
            this.options.inputs["outboundOption.departureYear"] = departureDate.getFullYear();
        }
    }

    setCabinClass(target) {
        this.options.inputs["cabinClass"] = $(target).val();
    }

    setPassengersAmount(type, value) {
        switch (type) {
            case 'adult':
                this.options.inputs["guestTypes[0].amount"] = value;
            break;
            case 'child':
                this.options.inputs["guestTypes[1].amount"] = value;
            break;
            case 'infant':
                this.options.inputs["guestTypes[2].amount"] = value;
            break;
        }
    }


    events() {

        var datepicker = this.options.datepicker,
            $departureField = $(datepicker.options.departureSelector),
            $returnField = $(datepicker.options.returnSelector);

        $departureField.datepicker('option', 'onSelect', (dateText, inst) =>{

            var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

            // this sets the inbound date picker to a week later of current selection
            var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
            $returnField.datepicker('setDate', weeklater);
            $returnField.datepicker('option', 'minDate', date);
            this.setDates(datepicker, {returns:true, departure:true});
        });


        $returnField.datepicker('option', 'onSelect', (dateText, inst) =>{

            var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

            // this sets the inbound date picker to a week later of current selection
            var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
            this.setDates(datepicker, {returns:true, departure:false});
        });

        $('.js-cabin-class').on('click', (e) => {
            this.setCabinClass(e.target);
        });

        $('.js-adults-amount').selectmenu({
            change: (e, ui) => {
                this.setPassengersAmount('adult', ui.item.value);
            }
        });

        $('.js-children-amount').selectmenu({
            change: (e, ui) => {
                this.setPassengersAmount('child', ui.item.value);
            }
        });

        $('.js-infants-amount').selectmenu({
            change: (e, ui) => {
                this.setPassengersAmount('infant', ui.item.value);
            }
        });
    }

}

module.exports = FormHelper;
