var $ = require('jquery'),
    FlightControl = require('./FlightControl')
;

class Autocomplete
{
    constructor(options) {
        var defaults = {
            lang: 'es'
        };

        this.options = $.extend({}, defaults, options);
    }

    getDestinations(cb) {
        var flightControl = new FlightControl();
        flightControl.fetch('destinations', (destinations) => {
            this.destinations = destinations;

            if (typeof cb === 'function') {
                cb();
            }
        });
    }

    format(destinations) {
        var result = [];

        $.each(destinations, (i, dest) => {
            var tempLabel = '<b>' + dest.name[this.options.lang] + ', ' + dest.country +
                '</b><span class="code"> | ' + dest.id + '</span>';
            var tempValue = dest.id;
            var textValue = dest.name[this.options.lang] + ', ' + dest.id;

            result.push({
                label: tempLabel,
                value: tempValue,
                display: textValue
            });
        });

        return result;
    }

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
}

module.exports = Autocomplete;
