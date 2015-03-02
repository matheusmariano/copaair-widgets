var Template = require('../lib/Template');

class Signup {

    constructor(element, options) {
        this.$form = $(element);

        var defaults = {
            lang: 'es'
        };

        this.options = $.extend({}, defaults, options);

        // Load template
        new Template('signup', {
            'lang': this.options.lang,
            callback: (html) => {
                this.$form.html(html);
            }
        });
    }

}

module.exports = Signup;
