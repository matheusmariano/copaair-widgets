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

    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./widgets/Booking":12,"./widgets/Signup":13}],2:[function(require,module,exports){
(function (global){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
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
      var h = function h(e) {
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
            "economic": "Economy Class",
            "business": "Business Class",
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
            "monthNamesShort": ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],
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
            "subscribe": "Suscribir",
            "birthday": "Fecha de nacimiento"
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
            "subscribe": "Subscribe",
            "birthday": "Date of birth"
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
            "subscribe": "Inscrever-se",
            "birthday": "Data de nascimento"
        }
    }
}

},{}],6:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
            minLength: 0
        };

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

},{"./FlightControl":9}],7:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    FlightControl = require('./FlightControl'),
    defaults = {
    lang: 'es',
    data: null,
    contentType: 'countries',
    callback: function callback() {}
};

var DataMenu = (function () {
    /**
     * Constructor
     * @param  {Object} options Custom options for this widget instance.
     */

    function DataMenu(options) {
        _classCallCheck(this, DataMenu);

        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;

        this.setup();
    }

    _createClass(DataMenu, [{
        key: 'setup',
        value: function setup() {
            var _this = this;

            if (!this.options.data) {
                var flightControl = new FlightControl({ lang: this.options.lang });

                flightControl.fetch(this.options.contentType, function (data, lang) {
                    // Format raw destinations to autocomplete structure
                    _this.options.source = _this.format(data.list);
                    _this.render();
                    if (typeof cb === 'function') {
                        cb();
                    }
                });
            } else {
                this.options.source = this.format(this.options.data);
                this.render(true);
            }
        }
    }, {
        key: 'render',
        value: function render(newInput) {
            var _this2 = this;

            if (newInput) {
                $(this.options.selector).find('option').slice(1).remove();
            }
            $.each(this.options.source, function (i, item) {
                $(_this2.options.selector).append(item.display);
            });
        }
    }, {
        key: 'format',

        /**
         * Formats data into the needed structure to be displayed
         * on the autocomplete menu widget.
         * @param  {Array} destinations Raw data returned from Flight Control
         * @return {Array}              Formatted destinations
         */
        value: function format(list) {
            var _this3 = this;

            var result = [];
            $.each(list, function (i, item) {
                var option = '<option value="' + item.id + '">' + item.name[_this3.options.lang] + '</option>';
                result.push({
                    display: option
                });
            });

            return result;
        }
    }]);

    return DataMenu;
})();

module.exports = DataMenu;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./FlightControl":9}],8:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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

},{"../../../lang/datepicker.json":4}],9:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);
require('store-js');

var defaults = {
    lang: 'es',
    api: {
        destinations: 'https://flightcontrol.io/api/routes/destinations',
        countries: 'https://flightcontrol.io/api/routes/countries',
        regions: 'https://flightcontrol.io/api/routes/regions'
    },
    storageExpiration: 86400000,
    storage: true
};

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

            if (typeof IE9Data !== 'undefined') {

                var data = IE9Data[resourceName];
                this.sortNames(data);

                if (this.options.storage) {
                    storeWidthExpiration.set(resourceName, data, this.options.storageExpiration);
                    storeWidthExpiration.set(resourceName + '.count', data.length, this.options.storageExpiration);
                }
                resourceValue.list = data;
                resourceValue.count = data.length;

                cb(resourceValue);
            } else {

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

},{"store-js":2}],10:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    defaults = {
    lang: 'es',
    origin: 'all',
    destination: 'all',
    d1: null,
    bookingPage: 'Booking Engine',
    analytics: false,
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
        'cabinClass': 'Economy',
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
        this.options.inputs.lang = this.options.lang;
        // load events related with form helper and other modules
        this.events();
    }

    _createClass(FormHelper, [{
        key: 'process',
        value: function process() {

            var url = this.options.formUrl;
            var validation = this.validationError();
            var httpQuery = $.param(this.options.inputs);
            httpQuery += '&' + $.param({ d1: this.options.d1 });

            if (validation.error) {
                // handle validation error messages
                if (this.options.analytics && typeof ga !== 'undefined') {
                    ga('send', 'event', this.options.bookingPage, 'error', 'User left required fields blank');
                }
            } else {
                // no errors, forward form values to copa
                // console.log(httpQuery);
                if (this.options.analytics && typeof ga !== 'undefined') {
                    ga('send', 'event', this.options.bookingPage, 'click', 'Search flights');
                }
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
            this.options.inputs['cabinClass'] = $(target).val();
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
        value: function setD1() {
            this.options.inputs.d1 = this.options.d1;
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

            this.options.booking.find('.js-cabin-class').on('click', function (e) {
                _this.setCabinClass(e.target);
            });

            this.options.booking.find('.js-adults-amount').selectmenu({
                change: function change(e, ui) {
                    _this.setPassengersAmount('adult', ui.item.value);
                }
            });

            this.options.booking.find('.js-children-amount').selectmenu({
                change: function change(e, ui) {
                    _this.setPassengersAmount('child', ui.item.value);
                }
            });

            this.options.booking.find('.js-infants-amount').selectmenu({
                change: function change(e, ui) {
                    _this.setPassengersAmount('infant', ui.item.value);
                }
            });

            this.options.booking.find('.js-submit').on('click', function (e) {
                e.preventDefault();
                _this.process();
            });
        }
    }]);

    return FormHelper;
})();

module.exports = FormHelper;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],11:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    Handlebars = (typeof window !== "undefined" ? window.Handlebars : typeof global !== "undefined" ? global.Handlebars : null),
    i18n = {
    booking: require('../../../lang/booking.json'),
    signup: require('../../../lang/signup.json')
},
    defaults = {
    lang: 'es',
    //src: window.location.origin + '/bower_components/copaair-widgets/templates',
    callback: function callback() {}
};

var Template = (function () {
    function Template(widget, options) {
        var _this = this;

        _classCallCheck(this, Template);

        if (!window.location.origin) {
            window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }

        defaults.src = window.location.origin + '/bower_components/copaair-widgets/templates';

        this.options = $.extend({}, defaults, options);
        if (typeof Handlebars !== 'undefined' && Handlebars !== null) {
            $.ajax({
                url: this.options.src + '/' + widget + '.hbs',
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

},{"../../../lang/booking.json":3,"../../../lang/signup.json":5}],12:[function(require,module,exports){
(function (global){
/**
 * Modules
 */
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
    bookingPage: null,
    coupon: null,
    origin: null,
    destination: null,
    destinationName: null,
    analytics: false,
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
            'lang': this.options.lang,
            'origin': this.options.origin,
            'destination': this.options.destination,
            'destinationName': this.options.destinationName, // temporary fix for static destination
            callback: function callback(html) {
                _this.$booking.html(html);

                // When finished, build all the widgets
                _this.setupSelectMenus();

                // setup datepicker
                var datepicker = new Datepicker({
                    lang: _this.options.lang
                });
                datepicker.render();
                var formHelper = new FormHelper({
                    datepicker: datepicker,
                    origin: _this.options.origin,
                    destination: _this.options.destination,
                    booking: _this.$booking,
                    d1: _this.options.d1,
                    lang: _this.options.lang,
                    analytics: _this.options.analytics,
                    bookingPage: _this.options.bookingPage
                });

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

},{"../lib/Autocomplete":6,"../lib/Datepicker":8,"../lib/FlightControl":9,"../lib/FormHelper":10,"../lib/Template":11}],13:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('store-js');
var Template = require('../lib/Template'),
    DataMenu = require('../lib/DataMenu'),
    i18n = require('../../../lang/datepicker.json');

var defaults = {
    lang: 'es',
    widgetPosition: { my: 'left bottom', at: 'left top' }

};

var Signup = (function () {
    function Signup(element, options) {
        var _this = this;

        _classCallCheck(this, Signup);

        this.$form = $(element);

        this.options = $.extend({}, defaults, options);

        // Load template
        new Template('signup', {
            'lang': this.options.lang,
            callback: function callback(html) {
                _this.$form.html(html);
                _this.signupEvents();
                var lang = _this.options.lang;

                _this.$form.find('.js-selectmenu').each(function () {

                    var dataMenu = new DataMenu({
                        lang: lang,
                        contentType: $(this).data('content'),
                        selector: $(this)
                    });
                });

                _this.setupSelectMenus();

                $('.js-signup-date').datepicker({
                    changeMonth: true,
                    changeYear: true,
                    format: 'dd/mm/yy',
                    beforeShow: function beforeShow(input, isnt) {
                        setTimeout(function () {
                            isnt.dpDiv.position({
                                my: 'left bottom',
                                at: 'left top',
                                of: input
                            });
                        }, 0);
                    }
                });

                var regional = i18n[_this.options.lang].regional;
                $.datepicker.regional;
            }
        });
    }

    _createClass(Signup, [{
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
        key: 'signupEvents',
        value: function signupEvents() {
            var _this2 = this;

            var $form = this.$form;
            var $toggle = this.$form.find('.js-copaair-toggle');

            // Show bottom row when any input gets focus
            $form.on('focus.copaair', 'input', function (e) {
                $form.addClass('copaair-widget-open');
                $toggle.removeClass('copaair-hidden');
            });

            $form.on('submit', function (e) {
                e.preventDefault();
                _this2.submitForm(e.target);
            });

            $('.js-country-selector').selectmenu({
                change: function change(e, ui) {
                    _this2.options.country = ui.item.value;

                    var destinations = store.get('destinations');
                    var selected = [];

                    for (var d in destinations.val) {
                        if (destinations.val[d].country == _this2.options.country) {
                            selected.push(destinations.val[d]);
                        }
                    }
                    var dataMenu = new DataMenu({
                        lang: _this2.options.lang,
                        data: selected,
                        selector: $('.js-city-selector')
                    });
                    $('.js-city-selector').selectmenu('refresh');
                }
            });

            $('.js-city-selector').selectmenu({
                change: function change(e, ui) {
                    _this2.options.city = ui.item.value;
                }
            });
        }
    }, {
        key: 'submitForm',
        value: function submitForm(target) {
            var $form = $(target);

            var data = $form.serializeObject();
            data.fullname = data.first_name + ' ' + data.last_name;
            data.source = this.options.source;
            data.language = this.options.lang.toUpperCase();
            data.city = this.options.city;
            data.country = this.options.country;

            var container = this.options.container;

            $.ajax({
                type: 'POST',
                url: 'https://flightcontrol.io/api/signup/add',
                data: data
            }).done(function (res) {
                container.fadeOut();
                if (typeof ga !== 'undefined') {
                    ga('send', 'event', 'Subscription Form', 'subscribed', 'User was subscribed');
                }
            });
        }
    }]);

    return Signup;
})();

module.exports = Signup;

},{"../../../lang/datepicker.json":4,"../lib/DataMenu":7,"../lib/Template":11,"store-js":2}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9pbmRleC5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvYm93ZXJfY29tcG9uZW50cy9zdG9yZS5qcy9zdG9yZS5taW4uanMiLCJsYW5nL2Jvb2tpbmcuanNvbiIsImxhbmcvZGF0ZXBpY2tlci5qc29uIiwibGFuZy9zaWdudXAuanNvbiIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9BdXRvY29tcGxldGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvRGF0YU1lbnUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvRGF0ZXBpY2tlci5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9GbGlnaHRDb250cm9sLmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGFhaXItd2lkZ2V0cy9zcmMvanMvbGliL0Zvcm1IZWxwZXIuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvVGVtcGxhdGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL0Jvb2tpbmcuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL1NpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLEFBQUMsQ0FBQSxVQUFVLE9BQU8sRUFBRTtBQUNoQixnQkFBWSxDQUFDOztBQUViLFFBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7O0FBRTVDLGNBQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9CLE1BQU0sSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7O0FBRXZDLGVBQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUM5QixNQUFNOztBQUVILGVBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNuQjtDQUNKLENBQUEsQ0FBQyxVQUFTLENBQUMsRUFBRTtBQUNWLGdCQUFZLENBQUM7O0FBRWIsUUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDO1FBQ3RDLE1BQU0sR0FBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FDeEM7Ozs7Ozs7O0FBUUQsS0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsU0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFO0FBQ25ELGVBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFXO0FBQ3hCLGdCQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLENBQUMsRUFBRTtBQUN4QyxpQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDckU7U0FDSixDQUFDLENBQUM7S0FDTixDQUFDOztBQUVGLEtBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxHQUFHLFNBQVMsYUFBYSxDQUFDLE9BQU8sRUFBRTtBQUNqRCxlQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBVztBQUN4QixnQkFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixDQUFDLEVBQUU7QUFDdkMsaUJBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ25FO1NBQ0osQ0FBQyxDQUFDO0tBQ04sQ0FBQzs7QUFFRixLQUFDLENBQUMsRUFBRSxDQUFDLGVBQWUsR0FBRyxZQUFXO0FBQzlCLFlBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNYLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUM5QixTQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxZQUFXO0FBQ2pCLGdCQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO0FBQzVCLG9CQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDcEIscUJBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ2pDO0FBQ0QsaUJBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7YUFDdkMsTUFBTTtBQUNILGlCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO2FBQ25DO1NBQ0osQ0FBQyxDQUFDO0FBQ0gsZUFBTyxDQUFDLENBQUM7S0FDWixDQUFDO0NBRUwsQ0FBQyxDQUFFOzs7Ozs7Ozs7QUN6REosQ0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFdBQVMsQ0FBQyxHQUFFO0FBQUMsUUFBRztBQUFDLGFBQU8sQ0FBQyxJQUFJLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FBQyxDQUFBLE9BQU0sQ0FBQyxFQUFDO0FBQUMsYUFBTSxDQUFDLENBQUMsQ0FBQTtLQUFDO0dBQUMsSUFBSSxDQUFDLEdBQUMsRUFBRTtNQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsUUFBUTtNQUFDLENBQUMsR0FBQyxjQUFjO01BQUMsQ0FBQyxHQUFDLFFBQVE7TUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUcsU0FBUyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLFVBQVMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLFlBQVUsRUFBRSxFQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLEtBQUMsSUFBRSxJQUFJLEtBQUcsQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFBLEFBQUMsRUFBQyxDQUFDLElBQUUsSUFBSSxLQUFHLENBQUMsR0FBQyxFQUFFLENBQUEsQUFBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLFlBQVUsRUFBRSxFQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxRQUFHLE9BQU8sQ0FBQyxJQUFFLFFBQVEsRUFBQyxPQUFPLFNBQVMsQ0FBQyxJQUFHO0FBQUMsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLGFBQU8sQ0FBQyxJQUFFLFNBQVMsQ0FBQTtLQUFDO0dBQUMsQ0FBQyxJQUFHLENBQUMsRUFBRSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxXQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxRQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLEtBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsWUFBVTtBQUFDLEtBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxZQUFVO0FBQUMsUUFBSSxDQUFDLEdBQUMsRUFBRSxDQUFDLFFBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxPQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsU0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7QUFBQyxVQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUM7R0FBQyxDQUFDLEtBQUssSUFBRyxDQUFDLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBQztRQUFLLENBQUMsRUFBQyxDQUFDO1FBQXlPLENBQUMsRUFBdU0sQ0FBQzs7O1VBQWtFLENBQUMsR0FBVixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUM7QUFBQyxlQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUE7T0FBQzs7QUFBeGlCLFVBQUc7QUFBQyxTQUFDLEdBQUMsSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxzQkFBc0IsR0FBQyxDQUFDLEdBQUMseUNBQXVDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtPQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtPQUFDO0FBQUksT0FBQyxHQUFDLFNBQUYsQ0FBQyxDQUFVLENBQUMsRUFBQztBQUFDLGVBQU8sWUFBVTtBQUFDLGNBQUksQ0FBQyxHQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLFFBQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUEsQ0FBQTtTQUFDLENBQUE7T0FBQzs7QUFBQyxPQUFDLEdBQUMsSUFBSSxNQUFNLENBQUMsdUNBQXVDLEVBQUMsR0FBRyxDQUFDO0FBQStELE9BQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxnQkFBTyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUEsQUFBQyxDQUFBLENBQUE7T0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLFNBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUE7T0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsU0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7T0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxZQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxZQUFJLENBQUMsR0FBQyxFQUFFLENBQUMsUUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLFdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUE7U0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBLENBQUE7T0FBQyxFQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLFlBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsQ0FBQTs7R0FBQyxJQUFHO0FBQUMsUUFBSSxDQUFDLEdBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxLQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDLENBQUEsQUFBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxDQUFBLE9BQU0sQ0FBQyxFQUFDO0FBQUMsS0FBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQTtHQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFDLE9BQU8sTUFBTSxJQUFFLFdBQVcsSUFBRSxNQUFNLENBQUMsT0FBTyxJQUFFLElBQUksQ0FBQyxNQUFNLEtBQUcsTUFBTSxHQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUMsQ0FBQyxHQUFDLE9BQU8sTUFBTSxJQUFFLFVBQVUsSUFBRSxNQUFNLENBQUMsR0FBRyxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQTtDQUFDLENBQUEsQ0FBRSxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFBOzs7Ozs7Ozs7O0FDRG4rRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3JCLGFBQWEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FDN0M7Ozs7Ozs7O0lBT0ssWUFBWTs7Ozs7O0FBTUgsYUFOVCxZQUFZLENBTUYsT0FBTyxFQUFFOzhCQU5uQixZQUFZOztBQU9WLFlBQUksUUFBUSxHQUFHO0FBQ1gsaUJBQUssRUFBRSxDQUFDO0FBQ1IsZ0JBQUksRUFBRSxJQUFJO0FBQ1YscUJBQVMsRUFBRSxDQUFDO1NBQ2YsQ0FBQzs7QUFFRixZQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNsRDs7aUJBZEMsWUFBWTs7Ozs7Ozs7O2VBc0JULGVBQUMsRUFBRSxFQUFFOzs7QUFDTixnQkFBSSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDOztBQUVuRSx5QkFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsVUFBQyxZQUFZLEVBQUs7O0FBRWxELHNCQUFLLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBSyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVyRCxvQkFBSSxPQUFPLEVBQUUsS0FBSyxVQUFVLEVBQUU7QUFDMUIsc0JBQUUsRUFBRSxDQUFDO2lCQUNSO2FBQ0osQ0FBQyxDQUFDO1NBQ047Ozs7Ozs7O2VBTUssZ0JBQUMsT0FBTyxFQUFFO0FBQ1osZ0JBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDbkMsV0FBVyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUM3QyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FDeEM7O0FBRUQsZ0JBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FDdEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUNoQixJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLENBQ3RDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FDdkM7OztBQUdELGtCQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7O0FBR2xDLGtCQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO0FBQzFCLG9CQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEIsb0JBQUksS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQ3hCLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEMsQ0FBQyxDQUFDOzs7QUFHSCxrQkFBTSxDQUNELFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FDdkIsUUFBUSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7OztBQUdoRSxrQkFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O0FBRzFCLGtCQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxVQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUU7QUFDN0QsdUJBQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQ2xCLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNyQixDQUFDOzs7QUFHRixhQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsU0FBUyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQ2hFLG9CQUFJLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzNFLHVCQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsS0FBSyxFQUFFO0FBQ2xDLDJCQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDO2lCQUM1RCxDQUFDLENBQUM7YUFDTixDQUFDOztBQUVGLG1CQUFPLElBQUksQ0FBQztTQUNmOzs7Ozs7Ozs7O2VBUUssZ0JBQUMsWUFBWSxFQUFFOzs7QUFDakIsZ0JBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQzs7QUFFaEIsYUFBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFLO0FBQzlCLG9CQUFJLFNBQVMsV0FDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQUssT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFPLElBQUksQ0FBQyxPQUFPLHdEQUM3QixJQUFJLENBQUMsRUFBRSxZQUFVO29CQUM5QyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUU7b0JBQ25CLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQUssT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQzlELHNCQUFNLENBQUMsSUFBSSxDQUFDO0FBQ1IseUJBQUssRUFBRSxTQUFTO0FBQ2hCLHlCQUFLLEVBQUUsU0FBUztBQUNoQiwyQkFBTyxFQUFFLFNBQVM7aUJBQ3JCLENBQUMsQ0FBQzthQUNOLENBQUMsQ0FBQzs7QUFFSCxtQkFBTyxNQUFNLENBQUM7U0FDakI7OztXQWpIQyxZQUFZOzs7Ozs7O0FBd0hsQixNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7O0FDakk5QixJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3JCLGFBQWEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7SUFFMUMsUUFBUSxHQUFHO0FBQ1AsUUFBSSxFQUFFLElBQUk7QUFDVixRQUFJLEVBQUUsSUFBSTtBQUNWLGVBQVcsRUFBRSxXQUFXO0FBQ3hCLFlBQVEsRUFBRSxvQkFBVyxFQUFFO0NBQzFCLENBQ0o7O0lBSUssUUFBUTs7Ozs7O0FBTUMsYUFOVCxRQUFRLENBTUUsT0FBTyxFQUFFOzhCQU5uQixRQUFROztBQVFOLFlBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9DLFlBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDOztBQUUxQixZQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDaEI7O2lCQVpDLFFBQVE7O2VBY0wsaUJBQUc7OztBQUVKLGdCQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDcEIsb0JBQUksYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzs7QUFFbkUsNkJBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsVUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFLOztBQUUxRCwwQkFBSyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQUssTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QywwQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLHdCQUFJLE9BQU8sRUFBRSxLQUFLLFVBQVUsRUFBRTtBQUMxQiwwQkFBRSxFQUFFLENBQUM7cUJBQ1I7aUJBQ0osQ0FBQyxDQUFDO2FBQ04sTUFBTTtBQUNILG9CQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckQsb0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckI7U0FDSjs7O2VBRUssZ0JBQUMsUUFBUSxFQUFFOzs7QUFDYixnQkFBRyxRQUFRLEVBQUU7QUFDVCxpQkFBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUM3RDtBQUNELGFBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFLO0FBQ3JDLGlCQUFDLENBQUMsT0FBSyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqRCxDQUFDLENBQUM7U0FDTjs7Ozs7Ozs7OztlQVFLLGdCQUFDLElBQUksRUFBRTs7O0FBQ1QsZ0JBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQixhQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFDLENBQUMsRUFBRSxJQUFJLEVBQUs7QUFDdEIsb0JBQUksTUFBTSx1QkFDYSxJQUFJLENBQUMsRUFBRSxVQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQVksQ0FBQztBQUM5RSxzQkFBTSxDQUFDLElBQUksQ0FBQztBQUNSLDJCQUFPLEVBQUMsTUFBTTtpQkFDakIsQ0FBQyxDQUFDO2FBQ04sQ0FBQyxDQUFDOztBQUVILG1CQUFPLE1BQU0sQ0FBQztTQUNqQjs7O1dBM0RDLFFBQVE7OztBQStEZCxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7O0FDNUUxQixJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3JCLElBQUksR0FBRyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0MsUUFBUSxHQUFHO0FBQ1AscUJBQWlCLEVBQUUsdUNBQXVDO0FBQzFELGtCQUFjLEVBQUUsb0NBQW9DO0FBQ3BELGFBQVMsRUFBRTtBQUNQLGFBQUssRUFBRSxJQUFJLElBQUksRUFBRTtBQUNqQixpQkFBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztLQUN0RTtBQUNELFFBQUksRUFBRSxJQUFJO0FBQ1YsY0FBVSxFQUFFLG9CQUFTLEtBQUssRUFBRSxJQUFJLEVBQUU7QUFDOUIsa0JBQVUsQ0FBQyxZQUFXO0FBQ2xCLGdCQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztBQUNoQixrQkFBRSxFQUFFLGFBQWE7QUFDakIsa0JBQUUsRUFBRSxVQUFVO0FBQ2Qsa0JBQUUsRUFBRSxLQUFLO2FBQ1osQ0FBQyxDQUFDO1NBQ04sRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNUO0NBQ0osQ0FDSjs7Ozs7O0lBS0ssVUFBVTtBQUVELGFBRlQsVUFBVSxDQUVBLE9BQU8sRUFBRTs4QkFGbkIsVUFBVTs7QUFHUixZQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvQyxZQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUM3Qjs7aUJBTEMsVUFBVTs7Ozs7OztlQVdOLGtCQUFHO0FBQ0wsZ0JBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNqQixnQkFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ3ZCLGdCQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7Ozs7Ozs7OztlQU9jLDJCQUFHO0FBQ2QsZ0JBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUztnQkFDbEMsZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2dCQUNuRCxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRWxELGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOztBQUVsQywyQkFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekMsd0JBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0QywyQkFBZSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZELHdCQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0Q7OztlQUVLLGtCQUFHO0FBQ0wsZ0JBQUksZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2dCQUNuRCxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7OztTQUdyRDs7O2VBRWUsMEJBQUMsUUFBUSxFQUFFLElBQUksRUFBRTtBQUN6QixnQkFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO2dCQUM3QyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7O0FBRzdFLGdCQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ25FLHdCQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNyRDs7Ozs7Ozs7ZUFNUSxxQkFBRztBQUNSLGdCQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDaEQsYUFBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7OztXQTNEQyxVQUFVOzs7QUFnRWhCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7QUN6RjVCLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBRXBCLElBQUksUUFBUSxHQUFHO0FBQ1AsUUFBSSxFQUFFLElBQUk7QUFDVixPQUFHLEVBQUU7QUFDRCxvQkFBWSxFQUFHLGtEQUFrRDtBQUNqRSxpQkFBUyxFQUFHLCtDQUErQztBQUMzRCxlQUFPLEVBQUcsNkNBQTZDO0tBQzFEO0FBQ0QscUJBQWlCLEVBQUUsUUFBUTtBQUMzQixXQUFPLEVBQUUsSUFBSTtDQUNoQixDQUNKOzs7Ozs7O0FBT0QsSUFBSSxvQkFBb0IsR0FBRztBQUN2QixPQUFHLEVBQUUsYUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUN6QixhQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUE7S0FDbEU7QUFDRCxPQUFHLEVBQUUsYUFBUyxHQUFHLEVBQUU7QUFDZixZQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ3pCLFlBQUksQ0FBQyxJQUFJLEVBQUU7QUFBRSxtQkFBTyxJQUFJLENBQUE7U0FBRTtBQUMxQixZQUFJLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO0FBQUUsbUJBQU8sSUFBSSxDQUFBO1NBQUU7QUFDaEUsZUFBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0tBQ2xCO0NBQ0osQ0FBQTs7Ozs7O0lBS0ssYUFBYTtBQUVKLGFBRlQsYUFBYSxDQUVILE9BQU8sRUFBRTs4QkFGbkIsYUFBYTs7QUFJWCxZQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvQyxZQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQzs7QUFFMUIsWUFBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7QUFDZixtQkFBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0FBQ3hELGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDaEM7S0FDSjs7aUJBWEMsYUFBYTs7Ozs7Ozs7OztlQW9CVixlQUFDLFlBQVksRUFBRSxFQUFFLEVBQUU7OztBQUNwQixnQkFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDOztBQUV2QixnQkFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQzNELG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEVBQUU7QUFDckQsNkJBQWEsQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzVELDZCQUFhLENBQUMsS0FBSyxHQUFHLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLENBQUM7O0FBRXpFLHVCQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUMzQjs7QUFFRCxnQkFBSSxPQUFPLE9BQU8sQUFBQyxLQUFLLFdBQVcsRUFBRTs7QUFFakMsb0JBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNqQyxvQkFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFckIsb0JBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7QUFDckIsd0NBQW9CLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzdFLHdDQUFvQixDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2lCQUNsRztBQUNELDZCQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUMxQiw2QkFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDOztBQUVsQyxrQkFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBRXJCLE1BQU07O0FBR0gsaUJBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBQyxJQUFJLEVBQUs7QUFDaEQsMEJBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVyQix3QkFBRyxNQUFLLE9BQU8sQ0FBQyxPQUFPLEVBQUU7QUFDckIsNENBQW9CLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBSyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUM3RSw0Q0FBb0IsQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQUssT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7cUJBQ2xHO0FBQ0QsaUNBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQzFCLGlDQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7O0FBRWxDLHNCQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQ3JCLENBQUMsQ0FBQzthQUNOO1NBRUo7Ozs7Ozs7OztlQVNRLG1CQUFDLElBQUksRUFBRTs7O0FBQ1osZ0JBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFLO0FBQ2hCLG9CQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNwRSxvQkFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQUssT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQzs7QUFFckUsdUJBQU8sQ0FBQyxDQUFDO2FBQ1osQ0FBQyxDQUFDO1NBQ047OztXQTlFQyxhQUFhOzs7QUFpRm5CLE1BQU0sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7QUNwSC9CLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDckIsUUFBUSxHQUFHO0FBQ1AsUUFBSSxFQUFFLElBQUk7QUFDVixVQUFNLEVBQUUsS0FBSztBQUNiLGVBQVcsRUFBRSxLQUFLO0FBQ2xCLE1BQUUsRUFBRSxJQUFJO0FBQ1IsZUFBVyxFQUFFLGdCQUFnQjtBQUM3QixhQUFTLEVBQUUsS0FBSzs7O0FBR2hCLFVBQU0sRUFBRTtBQUNKLGdCQUFRLEVBQUUsSUFBSTtBQUNkLHNCQUFjLEVBQUUsTUFBTTtBQUN0QixXQUFHLEVBQUUsTUFBTTtBQUNYLDRCQUFvQixFQUFFLEtBQUs7QUFDM0IsNEJBQW9CLEVBQUUsS0FBSztBQUMzQiw0QkFBb0IsRUFBRSxLQUFLO0FBQzNCLDhCQUFzQixFQUFFLENBQUM7QUFDekIsOEJBQXNCLEVBQUUsQ0FBQztBQUN6Qiw4QkFBc0IsRUFBRSxDQUFDO0FBQ3pCLHFDQUE2QixFQUFFLElBQUk7QUFDbkMsdUNBQStCLEVBQUUsSUFBSTtBQUNyQyxzQ0FBOEIsRUFBRSxJQUFJO0FBQ3BDLG9DQUE0QixFQUFFLElBQUk7QUFDbEMsc0NBQThCLEVBQUUsSUFBSTtBQUNwQyxxQ0FBNkIsRUFBRSxJQUFJOzs7QUFHbkMsMkNBQW1DLEVBQUUsSUFBSTtBQUN6QywrQ0FBdUMsRUFBRSxJQUFJOztBQUU3QyxnREFBd0MsRUFBRSxJQUFJO0FBQzlDLDBDQUFrQyxFQUFFLElBQUk7O0FBRXhDLG9CQUFZLEVBQUUsU0FBUztBQUN2QixZQUFJLEVBQUUsSUFBSTtLQUNiO0FBQ0QsV0FBTyxFQUFFLG9DQUFvQyxHQUM5Qiw4QkFBOEI7Q0FDaEQsQ0FDSjs7Ozs7O0lBS0ssVUFBVTtBQUVELGFBRlQsVUFBVSxDQUVBLE9BQU8sRUFBRTs4QkFGbkIsVUFBVTs7QUFJUixZQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvQyxZQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQzs7O0FBRzFCLFlBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3hCLFlBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFlBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs7QUFFN0MsWUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2pCOztpQkFiQyxVQUFVOztlQWlCTCxtQkFBRzs7QUFFTixnQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDL0IsZ0JBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUN4QyxnQkFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdDLHFCQUFTLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDOztBQUVsRCxnQkFBSSxVQUFVLENBQUMsS0FBSyxFQUFFOztBQUVsQixvQkFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLEVBQUUsQUFBQyxLQUFLLFdBQVcsRUFBRTtBQUNyRCxzQkFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7aUJBQzdGO2FBQ0osTUFBTTs7O0FBR0gsb0JBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxFQUFFLEFBQUMsS0FBSyxXQUFXLEVBQUM7QUFDcEQsc0JBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUM1RTtBQUNELG9CQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDMUQsNEJBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN4QjtTQUNKOzs7ZUFFZSw0QkFBRzs7QUFFZixnQkFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7QUFDL0Isb0JBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDakQ7O0FBRUQsZ0JBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEtBQUksS0FBSyxFQUFFO0FBQ25DLG9CQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQzFEO1NBQ0o7OztlQUVRLG1CQUFDLEtBQUssRUFBRSxRQUFRLEVBQUU7O0FBRXZCLGdCQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7QUFDcEIsb0JBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLG1DQUFtQyxDQUFDLEdBQUcsUUFBUSxDQUFDO0FBQ3BFLG9CQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyx1Q0FBdUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQzthQUMzRTs7QUFFRCxnQkFBSSxLQUFLLEtBQUssYUFBYSxFQUFFO0FBQ3pCLG9CQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyx3Q0FBd0MsQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUN6RSxvQkFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0NBQWtDLENBQUMsR0FBRyxRQUFRLENBQUM7YUFDdEU7U0FFSjs7O2VBRU8sa0JBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRTs7QUFFekIsZ0JBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztnQkFDakYsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFFeEUsZ0JBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtBQUNoQixvQkFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsR0FBRyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDNUUsb0JBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoRixvQkFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsNkJBQTZCLENBQUMsR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDakY7O0FBRUQsZ0JBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRTtBQUNqQixvQkFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsNkJBQTZCLENBQUMsR0FBRyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDaEYsb0JBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLCtCQUErQixDQUFDLEdBQUcsYUFBYSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNwRixvQkFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsR0FBRyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDckY7U0FDSjs7O2VBRVksdUJBQUMsTUFBTSxFQUFFO0FBQ2xCLGdCQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdkQ7OztlQUVrQiw2QkFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQzdCLG9CQUFRLElBQUk7QUFDUixxQkFBSyxPQUFPO0FBQ1Isd0JBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3hELDBCQUFNO0FBQUEsQUFDTixxQkFBSyxPQUFPO0FBQ1Isd0JBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3hELDBCQUFNO0FBQUEsQUFDTixxQkFBSyxRQUFRO0FBQ1Qsd0JBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3hELDBCQUFNO0FBQUEsYUFDVDtTQUNKOzs7ZUFFUSxtQkFBQyxNQUFNLEVBQUU7QUFDZCxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN2Qzs7O2VBRUksaUJBQUc7QUFDSixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQzVDOzs7ZUFFYywyQkFBRztBQUNkLGdCQUFJLE1BQU0sR0FBSTtBQUNWLHFCQUFLLEVBQUUsS0FBSztBQUNaLG1CQUFHLEVBQUMsRUFBRTthQUNULENBQUM7QUFDRixnQkFBSSxZQUFZLENBQUM7QUFDakIsaUJBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDbkMsb0JBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDaEUsZ0NBQVksR0FBRyxFQUFFLENBQUM7QUFDbEIsZ0NBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQzNCLGdDQUFZLENBQUMsT0FBTyxrQkFBZ0IsS0FBSywwQkFBdUIsQ0FBQztBQUNqRSwwQkFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDOUIsMEJBQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUN2QjthQUNKOztBQUVELG1CQUFPLE1BQU0sQ0FBQztTQUNqQjs7O2VBRUssa0JBQUc7OztBQUVMLGdCQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7Z0JBQ3BDLGVBQWUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztnQkFDekQsWUFBWSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztBQUV4RCwyQkFBZSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQUMsUUFBUSxFQUFFLElBQUksRUFBSTs7QUFFaEUsb0JBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7OztBQUc3RSxvQkFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNuRSw0QkFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDOUMsNEJBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNuRCxzQkFBSyxRQUFRLENBQUMsVUFBVSxFQUFFLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQzthQUM3RCxDQUFDLENBQUM7O0FBR0gsd0JBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUk7O0FBRTdELG9CQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs7QUFHN0Usb0JBQUksU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDbkUsc0JBQUssUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7YUFDOUQsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQyxFQUFLO0FBQzVELHNCQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDaEMsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxVQUFVLENBQUM7QUFDdEQsc0JBQU0sRUFBRSxnQkFBQyxDQUFDLEVBQUUsRUFBRSxFQUFLO0FBQ2YsMEJBQUssbUJBQW1CLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3BEO2FBQ0osQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxVQUFVLENBQUM7QUFDeEQsc0JBQU0sRUFBRSxnQkFBQyxDQUFDLEVBQUUsRUFBRSxFQUFLO0FBQ2YsMEJBQUssbUJBQW1CLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3BEO2FBQ0osQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxVQUFVLENBQUM7QUFDdkQsc0JBQU0sRUFBRSxnQkFBQyxDQUFDLEVBQUUsRUFBRSxFQUFLO0FBQ2YsMEJBQUssbUJBQW1CLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JEO2FBQ0osQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUMsRUFBSztBQUN2RCxpQkFBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25CLHNCQUFLLE9BQU8sRUFBRSxDQUFDO2FBQ2xCLENBQUMsQ0FBQztTQUNOOzs7V0FyTEMsVUFBVTs7O0FBeUxoQixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdE81QixJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3JCLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQ2xDLElBQUksR0FBRztBQUNILFdBQU8sRUFBRSxPQUFPLENBQUMsNEJBQTRCLENBQUM7QUFDOUMsVUFBTSxFQUFFLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQztDQUMvQztJQUNELFFBQVEsR0FBRztBQUNQLFFBQUksRUFBRSxJQUFJOztBQUVWLFlBQVEsRUFBRSxvQkFBVyxFQUFFO0NBQzFCLENBQ0o7O0lBSUssUUFBUTtBQUdDLGFBSFQsUUFBUSxDQUdFLE1BQU0sRUFBRSxPQUFPLEVBQUU7Ozs4QkFIM0IsUUFBUTs7QUFLTixZQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7QUFDekIsa0JBQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUUsRUFBRSxDQUFBLEFBQUMsQ0FBQztTQUNqSjs7QUFFRCxnQkFBUSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyw2Q0FBNkMsQ0FBQzs7QUFFdEYsWUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0MsWUFBSSxPQUFPLFVBQVUsS0FBSyxXQUFXLElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtBQUMxRCxhQUFDLENBQUMsSUFBSSxDQUFDO0FBQ0gsbUJBQUcsRUFBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsU0FBSSxNQUFNLFNBQU07QUFDeEMsdUJBQU8sRUFBRSxpQkFBQyxHQUFHLEVBQUs7QUFDZCwwQkFBSyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQUssT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2hGLHdCQUFJLElBQUksR0FBRyxNQUFLLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDckMsMEJBQUssT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDL0I7YUFDSixDQUFDLENBQUM7U0FDTixNQUFNO0FBQ0gsbUJBQU8sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztTQUN2RDtLQUNKOztpQkF4QkMsUUFBUTs7ZUEwQkgsaUJBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtBQUNqQixnQkFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QyxnQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkMsbUJBQU8sSUFBSSxDQUFDO1NBQ2Y7OztXQTlCQyxRQUFROzs7QUFpQ2QsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdDMUIsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNyQixRQUFRLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0lBQ3JDLGFBQWEsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUM7SUFDL0MsVUFBVSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztJQUN6QyxZQUFZLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDO0lBQzdDLFVBQVUsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FDNUM7Ozs7OztBQU1ELElBQUksUUFBUSxHQUFHO0FBQ1AsUUFBSSxFQUFFLElBQUk7QUFDVixNQUFFLEVBQUUsSUFBSTtBQUNSLGVBQVcsRUFBQyxJQUFJO0FBQ2hCLFVBQU0sRUFBRSxJQUFJO0FBQ1osVUFBTSxFQUFFLElBQUk7QUFDWixlQUFXLEVBQUUsSUFBSTtBQUNqQixtQkFBZSxFQUFFLElBQUk7QUFDckIsYUFBUyxFQUFFLEtBQUs7QUFDaEIsa0JBQWMsRUFBRSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRTtBQUNyRCxnQkFBWSxFQUFFLHdEQUF3RDtBQUN0RSxnQkFBWSxFQUFFLHdDQUF3QztDQUN6RCxDQUNKOztJQUdLLE9BQU87Ozs7Ozs7O0FBT0UsYUFQVCxPQUFPLENBT0csT0FBTyxFQUFFLE9BQU8sRUFBRTs7OzhCQVA1QixPQUFPOztBQVFMLFlBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUUzQixZQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvQyxZQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztBQUMxQixZQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7QUFDcEIsa0JBQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7QUFDekIsb0JBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07QUFDN0IseUJBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVc7QUFDdkMsNkJBQWlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlO0FBQy9DLG9CQUFRLEVBQUUsa0JBQUMsSUFBSSxFQUFLO0FBQ2hCLHNCQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7OztBQUd6QixzQkFBSyxnQkFBZ0IsRUFBRSxDQUFDOzs7QUFHeEIsb0JBQUksVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDO0FBQzVCLHdCQUFJLEVBQUUsTUFBSyxPQUFPLENBQUMsSUFBSTtpQkFDMUIsQ0FBQyxDQUFDO0FBQ0gsMEJBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNwQixvQkFBSSxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUM7QUFDNUIsOEJBQVUsRUFBRSxVQUFVO0FBQ3RCLDBCQUFNLEVBQUUsTUFBSyxPQUFPLENBQUMsTUFBTTtBQUMzQiwrQkFBVyxFQUFFLE1BQUssT0FBTyxDQUFDLFdBQVc7QUFDckMsMkJBQU8sRUFBRSxNQUFLLFFBQVE7QUFDdEIsc0JBQUUsRUFBRSxNQUFLLE9BQU8sQ0FBQyxFQUFFO0FBQ25CLHdCQUFJLEVBQUUsTUFBSyxPQUFPLENBQUMsSUFBSTtBQUN2Qiw2QkFBUyxFQUFFLE1BQUssT0FBTyxDQUFDLFNBQVM7QUFDakMsK0JBQVcsRUFBRSxNQUFLLE9BQU8sQ0FBQyxXQUFXO2lCQUN4QyxDQUFDLENBQUM7O0FBR0gsb0JBQUcsTUFBSyxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ3BCLDhCQUFVLENBQUMsU0FBUyxDQUFDLE1BQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM3Qzs7O0FBR0Qsc0JBQUssZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7OztBQUlsQyxzQkFBSyxhQUFhLEVBQUUsQ0FBQzthQUV4QjtTQUNKLENBQUMsQ0FBQztLQUNOOztpQkFyREMsT0FBTzs7Ozs7OztlQTJETywwQkFBQyxVQUFVLEVBQUU7Ozs7QUFFekIsZ0JBQUksWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDO0FBQ2hDLG9CQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO0FBQ3ZCLHNCQUFNLEVBQUUsZ0JBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtBQUNyQixxQkFBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25CLHFCQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7OztBQUdwQixxQkFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU3Qiw4QkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3BFO0FBQ0Qsd0JBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWM7QUFDckMsd0JBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTthQUMxQixDQUFDLENBQUM7OztBQUdILHdCQUFZLENBQUMsS0FBSyxDQUFDLFlBQU07QUFDckIsNEJBQVksQ0FBQyxNQUFNLENBQUMsT0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQzthQUN2RSxDQUFDLENBQUM7U0FDTjs7Ozs7OztlQUtlLDRCQUFHO0FBQ2YsYUFBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsVUFBVSxDQUFDO0FBQzNCLHdCQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjO2FBQ3hDLENBQUMsQ0FBQzs7QUFFSCxtQkFBTyxJQUFJLENBQUM7U0FDZjs7Ozs7OztlQUtZLHlCQUFHO0FBQ1osZ0JBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDN0IsZ0JBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7OztBQUd2RCxvQkFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsT0FBTyxFQUFFLFVBQVMsQ0FBQyxFQUFFO0FBQzlDLHdCQUFRLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekMsdUJBQU8sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUN6QyxDQUFDLENBQUM7OztBQUdILG9CQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxVQUFTLENBQUMsRUFBRTtBQUMxRCxpQkFBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25CLHdCQUFRLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDNUMsdUJBQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUN0QyxDQUFDLENBQUM7U0FFTjs7O1dBakhDLE9BQU87OztBQW9IYixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7QUNuSnpCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNwQixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7SUFDckMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztJQUNyQyxJQUFJLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQ2xEOztBQUVELElBQUksUUFBUSxHQUFHO0FBQ1gsUUFBSSxFQUFFLElBQUk7QUFDVixrQkFBYyxFQUFFLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFOztDQUV4RCxDQUFDOztJQUVJLE1BQU07QUFFRyxhQUZULE1BQU0sQ0FFSSxPQUFPLEVBQUUsT0FBTyxFQUFFOzs7OEJBRjVCLE1BQU07O0FBR0osWUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXhCLFlBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDOzs7QUFHL0MsWUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFO0FBQ25CLGtCQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO0FBQ3pCLG9CQUFRLEVBQUUsa0JBQUMsSUFBSSxFQUFLO0FBQ2hCLHNCQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEIsc0JBQUssWUFBWSxFQUFFLENBQUM7QUFDcEIsb0JBQUksSUFBSSxHQUFHLE1BQUssT0FBTyxDQUFDLElBQUksQ0FBQzs7QUFFN0Isc0JBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBRSxZQUFXOztBQUUvQyx3QkFBSSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUM7QUFDeEIsNEJBQUksRUFBRSxJQUFJO0FBQ1YsbUNBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUNwQyxnQ0FBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7cUJBQ3BCLENBQUMsQ0FBQztpQkFFTixDQUFDLENBQUM7O0FBRUgsc0JBQUssZ0JBQWdCLEVBQUUsQ0FBQzs7QUFFeEIsaUJBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQztBQUM1QiwrQkFBVyxFQUFFLElBQUk7QUFDakIsOEJBQVUsRUFBRSxJQUFJO0FBQ2hCLDBCQUFNLEVBQUUsVUFBVTtBQUNsQiw4QkFBVSxFQUFFLG9CQUFTLEtBQUssRUFBRSxJQUFJLEVBQUU7QUFDOUIsa0NBQVUsQ0FBQyxZQUFXO0FBQ2xCLGdDQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztBQUNoQixrQ0FBRSxFQUFFLGFBQWE7QUFDakIsa0NBQUUsRUFBRSxVQUFVO0FBQ2Qsa0NBQUUsRUFBRSxLQUFLOzZCQUNaLENBQUMsQ0FBQzt5QkFDTixFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUNUO2lCQUNKLENBQUMsQ0FBQzs7QUFFSCxvQkFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQUssT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUNoRCxpQkFBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDekI7U0FDSixDQUFDLENBQUM7S0FDTjs7aUJBOUNDLE1BQU07Ozs7OztlQW1EUSw0QkFBRztBQUNmLGFBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQztBQUMzQix3QkFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYzthQUN4QyxDQUFDLENBQUM7O0FBRUgsbUJBQU8sSUFBSSxDQUFDO1NBQ2Y7OztlQUVXLHdCQUFHOzs7QUFDWCxnQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN2QixnQkFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7O0FBR3BELGlCQUFLLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFDLEVBQUU7QUFDM0MscUJBQUssQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN0Qyx1QkFBTyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3pDLENBQUMsQ0FBQzs7QUFFSCxpQkFBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDLEVBQUs7QUFDdEIsaUJBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQix1QkFBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzdCLENBQUMsQ0FBQTs7QUFFRixhQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxVQUFVLENBQUM7QUFDakMsc0JBQU0sRUFBRSxnQkFBQyxDQUFDLEVBQUUsRUFBRSxFQUFLO0FBQ2YsMkJBQUssT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7QUFFckMsd0JBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDN0Msd0JBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQzs7QUFFbEIseUJBQUssSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLEdBQUcsRUFDOUI7QUFDSSw0QkFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFLLE9BQU8sQ0FBQyxPQUFPLEVBQUU7QUFDckQsb0NBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUN0QztxQkFDSjtBQUNELHdCQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQztBQUN4Qiw0QkFBSSxFQUFFLE9BQUssT0FBTyxDQUFDLElBQUk7QUFDdkIsNEJBQUksRUFBRSxRQUFRO0FBQ2QsZ0NBQVEsRUFBRSxDQUFDLENBQUMsbUJBQW1CLENBQUM7cUJBQ25DLENBQUMsQ0FBQztBQUNILHFCQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ2hEO2FBQ0osQ0FBQyxDQUFDOztBQUVILGFBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQztBQUM5QixzQkFBTSxFQUFFLGdCQUFDLENBQUMsRUFBRSxFQUFFLEVBQUs7QUFDZiwyQkFBSyxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUNyQzthQUNKLENBQUMsQ0FBQztTQUVOOzs7ZUFFUyxvQkFBQyxNQUFNLEVBQUU7QUFDZixnQkFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUV0QixnQkFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ25DLGdCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDdkQsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDbEMsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDaEQsZ0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFDOUIsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7O0FBRXBDLGdCQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzs7QUFFdkMsYUFBQyxDQUFDLElBQUksQ0FBQztBQUNILG9CQUFJLEVBQUUsTUFBTTtBQUNaLG1CQUFHLEVBQUUseUNBQXlDO0FBQzlDLG9CQUFJLEVBQUUsSUFBSTthQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxHQUFHLEVBQUU7QUFDbEIseUJBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNwQixvQkFBRyxPQUFPLEVBQUUsQUFBQyxLQUFLLFdBQVcsRUFBRTtBQUMzQixzQkFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixDQUFDLENBQUM7aUJBQ2pGO2FBQ0osQ0FBQyxDQUFDO1NBQ047OztXQTlIQyxNQUFNOzs7QUFrSVosTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBOb2RlL0NvbW1vbkpTXG4gICAgICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxufShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIEJvb2tpbmcgPSByZXF1aXJlKCcuL3dpZGdldHMvQm9va2luZycpLFxuICAgICAgICBTaWdudXAgID0gcmVxdWlyZSgnLi93aWRnZXRzL1NpZ251cCcpXG4gICAgO1xuXG4gICAgLyoqXG4gICAgICogQmluZCB3aWRnZXRzIHRvIGpRdWVyeSBvYmplY3QgcHJvdG90eXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIG92ZXJyaWRlIGRlZmF1bHRzLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBDdXJyZW50IG9iamVjdCBpbnN0YW5jZVxuICAgICAqL1xuICAgICQuZm4uY29wYWFpckJvb2tpbmcgPSBmdW5jdGlvbiBjb3BhYWlyQm9va2luZyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoISQuZGF0YSh0aGlzLCAncGx1Z2luX2NvcGFhaXJCb29raW5nJykpIHtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyQm9va2luZycsIG5ldyBCb29raW5nKHRoaXMsIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQuZm4uY29wYWFpclNpZ251cCA9IGZ1bmN0aW9uIGNvcGFhaXJTaWdudXAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyU2lnbnVwJykpIHtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyU2lnbnVwJywgbmV3IFNpZ251cCh0aGlzLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkLmZuLnNlcmlhbGl6ZU9iamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbyA9IHt9O1xuICAgICAgICB2YXIgYSA9IHRoaXMuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgJC5lYWNoKGEsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKG9bdGhpcy5uYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvW3RoaXMubmFtZV0ucHVzaCkge1xuICAgICAgICAgICAgICAgICAgICBvW3RoaXMubmFtZV0gPSBbb1t0aGlzLm5hbWVdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb1t0aGlzLm5hbWVdLnB1c2godGhpcy52YWx1ZSB8fCAnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9bdGhpcy5uYW1lXSA9IHRoaXMudmFsdWUgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbztcbiAgICB9O1xuXG59KSk7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxMyBNYXJjdXMgV2VzdGluICovXG4oZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbygpe3RyeXtyZXR1cm4gciBpbiBlJiZlW3JdfWNhdGNoKHQpe3JldHVybiExfX12YXIgdD17fSxuPWUuZG9jdW1lbnQscj1cImxvY2FsU3RvcmFnZVwiLGk9XCJzY3JpcHRcIixzO3QuZGlzYWJsZWQ9ITEsdC52ZXJzaW9uPVwiMS4zLjE3XCIsdC5zZXQ9ZnVuY3Rpb24oZSx0KXt9LHQuZ2V0PWZ1bmN0aW9uKGUsdCl7fSx0Lmhhcz1mdW5jdGlvbihlKXtyZXR1cm4gdC5nZXQoZSkhPT11bmRlZmluZWR9LHQucmVtb3ZlPWZ1bmN0aW9uKGUpe30sdC5jbGVhcj1mdW5jdGlvbigpe30sdC50cmFuc2FjdD1mdW5jdGlvbihlLG4scil7cj09bnVsbCYmKHI9bixuPW51bGwpLG49PW51bGwmJihuPXt9KTt2YXIgaT10LmdldChlLG4pO3IoaSksdC5zZXQoZSxpKX0sdC5nZXRBbGw9ZnVuY3Rpb24oKXt9LHQuZm9yRWFjaD1mdW5jdGlvbigpe30sdC5zZXJpYWxpemU9ZnVuY3Rpb24oZSl7cmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpfSx0LmRlc2VyaWFsaXplPWZ1bmN0aW9uKGUpe2lmKHR5cGVvZiBlIT1cInN0cmluZ1wiKXJldHVybiB1bmRlZmluZWQ7dHJ5e3JldHVybiBKU09OLnBhcnNlKGUpfWNhdGNoKHQpe3JldHVybiBlfHx1bmRlZmluZWR9fTtpZihvKCkpcz1lW3JdLHQuc2V0PWZ1bmN0aW9uKGUsbil7cmV0dXJuIG49PT11bmRlZmluZWQ/dC5yZW1vdmUoZSk6KHMuc2V0SXRlbShlLHQuc2VyaWFsaXplKG4pKSxuKX0sdC5nZXQ9ZnVuY3Rpb24oZSxuKXt2YXIgcj10LmRlc2VyaWFsaXplKHMuZ2V0SXRlbShlKSk7cmV0dXJuIHI9PT11bmRlZmluZWQ/bjpyfSx0LnJlbW92ZT1mdW5jdGlvbihlKXtzLnJlbW92ZUl0ZW0oZSl9LHQuY2xlYXI9ZnVuY3Rpb24oKXtzLmNsZWFyKCl9LHQuZ2V0QWxsPWZ1bmN0aW9uKCl7dmFyIGU9e307cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0LG4pe2VbdF09bn0pLGV9LHQuZm9yRWFjaD1mdW5jdGlvbihlKXtmb3IodmFyIG49MDtuPHMubGVuZ3RoO24rKyl7dmFyIHI9cy5rZXkobik7ZShyLHQuZ2V0KHIpKX19O2Vsc2UgaWYobi5kb2N1bWVudEVsZW1lbnQuYWRkQmVoYXZpb3Ipe3ZhciB1LGE7dHJ5e2E9bmV3IEFjdGl2ZVhPYmplY3QoXCJodG1sZmlsZVwiKSxhLm9wZW4oKSxhLndyaXRlKFwiPFwiK2krXCI+ZG9jdW1lbnQudz13aW5kb3c8L1wiK2krJz48aWZyYW1lIHNyYz1cIi9mYXZpY29uLmljb1wiPjwvaWZyYW1lPicpLGEuY2xvc2UoKSx1PWEudy5mcmFtZXNbMF0uZG9jdW1lbnQscz11LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIil9Y2F0Y2goZil7cz1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdT1uLmJvZHl9dmFyIGw9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApO24udW5zaGlmdChzKSx1LmFwcGVuZENoaWxkKHMpLHMuYWRkQmVoYXZpb3IoXCIjZGVmYXVsdCN1c2VyRGF0YVwiKSxzLmxvYWQocik7dmFyIGk9ZS5hcHBseSh0LG4pO3JldHVybiB1LnJlbW92ZUNoaWxkKHMpLGl9fSxjPW5ldyBSZWdFeHAoXCJbIVxcXCIjJCUmJygpKissL1xcXFxcXFxcOjs8PT4/QFtcXFxcXV5ge3x9fl1cIixcImdcIik7ZnVuY3Rpb24gaChlKXtyZXR1cm4gZS5yZXBsYWNlKC9eZC8sXCJfX18kJlwiKS5yZXBsYWNlKGMsXCJfX19cIil9dC5zZXQ9bChmdW5jdGlvbihlLG4saSl7cmV0dXJuIG49aChuKSxpPT09dW5kZWZpbmVkP3QucmVtb3ZlKG4pOihlLnNldEF0dHJpYnV0ZShuLHQuc2VyaWFsaXplKGkpKSxlLnNhdmUociksaSl9KSx0LmdldD1sKGZ1bmN0aW9uKGUsbixyKXtuPWgobik7dmFyIGk9dC5kZXNlcmlhbGl6ZShlLmdldEF0dHJpYnV0ZShuKSk7cmV0dXJuIGk9PT11bmRlZmluZWQ/cjppfSksdC5yZW1vdmU9bChmdW5jdGlvbihlLHQpe3Q9aCh0KSxlLnJlbW92ZUF0dHJpYnV0ZSh0KSxlLnNhdmUocil9KSx0LmNsZWFyPWwoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5YTUxEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0cmlidXRlcztlLmxvYWQocik7Zm9yKHZhciBuPTAsaTtpPXRbbl07bisrKWUucmVtb3ZlQXR0cmlidXRlKGkubmFtZSk7ZS5zYXZlKHIpfSksdC5nZXRBbGw9ZnVuY3Rpb24oZSl7dmFyIG49e307cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbihlLHQpe25bZV09dH0pLG59LHQuZm9yRWFjaD1sKGZ1bmN0aW9uKGUsbil7dmFyIHI9ZS5YTUxEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0cmlidXRlcztmb3IodmFyIGk9MCxzO3M9cltpXTsrK2kpbihzLm5hbWUsdC5kZXNlcmlhbGl6ZShlLmdldEF0dHJpYnV0ZShzLm5hbWUpKSl9KX10cnl7dmFyIHA9XCJfX3N0b3JlanNfX1wiO3Quc2V0KHAscCksdC5nZXQocCkhPXAmJih0LmRpc2FibGVkPSEwKSx0LnJlbW92ZShwKX1jYXRjaChmKXt0LmRpc2FibGVkPSEwfXQuZW5hYmxlZD0hdC5kaXNhYmxlZCx0eXBlb2YgbW9kdWxlIT1cInVuZGVmaW5lZFwiJiZtb2R1bGUuZXhwb3J0cyYmdGhpcy5tb2R1bGUhPT1tb2R1bGU/bW9kdWxlLmV4cG9ydHM9dDp0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOmUuc3RvcmU9dH0pKEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSkiLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcIm9yaWdpblwiOiBcIkRlc2RlXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uXCI6IFwiSGFjaWFcIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiU2FsaWRhXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJlZ3Jlc29cIixcbiAgICAgICAgICAgIFwiZWNvbm9taWNcIjogXCJDbGFzZSBFY29uw7NtaWNhXCIsXG4gICAgICAgICAgICBcImJ1c2luZXNzXCI6IFwiQ2xhc2UgRWplY3V0aXZhXCIsXG4gICAgICAgICAgICBcInN1Ym1pdFwiOiBcIlZlciBWdWVsb3NcIixcbiAgICAgICAgICAgIFwiYWR1bHRzXCI6IFwiQWR1bHRvc1wiLFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBcIk5pw7Fvc1wiLFxuICAgICAgICAgICAgXCJpbmZhbnRzXCIgOiBcIkluZmFudGVzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlc1wiOiB7XG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZW5cIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJvcmlnaW5cIjogXCJGcm9tXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uXCI6IFwiVG9cIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiRGVwYXJ0dXJlXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJldHVyblwiLFxuICAgICAgICAgICAgXCJlY29ub21pY1wiOiBcIkVjb25vbXkgQ2xhc3NcIixcbiAgICAgICAgICAgIFwiYnVzaW5lc3NcIjogXCJCdXNpbmVzcyBDbGFzc1wiLFxuICAgICAgICAgICAgXCJzdWJtaXRcIjogXCJGaW5kIGZsaWdodHNcIixcbiAgICAgICAgICAgIFwiYWR1bHRzXCI6IFwiQWR1bHRzXCIsXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IFwiQ2hpbGRyZW5cIixcbiAgICAgICAgICAgIFwiaW5mYW50c1wiIDogXCJJbmZhbnRzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlc1wiOiB7XG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiOiBcIlBsZWFzZSBjb21wbGV0ZSBhbGwgdGhlIC4uLlwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBsZWFzZSBjb21wbGV0ZSBhbGwgdGhlIC4uLlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicHRcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJvcmlnaW5cIjogXCJEZVwiLFxuICAgICAgICAgICAgXCJkZXN0aW5hdGlvblwiOiBcIlBhcmFcIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiU2HDrWRhXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJlZ3Jlc3NvXCIsXG4gICAgICAgICAgICBcImVjb25vbWljXCI6IFwiQ2xhc3NlIGVjb27DtG1pY2FcIixcbiAgICAgICAgICAgIFwiYnVzaW5lc3NcIjogXCJDbGFzc2UgRXhlY3V0aXZhXCIsXG4gICAgICAgICAgICBcInN1Ym1pdFwiOiBcIkJ1c2NhciB2b29zXCIsXG4gICAgICAgICAgICBcImFkdWx0c1wiOiBcIkFkdWx0b3NcIixcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogXCJDcmlhbsOnYXNcIixcbiAgICAgICAgICAgIFwiaW5mYW50c1wiIDogXCJCZWLDqnNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1lc3NhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibm90aWZpY2F0aW9uXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJyZWdpb25hbFwiOiB7XG4gICAgICAgICAgICBcImNsb3NlVGV4dFwiOiBcIkNlcnJhclwiLFxuICAgICAgICAgICAgXCJwcmV2VGV4dFwiOiBcIiYjeDNDO0FudFwiLFxuICAgICAgICAgICAgXCJuZXh0VGV4dFwiOiBcIlNpZyYjeDNFO1wiLFxuICAgICAgICAgICAgXCJjdXJyZW50VGV4dFwiOiBcIkhveVwiLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzXCI6IFtcImVuZXJvXCIsXCJmZWJyZXJvXCIsXCJtYXJ6b1wiLFwiYWJyaWxcIixcIm1heW9cIixcImp1bmlvXCIsXG4gICAgICAgICAgICBcImp1bGlvXCIsXCJhZ29zdG9cIixcInNlcHRpZW1icmVcIixcIm9jdHVicmVcIixcIm5vdmllbWJyZVwiLFwiZGljaWVtYnJlXCJdLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzU2hvcnRcIjogW1wiZW5lXCIsXCJmZWJcIixcIm1hclwiLFwiYWJyXCIsXCJtYXlcIixcImp1blwiLFwianVsXCIsXCJhZ29cIixcInNlcFwiLFwib2N0XCIsXCJub3ZcIixcImRpY1wiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNcIjogW1wiZG9taW5nb1wiLFwibHVuZXNcIixcIm1hcnRlc1wiLFwibWnDqXJjb2xlcycsJ2p1ZXZlc1wiLFwidmllcm5lc1wiLFwic8OhYmFkb1wiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNTaG9ydFwiOiBbXCJkb21cIixcImx1blwiLFwibWFyXCIsXCJtacOpXCIsXCJqdXZcIixcInZpZVwiLFwic8OhYlwiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNNaW5cIjogW1wiRFwiLFwiTFwiLFwiTVwiLFwiWFwiLFwiSlwiLFwiVlwiLFwiU1wiXSxcbiAgICAgICAgICAgIFwid2Vla0hlYWRlclwiOiBcIlNtXCIsXG4gICAgICAgICAgICBcImRhdGVGb3JtYXRcIjogXCJkZC9tbS95eVwiLFxuICAgICAgICAgICAgXCJmaXJzdERheVwiOiAxLFxuICAgICAgICAgICAgXCJpc1JUTFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2hvd01vbnRoQWZ0ZXJZZWFyXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ5ZWFyU3VmZml4XCI6IFwiXCJcbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJyZWdpb25hbFwiIDoge31cbiAgICB9LFxuICAgIFwicHRcIjoge1xuICAgICAgICBcInJlZ2lvbmFsXCIgOiB7XG4gICAgICAgICAgICBcImNsb3NlVGV4dFwiOiBcIkZlY2hhclwiLFxuICAgICAgICAgICAgXCJwcmV2VGV4dFwiOiBcIiYjeDNDO0FudGVyaW9yXCIsXG4gICAgICAgICAgICBcIm5leHRUZXh0XCI6IFwiUHLDs3hpbW8mI3gzRTtcIixcbiAgICAgICAgICAgIFwiY3VycmVudFRleHRcIjogXCJIb2plXCIsXG4gICAgICAgICAgICBcIm1vbnRoTmFtZXNcIjogW1wiSmFuZWlyb1wiLFwiRmV2ZXJlaXJvXCIsXCJNYXLDp29cIixcIkFicmlsXCIsXCJNYWlvXCIsXCJKdW5ob1wiLFwiSnVsaG9cIixcIkFnb3N0b1wiLFwiU2V0ZW1icm9cIixcIk91dHVicm9cIixcIk5vdmVtYnJvXCIsXCJEZXplbWJyb1wiXSxcbiAgICAgICAgICAgIFwibW9udGhOYW1lc1Nob3J0XCI6IFtcIkphblwiLFwiRmV2XCIsXCJNYXJcIixcIkFiclwiLFwiTWFpXCIsXCJKdW5cIixcIkp1bFwiLFwiQWdvXCIsXCJTZXRcIixcIk91dFwiLFwiTm92XCIsXCJEZXpcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzXCI6IFtcIkRvbWluZ29cIixcIlNlZ3VuZGEtZmVpcmFcIixcIlRlcsOnYS1mZWlyYVwiLFwiUXVhcnRhLWZlaXJhJywnUXVpbnRhLWZlaXJhXCIsXCJTZXh0YS1mZWlyYVwiLFwiU8OhYmFkb1wiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNTaG9ydFwiOiBbXCJEb21cIixcIlNlZ1wiLFwiVGVyXCIsXCJRdWFcIixcIlF1aVwiLFwiU2V4XCIsXCJTw6FiXCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc01pblwiOiBbXCJEb21cIixcIlNlZ1wiLFwiVGVyXCIsXCJRdWFcIixcIlF1aVwiLFwiU2V4XCIsXCJTw6FiXCJdLFxuICAgICAgICAgICAgXCJ3ZWVrSGVhZGVyXCI6IFwiU21cIixcbiAgICAgICAgICAgIFwiZGF0ZUZvcm1hdFwiOiBcImRkL21tL3l5XCIsXG4gICAgICAgICAgICBcImZpcnN0RGF5XCI6IDAsXG4gICAgICAgICAgICBcImlzUlRMXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzaG93TW9udGhBZnRlclllYXJcIjogZmFsc2UsXG4gICAgICAgICAgICBcInllYXJTdWZmaXhcIjogXCJcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiZXNcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJmbmFtZVwiOiBcIk5vbWJyZVwiLFxuICAgICAgICAgICAgXCJsbmFtZVwiOiBcIkFwZWxsaWRvXCIsXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiRW1haWxcIixcbiAgICAgICAgICAgIFwiY291bnRyeVwiOiBcIlBhw61zXCIsXG4gICAgICAgICAgICBcImNpdHlcIjogXCJDaXVkYWRcIixcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCJNw7N2aWxcIixcbiAgICAgICAgICAgIFwic3Vic2NyaWJlXCI6IFwiU3VzY3JpYmlyXCIsXG4gICAgICAgICAgICBcImJpcnRoZGF5XCI6IFwiRmVjaGEgZGUgbmFjaW1pZW50b1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZW5cIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJmbmFtZVwiOiBcIk5hbWVcIixcbiAgICAgICAgICAgIFwibG5hbWVcIjogXCJMYXN0IE5hbWVcIixcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJFbWFpbFwiLFxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiQ291bnRyeVwiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiQ2l0eVwiLFxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIk1vYmlsZVwiLFxuICAgICAgICAgICAgXCJzdWJzY3JpYmVcIjogXCJTdWJzY3JpYmVcIixcbiAgICAgICAgICAgIFwiYmlydGhkYXlcIjogXCJEYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJwdFwiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcImZuYW1lXCI6IFwiTm9tZVwiLFxuICAgICAgICAgICAgXCJsbmFtZVwiOiBcIlNvYnJlbm9tZVwiLFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIkUtbWFpbFwiLFxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiUGHDrXNcIixcbiAgICAgICAgICAgIFwiY2l0eVwiOiBcIkNpZGFkZVwiLFxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIkNlbHVsYXJcIixcbiAgICAgICAgICAgIFwic3Vic2NyaWJlXCI6IFwiSW5zY3JldmVyLXNlXCIsXG4gICAgICAgICAgICBcImJpcnRoZGF5XCI6IFwiRGF0YSBkZSBuYXNjaW1lbnRvXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgRmxpZ2h0Q29udHJvbCA9IHJlcXVpcmUoJy4vRmxpZ2h0Q29udHJvbCcpXG47XG5cbi8qKlxuICogQXV0b2NvbXBsZXRlIHdpZGdldCB3aXRoIGxpc3Qgb2YgQ29wYSdzIGRlc3RpbmF0aW9uc1xuICogZm9yIGJldHRlciB1c2FiaWxpdHkgdGhhbiBhIG5hdGl2ZSBzZWxlY3QgbWVudS5cbiAqIEBjbGFzc1xuICovXG5jbGFzcyBBdXRvY29tcGxldGVcbntcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyBDdXN0b20gb3B0aW9ucyBmb3IgdGhpcyB3aWRnZXQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZGVzdGluYXRpb25zIGZyb20gRmxpZ2h0IENvbnRyb2wgQVBJXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNiIENhbGxiYWNrIHdoZW4gQVBJIGNhbGwgZmluaXNoZXNcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgYW5kIGRlc3RpbmF0aW9ucyBhcmUgZmV0Y2hlZFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3RhcnQoY2IpIHtcbiAgICAgICAgdmFyIGZsaWdodENvbnRyb2wgPSBuZXcgRmxpZ2h0Q29udHJvbCh7IGxhbmc6IHRoaXMub3B0aW9ucy5sYW5nIH0pO1xuXG4gICAgICAgIGZsaWdodENvbnRyb2wuZmV0Y2goJ2Rlc3RpbmF0aW9ucycsIChkZXN0aW5hdGlvbnMpID0+IHtcbiAgICAgICAgICAgIC8vIEZvcm1hdCByYXcgZGVzdGluYXRpb25zIHRvIGF1dG9jb21wbGV0ZSBzdHJ1Y3R1cmVcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zb3VyY2UgPSB0aGlzLmZvcm1hdChkZXN0aW5hdGlvbnMubGlzdCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgYXV0b2NvbXBsZXRlIHdpZGdldFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudCBET00gZWxlbWVudCB0byBhdHRhY2ggd2lkZ2V0IHRvXG4gICAgICovXG4gICAgcmVuZGVyKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJChlbGVtZW50KS5oaWRlKCksXG4gICAgICAgICAgICBzb3VyY2VDbGFzc2VzID0gJHRoaXMuYXR0cignY2xhc3MnKSxcbiAgICAgICAgICAgIHNvdXJjZVZhbHVlID0gJHRoaXMudmFsKCksXG4gICAgICAgICAgICBzb3VyY2VQbGFjZWhvbGRlciA9ICR0aGlzLmF0dHIoJ3BsYWNlaG9sZGVyJyksXG4gICAgICAgICAgICBkYXRhSW5wdXQgPSAkdGhpcy5kYXRhKCdpbnB1dC1maWVsZCcpXG4gICAgICAgIDtcblxuICAgICAgICB2YXIgJGlucHV0ID0gJCgnPGlucHV0IC8+JylcbiAgICAgICAgICAgIC52YWwoc291cmNlVmFsdWUpXG4gICAgICAgICAgICAuYXR0cigndHlwZScsICd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCdwbGFjZWhvbGRlcicsIHNvdXJjZVBsYWNlaG9sZGVyKVxuICAgICAgICAgICAgLmF0dHIoJ2RhdGEtaW5wdXQtZmllbGQnLCBkYXRhSW5wdXQpXG4gICAgICAgIDtcblxuICAgICAgICAvLyBBZGQgYXV0b2NvbXBsZXRlIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgJGlucHV0LmF1dG9jb21wbGV0ZSh0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIC8vIE9wZW4gbGlzdCBvbiBpbnB1dCBmb2N1c1xuICAgICAgICAkaW5wdXQub24oJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCR0aGlzLnZhbCgpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAkdGhpcy5hdXRvY29tcGxldGUoJ3NlYXJjaCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgc3R5bGluZ1xuICAgICAgICAkaW5wdXRcbiAgICAgICAgICAgIC5hZGRDbGFzcyhzb3VyY2VDbGFzc2VzKVxuICAgICAgICAgICAgLmFkZENsYXNzKCd1aS13aWRnZXQgIHVpLXdpZGdldC1jb250ZW50ICB1aS1zdGF0ZS1kZWZhdWx0Jyk7XG5cbiAgICAgICAgLy8gSW5zZXJ0IGludG8gRE9NXG4gICAgICAgICRpbnB1dC5pbnNlcnRBZnRlcigkdGhpcyk7XG5cbiAgICAgICAgLy8gT3ZlcndyaXRlIGF1dG9jb21wbGV0ZSBpdGVtIHJlbmRlcmluZyB3aXRoIGN1c3RvbSBtYXJrdXBcbiAgICAgICAgJGlucHV0LmF1dG9jb21wbGV0ZSgnaW5zdGFuY2UnKS5fcmVuZGVySXRlbSA9IGZ1bmN0aW9uKHVsLCBpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gJCgnPGxpPicpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChpdGVtLmxhYmVsKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyh1bCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ3VzdG9tIGZpbHRlcmluZyBmdW5jdGlvblxuICAgICAgICAkLnVpLmF1dG9jb21wbGV0ZS5maWx0ZXIgPSBmdW5jdGlvbiBhdXRvQ29tcGxldGVGaWx0ZXIoYXJyYXksIHRlcm0pIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgnXFxcXGInICsgJC51aS5hdXRvY29tcGxldGUuZXNjYXBlUmVnZXgodGVybSksICdpJyk7XG4gICAgICAgICAgICByZXR1cm4gJC5ncmVwKGFycmF5LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlci50ZXN0KHZhbHVlLmxhYmVsIHx8IHZhbHVlLnZhbHVlIHx8IHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdHMgZGVzdGluYXRpb25zIGludG8gdGhlIG5lZWRlZCBzdHJ1Y3R1cmUgdG8gYmUgZGlzcGxheWVkXG4gICAgICogb24gdGhlIGF1dG9jb21wbGV0ZSBtZW51IHdpZGdldC5cbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gZGVzdGluYXRpb25zIFJhdyBkYXRhIHJldHVybmVkIGZyb20gRmxpZ2h0IENvbnRyb2xcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICAgIEZvcm1hdHRlZCBkZXN0aW5hdGlvbnNcbiAgICAgKi9cbiAgICBmb3JtYXQoZGVzdGluYXRpb25zKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAkLmVhY2goZGVzdGluYXRpb25zLCAoaSwgZGVzdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRlbXBMYWJlbCA9XG4gICAgICAgICAgICAgICAgICAgIGA8Yj4keyBkZXN0Lm5hbWVbdGhpcy5vcHRpb25zLmxhbmddIH0sICR7IGRlc3QuY291bnRyeSB9PC9iPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvZGVcIj4gfCAkeyBkZXN0LmlkIH08L3NwYW4+YCxcbiAgICAgICAgICAgICAgICB0ZW1wVmFsdWUgPSBkZXN0LmlkLFxuICAgICAgICAgICAgICAgIHRleHRWYWx1ZSA9IGRlc3QubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10gKyAnLCAnICsgZGVzdC5pZDtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogdGVtcExhYmVsLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0ZW1wVmFsdWUsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGV4dFZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbi8qKlxuICogRXhwb3J0XG4gKiBAZXhwb3J0cyBBdXRvY29tcGxldGVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBBdXRvY29tcGxldGU7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIEZsaWdodENvbnRyb2wgPSByZXF1aXJlKCcuL0ZsaWdodENvbnRyb2wnKSxcblxuICAgIGRlZmF1bHRzID0ge1xuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICBjb250ZW50VHlwZTogJ2NvdW50cmllcycsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHt9XG4gICAgfVxuO1xuXG5cblxuY2xhc3MgRGF0YU1lbnVcbntcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyBDdXN0b20gb3B0aW9ucyBmb3IgdGhpcyB3aWRnZXQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgdGhpcy5zZXR1cCgpO1xuICAgIH1cblxuICAgIHNldHVwKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmRhdGEpIHtcbiAgICAgICAgICAgIHZhciBmbGlnaHRDb250cm9sID0gbmV3IEZsaWdodENvbnRyb2woeyBsYW5nOiB0aGlzLm9wdGlvbnMubGFuZyB9KTtcblxuICAgICAgICAgICAgZmxpZ2h0Q29udHJvbC5mZXRjaCh0aGlzLm9wdGlvbnMuY29udGVudFR5cGUsIChkYXRhLCBsYW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRm9ybWF0IHJhdyBkZXN0aW5hdGlvbnMgdG8gYXV0b2NvbXBsZXRlIHN0cnVjdHVyZVxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zb3VyY2UgPSB0aGlzLmZvcm1hdChkYXRhLmxpc3QpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNvdXJjZSA9IHRoaXMuZm9ybWF0KHRoaXMub3B0aW9ucy5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKG5ld0lucHV0KSB7XG4gICAgICAgIGlmKG5ld0lucHV0KSB7XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5zZWxlY3RvcikuZmluZCgnb3B0aW9uJykuc2xpY2UoMSkucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgJC5lYWNoKHRoaXMub3B0aW9ucy5zb3VyY2UsIChpLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5zZWxlY3RvcikuYXBwZW5kKGl0ZW0uZGlzcGxheSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdHMgZGF0YSBpbnRvIHRoZSBuZWVkZWQgc3RydWN0dXJlIHRvIGJlIGRpc3BsYXllZFxuICAgICAqIG9uIHRoZSBhdXRvY29tcGxldGUgbWVudSB3aWRnZXQuXG4gICAgICogQHBhcmFtICB7QXJyYXl9IGRlc3RpbmF0aW9ucyBSYXcgZGF0YSByZXR1cm5lZCBmcm9tIEZsaWdodCBDb250cm9sXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgICBGb3JtYXR0ZWQgZGVzdGluYXRpb25zXG4gICAgICovXG4gICAgZm9ybWF0KGxpc3QpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAkLmVhY2gobGlzdCwgKGksIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPVxuICAgICAgICAgICAgICAgIGA8b3B0aW9uIHZhbHVlPVwiJHsgaXRlbS5pZCB9XCI+JHsgaXRlbS5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSB9PC9vcHRpb24+YDtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om9wdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YU1lbnU7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIGkxOG4gPSByZXF1aXJlKCcuLi8uLi8uLi9sYW5nL2RhdGVwaWNrZXIuanNvbicpLFxuICAgIGRlZmF1bHRzID0ge1xuICAgICAgICBkZXBhcnR1cmVTZWxlY3RvcjogJy5jb3BhYWlyLWJvb2tpbmctZGF0ZXBpY2tlci1kZXBhcnR1cmUnLFxuICAgICAgICByZXR1cm5TZWxlY3RvcjogJy5jb3BhYWlyLWJvb2tpbmctZGF0ZXBpY2tlci1yZXR1cm4nLFxuICAgICAgICBkYXRlUnVsZXM6IHtcbiAgICAgICAgICAgIHRvZGF5OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgd2Vla0xhdGVyOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKVxuICAgICAgICB9LFxuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBiZWZvcmVTaG93OiBmdW5jdGlvbihpbnB1dCwgaXNudCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpc250LmRwRGl2LnBvc2l0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgbXk6ICdsZWZ0IGJvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGF0OiAnbGVmdCB0b3AnLFxuICAgICAgICAgICAgICAgICAgICBvZjogaW5wdXRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfVxuO1xuXG4vKipcbiAqIERhdGVwaWNrZXIgbW9kdWxlXG4gKi9cbmNsYXNzIERhdGVwaWNrZXIge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBkYXRlIHBpY2tlciBpbnNpZGUgdGhlIGJvb2tpbmcgZm9ybVxuICAgICAqIHNldHVwcyB0aGUgZGVmYXVsdHMgZGF0ZXMgYW5kIGxhbmd1YWdlXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnNldExvY2FsZSgpO1xuICAgICAgICB0aGlzLnNldERlZmF1bHREYXRlcygpO1xuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBkZWZhdWx0cyBkYXRlc1xuICAgICAqIHRoaXMgY29uc2lzdCBpbiBzZXQgY3VycmVudCBkYXRlIGZvciBkZXBhcnR1cmVcbiAgICAgKiBhbmQgb25lIHdlZWsgbGF0ZXIgZm9yIHJldHVyblxuICAgICAqL1xuICAgIHNldERlZmF1bHREYXRlcygpIHtcbiAgICAgICAgdmFyIGRhdGVSdWxlcyA9IHRoaXMub3B0aW9ucy5kYXRlUnVsZXMsXG4gICAgICAgICAgICAkZGVwYXJ0dXJlRmllbGQgPSAkKHRoaXMub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvciksXG4gICAgICAgICAgICAkcmV0dXJuRmllbGQgPSAkKHRoaXMub3B0aW9ucy5yZXR1cm5TZWxlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLm1pbkRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICRkZXBhcnR1cmVGaWVsZC5kYXRlcGlja2VyKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoXCJzZXREYXRlXCIsIGRhdGVSdWxlcy50b2RheSk7XG4gICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKFwic2V0RGF0ZVwiLCBkYXRlUnVsZXMud2Vla0xhdGVyKTtcbiAgICB9XG5cbiAgICBldmVudHMoKSB7XG4gICAgICAgIHZhciAkZGVwYXJ0dXJlRmllbGQgPSAkKHRoaXMub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvciksXG4gICAgICAgICAgICAkcmV0dXJuRmllbGQgPSAkKHRoaXMub3B0aW9ucy5yZXR1cm5TZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoJ29wdGlvbicsICdvblNlbGVjdCcsIHRoaXMub25TZWxlY3RPdXRib3VuZCk7XG4gICAgfVxuXG4gICAgb25TZWxlY3RPdXRib3VuZChkYXRlVGV4dCwgaW5zdCkge1xuICAgICAgICAgICAgdmFyICRyZXR1cm5GaWVsZCA9ICQodGhpcy5vcHRpb25zLnJldHVyblNlbGVjdG9yKSxcbiAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoaW5zdC5zZWxlY3RlZFllYXIsIGluc3Quc2VsZWN0ZWRNb250aCwgaW5zdC5zZWxlY3RlZERheSk7XG5cbiAgICAgICAgICAgIC8vdGhpcyBzZXRzIHRoZSBpbmJvdW5kIGRhdGUgcGlja2VyIHRvIGEgd2VlayBsYXRlciBvZiBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgdmFyIHdlZWtsYXRlciA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgJHJldHVybkZpZWxkLmRhdGVwaWNrZXIoJ3NldERhdGUnLCB3ZWVrbGF0ZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZSBkYXRlcGlja2VyIGRlcGVuZGluZyBvbiB0aGVcbiAgICAgKiBsb2NhbGl6YXRpb25cbiAgICAgKi9cbiAgICBzZXRMb2NhbGUoKSB7XG4gICAgICAgIHZhciByZWdpb25hbCA9IGkxOG5bdGhpcy5vcHRpb25zLmxhbmddLnJlZ2lvbmFsO1xuICAgICAgICAkLmRhdGVwaWNrZXIuc2V0RGVmYXVsdHMocmVnaW9uYWwpO1xuICAgIH1cblxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0ZXBpY2tlcjtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5yZXF1aXJlKCdzdG9yZS1qcycpO1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIGFwaToge1xuICAgICAgICAgICAgZGVzdGluYXRpb25zIDogXCJodHRwczovL2ZsaWdodGNvbnRyb2wuaW8vYXBpL3JvdXRlcy9kZXN0aW5hdGlvbnNcIixcbiAgICAgICAgICAgIGNvdW50cmllcyA6IFwiaHR0cHM6Ly9mbGlnaHRjb250cm9sLmlvL2FwaS9yb3V0ZXMvY291bnRyaWVzXCIsXG4gICAgICAgICAgICByZWdpb25zIDogXCJodHRwczovL2ZsaWdodGNvbnRyb2wuaW8vYXBpL3JvdXRlcy9yZWdpb25zXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHN0b3JhZ2VFeHBpcmF0aW9uOiA4NjQwMDAwMCxcbiAgICAgICAgc3RvcmFnZTogdHJ1ZSxcbiAgICB9XG47XG5cbi8qKlxuICogRXh0ZW5zaW9uIHRvIHRoZSBzdG9yYWdlIGNsYXNzXG4gKiB0byBzZXR1cCB0aGUgZXhwaXJhdGlvbiB2YWx1ZVxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIHN0b3JlV2lkdGhFeHBpcmF0aW9uID0ge1xuICAgIHNldDogZnVuY3Rpb24oa2V5LCB2YWwsIGV4cCkge1xuICAgICAgICBzdG9yZS5zZXQoa2V5LCB7IHZhbDp2YWwsIGV4cDpleHAsIHRpbWU6bmV3IERhdGUoKS5nZXRUaW1lKCkgfSlcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHZhciBpbmZvID0gc3RvcmUuZ2V0KGtleSlcbiAgICAgICAgaWYgKCFpbmZvKSB7IHJldHVybiBudWxsIH1cbiAgICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5mby50aW1lID4gaW5mby5leHApIHsgcmV0dXJuIG51bGwgfVxuICAgICAgICByZXR1cm4gaW5mby52YWxcbiAgICB9XG59XG5cbi8qKlxuICogTW9kdWxlIEZsaWdodENvbnRyb2xcbiAqL1xuY2xhc3MgRmxpZ2h0Q29udHJvbCB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcblxuICAgICAgICBpZighc3RvcmUuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Jyb3dzZXIgbm90IHN1cHBvcnRlZCBvciBpbiBwcml2YXRlIG1vZGUnKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zdG9yYWdlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBkYXRhIGZyb20gZmxpZ2h0IGNvbnRyb2xsZXJcbiAgICAgKiBiYXNlZCBvbiB0aGUgcmVzb3VyY2UgbmFtZVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICByZXNvdXJjZU5hbWU6IGRlc3RpbmF0aW9uc3xjb3VudHJpZXN8cmVnaW9uc1xuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYiAgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmZXRjaChyZXNvdXJjZU5hbWUsIGNiKSB7XG4gICAgICAgIHZhciByZXNvdXJjZVZhbHVlID0ge307XG5cbiAgICAgICAgaWYodGhpcy5vcHRpb25zLnN0b3JhZ2UgJiYgc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSlcbiAgICAgICAgICAgJiYgc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSArICcuY291bnQnKSkge1xuICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5saXN0ID0gc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSk7XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmNvdW50ID0gc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSArICcuY291bnQnKTtcblxuICAgICAgICAgICByZXR1cm4gY2IocmVzb3VyY2VWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mKElFOURhdGEpICE9PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICB2YXIgZGF0YSA9IElFOURhdGFbcmVzb3VyY2VOYW1lXTtcbiAgICAgICAgICAgIHRoaXMuc29ydE5hbWVzKGRhdGEpO1xuXG4gICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMuc3RvcmFnZSkge1xuICAgICAgICAgICAgICAgIHN0b3JlV2lkdGhFeHBpcmF0aW9uLnNldChyZXNvdXJjZU5hbWUsIGRhdGEsIHRoaXMub3B0aW9ucy5zdG9yYWdlRXhwaXJhdGlvbik7XG4gICAgICAgICAgICAgICAgc3RvcmVXaWR0aEV4cGlyYXRpb24uc2V0KHJlc291cmNlTmFtZSArICcuY291bnQnLCBkYXRhLmxlbmd0aCwgdGhpcy5vcHRpb25zLnN0b3JhZ2VFeHBpcmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc291cmNlVmFsdWUubGlzdCA9IGRhdGE7XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmNvdW50ID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGNiKHJlc291cmNlVmFsdWUpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cblxuICAgICAgICAgICAgJC5nZXRKU09OKHRoaXMub3B0aW9ucy5hcGlbcmVzb3VyY2VOYW1lXSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnROYW1lcyhkYXRhKTtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5zdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlV2lkdGhFeHBpcmF0aW9uLnNldChyZXNvdXJjZU5hbWUsIGRhdGEsIHRoaXMub3B0aW9ucy5zdG9yYWdlRXhwaXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlV2lkdGhFeHBpcmF0aW9uLnNldChyZXNvdXJjZU5hbWUgKyAnLmNvdW50JywgZGF0YS5sZW5ndGgsIHRoaXMub3B0aW9ucy5zdG9yYWdlRXhwaXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc291cmNlVmFsdWUubGlzdCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5jb3VudCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgY2IocmVzb3VyY2VWYWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byBzb3J0IGRhdGFcbiAgICAgKiBiYXNlZCBvbiBsYW5ndWFnZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHNvcnROYW1lcyhkYXRhKSB7XG4gICAgICAgIGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10gPiBiLm5hbWVbdGhpcy5vcHRpb25zLmxhbmddKSByZXR1cm4gMTtcbiAgICAgICAgICAgIGlmIChhLm5hbWVbdGhpcy5vcHRpb25zLmxhbmddIDwgYi5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSkgcmV0dXJuIC0xO1xuXG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsaWdodENvbnRyb2w7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIGRlZmF1bHRzID0ge1xuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBvcmlnaW46ICdhbGwnLFxuICAgICAgICBkZXN0aW5hdGlvbjogJ2FsbCcsXG4gICAgICAgIGQxOiBudWxsLFxuICAgICAgICBib29raW5nUGFnZTogJ0Jvb2tpbmcgRW5naW5lJyxcbiAgICAgICAgYW5hbHl0aWNzOiBmYWxzZSxcbiAgICAgICAgLy8gcmVxdWlyZWQgZmllbGQgdG8gc3VibWl0IGZvcm1cbiAgICAgICAgLy8gdG8gY29wYVxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHRyaXBUeXBlOiBcIlJUXCIsXG4gICAgICAgICAgICBmbGV4aWJsZVNlYXJjaDogXCJ0cnVlXCIsXG4gICAgICAgICAgICBwb3M6IFwiQ01HU1wiLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzBdLnR5cGVcIjogXCJBRFRcIixcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1sxXS50eXBlXCI6IFwiQ05OXCIsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMl0udHlwZVwiOiBcIklORlwiLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzBdLmFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzFdLmFtb3VudFwiOiAwLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzJdLmFtb3VudFwiOiAwLFxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIjogbnVsbCxcbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCI6IG51bGwsXG4gICAgICAgICAgICBcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiOiBudWxsLFxuICAgICAgICAgICAgLy8gXCJjb3Vwb25cIjogbnVsbCxcbiAgICAgICAgICAgIC8vIG9yaWdpblxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiOiBudWxsLFxuICAgICAgICAgICAgLy8gZGVzdGluYXRpb25cbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIC8vIC8vIGNhYmluIGNsYXNzIEJ1c2luZXNzfEVjb25vbXlcbiAgICAgICAgICAgIFwiY2FiaW5DbGFzc1wiOiBcIkVjb25vbXlcIixcbiAgICAgICAgICAgIGxhbmc6ICdlcydcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybVVybDogJ2h0dHBzOi8vYm9va2luZ3MuY29wYWFpci5jb20vQ01HUy8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgJ0Fpckxvd0ZhcmVTZWFyY2hFeHRlcm5hbC5kbz8nXG4gICAgfVxuO1xuXG4vKipcbiAqIEZvcm1IZWxwZXIgbW9kdWxlXG4gKi9cbmNsYXNzIEZvcm1IZWxwZXIge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgLy8gc2V0IGRlZmF1dGxzIHZhbHVlc1xuICAgICAgICB0aGlzLnNldERlZmF1bHRCb3VuZHMoKTtcbiAgICAgICAgdGhpcy5zZXREYXRlcyh0aGlzLm9wdGlvbnMuZGF0ZXBpY2tlciwge3JldHVybnM6dHJ1ZSwgZGVwYXJ0dXJlOnRydWV9KTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0cy5sYW5nID0gdGhpcy5vcHRpb25zLmxhbmc7XG4gICAgICAgIC8vIGxvYWQgZXZlbnRzIHJlbGF0ZWQgd2l0aCBmb3JtIGhlbHBlciBhbmQgb3RoZXIgbW9kdWxlc1xuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgIH1cblxuXG5cbiAgICBwcm9jZXNzKCkge1xuXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLm9wdGlvbnMuZm9ybVVybDtcbiAgICAgICAgdmFyIHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb25FcnJvcigpO1xuICAgICAgICB2YXIgaHR0cFF1ZXJ5ID0gJC5wYXJhbSh0aGlzLm9wdGlvbnMuaW5wdXRzKTtcbiAgICAgICAgaHR0cFF1ZXJ5ICs9ICcmJyArICQucGFyYW0oe2QxOiB0aGlzLm9wdGlvbnMuZDF9KTtcblxuICAgICAgICBpZiAodmFsaWRhdGlvbi5lcnJvcikge1xuICAgICAgICAgICAgLy8gaGFuZGxlIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5hbmFseXRpY3MgJiYgdHlwZW9mKGdhKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBnYShcInNlbmRcIiwgXCJldmVudFwiLCB0aGlzLm9wdGlvbnMuYm9va2luZ1BhZ2UsIFwiZXJyb3JcIiwgXCJVc2VyIGxlZnQgcmVxdWlyZWQgZmllbGRzIGJsYW5rXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm8gZXJyb3JzLCBmb3J3YXJkIGZvcm0gdmFsdWVzIHRvIGNvcGFcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGh0dHBRdWVyeSk7XG4gICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMuYW5hbHl0aWNzICYmIHR5cGVvZihnYSkgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgICAgICBnYShcInNlbmRcIiwgXCJldmVudFwiLCB0aGlzLm9wdGlvbnMuYm9va2luZ1BhZ2UsIFwiY2xpY2tcIiwgXCJTZWFyY2ggZmxpZ2h0c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzZWFyY2hXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwgKyBodHRwUXVlcnksICdfYmxhbmsnKTtcbiAgICAgICAgICAgIHNlYXJjaFdpbmRvdy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGVmYXVsdEJvdW5kcygpIHtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9yaWdpbiAhPT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Qm91bmRzKCdvcmlnaW4nLCB0aGlzLm9wdGlvbnMub3JpZ2luKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24gIT09J2FsbCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Qm91bmRzKCdkZXN0aW5hdGlvbicsIHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEJvdW5kcyhib3VuZCwgbG9jYXRpb24pIHtcblxuICAgICAgICBpZiAoYm91bmQgPT09ICdvcmlnaW4nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wib3V0Ym91bmRPcHRpb24ub3JpZ2luTG9jYXRpb25Db2RlXCJdID0gbG9jYXRpb247XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiXSA9IGxvY2F0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvdW5kID09PSAnZGVzdGluYXRpb24nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wib3V0Ym91bmRPcHRpb24uZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIl0gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLm9yaWdpbkxvY2F0aW9uQ29kZVwiXSA9IGxvY2F0aW9uO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZXREYXRlcyhkYXRlcGlja2VyLCBib3VuZHMpIHtcbiAgICAgICAgLy8gZ2V0IGN1cnJlbnQgZGF0ZXBpY2tlcnMgZGF0ZXNcbiAgICAgICAgdmFyIGRlcGFydHVyZURhdGUgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvcikuZGF0ZXBpY2tlcignZ2V0RGF0ZScpLFxuICAgICAgICByZXR1cm5EYXRlID0gJChkYXRlcGlja2VyLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpLmRhdGVwaWNrZXIoJ2dldERhdGUnKTtcblxuICAgICAgICBpZiAoYm91bmRzLnJldHVybnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiXSA9IHJldHVybkRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIl0gPSByZXR1cm5EYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiXSA9IHJldHVybkRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGJvdW5kcy5kZXBhcnR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIl0gPSBkZXBhcnR1cmVEYXRlLmdldFVUQ0RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiXSA9IGRlcGFydHVyZURhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiXSA9IGRlcGFydHVyZURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENhYmluQ2xhc3ModGFyZ2V0KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJjYWJpbkNsYXNzXCJdID0gJCh0YXJnZXQpLnZhbCgpO1xuICAgIH1cblxuICAgIHNldFBhc3NlbmdlcnNBbW91bnQodHlwZSwgdmFsdWUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdhZHVsdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImd1ZXN0VHlwZXNbMF0uYW1vdW50XCJdID0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NoaWxkJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiZ3Vlc3RUeXBlc1sxXS5hbW91bnRcIl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5mYW50JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiZ3Vlc3RUeXBlc1syXS5hbW91bnRcIl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q291cG9uKGNvdXBvbikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzLmNvdXBvbiA9IGNvdXBvbjtcbiAgICB9XG5cbiAgICBzZXREMSgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0cy5kMSA9IHRoaXMub3B0aW9ucy5kMTtcbiAgICB9XG5cbiAgICB2YWxpZGF0aW9uRXJyb3IoKSB7XG4gICAgICAgIHZhciBlcnJvcnMgID0ge1xuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgYmFnOltdXG4gICAgICAgIH07XG4gICAgICAgIHZhciBjdXJyZW50RXJyb3I7XG4gICAgICAgIGZvciAodmFyIGlucHV0IGluIHRoaXMub3B0aW9ucy5pbnB1dHMpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLm9wdGlvbnMuaW5wdXRzW2lucHV0XSAmJiB0aGlzLm9wdGlvbnMuaW5wdXRzW2lucHV0XSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvciA9IHt9O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvci5maWVsZCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvci5tZXNzYWdlID0gYFRoZSBpbnB1dCAke2lucHV0fSBtdXN0IGhhdmUgc29tZSB2YWx1ZWA7XG4gICAgICAgICAgICAgICAgZXJyb3JzLmJhZy5wdXNoKGN1cnJlbnRFcnJvcik7XG4gICAgICAgICAgICAgICAgZXJyb3JzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgfTtcblxuICAgIGV2ZW50cygpIHtcblxuICAgICAgICB2YXIgZGF0ZXBpY2tlciA9IHRoaXMub3B0aW9ucy5kYXRlcGlja2VyLFxuICAgICAgICAgICAgJGRlcGFydHVyZUZpZWxkID0gJChkYXRlcGlja2VyLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLFxuICAgICAgICAgICAgJHJldHVybkZpZWxkID0gJChkYXRlcGlja2VyLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpO1xuXG4gICAgICAgICRkZXBhcnR1cmVGaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnb25TZWxlY3QnLCAoZGF0ZVRleHQsIGluc3QpID0+e1xuXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGluc3Quc2VsZWN0ZWRZZWFyLCBpbnN0LnNlbGVjdGVkTW9udGgsIGluc3Quc2VsZWN0ZWREYXkpO1xuXG4gICAgICAgICAgICAvLyB0aGlzIHNldHMgdGhlIGluYm91bmQgZGF0ZSBwaWNrZXIgdG8gYSB3ZWVrIGxhdGVyIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgd2Vla2xhdGVyID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignc2V0RGF0ZScsIHdlZWtsYXRlcik7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ21pbkRhdGUnLCBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0ZXMoZGF0ZXBpY2tlciwge3JldHVybnM6dHJ1ZSwgZGVwYXJ0dXJlOnRydWV9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ29uU2VsZWN0JywgKGRhdGVUZXh0LCBpbnN0KSA9PntcblxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShpbnN0LnNlbGVjdGVkWWVhciwgaW5zdC5zZWxlY3RlZE1vbnRoLCBpbnN0LnNlbGVjdGVkRGF5KTtcblxuICAgICAgICAgICAgLy8gdGhpcyBzZXRzIHRoZSBpbmJvdW5kIGRhdGUgcGlja2VyIHRvIGEgd2VlayBsYXRlciBvZiBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgdmFyIHdlZWtsYXRlciA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlcyhkYXRlcGlja2VyLCB7cmV0dXJuczp0cnVlLCBkZXBhcnR1cmU6ZmFsc2V9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmJvb2tpbmcuZmluZCgnLmpzLWNhYmluLWNsYXNzJykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2FiaW5DbGFzcyhlLnRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5ib29raW5nLmZpbmQoJy5qcy1hZHVsdHMtYW1vdW50Jykuc2VsZWN0bWVudSh7XG4gICAgICAgICAgICBjaGFuZ2U6IChlLCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFzc2VuZ2Vyc0Ftb3VudCgnYWR1bHQnLCB1aS5pdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmJvb2tpbmcuZmluZCgnLmpzLWNoaWxkcmVuLWFtb3VudCcpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgY2hhbmdlOiAoZSwgdWkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhc3NlbmdlcnNBbW91bnQoJ2NoaWxkJywgdWkuaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5ib29raW5nLmZpbmQoJy5qcy1pbmZhbnRzLWFtb3VudCcpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgY2hhbmdlOiAoZSwgdWkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhc3NlbmdlcnNBbW91bnQoJ2luZmFudCcsIHVpLml0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuYm9va2luZy5maW5kKCcuanMtc3VibWl0Jykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2VzcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtSGVscGVyO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGFuZGxlYmFycycpLFxuICAgIGkxOG4gPSB7XG4gICAgICAgIGJvb2tpbmc6IHJlcXVpcmUoJy4uLy4uLy4uL2xhbmcvYm9va2luZy5qc29uJyksXG4gICAgICAgIHNpZ251cDogcmVxdWlyZSgnLi4vLi4vLi4vbGFuZy9zaWdudXAuanNvbicpLFxuICAgIH0sXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIC8vc3JjOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy9ib3dlcl9jb21wb25lbnRzL2NvcGFhaXItd2lkZ2V0cy90ZW1wbGF0ZXMnLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7fVxuICAgIH1cbjtcblxuXG5cbmNsYXNzIFRlbXBsYXRlXG57XG5cbiAgICBjb25zdHJ1Y3Rvcih3aWRnZXQsIG9wdGlvbnMpIHtcblxuICAgICAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdHMuc3JjID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvYm93ZXJfY29tcG9uZW50cy9jb3BhYWlyLXdpZGdldHMvdGVtcGxhdGVzJztcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAodHlwZW9mIEhhbmRsZWJhcnMgIT09ICd1bmRlZmluZWQnICYmIEhhbmRsZWJhcnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBgJHt0aGlzLm9wdGlvbnMuc3JjfS8ke3dpZGdldH0uaGJzYCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAodHBsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kYXRhID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucywgaTE4blt3aWRnZXRdW3RoaXMub3B0aW9ucy5sYW5nXSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBodG1sID0gdGhpcy5jb21waWxlKHdpZGdldCwgdHBsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrKGh0bWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhpcyBwbHVnaW4gcmVxdWlyZXMgSGFuZGxlYmFycy5qcycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGlsZSh3aWRnZXQsIHRwbCkge1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUodHBsKTtcbiAgICAgICAgdmFyIGh0bWwgPSB0ZW1wbGF0ZSh0aGlzLm9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZW1wbGF0ZTtcbiIsIi8qKlxuICogTW9kdWxlc1xuICovXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIFRlbXBsYXRlID0gcmVxdWlyZSgnLi4vbGliL1RlbXBsYXRlJyksXG4gICAgRmxpZ2h0Q29udHJvbCA9IHJlcXVpcmUoJy4uL2xpYi9GbGlnaHRDb250cm9sJyksXG4gICAgRGF0ZXBpY2tlciA9IHJlcXVpcmUoJy4uL2xpYi9EYXRlcGlja2VyJyksXG4gICAgQXV0b2NvbXBsZXRlID0gcmVxdWlyZSgnLi4vbGliL0F1dG9jb21wbGV0ZScpLFxuICAgIEZvcm1IZWxwZXIgPSByZXF1aXJlKCcuLi9saWIvRm9ybUhlbHBlcicpXG47XG5cbi8qKlxuICogT3B0aW9uc1xuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBkMTogbnVsbCxcbiAgICAgICAgYm9va2luZ1BhZ2U6bnVsbCxcbiAgICAgICAgY291cG9uOiBudWxsLFxuICAgICAgICBvcmlnaW46IG51bGwsXG4gICAgICAgIGRlc3RpbmF0aW9uOiBudWxsLFxuICAgICAgICBkZXN0aW5hdGlvbk5hbWU6IG51bGwsXG4gICAgICAgIGFuYWx5dGljczogZmFsc2UsXG4gICAgICAgIHdpZGdldFBvc2l0aW9uOiB7IG15OiAnbGVmdCBib3R0b20nLCBhdDogJ2xlZnQgdG9wJyB9LFxuICAgICAgICB0ZW1wbGF0ZVBhdGg6ICdib3dlcl9jb21wb25lbnRzL2NvcGFhaXItd2lkZ2V0cy90ZW1wbGF0ZXMvYm9va2luZy5oYnMnLFxuICAgICAgICBsYW5ndWFnZVBhdGg6ICdib3dlcl9jb21wb25lbnRzL2NvcGFhaXItd2lkZ2V0cy9sYW5nLydcbiAgICB9XG47XG5cblxuY2xhc3MgQm9va2luZyB7XG5cbiAgICAvKipcbiAgICAgKiBXaWRnZXQgY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0b3IgZWxlbWVudCBET00gb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgIE9wdGlvbnMgcGFzc2VkIG9uIHBsdWdpbiBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy4kYm9va2luZyA9ICQoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICAgICAgbmV3IFRlbXBsYXRlKCdib29raW5nJywge1xuICAgICAgICAgICAgJ2xhbmcnOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgICdvcmlnaW4nOiB0aGlzLm9wdGlvbnMub3JpZ2luLFxuICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uJzogdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uTmFtZSc6IHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbk5hbWUsIC8vIHRlbXBvcmFyeSBmaXggZm9yIHN0YXRpYyBkZXN0aW5hdGlvblxuICAgICAgICAgICAgY2FsbGJhY2s6IChodG1sKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYm9va2luZy5odG1sKGh0bWwpO1xuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBmaW5pc2hlZCwgYnVpbGQgYWxsIHRoZSB3aWRnZXRzXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cFNlbGVjdE1lbnVzKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXR1cCBkYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGVwaWNrZXIgPSBuZXcgRGF0ZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgICAgIGxhbmc6IHRoaXMub3B0aW9ucy5sYW5nLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRhdGVwaWNrZXIucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1IZWxwZXIgPSBuZXcgRm9ybUhlbHBlcih7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVwaWNrZXI6IGRhdGVwaWNrZXIsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogdGhpcy5vcHRpb25zLm9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246IHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZzogdGhpcy4kYm9va2luZyxcbiAgICAgICAgICAgICAgICAgICAgZDE6IHRoaXMub3B0aW9ucy5kMSxcbiAgICAgICAgICAgICAgICAgICAgbGFuZzogdGhpcy5vcHRpb25zLmxhbmcsXG4gICAgICAgICAgICAgICAgICAgIGFuYWx5dGljczogdGhpcy5vcHRpb25zLmFuYWx5dGljcyxcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ1BhZ2U6IHRoaXMub3B0aW9ucy5ib29raW5nUGFnZVxuICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMuY291cG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1IZWxwZXIuc2V0Q291cG9uKHRoaXMub3B0aW9ucy5jb3Vwb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEF1dG9jb21wbGV0ZSB3aWRnZXRzXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0QXV0b2NvbXBsZXRlKGZvcm1IZWxwZXIpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBCaW5kIGV2ZW50c1xuICAgICAgICAgICAgICAgIHRoaXMuYm9va2luZ0V2ZW50cygpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHVwIGF1dG9jb21wbGV0ZSBkZXN0aW5hdGlvbiB3aWRnZXRzXG4gICAgICogQHNlZSBtb2R1bGU6QXV0b2NvbXBsZXRlXG4gICAgICovXG4gICAgaW5pdEF1dG9jb21wbGV0ZShmb3JtSGVscGVyKSB7XG4gICAgICAgIC8vIEluaXQgY2xhc3Mgd2l0aCBvcHRpb25zXG4gICAgICAgIHZhciBhdXRvY29tcGxldGUgPSBuZXcgQXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgIGxhbmc6IHRoaXMub3B0aW9ucy5sYW5nLFxuICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCBkaXNwbGF5IHZhbHVlIHRvIHRoZSBpbnB1dFxuICAgICAgICAgICAgICAgICQodGhpcykudmFsKHVpLml0ZW0uZGlzcGxheSk7XG4gICAgICAgICAgICAgICAgLy9zZXQgYWN0dWFsIHZhbHVlIGF0IHRoZSBib29raW5nIG9iamVjdFxuICAgICAgICAgICAgICAgIGZvcm1IZWxwZXIuc2V0Qm91bmRzKCQodGhpcykuZGF0YSgnaW5wdXQtZmllbGQnKSwgdWkuaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMub3B0aW9ucy53aWRnZXRQb3NpdGlvbixcbiAgICAgICAgICAgIGFwcGVuZFRvOiB0aGlzLiRib29raW5nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJ1aWxkXG4gICAgICAgIGF1dG9jb21wbGV0ZS5zdGFydCgoKSA9PiB7XG4gICAgICAgICAgICBhdXRvY29tcGxldGUucmVuZGVyKHRoaXMuJGJvb2tpbmcuZmluZCgnLmpzLWJvb2tpbmctYXV0b2NvbXBsZXRlJykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBzZWxlY3QgbWVudXMgd2l0aCBjdXN0b20gVUkgd2lkZ2V0c1xuICAgICAqL1xuICAgIHNldHVwU2VsZWN0TWVudXMoKSB7XG4gICAgICAgICQoJy5qcy1zZWxlY3RtZW51Jykuc2VsZWN0bWVudSh7XG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5vcHRpb25zLndpZGdldFBvc2l0aW9uXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmQgZXZlbnRzIHJlbGF0ZWQgdG8gYm9va2luZyBpbnRlcmFjdGlvblxuICAgICAqL1xuICAgIGJvb2tpbmdFdmVudHMoKSB7XG4gICAgICAgIHZhciAkYm9va2luZyA9IHRoaXMuJGJvb2tpbmc7XG4gICAgICAgIHZhciAkdG9nZ2xlID0gdGhpcy4kYm9va2luZy5maW5kKCcuanMtY29wYWFpci10b2dnbGUnKTtcblxuICAgICAgICAvLyBTaG93IGJvdHRvbSByb3cgd2hlbiBhbnkgaW5wdXQgZ2V0cyBmb2N1c1xuICAgICAgICAkYm9va2luZy5vbignZm9jdXMuY29wYWFpcicsICdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICRib29raW5nLmFkZENsYXNzKCdjb3BhYWlyLXdpZGdldC1vcGVuJyk7XG4gICAgICAgICAgICAkdG9nZ2xlLnJlbW92ZUNsYXNzKCdjb3BhYWlyLWhpZGRlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDbGlja2luZyBhbnl3aGVyZSBpbiB0aGUgZG9jdW1lbnQgaGlkZXMgYm90dG9tIHJvd1xuICAgICAgICAkYm9va2luZy5vbignY2xpY2suY29wYWFpcicsICcuanMtY29wYWFpci1jbG9zZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRib29raW5nLnJlbW92ZUNsYXNzKCdjb3BhYWlyLXdpZGdldC1vcGVuJyk7XG4gICAgICAgICAgICAkdG9nZ2xlLmFkZENsYXNzKCdjb3BhYWlyLWhpZGRlbicpO1xuICAgICAgICB9KTtcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb29raW5nO1xuIiwicmVxdWlyZSgnc3RvcmUtanMnKTtcbnZhciBUZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL2xpYi9UZW1wbGF0ZScpLFxuICAgIERhdGFNZW51ID0gcmVxdWlyZSgnLi4vbGliL0RhdGFNZW51JyksXG4gICAgaTE4biA9IHJlcXVpcmUoJy4uLy4uLy4uL2xhbmcvZGF0ZXBpY2tlci5qc29uJylcbjtcblxudmFyIGRlZmF1bHRzID0ge1xuICAgIGxhbmc6ICdlcycsXG4gICAgd2lkZ2V0UG9zaXRpb246IHsgbXk6ICdsZWZ0IGJvdHRvbScsIGF0OiAnbGVmdCB0b3AnIH0sXG5cbn07XG5cbmNsYXNzIFNpZ251cCB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gTG9hZCB0ZW1wbGF0ZVxuICAgICAgICBuZXcgVGVtcGxhdGUoJ3NpZ251cCcsIHtcbiAgICAgICAgICAgICdsYW5nJzogdGhpcy5vcHRpb25zLmxhbmcsXG4gICAgICAgICAgICBjYWxsYmFjazogKGh0bWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRmb3JtLmh0bWwoaHRtbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWdudXBFdmVudHMoKTtcbiAgICAgICAgICAgICAgICB2YXIgbGFuZyA9IHRoaXMub3B0aW9ucy5sYW5nO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kZm9ybS5maW5kKCcuanMtc2VsZWN0bWVudScpLmVhY2goIGZ1bmN0aW9uICgpe1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhTWVudSA9IG5ldyBEYXRhTWVudSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5nOiBsYW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICQodGhpcykuZGF0YSgnY29udGVudCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWxlY3RNZW51cygpO1xuXG4gICAgICAgICAgICAgICAgJCgnLmpzLXNpZ251cC1kYXRlJykuZGF0ZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbnRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VZZWFyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICdkZC9tbS95eScsXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNob3c6IGZ1bmN0aW9uKGlucHV0LCBpc250KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzbnQuZHBEaXYucG9zaXRpb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteTogJ2xlZnQgYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXQ6ICdsZWZ0IHRvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mOiBpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciByZWdpb25hbCA9IGkxOG5bdGhpcy5vcHRpb25zLmxhbmddLnJlZ2lvbmFsO1xuICAgICAgICAgICAgICAgICQuZGF0ZXBpY2tlci5yZWdpb25hbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgc2VsZWN0IG1lbnVzIHdpdGggY3VzdG9tIFVJIHdpZGdldHNcbiAgICAgKi9cbiAgICBzZXR1cFNlbGVjdE1lbnVzKCkge1xuICAgICAgICAkKCcuanMtc2VsZWN0bWVudScpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMub3B0aW9ucy53aWRnZXRQb3NpdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzaWdudXBFdmVudHMoKSB7XG4gICAgICAgIHZhciAkZm9ybSA9IHRoaXMuJGZvcm07XG4gICAgICAgIHZhciAkdG9nZ2xlID0gdGhpcy4kZm9ybS5maW5kKCcuanMtY29wYWFpci10b2dnbGUnKTtcblxuICAgICAgICAvLyBTaG93IGJvdHRvbSByb3cgd2hlbiBhbnkgaW5wdXQgZ2V0cyBmb2N1c1xuICAgICAgICAkZm9ybS5vbignZm9jdXMuY29wYWFpcicsICdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKCdjb3BhYWlyLXdpZGdldC1vcGVuJyk7XG4gICAgICAgICAgICAkdG9nZ2xlLnJlbW92ZUNsYXNzKCdjb3BhYWlyLWhpZGRlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkZm9ybS5vbignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0Rm9ybShlLnRhcmdldCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgJCgnLmpzLWNvdW50cnktc2VsZWN0b3InKS5zZWxlY3RtZW51KHtcbiAgICAgICAgICAgIGNoYW5nZTogKGUsIHVpKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvdW50cnkgPSB1aS5pdGVtLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIGRlc3RpbmF0aW9ucyA9IHN0b3JlLmdldCgnZGVzdGluYXRpb25zJyk7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gW107XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBkIGluIGRlc3RpbmF0aW9ucy52YWwpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb25zLnZhbFtkXS5jb3VudHJ5ID09IHRoaXMub3B0aW9ucy5jb3VudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5wdXNoKGRlc3RpbmF0aW9ucy52YWxbZF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkYXRhTWVudSA9IG5ldyBEYXRhTWVudSh7XG4gICAgICAgICAgICAgICAgICAgIGxhbmc6IHRoaXMub3B0aW9ucy5sYW5nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICQoJy5qcy1jaXR5LXNlbGVjdG9yJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuanMtY2l0eS1zZWxlY3RvcicpLnNlbGVjdG1lbnUoXCJyZWZyZXNoXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtY2l0eS1zZWxlY3RvcicpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgY2hhbmdlOiAoZSwgdWkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2l0eSA9IHVpLml0ZW0udmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgc3VibWl0Rm9ybSh0YXJnZXQpIHtcbiAgICAgICAgdmFyICRmb3JtID0gJCh0YXJnZXQpO1xuXG4gICAgICAgIHZhciBkYXRhID0gJGZvcm0uc2VyaWFsaXplT2JqZWN0KCk7XG4gICAgICAgIGRhdGEuZnVsbG5hbWUgPSBkYXRhLmZpcnN0X25hbWUgKyAnICcgKyBkYXRhLmxhc3RfbmFtZTtcbiAgICAgICAgZGF0YS5zb3VyY2UgPSB0aGlzLm9wdGlvbnMuc291cmNlO1xuICAgICAgICBkYXRhLmxhbmd1YWdlID0gdGhpcy5vcHRpb25zLmxhbmcudG9VcHBlckNhc2UoKTtcbiAgICAgICAgZGF0YS5jaXR5ID0gdGhpcy5vcHRpb25zLmNpdHk7XG4gICAgICAgIGRhdGEuY291bnRyeSA9IHRoaXMub3B0aW9ucy5jb3VudHJ5O1xuXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2ZsaWdodGNvbnRyb2wuaW8vYXBpL3NpZ251cC9hZGQnLFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgY29udGFpbmVyLmZhZGVPdXQoKTtcbiAgICAgICAgICAgIGlmKHR5cGVvZihnYSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZ2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJTdWJzY3JpcHRpb24gRm9ybVwiLCBcInN1YnNjcmliZWRcIiwgXCJVc2VyIHdhcyBzdWJzY3JpYmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWdudXA7XG4iXX0=
