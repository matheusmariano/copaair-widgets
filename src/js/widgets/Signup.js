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
                this.signupEvents();
            }
        });
    }



    signupEvents() {
        var $form = this.$form;
        var $toggle = this.$form.find('.js-copaair-toggle');

        // Show bottom row when any input gets focus
        $form.on('focus.copaair', 'input', function(e) {
            $form.addClass('copaair-widget-open');
            $toggle.removeClass('copaair-hidden');
        });

        $form.on('submit', (e) => {
            e.preventDefault();
            this.submitForm(e.target);
        })

    }

    submitForm(target) {
        var $form = $(target);

        var data = $form.serializeObject();
        data.fullname = data.first_name + ' ' + data.last_name;
        data.source = this.options.source;
        data.language = this.options.lang;

        var container = this.options.container;

        $.ajax({
            type: 'POST',
            url: 'https://flightcontrol.io/api/signup/add',
            data: data
        }).done(function(res) {
            container.fadeOut();
        });
    }

}

module.exports = Signup;
