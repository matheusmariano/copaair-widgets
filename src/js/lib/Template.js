var $ = require('jquery'),
    Handlebars = require('handlebars'),
    i18n = {
        booking: require('../../../lang/booking.json'),
        signup: require('../../../lang/signup.json'),
    },
    defaults = {
        lang: 'es',
        src: window.location.origin + '/bower_components/copaair-widgets/templates',
        callback: function() {}
    }
;

class Template
{

    constructor(widget, options) {
        this.options = $.extend({}, defaults, options);
        if (typeof Handlebars !== 'undefined' && Handlebars !== null) {
            $.ajax({
                url: `${this.options.src}/${widget}.hbs`,
                success: (tpl) => {
                    this.options.data = $.extend({}, this.options, i18n[widget][this.options.lang]);
                    var html = this.compile(widget, tpl);
                    this.options.callback(html);
                }
            });
        } else {
            console.error('This plugin requires Handlebars.js');
        }
    }

    compile(widget, tpl) {
        var template = Handlebars.compile(tpl);
        var html = template(this.options.data);
        return html;
    }
}

module.exports = Template;
