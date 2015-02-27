var $ = require('jquery'),
    Handlebars = require('handlebars'),
    i18n = require('../../../lang/booking.json'),
    defaults = {
        lang: 'es',
        src: 'bower_components/copaair-widgets/templates',
        callback: function() {}
    }
;

class Template
{
    constructor(template, options) {
        this.options = $.extend({}, defaults, options);

        if (typeof Handlebars !== 'undefined' && Handlebars !== null) {
            $.ajax({
                url: `${this.options.src}/${template}.hbs`,
                success: (tpl) => {
                    var html = this.compile(tpl);
                    this.options.callback(html);
                }
            });
        } else {
            console.error('This plugin requires Handlebars.js');
        }
    }

    compile(tpl) {
        var template = Handlebars.compile(tpl);
        var html = template(i18n[this.options.lang]);
        return html;
    }
}

module.exports = Template;
