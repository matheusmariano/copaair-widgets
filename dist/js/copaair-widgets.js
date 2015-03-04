(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

(function (factory) {
    "use strict";

    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["jquery"], factory);
    } else if (typeof exports !== "undefined") {
        // Node/CommonJS
        factory((typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null));
    } else {
        // Browser globals
        factory(jQuery);
    }
})(function ($) {
    "use strict";

    var Booking = require("./widgets/Booking"),
        Signup = require("./widgets/Signup");

    /**
     * Bind widgets to jQuery object prototype.
     *
     * @param  {Object} options Options passed to override defaults.
     * @return {Object}         Current object instance
     */
    $.fn.copaairBooking = function copaairBooking(options) {
        return this.each(function () {
            if (!$.data(this, "plugin_copaairBooking")) {
                $.data(this, "plugin_copaairBooking", new Booking(this, options));
            }
        });
    };

    $.fn.copaairSignup = function copaairSignup(options) {
        return this.each(function () {
            if (!$.data(this, "plugin_copaairSignup")) {
                $.data(this, "plugin_copaairSignup", new Signup(this, options));
            }
        });
    };
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./widgets/Booking":10,"./widgets/Signup":11}],2:[function(require,module,exports){
(function (global){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
"use strict";

/* Copyright (c) 2010-2013 Marcus Westin */
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
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    FlightControl = require("./FlightControl");

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
            lang: "es",
            minLength: 0 };

        this.options = $.extend({}, defaults, options);
    }

    _prototypeProperties(Autocomplete, null, {
        start: {

            /**
             * Get destinations from Flight Control API
             * @param  {Function} cb Callback when API call finishes
             *                       and destinations are fetched
             * @return {void}
             */

            value: function start(cb) {
                var _this = this;

                var flightControl = new FlightControl({ lang: this.options.lang });

                flightControl.fetch("destinations", function (destinations) {
                    // Format raw destinations to autocomplete structure
                    _this.options.source = _this.format(destinations.list);

                    if (typeof cb === "function") {
                        cb();
                    }
                });
            },
            writable: true,
            configurable: true
        },
        render: {

            /**
             * Render autocomplete widget
             * @param  {Object} element DOM element to attach widget to
             */

            value: function render(element) {
                var $this = $(element).hide(),
                    sourceClasses = $this.attr("class"),
                    sourceValue = $this.val(),
                    sourcePlaceholder = $this.attr("placeholder");

                var $input = $("<input />").val(sourceValue).attr("type", "text").attr("placeholder", sourcePlaceholder);

                // Add autocomplete functionality
                $input.autocomplete(this.options);

                // Open list on input focus
                $input.on("focus", function () {
                    var $this = $(this);

                    if ($this.val().length === 0) $this.autocomplete("search");
                });

                // Add styling
                $input.addClass(sourceClasses).addClass("ui-widget  ui-widget-content  ui-state-default");

                // Insert into DOM
                $input.insertAfter($this);

                // Overwrite autocomplete item rendering with custom markup
                $input.autocomplete("instance")._renderItem = function (ul, item) {
                    return $("<li>").append(item.label).appendTo(ul);
                };

                // Custom filtering function
                $.ui.autocomplete.filter = function autoCompleteFilter(array, term) {
                    var matcher = new RegExp("\\b" + $.ui.autocomplete.escapeRegex(term), "i");
                    return $.grep(array, function (value) {
                        return matcher.test(value.label || value.value || value);
                    });
                };

                return this;
            },
            writable: true,
            configurable: true
        },
        format: {

            /**
             * Formats destinations into the needed structure to be displayed
             * on the autocomplete menu widget.
             * @param  {Array} destinations Raw data returned from Flight Control
             * @return {Array}              Formatted destinations
             */

            value: function format(destinations) {
                var _this = this;

                var result = [];

                $.each(destinations, function (i, dest) {
                    var tempLabel = "<b>" + dest.name[_this.options.lang] + ", " + dest.country + "</b>\n                    <span class=\"code\"> | " + dest.id + "</span>",
                        tempValue = dest.id,
                        textValue = dest.name[_this.options.lang] + ", " + dest.id;

                    result.push({
                        label: tempLabel,
                        value: tempValue,
                        display: textValue
                    });
                });

                return result;
            },
            writable: true,
            configurable: true
        }
    });

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
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    i18n = require("../../../lang/datepicker.json"),
    defaults = {
    departureSelector: ".copaair-booking-datepicker-departure",
    returnSelector: ".copaair-booking-datepicker-return",
    dateRules: {
        today: new Date(),
        weekLater: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
    },
    lang: "es"
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

    _prototypeProperties(Datepicker, null, {
        render: {

            /**
             * Render date picker inside the booking form
             * setups the defaults dates and language
             */

            value: function render() {

                this.setDefaultDates();
                this.setLocale();
            },
            writable: true,
            configurable: true
        },
        setDefaultDates: {

            /**
             * Set defaults dates
             * this consist in set current date for departure
             * and one week later for return
             */

            value: function setDefaultDates() {

                var dateRules = this.options.dateRules,
                    $departureField = $(this.options.departureSelector),
                    $returnField = $(this.options.returnSelector);

                $departureField.datepicker({
                    minDate: new Date()
                });

                $returnField.datepicker({
                    minDate: new Date()
                });

                $departureField.datepicker("setDate", dateRules.today);
                $returnField.datepicker("setDate", dateRules.weekLater);
            },
            writable: true,
            configurable: true
        },
        setLocale: {

            /**
             * Configure datepicker depending on the
             * localization
             */

            value: function setLocale() {
                var regional = i18n[this.options.lang].regional;
                $.datepicker.setDefaults(regional);
            },
            writable: true,
            configurable: true
        }
    });

    return Datepicker;
})();

module.exports = Datepicker;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../../lang/datepicker.json":4}],8:[function(require,module,exports){
(function (global){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);
require("store-js");

var defaults = {
    lang: "es",
    api: {
        destinations: "https://flightcontrol.io/api/routes/destinations",
        countries: "https://flightcontrol.io/api/routes/countries",
        regions: "https://flightcontrol.io/api/routes/regions" },
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
            console.log("browser not supported or in private mode");
            this.options.storage = false;
        }
    }

    _prototypeProperties(FlightControl, null, {
        fetch: {

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

                if (this.options.storage && storeWidthExpiration.get(resourceName) && storeWidthExpiration.get(resourceName + ".count")) {
                    resourceValue.list = storeWidthExpiration.get(resourceName);
                    resourceValue.count = storeWidthExpiration.get(resourceName + ".count");

                    return cb(resourceValue);
                }

                $.getJSON(this.options.api[resourceName], function (data) {

                    _this.sortNames(data);

                    if (_this.options.storage) {
                        storeWidthExpiration.set(resourceName, data, _this.options.storageExpiration);
                        storeWidthExpiration.set(resourceName + ".count", data.length, _this.options.storageExpiration);
                    }
                    resourceValue.list = data;
                    resourceValue.count = data.length;

                    cb(resourceValue);
                });
            },
            writable: true,
            configurable: true
        },
        sortNames: {

            /**
             * Helper function to sort data
             * based on language
             * @param  {Object} data
             */

            value: function sortNames(data) {
                data.sort(function (a, b) {
                    if (a.name[lang] > b.name[lang]) return 1;
                    if (a.name[lang] < b.name[lang]) return -1;

                    return 0;
                });
            },
            writable: true,
            configurable: true
        }
    });

    return FlightControl;
})();

module.exports = FlightControl;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"store-js":2}],9:[function(require,module,exports){
(function (global){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    Handlebars = (typeof window !== "undefined" ? window.Handlebars : typeof global !== "undefined" ? global.Handlebars : null),
    i18n = {
    booking: require("../../../lang/booking.json"),
    signup: require("../../../lang/signup.json") },
    defaults = {
    lang: "es",
    src: "bower_components/copaair-widgets/templates",
    callback: function callback() {}
};

var Template = (function () {
    function Template(widget, options) {
        var _this = this;

        _classCallCheck(this, Template);

        this.options = $.extend({}, defaults, options);

        if (typeof Handlebars !== "undefined" && Handlebars !== null) {
            $.ajax({
                url: "" + this.options.src + "/" + widget + ".hbs",
                success: function (tpl) {
                    var html = _this.compile(widget, tpl);
                    _this.options.callback(html);
                }
            });
        } else {
            console.error("This plugin requires Handlebars.js");
        }
    }

    _prototypeProperties(Template, null, {
        compile: {
            value: function compile(widget, tpl) {
                var template = Handlebars.compile(tpl);
                var html = template(i18n[widget][this.options.lang]);
                return html;
            },
            writable: true,
            configurable: true
        }
    });

    return Template;
})();

module.exports = Template;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../../lang/booking.json":3,"../../../lang/signup.json":5}],10:[function(require,module,exports){
(function (global){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// Create the defaults
var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    Template = require("../lib/Template"),
    FlightControl = require("../lib/FlightControl"),
    Datepicker = require("../lib/Datepicker"),
    Autocomplete = require("../lib/Autocomplete"),
    defaults = {
    lang: "es",
    origin: "all",
    destination: "all",
    templatePath: "bower_components/copaair-widgets/templates/booking.hbs",
    languagePath: "bower_components/copaair-widgets/language/",
    formUrl: "https://bookings.copaair.com/CMGS/" + "AirLowFareSearchExternal.do?"
},
    copaApiUrls = {
    allDestinations: "https://copaapi.nbxapps.com/destinations/",
    countryDestinations: "https://copaapi.nbxapps.com/destinations/?country="
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

        new Template("booking", {
            lang: this.options.lang,
            callback: function (html) {
                _this.$booking.html(html);

                // When finished, build all the widgets
                _this.setupSelectMenus();

                // setup datepicker
                var datepicker = new Datepicker();
                datepicker.render();

                // Autocomplete widgets
                _this.initAutocomplete();

                //set form defualt values afected
                //by datepicker
                _this.setFormValues(datepicker);

                //datepicker events that modify
                //form values
                _this.datepickerFormEvents(datepicker);
            }
        });
    }

    _prototypeProperties(Booking, null, {
        initAutocomplete: {

            /**
             * Setup autocomplete destination widgets
             * @see module:Autocomplete
             */

            value: function initAutocomplete() {
                // Init class with options
                var autocomplete = new Autocomplete({
                    lang: this.options.lang,
                    select: function (e, ui) {
                        console.log(e.target, ui.item.display);
                        $(e.target).attr("value", ui.item.display);
                    },
                    // @todo Make this dynamic
                    position: {
                        my: "left bottom",
                        at: "left top"
                    }
                });

                // Build
                autocomplete.start(function () {
                    $(".js-booking-autocomplete").each(function () {
                        autocomplete.render(this);
                    });
                });
            },
            writable: true,
            configurable: true
        },
        setupSelectMenus: {

            /**
             * Replaces select menus with custom UI widgets
             */

            value: function setupSelectMenus() {
                $(".js-selectmenu").selectmenu();
                return this;
            },
            writable: true,
            configurable: true
        },
        fetchDestinations: {

            /**
             * Fetch and store Copa destinations from API
             * @param  {Function} cb Callback function when destinations are ready
             * @return {void}
             */

            value: function fetchDestinations(cb) {
                var _this = this;

                var url = copaApiUrls.allDestinations,
                    lang = this.options.lang;

                this.destinations = [];

                $.getJSON(url, function (destinations) {
                    // Sort destinations
                    destinations.sort(function (a, b) {
                        if (a.name[lang] > b.name[lang]) return 1;
                        if (a.name[lang] < b.name[lang]) return -1;

                        return 0;
                    });

                    var destinationsData = [];

                    // Organize data result
                    $.each(destinations, function (i, dest) {
                        var tempLabel = "<b>" + dest.name[lang] + ", " + dest.country + "</b><span class=\"code\"> | " + dest.id + "</span>";
                        var tempValue = dest.id;
                        var textValue = dest.name[lang] + ", " + dest.id;

                        destinationsData.push({
                            label: tempLabel,
                            value: tempValue,
                            display: textValue
                        });
                    });

                    // Store result
                    _this.destinations = destinationsData;

                    // Callback
                    if (typeof cb === "function") {
                        cb();
                    }
                });

                return this;
            },
            writable: true,
            configurable: true
        },
        bookingEvents: {

            /**
             * Bind events related to booking interaction
             */

            value: function bookingEvents() {
                var $form = $(".copaair-booking");
                // Load form submition events
                this.submitForm($form);
            },
            writable: true,
            configurable: true
        },
        setFormValues: {

            /**
             * Since some defaults values are set on the datepickers
             * the form have some hidden inputs that use this values
             */

            value: function setFormValues(datepicker) {

                var $form = this.$booking,

                // get current datepickers dates
                departureDate = $(datepicker.options.departureSelector).datepicker("getDate"),
                    returnDate = $(datepicker.options.returnSelector).datepicker("getDate");

                // Lest migrate date pickers date to the hidden
                // date form fields. This fields are required by
                // Copa Booking

                $form.find("input[name=\"inboundOption.departureDay\"]").attr("value", returnDate.getUTCDate());
                $form.find("input[name=\"inboundOption.departureMonth\"]").attr("value", returnDate.getMonth() + 1);
                $form.find("input[name=\"inboundOption.departureYear\"]").attr("value", returnDate.getFullYear());

                // set outboundOption departure dates
                $form.find("input[name=\"outboundOption.departureDay\"]").attr("value", departureDate.getUTCDate());
                $form.find("input[name=\"outboundOption.departureMonth\"]").attr("value", departureDate.getMonth() + 1);
                $form.find("input[name=\"outboundOption.departureYear\"]").attr("value", departureDate.getFullYear());
            },
            writable: true,
            configurable: true
        },
        datepickerFormEvents: {
            value: function datepickerFormEvents(datepicker) {

                var $departureField = $(datepicker.options.departureSelector),
                    $returnField = $(datepicker.options.returnSelector),
                    $form = this.$booking;

                var onSelectOutbound = function onSelectOutbound(dateText, inst) {
                    var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

                    //this sets the inbound date picker to a week later of current selection
                    var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
                    $returnField.datepicker("setDate", weeklater);

                    $form.find("input[name=\"inboundOption.departureDay\"]").attr("value", weeklater.getUTCDate());
                    $form.find("input[name=\"inboundOption.departureMonth\"]").attr("value", weeklater.getMonth() + 1);
                    $form.find("input[name=\"inboundOption.departureYear\"]").attr("value", weeklater.getFullYear());

                    //this helps that the user doesnt travel back in time
                    $returnField.datepicker("option", "minDate", date);
                    $form.find("input[name=\"outboundOption.departureDay\"]").attr("value", inst.selectedDay);
                    $form.find("input[name=\"outboundOption.departureMonth\"]").attr("value", inst.selectedMonth + 1);
                    $form.find("input[name=\"outboundOption.departureYear\"]").attr("value", inst.selectedYear);
                };

                var onSelectInbound = function onSelectInbound(dateText, inst) {
                    $form.find("input[name=\"inboundOption.departureDay\"]").attr("value", inst.selectedDay);
                    $form.find("input[name=\"inboundOption.departureMonth\"]").attr("value", inst.selectedMonth + 1);
                    $form.find("input[name=\"inboundOption.departureYear\"]").attr("value", inst.selectedYear);
                };

                $departureField.datepicker("option", "onSelect", onSelectOutbound);
                $returnField.datepicker("option", "onSelect", onSelectInbound);
            },
            writable: true,
            configurable: true
        },
        submitForm: {

            /**
             * submitForm
             * captures form submit event and process it
             */

            value: function submitForm(form) {
                var _this = this;

                form.on("submit", function (event) {
                    event.preventDefault();
                    var httpQuery = $(this).serialize();
                    var url = _this.options.formUrl;

                    if (_this.validationError(form)) {
                        console.log("error in the form");
                    } else {
                        var searchWindow = window.open(url + httpQuery, "_blank");
                        searchWindow.focus();
                    }
                });
            },
            writable: true,
            configurable: true
        }
    });

    return Booking;
})();

module.exports = Booking;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../lib/Autocomplete":6,"../lib/Datepicker":7,"../lib/FlightControl":8,"../lib/Template":9}],11:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Template = require("../lib/Template");

var Signup = function Signup(element, options) {
    var _this = this;

    _classCallCheck(this, Signup);

    this.$form = $(element);

    var defaults = {
        lang: "es"
    };

    this.options = $.extend({}, defaults, options);

    // Load template
    new Template("signup", {
        lang: this.options.lang,
        callback: function (html) {
            _this.$form.html(html);
        }
    });
};

module.exports = Signup;

},{"../lib/Template":9}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2luZGV4LmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGEvY29wYWFpci13aWRnZXRzL2Jvd2VyX2NvbXBvbmVudHMvc3RvcmUuanMvc3RvcmUubWluLmpzIiwibGFuZy9ib29raW5nLmpzb24iLCJsYW5nL2RhdGVwaWNrZXIuanNvbiIsImxhbmcvc2lnbnVwLmpzb24iLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9BdXRvY29tcGxldGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9EYXRlcGlja2VyLmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGEvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvRmxpZ2h0Q29udHJvbC5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhL2NvcGFhaXItd2lkZ2V0cy9zcmMvanMvbGliL1RlbXBsYXRlLmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGEvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL0Jvb2tpbmcuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL3dpZGdldHMvU2lnbnVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUEsQUFBQyxDQUFBLFVBQVUsT0FBTyxFQUFFO0FBQ2hCLGdCQUFZLENBQUM7O0FBRWIsUUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRTs7QUFFNUMsY0FBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDL0IsTUFBTSxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTs7QUFFdkMsZUFBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQzlCLE1BQU07O0FBRUgsZUFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ25CO0NBQ0osQ0FBQSxDQUFDLFVBQVMsQ0FBQyxFQUFFO0FBQ1YsZ0JBQVksQ0FBQzs7QUFFYixRQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUM7UUFDdEMsTUFBTSxHQUFJLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUN4Qzs7Ozs7Ozs7QUFRRCxLQUFDLENBQUMsRUFBRSxDQUFDLGNBQWMsR0FBRyxTQUFTLGNBQWMsQ0FBQyxPQUFPLEVBQUU7QUFDbkQsZUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVc7QUFDeEIsZ0JBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxFQUFFO0FBQ3hDLGlCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSx1QkFBdUIsRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNyRTtTQUNKLENBQUMsQ0FBQztLQUNOLENBQUM7O0FBRUYsS0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEdBQUcsU0FBUyxhQUFhLENBQUMsT0FBTyxFQUFFO0FBQ2pELGVBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFXO0FBQ3hCLGdCQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLENBQUMsRUFBRTtBQUN2QyxpQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDbkU7U0FDSixDQUFDLENBQUM7S0FDTixDQUFDO0NBQ0wsQ0FBQyxDQUFFOzs7Ozs7Ozs7QUN4Q0osQ0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFdBQVMsQ0FBQyxHQUFFO0FBQUMsUUFBRztBQUFDLGFBQU8sQ0FBQyxJQUFJLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FBQyxDQUFBLE9BQU0sQ0FBQyxFQUFDO0FBQUMsYUFBTSxDQUFDLENBQUMsQ0FBQTtLQUFDO0dBQUMsSUFBSSxDQUFDLEdBQUMsRUFBRTtNQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsUUFBUTtNQUFDLENBQUMsR0FBQyxjQUFjO01BQUMsQ0FBQyxHQUFDLFFBQVE7TUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUcsU0FBUyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLFVBQVMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLFlBQVUsRUFBRSxFQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLEtBQUMsSUFBRSxJQUFJLEtBQUcsQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFBLEFBQUMsRUFBQyxDQUFDLElBQUUsSUFBSSxLQUFHLENBQUMsR0FBQyxFQUFFLENBQUEsQUFBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLFlBQVUsRUFBRSxFQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxRQUFHLE9BQU8sQ0FBQyxJQUFFLFFBQVEsRUFBQyxPQUFPLFNBQVMsQ0FBQyxJQUFHO0FBQUMsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLGFBQU8sQ0FBQyxJQUFFLFNBQVMsQ0FBQTtLQUFDO0dBQUMsQ0FBQyxJQUFHLENBQUMsRUFBRSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxXQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxRQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLEtBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsWUFBVTtBQUFDLEtBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxZQUFVO0FBQUMsUUFBSSxDQUFDLEdBQUMsRUFBRSxDQUFDLFFBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxPQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsU0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7QUFBQyxVQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUM7R0FBQyxDQUFDLEtBQUssSUFBRyxDQUFDLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBQztRQUFLLENBQUMsRUFBQyxDQUFDO1FBQXlPLENBQUMsRUFBdU0sQ0FBQzs7O1VBQWtFLENBQUMsR0FBVixVQUFXLENBQUMsRUFBQztBQUFDLGVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQTtPQUFDOztBQUF4aUIsVUFBRztBQUFDLFNBQUMsR0FBQyxJQUFJLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLHNCQUFzQixHQUFDLENBQUMsR0FBQyx5Q0FBdUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO09BQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLFNBQUMsR0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO09BQUM7QUFBSSxPQUFDLEdBQUMsV0FBUyxDQUFDLEVBQUM7QUFBQyxlQUFPLFlBQVU7QUFBQyxjQUFJLENBQUMsR0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxRQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBLENBQUE7U0FBQyxDQUFBO09BQUM7O0FBQUMsT0FBQyxHQUFDLElBQUksTUFBTSxDQUFDLHVDQUF1QyxFQUFDLEdBQUcsQ0FBQztBQUErRCxPQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsZ0JBQU8sQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQSxDQUFBO09BQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFHLFNBQVMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO09BQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLFNBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsWUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsWUFBSSxDQUFDLEdBQUMsRUFBRSxDQUFDLFFBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO1NBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBO09BQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxZQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7T0FBQyxDQUFDLENBQUE7O0dBQUMsSUFBRztBQUFDLFFBQUksQ0FBQyxHQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsS0FBRyxDQUFDLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLEtBQUMsQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxDQUFDLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBQyxPQUFPLE1BQU0sSUFBRSxXQUFXLElBQUUsTUFBTSxDQUFDLE9BQU8sSUFBRSxJQUFJLENBQUMsTUFBTSxLQUFHLE1BQU0sR0FBQyxNQUFNLENBQUMsT0FBTyxHQUFDLENBQUMsR0FBQyxPQUFPLE1BQU0sSUFBRSxVQUFVLElBQUUsTUFBTSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUE7Q0FBQyxDQUFBLENBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQTs7Ozs7Ozs7OztBQ0RuK0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNuQ0EsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNyQixhQUFhLEdB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QUFDOzs7Ozs7Ozs7QUM5UHpCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOztJQUVwQyxNQUFNLEdBRUcsU0FGVCxNQUFNLENBRUksT0FBTyxFQUFFLE9BQU87OzswQkFGMUIsTUFBTTs7QUFHSixRQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFeEIsUUFBSSxRQUFRLEdBQUc7QUFDWCxZQUFJLEVBQUUsSUFBSTtLQUNiLENBQUM7O0FBRUYsUUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7OztBQUcvQyxRQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7QUFDbkIsY0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7QUFDekIsZ0JBQVEsRUFBRSxVQUFDLElBQUksRUFBSztBQUNoQixrQkFBSyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO0tBQ0osQ0FBQyxDQUFDO0NBQ047O0FBSUwsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBOb2RlL0NvbW1vbkpTXG4gICAgICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxufShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIEJvb2tpbmcgPSByZXF1aXJlKCcuL3dpZGdldHMvQm9va2luZycpLFxuICAgICAgICBTaWdudXAgID0gcmVxdWlyZSgnLi93aWRnZXRzL1NpZ251cCcpXG4gICAgO1xuXG4gICAgLyoqXG4gICAgICogQmluZCB3aWRnZXRzIHRvIGpRdWVyeSBvYmplY3QgcHJvdG90eXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIG92ZXJyaWRlIGRlZmF1bHRzLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBDdXJyZW50IG9iamVjdCBpbnN0YW5jZVxuICAgICAqL1xuICAgICQuZm4uY29wYWFpckJvb2tpbmcgPSBmdW5jdGlvbiBjb3BhYWlyQm9va2luZyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoISQuZGF0YSh0aGlzLCAncGx1Z2luX2NvcGFhaXJCb29raW5nJykpIHtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyQm9va2luZycsIG5ldyBCb29raW5nKHRoaXMsIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQuZm4uY29wYWFpclNpZ251cCA9IGZ1bmN0aW9uIGNvcGFhaXJTaWdudXAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyU2lnbnVwJykpIHtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyU2lnbnVwJywgbmV3IFNpZ251cCh0aGlzLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59KSk7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxMyBNYXJjdXMgV2VzdGluICovXG4oZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbygpe3RyeXtyZXR1cm4gciBpbiBlJiZlW3JdfWNhdGNoKHQpe3JldHVybiExfX12YXIgdD17fSxuPWUuZG9jdW1lbnQscj1cImxvY2FsU3RvcmFnZVwiLGk9XCJzY3JpcHRcIixzO3QuZGlzYWJsZWQ9ITEsdC52ZXJzaW9uPVwiMS4zLjE3XCIsdC5zZXQ9ZnVuY3Rpb24oZSx0KXt9LHQuZ2V0PWZ1bmN0aW9uKGUsdCl7fSx0Lmhhcz1mdW5jdGlvbihlKXtyZXR1cm4gdC5nZXQoZSkhPT11bmRlZmluZWR9LHQucmVtb3ZlPWZ1bmN0aW9uKGUpe30sdC5jbGVhcj1mdW5jdGlvbigpe30sdC50cmFuc2FjdD1mdW5jdGlvbihlLG4scil7cj09bnVsbCYmKHI9bixuPW51bGwpLG49PW51bGwmJihuPXt9KTt2YXIgaT10LmdldChlLG4pO3IoaSksdC5zZXQoZSxpKX0sdC5nZXRBbGw9ZnVuY3Rpb24oKXt9LHQuZm9yRWFjaD1mdW5jdGlvbigpe30sdC5zZXJpYWxpemU9ZnVuY3Rpb24oZSl7cmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpfSx0LmRlc2VyaWFsaXplPWZ1bmN0aW9uKGUpe2lmKHR5cGVvZiBlIT1cInN0cmluZ1wiKXJldHVybiB1bmRlZmluZWQ7dHJ5e3JldHVybiBKU09OLnBhcnNlKGUpfWNhdGNoKHQpe3JldHVybiBlfHx1bmRlZmluZWR9fTtpZihvKCkpcz1lW3JdLHQuc2V0PWZ1bmN0aW9uKGUsbil7cmV0dXJuIG49PT11bmRlZmluZWQ/dC5yZW1vdmUoZSk6KHMuc2V0SXRlbShlLHQuc2VyaWFsaXplKG4pKSxuKX0sdC5nZXQ9ZnVuY3Rpb24oZSxuKXt2YXIgcj10LmRlc2VyaWFsaXplKHMuZ2V0SXRlbShlKSk7cmV0dXJuIHI9PT11bmRlZmluZWQ/bjpyfSx0LnJlbW92ZT1mdW5jdGlvbihlKXtzLnJlbW92ZUl0ZW0oZSl9LHQuY2xlYXI9ZnVuY3Rpb24oKXtzLmNsZWFyKCl9LHQuZ2V0QWxsPWZ1bmN0aW9uKCl7dmFyIGU9e307cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0LG4pe2VbdF09bn0pLGV9LHQuZm9yRWFjaD1mdW5jdGlvbihlKXtmb3IodmFyIG49MDtuPHMubGVuZ3RoO24rKyl7dmFyIHI9cy5rZXkobik7ZShyLHQuZ2V0KHIpKX19O2Vsc2UgaWYobi5kb2N1bWVudEVsZW1lbnQuYWRkQmVoYXZpb3Ipe3ZhciB1LGE7dHJ5e2E9bmV3IEFjdGl2ZVhPYmplY3QoXCJodG1sZmlsZVwiKSxhLm9wZW4oKSxhLndyaXRlKFwiPFwiK2krXCI+ZG9jdW1lbnQudz13aW5kb3c8L1wiK2krJz48aWZyYW1lIHNyYz1cIi9mYXZpY29uLmljb1wiPjwvaWZyYW1lPicpLGEuY2xvc2UoKSx1PWEudy5mcmFtZXNbMF0uZG9jdW1lbnQscz11LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIil9Y2F0Y2goZil7cz1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdT1uLmJvZHl9dmFyIGw9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApO24udW5zaGlmdChzKSx1LmFwcGVuZENoaWxkKHMpLHMuYWRkQmVoYXZpb3IoXCIjZGVmYXVsdCN1c2VyRGF0YVwiKSxzLmxvYWQocik7dmFyIGk9ZS5hcHBseSh0LG4pO3JldHVybiB1LnJlbW92ZUNoaWxkKHMpLGl9fSxjPW5ldyBSZWdFeHAoXCJbIVxcXCIjJCUmJygpKissL1xcXFxcXFxcOjs8PT4/QFtcXFxcXV5ge3x9fl1cIixcImdcIik7ZnVuY3Rpb24gaChlKXtyZXR1cm4gZS5yZXBsYWNlKC9eZC8sXCJfX18kJlwiKS5yZXBsYWNlKGMsXCJfX19cIil9dC5zZXQ9bChmdW5jdGlvbihlLG4saSl7cmV0dXJuIG49aChuKSxpPT09dW5kZWZpbmVkP3QucmVtb3ZlKG4pOihlLnNldEF0dHJpYnV0ZShuLHQuc2VyaWFsaXplKGkpKSxlLnNhdmUociksaSl9KSx0LmdldD1sKGZ1bmN0aW9uKGUsbixyKXtuPWgobik7dmFyIGk9dC5kZXNlcmlhbGl6ZShlLmdldEF0dHJpYnV0ZShuKSk7cmV0dXJuIGk9PT11bmRlZmluZWQ/cjppfSksdC5yZW1vdmU9bChmdW5jdGlvbihlLHQpe3Q9aCh0KSxlLnJlbW92ZUF0dHJpYnV0ZSh0KSxlLnNhdmUocil9KSx0LmNsZWFyPWwoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5YTUxEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0cmlidXRlcztlLmxvYWQocik7Zm9yKHZhciBuPTAsaTtpPXRbbl07bisrKWUucmVtb3ZlQXR0cmlidXRlKGkubmFtZSk7ZS5zYXZlKHIpfSksdC5nZXRBbGw9ZnVuY3Rpb24oZSl7dmFyIG49e307cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbihlLHQpe25bZV09dH0pLG59LHQuZm9yRWFjaD1sKGZ1bmN0aW9uKGUsbil7dmFyIHI9ZS5YTUxEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0cmlidXRlcztmb3IodmFyIGk9MCxzO3M9cltpXTsrK2kpbihzLm5hbWUsdC5kZXNlcmlhbGl6ZShlLmdldEF0dHJpYnV0ZShzLm5hbWUpKSl9KX10cnl7dmFyIHA9XCJfX3N0b3JlanNfX1wiO3Quc2V0KHAscCksdC5nZXQocCkhPXAmJih0LmRpc2FibGVkPSEwKSx0LnJlbW92ZShwKX1jYXRjaChmKXt0LmRpc2FibGVkPSEwfXQuZW5hYmxlZD0hdC5kaXNhYmxlZCx0eXBlb2YgbW9kdWxlIT1cInVuZGVmaW5lZFwiJiZtb2R1bGUuZXhwb3J0cyYmdGhpcy5tb2R1bGUhPT1tb2R1bGU/bW9kdWxlLmV4cG9ydHM9dDp0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOmUuc3RvcmU9dH0pKEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSkiLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcIm9yaWdpblwiOiBcIkRlc2RlXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uXCI6IFwiSGFjaWFcIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiU2FsaWRhXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJlZ3Jlc29cIixcbiAgICAgICAgICAgIFwiZWNvbm9taWNcIjogXCJDbGFzZSBFY29uw7NtaWNhXCIsXG4gICAgICAgICAgICBcImJ1c2luZXNzXCI6IFwiQ2xhc2UgRWplY3V0aXZhXCIsXG4gICAgICAgICAgICBcInN1Ym1pdFwiOiBcIlZlciBWdWVsb3NcIixcbiAgICAgICAgICAgIFwiYWR1bHRzXCI6IFwiQWR1bHRvc1wiLFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBcIk5pw7Fvc1wiLFxuICAgICAgICAgICAgXCJpbmZhbnRzXCIgOiBcIkluZmFudGVzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlc1wiOiB7XG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZW5cIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJvcmlnaW5cIjogXCJGcm9tXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uXCI6IFwiVG9cIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiRGVwYXJ0dXJlXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJldHVyblwiLFxuICAgICAgICAgICAgXCJlY29ub21pY1wiOiBcIkJ1c2luZXNzIENsYXNzXCIsXG4gICAgICAgICAgICBcImJ1c2luZXNzXCI6IFwiRWNvbm9teSBDbGFzc1wiLFxuICAgICAgICAgICAgXCJzdWJtaXRcIjogXCJGaW5kIGZsaWdodHNcIixcbiAgICAgICAgICAgIFwiYWR1bHRzXCI6IFwiQWR1bHRzXCIsXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IFwiQ2hpbGRyZW5cIixcbiAgICAgICAgICAgIFwiaW5mYW50c1wiIDogXCJJbmZhbnRzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlc1wiOiB7XG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiOiBcIlBsZWFzZSBjb21wbGV0ZSBhbGwgdGhlIC4uLlwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBsZWFzZSBjb21wbGV0ZSBhbGwgdGhlIC4uLlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicHRcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJvcmlnaW5cIjogXCJEZVwiLFxuICAgICAgICAgICAgXCJkZXN0aW5hdGlvblwiOiBcIlBhcmFcIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiU2HDrWRhXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJlZ3Jlc3NvXCIsXG4gICAgICAgICAgICBcImVjb25vbWljXCI6IFwiQ2xhc3NlIGVjb27DtG1pY2FcIixcbiAgICAgICAgICAgIFwiYnVzaW5lc3NcIjogXCJDbGFzc2UgRXhlY3V0aXZhXCIsXG4gICAgICAgICAgICBcInN1Ym1pdFwiOiBcIkJ1c2NhciB2b29zXCIsXG4gICAgICAgICAgICBcImFkdWx0c1wiOiBcIkFkdWx0b3NcIixcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogXCJDcmlhbsOnYXNcIixcbiAgICAgICAgICAgIFwiaW5mYW50c1wiIDogXCJCZWLDqnNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1lc3NhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibm90aWZpY2F0aW9uXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJyZWdpb25hbFwiOiB7XG4gICAgICAgICAgICBcImNsb3NlVGV4dFwiOiBcIkNlcnJhclwiLFxuICAgICAgICAgICAgXCJwcmV2VGV4dFwiOiBcIiYjeDNDO0FudFwiLFxuICAgICAgICAgICAgXCJuZXh0VGV4dFwiOiBcIlNpZyYjeDNFO1wiLFxuICAgICAgICAgICAgXCJjdXJyZW50VGV4dFwiOiBcIkhveVwiLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzXCI6IFtcImVuZXJvXCIsXCJmZWJyZXJvXCIsXCJtYXJ6b1wiLFwiYWJyaWxcIixcIm1heW9cIixcImp1bmlvXCIsXG4gICAgICAgICAgICBcImp1bGlvXCIsXCJhZ29zdG9cIixcInNlcHRpZW1icmVcIixcIm9jdHVicmVcIixcIm5vdmllbWJyZVwiLFwiZGljaWVtYnJlXCJdLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzU2hvcnRcIjogW1wiZW5lXCIsXCJmZWJcIixcIm1hclwiLFwiYWJyXCIsXCJtYXlcIixcImp1bicsJ2p1bFwiLFwiYWdvXCIsXCJzZXBcIixcIm9jdFwiLFwibm92XCIsXCJkaWNcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzXCI6IFtcImRvbWluZ29cIixcImx1bmVzXCIsXCJtYXJ0ZXNcIixcIm1pw6lyY29sZXMnLCdqdWV2ZXNcIixcInZpZXJuZXNcIixcInPDoWJhZG9cIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzU2hvcnRcIjogW1wiZG9tXCIsXCJsdW5cIixcIm1hclwiLFwibWnDqVwiLFwianV2XCIsXCJ2aWVcIixcInPDoWJcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzTWluXCI6IFtcIkRcIixcIkxcIixcIk1cIixcIlhcIixcIkpcIixcIlZcIixcIlNcIl0sXG4gICAgICAgICAgICBcIndlZWtIZWFkZXJcIjogXCJTbVwiLFxuICAgICAgICAgICAgXCJkYXRlRm9ybWF0XCI6IFwiZGQvbW0veXlcIixcbiAgICAgICAgICAgIFwiZmlyc3REYXlcIjogMSxcbiAgICAgICAgICAgIFwiaXNSVExcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNob3dNb250aEFmdGVyWWVhclwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwieWVhclN1ZmZpeFwiOiBcIlwiXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgXCJlblwiOiB7XG4gICAgICAgIFwicmVnaW9uYWxcIiA6IHt9XG4gICAgfSxcbiAgICBcInB0XCI6IHtcbiAgICAgICAgXCJyZWdpb25hbFwiIDoge1xuICAgICAgICAgICAgXCJjbG9zZVRleHRcIjogXCJGZWNoYXJcIixcbiAgICAgICAgICAgIFwicHJldlRleHRcIjogXCImI3gzQztBbnRlcmlvclwiLFxuICAgICAgICAgICAgXCJuZXh0VGV4dFwiOiBcIlByw7N4aW1vJiN4M0U7XCIsXG4gICAgICAgICAgICBcImN1cnJlbnRUZXh0XCI6IFwiSG9qZVwiLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzXCI6IFtcIkphbmVpcm9cIixcIkZldmVyZWlyb1wiLFwiTWFyw6dvXCIsXCJBYnJpbFwiLFwiTWFpb1wiLFwiSnVuaG9cIixcIkp1bGhvXCIsXCJBZ29zdG9cIixcIlNldGVtYnJvXCIsXCJPdXR1YnJvXCIsXCJOb3ZlbWJyb1wiLFwiRGV6ZW1icm9cIl0sXG4gICAgICAgICAgICBcIm1vbnRoTmFtZXNTaG9ydFwiOiBbXCJKYW5cIixcIkZldlwiLFwiTWFyXCIsXCJBYnJcIixcIk1haVwiLFwiSnVuXCIsXCJKdWxcIixcIkFnb1wiLFwiU2V0XCIsXCJPdXRcIixcIk5vdlwiLFwiRGV6XCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc1wiOiBbXCJEb21pbmdvXCIsXCJTZWd1bmRhLWZlaXJhXCIsXCJUZXLDp2EtZmVpcmFcIixcIlF1YXJ0YS1mZWlyYScsJ1F1aW50YS1mZWlyYVwiLFwiU2V4dGEtZmVpcmFcIixcIlPDoWJhZG9cIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzU2hvcnRcIjogW1wiRG9tXCIsXCJTZWdcIixcIlRlclwiLFwiUXVhXCIsXCJRdWlcIixcIlNleFwiLFwiU8OhYlwiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNNaW5cIjogW1wiRG9tXCIsXCJTZWdcIixcIlRlclwiLFwiUXVhXCIsXCJRdWlcIixcIlNleFwiLFwiU8OhYlwiXSxcbiAgICAgICAgICAgIFwid2Vla0hlYWRlclwiOiBcIlNtXCIsXG4gICAgICAgICAgICBcImRhdGVGb3JtYXRcIjogXCJkZC9tbS95eVwiLFxuICAgICAgICAgICAgXCJmaXJzdERheVwiOiAwLFxuICAgICAgICAgICAgXCJpc1JUTFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2hvd01vbnRoQWZ0ZXJZZWFyXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ5ZWFyU3VmZml4XCI6IFwiXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwiZm5hbWVcIjogXCJOb21icmVcIixcbiAgICAgICAgICAgIFwibG5hbWVcIjogXCJBcGVsbGlkb1wiLFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIkVtYWlsXCIsXG4gICAgICAgICAgICBcImNvdW50cnlcIjogXCJQYcOtc1wiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiQ2l1ZGFkXCIsXG4gICAgICAgICAgICBcInBob25lXCI6IFwiTcOzdmlsXCIsXG4gICAgICAgICAgICBcInN1YnNjcmliZVwiOiBcIlN1YnNjcmliaXJzZVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZW5cIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJmbmFtZVwiOiBcIk5hbWVcIixcbiAgICAgICAgICAgIFwibG5hbWVcIjogXCJMYXN0IE5hbWVcIixcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJFbWFpbFwiLFxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiQ291bnRyeVwiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiQ2l0eVwiLFxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIk1vYmlsZVwiLFxuICAgICAgICAgICAgXCJzdWJzY3JpYmVcIjogXCJTdWJzY3JpYmVcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInB0XCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwiZm5hbWVcIjogXCJOb21lXCIsXG4gICAgICAgICAgICBcImxuYW1lXCI6IFwiU29icmVub21lXCIsXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiRS1tYWlsXCIsXG4gICAgICAgICAgICBcImNvdW50cnlcIjogXCJQYcOtc1wiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiQ2lkYWRlXCIsXG4gICAgICAgICAgICBcInBob25lXCI6IFwiQ2VsdWxhclwiLFxuICAgICAgICAgICAgXCJzdWJzY3JpYmVcIjogXCJJbnNjcmV2ZXItc2VcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBGbGlnaHRDb250cm9sID0gcmVxdWlyZSgnLi9GbGlnaHRDb250cm9sJylcbjtcblxuLyoqXG4gKiBBdXRvY29tcGxldGUgd2lkZ2V0IHdpdGggbGlzdCBvZiBDb3BhJ3MgZGVzdGluYXRpb25zXG4gKiBmb3IgYmV0dGVyIHVzYWJpbGl0eSB0aGFuIGEgbmF0aXZlIHNlbGVjdCBtZW51LlxuICogQGNsYXNzXG4gKi9cbmNsYXNzIEF1dG9jb21wbGV0ZVxue1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIEN1c3RvbSBvcHRpb25zIGZvciB0aGlzIHdpZGdldCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgICAgIG1pbkxlbmd0aDogMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBkZXN0aW5hdGlvbnMgZnJvbSBGbGlnaHQgQ29udHJvbCBBUElcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2sgd2hlbiBBUEkgY2FsbCBmaW5pc2hlc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICBhbmQgZGVzdGluYXRpb25zIGFyZSBmZXRjaGVkXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzdGFydChjYikge1xuICAgICAgICB2YXIgZmxpZ2h0Q29udHJvbCA9IG5ldyBGbGlnaHRDb250cm9sKHsgbGFuZzogdGhpcy5vcHRpb25zLmxhbmcgfSk7XG5cbiAgICAgICAgZmxpZ2h0Q29udHJvbC5mZXRjaCgnZGVzdGluYXRpb25zJywgKGRlc3RpbmF0aW9ucykgPT4ge1xuICAgICAgICAgICAgLy8gRm9ybWF0IHJhdyBkZXN0aW5hdGlvbnMgdG8gYXV0b2NvbXBsZXRlIHN0cnVjdHVyZVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNvdXJjZSA9IHRoaXMuZm9ybWF0KGRlc3RpbmF0aW9ucy5saXN0KTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBhdXRvY29tcGxldGUgd2lkZ2V0XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50IERPTSBlbGVtZW50IHRvIGF0dGFjaCB3aWRnZXQgdG9cbiAgICAgKi9cbiAgICByZW5kZXIoZWxlbWVudCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKGVsZW1lbnQpLmhpZGUoKSxcbiAgICAgICAgICAgIHNvdXJjZUNsYXNzZXMgPSAkdGhpcy5hdHRyKCdjbGFzcycpLFxuICAgICAgICAgICAgc291cmNlVmFsdWUgPSAkdGhpcy52YWwoKSxcbiAgICAgICAgICAgIHNvdXJjZVBsYWNlaG9sZGVyID0gJHRoaXMuYXR0cigncGxhY2Vob2xkZXInKVxuICAgICAgICA7XG5cbiAgICAgICAgdmFyICRpbnB1dCA9ICQoJzxpbnB1dCAvPicpXG4gICAgICAgICAgICAudmFsKHNvdXJjZVZhbHVlKVxuICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigncGxhY2Vob2xkZXInLCBzb3VyY2VQbGFjZWhvbGRlcilcbiAgICAgICAgO1xuXG4gICAgICAgIC8vIEFkZCBhdXRvY29tcGxldGUgZnVuY3Rpb25hbGl0eVxuICAgICAgICAkaW5wdXQuYXV0b2NvbXBsZXRlKHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgLy8gT3BlbiBsaXN0IG9uIGlucHV0IGZvY3VzXG4gICAgICAgICRpbnB1dC5vbignZm9jdXMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGlmICgkdGhpcy52YWwoKS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgJHRoaXMuYXV0b2NvbXBsZXRlKCdzZWFyY2gnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIHN0eWxpbmdcbiAgICAgICAgJGlucHV0XG4gICAgICAgICAgICAuYWRkQ2xhc3Moc291cmNlQ2xhc3NlcylcbiAgICAgICAgICAgIC5hZGRDbGFzcygndWktd2lkZ2V0ICB1aS13aWRnZXQtY29udGVudCAgdWktc3RhdGUtZGVmYXVsdCcpO1xuXG4gICAgICAgIC8vIEluc2VydCBpbnRvIERPTVxuICAgICAgICAkaW5wdXQuaW5zZXJ0QWZ0ZXIoJHRoaXMpO1xuXG4gICAgICAgIC8vIE92ZXJ3cml0ZSBhdXRvY29tcGxldGUgaXRlbSByZW5kZXJpbmcgd2l0aCBjdXN0b20gbWFya3VwXG4gICAgICAgICRpbnB1dC5hdXRvY29tcGxldGUoJ2luc3RhbmNlJykuX3JlbmRlckl0ZW0gPSBmdW5jdGlvbih1bCwgaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuICQoJzxsaT4nKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoaXRlbS5sYWJlbClcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8odWwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEN1c3RvbSBmaWx0ZXJpbmcgZnVuY3Rpb25cbiAgICAgICAgJC51aS5hdXRvY29tcGxldGUuZmlsdGVyID0gZnVuY3Rpb24gYXV0b0NvbXBsZXRlRmlsdGVyKGFycmF5LCB0ZXJtKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJ1xcXFxiJyArICQudWkuYXV0b2NvbXBsZXRlLmVzY2FwZVJlZ2V4KHRlcm0pLCAnaScpO1xuICAgICAgICAgICAgcmV0dXJuICQuZ3JlcChhcnJheSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXIudGVzdCh2YWx1ZS5sYWJlbCB8fCB2YWx1ZS52YWx1ZSB8fCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXRzIGRlc3RpbmF0aW9ucyBpbnRvIHRoZSBuZWVkZWQgc3RydWN0dXJlIHRvIGJlIGRpc3BsYXllZFxuICAgICAqIG9uIHRoZSBhdXRvY29tcGxldGUgbWVudSB3aWRnZXQuXG4gICAgICogQHBhcmFtICB7QXJyYXl9IGRlc3RpbmF0aW9ucyBSYXcgZGF0YSByZXR1cm5lZCBmcm9tIEZsaWdodCBDb250cm9sXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgICBGb3JtYXR0ZWQgZGVzdGluYXRpb25zXG4gICAgICovXG4gICAgZm9ybWF0KGRlc3RpbmF0aW9ucykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgJC5lYWNoKGRlc3RpbmF0aW9ucywgKGksIGRlc3QpID0+IHtcbiAgICAgICAgICAgIGxldCB0ZW1wTGFiZWwgPVxuICAgICAgICAgICAgICAgICAgICBgPGI+JHsgZGVzdC5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSB9LCAkeyBkZXN0LmNvdW50cnkgfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2RlXCI+IHwgJHsgZGVzdC5pZCB9PC9zcGFuPmAsXG4gICAgICAgICAgICAgICAgdGVtcFZhbHVlID0gZGVzdC5pZCxcbiAgICAgICAgICAgICAgICB0ZXh0VmFsdWUgPSBkZXN0Lm5hbWVbdGhpcy5vcHRpb25zLmxhbmddICsgJywgJyArIGRlc3QuaWQ7XG5cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogdGVtcExhYmVsLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0ZW1wVmFsdWUsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGV4dFZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbi8qKlxuICogRXhwb3J0XG4gKiBAZXhwb3J0cyBBdXRvY29tcGxldGVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBBdXRvY29tcGxldGU7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIGkxOG4gPSByZXF1aXJlKCcuLi8uLi8uLi9sYW5nL2RhdGVwaWNrZXIuanNvbicpLFxuICAgIGRlZmF1bHRzID0ge1xuICAgICAgICBkZXBhcnR1cmVTZWxlY3RvcjogJy5jb3BhYWlyLWJvb2tpbmctZGF0ZXBpY2tlci1kZXBhcnR1cmUnLFxuICAgICAgICByZXR1cm5TZWxlY3RvcjogJy5jb3BhYWlyLWJvb2tpbmctZGF0ZXBpY2tlci1yZXR1cm4nLFxuICAgICAgICBkYXRlUnVsZXM6IHtcbiAgICAgICAgICAgIHRvZGF5OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgd2Vla0xhdGVyOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKVxuICAgICAgICB9LFxuICAgICAgICBsYW5nOiAnZXMnXG4gICAgfVxuO1xuXG4vKipcbiAqIERhdGVwaWNrZXIgbW9kdWxlXG4gKi9cbmNsYXNzIERhdGVwaWNrZXIge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGRhdGUgcGlja2VyIGluc2lkZSB0aGUgYm9va2luZyBmb3JtXG4gICAgICogc2V0dXBzIHRoZSBkZWZhdWx0cyBkYXRlcyBhbmQgbGFuZ3VhZ2VcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdGhpcy5zZXREZWZhdWx0RGF0ZXMoKTtcbiAgICAgICAgdGhpcy5zZXRMb2NhbGUoKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBkZWZhdWx0cyBkYXRlc1xuICAgICAqIHRoaXMgY29uc2lzdCBpbiBzZXQgY3VycmVudCBkYXRlIGZvciBkZXBhcnR1cmVcbiAgICAgKiBhbmQgb25lIHdlZWsgbGF0ZXIgZm9yIHJldHVyblxuICAgICAqL1xuICAgIHNldERlZmF1bHREYXRlcygpIHtcblxuICAgICAgICB2YXIgZGF0ZVJ1bGVzID0gdGhpcy5vcHRpb25zLmRhdGVSdWxlcyxcbiAgICAgICAgJGRlcGFydHVyZUZpZWxkID0gJCh0aGlzLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLFxuICAgICAgICAkcmV0dXJuRmllbGQgPSAkKHRoaXMub3B0aW9ucy5yZXR1cm5TZWxlY3Rvcik7XG5cblxuICAgICAgICAkZGVwYXJ0dXJlRmllbGQuZGF0ZXBpY2tlcih7XG4gICAgICAgICAgICBtaW5EYXRlOiBuZXcgRGF0ZSgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKHtcbiAgICAgICAgICAgIG1pbkRhdGU6IG5ldyBEYXRlKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoXCJzZXREYXRlXCIsIGRhdGVSdWxlcy50b2RheSk7XG4gICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKFwic2V0RGF0ZVwiLCBkYXRlUnVsZXMud2Vla0xhdGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmUgZGF0ZXBpY2tlciBkZXBlbmRpbmcgb24gdGhlXG4gICAgICogbG9jYWxpemF0aW9uXG4gICAgICovXG4gICAgc2V0TG9jYWxlKCkge1xuICAgICAgICB2YXIgcmVnaW9uYWwgPSBpMThuW3RoaXMub3B0aW9ucy5sYW5nXS5yZWdpb25hbDtcbiAgICAgICAgJC5kYXRlcGlja2VyLnNldERlZmF1bHRzKHJlZ2lvbmFsKTtcbiAgICB9XG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGVwaWNrZXI7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xucmVxdWlyZSgnc3RvcmUtanMnKTtcblxudmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBhcGk6IHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9ucyA6IFwiaHR0cHM6Ly9mbGlnaHRjb250cm9sLmlvL2FwaS9yb3V0ZXMvZGVzdGluYXRpb25zXCIsXG4gICAgICAgICAgICBjb3VudHJpZXMgOiBcImh0dHBzOi8vZmxpZ2h0Y29udHJvbC5pby9hcGkvcm91dGVzL2NvdW50cmllc1wiLFxuICAgICAgICAgICAgcmVnaW9ucyA6IFwiaHR0cHM6Ly9mbGlnaHRjb250cm9sLmlvL2FwaS9yb3V0ZXMvcmVnaW9uc1wiLFxuICAgICAgICB9LFxuICAgICAgICBzdG9yYWdlRXhwaXJhdGlvbjogODY0MDAwMDAsXG4gICAgICAgIHN0b3JhZ2U6IHRydWUsXG4gICAgfVxuO1xuXG4vKipcbiAqIEV4dGVuc2lvbiB0byB0aGUgc3RvcmFnZSBjbGFzc1xuICogdG8gc2V0dXAgdGhlIGV4cGlyYXRpb24gdmFsdWVcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBzdG9yZVdpZHRoRXhwaXJhdGlvbiA9IHtcbiAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsLCBleHApIHtcbiAgICAgICAgc3RvcmUuc2V0KGtleSwgeyB2YWw6dmFsLCBleHA6ZXhwLCB0aW1lOm5ldyBEYXRlKCkuZ2V0VGltZSgpIH0pXG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgaW5mbyA9IHN0b3JlLmdldChrZXkpXG4gICAgICAgIGlmICghaW5mbykgeyByZXR1cm4gbnVsbCB9XG4gICAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGluZm8udGltZSA+IGluZm8uZXhwKSB7IHJldHVybiBudWxsIH1cbiAgICAgICAgcmV0dXJuIGluZm8udmFsXG4gICAgfVxufVxuXG4vKipcbiAqIE1vZHVsZSBGbGlnaHRDb250cm9sXG4gKi9cbmNsYXNzIEZsaWdodENvbnRyb2wge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgaWYoIXN0b3JlLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdicm93c2VyIG5vdCBzdXBwb3J0ZWQgb3IgaW4gcHJpdmF0ZSBtb2RlJyk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc3RvcmFnZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggZGF0YSBmcm9tIGZsaWdodCBjb250cm9sbGVyXG4gICAgICogYmFzZWQgb24gdGhlIHJlc291cmNlIG5hbWVcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgcmVzb3VyY2VOYW1lOiBkZXN0aW5hdGlvbnN8Y291bnRyaWVzfHJlZ2lvbnNcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2IgIGNhbGxiYWNrXG4gICAgICogQHJldHVybiB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgZmV0Y2gocmVzb3VyY2VOYW1lLCBjYikge1xuICAgICAgICB2YXIgcmVzb3VyY2VWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5zdG9yYWdlICYmIHN0b3JlV2lkdGhFeHBpcmF0aW9uLmdldChyZXNvdXJjZU5hbWUpXG4gICAgICAgICAgICYmIHN0b3JlV2lkdGhFeHBpcmF0aW9uLmdldChyZXNvdXJjZU5hbWUgKyAnLmNvdW50JykpIHtcbiAgICAgICAgICAgIHJlc291cmNlVmFsdWUubGlzdCA9IHN0b3JlV2lkdGhFeHBpcmF0aW9uLmdldChyZXNvdXJjZU5hbWUpO1xuICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5jb3VudCA9IHN0b3JlV2lkdGhFeHBpcmF0aW9uLmdldChyZXNvdXJjZU5hbWUgKyAnLmNvdW50Jyk7XG5cbiAgICAgICAgICAgcmV0dXJuIGNiKHJlc291cmNlVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJC5nZXRKU09OKHRoaXMub3B0aW9ucy5hcGlbcmVzb3VyY2VOYW1lXSwgKGRhdGEpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5zb3J0TmFtZXMoZGF0YSk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5zdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgc3RvcmVXaWR0aEV4cGlyYXRpb24uc2V0KHJlc291cmNlTmFtZSwgZGF0YSwgdGhpcy5vcHRpb25zLnN0b3JhZ2VFeHBpcmF0aW9uKTtcbiAgICAgICAgICAgICAgICBzdG9yZVdpZHRoRXhwaXJhdGlvbi5zZXQocmVzb3VyY2VOYW1lICsgJy5jb3VudCcsIGRhdGEubGVuZ3RoLCB0aGlzLm9wdGlvbnMuc3RvcmFnZUV4cGlyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5saXN0ID0gZGF0YTtcbiAgICAgICAgICAgIHJlc291cmNlVmFsdWUuY291bnQgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgICAgY2IocmVzb3VyY2VWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byBzb3J0IGRhdGFcbiAgICAgKiBiYXNlZCBvbiBsYW5ndWFnZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHNvcnROYW1lcyhkYXRhKSB7XG4gICAgICAgIGRhdGEuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICBpZiAoYS5uYW1lW2xhbmddID4gYi5uYW1lW2xhbmddKSByZXR1cm4gMTtcbiAgICAgICAgICAgIGlmIChhLm5hbWVbbGFuZ10gPCBiLm5hbWVbbGFuZ10pIHJldHVybiAtMTtcblxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbGlnaHRDb250cm9sO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGFuZGxlYmFycycpLFxuICAgIGkxOG4gPSB7XG4gICAgICAgIGJvb2tpbmc6IHJlcXVpcmUoJy4uLy4uLy4uL2xhbmcvYm9va2luZy5qc29uJyksXG4gICAgICAgIHNpZ251cDogcmVxdWlyZSgnLi4vLi4vLi4vbGFuZy9zaWdudXAuanNvbicpLFxuICAgIH0sXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIHNyYzogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcycsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHt9XG4gICAgfVxuO1xuXG5jbGFzcyBUZW1wbGF0ZVxue1xuICAgIGNvbnN0cnVjdG9yKHdpZGdldCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgSGFuZGxlYmFycyAhPT0gJ3VuZGVmaW5lZCcgJiYgSGFuZGxlYmFycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGAke3RoaXMub3B0aW9ucy5zcmN9LyR7d2lkZ2V0fS5oYnNgLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh0cGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSB0aGlzLmNvbXBpbGUod2lkZ2V0LCB0cGwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2soaHRtbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGlzIHBsdWdpbiByZXF1aXJlcyBIYW5kbGViYXJzLmpzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21waWxlKHdpZGdldCwgdHBsKSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZSh0cGwpO1xuICAgICAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKGkxOG5bd2lkZ2V0XVt0aGlzLm9wdGlvbnMubGFuZ10pO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVtcGxhdGU7XG4iLCIvLyBDcmVhdGUgdGhlIGRlZmF1bHRzXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIFRlbXBsYXRlID0gcmVxdWlyZSgnLi4vbGliL1RlbXBsYXRlJyksXG4gICAgRmxpZ2h0Q29udHJvbCA9IHJlcXVpcmUoJy4uL2xpYi9GbGlnaHRDb250cm9sJyksXG4gICAgRGF0ZXBpY2tlciA9IHJlcXVpcmUoJy4uL2xpYi9EYXRlcGlja2VyJyksXG4gICAgQXV0b2NvbXBsZXRlID0gcmVxdWlyZSgnLi4vbGliL0F1dG9jb21wbGV0ZScpLFxuICAgIGRlZmF1bHRzID0ge1xuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBvcmlnaW46ICdhbGwnLFxuICAgICAgICBkZXN0aW5hdGlvbjogJ2FsbCcsXG4gICAgICAgIHRlbXBsYXRlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcy9ib29raW5nLmhicycsXG4gICAgICAgIGxhbmd1YWdlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL2xhbmd1YWdlLycsXG4gICAgICAgIGZvcm1Vcmw6ICdodHRwczovL2Jvb2tpbmdzLmNvcGFhaXIuY29tL0NNR1MvJyArXG4gICAgICAgICAgICAgICAgICAgICAgICdBaXJMb3dGYXJlU2VhcmNoRXh0ZXJuYWwuZG8/J1xuICAgIH0sXG4gICAgY29wYUFwaVVybHMgPSB7XG4gICAgICAgIGFsbERlc3RpbmF0aW9uczogJ2h0dHBzOi8vY29wYWFwaS5uYnhhcHBzLmNvbS9kZXN0aW5hdGlvbnMvJyxcbiAgICAgICAgY291bnRyeURlc3RpbmF0aW9uczogJ2h0dHBzOi8vY29wYWFwaS5uYnhhcHBzLmNvbS9kZXN0aW5hdGlvbnMvP2NvdW50cnk9J1xuICAgIH1cbjtcblxuXG5jbGFzcyBCb29raW5nIHtcblxuICAgIC8qKlxuICAgICAqIFdpZGdldCBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvciBlbGVtZW50IERPTSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAgT3B0aW9ucyBwYXNzZWQgb24gcGx1Z2luIGluc3RhbmNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRib29raW5nID0gJChlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgbmV3IFRlbXBsYXRlKCdib29raW5nJywge1xuICAgICAgICAgICAgJ2xhbmcnOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoaHRtbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGJvb2tpbmcuaHRtbChodG1sKTtcblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gZmluaXNoZWQsIGJ1aWxkIGFsbCB0aGUgd2lkZ2V0c1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWxlY3RNZW51cygpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0dXAgZGF0ZXBpY2tlclxuICAgICAgICAgICAgICAgIHZhciBkYXRlcGlja2VyID0gbmV3IERhdGVwaWNrZXIoKTtcbiAgICAgICAgICAgICAgICBkYXRlcGlja2VyLnJlbmRlcigpO1xuXG4gICAgICAgICAgICAgICAgLy8gQXV0b2NvbXBsZXRlIHdpZGdldHNcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRBdXRvY29tcGxldGUoKTtcblxuICAgICAgICAgICAgICAgIC8vc2V0IGZvcm0gZGVmdWFsdCB2YWx1ZXMgYWZlY3RlZFxuICAgICAgICAgICAgICAgIC8vYnkgZGF0ZXBpY2tlclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Rm9ybVZhbHVlcyhkYXRlcGlja2VyKTtcblxuICAgICAgICAgICAgICAgIC8vZGF0ZXBpY2tlciBldmVudHMgdGhhdCBtb2RpZnlcbiAgICAgICAgICAgICAgICAvL2Zvcm0gdmFsdWVzXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlcGlja2VyRm9ybUV2ZW50cyhkYXRlcGlja2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0dXAgYXV0b2NvbXBsZXRlIGRlc3RpbmF0aW9uIHdpZGdldHNcbiAgICAgKiBAc2VlIG1vZHVsZTpBdXRvY29tcGxldGVcbiAgICAgKi9cbiAgICBpbml0QXV0b2NvbXBsZXRlKCkge1xuICAgICAgICAvLyBJbml0IGNsYXNzIHdpdGggb3B0aW9uc1xuICAgICAgICB2YXIgYXV0b2NvbXBsZXRlID0gbmV3IEF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICBsYW5nOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgIHNlbGVjdDogKGUsIHVpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQsIHVpLml0ZW0uZGlzcGxheSk7XG4gICAgICAgICAgICAgICAgJChlLnRhcmdldCkuYXR0cigndmFsdWUnLCB1aS5pdGVtLmRpc3BsYXkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIEB0b2RvIE1ha2UgdGhpcyBkeW5hbWljXG4gICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgIG15OiAnbGVmdCBib3R0b20nLFxuICAgICAgICAgICAgICAgIGF0OiAnbGVmdCB0b3AnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJ1aWxkXG4gICAgICAgIGF1dG9jb21wbGV0ZS5zdGFydChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5qcy1ib29raW5nLWF1dG9jb21wbGV0ZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlLnJlbmRlcih0aGlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBzZWxlY3QgbWVudXMgd2l0aCBjdXN0b20gVUkgd2lkZ2V0c1xuICAgICAqL1xuICAgIHNldHVwU2VsZWN0TWVudXMoKSB7XG4gICAgICAgICQoJy5qcy1zZWxlY3RtZW51Jykuc2VsZWN0bWVudSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBhbmQgc3RvcmUgQ29wYSBkZXN0aW5hdGlvbnMgZnJvbSBBUElcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2sgZnVuY3Rpb24gd2hlbiBkZXN0aW5hdGlvbnMgYXJlIHJlYWR5XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBmZXRjaERlc3RpbmF0aW9ucyhjYikge1xuICAgICAgICB2YXIgdXJsID0gY29wYUFwaVVybHMuYWxsRGVzdGluYXRpb25zLFxuICAgICAgICAgICAgbGFuZyA9IHRoaXMub3B0aW9ucy5sYW5nXG4gICAgICAgIDtcblxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9ucyA9IFtdO1xuXG4gICAgICAgICQuZ2V0SlNPTih1cmwsIChkZXN0aW5hdGlvbnMpID0+IHtcbiAgICAgICAgICAgIC8vIFNvcnQgZGVzdGluYXRpb25zXG4gICAgICAgICAgICBkZXN0aW5hdGlvbnMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGEubmFtZVtsYW5nXSA+IGIubmFtZVtsYW5nXSkgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgaWYgKGEubmFtZVtsYW5nXSA8IGIubmFtZVtsYW5nXSkgcmV0dXJuIC0xO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIGRlc3RpbmF0aW9uc0RhdGEgPSBbXTtcblxuICAgICAgICAgICAgLy8gT3JnYW5pemUgZGF0YSByZXN1bHRcbiAgICAgICAgICAgICQuZWFjaChkZXN0aW5hdGlvbnMsIGZ1bmN0aW9uKGksIGRlc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcExhYmVsID0gJzxiPicgKyBkZXN0Lm5hbWVbbGFuZ10gKyAnLCAnICsgZGVzdC5jb3VudHJ5ICtcbiAgICAgICAgICAgICAgICAgICAgJzwvYj48c3BhbiBjbGFzcz1cImNvZGVcIj4gfCAnICsgZGVzdC5pZCArICc8L3NwYW4+JztcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFZhbHVlID0gZGVzdC5pZDtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dFZhbHVlID0gZGVzdC5uYW1lW2xhbmddICsgJywgJyArIGRlc3QuaWQ7XG5cbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbnNEYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogdGVtcExhYmVsLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGVtcFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0ZXh0VmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBTdG9yZSByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb25zID0gZGVzdGluYXRpb25zRGF0YTtcblxuICAgICAgICAgICAgLy8gQ2FsbGJhY2tcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIGV2ZW50cyByZWxhdGVkIHRvIGJvb2tpbmcgaW50ZXJhY3Rpb25cbiAgICAgKi9cbiAgICBib29raW5nRXZlbnRzKCkge1xuICAgICAgICB2YXIgJGZvcm0gPSAkKCcuY29wYWFpci1ib29raW5nJyk7XG4gICAgICAgIC8vIExvYWQgZm9ybSBzdWJtaXRpb24gZXZlbnRzXG4gICAgICAgIHRoaXMuc3VibWl0Rm9ybSgkZm9ybSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2luY2Ugc29tZSBkZWZhdWx0cyB2YWx1ZXMgYXJlIHNldCBvbiB0aGUgZGF0ZXBpY2tlcnNcbiAgICAgKiB0aGUgZm9ybSBoYXZlIHNvbWUgaGlkZGVuIGlucHV0cyB0aGF0IHVzZSB0aGlzIHZhbHVlc1xuICAgICAqL1xuICAgIHNldEZvcm1WYWx1ZXMoZGF0ZXBpY2tlcikge1xuXG4gICAgICAgIHZhciAkZm9ybSA9IHRoaXMuJGJvb2tpbmcsXG5cbiAgICAgICAgLy8gZ2V0IGN1cnJlbnQgZGF0ZXBpY2tlcnMgZGF0ZXNcbiAgICAgICAgZGVwYXJ0dXJlRGF0ZSA9ICQoZGF0ZXBpY2tlci5vcHRpb25zLmRlcGFydHVyZVNlbGVjdG9yKS5kYXRlcGlja2VyKCdnZXREYXRlJyksXG4gICAgICAgIHJldHVybkRhdGUgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5yZXR1cm5TZWxlY3RvcikuZGF0ZXBpY2tlcignZ2V0RGF0ZScpO1xuXG4gICAgICAgIC8vIExlc3QgbWlncmF0ZSBkYXRlIHBpY2tlcnMgZGF0ZSB0byB0aGUgaGlkZGVuXG4gICAgICAgIC8vIGRhdGUgZm9ybSBmaWVsZHMuIFRoaXMgZmllbGRzIGFyZSByZXF1aXJlZCBieVxuICAgICAgICAvLyBDb3BhIEJvb2tpbmdcblxuICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIl0nKVxuICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgcmV0dXJuRGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiXScpXG4gICAgICAgICAgICAuYXR0cigndmFsdWUnLCByZXR1cm5EYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImluYm91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiXScpXG4gICAgICAgICAgICAuYXR0cigndmFsdWUnLCByZXR1cm5EYXRlLmdldEZ1bGxZZWFyKCkpO1xuXG4gICAgICAgIC8vIHNldCBvdXRib3VuZE9wdGlvbiBkZXBhcnR1cmUgZGF0ZXNcbiAgICAgICAgJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiXScpXG4gICAgICAgICAgICAuYXR0cigndmFsdWUnLCBkZXBhcnR1cmVEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiXScpXG4gICAgICAgICAgICAuYXR0cigndmFsdWUnLCBkZXBhcnR1cmVEYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZVllYXJcIl0nKVxuICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgZGVwYXJ0dXJlRGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICB9XG5cblxuICAgIGRhdGVwaWNrZXJGb3JtRXZlbnRzKGRhdGVwaWNrZXIpIHtcblxuICAgICAgICB2YXIgJGRlcGFydHVyZUZpZWxkID0gJChkYXRlcGlja2VyLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLFxuICAgICAgICAgICAgJHJldHVybkZpZWxkID0gJChkYXRlcGlja2VyLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpLFxuICAgICAgICAgICAgJGZvcm0gPSB0aGlzLiRib29raW5nO1xuXG4gICAgICAgIHZhciBvblNlbGVjdE91dGJvdW5kID0gZnVuY3Rpb24oZGF0ZVRleHQsIGluc3QpIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoaW5zdC5zZWxlY3RlZFllYXIsIGluc3Quc2VsZWN0ZWRNb250aCwgaW5zdC5zZWxlY3RlZERheSk7XG5cbiAgICAgICAgICAgIC8vdGhpcyBzZXRzIHRoZSBpbmJvdW5kIGRhdGUgcGlja2VyIHRvIGEgd2VlayBsYXRlciBvZiBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgdmFyIHdlZWtsYXRlciA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgJHJldHVybkZpZWxkLmRhdGVwaWNrZXIoJ3NldERhdGUnLCB3ZWVrbGF0ZXIpO1xuXG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIl0nKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIHdlZWtsYXRlci5nZXRVVENEYXRlKCkpO1xuICAgICAgICAgICAgJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImluYm91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIl0nKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIHdlZWtsYXRlci5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCJdJylcbiAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCB3ZWVrbGF0ZXIuZ2V0RnVsbFllYXIoKSk7XG5cbiAgICAgICAgICAgIC8vdGhpcyBoZWxwcyB0aGF0IHRoZSB1c2VyIGRvZXNudCB0cmF2ZWwgYmFjayBpbiB0aW1lXG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ21pbkRhdGUnLCBkYXRlKTtcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIl0nKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGluc3Quc2VsZWN0ZWREYXkpO1xuICAgICAgICAgICAgJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCJdJylcbiAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBpbnN0LnNlbGVjdGVkTW9udGggKyAxKTtcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCJdJylcbiAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBpbnN0LnNlbGVjdGVkWWVhcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG9uU2VsZWN0SW5ib3VuZCA9IGZ1bmN0aW9uKGRhdGVUZXh0LCBpbnN0KSB7XG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIl0nKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGluc3Quc2VsZWN0ZWREYXkpO1xuICAgICAgICAgICAgJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImluYm91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIl0nKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGluc3Quc2VsZWN0ZWRNb250aCArIDEpO1xuICAgICAgICAgICAgJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImluYm91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiXScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgaW5zdC5zZWxlY3RlZFllYXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgICRkZXBhcnR1cmVGaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnb25TZWxlY3QnLCBvblNlbGVjdE91dGJvdW5kKTtcbiAgICAgICAgJHJldHVybkZpZWxkLmRhdGVwaWNrZXIoJ29wdGlvbicsICdvblNlbGVjdCcsIG9uU2VsZWN0SW5ib3VuZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3VibWl0Rm9ybVxuICAgICAqIGNhcHR1cmVzIGZvcm0gc3VibWl0IGV2ZW50IGFuZCBwcm9jZXNzIGl0XG4gICAgICovXG4gICAgc3VibWl0Rm9ybShmb3JtKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgaHR0cFF1ZXJ5ID0gJCh0aGlzKS5zZXJpYWxpemUoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBfdGhpcy5vcHRpb25zLmZvcm1Vcmw7XG5cbiAgICAgICAgICAgIGlmKF90aGlzLnZhbGlkYXRpb25FcnJvcihmb3JtKSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluIHRoZSBmb3JtJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHZhciBzZWFyY2hXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwgKyBodHRwUXVlcnksICdfYmxhbmsnKTtcbiAgICAgICAgICAgICAgICBzZWFyY2hXaW5kb3cuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvb2tpbmc7XG4iLCJ2YXIgVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9saWIvVGVtcGxhdGUnKTtcblxuY2xhc3MgU2lnbnVwIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy4kZm9ybSA9ICQoZWxlbWVudCk7XG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbGFuZzogJ2VzJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gTG9hZCB0ZW1wbGF0ZVxuICAgICAgICBuZXcgVGVtcGxhdGUoJ3NpZ251cCcsIHtcbiAgICAgICAgICAgICdsYW5nJzogdGhpcy5vcHRpb25zLmxhbmcsXG4gICAgICAgICAgICBjYWxsYmFjazogKGh0bWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRmb3JtLmh0bWwoaHRtbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ251cDtcbiJdfQ==
