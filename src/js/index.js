(function (factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        // Node/CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    'use strict';

    var Booking = require('./widgets/Booking'),
        Signup  = require('./widgets/Signup')
    ;

    /**
     * Bind widgets to jQuery object prototype.
     *
     * @param  {Object} options Options passed to override defaults.
     * @return {Object}         Current object instance
     */
    $.fn.copaairBooking = function copaairBooking(options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_copaairBooking')) {
                $.data(this, 'plugin_copaairBooking', new Booking(this, options));
            }
        });
    };

    $.fn.copaairSignup = function copaairSignup(options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_copaairSignup')) {
                $.data(this, 'plugin_copaairSignup', new Signup(this, options));
            }
        });
    };
}));
