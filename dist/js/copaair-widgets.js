(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

(function (factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        // Node/CommonJS
        factory((typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null));
    } else {
        // Browser globals
        factory(jQuery);
    }
})(function ($) {
    'use strict';

    var Booking = require('./widgets/Booking'),
        Signup = require('./widgets/Signup');

    /**
     * Bind widgets to jQuery object prototype.
     *
     * @param  {Object} options Options passed to override defaults.
     * @return {Object}         Current object instance
     */
    $.fn.copaairBooking = function copaairBooking(options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_copaairBooking')) {
                $.data(this, 'plugin_copaairBooking', new Booking(this, options));
            }
        });
    };

    $.fn.copaairSignup = function copaairSignup(options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_copaairSignup')) {
                $.data(this, 'plugin_copaairSignup', new Signup(this, options));
            }
        });
    };
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./widgets/Booking":11,"./widgets/Signup":12}],2:[function(require,module,exports){
(function (global){
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/* Copyright (c) 2010-2013 Marcus Westin */
"use strict";

(function (e) {
  function o() {
    try {
      return r in e && e[r];
    } catch (t) {
      return !1;
    }
  }var t = {},
      n = e.document,
      r = "localStorage",
      i = "script",
      s;t.disabled = !1, t.version = "1.3.17", t.set = function (e, t) {}, t.get = function (e, t) {}, t.has = function (e) {
    return t.get(e) !== undefined;
  }, t.remove = function (e) {}, t.clear = function () {}, t.transact = function (e, n, r) {
    r == null && (r = n, n = null), n == null && (n = {});var i = t.get(e, n);r(i), t.set(e, i);
  }, t.getAll = function () {}, t.forEach = function () {}, t.serialize = function (e) {
    return JSON.stringify(e);
  }, t.deserialize = function (e) {
    if (typeof e != "string") return undefined;try {
      return JSON.parse(e);
    } catch (t) {
      return e || undefined;
    }
  };if (o()) s = e[r], t.set = function (e, n) {
    return n === undefined ? t.remove(e) : (s.setItem(e, t.serialize(n)), n);
  }, t.get = function (e, n) {
    var r = t.deserialize(s.getItem(e));return r === undefined ? n : r;
  }, t.remove = function (e) {
    s.removeItem(e);
  }, t.clear = function () {
    s.clear();
  }, t.getAll = function () {
    var e = {};return (t.forEach(function (t, n) {
      e[t] = n;
    }), e);
  }, t.forEach = function (e) {
    for (var n = 0; n < s.length; n++) {
      var r = s.key(n);e(r, t.get(r));
    }
  };else if (n.documentElement.addBehavior) {
    var u, a;
    var l, c;

    (function () {
      var h = function (e) {
        return e.replace(/^d/, "___$&").replace(c, "___");
      };

      try {
        a = new ActiveXObject("htmlfile"), a.open(), a.write("<" + i + ">document.w=window</" + i + "><iframe src=\"/favicon.ico\"></iframe>"), a.close(), u = a.w.frames[0].document, s = u.createElement("div");
      } catch (f) {
        s = n.createElement("div"), u = n.body;
      }
      l = function l(e) {
        return function () {
          var n = Array.prototype.slice.call(arguments, 0);n.unshift(s), u.appendChild(s), s.addBehavior("#default#userData"), s.load(r);var i = e.apply(t, n);return (u.removeChild(s), i);
        };
      };

      c = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
      t.set = l(function (e, n, i) {
        return (n = h(n), i === undefined ? t.remove(n) : (e.setAttribute(n, t.serialize(i)), e.save(r), i));
      }), t.get = l(function (e, n, r) {
        n = h(n);var i = t.deserialize(e.getAttribute(n));return i === undefined ? r : i;
      }), t.remove = l(function (e, t) {
        t = h(t), e.removeAttribute(t), e.save(r);
      }), t.clear = l(function (e) {
        var t = e.XMLDocument.documentElement.attributes;e.load(r);for (var n = 0, i; i = t[n]; n++) e.removeAttribute(i.name);e.save(r);
      }), t.getAll = function (e) {
        var n = {};return (t.forEach(function (e, t) {
          n[e] = t;
        }), n);
      }, t.forEach = l(function (e, n) {
        var r = e.XMLDocument.documentElement.attributes;for (var i = 0, s; s = r[i]; ++i) n(s.name, t.deserialize(e.getAttribute(s.name)));
      });
    })();
  }try {
    var p = "__storejs__";t.set(p, p), t.get(p) != p && (t.disabled = !0), t.remove(p);
  } catch (f) {
    t.disabled = !0;
  }t.enabled = !t.disabled, typeof module != "undefined" && module.exports && this.module !== module ? module.exports = t : typeof define == "function" && define.amd ? define(t) : e.store = t;
})(Function("return this")());

; browserify_shim__define__module__export__(typeof store != "undefined" ? store : window.store);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
module.exports={
    "es": {
        "form": {
            "origin": "Desde",
            "destination": "Hacia",
            "departure": "Salida",
            "return": "Regreso",
            "economic": "Clase Económica",
            "business": "Clase Ejecutiva",
            "submit": "Ver Vuelos",
            "adults": "Adultos",
            "children": "Niños",
            "infants" : "Infantes"
        },
        "messages": {
            "notification": "Por favor completa todos los campos.",
            "error": "Por favor completa todos los campos."
        }
    },
    "en": {
        "form": {
            "origin": "From",
            "destination": "To",
            "departure": "Departure",
            "return": "Return",
            "economic": "Business Class",
            "business": "Economy Class",
            "submit": "Find flights",
            "adults": "Adults",
            "children": "Children",
            "infants" : "Infants"
        },
        "messages": {
            "notification": "Please complete all the ...",
            "error": "Please complete all the ..."
        }
    },
    "pt": {
        "form": {
            "origin": "De",
            "destination": "Para",
            "departure": "Saída",
            "return": "Regresso",
            "economic": "Classe econômica",
            "business": "Classe Executiva",
            "submit": "Buscar voos",
            "adults": "Adultos",
            "children": "Crianças",
            "infants" : "Bebês"
        },
        "messages": {
            "notification": "Por favor completa todos los campos.",
            "error": "Por favor completa todos los campos."
        }
    }
}

},{}],4:[function(require,module,exports){
module.exports={
    "es": {
        "regional": {
            "closeText": "Cerrar",
            "prevText": "&#x3C;Ant",
            "nextText": "Sig&#x3E;",
            "currentText": "Hoy",
            "monthNames": ["enero","febrero","marzo","abril","mayo","junio",
            "julio","agosto","septiembre","octubre","noviembre","diciembre"],
            "monthNamesShort": ["ene","feb","mar","abr","may","jun','jul","ago","sep","oct","nov","dic"],
            "dayNames": ["domingo","lunes","martes","miércoles','jueves","viernes","sábado"],
            "dayNamesShort": ["dom","lun","mar","mié","juv","vie","sáb"],
            "dayNamesMin": ["D","L","M","X","J","V","S"],
            "weekHeader": "Sm",
            "dateFormat": "dd/mm/yy",
            "firstDay": 1,
            "isRTL": false,
            "showMonthAfterYear": false,
            "yearSuffix": ""
        }

    },
    "en": {
        "regional" : {}
    },
    "pt": {
        "regional" : {
            "closeText": "Fechar",
            "prevText": "&#x3C;Anterior",
            "nextText": "Próximo&#x3E;",
            "currentText": "Hoje",
            "monthNames": ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
            "monthNamesShort": ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
            "dayNames": ["Domingo","Segunda-feira","Terça-feira","Quarta-feira','Quinta-feira","Sexta-feira","Sábado"],
            "dayNamesShort": ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],
            "dayNamesMin": ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],
            "weekHeader": "Sm",
            "dateFormat": "dd/mm/yy",
            "firstDay": 0,
            "isRTL": false,
            "showMonthAfterYear": false,
            "yearSuffix": ""
        }
    }
}

},{}],5:[function(require,module,exports){
module.exports={
    "es": {
        "form": {
            "fname": "Nombre",
            "lname": "Apellido",
            "email": "Email",
            "country": "País",
            "city": "Ciudad",
            "phone": "Móvil",
            "subscribe": "Subscribirse"
        }
    },
    "en": {
        "form": {
            "fname": "Name",
            "lname": "Last Name",
            "email": "Email",
            "country": "Country",
            "city": "City",
            "phone": "Mobile",
            "subscribe": "Subscribe"
        }
    },
    "pt": {
        "form": {
            "fname": "Nome",
            "lname": "Sobrenome",
            "email": "E-mail",
            "country": "País",
            "city": "Cidade",
            "phone": "Celular",
            "subscribe": "Inscrever-se"
        }
    }
}

},{}],6:[function(require,module,exports){
(function (global){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    FlightControl = require('./FlightControl');

/**
 * Autocomplete widget with list of Copa's destinations
 * for better usability than a native select menu.
 * @class
 */

var Autocomplete = (function () {
    /**
     * Constructor
     * @param  {Object} options Custom options for this widget instance.
     */

    function Autocomplete(options) {
        _classCallCheck(this, Autocomplete);

        var defaults = {
            delay: 0,
            lang: 'es',
            minLength: 0 };

        this.options = $.extend({}, defaults, options);
    }

    _createClass(Autocomplete, [{
        key: 'start',

        /**
         * Get destinations from Flight Control API
         * @param  {Function} cb Callback when API call finishes
         *                       and destinations are fetched
         * @return {void}
         */
        value: function start(cb) {
            var _this = this;

            var flightControl = new FlightControl({ lang: this.options.lang });

            flightControl.fetch('destinations', function (destinations) {
                // Format raw destinations to autocomplete structure
                _this.options.source = _this.format(destinations.list);

                if (typeof cb === 'function') {
                    cb();
                }
            });
        }
    }, {
        key: 'render',

        /**
         * Render autocomplete widget
         * @param  {Object} element DOM element to attach widget to
         */
        value: function render(element) {
            var $this = $(element).hide(),
                sourceClasses = $this.attr('class'),
                sourceValue = $this.val(),
                sourcePlaceholder = $this.attr('placeholder'),
                dataInput = $this.data('input-field');

            var $input = $('<input />').val(sourceValue).attr('type', 'text').attr('placeholder', sourcePlaceholder).attr('data-input-field', dataInput);

            // Add autocomplete functionality
            $input.autocomplete(this.options);

            // Open list on input focus
            $input.on('focus', function () {
                var $this = $(this);
                if ($this.val().length === 0) $this.autocomplete('search');
            });

            // Add styling
            $input.addClass(sourceClasses).addClass('ui-widget  ui-widget-content  ui-state-default');

            // Insert into DOM
            $input.insertAfter($this);

            // Overwrite autocomplete item rendering with custom markup
            $input.autocomplete('instance')._renderItem = function (ul, item) {
                return $('<li>').append(item.label).appendTo(ul);
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
    }, {
        key: 'format',

        /**
         * Formats destinations into the needed structure to be displayed
         * on the autocomplete menu widget.
         * @param  {Array} destinations Raw data returned from Flight Control
         * @return {Array}              Formatted destinations
         */
        value: function format(destinations) {
            var _this2 = this;

            var result = [];

            $.each(destinations, function (i, dest) {
                var tempLabel = '<b>' + dest.name[_this2.options.lang] + ', ' + dest.country + '</b>\n                    <span class="code"> | ' + dest.id + '</span>',
                    tempValue = dest.id,
                    textValue = dest.name[_this2.options.lang] + ', ' + dest.id;
                result.push({
                    label: tempLabel,
                    value: tempValue,
                    display: textValue
                });
            });

            return result;
        }
    }]);

    return Autocomplete;
})();

/**
 * Export
 * @exports Autocomplete
 */
module.exports = Autocomplete;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./FlightControl":8}],7:[function(require,module,exports){
(function (global){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    i18n = require('../../../lang/datepicker.json'),
    defaults = {
    departureSelector: '.copaair-booking-datepicker-departure',
    returnSelector: '.copaair-booking-datepicker-return',
    dateRules: {
        today: new Date(),
        weekLater: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
    },
    lang: 'es',
    beforeShow: function beforeShow(input, isnt) {
        setTimeout(function () {
            isnt.dpDiv.position({
                my: 'left bottom',
                at: 'left top',
                of: input
            });
        }, 0);
    }
};

/**
 * Datepicker module
 */

var Datepicker = (function () {
    function Datepicker(options) {
        _classCallCheck(this, Datepicker);

        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
    }

    _createClass(Datepicker, [{
        key: 'render',

        /**
         * Render date picker inside the booking form
         * setups the defaults dates and language
         */
        value: function render() {
            this.setLocale();
            this.setDefaultDates();
            this.events();
        }
    }, {
        key: 'setDefaultDates',

        /**
         * Set defaults dates
         * this consist in set current date for departure
         * and one week later for return
         */
        value: function setDefaultDates() {
            var dateRules = this.options.dateRules,
                $departureField = $(this.options.departureSelector),
                $returnField = $(this.options.returnSelector);

            this.options.minDate = new Date();

            $departureField.datepicker(this.options);
            $returnField.datepicker(this.options);

            $departureField.datepicker('setDate', dateRules.today);
            $returnField.datepicker('setDate', dateRules.weekLater);
        }
    }, {
        key: 'events',
        value: function events() {
            var $departureField = $(this.options.departureSelector),
                $returnField = $(this.options.returnSelector);

            // $departureField.datepicker('option', 'onSelect', this.onSelectOutbound);
        }
    }, {
        key: 'onSelectOutbound',
        value: function onSelectOutbound(dateText, inst) {
            var $returnField = $(this.options.returnSelector),
                date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

            //this sets the inbound date picker to a week later of current selection
            var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
            $returnField.datepicker('setDate', weeklater);
        }
    }, {
        key: 'setLocale',

        /**
         * Configure datepicker depending on the
         * localization
         */
        value: function setLocale() {
            var regional = i18n[this.options.lang].regional;
            $.datepicker.setDefaults(regional);
        }
    }]);

    return Datepicker;
})();

module.exports = Datepicker;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../../lang/datepicker.json":4}],8:[function(require,module,exports){
(function (global){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);
require('store-js');

var defaults = {
    lang: 'es',
    api: {
        destinations: 'https://flightcontrol.io/api/routes/destinations',
        countries: 'https://flightcontrol.io/api/routes/countries',
        regions: 'https://flightcontrol.io/api/routes/regions' },
    storageExpiration: 86400000,
    storage: true };

/**
 * Extension to the storage class
 * to setup the expiration value
 * @type {Object}
 */
var storeWidthExpiration = {
    set: function set(key, val, exp) {
        store.set(key, { val: val, exp: exp, time: new Date().getTime() });
    },
    get: function get(key) {
        var info = store.get(key);
        if (!info) {
            return null;
        }
        if (new Date().getTime() - info.time > info.exp) {
            return null;
        }
        return info.val;
    }
};

/**
 * Module FlightControl
 */

var FlightControl = (function () {
    function FlightControl(options) {
        _classCallCheck(this, FlightControl);

        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;

        if (!store.enabled) {
            console.log('browser not supported or in private mode');
            this.options.storage = false;
        }
    }

    _createClass(FlightControl, [{
        key: 'fetch',

        /**
         * Fetch data from flight controller
         * based on the resource name
         * @param  {string}   resourceName: destinations|countries|regions
         * @param  {Function} cb  callback
         * @return {Function} callback
         */
        value: function fetch(resourceName, cb) {
            var _this = this;

            var resourceValue = {};

            if (this.options.storage && storeWidthExpiration.get(resourceName) && storeWidthExpiration.get(resourceName + '.count')) {
                resourceValue.list = storeWidthExpiration.get(resourceName);
                resourceValue.count = storeWidthExpiration.get(resourceName + '.count');

                return cb(resourceValue);
            }

            $.getJSON(this.options.api[resourceName], function (data) {

                _this.sortNames(data);

                if (_this.options.storage) {
                    storeWidthExpiration.set(resourceName, data, _this.options.storageExpiration);
                    storeWidthExpiration.set(resourceName + '.count', data.length, _this.options.storageExpiration);
                }
                resourceValue.list = data;
                resourceValue.count = data.length;

                cb(resourceValue);
            });
        }
    }, {
        key: 'sortNames',

        /**
         * Helper function to sort data
         * based on language
         * @param  {Object} data
         */
        value: function sortNames(data) {
            var _this2 = this;

            data.sort(function (a, b) {
                if (a.name[_this2.options.lang] > b.name[_this2.options.lang]) return 1;
                if (a.name[_this2.options.lang] < b.name[_this2.options.lang]) return -1;

                return 0;
            });
        }
    }]);

    return FlightControl;
})();

module.exports = FlightControl;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"store-js":2}],9:[function(require,module,exports){
(function (global){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    defaults = {
    lang: 'es',
    origin: 'all',
    destination: 'all',
    // required field to submit form
    // to copa
    inputs: {
        tripType: 'RT',
        flexibleSearch: 'true',
        pos: 'CMGS',
        'guestTypes[0].type': 'ADT',
        'guestTypes[1].type': 'CNN',
        'guestTypes[2].type': 'INF',
        'guestTypes[0].amount': 1,
        'guestTypes[1].amount': 0,
        'guestTypes[2].amount': 0,
        'outboundOption.departureDay': null,
        'outboundOption.departureMonth': null,
        'outboundOption.departureYear': null,
        'inboundOption.departureDay': null,
        'inboundOption.departureMonth': null,
        'inboundOption.departureYear': null,
        // "coupon": null,
        // origin
        'outboundOption.originLocationCode': null,
        'inboundOption.destinationLocationCode': null,
        // destination
        'outboundOption.destinationLocationCode': null,
        'inboundOption.originLocationCode': null,
        // // cabin class Business|Economy
        cabinClass: 'Economy',
        // d1: null,
        lang: 'es'
    },
    formUrl: 'https://bookings.copaair.com/CMGS/' + 'AirLowFareSearchExternal.do?'
};

/**
 * FormHelper module
 */

var FormHelper = (function () {
    function FormHelper(options) {
        _classCallCheck(this, FormHelper);

        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;

        // set defautls values
        this.setDefaultBounds();
        this.setDates(this.options.datepicker, { returns: true, departure: true });

        // load events related with form helper and other modules
        this.events();
        console.log(this.options.inputs);
    }

    _createClass(FormHelper, [{
        key: 'process',
        value: function process() {
            var httpQuery = $.param(this.options.inputs);
            // console.log(httpQuery);
            var url = this.options.formUrl;

            var validation = this.validationError();

            if (validation.error) {
                // handle validation error messages
                console.log(validation.bag);
            } else {
                // no errors, forward form values to copa
                var searchWindow = window.open(url + httpQuery, '_blank');
                searchWindow.focus();
            }
        }
    }, {
        key: 'setDefaultBounds',
        value: function setDefaultBounds() {

            if (this.options.origin !== 'all') {
                this.setBounds('origin', this.options.origin);
            }

            if (this.options.destination !== 'all') {
                this.setBounds('destination', this.options.destination);
            }
        }
    }, {
        key: 'setBounds',
        value: function setBounds(bound, location) {

            if (bound === 'origin') {
                this.options.inputs['outboundOption.originLocationCode'] = location;
                this.options.inputs['inboundOption.destinationLocationCode'] = location;
            }

            if (bound === 'destination') {
                this.options.inputs['outboundOption.destinationLocationCode'] = location;
                this.options.inputs['inboundOption.originLocationCode'] = location;
            }
        }
    }, {
        key: 'setDates',
        value: function setDates(datepicker, bounds) {
            // get current datepickers dates
            var departureDate = $(datepicker.options.departureSelector).datepicker('getDate'),
                returnDate = $(datepicker.options.returnSelector).datepicker('getDate');

            if (bounds.returns) {
                this.options.inputs['inboundOption.departureDay'] = returnDate.getUTCDate();
                this.options.inputs['inboundOption.departureMonth'] = returnDate.getMonth() + 1;
                this.options.inputs['inboundOption.departureYear'] = returnDate.getFullYear();
            }

            if (bounds.departure) {
                this.options.inputs['outboundOption.departureDay'] = departureDate.getUTCDate();
                this.options.inputs['outboundOption.departureMonth'] = departureDate.getMonth() + 1;
                this.options.inputs['outboundOption.departureYear'] = departureDate.getFullYear();
            }
        }
    }, {
        key: 'setCabinClass',
        value: function setCabinClass(target) {
            this.options.inputs.cabinClass = $(target).val();
        }
    }, {
        key: 'setPassengersAmount',
        value: function setPassengersAmount(type, value) {
            switch (type) {
                case 'adult':
                    this.options.inputs['guestTypes[0].amount'] = value;
                    break;
                case 'child':
                    this.options.inputs['guestTypes[1].amount'] = value;
                    break;
                case 'infant':
                    this.options.inputs['guestTypes[2].amount'] = value;
                    break;
            }
        }
    }, {
        key: 'setCoupon',
        value: function setCoupon(coupon) {
            this.options.inputs.coupon = coupon;
        }
    }, {
        key: 'setD1',
        value: function setD1(d1Value) {
            this.options.inputs.d1 = d1Value;
        }
    }, {
        key: 'validationError',
        value: function validationError() {
            var errors = {
                error: false,
                bag: []
            };
            var currentError;
            for (var input in this.options.inputs) {
                if (!this.options.inputs[input] && this.options.inputs[input] !== 0) {
                    currentError = {};
                    currentError.field = input;
                    currentError.message = 'The input ' + input + ' must have some value';
                    errors.bag.push(currentError);
                    errors.error = true;
                }
            }

            return errors;
        }
    }, {
        key: 'events',
        value: function events() {
            var _this = this;

            var datepicker = this.options.datepicker,
                $departureField = $(datepicker.options.departureSelector),
                $returnField = $(datepicker.options.returnSelector);

            $departureField.datepicker('option', 'onSelect', function (dateText, inst) {

                var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

                // this sets the inbound date picker to a week later of current selection
                var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
                $returnField.datepicker('setDate', weeklater);
                $returnField.datepicker('option', 'minDate', date);
                _this.setDates(datepicker, { returns: true, departure: true });
            });

            $returnField.datepicker('option', 'onSelect', function (dateText, inst) {

                var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

                // this sets the inbound date picker to a week later of current selection
                var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
                _this.setDates(datepicker, { returns: true, departure: false });
            });

            $('.js-cabin-class').on('click', function (e) {
                _this.setCabinClass(e.target);
            });

            $('.js-adults-amount').selectmenu({
                change: function change(e, ui) {
                    _this.setPassengersAmount('adult', ui.item.value);
                }
            });

            $('.js-children-amount').selectmenu({
                change: function change(e, ui) {
                    _this.setPassengersAmount('child', ui.item.value);
                }
            });

            $('.js-infants-amount').selectmenu({
                change: function change(e, ui) {
                    _this.setPassengersAmount('infant', ui.item.value);
                }
            });

            $('.js-submit').on('click', function (e) {
                e.preventDefault();
                _this.process();
            });
        }
    }]);

    return FormHelper;
})();

module.exports = FormHelper;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(require,module,exports){
(function (global){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    Handlebars = (typeof window !== "undefined" ? window.Handlebars : typeof global !== "undefined" ? global.Handlebars : null),
    i18n = {
    booking: require('../../../lang/booking.json'),
    signup: require('../../../lang/signup.json') },
    defaults = {
    lang: 'es',
    src: window.location.origin + '/bower_components/copaair-widgets/templates',
    callback: function callback() {}
};

var Template = (function () {
    function Template(widget, options) {
        var _this = this;

        _classCallCheck(this, Template);

        this.options = $.extend({}, defaults, options);
        if (typeof Handlebars !== 'undefined' && Handlebars !== null) {
            $.ajax({
                url: '' + this.options.src + '/' + widget + '.hbs',
                success: function success(tpl) {
                    _this.options.data = $.extend({}, _this.options, i18n[widget][_this.options.lang]);
                    var html = _this.compile(widget, tpl);
                    _this.options.callback(html);
                }
            });
        } else {
            console.error('This plugin requires Handlebars.js');
        }
    }

    _createClass(Template, [{
        key: 'compile',
        value: function compile(widget, tpl) {
            var template = Handlebars.compile(tpl);
            var html = template(this.options.data);
            return html;
        }
    }]);

    return Template;
})();

module.exports = Template;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../../lang/booking.json":3,"../../../lang/signup.json":5}],11:[function(require,module,exports){
(function (global){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

/**
 * Modules
 */
var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    Template = require('../lib/Template'),
    FlightControl = require('../lib/FlightControl'),
    Datepicker = require('../lib/Datepicker'),
    Autocomplete = require('../lib/Autocomplete'),
    FormHelper = require('../lib/FormHelper');

/**
 * Options
 * @type {Object}
 */
var defaults = {
    lang: 'es',
    d1: null,
    coupon: null,
    origin: null,
    destination: null,
    widgetPosition: { my: 'left bottom', at: 'left top' },
    templatePath: 'bower_components/copaair-widgets/templates/booking.hbs',
    languagePath: 'bower_components/copaair-widgets/lang/'
};

var Booking = (function () {

    /**
     * Widget constructor
     * @param {Object} selector element DOM object
     * @param {Object} options  Options passed on plugin instance
     */

    function Booking(element, options) {
        var _this = this;

        _classCallCheck(this, Booking);

        this.$booking = $(element);

        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;

        new Template('booking', {
            lang: this.options.lang,
            origin: this.options.origin,
            destination: this.options.destination,
            callback: function callback(html) {
                _this.$booking.html(html);

                // When finished, build all the widgets
                _this.setupSelectMenus();

                // setup datepicker
                var datepicker = new Datepicker({
                    lang: _this.options.lang });
                datepicker.render();

                var formHelper = new FormHelper({
                    datepicker: datepicker,
                    origin: _this.options.origin,
                    destination: _this.options.destination
                });

                // set custom values d1 & coupon

                if (_this.options.d1) {
                    formHelper.setD1(_this.options.d1);
                }

                if (_this.options.coupon) {
                    formHelper.setCoupon(_this.options.coupon);
                }

                // Autocomplete widgets
                _this.initAutocomplete(formHelper);

                // Bind events
                _this.bookingEvents();
            }
        });
    }

    _createClass(Booking, [{
        key: 'initAutocomplete',

        /**
         * Setup autocomplete destination widgets
         * @see module:Autocomplete
         */
        value: function initAutocomplete(formHelper) {
            var _this2 = this;

            // Init class with options
            var autocomplete = new Autocomplete({
                lang: this.options.lang,
                select: function select(e, ui) {
                    e.preventDefault();
                    e.stopPropagation();

                    // set display value to the input
                    $(this).val(ui.item.display);
                    //set actual value at the booking object
                    formHelper.setBounds($(this).data('input-field'), ui.item.value);
                },
                position: this.options.widgetPosition,
                appendTo: this.$booking
            });

            // Build
            autocomplete.start(function () {
                autocomplete.render(_this2.$booking.find('.js-booking-autocomplete'));
            });
        }
    }, {
        key: 'setupSelectMenus',

        /**
         * Replaces select menus with custom UI widgets
         */
        value: function setupSelectMenus() {
            $('.js-selectmenu').selectmenu({
                position: this.options.widgetPosition
            });

            return this;
        }
    }, {
        key: 'bookingEvents',

        /**
         * Bind events related to booking interaction
         */
        value: function bookingEvents() {
            var $booking = this.$booking;
            var $toggle = this.$booking.find('.js-copaair-toggle');

            // Show bottom row when any input gets focus
            $booking.on('focus.copaair', 'input', function (e) {
                $booking.addClass('copaair-widget-open');
                $toggle.removeClass('copaair-hidden');
            });

            // Clicking anywhere in the document hides bottom row
            $booking.on('click.copaair', '.js-copaair-close', function (e) {
                e.preventDefault();
                $booking.removeClass('copaair-widget-open');
                $toggle.addClass('copaair-hidden');
            });
        }
    }]);

    return Booking;
})();

module.exports = Booking;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../lib/Autocomplete":6,"../lib/Datepicker":7,"../lib/FlightControl":8,"../lib/FormHelper":9,"../lib/Template":10}],12:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var Template = require('../lib/Template');

var Signup = function Signup(element, options) {
    var _this = this;

    _classCallCheck(this, Signup);

    this.$form = $(element);

    var defaults = {
        lang: 'es'
    };

    this.options = $.extend({}, defaults, options);

    // Load template
    new Template('signup', {
        lang: this.options.lang,
        callback: function callback(html) {
            _this.$form.html(html);
        }
    });
};

module.exports = Signup;

},{"../lib/Template":10}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2luZGV4LmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGEvY29wYWFpci13aWRnZXRzL2Jvd2VyX2NvbXBvbmVudHMvc3RvcmUuanMvc3RvcmUubWluLmpzIiwibGFuZy9ib29raW5nLmpzb24iLCJsYW5nL2RhdGVwaWNrZXIuanNvbiIsImxhbmcvc2lnbnVwLmpzb24iLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9BdXRvY29tcGxldGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9EYXRlcGlja2VyLmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGEvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvRmxpZ2h0Q29udHJvbC5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhL2NvcGFhaXItd2lkZ2V0cy9zcmMvanMvbGliL0Zvcm1IZWxwZXIuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9UZW1wbGF0ZS5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhL2NvcGFhaXItd2lkZ2V0cy9zcmMvanMvd2lkZ2V0cy9Cb29raW5nLmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGEvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL1NpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLEFBQUMsQ0FBQSxVQUFVLE9BQU8sRUFBRTtBQUNoQixnQkFBWSxDQUFDOztBQUViLFFBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7O0FBRTVDLGNBQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9CLE1BQU0sSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7O0FBRXZDLGVBQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUM5QixNQUFNOztBQUVILGVBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNuQjtDQUNKLENBQUEsQ0FBQyxVQUFTLENBQUMsRUFBRTtBQUNWLGdCQUFZLENBQUM7O0FBRWIsUUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDO1FBQ3RDLE1BQU0sR0FBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FDeEM7Ozs7Ozs7O0FBUUQsS0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsU0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFO0FBQ25ELGVBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFXO0FBQ3hCLGdCQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLENBQUMsRUFBRTtBQUN4QyxpQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDckU7U0FDSixDQUFDLENBQUM7S0FDTixDQUFDOztBQUVGLEtBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxHQUFHLFNBQVMsYUFBYSxDQUFDLE9BQU8sRUFBRTtBQUNqRCxlQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBVztBQUN4QixnQkFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixDQUFDLEVBQUU7QUFDdkMsaUJBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ25FO1NBQ0osQ0FBQyxDQUFDO0tBQ04sQ0FBQztDQUNMLENBQUMsQ0FBRTs7Ozs7Ozs7O0FDeENKLENBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFTLENBQUMsR0FBRTtBQUFDLFFBQUc7QUFBQyxhQUFPLENBQUMsSUFBSSxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLGFBQU0sQ0FBQyxDQUFDLENBQUE7S0FBQztHQUFDLElBQUksQ0FBQyxHQUFDLEVBQUU7TUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFFBQVE7TUFBQyxDQUFDLEdBQUMsY0FBYztNQUFDLENBQUMsR0FBQyxRQUFRO01BQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFHLFNBQVMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsUUFBUSxHQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxLQUFDLElBQUUsSUFBSSxLQUFHLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQSxBQUFDLEVBQUMsQ0FBQyxJQUFFLElBQUksS0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFBLEFBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsWUFBVSxFQUFFLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsU0FBUyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsV0FBVyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsUUFBRyxPQUFPLENBQUMsSUFBRSxRQUFRLEVBQUMsT0FBTyxTQUFTLENBQUMsSUFBRztBQUFDLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxhQUFPLENBQUMsSUFBRSxTQUFTLENBQUE7S0FBQztHQUFDLENBQUMsSUFBRyxDQUFDLEVBQUUsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxBQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsUUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxLQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLFlBQVU7QUFBQyxLQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsWUFBVTtBQUFDLFFBQUksQ0FBQyxHQUFDLEVBQUUsQ0FBQyxRQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsT0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtLQUFDLENBQUMsRUFBQyxDQUFDLENBQUEsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFNBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO0FBQUMsVUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFDO0dBQUMsQ0FBQyxLQUFLLElBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUM7UUFBSyxDQUFDLEVBQUMsQ0FBQztRQUF5TyxDQUFDLEVBQXVNLENBQUM7OztVQUFrRSxDQUFDLEdBQVYsVUFBVyxDQUFDLEVBQUM7QUFBQyxlQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUE7T0FBQzs7QUFBeGlCLFVBQUc7QUFBQyxTQUFDLEdBQUMsSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxzQkFBc0IsR0FBQyxDQUFDLEdBQUMseUNBQXVDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtPQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtPQUFDO0FBQUksT0FBQyxHQUFDLFdBQVMsQ0FBQyxFQUFDO0FBQUMsZUFBTyxZQUFVO0FBQUMsY0FBSSxDQUFDLEdBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsUUFBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBO1NBQUMsQ0FBQTtPQUFDOztBQUFDLE9BQUMsR0FBQyxJQUFJLE1BQU0sQ0FBQyx1Q0FBdUMsRUFBQyxHQUFHLENBQUM7QUFBK0QsT0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLGdCQUFPLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFHLFNBQVMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxBQUFDLENBQUEsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsU0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFlBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7T0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFlBQUksQ0FBQyxHQUFDLEVBQUUsQ0FBQyxRQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtTQUFDLENBQUMsRUFBQyxDQUFDLENBQUEsQ0FBQTtPQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsWUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQUMsQ0FBQyxDQUFBOztHQUFDLElBQUc7QUFBQyxRQUFJLENBQUMsR0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLEtBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtHQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxLQUFDLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUMsT0FBTyxNQUFNLElBQUUsV0FBVyxJQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDLE1BQU0sS0FBRyxNQUFNLEdBQUMsTUFBTSxDQUFDLE9BQU8sR0FBQyxDQUFDLEdBQUMsT0FBTyxNQUFNLElBQUUsVUFBVSxJQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFBO0NBQUMsQ0FBQSxDQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUE7Ozs7Ozs7Ozs7QUNEbitFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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ZUFBZSxFQUFFLG1CQUFtQixFQUFFLFVBQVMsQ0FBQyxFQUFFO0FBQzFELGlCQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsd0JBQVEsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUM1Qyx1QkFBTyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3RDLENBQUMsQ0FBQztTQUVOOzs7V0FwSEMsT0FBTzs7O0FBdUhiLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOzs7Ozs7Ozs7QUNuSnpCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOztJQUVwQyxNQUFNLEdBRUcsU0FGVCxNQUFNLENBRUksT0FBTyxFQUFFLE9BQU8sRUFBRTs7OzBCQUY1QixNQUFNOztBQUdKLFFBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV4QixRQUFJLFFBQVEsR0FBRztBQUNYLFlBQUksRUFBRSxJQUFJO0tBQ2IsQ0FBQzs7QUFFRixRQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7O0FBRy9DLFFBQUksUUFBUSxDQUFDLFFBQVEsRUFBRTtBQUNuQixjQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtBQUN6QixnQkFBUSxFQUFFLGtCQUFDLElBQUksRUFBSztBQUNoQixrQkFBSyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO0tBQ0osQ0FBQyxDQUFDO0NBQ047O0FBSUwsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBOb2RlL0NvbW1vbkpTXG4gICAgICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxufShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIEJvb2tpbmcgPSByZXF1aXJlKCcuL3dpZGdldHMvQm9va2luZycpLFxuICAgICAgICBTaWdudXAgID0gcmVxdWlyZSgnLi93aWRnZXRzL1NpZ251cCcpXG4gICAgO1xuXG4gICAgLyoqXG4gICAgICogQmluZCB3aWRnZXRzIHRvIGpRdWVyeSBvYmplY3QgcHJvdG90eXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIG92ZXJyaWRlIGRlZmF1bHRzLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBDdXJyZW50IG9iamVjdCBpbnN0YW5jZVxuICAgICAqL1xuICAgICQuZm4uY29wYWFpckJvb2tpbmcgPSBmdW5jdGlvbiBjb3BhYWlyQm9va2luZyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoISQuZGF0YSh0aGlzLCAncGx1Z2luX2NvcGFhaXJCb29raW5nJykpIHtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyQm9va2luZycsIG5ldyBCb29raW5nKHRoaXMsIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQuZm4uY29wYWFpclNpZ251cCA9IGZ1bmN0aW9uIGNvcGFhaXJTaWdudXAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyU2lnbnVwJykpIHtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyU2lnbnVwJywgbmV3IFNpZ251cCh0aGlzLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59KSk7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxMyBNYXJjdXMgV2VzdGluICovXG4oZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbygpe3RyeXtyZXR1cm4gciBpbiBlJiZlW3JdfWNhdGNoKHQpe3JldHVybiExfX12YXIgdD17fSxuPWUuZG9jdW1lbnQscj1cImxvY2FsU3RvcmFnZVwiLGk9XCJzY3JpcHRcIixzO3QuZGlzYWJsZWQ9ITEsdC52ZXJzaW9uPVwiMS4zLjE3XCIsdC5zZXQ9ZnVuY3Rpb24oZSx0KXt9LHQuZ2V0PWZ1bmN0aW9uKGUsdCl7fSx0Lmhhcz1mdW5jdGlvbihlKXtyZXR1cm4gdC5nZXQoZSkhPT11bmRlZmluZWR9LHQucmVtb3ZlPWZ1bmN0aW9uKGUpe30sdC5jbGVhcj1mdW5jdGlvbigpe30sdC50cmFuc2FjdD1mdW5jdGlvbihlLG4scil7cj09bnVsbCYmKHI9bixuPW51bGwpLG49PW51bGwmJihuPXt9KTt2YXIgaT10LmdldChlLG4pO3IoaSksdC5zZXQoZSxpKX0sdC5nZXRBbGw9ZnVuY3Rpb24oKXt9LHQuZm9yRWFjaD1mdW5jdGlvbigpe30sdC5zZXJpYWxpemU9ZnVuY3Rpb24oZSl7cmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpfSx0LmRlc2VyaWFsaXplPWZ1bmN0aW9uKGUpe2lmKHR5cGVvZiBlIT1cInN0cmluZ1wiKXJldHVybiB1bmRlZmluZWQ7dHJ5e3JldHVybiBKU09OLnBhcnNlKGUpfWNhdGNoKHQpe3JldHVybiBlfHx1bmRlZmluZWR9fTtpZihvKCkpcz1lW3JdLHQuc2V0PWZ1bmN0aW9uKGUsbil7cmV0dXJuIG49PT11bmRlZmluZWQ/dC5yZW1vdmUoZSk6KHMuc2V0SXRlbShlLHQuc2VyaWFsaXplKG4pKSxuKX0sdC5nZXQ9ZnVuY3Rpb24oZSxuKXt2YXIgcj10LmRlc2VyaWFsaXplKHMuZ2V0SXRlbShlKSk7cmV0dXJuIHI9PT11bmRlZmluZWQ/bjpyfSx0LnJlbW92ZT1mdW5jdGlvbihlKXtzLnJlbW92ZUl0ZW0oZSl9LHQuY2xlYXI9ZnVuY3Rpb24oKXtzLmNsZWFyKCl9LHQuZ2V0QWxsPWZ1bmN0aW9uKCl7dmFyIGU9e307cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0LG4pe2VbdF09bn0pLGV9LHQuZm9yRWFjaD1mdW5jdGlvbihlKXtmb3IodmFyIG49MDtuPHMubGVuZ3RoO24rKyl7dmFyIHI9cy5rZXkobik7ZShyLHQuZ2V0KHIpKX19O2Vsc2UgaWYobi5kb2N1bWVudEVsZW1lbnQuYWRkQmVoYXZpb3Ipe3ZhciB1LGE7dHJ5e2E9bmV3IEFjdGl2ZVhPYmplY3QoXCJodG1sZmlsZVwiKSxhLm9wZW4oKSxhLndyaXRlKFwiPFwiK2krXCI+ZG9jdW1lbnQudz13aW5kb3c8L1wiK2krJz48aWZyYW1lIHNyYz1cIi9mYXZpY29uLmljb1wiPjwvaWZyYW1lPicpLGEuY2xvc2UoKSx1PWEudy5mcmFtZXNbMF0uZG9jdW1lbnQscz11LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIil9Y2F0Y2goZil7cz1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdT1uLmJvZHl9dmFyIGw9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApO24udW5zaGlmdChzKSx1LmFwcGVuZENoaWxkKHMpLHMuYWRkQmVoYXZpb3IoXCIjZGVmYXVsdCN1c2VyRGF0YVwiKSxzLmxvYWQocik7dmFyIGk9ZS5hcHBseSh0LG4pO3JldHVybiB1LnJlbW92ZUNoaWxkKHMpLGl9fSxjPW5ldyBSZWdFeHAoXCJbIVxcXCIjJCUmJygpKissL1xcXFxcXFxcOjs8PT4/QFtcXFxcXV5ge3x9fl1cIixcImdcIik7ZnVuY3Rpb24gaChlKXtyZXR1cm4gZS5yZXBsYWNlKC9eZC8sXCJfX18kJlwiKS5yZXBsYWNlKGMsXCJfX19cIil9dC5zZXQ9bChmdW5jdGlvbihlLG4saSl7cmV0dXJuIG49aChuKSxpPT09dW5kZWZpbmVkP3QucmVtb3ZlKG4pOihlLnNldEF0dHJpYnV0ZShuLHQuc2VyaWFsaXplKGkpKSxlLnNhdmUociksaSl9KSx0LmdldD1sKGZ1bmN0aW9uKGUsbixyKXtuPWgobik7dmFyIGk9dC5kZXNlcmlhbGl6ZShlLmdldEF0dHJpYnV0ZShuKSk7cmV0dXJuIGk9PT11bmRlZmluZWQ/cjppfSksdC5yZW1vdmU9bChmdW5jdGlvbihlLHQpe3Q9aCh0KSxlLnJlbW92ZUF0dHJpYnV0ZSh0KSxlLnNhdmUocil9KSx0LmNsZWFyPWwoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5YTUxEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0cmlidXRlcztlLmxvYWQocik7Zm9yKHZhciBuPTAsaTtpPXRbbl07bisrKWUucmVtb3ZlQXR0cmlidXRlKGkubmFtZSk7ZS5zYXZlKHIpfSksdC5nZXRBbGw9ZnVuY3Rpb24oZSl7dmFyIG49e307cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbihlLHQpe25bZV09dH0pLG59LHQuZm9yRWFjaD1sKGZ1bmN0aW9uKGUsbil7dmFyIHI9ZS5YTUxEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0cmlidXRlcztmb3IodmFyIGk9MCxzO3M9cltpXTsrK2kpbihzLm5hbWUsdC5kZXNlcmlhbGl6ZShlLmdldEF0dHJpYnV0ZShzLm5hbWUpKSl9KX10cnl7dmFyIHA9XCJfX3N0b3JlanNfX1wiO3Quc2V0KHAscCksdC5nZXQocCkhPXAmJih0LmRpc2FibGVkPSEwKSx0LnJlbW92ZShwKX1jYXRjaChmKXt0LmRpc2FibGVkPSEwfXQuZW5hYmxlZD0hdC5kaXNhYmxlZCx0eXBlb2YgbW9kdWxlIT1cInVuZGVmaW5lZFwiJiZtb2R1bGUuZXhwb3J0cyYmdGhpcy5tb2R1bGUhPT1tb2R1bGU/bW9kdWxlLmV4cG9ydHM9dDp0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOmUuc3RvcmU9dH0pKEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSkiLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcIm9yaWdpblwiOiBcIkRlc2RlXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uXCI6IFwiSGFjaWFcIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiU2FsaWRhXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJlZ3Jlc29cIixcbiAgICAgICAgICAgIFwiZWNvbm9taWNcIjogXCJDbGFzZSBFY29uw7NtaWNhXCIsXG4gICAgICAgICAgICBcImJ1c2luZXNzXCI6IFwiQ2xhc2UgRWplY3V0aXZhXCIsXG4gICAgICAgICAgICBcInN1Ym1pdFwiOiBcIlZlciBWdWVsb3NcIixcbiAgICAgICAgICAgIFwiYWR1bHRzXCI6IFwiQWR1bHRvc1wiLFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBcIk5pw7Fvc1wiLFxuICAgICAgICAgICAgXCJpbmZhbnRzXCIgOiBcIkluZmFudGVzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlc1wiOiB7XG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZW5cIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJvcmlnaW5cIjogXCJGcm9tXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uXCI6IFwiVG9cIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiRGVwYXJ0dXJlXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJldHVyblwiLFxuICAgICAgICAgICAgXCJlY29ub21pY1wiOiBcIkJ1c2luZXNzIENsYXNzXCIsXG4gICAgICAgICAgICBcImJ1c2luZXNzXCI6IFwiRWNvbm9teSBDbGFzc1wiLFxuICAgICAgICAgICAgXCJzdWJtaXRcIjogXCJGaW5kIGZsaWdodHNcIixcbiAgICAgICAgICAgIFwiYWR1bHRzXCI6IFwiQWR1bHRzXCIsXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IFwiQ2hpbGRyZW5cIixcbiAgICAgICAgICAgIFwiaW5mYW50c1wiIDogXCJJbmZhbnRzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlc1wiOiB7XG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiOiBcIlBsZWFzZSBjb21wbGV0ZSBhbGwgdGhlIC4uLlwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBsZWFzZSBjb21wbGV0ZSBhbGwgdGhlIC4uLlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicHRcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJvcmlnaW5cIjogXCJEZVwiLFxuICAgICAgICAgICAgXCJkZXN0aW5hdGlvblwiOiBcIlBhcmFcIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiU2HDrWRhXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJlZ3Jlc3NvXCIsXG4gICAgICAgICAgICBcImVjb25vbWljXCI6IFwiQ2xhc3NlIGVjb27DtG1pY2FcIixcbiAgICAgICAgICAgIFwiYnVzaW5lc3NcIjogXCJDbGFzc2UgRXhlY3V0aXZhXCIsXG4gICAgICAgICAgICBcInN1Ym1pdFwiOiBcIkJ1c2NhciB2b29zXCIsXG4gICAgICAgICAgICBcImFkdWx0c1wiOiBcIkFkdWx0b3NcIixcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogXCJDcmlhbsOnYXNcIixcbiAgICAgICAgICAgIFwiaW5mYW50c1wiIDogXCJCZWLDqnNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1lc3NhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibm90aWZpY2F0aW9uXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJyZWdpb25hbFwiOiB7XG4gICAgICAgICAgICBcImNsb3NlVGV4dFwiOiBcIkNlcnJhclwiLFxuICAgICAgICAgICAgXCJwcmV2VGV4dFwiOiBcIiYjeDNDO0FudFwiLFxuICAgICAgICAgICAgXCJuZXh0VGV4dFwiOiBcIlNpZyYjeDNFO1wiLFxuICAgICAgICAgICAgXCJjdXJyZW50VGV4dFwiOiBcIkhveVwiLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzXCI6IFtcImVuZXJvXCIsXCJmZWJyZXJvXCIsXCJtYXJ6b1wiLFwiYWJyaWxcIixcIm1heW9cIixcImp1bmlvXCIsXG4gICAgICAgICAgICBcImp1bGlvXCIsXCJhZ29zdG9cIixcInNlcHRpZW1icmVcIixcIm9jdHVicmVcIixcIm5vdmllbWJyZVwiLFwiZGljaWVtYnJlXCJdLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzU2hvcnRcIjogW1wiZW5lXCIsXCJmZWJcIixcIm1hclwiLFwiYWJyXCIsXCJtYXlcIixcImp1bicsJ2p1bFwiLFwiYWdvXCIsXCJzZXBcIixcIm9jdFwiLFwibm92XCIsXCJkaWNcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzXCI6IFtcImRvbWluZ29cIixcImx1bmVzXCIsXCJtYXJ0ZXNcIixcIm1pw6lyY29sZXMnLCdqdWV2ZXNcIixcInZpZXJuZXNcIixcInPDoWJhZG9cIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzU2hvcnRcIjogW1wiZG9tXCIsXCJsdW5cIixcIm1hclwiLFwibWnDqVwiLFwianV2XCIsXCJ2aWVcIixcInPDoWJcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzTWluXCI6IFtcIkRcIixcIkxcIixcIk1cIixcIlhcIixcIkpcIixcIlZcIixcIlNcIl0sXG4gICAgICAgICAgICBcIndlZWtIZWFkZXJcIjogXCJTbVwiLFxuICAgICAgICAgICAgXCJkYXRlRm9ybWF0XCI6IFwiZGQvbW0veXlcIixcbiAgICAgICAgICAgIFwiZmlyc3REYXlcIjogMSxcbiAgICAgICAgICAgIFwiaXNSVExcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNob3dNb250aEFmdGVyWWVhclwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwieWVhclN1ZmZpeFwiOiBcIlwiXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgXCJlblwiOiB7XG4gICAgICAgIFwicmVnaW9uYWxcIiA6IHt9XG4gICAgfSxcbiAgICBcInB0XCI6IHtcbiAgICAgICAgXCJyZWdpb25hbFwiIDoge1xuICAgICAgICAgICAgXCJjbG9zZVRleHRcIjogXCJGZWNoYXJcIixcbiAgICAgICAgICAgIFwicHJldlRleHRcIjogXCImI3gzQztBbnRlcmlvclwiLFxuICAgICAgICAgICAgXCJuZXh0VGV4dFwiOiBcIlByw7N4aW1vJiN4M0U7XCIsXG4gICAgICAgICAgICBcImN1cnJlbnRUZXh0XCI6IFwiSG9qZVwiLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzXCI6IFtcIkphbmVpcm9cIixcIkZldmVyZWlyb1wiLFwiTWFyw6dvXCIsXCJBYnJpbFwiLFwiTWFpb1wiLFwiSnVuaG9cIixcIkp1bGhvXCIsXCJBZ29zdG9cIixcIlNldGVtYnJvXCIsXCJPdXR1YnJvXCIsXCJOb3ZlbWJyb1wiLFwiRGV6ZW1icm9cIl0sXG4gICAgICAgICAgICBcIm1vbnRoTmFtZXNTaG9ydFwiOiBbXCJKYW5cIixcIkZldlwiLFwiTWFyXCIsXCJBYnJcIixcIk1haVwiLFwiSnVuXCIsXCJKdWxcIixcIkFnb1wiLFwiU2V0XCIsXCJPdXRcIixcIk5vdlwiLFwiRGV6XCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc1wiOiBbXCJEb21pbmdvXCIsXCJTZWd1bmRhLWZlaXJhXCIsXCJUZXLDp2EtZmVpcmFcIixcIlF1YXJ0YS1mZWlyYScsJ1F1aW50YS1mZWlyYVwiLFwiU2V4dGEtZmVpcmFcIixcIlPDoWJhZG9cIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzU2hvcnRcIjogW1wiRG9tXCIsXCJTZWdcIixcIlRlclwiLFwiUXVhXCIsXCJRdWlcIixcIlNleFwiLFwiU8OhYlwiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNNaW5cIjogW1wiRG9tXCIsXCJTZWdcIixcIlRlclwiLFwiUXVhXCIsXCJRdWlcIixcIlNleFwiLFwiU8OhYlwiXSxcbiAgICAgICAgICAgIFwid2Vla0hlYWRlclwiOiBcIlNtXCIsXG4gICAgICAgICAgICBcImRhdGVGb3JtYXRcIjogXCJkZC9tbS95eVwiLFxuICAgICAgICAgICAgXCJmaXJzdERheVwiOiAwLFxuICAgICAgICAgICAgXCJpc1JUTFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2hvd01vbnRoQWZ0ZXJZZWFyXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ5ZWFyU3VmZml4XCI6IFwiXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwiZm5hbWVcIjogXCJOb21icmVcIixcbiAgICAgICAgICAgIFwibG5hbWVcIjogXCJBcGVsbGlkb1wiLFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIkVtYWlsXCIsXG4gICAgICAgICAgICBcImNvdW50cnlcIjogXCJQYcOtc1wiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiQ2l1ZGFkXCIsXG4gICAgICAgICAgICBcInBob25lXCI6IFwiTcOzdmlsXCIsXG4gICAgICAgICAgICBcInN1YnNjcmliZVwiOiBcIlN1YnNjcmliaXJzZVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZW5cIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJmbmFtZVwiOiBcIk5hbWVcIixcbiAgICAgICAgICAgIFwibG5hbWVcIjogXCJMYXN0IE5hbWVcIixcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJFbWFpbFwiLFxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiQ291bnRyeVwiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiQ2l0eVwiLFxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIk1vYmlsZVwiLFxuICAgICAgICAgICAgXCJzdWJzY3JpYmVcIjogXCJTdWJzY3JpYmVcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInB0XCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwiZm5hbWVcIjogXCJOb21lXCIsXG4gICAgICAgICAgICBcImxuYW1lXCI6IFwiU29icmVub21lXCIsXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiRS1tYWlsXCIsXG4gICAgICAgICAgICBcImNvdW50cnlcIjogXCJQYcOtc1wiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiQ2lkYWRlXCIsXG4gICAgICAgICAgICBcInBob25lXCI6IFwiQ2VsdWxhclwiLFxuICAgICAgICAgICAgXCJzdWJzY3JpYmVcIjogXCJJbnNjcmV2ZXItc2VcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBGbGlnaHRDb250cm9sID0gcmVxdWlyZSgnLi9GbGlnaHRDb250cm9sJylcbjtcblxuLyoqXG4gKiBBdXRvY29tcGxldGUgd2lkZ2V0IHdpdGggbGlzdCBvZiBDb3BhJ3MgZGVzdGluYXRpb25zXG4gKiBmb3IgYmV0dGVyIHVzYWJpbGl0eSB0aGFuIGEgbmF0aXZlIHNlbGVjdCBtZW51LlxuICogQGNsYXNzXG4gKi9cbmNsYXNzIEF1dG9jb21wbGV0ZVxue1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIEN1c3RvbSBvcHRpb25zIGZvciB0aGlzIHdpZGdldCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgICAgIG1pbkxlbmd0aDogMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBkZXN0aW5hdGlvbnMgZnJvbSBGbGlnaHQgQ29udHJvbCBBUElcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2sgd2hlbiBBUEkgY2FsbCBmaW5pc2hlc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICBhbmQgZGVzdGluYXRpb25zIGFyZSBmZXRjaGVkXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzdGFydChjYikge1xuICAgICAgICB2YXIgZmxpZ2h0Q29udHJvbCA9IG5ldyBGbGlnaHRDb250cm9sKHsgbGFuZzogdGhpcy5vcHRpb25zLmxhbmcgfSk7XG5cbiAgICAgICAgZmxpZ2h0Q29udHJvbC5mZXRjaCgnZGVzdGluYXRpb25zJywgKGRlc3RpbmF0aW9ucykgPT4ge1xuICAgICAgICAgICAgLy8gRm9ybWF0IHJhdyBkZXN0aW5hdGlvbnMgdG8gYXV0b2NvbXBsZXRlIHN0cnVjdHVyZVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNvdXJjZSA9IHRoaXMuZm9ybWF0KGRlc3RpbmF0aW9ucy5saXN0KTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBhdXRvY29tcGxldGUgd2lkZ2V0XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50IERPTSBlbGVtZW50IHRvIGF0dGFjaCB3aWRnZXQgdG9cbiAgICAgKi9cbiAgICByZW5kZXIoZWxlbWVudCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKGVsZW1lbnQpLmhpZGUoKSxcbiAgICAgICAgICAgIHNvdXJjZUNsYXNzZXMgPSAkdGhpcy5hdHRyKCdjbGFzcycpLFxuICAgICAgICAgICAgc291cmNlVmFsdWUgPSAkdGhpcy52YWwoKSxcbiAgICAgICAgICAgIHNvdXJjZVBsYWNlaG9sZGVyID0gJHRoaXMuYXR0cigncGxhY2Vob2xkZXInKSxcbiAgICAgICAgICAgIGRhdGFJbnB1dCA9ICR0aGlzLmRhdGEoJ2lucHV0LWZpZWxkJylcbiAgICAgICAgO1xuXG4gICAgICAgIHZhciAkaW5wdXQgPSAkKCc8aW5wdXQgLz4nKVxuICAgICAgICAgICAgLnZhbChzb3VyY2VWYWx1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd0eXBlJywgJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3BsYWNlaG9sZGVyJywgc291cmNlUGxhY2Vob2xkZXIpXG4gICAgICAgICAgICAuYXR0cignZGF0YS1pbnB1dC1maWVsZCcsIGRhdGFJbnB1dClcbiAgICAgICAgO1xuXG4gICAgICAgIC8vIEFkZCBhdXRvY29tcGxldGUgZnVuY3Rpb25hbGl0eVxuICAgICAgICAkaW5wdXQuYXV0b2NvbXBsZXRlKHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgLy8gT3BlbiBsaXN0IG9uIGlucHV0IGZvY3VzXG4gICAgICAgICRpbnB1dC5vbignZm9jdXMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZiAoJHRoaXMudmFsKCkubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICR0aGlzLmF1dG9jb21wbGV0ZSgnc2VhcmNoJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBzdHlsaW5nXG4gICAgICAgICRpbnB1dFxuICAgICAgICAgICAgLmFkZENsYXNzKHNvdXJjZUNsYXNzZXMpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3VpLXdpZGdldCAgdWktd2lkZ2V0LWNvbnRlbnQgIHVpLXN0YXRlLWRlZmF1bHQnKTtcblxuICAgICAgICAvLyBJbnNlcnQgaW50byBET01cbiAgICAgICAgJGlucHV0Lmluc2VydEFmdGVyKCR0aGlzKTtcblxuICAgICAgICAvLyBPdmVyd3JpdGUgYXV0b2NvbXBsZXRlIGl0ZW0gcmVuZGVyaW5nIHdpdGggY3VzdG9tIG1hcmt1cFxuICAgICAgICAkaW5wdXQuYXV0b2NvbXBsZXRlKCdpbnN0YW5jZScpLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24odWwsIGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAkKCc8bGk+JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kKGl0ZW0ubGFiZWwpXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKHVsKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBDdXN0b20gZmlsdGVyaW5nIGZ1bmN0aW9uXG4gICAgICAgICQudWkuYXV0b2NvbXBsZXRlLmZpbHRlciA9IGZ1bmN0aW9uIGF1dG9Db21wbGV0ZUZpbHRlcihhcnJheSwgdGVybSkge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCdcXFxcYicgKyAkLnVpLmF1dG9jb21wbGV0ZS5lc2NhcGVSZWdleCh0ZXJtKSwgJ2knKTtcbiAgICAgICAgICAgIHJldHVybiAkLmdyZXAoYXJyYXksIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVyLnRlc3QodmFsdWUubGFiZWwgfHwgdmFsdWUudmFsdWUgfHwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0cyBkZXN0aW5hdGlvbnMgaW50byB0aGUgbmVlZGVkIHN0cnVjdHVyZSB0byBiZSBkaXNwbGF5ZWRcbiAgICAgKiBvbiB0aGUgYXV0b2NvbXBsZXRlIG1lbnUgd2lkZ2V0LlxuICAgICAqIEBwYXJhbSAge0FycmF5fSBkZXN0aW5hdGlvbnMgUmF3IGRhdGEgcmV0dXJuZWQgZnJvbSBGbGlnaHQgQ29udHJvbFxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgICAgRm9ybWF0dGVkIGRlc3RpbmF0aW9uc1xuICAgICAqL1xuICAgIGZvcm1hdChkZXN0aW5hdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgICQuZWFjaChkZXN0aW5hdGlvbnMsIChpLCBkZXN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgdGVtcExhYmVsID1cbiAgICAgICAgICAgICAgICAgICAgYDxiPiR7IGRlc3QubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10gfSwgJHsgZGVzdC5jb3VudHJ5IH08L2I+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29kZVwiPiB8ICR7IGRlc3QuaWQgfTwvc3Bhbj5gLFxuICAgICAgICAgICAgICAgIHRlbXBWYWx1ZSA9IGRlc3QuaWQsXG4gICAgICAgICAgICAgICAgdGV4dFZhbHVlID0gZGVzdC5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSArICcsICcgKyBkZXN0LmlkO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiB0ZW1wTGFiZWwsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRlbXBWYWx1ZSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0ZXh0VmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBFeHBvcnRcbiAqIEBleHBvcnRzIEF1dG9jb21wbGV0ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IEF1dG9jb21wbGV0ZTtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgaTE4biA9IHJlcXVpcmUoJy4uLy4uLy4uL2xhbmcvZGF0ZXBpY2tlci5qc29uJyksXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIGRlcGFydHVyZVNlbGVjdG9yOiAnLmNvcGFhaXItYm9va2luZy1kYXRlcGlja2VyLWRlcGFydHVyZScsXG4gICAgICAgIHJldHVyblNlbGVjdG9yOiAnLmNvcGFhaXItYm9va2luZy1kYXRlcGlja2VyLXJldHVybicsXG4gICAgICAgIGRhdGVSdWxlczoge1xuICAgICAgICAgICAgdG9kYXk6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICB3ZWVrTGF0ZXI6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApXG4gICAgICAgIH0sXG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIGJlZm9yZVNob3c6IGZ1bmN0aW9uKGlucHV0LCBpc250KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlzbnQuZHBEaXYucG9zaXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBteTogJ2xlZnQgYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgYXQ6ICdsZWZ0IHRvcCcsXG4gICAgICAgICAgICAgICAgICAgIG9mOiBpbnB1dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG47XG5cbi8qKlxuICogRGF0ZXBpY2tlciBtb2R1bGVcbiAqL1xuY2xhc3MgRGF0ZXBpY2tlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGRhdGUgcGlja2VyIGluc2lkZSB0aGUgYm9va2luZyBmb3JtXG4gICAgICogc2V0dXBzIHRoZSBkZWZhdWx0cyBkYXRlcyBhbmQgbGFuZ3VhZ2VcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0TG9jYWxlKCk7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdERhdGVzKCk7XG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGRlZmF1bHRzIGRhdGVzXG4gICAgICogdGhpcyBjb25zaXN0IGluIHNldCBjdXJyZW50IGRhdGUgZm9yIGRlcGFydHVyZVxuICAgICAqIGFuZCBvbmUgd2VlayBsYXRlciBmb3IgcmV0dXJuXG4gICAgICovXG4gICAgc2V0RGVmYXVsdERhdGVzKCkge1xuICAgICAgICB2YXIgZGF0ZVJ1bGVzID0gdGhpcy5vcHRpb25zLmRhdGVSdWxlcyxcbiAgICAgICAgICAgICRkZXBhcnR1cmVGaWVsZCA9ICQodGhpcy5vcHRpb25zLmRlcGFydHVyZVNlbGVjdG9yKSxcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZCA9ICQodGhpcy5vcHRpb25zLnJldHVyblNlbGVjdG9yKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMubWluRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIodGhpcy5vcHRpb25zKTtcbiAgICAgICAgJHJldHVybkZpZWxkLmRhdGVwaWNrZXIodGhpcy5vcHRpb25zKTtcblxuICAgICAgICAkZGVwYXJ0dXJlRmllbGQuZGF0ZXBpY2tlcihcInNldERhdGVcIiwgZGF0ZVJ1bGVzLnRvZGF5KTtcbiAgICAgICAgJHJldHVybkZpZWxkLmRhdGVwaWNrZXIoXCJzZXREYXRlXCIsIGRhdGVSdWxlcy53ZWVrTGF0ZXIpO1xuICAgIH1cblxuICAgIGV2ZW50cygpIHtcbiAgICAgICAgdmFyICRkZXBhcnR1cmVGaWVsZCA9ICQodGhpcy5vcHRpb25zLmRlcGFydHVyZVNlbGVjdG9yKSxcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZCA9ICQodGhpcy5vcHRpb25zLnJldHVyblNlbGVjdG9yKTtcblxuICAgICAgICAvLyAkZGVwYXJ0dXJlRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ29uU2VsZWN0JywgdGhpcy5vblNlbGVjdE91dGJvdW5kKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdE91dGJvdW5kKGRhdGVUZXh0LCBpbnN0KSB7XG4gICAgICAgICAgICB2YXIgJHJldHVybkZpZWxkID0gJCh0aGlzLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpLFxuICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShpbnN0LnNlbGVjdGVkWWVhciwgaW5zdC5zZWxlY3RlZE1vbnRoLCBpbnN0LnNlbGVjdGVkRGF5KTtcblxuICAgICAgICAgICAgLy90aGlzIHNldHMgdGhlIGluYm91bmQgZGF0ZSBwaWNrZXIgdG8gYSB3ZWVrIGxhdGVyIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgd2Vla2xhdGVyID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignc2V0RGF0ZScsIHdlZWtsYXRlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJlIGRhdGVwaWNrZXIgZGVwZW5kaW5nIG9uIHRoZVxuICAgICAqIGxvY2FsaXphdGlvblxuICAgICAqL1xuICAgIHNldExvY2FsZSgpIHtcbiAgICAgICAgdmFyIHJlZ2lvbmFsID0gaTE4blt0aGlzLm9wdGlvbnMubGFuZ10ucmVnaW9uYWw7XG4gICAgICAgICQuZGF0ZXBpY2tlci5zZXREZWZhdWx0cyhyZWdpb25hbCk7XG4gICAgfVxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEYXRlcGlja2VyO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnJlcXVpcmUoJ3N0b3JlLWpzJyk7XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgYXBpOiB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbnMgOiBcImh0dHBzOi8vZmxpZ2h0Y29udHJvbC5pby9hcGkvcm91dGVzL2Rlc3RpbmF0aW9uc1wiLFxuICAgICAgICAgICAgY291bnRyaWVzIDogXCJodHRwczovL2ZsaWdodGNvbnRyb2wuaW8vYXBpL3JvdXRlcy9jb3VudHJpZXNcIixcbiAgICAgICAgICAgIHJlZ2lvbnMgOiBcImh0dHBzOi8vZmxpZ2h0Y29udHJvbC5pby9hcGkvcm91dGVzL3JlZ2lvbnNcIixcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcmFnZUV4cGlyYXRpb246IDg2NDAwMDAwLFxuICAgICAgICBzdG9yYWdlOiB0cnVlLFxuICAgIH1cbjtcblxuLyoqXG4gKiBFeHRlbnNpb24gdG8gdGhlIHN0b3JhZ2UgY2xhc3NcbiAqIHRvIHNldHVwIHRoZSBleHBpcmF0aW9uIHZhbHVlXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgc3RvcmVXaWR0aEV4cGlyYXRpb24gPSB7XG4gICAgc2V0OiBmdW5jdGlvbihrZXksIHZhbCwgZXhwKSB7XG4gICAgICAgIHN0b3JlLnNldChrZXksIHsgdmFsOnZhbCwgZXhwOmV4cCwgdGltZTpuZXcgRGF0ZSgpLmdldFRpbWUoKSB9KVxuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgdmFyIGluZm8gPSBzdG9yZS5nZXQoa2V5KVxuICAgICAgICBpZiAoIWluZm8pIHsgcmV0dXJuIG51bGwgfVxuICAgICAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBpbmZvLnRpbWUgPiBpbmZvLmV4cCkgeyByZXR1cm4gbnVsbCB9XG4gICAgICAgIHJldHVybiBpbmZvLnZhbFxuICAgIH1cbn1cblxuLyoqXG4gKiBNb2R1bGUgRmxpZ2h0Q29udHJvbFxuICovXG5jbGFzcyBGbGlnaHRDb250cm9sIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuXG4gICAgICAgIGlmKCFzdG9yZS5lbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYnJvd3NlciBub3Qgc3VwcG9ydGVkIG9yIGluIHByaXZhdGUgbW9kZScpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0b3JhZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIGRhdGEgZnJvbSBmbGlnaHQgY29udHJvbGxlclxuICAgICAqIGJhc2VkIG9uIHRoZSByZXNvdXJjZSBuYW1lXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgIHJlc291cmNlTmFtZTogZGVzdGluYXRpb25zfGNvdW50cmllc3xyZWdpb25zXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNiICBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGZldGNoKHJlc291cmNlTmFtZSwgY2IpIHtcbiAgICAgICAgdmFyIHJlc291cmNlVmFsdWUgPSB7fTtcblxuICAgICAgICBpZih0aGlzLm9wdGlvbnMuc3RvcmFnZSAmJiBzdG9yZVdpZHRoRXhwaXJhdGlvbi5nZXQocmVzb3VyY2VOYW1lKVxuICAgICAgICAgICAmJiBzdG9yZVdpZHRoRXhwaXJhdGlvbi5nZXQocmVzb3VyY2VOYW1lICsgJy5jb3VudCcpKSB7XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmxpc3QgPSBzdG9yZVdpZHRoRXhwaXJhdGlvbi5nZXQocmVzb3VyY2VOYW1lKTtcbiAgICAgICAgICAgIHJlc291cmNlVmFsdWUuY291bnQgPSBzdG9yZVdpZHRoRXhwaXJhdGlvbi5nZXQocmVzb3VyY2VOYW1lICsgJy5jb3VudCcpO1xuXG4gICAgICAgICAgIHJldHVybiBjYihyZXNvdXJjZVZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQuZ2V0SlNPTih0aGlzLm9wdGlvbnMuYXBpW3Jlc291cmNlTmFtZV0sIChkYXRhKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuc29ydE5hbWVzKGRhdGEpO1xuXG4gICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMuc3RvcmFnZSkge1xuICAgICAgICAgICAgICAgIHN0b3JlV2lkdGhFeHBpcmF0aW9uLnNldChyZXNvdXJjZU5hbWUsIGRhdGEsIHRoaXMub3B0aW9ucy5zdG9yYWdlRXhwaXJhdGlvbik7XG4gICAgICAgICAgICAgICAgc3RvcmVXaWR0aEV4cGlyYXRpb24uc2V0KHJlc291cmNlTmFtZSArICcuY291bnQnLCBkYXRhLmxlbmd0aCwgdGhpcy5vcHRpb25zLnN0b3JhZ2VFeHBpcmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc291cmNlVmFsdWUubGlzdCA9IGRhdGE7XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmNvdW50ID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGNiKHJlc291cmNlVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gc29ydCBkYXRhXG4gICAgICogYmFzZWQgb24gbGFuZ3VhZ2VcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBzb3J0TmFtZXMoZGF0YSkge1xuICAgICAgICBkYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLm5hbWVbdGhpcy5vcHRpb25zLmxhbmddID4gYi5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSkgcmV0dXJuIDE7XG4gICAgICAgICAgICBpZiAoYS5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSA8IGIubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10pIHJldHVybiAtMTtcblxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbGlnaHRDb250cm9sO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgb3JpZ2luOiAnYWxsJyxcbiAgICAgICAgZGVzdGluYXRpb246ICdhbGwnLFxuICAgICAgICAvLyByZXF1aXJlZCBmaWVsZCB0byBzdWJtaXQgZm9ybVxuICAgICAgICAvLyB0byBjb3BhXG4gICAgICAgIGlucHV0czoge1xuICAgICAgICAgICAgdHJpcFR5cGU6IFwiUlRcIixcbiAgICAgICAgICAgIGZsZXhpYmxlU2VhcmNoOiBcInRydWVcIixcbiAgICAgICAgICAgIHBvczogXCJDTUdTXCIsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMF0udHlwZVwiOiBcIkFEVFwiLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzFdLnR5cGVcIjogXCJDTk5cIixcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1syXS50eXBlXCI6IFwiSU5GXCIsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMF0uYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMV0uYW1vdW50XCI6IDAsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMl0uYW1vdW50XCI6IDAsXG4gICAgICAgICAgICBcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiOiBudWxsLFxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiOiBudWxsLFxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCI6IG51bGwsXG4gICAgICAgICAgICBcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlRGF5XCI6IG51bGwsXG4gICAgICAgICAgICBcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCI6IG51bGwsXG4gICAgICAgICAgICAvLyBcImNvdXBvblwiOiBudWxsLFxuICAgICAgICAgICAgLy8gb3JpZ2luXG4gICAgICAgICAgICBcIm91dGJvdW5kT3B0aW9uLm9yaWdpbkxvY2F0aW9uQ29kZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLmRlc3RpbmF0aW9uTG9jYXRpb25Db2RlXCI6IG51bGwsXG4gICAgICAgICAgICAvLyBkZXN0aW5hdGlvblxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLm9yaWdpbkxvY2F0aW9uQ29kZVwiOiBudWxsLFxuICAgICAgICAgICAgLy8gLy8gY2FiaW4gY2xhc3MgQnVzaW5lc3N8RWNvbm9teVxuICAgICAgICAgICAgXCJjYWJpbkNsYXNzXCI6IFwiRWNvbm9teVwiLFxuICAgICAgICAgICAgLy8gZDE6IG51bGwsXG4gICAgICAgICAgICBsYW5nOiAnZXMnXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1Vcmw6ICdodHRwczovL2Jvb2tpbmdzLmNvcGFhaXIuY29tL0NNR1MvJyArXG4gICAgICAgICAgICAgICAgICAgICAgICdBaXJMb3dGYXJlU2VhcmNoRXh0ZXJuYWwuZG8/J1xuICAgIH1cbjtcblxuLyoqXG4gKiBGb3JtSGVscGVyIG1vZHVsZVxuICovXG5jbGFzcyBGb3JtSGVscGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuXG4gICAgICAgIC8vIHNldCBkZWZhdXRscyB2YWx1ZXNcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0Qm91bmRzKCk7XG4gICAgICAgIHRoaXMuc2V0RGF0ZXModGhpcy5vcHRpb25zLmRhdGVwaWNrZXIsIHtyZXR1cm5zOnRydWUsIGRlcGFydHVyZTp0cnVlfSk7XG5cbiAgICAgICAgLy8gbG9hZCBldmVudHMgcmVsYXRlZCB3aXRoIGZvcm0gaGVscGVyIGFuZCBvdGhlciBtb2R1bGVzXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub3B0aW9ucy5pbnB1dHMpO1xuICAgIH1cblxuXG5cbiAgICBwcm9jZXNzKCkge1xuICAgICAgICB2YXIgaHR0cFF1ZXJ5ID0gJC5wYXJhbSh0aGlzLm9wdGlvbnMuaW5wdXRzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaHR0cFF1ZXJ5KTtcbiAgICAgICAgdmFyIHVybCA9IHRoaXMub3B0aW9ucy5mb3JtVXJsO1xuXG4gICAgICAgIHZhciB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uRXJyb3IoKTtcblxuICAgICAgICBpZiAodmFsaWRhdGlvbi5lcnJvcikge1xuICAgICAgICAgICAgLy8gaGFuZGxlIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb24uYmFnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIGVycm9ycywgZm9yd2FyZCBmb3JtIHZhbHVlcyB0byBjb3BhXG4gICAgICAgICAgICB2YXIgc2VhcmNoV2luZG93ID0gd2luZG93Lm9wZW4odXJsICsgaHR0cFF1ZXJ5LCAnX2JsYW5rJyk7XG4gICAgICAgICAgICBzZWFyY2hXaW5kb3cuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldERlZmF1bHRCb3VuZHMoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vcmlnaW4gIT09ICdhbGwnKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvdW5kcygnb3JpZ2luJywgdGhpcy5vcHRpb25zLm9yaWdpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uICE9PSdhbGwnKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvdW5kcygnZGVzdGluYXRpb24nLCB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRCb3VuZHMoYm91bmQsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgaWYgKGJvdW5kID09PSAnb3JpZ2luJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLm9yaWdpbkxvY2F0aW9uQ29kZVwiXSA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24uZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIl0gPSBsb2NhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib3VuZCA9PT0gJ2Rlc3RpbmF0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLmRlc3RpbmF0aW9uTG9jYXRpb25Db2RlXCJdID0gbG9jYXRpb247XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIl0gPSBsb2NhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0RGF0ZXMoZGF0ZXBpY2tlciwgYm91bmRzKSB7XG4gICAgICAgIC8vIGdldCBjdXJyZW50IGRhdGVwaWNrZXJzIGRhdGVzXG4gICAgICAgIHZhciBkZXBhcnR1cmVEYXRlID0gJChkYXRlcGlja2VyLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLmRhdGVwaWNrZXIoJ2dldERhdGUnKSxcbiAgICAgICAgcmV0dXJuRGF0ZSA9ICQoZGF0ZXBpY2tlci5vcHRpb25zLnJldHVyblNlbGVjdG9yKS5kYXRlcGlja2VyKCdnZXREYXRlJyk7XG5cbiAgICAgICAgaWYgKGJvdW5kcy5yZXR1cm5zKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIl0gPSByZXR1cm5EYXRlLmdldFVUQ0RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCJdID0gcmV0dXJuRGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZVllYXJcIl0gPSByZXR1cm5EYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihib3VuZHMuZGVwYXJ0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlRGF5XCJdID0gZGVwYXJ0dXJlRGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIl0gPSBkZXBhcnR1cmVEYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZVllYXJcIl0gPSBkZXBhcnR1cmVEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDYWJpbkNsYXNzKHRhcmdldCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiY2FiaW5DbGFzc1wiXSA9ICQodGFyZ2V0KS52YWwoKTtcbiAgICB9XG5cbiAgICBzZXRQYXNzZW5nZXJzQW1vdW50KHR5cGUsIHZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYWR1bHQnOlxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJndWVzdFR5cGVzWzBdLmFtb3VudFwiXSA9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGlsZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImd1ZXN0VHlwZXNbMV0uYW1vdW50XCJdID0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luZmFudCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImd1ZXN0VHlwZXNbMl0uYW1vdW50XCJdID0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENvdXBvbihjb3Vwb24pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0cy5jb3Vwb24gPSBjb3Vwb247XG4gICAgfVxuXG4gICAgc2V0RDEoZDFWYWx1ZSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzLmQxID0gZDFWYWx1ZTtcbiAgICB9XG5cbiAgICB2YWxpZGF0aW9uRXJyb3IoKSB7XG4gICAgICAgIHZhciBlcnJvcnMgID0ge1xuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgYmFnOltdXG4gICAgICAgIH07XG4gICAgICAgIHZhciBjdXJyZW50RXJyb3I7XG4gICAgICAgIGZvciAodmFyIGlucHV0IGluIHRoaXMub3B0aW9ucy5pbnB1dHMpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLm9wdGlvbnMuaW5wdXRzW2lucHV0XSAmJiB0aGlzLm9wdGlvbnMuaW5wdXRzW2lucHV0XSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvciA9IHt9O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvci5maWVsZCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvci5tZXNzYWdlID0gYFRoZSBpbnB1dCAke2lucHV0fSBtdXN0IGhhdmUgc29tZSB2YWx1ZWA7XG4gICAgICAgICAgICAgICAgZXJyb3JzLmJhZy5wdXNoKGN1cnJlbnRFcnJvcik7XG4gICAgICAgICAgICAgICAgZXJyb3JzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgfTtcblxuICAgIGV2ZW50cygpIHtcblxuICAgICAgICB2YXIgZGF0ZXBpY2tlciA9IHRoaXMub3B0aW9ucy5kYXRlcGlja2VyLFxuICAgICAgICAgICAgJGRlcGFydHVyZUZpZWxkID0gJChkYXRlcGlja2VyLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLFxuICAgICAgICAgICAgJHJldHVybkZpZWxkID0gJChkYXRlcGlja2VyLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpO1xuXG4gICAgICAgICRkZXBhcnR1cmVGaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnb25TZWxlY3QnLCAoZGF0ZVRleHQsIGluc3QpID0+e1xuXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGluc3Quc2VsZWN0ZWRZZWFyLCBpbnN0LnNlbGVjdGVkTW9udGgsIGluc3Quc2VsZWN0ZWREYXkpO1xuXG4gICAgICAgICAgICAvLyB0aGlzIHNldHMgdGhlIGluYm91bmQgZGF0ZSBwaWNrZXIgdG8gYSB3ZWVrIGxhdGVyIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgd2Vla2xhdGVyID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignc2V0RGF0ZScsIHdlZWtsYXRlcik7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ21pbkRhdGUnLCBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0ZXMoZGF0ZXBpY2tlciwge3JldHVybnM6dHJ1ZSwgZGVwYXJ0dXJlOnRydWV9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ29uU2VsZWN0JywgKGRhdGVUZXh0LCBpbnN0KSA9PntcblxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShpbnN0LnNlbGVjdGVkWWVhciwgaW5zdC5zZWxlY3RlZE1vbnRoLCBpbnN0LnNlbGVjdGVkRGF5KTtcblxuICAgICAgICAgICAgLy8gdGhpcyBzZXRzIHRoZSBpbmJvdW5kIGRhdGUgcGlja2VyIHRvIGEgd2VlayBsYXRlciBvZiBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgdmFyIHdlZWtsYXRlciA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlcyhkYXRlcGlja2VyLCB7cmV0dXJuczp0cnVlLCBkZXBhcnR1cmU6ZmFsc2V9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLWNhYmluLWNsYXNzJykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2FiaW5DbGFzcyhlLnRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1hZHVsdHMtYW1vdW50Jykuc2VsZWN0bWVudSh7XG4gICAgICAgICAgICBjaGFuZ2U6IChlLCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFzc2VuZ2Vyc0Ftb3VudCgnYWR1bHQnLCB1aS5pdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLWNoaWxkcmVuLWFtb3VudCcpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgY2hhbmdlOiAoZSwgdWkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhc3NlbmdlcnNBbW91bnQoJ2NoaWxkJywgdWkuaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1pbmZhbnRzLWFtb3VudCcpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgY2hhbmdlOiAoZSwgdWkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhc3NlbmdlcnNBbW91bnQoJ2luZmFudCcsIHVpLml0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtc3VibWl0Jykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2VzcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtSGVscGVyO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGFuZGxlYmFycycpLFxuICAgIGkxOG4gPSB7XG4gICAgICAgIGJvb2tpbmc6IHJlcXVpcmUoJy4uLy4uLy4uL2xhbmcvYm9va2luZy5qc29uJyksXG4gICAgICAgIHNpZ251cDogcmVxdWlyZSgnLi4vLi4vLi4vbGFuZy9zaWdudXAuanNvbicpLFxuICAgIH0sXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIHNyYzogd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvYm93ZXJfY29tcG9uZW50cy9jb3BhYWlyLXdpZGdldHMvdGVtcGxhdGVzJyxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge31cbiAgICB9XG47XG5cbmNsYXNzIFRlbXBsYXRlXG57XG5cbiAgICBjb25zdHJ1Y3Rvcih3aWRnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKHR5cGVvZiBIYW5kbGViYXJzICE9PSAndW5kZWZpbmVkJyAmJiBIYW5kbGViYXJzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogYCR7dGhpcy5vcHRpb25zLnNyY30vJHt3aWRnZXR9Lmhic2AsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHRwbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGF0YSA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIGkxOG5bd2lkZ2V0XVt0aGlzLm9wdGlvbnMubGFuZ10pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaHRtbCA9IHRoaXMuY29tcGlsZSh3aWRnZXQsIHRwbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jYWxsYmFjayhodG1sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoaXMgcGx1Z2luIHJlcXVpcmVzIEhhbmRsZWJhcnMuanMnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBpbGUod2lkZ2V0LCB0cGwpIHtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHRwbCk7XG4gICAgICAgIHZhciBodG1sID0gdGVtcGxhdGUodGhpcy5vcHRpb25zLmRhdGEpO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVtcGxhdGU7XG4iLCIvKipcbiAqIE1vZHVsZXNcbiAqL1xudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBUZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL2xpYi9UZW1wbGF0ZScpLFxuICAgIEZsaWdodENvbnRyb2wgPSByZXF1aXJlKCcuLi9saWIvRmxpZ2h0Q29udHJvbCcpLFxuICAgIERhdGVwaWNrZXIgPSByZXF1aXJlKCcuLi9saWIvRGF0ZXBpY2tlcicpLFxuICAgIEF1dG9jb21wbGV0ZSA9IHJlcXVpcmUoJy4uL2xpYi9BdXRvY29tcGxldGUnKSxcbiAgICBGb3JtSGVscGVyID0gcmVxdWlyZSgnLi4vbGliL0Zvcm1IZWxwZXInKVxuO1xuXG4vKipcbiAqIE9wdGlvbnNcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgZDE6IG51bGwsXG4gICAgICAgIGNvdXBvbjogbnVsbCxcbiAgICAgICAgb3JpZ2luOiBudWxsLFxuICAgICAgICBkZXN0aW5hdGlvbjogbnVsbCxcbiAgICAgICAgd2lkZ2V0UG9zaXRpb246IHsgbXk6ICdsZWZ0IGJvdHRvbScsIGF0OiAnbGVmdCB0b3AnIH0sXG4gICAgICAgIHRlbXBsYXRlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcy9ib29raW5nLmhicycsXG4gICAgICAgIGxhbmd1YWdlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL2xhbmcvJ1xuICAgIH1cbjtcblxuXG5jbGFzcyBCb29raW5nIHtcblxuICAgIC8qKlxuICAgICAqIFdpZGdldCBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvciBlbGVtZW50IERPTSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAgT3B0aW9ucyBwYXNzZWQgb24gcGx1Z2luIGluc3RhbmNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRib29raW5nID0gJChlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgbmV3IFRlbXBsYXRlKCdib29raW5nJywge1xuICAgICAgICAgICAgJ2xhbmcnOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgICdvcmlnaW4nOiB0aGlzLm9wdGlvbnMub3JpZ2luLFxuICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uJzogdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgY2FsbGJhY2s6IChodG1sKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYm9va2luZy5odG1sKGh0bWwpO1xuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBmaW5pc2hlZCwgYnVpbGQgYWxsIHRoZSB3aWRnZXRzXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cFNlbGVjdE1lbnVzKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXR1cCBkYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGVwaWNrZXIgPSBuZXcgRGF0ZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgICAgIGxhbmc6IHRoaXMub3B0aW9ucy5sYW5nLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRhdGVwaWNrZXIucmVuZGVyKCk7XG5cblxuICAgICAgICAgICAgICAgIHZhciBmb3JtSGVscGVyID0gbmV3IEZvcm1IZWxwZXIoe1xuICAgICAgICAgICAgICAgICAgICBkYXRlcGlja2VyOiBkYXRlcGlja2VyLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW46IHRoaXMub3B0aW9ucy5vcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCBjdXN0b20gdmFsdWVzIGQxICYgY291cG9uXG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMuZDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUhlbHBlci5zZXREMSh0aGlzLm9wdGlvbnMuZDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5jb3Vwb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUhlbHBlci5zZXRDb3Vwb24odGhpcy5vcHRpb25zLmNvdXBvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQXV0b2NvbXBsZXRlIHdpZGdldHNcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRBdXRvY29tcGxldGUoZm9ybUhlbHBlcik7XG5cblxuICAgICAgICAgICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgICAgICAgICAgdGhpcy5ib29raW5nRXZlbnRzKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0dXAgYXV0b2NvbXBsZXRlIGRlc3RpbmF0aW9uIHdpZGdldHNcbiAgICAgKiBAc2VlIG1vZHVsZTpBdXRvY29tcGxldGVcbiAgICAgKi9cbiAgICBpbml0QXV0b2NvbXBsZXRlKGZvcm1IZWxwZXIpIHtcbiAgICAgICAgLy8gSW5pdCBjbGFzcyB3aXRoIG9wdGlvbnNcbiAgICAgICAgdmFyIGF1dG9jb21wbGV0ZSA9IG5ldyBBdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgbGFuZzogdGhpcy5vcHRpb25zLmxhbmcsXG4gICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChlLCB1aSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IGRpc3BsYXkgdmFsdWUgdG8gdGhlIGlucHV0XG4gICAgICAgICAgICAgICAgJCh0aGlzKS52YWwodWkuaXRlbS5kaXNwbGF5KTtcbiAgICAgICAgICAgICAgICAvL3NldCBhY3R1YWwgdmFsdWUgYXQgdGhlIGJvb2tpbmcgb2JqZWN0XG4gICAgICAgICAgICAgICAgZm9ybUhlbHBlci5zZXRCb3VuZHMoJCh0aGlzKS5kYXRhKCdpbnB1dC1maWVsZCcpLCB1aS5pdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5vcHRpb25zLndpZGdldFBvc2l0aW9uLFxuICAgICAgICAgICAgYXBwZW5kVG86IHRoaXMuJGJvb2tpbmdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQnVpbGRcbiAgICAgICAgYXV0b2NvbXBsZXRlLnN0YXJ0KCgpID0+IHtcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZS5yZW5kZXIodGhpcy4kYm9va2luZy5maW5kKCcuanMtYm9va2luZy1hdXRvY29tcGxldGUnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIHNlbGVjdCBtZW51cyB3aXRoIGN1c3RvbSBVSSB3aWRnZXRzXG4gICAgICovXG4gICAgc2V0dXBTZWxlY3RNZW51cygpIHtcbiAgICAgICAgJCgnLmpzLXNlbGVjdG1lbnUnKS5zZWxlY3RtZW51KHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm9wdGlvbnMud2lkZ2V0UG9zaXRpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZCBldmVudHMgcmVsYXRlZCB0byBib29raW5nIGludGVyYWN0aW9uXG4gICAgICovXG4gICAgYm9va2luZ0V2ZW50cygpIHtcbiAgICAgICAgdmFyICRib29raW5nID0gdGhpcy4kYm9va2luZztcbiAgICAgICAgdmFyICR0b2dnbGUgPSB0aGlzLiRib29raW5nLmZpbmQoJy5qcy1jb3BhYWlyLXRvZ2dsZScpO1xuXG4gICAgICAgIC8vIFNob3cgYm90dG9tIHJvdyB3aGVuIGFueSBpbnB1dCBnZXRzIGZvY3VzXG4gICAgICAgICRib29raW5nLm9uKCdmb2N1cy5jb3BhYWlyJywgJ2lucHV0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJGJvb2tpbmcuYWRkQ2xhc3MoJ2NvcGFhaXItd2lkZ2V0LW9wZW4nKTtcbiAgICAgICAgICAgICR0b2dnbGUucmVtb3ZlQ2xhc3MoJ2NvcGFhaXItaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENsaWNraW5nIGFueXdoZXJlIGluIHRoZSBkb2N1bWVudCBoaWRlcyBib3R0b20gcm93XG4gICAgICAgICRib29raW5nLm9uKCdjbGljay5jb3BhYWlyJywgJy5qcy1jb3BhYWlyLWNsb3NlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJGJvb2tpbmcucmVtb3ZlQ2xhc3MoJ2NvcGFhaXItd2lkZ2V0LW9wZW4nKTtcbiAgICAgICAgICAgICR0b2dnbGUuYWRkQ2xhc3MoJ2NvcGFhaXItaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvb2tpbmc7XG4iLCJ2YXIgVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9saWIvVGVtcGxhdGUnKTtcblxuY2xhc3MgU2lnbnVwIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy4kZm9ybSA9ICQoZWxlbWVudCk7XG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbGFuZzogJ2VzJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gTG9hZCB0ZW1wbGF0ZVxuICAgICAgICBuZXcgVGVtcGxhdGUoJ3NpZ251cCcsIHtcbiAgICAgICAgICAgICdsYW5nJzogdGhpcy5vcHRpb25zLmxhbmcsXG4gICAgICAgICAgICBjYWxsYmFjazogKGh0bWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRmb3JtLmh0bWwoaHRtbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ251cDtcbiJdfQ==
