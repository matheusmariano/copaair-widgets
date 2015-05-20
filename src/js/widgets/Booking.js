/**
 * Modules
 */
var $ = require('jquery'),
    Template = require('../lib/Template'),
    FlightControl = require('../lib/FlightControl'),
    Datepicker = require('../lib/Datepicker'),
    Autocomplete = require('../lib/Autocomplete'),
    FormHelper = require('../lib/FormHelper')
;

/**
 * Options
 * @type {Object}
 */
var defaults = {
        lang: 'es',
        d1: null,
        bookingPage:null,
        coupon: null,
        origin: null,
        destination: null,
        destinationName: null,
        analytics: false,
        widgetPosition: { my: 'left bottom', at: 'left top' },
        templatePath: 'bower_components/copaair-widgets/templates/booking.hbs',
        languagePath: 'bower_components/copaair-widgets/lang/'
    }
;


class Booking {

    /**
     * Widget constructor
     * @param {Object} selector element DOM object
     * @param {Object} options  Options passed on plugin instance
     */
    constructor(element, options) {
        this.$booking = $(element);

        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        new Template('booking', {
            'lang': this.options.lang,
            'origin': this.options.origin,
            'destination': this.options.destination,
            'destinationName': this.options.destinationName, // temporary fix for static destination
            callback: (html) => {
                this.$booking.html(html);

                // When finished, build all the widgets
                this.setupSelectMenus();

                // setup datepicker
                var datepicker = new Datepicker({
                    lang: this.options.lang,
                });
                datepicker.render();
                var formHelper = new FormHelper({
                    datepicker: datepicker,
                    origin: this.options.origin,
                    destination: this.options.destination,
                    booking: this.$booking,
                    d1: this.options.d1,
                    lang: this.options.lang,
                    analytics: this.options.analytics,
                    bookingPage: this.options.bookingPage
                });


                if(this.options.coupon) {
                    formHelper.setCoupon(this.options.coupon);
                }

                // Autocomplete widgets
                this.initAutocomplete(formHelper);


                // Bind events
                this.bookingEvents();

            }
        });
    }

    /**
     * Setup autocomplete destination widgets
     * @see module:Autocomplete
     */
    initAutocomplete(formHelper) {
        // Init class with options
        var autocomplete = new Autocomplete({
            lang: this.options.lang,
            select: function (e, ui) {
                e.preventDefault();
                e.stopPropagation();

                // set display value to the input
                $(this).val(ui.item.display);
                //set actual value at the booking object
                formHelper.setBounds($(this).data('input-field'), ui.item.value);
            },
            position: this.options.widgetPosition,
            appendTo: this.$booking
        });

        // Build
        autocomplete.start(() => {
            autocomplete.render(this.$booking.find('.js-booking-autocomplete'));
        });
    }

    /**
     * Replaces select menus with custom UI widgets
     */
    setupSelectMenus() {
        $('.js-selectmenu').selectmenu({
            position: this.options.widgetPosition
        });

        return this;
    }

    /**
     * Bind events related to booking interaction
     */
    bookingEvents() {
        var $booking = this.$booking;
        var $toggle = this.$booking.find('.js-copaair-toggle');

        // Show bottom row when any input gets focus
        $booking.on('focus.copaair', 'input', function(e) {
            $booking.addClass('copaair-widget-open');
            $toggle.removeClass('copaair-hidden');
        });

        // Clicking anywhere in the document hides bottom row
        $booking.on('click.copaair', '.js-copaair-close', function(e) {
            e.preventDefault();
            $booking.removeClass('copaair-widget-open');
            $toggle.addClass('copaair-hidden');
        });

    }
}

module.exports = Booking;
