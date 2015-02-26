// Create the defaults
var $ = require('jquery'),
    defaults = {
        lang: 'es',
        origin: 'all',
        destination: 'all',
        templatePath: 'bower_components/copaair-widgets/templates/booking.hbs',
        languagePath: 'bower_components/copaair-widgets/language/',
        formUrl: 'https://bookings.copaair.com/CMGS/' +
                       'AirLowFareSearchExternal.do?'
    },
    copaApiUrls = {
        allDestinations: 'https://copaapi.nbxapps.com/destinations/',
        countryDestinations: 'https://copaapi.nbxapps.com/destinations/?country='
    }
;

class Booking {

    /**
     * Widget constructor
     *
     * @param {Object} selector element DOM object
     * @param {Object} options  Options passed on plugin instance
     */
    constructor(element, options) {
        this.$booking = $(element);

        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;

        $.getJSON(
            this.options.languagePath + this.options.lang + '.json',
            (languageStrings) => {
                this.languageStrings = languageStrings;

                // Compile template
                this.compileTemplate(() => {

                    // When finished, build all the widgets
                    this.setupSelectMenus();
                    this.setupAutocomplete();
                    this.setupDatePickers();

                });
            }
        );
    }

    /**
     * Compiles Handlebars template and inserts into DOM.
     *
     * @param  {Function} cb Callback function when template is finished compiling
     * @return void
     */
    compileTemplate(cb) {
        if (typeof Handlebars !== 'undefined' && Handlebars !== null) {
            $.ajax({
                url: this.options.templatePath,
                success: (source) => {
                    var template = Handlebars.compile(source);

                    // Load localized strings into the template
                    var html = template(this.languageStrings);
                    this.$booking.html(html);
                },
                complete: function() {
                    if (typeof cb === 'function') {
                        cb();
                    }
                }
            });
        } else {
            console.error('This plugin requires Handlebars.js');
        }

        return this;
    }

    /**
     * Replaces select menus with custom UI widgets
     *
     * @return {void}
     */
    setupSelectMenus() {
        $('.js-selectmenu').selectmenu();
        return this;
    }

    /**
     * Setup autocomplete jQuery UI widget.
     *
     * @return {void}
     */
    setupAutocomplete() {
        var _this = this;

        /**
         * Callback chain
         *
         * 1. Fetch destinations
         * 2. Setup autocomplete
         * 3. Init combobox
         */
        this.fetchDestinations(() => {

            // [2]
            this.buildAutocomplete(() => {

                console.log('boomshakalaka');

            });

        });

        return this;
    }

    /**
     * Fetch and store Copa destinations from API
     *
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
     * Autocomplete menu widget
     *
     * @param  {Function} cb Callback when widget is ready for use
     * @return {void}
     */
    buildAutocomplete(cb) {
        var _this = this;

        this.$booking.find('.js-booking-autocomplete').each(function createAutocomplete() {
            var $this = $(this).hide(),
                sourceValue = $this.val(),
                sourcePlaceholder = $this.attr('placeholder'),
                fieldType = $this.data('input-field')
            ;

            var $input = $('<input />')
                .val(sourceValue)
                .attr('type', 'text')
                .attr('placeholder', sourcePlaceholder)
            ;

            // Add autocomplete functionality
            $input.autocomplete({
                delay: 0,
                minLength: 0,
                appendTo: _this.$booking,
                source: _this.destinations,
                select: function(event, ui) {
                    $input.val(ui.item.display);

                    if (fieldType === 'origin' || fieldType === 'destination') {
                        $('.js-' + fieldType + '-input-outbound').val(ui.item.value);
                        $('.js-' + fieldType + '-input-inbound').val(ui.item.value);
                    } else {
                        console.log('The form needs two trip type inputs: origin and destination');
                    }

                    return false;
                }
            });

            // Add styling
            $input
                .addClass('copaair-booking-control  copaair-booking-combobox-input')
                .addClass('ui-widget  ui-widget-content  ui-state-default');

            // Insert into DOM
            $input.insertAfter($this);

            // Overwrite autocomplete item rendering with custom markup
            $input.autocomplete('instance')._renderItem = function(ul, item) {
                return $('<li>')
                    .append(item.label)
                    .appendTo(ul);
            };

            // Custom filtering function
            $.ui.autocomplete.filter = function autoCompleteFilter(array, term) {
                var matcher = new RegExp('\\b' + $.ui.autocomplete.escapeRegex(term), 'i');
                return $.grep(array, function (value) {
                    return matcher.test(value.label || value.value || value);
                });
            };
        });

        // Callback
        if (typeof cb === 'function') {
            cb();
        }

        return this;
    }

    /**
    * Setup datepickers
    *
    * @return void
    */
    setupDatePickers() {
        $('.copaair-booking-datepicker-departure').datepicker({
            minDate: new Date()
        });
        $('.copaair-booking-datepicker-return').datepicker({
            minDate: new Date()
        });

        var today = new Date();
        var weekLater = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        // the picker.
        $('.copaair-booking-datepicker-departure').datepicker("setDate", today);
        $('.copaair-booking-datepicker-return').datepicker("setDate", weekLater);

        this.defaultDates();

        return this;
    }

    /**
     * Set hidden date inputs with default date values
     */
    defaultDates() {
        var $form = this.$booking;

        var $departurePicker = $('.copaair-booking-datepicker-departure')
            .datepicker('getDate');
        var $returnPicker = $('.copaair-booking-datepicker-return')
            .datepicker('getDate');

        $form.find('input[name="inboundOption.departureDay"]')
            .attr('value', $returnPicker.getUTCDate());
        $form.find('input[name="inboundOption.departureMonth"]')
            .attr('value', $returnPicker.getMonth() + 1);
        $form.find('input[name="inboundOption.departureYear"]')
            .attr('value', $returnPicker.getFullYear());

        $form.find('input[name="outboundOption.departureDay"]')
            .attr('value', $departurePicker.getUTCDate());
        $form.find('input[name="outboundOption.departureMonth"]')
            .attr('value', $departurePicker.getMonth() + 1);
        $form.find('input[name="outboundOption.departureYear"]')
            .attr('value', $departurePicker.getFullYear());

        return this;
    }

    /**
     * Bind events related to booking interaction
     */
    bookingEvents() {
        var $form = $('.copaair-booking'),
            $departurePicker = $('.copaair-booking-datepicker-departure'),
            $returnPicker = $('.copaair-booking-datepicker-return'),
            $origin = $('.copaair-booking-origin'),
            $destination = $('.copaair-booking-destination')
        ;

        var onSelectOutbound = function(dateText, inst) {
            var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

            //this sets the inbound date picker to a week later of current selection
            var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
            $returnPicker.datepicker('setDate', weeklater);

            $form.find('input[name="inboundOption.departureDay"]')
                .attr('value', weeklater.getUTCDate());
            $form.find('input[name="inboundOption.departureMonth"]')
                .attr('value', weeklater.getMonth() + 1);
            $form.find('input[name="inboundOption.departureYear"]')
                .attr('value', weeklater.getFullYear());

            //this helps that the user doesnt travel back in time
            $returnPicker.datepicker('option', 'minDate', date);
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

        $departurePicker.datepicker('option', 'onSelect', onSelectOutbound);
        $returnPicker.datepicker('option', 'onSelect', onSelectInbound);

        // Load form submition events
        this.submitForm($form);
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
