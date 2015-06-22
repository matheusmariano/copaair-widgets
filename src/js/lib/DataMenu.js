var $ = require('jquery'),
    FlightControl = require('./FlightControl'),

    defaults = {
        lang: 'es',
        data: null,
        contentType: 'countries',
        callback: function() {}
    }
;



class DataMenu
{
    /**
     * Constructor
     * @param  {Object} options Custom options for this widget instance.
     */
    constructor(options) {

        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;

        this.setup();
    }

    setup() {

        if (!this.options.data) {
            var flightControl = new FlightControl({ lang: this.options.lang });

            flightControl.fetch(this.options.contentType, (data, lang) => {
                // Format raw destinations to autocomplete structure
                this.options.source = this.format(data.list);
                this.render();
                if (typeof cb === 'function') {
                    cb();
                }
            });
        } else {
            this.options.source = this.format(this.options.data);
            this.render(true);
        }
    }

    render(newInput) {
        if(newInput) {
            $(this.options.selector).find('option').slice(1).remove();
        }
        $.each(this.options.source, (i, item) => {
            $(this.options.selector).append(item.display);
        });
    }

    /**
     * Formats data into the needed structure to be displayed
     * on the autocomplete menu widget.
     * @param  {Array} destinations Raw data returned from Flight Control
     * @return {Array}              Formatted destinations
     */
    format(list) {
        var result = [];
        $.each(list, (i, item) => {
            let option =
                `<option value="${ item.id }">${ item.name[this.options.lang] }</option>`;
            result.push({
                display:option
            });
        });

        return result;
    }

}

module.exports = DataMenu;
