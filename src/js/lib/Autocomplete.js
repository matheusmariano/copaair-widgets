var $ = require('jquery'),
    FlightControl = require('./FlightControl')
;

/**
 * Autocomplete widget with list of Copa's destinations
 * for better usability than a native select menu.
 * @class
 */
class Autocomplete
{
    /**
     * Constructor
     * @param  {Object} options Custom options for this widget instance.
     */
    constructor(options) {
        var defaults = {
            lang: 'es'
        };

        this.options = $.extend({}, defaults, options);
    }

    /**
     * Render autocomplete widget
     * @param  {Object} element DOM element to attach widget to
     */
    render(element) {
        var $this = $(element).hide(),
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
            source: this.format(this.destinations.list),
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

        return this;
    }

    /**
     * Get destinations from Flight Control API
     * @param  {Function} cb Callback when API call finishes
     *                       and destinations are fetched
     * @return {void}
     */
    getDestinations(cb) {
        var flightControl = new FlightControl();
        flightControl.fetch('destinations', (destinations) => {
            this.destinations = destinations;

            if (typeof cb === 'function') {
                cb();
            }
        });
    }

    /**
     * Formats destinations into the needed structure to be displayed
     * on the autocomplete menu widget.
     * @param  {Array} destinations Raw data returned from Flight Control
     * @return {Array}              Formatted destinations
     */
    format(destinations) {
        var result = [];

        $.each(destinations, (i, dest) => {
            let tempLabel =
                    `<b>${ dest.name[this.options.lang] }, ${ dest.country }</b>
                    <span class="code"> | ${ dest.id }</span>`,
                tempValue = dest.id,
                textValue = dest.name[this.options.lang] + ', ' + dest.id;

            result.push({
                label: tempLabel,
                value: tempValue,
                display: textValue
            });
        });

        return result;
    }
}

/**
 * Export
 * @exports Autocomplete
 */
module.exports = Autocomplete;
