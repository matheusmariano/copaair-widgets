var $ = require('jquery'),
    i18n = require('../../../lang/datepicker.json'),
    defaults = {
        departureSelector: '.copaair-booking-datepicker-departure',
        returnSelector: '.copaair-booking-datepicker-return',
        dateRules: {
            today: new Date(),
            weekLater: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
        },
        lang: 'es'
    }
;

/**
 * Datepicker module
 */
class Datepicker {

    constructor(options) {

        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
    }

    /**
     * Render date picker inside the booking form
     * setups the defaults dates and language
     */
    render() {
        this.setLocale();
        this.setDefaultDates();
        this.events();
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

    events() {
        var $departureField = $(this.options.departureSelector),
            $returnField = $(this.options.returnSelector);

        // $departureField.datepicker('option', 'onSelect', this.onSelectOutbound);
    }


    onSelectOutbound(dateText, inst) {
            var $returnField = $(this.options.returnSelector),
                date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

            //this sets the inbound date picker to a week later of current selection
            var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
            $returnField.datepicker('setDate', weeklater);
    }
    /**
     * Configure datepicker depending on the
     * localization
     */
    setLocale() {
        var regional = i18n[this.options.lang].regional;
        $.datepicker.setDefaults(regional);
    }


}

module.exports = Datepicker;
