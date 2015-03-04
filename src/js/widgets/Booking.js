// Create the defaults
var $ = require('jquery'),
    Template = require('../lib/Template'),
    FlightControl = require('../lib/FlightControl'),
    Datepicker = require('../lib/Datepicker'),
    Autocomplete = require('../lib/Autocomplete'),
    Book = require('../lib/Book'),
    defaults = {
        lang: 'es',
        origin: 'all',
        destination: 'all',
        templatePath: 'bower_components/copaair-widgets/templates/booking.hbs',
        languagePath: 'bower_components/copaair-widgets/lang/'
    },
    copaApiUrls = {
        allDestinations: 'https://copaapi.nbxapps.com/destinations/',
        countryDestinations: 'https://copaapi.nbxapps.com/destinations/?country='
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
            callback: (html) => {
                this.$booking.html(html);

                // When finished, build all the widgets
                this.setupSelectMenus();

                // setup datepicker
                var datepicker = new Datepicker();
                datepicker.render();

                // Autocomplete widgets
                this.initAutocomplete();

                //set form defualt values afected
                //by datepicker
                this.setFormValues(datepicker);

                //datepicker events that modify
                //form values
                this.datepickerFormEvents(datepicker);

                var book = new Book();
            }
        });
    }

    /**
     * Setup autocomplete destination widgets
     * @see module:Autocomplete
     */
    initAutocomplete() {
        // Init class with options
        var autocomplete = new Autocomplete({
            lang: this.options.lang,
            select: (e, ui) => {
                console.log(e.target, ui.item.display);
                console.log(ui.item);
                $(e.target).attr('value', ui.item.display);
            },
            // @todo Make this dynamic
            position: {
                my: 'left bottom',
                at: 'left top'
            }
        });

        // Build
        autocomplete.start(function() {
            $('.js-booking-autocomplete').each(function() {
                autocomplete.render(this);
            });
        });
    }

    /**
     * Replaces select menus with custom UI widgets
     */
    setupSelectMenus() {
        $('.js-selectmenu').selectmenu();
        return this;
    }

    /**
     * Fetch and store Copa destinations from API
     * @param  {Function} cb Callback function when destinations are ready
     * @return {void}
     */
    fetchDestinations(cb) {
        var url = copaApiUrls.allDestinations,
            lang = this.options.lang
        ;

        this.destinations = [];

        $.getJSON(url, (destinations) => {
            // Sort destinations
            destinations.sort(function(a, b) {
                if (a.name[lang] > b.name[lang]) return 1;
                if (a.name[lang] < b.name[lang]) return -1;

                return 0;
            });

            var destinationsData = [];

            // Organize data result
            $.each(destinations, function(i, dest) {
                var tempLabel = '<b>' + dest.name[lang] + ', ' + dest.country +
                    '</b><span class="code"> | ' + dest.id + '</span>';
                var tempValue = dest.id;
                var textValue = dest.name[lang] + ', ' + dest.id;

                destinationsData.push({
                    label: tempLabel,
                    value: tempValue,
                    display: textValue
                });
            });

            // Store result
            this.destinations = destinationsData;

            // Callback
            if (typeof cb === 'function') {
                cb();
            }
        });

        return this;
    }

    /**
     * Bind events related to booking interaction
     */
    bookingEvents() {
        var $form = $('.copaair-booking');
        // Load form submition events
        this.submitForm($form);
    }

    /**
     * Since some defaults values are set on the datepickers
     * the form have some hidden inputs that use this values
     */
    setFormValues(datepicker) {

        var $form = this.$booking,

        // get current datepickers dates
        departureDate = $(datepicker.options.departureSelector).datepicker('getDate'),
        returnDate = $(datepicker.options.returnSelector).datepicker('getDate');

        // Lest migrate date pickers date to the hidden
        // date form fields. This fields are required by
        // Copa Booking

        $form.find('input[name="inboundOption.departureDay"]')
            .attr('value', returnDate.getUTCDate());
        $form.find('input[name="inboundOption.departureMonth"]')
            .attr('value', returnDate.getMonth() + 1);
        $form.find('input[name="inboundOption.departureYear"]')
            .attr('value', returnDate.getFullYear());

        // set outboundOption departure dates
        $form.find('input[name="outboundOption.departureDay"]')
            .attr('value', departureDate.getUTCDate());
        $form.find('input[name="outboundOption.departureMonth"]')
            .attr('value', departureDate.getMonth() + 1);
        $form.find('input[name="outboundOption.departureYear"]')
            .attr('value', departureDate.getFullYear());
    }


    datepickerFormEvents(datepicker) {

        var $departureField = $(datepicker.options.departureSelector),
            $returnField = $(datepicker.options.returnSelector),
            $form = this.$booking;

        var onSelectOutbound = function(dateText, inst) {
            var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

            //this sets the inbound date picker to a week later of current selection
            var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
            $returnField.datepicker('setDate', weeklater);

            $form.find('input[name="inboundOption.departureDay"]')
                .attr('value', weeklater.getUTCDate());
            $form.find('input[name="inboundOption.departureMonth"]')
                .attr('value', weeklater.getMonth() + 1);
            $form.find('input[name="inboundOption.departureYear"]')
                .attr('value', weeklater.getFullYear());

            //this helps that the user doesnt travel back in time
            $returnField.datepicker('option', 'minDate', date);
            $form.find('input[name="outboundOption.departureDay"]')
                .attr('value', inst.selectedDay);
            $form.find('input[name="outboundOption.departureMonth"]')
                .attr('value', inst.selectedMonth + 1);
            $form.find('input[name="outboundOption.departureYear"]')
                .attr('value', inst.selectedYear);
        };

        var onSelectInbound = function(dateText, inst) {
            $form.find('input[name="inboundOption.departureDay"]')
                .attr('value', inst.selectedDay);
            $form.find('input[name="inboundOption.departureMonth"]')
                .attr('value', inst.selectedMonth + 1);
            $form.find('input[name="inboundOption.departureYear"]')
                .attr('value', inst.selectedYear);
        };

        $departureField.datepicker('option', 'onSelect', onSelectOutbound);
        $returnField.datepicker('option', 'onSelect', onSelectInbound);
    }

    /**
     * submitForm
     * captures form submit event and process it
     */
    submitForm(form) {
        var _this = this;

        form.on('submit', function(event) {
            event.preventDefault();
            var httpQuery = $(this).serialize();
            var url = _this.options.formUrl;

            if(_this.validationError(form)){
                console.log('error in the form');
            }
            else{
                var searchWindow = window.open(url + httpQuery, '_blank');
                searchWindow.focus();
            }
        });
    }
}

module.exports = Booking;
