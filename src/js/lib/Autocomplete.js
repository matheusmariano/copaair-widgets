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
            delay: 0,
            lang: 'es',
            minLength: 0,
        };

        this.options = $.extend({}, defaults, options);
    }

    /**
     * Get destinations from Flight Control API
     * @param  {Function} cb Callback when API call finishes
     *                       and destinations are fetched
     * @return {void}
     */
    start(cb) {
        var flightControl = new FlightControl({ lang: this.options.lang });

        flightControl.fetch('destinations', (destinations) => {
            // Format raw destinations to autocomplete structure
            this.options.source = this.format(destinations.list);

            if (typeof cb === 'function') {
                cb();
            }
        });
    }

    /**
     * Render autocomplete widget
     * @param  {Object} element DOM element to attach widget to
     */
    render(element) {
        var $this = $(element).hide(),
            sourceClasses = $this.attr('class'),
            sourceValue = $this.val(),
            sourcePlaceholder = $this.attr('placeholder'),
            dataInput = $this.data('input-field')
        ;

        var $input = $('<input />')
            .val(sourceValue)
            .attr('type', 'text')
            .attr('placeholder', sourcePlaceholder)
            .attr('data-input-field', dataInput)
        ;

        // Add autocomplete functionality
        $input.autocomplete(this.options);

        // Open list on input focus
        $input.on('focus', function() {
            var $this = $(this);
            if ($this.val().length === 0)
                $this.autocomplete('search');
        });

        // Add styling
        $input
            .addClass(sourceClasses)
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
