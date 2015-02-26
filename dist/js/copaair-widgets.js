(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

(function (factory) {
    "use strict";

    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["jquery"], factory);
    } else if (typeof exports !== "undefined") {
        // Node/CommonJS
        factory((typeof window !== "undefined" ? window.$ : typeof global !== "undefined" ? global.$ : null));
    } else {
        // Browser globals
        factory(jQuery);
    }
})(function ($) {
    "use strict";

    var Booking = require("./widgets/Booking"),
        Signup = require("./widgets/Signup");

    /**
     * Bind widgets to jQuery object prototype.
     *
     * @param  {Object} options Options passed to override defaults.
     * @return {Object}         Current object instance
     */
    $.fn.copaairBooking = function copaairBooking(options) {
        return this.each(function () {
            if (!$.data(this, "plugin_copaairBooking")) {
                $.data(this, "plugin_copaairBooking", new Booking(this, options));
            }
        });
    };

    // $.fn.copaairSignup = function copaairSignup(options) {
    //     return this.each(function() {
    //         if (!$.data(this, 'plugin_copaairSignup')) {
    //             $.data(this, 'plugin_copaairSignup', new Signup(this, options));
    //         }
    //     });
    // };
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./widgets/Booking":2,"./widgets/Signup":3}],2:[function(require,module,exports){
(function (global){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// Create the defaults
var $ = (typeof window !== "undefined" ? window.$ : typeof global !== "undefined" ? global.$ : null),
    defaults = {
    lang: "es",
    origin: "all",
    destination: "all",
    templatePath: "bower_components/copaair-widgets/templates/booking.hbs",
    languagePath: "bower_components/copaair-widgets/language/",
    formUrl: "https://bookings.copaair.com/CMGS/" + "AirLowFareSearchExternal.do?"
},
    copaApiUrls = {
    allDestinations: "https://copaapi.nbxapps.com/destinations/",
    countryDestinations: "https://copaapi.nbxapps.com/destinations/?country="
};

var Booking = (function () {

    /**
     * Widget constructor
     *
     * @param {Object} selector element DOM object
     * @param {Object} options  Options passed on plugin instance
     */

    function Booking(element, options) {
        var _this = this;

        _classCallCheck(this, Booking);

        this.$booking = $(element);

        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;

        $.getJSON(this.options.languagePath + this.options.lang + ".json", function (languageStrings) {
            _this.languageStrings = languageStrings;

            // Compile template
            _this.compileTemplate(function () {

                // When finished, build all the widgets
                _this.setupSelectMenus();
                _this.setupAutocomplete();
                _this.setupDatePickers();
            });
        });
    }

    _prototypeProperties(Booking, null, {
        compileTemplate: {

            /**
             * Compiles Handlebars template and inserts into DOM.
             *
             * @param  {Function} cb Callback function when template is finished compiling
             * @return void
             */

            value: function compileTemplate(cb) {
                var _this = this;

                if (typeof Handlebars !== "undefined" && Handlebars !== null) {
                    $.ajax({
                        url: this.options.templatePath,
                        success: function (source) {
                            var template = Handlebars.compile(source);

                            // Load localized strings into the template
                            var html = template(_this.languageStrings);
                            _this.$booking.html(html);
                        },
                        complete: function complete() {
                            if (typeof cb === "function") {
                                cb();
                            }
                        }
                    });
                } else {
                    console.error("This plugin requires Handlebars.js");
                }

                return this;
            },
            writable: true,
            configurable: true
        },
        setupSelectMenus: {

            /**
             * Replaces select menus with custom UI widgets
             *
             * @return {void}
             */

            value: function setupSelectMenus() {
                $(".js-selectmenu").selectmenu();
                return this;
            },
            writable: true,
            configurable: true
        },
        setupAutocomplete: {

            /**
             * Setup autocomplete jQuery UI widget.
             *
             * @return {void}
             */

            value: function setupAutocomplete() {
                var _this2 = this;

                var _this = this;

                /**
                 * Callback chain
                 *
                 * 1. Fetch destinations
                 * 2. Setup autocomplete
                 * 3. Init combobox
                 */
                this.fetchDestinations(function () {

                    // [2]
                    _this2.buildAutocomplete(function () {

                        console.log("boomshakalaka");
                    });
                });

                return this;
            },
            writable: true,
            configurable: true
        },
        fetchDestinations: {

            /**
             * Fetch and store Copa destinations from API
             *
             * @param  {Function} cb Callback function when destinations are ready
             * @return {void}
             */

            value: function fetchDestinations(cb) {
                var _this = this;

                var url = copaApiUrls.allDestinations,
                    lang = this.options.lang;

                this.destinations = [];

                $.getJSON(url, function (destinations) {
                    // Sort destinations
                    destinations.sort(function (a, b) {
                        if (a.name[lang] > b.name[lang]) return 1;
                        if (a.name[lang] < b.name[lang]) return -1;

                        return 0;
                    });

                    var destinationsData = [];

                    // Organize data result
                    $.each(destinations, function (i, dest) {
                        var tempLabel = "<b>" + dest.name[lang] + ", " + dest.country + "</b><span class=\"code\"> | " + dest.id + "</span>";
                        var tempValue = dest.id;
                        var textValue = dest.name[lang] + ", " + dest.id;

                        destinationsData.push({
                            label: tempLabel,
                            value: tempValue,
                            display: textValue
                        });
                    });

                    // Store result
                    _this.destinations = destinationsData;

                    // Callback
                    if (typeof cb === "function") {
                        cb();
                    }
                });

                return this;
            },
            writable: true,
            configurable: true
        },
        buildAutocomplete: {

            /**
             * Autocomplete menu widget
             *
             * @param  {Function} cb Callback when widget is ready for use
             * @return {void}
             */

            value: function buildAutocomplete(cb) {
                var _this = this;

                this.$booking.find(".js-booking-autocomplete").each(function createAutocomplete() {
                    var $this = $(this).hide(),
                        sourceValue = $this.val(),
                        sourcePlaceholder = $this.attr("placeholder"),
                        fieldType = $this.data("input-field");

                    var $input = $("<input />").val(sourceValue).attr("type", "text").attr("placeholder", sourcePlaceholder);

                    // Add autocomplete functionality
                    $input.autocomplete({
                        delay: 0,
                        minLength: 0,
                        appendTo: _this.$booking,
                        source: _this.destinations,
                        select: function select(event, ui) {
                            $input.val(ui.item.display);

                            if (fieldType === "origin" || fieldType === "destination") {
                                $(".js-" + fieldType + "-input-outbound").val(ui.item.value);
                                $(".js-" + fieldType + "-input-inbound").val(ui.item.value);
                            } else {
                                console.log("The form needs two trip type inputs: origin and destination");
                            }

                            return false;
                        }
                    });

                    // Add styling
                    $input.addClass("copaair-booking-control  copaair-booking-combobox-input").addClass("ui-widget  ui-widget-content  ui-state-default");

                    // Insert into DOM
                    $input.insertAfter($this);

                    // Overwrite autocomplete item rendering with custom markup
                    $input.autocomplete("instance")._renderItem = function (ul, item) {
                        return $("<li>").append(item.label).appendTo(ul);
                    };

                    // Custom filtering function
                    $.ui.autocomplete.filter = function autoCompleteFilter(array, term) {
                        var matcher = new RegExp("\\b" + $.ui.autocomplete.escapeRegex(term), "i");
                        return $.grep(array, function (value) {
                            return matcher.test(value.label || value.value || value);
                        });
                    };
                });

                // Callback
                if (typeof cb === "function") {
                    cb();
                }

                return this;
            },
            writable: true,
            configurable: true
        },
        setupDatePickers: {

            /**
            * Setup datepickers
            *
            * @return void
            */

            value: function setupDatePickers() {
                $(".copaair-booking-datepicker-departure").datepicker({
                    minDate: new Date()
                });
                $(".copaair-booking-datepicker-return").datepicker({
                    minDate: new Date()
                });

                var today = new Date();
                var weekLater = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

                // the picker.
                $(".copaair-booking-datepicker-departure").datepicker("setDate", today);
                $(".copaair-booking-datepicker-return").datepicker("setDate", weekLater);

                this.defaultDates();

                return this;
            },
            writable: true,
            configurable: true
        },
        defaultDates: {

            /**
             * Set hidden date inputs with default date values
             */

            value: function defaultDates() {
                var $form = this.$booking;

                var $departurePicker = $(".copaair-booking-datepicker-departure").datepicker("getDate");
                var $returnPicker = $(".copaair-booking-datepicker-return").datepicker("getDate");

                $form.find("input[name=\"inboundOption.departureDay\"]").attr("value", $returnPicker.getUTCDate());
                $form.find("input[name=\"inboundOption.departureMonth\"]").attr("value", $returnPicker.getMonth() + 1);
                $form.find("input[name=\"inboundOption.departureYear\"]").attr("value", $returnPicker.getFullYear());

                $form.find("input[name=\"outboundOption.departureDay\"]").attr("value", $departurePicker.getUTCDate());
                $form.find("input[name=\"outboundOption.departureMonth\"]").attr("value", $departurePicker.getMonth() + 1);
                $form.find("input[name=\"outboundOption.departureYear\"]").attr("value", $departurePicker.getFullYear());

                return this;
            },
            writable: true,
            configurable: true
        },
        bookingEvents: {

            /**
             * Bind events related to booking interaction
             */

            value: function bookingEvents() {
                var $form = $(".copaair-booking"),
                    $departurePicker = $(".copaair-booking-datepicker-departure"),
                    $returnPicker = $(".copaair-booking-datepicker-return"),
                    $origin = $(".copaair-booking-origin"),
                    $destination = $(".copaair-booking-destination");

                var onSelectOutbound = function onSelectOutbound(dateText, inst) {
                    var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

                    //this sets the inbound date picker to a week later of current selection
                    var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
                    $returnPicker.datepicker("setDate", weeklater);

                    $form.find("input[name=\"inboundOption.departureDay\"]").attr("value", weeklater.getUTCDate());
                    $form.find("input[name=\"inboundOption.departureMonth\"]").attr("value", weeklater.getMonth() + 1);
                    $form.find("input[name=\"inboundOption.departureYear\"]").attr("value", weeklater.getFullYear());

                    //this helps that the user doesnt travel back in time
                    $returnPicker.datepicker("option", "minDate", date);
                    $form.find("input[name=\"outboundOption.departureDay\"]").attr("value", inst.selectedDay);
                    $form.find("input[name=\"outboundOption.departureMonth\"]").attr("value", inst.selectedMonth + 1);
                    $form.find("input[name=\"outboundOption.departureYear\"]").attr("value", inst.selectedYear);
                };

                var onSelectInbound = function onSelectInbound(dateText, inst) {
                    $form.find("input[name=\"inboundOption.departureDay\"]").attr("value", inst.selectedDay);
                    $form.find("input[name=\"inboundOption.departureMonth\"]").attr("value", inst.selectedMonth + 1);
                    $form.find("input[name=\"inboundOption.departureYear\"]").attr("value", inst.selectedYear);
                };

                $departurePicker.datepicker("option", "onSelect", onSelectOutbound);
                $returnPicker.datepicker("option", "onSelect", onSelectInbound);

                // Load form submition events
                this.submitForm($form);
            },
            writable: true,
            configurable: true
        },
        submitForm: {

            /**
             * submitForm
             * captures form submit event and process it
             */

            value: function submitForm(form) {
                var _this = this;

                form.on("submit", function (event) {
                    event.preventDefault();
                    var httpQuery = $(this).serialize();
                    var url = _this.options.formUrl;

                    if (_this.validationError(form)) {
                        console.log("error in the form");
                    } else {
                        var searchWindow = window.open(url + httpQuery, "_blank");
                        searchWindow.focus();
                    }
                });
            },
            writable: true,
            configurable: true
        }
    });

    return Booking;
})();

module.exports = Booking;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
"use strict";

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2luZGV4LmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGEvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL0Jvb2tpbmcuanMiLCJzcmMvanMvd2lkZ2V0cy9TaWdudXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQSxBQUFDLENBQUEsVUFBVSxPQUFPLEVBQUU7QUFDaEIsZ0JBQVksQ0FBQzs7QUFFYixRQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFOztBQUU1QyxjQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUMvQixNQUFNLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFOztBQUV2QyxlQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDOUIsTUFBTTs7QUFFSCxlQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbkI7Q0FDSixDQUFBLENBQUMsVUFBUyxDQUFDLEVBQUU7QUFDVixnQkFBWSxDQUFDOztBQUViLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUN0QyxNQUFNLEdBQUksT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQ3hDOzs7Ozs7OztBQVFELEtBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxHQUFHLFNBQVMsY0FBYyxDQUFDLE9BQU8sRUFBRTtBQUNuRCxlQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBVztBQUN4QixnQkFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHVCQUF1QixDQUFDLEVBQUU7QUFDeEMsaUJBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFF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QUFDLElBQUksRUFBRTtBQUNiLG9CQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7O0FBRWpCLG9CQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFTLEtBQUssRUFBRTtBQUM5Qix5QkFBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3ZCLHdCQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDcEMsd0JBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDOztBQUVoQyx3QkFBRyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFDO0FBQzNCLCtCQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7cUJBQ3BDLE1BQ0c7QUFDQSw0QkFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzFELG9DQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQ3hCO2lCQUNKLENBQUMsQ0FBQzthQUNOOzs7Ozs7V0E5VkMsT0FBTzs7O0FBaVdiLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOzs7OztBQ2xYekI7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIE5vZGUvQ29tbW9uSlNcbiAgICAgICAgZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG59KGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgQm9va2luZyA9IHJlcXVpcmUoJy4vd2lkZ2V0cy9Cb29raW5nJyksXG4gICAgICAgIFNpZ251cCAgPSByZXF1aXJlKCcuL3dpZGdldHMvU2lnbnVwJylcbiAgICA7XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHdpZGdldHMgdG8galF1ZXJ5IG9iamVjdCBwcm90b3R5cGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBwYXNzZWQgdG8gb3ZlcnJpZGUgZGVmYXVsdHMuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgIEN1cnJlbnQgb2JqZWN0IGluc3RhbmNlXG4gICAgICovXG4gICAgJC5mbi5jb3BhYWlyQm9va2luZyA9IGZ1bmN0aW9uIGNvcGFhaXJCb29raW5nKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghJC5kYXRhKHRoaXMsICdwbHVnaW5fY29wYWFpckJvb2tpbmcnKSkge1xuICAgICAgICAgICAgICAgICQuZGF0YSh0aGlzLCAncGx1Z2luX2NvcGFhaXJCb29raW5nJywgbmV3IEJvb2tpbmcodGhpcywgb3B0aW9ucykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gJC5mbi5jb3BhYWlyU2lnbnVwID0gZnVuY3Rpb24gY29wYWFpclNpZ251cChvcHRpb25zKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICBpZiAoISQuZGF0YSh0aGlzLCAncGx1Z2luX2NvcGFhaXJTaWdudXAnKSkge1xuICAgIC8vICAgICAgICAgICAgICQuZGF0YSh0aGlzLCAncGx1Z2luX2NvcGFhaXJTaWdudXAnLCBuZXcgU2lnbnVwKHRoaXMsIG9wdGlvbnMpKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfTtcbn0pKTtcbiIsIi8vIENyZWF0ZSB0aGUgZGVmYXVsdHNcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIG9yaWdpbjogJ2FsbCcsXG4gICAgICAgIGRlc3RpbmF0aW9uOiAnYWxsJyxcbiAgICAgICAgdGVtcGxhdGVQYXRoOiAnYm93ZXJfY29tcG9uZW50cy9jb3BhYWlyLXdpZGdldHMvdGVtcGxhdGVzL2Jvb2tpbmcuaGJzJyxcbiAgICAgICAgbGFuZ3VhZ2VQYXRoOiAnYm93ZXJfY29tcG9uZW50cy9jb3BhYWlyLXdpZGdldHMvbGFuZ3VhZ2UvJyxcbiAgICAgICAgZm9ybVVybDogJ2h0dHBzOi8vYm9va2luZ3MuY29wYWFpci5jb20vQ01HUy8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgJ0Fpckxvd0ZhcmVTZWFyY2hFeHRlcm5hbC5kbz8nXG4gICAgfSxcbiAgICBjb3BhQXBpVXJscyA9IHtcbiAgICAgICAgYWxsRGVzdGluYXRpb25zOiAnaHR0cHM6Ly9jb3BhYXBpLm5ieGFwcHMuY29tL2Rlc3RpbmF0aW9ucy8nLFxuICAgICAgICBjb3VudHJ5RGVzdGluYXRpb25zOiAnaHR0cHM6Ly9jb3BhYXBpLm5ieGFwcHMuY29tL2Rlc3RpbmF0aW9ucy8/Y291bnRyeT0nXG4gICAgfVxuO1xuXG5jbGFzcyBCb29raW5nIHtcblxuICAgIC8qKlxuICAgICAqIFdpZGdldCBjb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yIGVsZW1lbnQgRE9NIG9iamVjdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zICBPcHRpb25zIHBhc3NlZCBvbiBwbHVnaW4gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuJGJvb2tpbmcgPSAkKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcblxuICAgICAgICAkLmdldEpTT04oXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubGFuZ3VhZ2VQYXRoICsgdGhpcy5vcHRpb25zLmxhbmcgKyAnLmpzb24nLFxuICAgICAgICAgICAgKGxhbmd1YWdlU3RyaW5ncykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VTdHJpbmdzID0gbGFuZ3VhZ2VTdHJpbmdzO1xuXG4gICAgICAgICAgICAgICAgLy8gQ29tcGlsZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGlsZVRlbXBsYXRlKCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIGZpbmlzaGVkLCBidWlsZCBhbGwgdGhlIHdpZGdldHNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cFNlbGVjdE1lbnVzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBBdXRvY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cERhdGVQaWNrZXJzKCk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21waWxlcyBIYW5kbGViYXJzIHRlbXBsYXRlIGFuZCBpbnNlcnRzIGludG8gRE9NLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNiIENhbGxiYWNrIGZ1bmN0aW9uIHdoZW4gdGVtcGxhdGUgaXMgZmluaXNoZWQgY29tcGlsaW5nXG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgY29tcGlsZVRlbXBsYXRlKGNiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgSGFuZGxlYmFycyAhPT0gJ3VuZGVmaW5lZCcgJiYgSGFuZGxlYmFycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMub3B0aW9ucy50ZW1wbGF0ZVBhdGgsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHNvdXJjZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoc291cmNlKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGxvY2FsaXplZCBzdHJpbmdzIGludG8gdGhlIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgIHZhciBodG1sID0gdGVtcGxhdGUodGhpcy5sYW5ndWFnZVN0cmluZ3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRib29raW5nLmh0bWwoaHRtbCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoaXMgcGx1Z2luIHJlcXVpcmVzIEhhbmRsZWJhcnMuanMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIHNlbGVjdCBtZW51cyB3aXRoIGN1c3RvbSBVSSB3aWRnZXRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldHVwU2VsZWN0TWVudXMoKSB7XG4gICAgICAgICQoJy5qcy1zZWxlY3RtZW51Jykuc2VsZWN0bWVudSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCBhdXRvY29tcGxldGUgalF1ZXJ5IFVJIHdpZGdldC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0dXBBdXRvY29tcGxldGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIGNoYWluXG4gICAgICAgICAqXG4gICAgICAgICAqIDEuIEZldGNoIGRlc3RpbmF0aW9uc1xuICAgICAgICAgKiAyLiBTZXR1cCBhdXRvY29tcGxldGVcbiAgICAgICAgICogMy4gSW5pdCBjb21ib2JveFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mZXRjaERlc3RpbmF0aW9ucygoKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIFsyXVxuICAgICAgICAgICAgdGhpcy5idWlsZEF1dG9jb21wbGV0ZSgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYm9vbXNoYWthbGFrYScpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBhbmQgc3RvcmUgQ29wYSBkZXN0aW5hdGlvbnMgZnJvbSBBUElcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYiBDYWxsYmFjayBmdW5jdGlvbiB3aGVuIGRlc3RpbmF0aW9ucyBhcmUgcmVhZHlcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGZldGNoRGVzdGluYXRpb25zKGNiKSB7XG4gICAgICAgIHZhciB1cmwgPSBjb3BhQXBpVXJscy5hbGxEZXN0aW5hdGlvbnMsXG4gICAgICAgICAgICBsYW5nID0gdGhpcy5vcHRpb25zLmxhbmdcbiAgICAgICAgO1xuXG4gICAgICAgIHRoaXMuZGVzdGluYXRpb25zID0gW107XG5cbiAgICAgICAgJC5nZXRKU09OKHVybCwgKGRlc3RpbmF0aW9ucykgPT4ge1xuICAgICAgICAgICAgLy8gU29ydCBkZXN0aW5hdGlvbnNcbiAgICAgICAgICAgIGRlc3RpbmF0aW9ucy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYS5uYW1lW2xhbmddID4gYi5uYW1lW2xhbmddKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICBpZiAoYS5uYW1lW2xhbmddIDwgYi5uYW1lW2xhbmddKSByZXR1cm4gLTE7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgZGVzdGluYXRpb25zRGF0YSA9IFtdO1xuXG4gICAgICAgICAgICAvLyBPcmdhbml6ZSBkYXRhIHJlc3VsdFxuICAgICAgICAgICAgJC5lYWNoKGRlc3RpbmF0aW9ucywgZnVuY3Rpb24oaSwgZGVzdCkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wTGFiZWwgPSAnPGI+JyArIGRlc3QubmFtZVtsYW5nXSArICcsICcgKyBkZXN0LmNvdW50cnkgK1xuICAgICAgICAgICAgICAgICAgICAnPC9iPjxzcGFuIGNsYXNzPVwiY29kZVwiPiB8ICcgKyBkZXN0LmlkICsgJzwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wVmFsdWUgPSBkZXN0LmlkO1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0VmFsdWUgPSBkZXN0Lm5hbWVbbGFuZ10gKyAnLCAnICsgZGVzdC5pZDtcblxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uc0RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0ZW1wTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0ZW1wVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRleHRWYWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFN0b3JlIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbnNEYXRhO1xuXG4gICAgICAgICAgICAvLyBDYWxsYmFja1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF1dG9jb21wbGV0ZSBtZW51IHdpZGdldFxuICAgICAqXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNiIENhbGxiYWNrIHdoZW4gd2lkZ2V0IGlzIHJlYWR5IGZvciB1c2VcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGJ1aWxkQXV0b2NvbXBsZXRlKGNiKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy4kYm9va2luZy5maW5kKCcuanMtYm9va2luZy1hdXRvY29tcGxldGUnKS5lYWNoKGZ1bmN0aW9uIGNyZWF0ZUF1dG9jb21wbGV0ZSgpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcykuaGlkZSgpLFxuICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlID0gJHRoaXMudmFsKCksXG4gICAgICAgICAgICAgICAgc291cmNlUGxhY2Vob2xkZXIgPSAkdGhpcy5hdHRyKCdwbGFjZWhvbGRlcicpLFxuICAgICAgICAgICAgICAgIGZpZWxkVHlwZSA9ICR0aGlzLmRhdGEoJ2lucHV0LWZpZWxkJylcbiAgICAgICAgICAgIDtcblxuICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQoJzxpbnB1dCAvPicpXG4gICAgICAgICAgICAgICAgLnZhbChzb3VyY2VWYWx1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cigndHlwZScsICd0ZXh0JylcbiAgICAgICAgICAgICAgICAuYXR0cigncGxhY2Vob2xkZXInLCBzb3VyY2VQbGFjZWhvbGRlcilcbiAgICAgICAgICAgIDtcblxuICAgICAgICAgICAgLy8gQWRkIGF1dG9jb21wbGV0ZSBmdW5jdGlvbmFsaXR5XG4gICAgICAgICAgICAkaW5wdXQuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDAsXG4gICAgICAgICAgICAgICAgYXBwZW5kVG86IF90aGlzLiRib29raW5nLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogX3RoaXMuZGVzdGluYXRpb25zLFxuICAgICAgICAgICAgICAgIHNlbGVjdDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwodWkuaXRlbS5kaXNwbGF5KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRUeXBlID09PSAnb3JpZ2luJyB8fCBmaWVsZFR5cGUgPT09ICdkZXN0aW5hdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy0nICsgZmllbGRUeXBlICsgJy1pbnB1dC1vdXRib3VuZCcpLnZhbCh1aS5pdGVtLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy0nICsgZmllbGRUeXBlICsgJy1pbnB1dC1pbmJvdW5kJykudmFsKHVpLml0ZW0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZSBmb3JtIG5lZWRzIHR3byB0cmlwIHR5cGUgaW5wdXRzOiBvcmlnaW4gYW5kIGRlc3RpbmF0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBzdHlsaW5nXG4gICAgICAgICAgICAkaW5wdXRcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2NvcGFhaXItYm9va2luZy1jb250cm9sICBjb3BhYWlyLWJvb2tpbmctY29tYm9ib3gtaW5wdXQnKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygndWktd2lkZ2V0ICB1aS13aWRnZXQtY29udGVudCAgdWktc3RhdGUtZGVmYXVsdCcpO1xuXG4gICAgICAgICAgICAvLyBJbnNlcnQgaW50byBET01cbiAgICAgICAgICAgICRpbnB1dC5pbnNlcnRBZnRlcigkdGhpcyk7XG5cbiAgICAgICAgICAgIC8vIE92ZXJ3cml0ZSBhdXRvY29tcGxldGUgaXRlbSByZW5kZXJpbmcgd2l0aCBjdXN0b20gbWFya3VwXG4gICAgICAgICAgICAkaW5wdXQuYXV0b2NvbXBsZXRlKCdpbnN0YW5jZScpLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24odWwsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJCgnPGxpPicpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoaXRlbS5sYWJlbClcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKHVsKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIEN1c3RvbSBmaWx0ZXJpbmcgZnVuY3Rpb25cbiAgICAgICAgICAgICQudWkuYXV0b2NvbXBsZXRlLmZpbHRlciA9IGZ1bmN0aW9uIGF1dG9Db21wbGV0ZUZpbHRlcihhcnJheSwgdGVybSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgnXFxcXGInICsgJC51aS5hdXRvY29tcGxldGUuZXNjYXBlUmVnZXgodGVybSksICdpJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICQuZ3JlcChhcnJheSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVyLnRlc3QodmFsdWUubGFiZWwgfHwgdmFsdWUudmFsdWUgfHwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogU2V0dXAgZGF0ZXBpY2tlcnNcbiAgICAqXG4gICAgKiBAcmV0dXJuIHZvaWRcbiAgICAqL1xuICAgIHNldHVwRGF0ZVBpY2tlcnMoKSB7XG4gICAgICAgICQoJy5jb3BhYWlyLWJvb2tpbmctZGF0ZXBpY2tlci1kZXBhcnR1cmUnKS5kYXRlcGlja2VyKHtcbiAgICAgICAgICAgIG1pbkRhdGU6IG5ldyBEYXRlKClcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5jb3BhYWlyLWJvb2tpbmctZGF0ZXBpY2tlci1yZXR1cm4nKS5kYXRlcGlja2VyKHtcbiAgICAgICAgICAgIG1pbkRhdGU6IG5ldyBEYXRlKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIHdlZWtMYXRlciA9IG5ldyBEYXRlKHRvZGF5LmdldFRpbWUoKSArIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuICAgICAgICAvLyB0aGUgcGlja2VyLlxuICAgICAgICAkKCcuY29wYWFpci1ib29raW5nLWRhdGVwaWNrZXItZGVwYXJ0dXJlJykuZGF0ZXBpY2tlcihcInNldERhdGVcIiwgdG9kYXkpO1xuICAgICAgICAkKCcuY29wYWFpci1ib29raW5nLWRhdGVwaWNrZXItcmV0dXJuJykuZGF0ZXBpY2tlcihcInNldERhdGVcIiwgd2Vla0xhdGVyKTtcblxuICAgICAgICB0aGlzLmRlZmF1bHREYXRlcygpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBoaWRkZW4gZGF0ZSBpbnB1dHMgd2l0aCBkZWZhdWx0IGRhdGUgdmFsdWVzXG4gICAgICovXG4gICAgZGVmYXVsdERhdGVzKCkge1xuICAgICAgICB2YXIgJGZvcm0gPSB0aGlzLiRib29raW5nO1xuXG4gICAgICAgIHZhciAkZGVwYXJ0dXJlUGlja2VyID0gJCgnLmNvcGFhaXItYm9va2luZy1kYXRlcGlja2VyLWRlcGFydHVyZScpXG4gICAgICAgICAgICAuZGF0ZXBpY2tlcignZ2V0RGF0ZScpO1xuICAgICAgICB2YXIgJHJldHVyblBpY2tlciA9ICQoJy5jb3BhYWlyLWJvb2tpbmctZGF0ZXBpY2tlci1yZXR1cm4nKVxuICAgICAgICAgICAgLmRhdGVwaWNrZXIoJ2dldERhdGUnKTtcblxuICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIl0nKVxuICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgJHJldHVyblBpY2tlci5nZXRVVENEYXRlKCkpO1xuICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiXScpXG4gICAgICAgICAgICAuYXR0cigndmFsdWUnLCAkcmV0dXJuUGlja2VyLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImluYm91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiXScpXG4gICAgICAgICAgICAuYXR0cigndmFsdWUnLCAkcmV0dXJuUGlja2VyLmdldEZ1bGxZZWFyKCkpO1xuXG4gICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIl0nKVxuICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgJGRlcGFydHVyZVBpY2tlci5nZXRVVENEYXRlKCkpO1xuICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIl0nKVxuICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgJGRlcGFydHVyZVBpY2tlci5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCJdJylcbiAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsICRkZXBhcnR1cmVQaWNrZXIuZ2V0RnVsbFllYXIoKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZCBldmVudHMgcmVsYXRlZCB0byBib29raW5nIGludGVyYWN0aW9uXG4gICAgICovXG4gICAgYm9va2luZ0V2ZW50cygpIHtcbiAgICAgICAgdmFyICRmb3JtID0gJCgnLmNvcGFhaXItYm9va2luZycpLFxuICAgICAgICAgICAgJGRlcGFydHVyZVBpY2tlciA9ICQoJy5jb3BhYWlyLWJvb2tpbmctZGF0ZXBpY2tlci1kZXBhcnR1cmUnKSxcbiAgICAgICAgICAgICRyZXR1cm5QaWNrZXIgPSAkKCcuY29wYWFpci1ib29raW5nLWRhdGVwaWNrZXItcmV0dXJuJyksXG4gICAgICAgICAgICAkb3JpZ2luID0gJCgnLmNvcGFhaXItYm9va2luZy1vcmlnaW4nKSxcbiAgICAgICAgICAgICRkZXN0aW5hdGlvbiA9ICQoJy5jb3BhYWlyLWJvb2tpbmctZGVzdGluYXRpb24nKVxuICAgICAgICA7XG5cbiAgICAgICAgdmFyIG9uU2VsZWN0T3V0Ym91bmQgPSBmdW5jdGlvbihkYXRlVGV4dCwgaW5zdCkge1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShpbnN0LnNlbGVjdGVkWWVhciwgaW5zdC5zZWxlY3RlZE1vbnRoLCBpbnN0LnNlbGVjdGVkRGF5KTtcblxuICAgICAgICAgICAgLy90aGlzIHNldHMgdGhlIGluYm91bmQgZGF0ZSBwaWNrZXIgdG8gYSB3ZWVrIGxhdGVyIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgd2Vla2xhdGVyID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAkcmV0dXJuUGlja2VyLmRhdGVwaWNrZXIoJ3NldERhdGUnLCB3ZWVrbGF0ZXIpO1xuXG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIl0nKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIHdlZWtsYXRlci5nZXRVVENEYXRlKCkpO1xuICAgICAgICAgICAgJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImluYm91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIl0nKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIHdlZWtsYXRlci5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCJdJylcbiAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCB3ZWVrbGF0ZXIuZ2V0RnVsbFllYXIoKSk7XG5cbiAgICAgICAgICAgIC8vdGhpcyBoZWxwcyB0aGF0IHRoZSB1c2VyIGRvZXNudCB0cmF2ZWwgYmFjayBpbiB0aW1lXG4gICAgICAgICAgICAkcmV0dXJuUGlja2VyLmRhdGVwaWNrZXIoJ29wdGlvbicsICdtaW5EYXRlJywgZGF0ZSk7XG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlRGF5XCJdJylcbiAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBpbnN0LnNlbGVjdGVkRGF5KTtcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiXScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgaW5zdC5zZWxlY3RlZE1vbnRoICsgMSk7XG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiXScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgaW5zdC5zZWxlY3RlZFllYXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvblNlbGVjdEluYm91bmQgPSBmdW5jdGlvbihkYXRlVGV4dCwgaW5zdCkge1xuICAgICAgICAgICAgJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImluYm91bmRPcHRpb24uZGVwYXJ0dXJlRGF5XCJdJylcbiAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBpbnN0LnNlbGVjdGVkRGF5KTtcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCJdJylcbiAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBpbnN0LnNlbGVjdGVkTW9udGggKyAxKTtcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZVllYXJcIl0nKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGluc3Quc2VsZWN0ZWRZZWFyKTtcbiAgICAgICAgfTtcblxuICAgICAgICAkZGVwYXJ0dXJlUGlja2VyLmRhdGVwaWNrZXIoJ29wdGlvbicsICdvblNlbGVjdCcsIG9uU2VsZWN0T3V0Ym91bmQpO1xuICAgICAgICAkcmV0dXJuUGlja2VyLmRhdGVwaWNrZXIoJ29wdGlvbicsICdvblNlbGVjdCcsIG9uU2VsZWN0SW5ib3VuZCk7XG5cbiAgICAgICAgLy8gTG9hZCBmb3JtIHN1Ym1pdGlvbiBldmVudHNcbiAgICAgICAgdGhpcy5zdWJtaXRGb3JtKCRmb3JtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzdWJtaXRGb3JtXG4gICAgICogY2FwdHVyZXMgZm9ybSBzdWJtaXQgZXZlbnQgYW5kIHByb2Nlc3MgaXRcbiAgICAgKi9cbiAgICBzdWJtaXRGb3JtKGZvcm0pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBodHRwUXVlcnkgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xuICAgICAgICAgICAgdmFyIHVybCA9IF90aGlzLm9wdGlvbnMuZm9ybVVybDtcblxuICAgICAgICAgICAgaWYoX3RoaXMudmFsaWRhdGlvbkVycm9yKGZvcm0pKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gdGhlIGZvcm0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdmFyIHNlYXJjaFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCArIGh0dHBRdWVyeSwgJ19ibGFuaycpO1xuICAgICAgICAgICAgICAgIHNlYXJjaFdpbmRvdy5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm9va2luZztcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lJdmFHOXRaUzkyWVdkeVlXNTBMME52WkdVdlkyOXdZUzlqYjNCaFlXbHlMWGRwWkdkbGRITXZjM0pqTDJwekwzZHBaR2RsZEhNdlUybG5iblZ3TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sdGRmUT09Il19
