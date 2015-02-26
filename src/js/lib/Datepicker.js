var $ = require('jquery'),

    defaults = {
        departureSelector: '.copaair-booking-datepicker-departure',
        returnSelector: '.copaair-booking-datepicker-return',
        dateRules: {
            today: new Date(),
            weekLater: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
        }
    };

class Datepicker {

    constructor(formElement, options) {
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this.formElement = formElement;
    }

    /**
     * Render date picker inside the booking form
     * setups the defaults dates and language
     */
    render() {

        this.setDefaultDates();
        // this.setLocale();

    }

    /**
     * Set defaults dates
     * this consist in set current date for departure
     * and one week later for return
     */
    setDefaultDates() {

        var dateRules = this.options.dateRules,
        $departureField = $(this.options.departureSelector),
        $returnField = $(this.options.returnSelector);


        $departureField.datepicker({
            minDate: new Date()
        });

        $returnField.datepicker({
            minDate: new Date()
        });

        $departureField.datepicker("setDate", dateRules.today);
        $returnField.datepicker("setDate", dateRules.weekLater);
    }

    /**
     * Configure datepicker depending on the
     * localization
     */
    setLocale() {
        $.datepicker.setDefaults(regional);
    }


}

module.exports = Datepicker;
