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

},{"./widgets/Booking":11,"./widgets/Signup":12}],2:[function(require,module,exports){
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
                    sourcePlaceholder = $this.attr("placeholder"),
                    dataInput = $this.data("input-field");

                var $input = $("<input />").val(sourceValue).attr("type", "text").attr("placeholder", sourcePlaceholder).attr("data-input-field", dataInput);

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
                this.setLocale();
                this.setDefaultDates();
                this.events();
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
        events: {
            value: function events() {
                var $departureField = $(this.options.departureSelector),
                    $returnField = $(this.options.returnSelector);

                // $departureField.datepicker('option', 'onSelect', this.onSelectOutbound);
            },
            writable: true,
            configurable: true
        },
        onSelectOutbound: {
            value: function onSelectOutbound(dateText, inst) {
                var $returnField = $(this.options.returnSelector),
                    date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

                //this sets the inbound date picker to a week later of current selection
                var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
                $returnField.datepicker("setDate", weeklater);
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
                var _this = this;

                data.sort(function (a, b) {
                    if (a.name[_this.options.lang] > b.name[_this.options.lang]) return 1;
                    if (a.name[_this.options.lang] < b.name[_this.options.lang]) return -1;

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
    defaults = {
    lang: "es",
    origin: "all",
    destination: "all",
    // required field to submit form
    // to copa
    inputs: {
        tripType: "RT",
        flexibleSearch: "true",
        pos: "CMGS",
        "guestTypes[0].type": "ADT",
        "guestTypes[1].type": "CNN",
        "guestTypes[2].type": "INF",
        "guestTypes[0].amount": 1,
        "guestTypes[1].amount": 0,
        "guestTypes[2].amount": 0,
        "outboundOption.departureDay": null,
        "outboundOption.departureMonth": null,
        "outboundOption.departureYear": null,
        "inboundOption.departureDay": null,
        "inboundOption.departureMonth": null,
        "inboundOption.departureYear": null,
        // "coupon": null,
        // origin
        "outboundOption.originLocationCode": null,
        "inboundOption.destinationLocationCode": null,
        // destination
        "outboundOption.destinationLocationCode": null,
        "inboundOption.originLocationCode": null,
        // // cabin class Business|Economy
        cabinClass: "Economy",
        // d1: null,
        lang: "es"
    },
    formUrl: "https://bookings.copaair.com/CMGS/" + "AirLowFareSearchExternal.do?"
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

    _prototypeProperties(FormHelper, null, {
        process: {
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
                    var searchWindow = window.open(url + httpQuery, "_blank");
                    searchWindow.focus();
                }
            },
            writable: true,
            configurable: true
        },
        setDefaultBounds: {
            value: function setDefaultBounds() {

                if (this.options.origin !== "all") {
                    this.setBounds("origin", this.options.origin);
                }

                if (this.options.destination !== "all") {
                    this.setBounds("destination", this.options.destination);
                }
            },
            writable: true,
            configurable: true
        },
        setBounds: {
            value: function setBounds(bound, location) {

                if (bound === "origin") {
                    this.options.inputs["outboundOption.originLocationCode"] = location;
                    this.options.inputs["inboundOption.destinationLocationCode"] = location;
                }

                if (bound === "destination") {
                    this.options.inputs["outboundOption.destinationLocationCode"] = location;
                    this.options.inputs["inboundOption.originLocationCode"] = location;
                }
            },
            writable: true,
            configurable: true
        },
        setDates: {
            value: function setDates(datepicker, bounds) {
                // get current datepickers dates
                var departureDate = $(datepicker.options.departureSelector).datepicker("getDate"),
                    returnDate = $(datepicker.options.returnSelector).datepicker("getDate");

                if (bounds.returns) {
                    this.options.inputs["inboundOption.departureDay"] = returnDate.getUTCDate();
                    this.options.inputs["inboundOption.departureMonth"] = returnDate.getMonth() + 1;
                    this.options.inputs["inboundOption.departureYear"] = returnDate.getFullYear();
                }

                if (bounds.departure) {
                    this.options.inputs["outboundOption.departureDay"] = departureDate.getUTCDate();
                    this.options.inputs["outboundOption.departureMonth"] = departureDate.getMonth() + 1;
                    this.options.inputs["outboundOption.departureYear"] = departureDate.getFullYear();
                }
            },
            writable: true,
            configurable: true
        },
        setCabinClass: {
            value: function setCabinClass(target) {
                this.options.inputs.cabinClass = $(target).val();
            },
            writable: true,
            configurable: true
        },
        setPassengersAmount: {
            value: function setPassengersAmount(type, value) {
                switch (type) {
                    case "adult":
                        this.options.inputs["guestTypes[0].amount"] = value;
                        break;
                    case "child":
                        this.options.inputs["guestTypes[1].amount"] = value;
                        break;
                    case "infant":
                        this.options.inputs["guestTypes[2].amount"] = value;
                        break;
                }
            },
            writable: true,
            configurable: true
        },
        setCoupon: {
            value: function setCoupon(coupon) {
                this.options.inputs.coupon = coupon;
            },
            writable: true,
            configurable: true
        },
        setD1: {
            value: function setD1(d1Value) {
                this.options.inputs.d1 = d1Value;
            },
            writable: true,
            configurable: true
        },
        validationError: {
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
                        currentError.message = "The input " + input + " must have some value";
                        errors.bag.push(currentError);
                        errors.error = true;
                    }
                }

                return errors;
            },
            writable: true,
            configurable: true
        },
        events: {
            value: function events() {
                var _this = this;

                var datepicker = this.options.datepicker,
                    $departureField = $(datepicker.options.departureSelector),
                    $returnField = $(datepicker.options.returnSelector);

                $departureField.datepicker("option", "onSelect", function (dateText, inst) {

                    var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

                    // this sets the inbound date picker to a week later of current selection
                    var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
                    $returnField.datepicker("setDate", weeklater);
                    $returnField.datepicker("option", "minDate", date);
                    _this.setDates(datepicker, { returns: true, departure: true });
                });

                $returnField.datepicker("option", "onSelect", function (dateText, inst) {

                    var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

                    // this sets the inbound date picker to a week later of current selection
                    var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
                    _this.setDates(datepicker, { returns: true, departure: false });
                });

                $(".js-cabin-class").on("click", function (e) {
                    _this.setCabinClass(e.target);
                });

                $(".js-adults-amount").selectmenu({
                    change: function (e, ui) {
                        _this.setPassengersAmount("adult", ui.item.value);
                    }
                });

                $(".js-children-amount").selectmenu({
                    change: function (e, ui) {
                        _this.setPassengersAmount("child", ui.item.value);
                    }
                });

                $(".js-infants-amount").selectmenu({
                    change: function (e, ui) {
                        _this.setPassengersAmount("infant", ui.item.value);
                    }
                });

                $(".js-submit").on("click", function (e) {
                    e.preventDefault();
                    _this.process();
                });
            },
            writable: true,
            configurable: true
        }
    });

    return FormHelper;
})();

module.exports = FormHelper;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(require,module,exports){
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
    src: window.location.origin + "/bower_components/copaair-widgets/templates",
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
                    _this.options.data = $.extend({}, _this.options, i18n[widget][_this.options.lang]);
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
                var html = template(this.options.data);
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

},{"../../../lang/booking.json":3,"../../../lang/signup.json":5}],11:[function(require,module,exports){
(function (global){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * Modules
 */
var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    Template = require("../lib/Template"),
    FlightControl = require("../lib/FlightControl"),
    Datepicker = require("../lib/Datepicker"),
    Autocomplete = require("../lib/Autocomplete"),
    FormHelper = require("../lib/FormHelper");

/**
 * Options
 * @type {Object}
 */
var defaults = {
    lang: "es",
    d1: null,
    coupon: null,
    origin: null,
    destination: null,
    templatePath: "bower_components/copaair-widgets/templates/booking.hbs",
    languagePath: "bower_components/copaair-widgets/lang/"
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
            origin: this.options.origin,
            destination: this.options.destination,
            callback: function (html) {
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

    _prototypeProperties(Booking, null, {
        initAutocomplete: {

            /**
             * Setup autocomplete destination widgets
             * @see module:Autocomplete
             */

            value: function initAutocomplete(formHelper) {
                var _this = this;

                // Init class with options
                var autocomplete = new Autocomplete({
                    lang: this.options.lang,
                    select: function select(e, ui) {
                        e.preventDefault();
                        e.stopPropagation();

                        // set display value to the input
                        $(this).val(ui.item.display);
                        //set actual value at the booking object
                        formHelper.setBounds($(this).data("input-field"), ui.item.value);
                    },
                    // @todo Make this dynamic
                    position: {
                        my: "left bottom",
                        at: "left top"
                    },
                    appendTo: this.$booking
                });

                // Build
                autocomplete.start(function () {
                    autocomplete.render(_this.$booking.find(".js-booking-autocomplete"));
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
        bookingEvents: {

            /**
             * Bind events related to booking interaction
             */

            value: function bookingEvents() {
                var $form = $(".copaair-booking");
                var $toggle = $(".js-copaair-toggle");

                // Show bottom row when any input gets focus
                this.$booking.on("focus.copaair", "input", function (e) {
                    $toggle.removeClass("copaair-hidden");
                });

                // Clicking anywhere in the document hides bottom row
                $(document).on("click.copaair", function (e) {
                    $toggle.addClass("copaair-hidden");
                });

                // Stop propagation of clicks inside the form to prevent
                // triggering top event.
                this.$booking.on("click.copaair", function (e) {
                    e.stopPropagation();
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

},{"../lib/Autocomplete":6,"../lib/Datepicker":7,"../lib/FlightControl":8,"../lib/FormHelper":9,"../lib/Template":10}],12:[function(require,module,exports){
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

},{"../lib/Template":10}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9pbmRleC5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvYm93ZXJfY29tcG9uZW50cy9zdG9yZS5qcy9zdG9yZS5taW4uanMiLCJsYW5nL2Jvb2tpbmcuanNvbiIsImxhbmcvZGF0ZXBpY2tlci5qc29uIiwibGFuZy9zaWdudXAuanNvbiIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9BdXRvY29tcGxldGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvRGF0ZXBpY2tlci5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9GbGlnaHRDb250cm9sLmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGFhaXItd2lkZ2V0cy9zcmMvanMvbGliL0Zvcm1IZWxwZXIuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvVGVtcGxhdGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL0Jvb2tpbmcuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL1NpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLEFBQUMsQ0FBQSxVQUFVLE9BQU8sRUFBRTtBQUNoQixnQkFBWSxDQUFDOztBQUViLFFBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7O0FBRTVDLGNBQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9CLE1BQU0sSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7O0FBRXZDLGVBQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUM5QixNQUFNOztBQUVILGVBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNuQjtDQUNKLENBQUEsQ0FBQyxVQUFTLENBQUMsRUFBRTtBQUNWLGdCQUFZLENBQUM7O0FBRWIsUUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDO1FBQ3RDLE1BQU0sR0FBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FDeEM7Ozs7Ozs7O0FBUUQsS0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsU0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFO0FBQ25ELGVBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFXO0FBQ3hCLGdCQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLENBQUMsRUFBRTtBQUN4QyxpQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDckU7U0FDSixDQUFDLENBQUM7S0FDTixDQUFDOztBQUVGLEtBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxHQUFHLFNBQVMsYUFBYSxDQUFDLE9BQU8sRUFBRTtBQUNqRCxlQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBVztBQUN4QixnQkFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixDQUFDLEVBQUU7QUFDdkMsaUJBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ25FO1NBQ0osQ0FBQyxDQUFDO0tBQ04sQ0FBQztDQUNMLENBQUMsQ0FBRTs7Ozs7Ozs7O0FDeENKLENBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFTLENBQUMsR0FBRTtBQUFDLFFBQUc7QUFBQyxhQUFPLENBQUMsSUFBSSxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLGFBQU0sQ0FBQyxDQUFDLENBQUE7S0FBQztHQUFDLElBQUksQ0FBQyxHQUFDLEVBQUU7TUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFFBQVE7TUFBQyxDQUFDLEdBQUMsY0FBYztNQUFDLENBQUMsR0FBQyxRQUFRO01BQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFHLFNBQVMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsUUFBUSxHQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxLQUFDLElBQUUsSUFBSSxLQUFHLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQSxBQUFDLEVBQUMsQ0FBQyxJQUFFLElBQUksS0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFBLEFBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsWUFBVSxFQUFFLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsU0FBUyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsV0FBVyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsUUFBRyxPQUFPLENBQUMsSUFBRSxRQUFRLEVBQUMsT0FBTyxTQUFTLENBQUMsSUFBRztBQUFDLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxhQUFPLENBQUMsSUFBRSxTQUFTLENBQUE7S0FBQztHQUFDLENBQUMsSUFBRyxDQUFDLEVBQUUsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxBQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsUUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxLQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLFlBQVU7QUFBQyxLQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsWUFBVTtBQUFDLFFBQUksQ0FBQyxHQUFDLEVBQUUsQ0FBQyxRQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsT0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtLQUFDLENBQUMsRUFBQyxDQUFDLENBQUEsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFNBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO0FBQUMsVUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFDO0dBQUMsQ0FBQyxLQUFLLElBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUM7UUFBSyxDQUFDLEVBQUMsQ0FBQztRQUF5TyxDQUFDLEVBQXVNLENBQUM7OztVQUFrRSxDQUFDLEdBQVYsVUFBVyxDQUFDLEVBQUM7QUFBQyxlQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUE7T0FBQzs7QUFBeGlCLFVBQUc7QUFBQyxTQUFDLEdBQUMsSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxzQkFBc0IsR0FBQyxDQUFDLEdBQUMseUNBQXVDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtPQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtPQUFDO0FBQUksT0FBQyxHQUFDLFdBQVMsQ0FBQyxFQUFDO0FBQUMsZUFBTyxZQUFVO0FBQUMsY0FBSSxDQUFDLEdBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsUUFBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBO1NBQUMsQ0FBQTtPQUFDOztBQUFDLE9BQUMsR0FBQyxJQUFJLE1BQU0sQ0FBQyx1Q0FBdUMsRUFBQyxHQUFHLENBQUM7QUFBK0QsT0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLGdCQUFPLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFHLFNBQVMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxBQUFDLENBQUEsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsU0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFlBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7T0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFlBQUksQ0FBQyxHQUFDLEVBQUUsQ0FBQyxRQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtTQUFDLENBQUMsRUFBQyxDQUFDLENBQUEsQ0FBQTtPQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsWUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQUMsQ0FBQyxDQUFBOztHQUFDLElBQUc7QUFBQyxRQUFJLENBQUMsR0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLEtBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtHQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxLQUFDLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUMsT0FBTyxNQUFNLElBQUUsV0FBVyxJQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDLE1BQU0sS0FBRyxNQUFNLEdBQUMsTUFBTSxDQUFDLE9BQU8sR0FBQyxDQUFDLEdBQUMsT0FBTyxNQUFNLElBQUUsVUFBVSxJQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFBO0NBQUMsQ0FBQSxDQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUE7Ozs7Ozs7Ozs7QUNEbitFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbkNBLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxR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aUJBQ3RDLENBQUMsQ0FBQzs7OztBQUlILG9CQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBUyxDQUFDLEVBQUU7QUFDMUMscUJBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDdkIsQ0FBQyxDQUFDO2FBRU47Ozs7OztXQXhIQyxPQUFPOzs7QUEySGIsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Ozs7Ozs7OztBQ3RKekIsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7O0lBRXBDLE1BQU0sR0FFRyxTQUZULE1BQU0sQ0FFSSxPQUFPLEVBQUUsT0FBTzs7OzBCQUYxQixNQUFNOztBQUdKLFFBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV4QixRQUFJLFFBQVEsR0FBRztBQUNYLFlBQUksRUFBRSxJQUFJO0tBQ2IsQ0FBQzs7QUFFRixRQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7O0FBRy9DLFFBQUksUUFBUSxDQUFDLFFBQVEsRUFBRTtBQUNuQixjQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtBQUN6QixnQkFBUSxFQUFFLFVBQUMsSUFBSSxFQUFLO0FBQ2hCLGtCQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekI7S0FDSixDQUFDLENBQUM7Q0FDTjs7QUFJTCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIE5vZGUvQ29tbW9uSlNcbiAgICAgICAgZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG59KGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgQm9va2luZyA9IHJlcXVpcmUoJy4vd2lkZ2V0cy9Cb29raW5nJyksXG4gICAgICAgIFNpZ251cCAgPSByZXF1aXJlKCcuL3dpZGdldHMvU2lnbnVwJylcbiAgICA7XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHdpZGdldHMgdG8galF1ZXJ5IG9iamVjdCBwcm90b3R5cGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBwYXNzZWQgdG8gb3ZlcnJpZGUgZGVmYXVsdHMuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgIEN1cnJlbnQgb2JqZWN0IGluc3RhbmNlXG4gICAgICovXG4gICAgJC5mbi5jb3BhYWlyQm9va2luZyA9IGZ1bmN0aW9uIGNvcGFhaXJCb29raW5nKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghJC5kYXRhKHRoaXMsICdwbHVnaW5fY29wYWFpckJvb2tpbmcnKSkge1xuICAgICAgICAgICAgICAgICQuZGF0YSh0aGlzLCAncGx1Z2luX2NvcGFhaXJCb29raW5nJywgbmV3IEJvb2tpbmcodGhpcywgb3B0aW9ucykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJC5mbi5jb3BhYWlyU2lnbnVwID0gZnVuY3Rpb24gY29wYWFpclNpZ251cChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoISQuZGF0YSh0aGlzLCAncGx1Z2luX2NvcGFhaXJTaWdudXAnKSkge1xuICAgICAgICAgICAgICAgICQuZGF0YSh0aGlzLCAncGx1Z2luX2NvcGFhaXJTaWdudXAnLCBuZXcgU2lnbnVwKHRoaXMsIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn0pKTtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxMC0yMDEzIE1hcmN1cyBXZXN0aW4gKi9cbihmdW5jdGlvbihlKXtmdW5jdGlvbiBvKCl7dHJ5e3JldHVybiByIGluIGUmJmVbcl19Y2F0Y2godCl7cmV0dXJuITF9fXZhciB0PXt9LG49ZS5kb2N1bWVudCxyPVwibG9jYWxTdG9yYWdlXCIsaT1cInNjcmlwdFwiLHM7dC5kaXNhYmxlZD0hMSx0LnZlcnNpb249XCIxLjMuMTdcIix0LnNldD1mdW5jdGlvbihlLHQpe30sdC5nZXQ9ZnVuY3Rpb24oZSx0KXt9LHQuaGFzPWZ1bmN0aW9uKGUpe3JldHVybiB0LmdldChlKSE9PXVuZGVmaW5lZH0sdC5yZW1vdmU9ZnVuY3Rpb24oZSl7fSx0LmNsZWFyPWZ1bmN0aW9uKCl7fSx0LnRyYW5zYWN0PWZ1bmN0aW9uKGUsbixyKXtyPT1udWxsJiYocj1uLG49bnVsbCksbj09bnVsbCYmKG49e30pO3ZhciBpPXQuZ2V0KGUsbik7cihpKSx0LnNldChlLGkpfSx0LmdldEFsbD1mdW5jdGlvbigpe30sdC5mb3JFYWNoPWZ1bmN0aW9uKCl7fSx0LnNlcmlhbGl6ZT1mdW5jdGlvbihlKXtyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZSl9LHQuZGVzZXJpYWxpemU9ZnVuY3Rpb24oZSl7aWYodHlwZW9mIGUhPVwic3RyaW5nXCIpcmV0dXJuIHVuZGVmaW5lZDt0cnl7cmV0dXJuIEpTT04ucGFyc2UoZSl9Y2F0Y2godCl7cmV0dXJuIGV8fHVuZGVmaW5lZH19O2lmKG8oKSlzPWVbcl0sdC5zZXQ9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gbj09PXVuZGVmaW5lZD90LnJlbW92ZShlKToocy5zZXRJdGVtKGUsdC5zZXJpYWxpemUobikpLG4pfSx0LmdldD1mdW5jdGlvbihlLG4pe3ZhciByPXQuZGVzZXJpYWxpemUocy5nZXRJdGVtKGUpKTtyZXR1cm4gcj09PXVuZGVmaW5lZD9uOnJ9LHQucmVtb3ZlPWZ1bmN0aW9uKGUpe3MucmVtb3ZlSXRlbShlKX0sdC5jbGVhcj1mdW5jdGlvbigpe3MuY2xlYXIoKX0sdC5nZXRBbGw9ZnVuY3Rpb24oKXt2YXIgZT17fTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQsbil7ZVt0XT1ufSksZX0sdC5mb3JFYWNoPWZ1bmN0aW9uKGUpe2Zvcih2YXIgbj0wO248cy5sZW5ndGg7bisrKXt2YXIgcj1zLmtleShuKTtlKHIsdC5nZXQocikpfX07ZWxzZSBpZihuLmRvY3VtZW50RWxlbWVudC5hZGRCZWhhdmlvcil7dmFyIHUsYTt0cnl7YT1uZXcgQWN0aXZlWE9iamVjdChcImh0bWxmaWxlXCIpLGEub3BlbigpLGEud3JpdGUoXCI8XCIraStcIj5kb2N1bWVudC53PXdpbmRvdzwvXCIraSsnPjxpZnJhbWUgc3JjPVwiL2Zhdmljb24uaWNvXCI+PC9pZnJhbWU+JyksYS5jbG9zZSgpLHU9YS53LmZyYW1lc1swXS5kb2N1bWVudCxzPXUuY3JlYXRlRWxlbWVudChcImRpdlwiKX1jYXRjaChmKXtzPW4uY3JlYXRlRWxlbWVudChcImRpdlwiKSx1PW4uYm9keX12YXIgbD1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMCk7bi51bnNoaWZ0KHMpLHUuYXBwZW5kQ2hpbGQocykscy5hZGRCZWhhdmlvcihcIiNkZWZhdWx0I3VzZXJEYXRhXCIpLHMubG9hZChyKTt2YXIgaT1lLmFwcGx5KHQsbik7cmV0dXJuIHUucmVtb3ZlQ2hpbGQocyksaX19LGM9bmV3IFJlZ0V4cChcIlshXFxcIiMkJSYnKCkqKywvXFxcXFxcXFw6Ozw9Pj9AW1xcXFxdXmB7fH1+XVwiLFwiZ1wiKTtmdW5jdGlvbiBoKGUpe3JldHVybiBlLnJlcGxhY2UoL15kLyxcIl9fXyQmXCIpLnJlcGxhY2UoYyxcIl9fX1wiKX10LnNldD1sKGZ1bmN0aW9uKGUsbixpKXtyZXR1cm4gbj1oKG4pLGk9PT11bmRlZmluZWQ/dC5yZW1vdmUobik6KGUuc2V0QXR0cmlidXRlKG4sdC5zZXJpYWxpemUoaSkpLGUuc2F2ZShyKSxpKX0pLHQuZ2V0PWwoZnVuY3Rpb24oZSxuLHIpe249aChuKTt2YXIgaT10LmRlc2VyaWFsaXplKGUuZ2V0QXR0cmlidXRlKG4pKTtyZXR1cm4gaT09PXVuZGVmaW5lZD9yOml9KSx0LnJlbW92ZT1sKGZ1bmN0aW9uKGUsdCl7dD1oKHQpLGUucmVtb3ZlQXR0cmlidXRlKHQpLGUuc2F2ZShyKX0pLHQuY2xlYXI9bChmdW5jdGlvbihlKXt2YXIgdD1lLlhNTERvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRyaWJ1dGVzO2UubG9hZChyKTtmb3IodmFyIG49MCxpO2k9dFtuXTtuKyspZS5yZW1vdmVBdHRyaWJ1dGUoaS5uYW1lKTtlLnNhdmUocil9KSx0LmdldEFsbD1mdW5jdGlvbihlKXt2YXIgbj17fTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7bltlXT10fSksbn0sdC5mb3JFYWNoPWwoZnVuY3Rpb24oZSxuKXt2YXIgcj1lLlhNTERvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRyaWJ1dGVzO2Zvcih2YXIgaT0wLHM7cz1yW2ldOysraSluKHMubmFtZSx0LmRlc2VyaWFsaXplKGUuZ2V0QXR0cmlidXRlKHMubmFtZSkpKX0pfXRyeXt2YXIgcD1cIl9fc3RvcmVqc19fXCI7dC5zZXQocCxwKSx0LmdldChwKSE9cCYmKHQuZGlzYWJsZWQ9ITApLHQucmVtb3ZlKHApfWNhdGNoKGYpe3QuZGlzYWJsZWQ9ITB9dC5lbmFibGVkPSF0LmRpc2FibGVkLHR5cGVvZiBtb2R1bGUhPVwidW5kZWZpbmVkXCImJm1vZHVsZS5leHBvcnRzJiZ0aGlzLm1vZHVsZSE9PW1vZHVsZT9tb2R1bGUuZXhwb3J0cz10OnR5cGVvZiBkZWZpbmU9PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZD9kZWZpbmUodCk6ZS5zdG9yZT10fSkoRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpKSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwib3JpZ2luXCI6IFwiRGVzZGVcIixcbiAgICAgICAgICAgIFwiZGVzdGluYXRpb25cIjogXCJIYWNpYVwiLFxuICAgICAgICAgICAgXCJkZXBhcnR1cmVcIjogXCJTYWxpZGFcIixcbiAgICAgICAgICAgIFwicmV0dXJuXCI6IFwiUmVncmVzb1wiLFxuICAgICAgICAgICAgXCJlY29ub21pY1wiOiBcIkNsYXNlIEVjb27Ds21pY2FcIixcbiAgICAgICAgICAgIFwiYnVzaW5lc3NcIjogXCJDbGFzZSBFamVjdXRpdmFcIixcbiAgICAgICAgICAgIFwic3VibWl0XCI6IFwiVmVyIFZ1ZWxvc1wiLFxuICAgICAgICAgICAgXCJhZHVsdHNcIjogXCJBZHVsdG9zXCIsXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IFwiTmnDsW9zXCIsXG4gICAgICAgICAgICBcImluZmFudHNcIiA6IFwiSW5mYW50ZXNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1lc3NhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibm90aWZpY2F0aW9uXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJlblwiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcIm9yaWdpblwiOiBcIkZyb21cIixcbiAgICAgICAgICAgIFwiZGVzdGluYXRpb25cIjogXCJUb1wiLFxuICAgICAgICAgICAgXCJkZXBhcnR1cmVcIjogXCJEZXBhcnR1cmVcIixcbiAgICAgICAgICAgIFwicmV0dXJuXCI6IFwiUmV0dXJuXCIsXG4gICAgICAgICAgICBcImVjb25vbWljXCI6IFwiQnVzaW5lc3MgQ2xhc3NcIixcbiAgICAgICAgICAgIFwiYnVzaW5lc3NcIjogXCJFY29ub215IENsYXNzXCIsXG4gICAgICAgICAgICBcInN1Ym1pdFwiOiBcIkZpbmQgZmxpZ2h0c1wiLFxuICAgICAgICAgICAgXCJhZHVsdHNcIjogXCJBZHVsdHNcIixcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogXCJDaGlsZHJlblwiLFxuICAgICAgICAgICAgXCJpbmZhbnRzXCIgOiBcIkluZmFudHNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1lc3NhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibm90aWZpY2F0aW9uXCI6IFwiUGxlYXNlIGNvbXBsZXRlIGFsbCB0aGUgLi4uXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiUGxlYXNlIGNvbXBsZXRlIGFsbCB0aGUgLi4uXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJwdFwiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcIm9yaWdpblwiOiBcIkRlXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uXCI6IFwiUGFyYVwiLFxuICAgICAgICAgICAgXCJkZXBhcnR1cmVcIjogXCJTYcOtZGFcIixcbiAgICAgICAgICAgIFwicmV0dXJuXCI6IFwiUmVncmVzc29cIixcbiAgICAgICAgICAgIFwiZWNvbm9taWNcIjogXCJDbGFzc2UgZWNvbsO0bWljYVwiLFxuICAgICAgICAgICAgXCJidXNpbmVzc1wiOiBcIkNsYXNzZSBFeGVjdXRpdmFcIixcbiAgICAgICAgICAgIFwic3VibWl0XCI6IFwiQnVzY2FyIHZvb3NcIixcbiAgICAgICAgICAgIFwiYWR1bHRzXCI6IFwiQWR1bHRvc1wiLFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBcIkNyaWFuw6dhc1wiLFxuICAgICAgICAgICAgXCJpbmZhbnRzXCIgOiBcIkJlYsOqc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWVzc2FnZXNcIjoge1xuICAgICAgICAgICAgXCJub3RpZmljYXRpb25cIjogXCJQb3IgZmF2b3IgY29tcGxldGEgdG9kb3MgbG9zIGNhbXBvcy5cIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJQb3IgZmF2b3IgY29tcGxldGEgdG9kb3MgbG9zIGNhbXBvcy5cIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiZXNcIjoge1xuICAgICAgICBcInJlZ2lvbmFsXCI6IHtcbiAgICAgICAgICAgIFwiY2xvc2VUZXh0XCI6IFwiQ2VycmFyXCIsXG4gICAgICAgICAgICBcInByZXZUZXh0XCI6IFwiJiN4M0M7QW50XCIsXG4gICAgICAgICAgICBcIm5leHRUZXh0XCI6IFwiU2lnJiN4M0U7XCIsXG4gICAgICAgICAgICBcImN1cnJlbnRUZXh0XCI6IFwiSG95XCIsXG4gICAgICAgICAgICBcIm1vbnRoTmFtZXNcIjogW1wiZW5lcm9cIixcImZlYnJlcm9cIixcIm1hcnpvXCIsXCJhYnJpbFwiLFwibWF5b1wiLFwianVuaW9cIixcbiAgICAgICAgICAgIFwianVsaW9cIixcImFnb3N0b1wiLFwic2VwdGllbWJyZVwiLFwib2N0dWJyZVwiLFwibm92aWVtYnJlXCIsXCJkaWNpZW1icmVcIl0sXG4gICAgICAgICAgICBcIm1vbnRoTmFtZXNTaG9ydFwiOiBbXCJlbmVcIixcImZlYlwiLFwibWFyXCIsXCJhYnJcIixcIm1heVwiLFwianVuJywnanVsXCIsXCJhZ29cIixcInNlcFwiLFwib2N0XCIsXCJub3ZcIixcImRpY1wiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNcIjogW1wiZG9taW5nb1wiLFwibHVuZXNcIixcIm1hcnRlc1wiLFwibWnDqXJjb2xlcycsJ2p1ZXZlc1wiLFwidmllcm5lc1wiLFwic8OhYmFkb1wiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNTaG9ydFwiOiBbXCJkb21cIixcImx1blwiLFwibWFyXCIsXCJtacOpXCIsXCJqdXZcIixcInZpZVwiLFwic8OhYlwiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNNaW5cIjogW1wiRFwiLFwiTFwiLFwiTVwiLFwiWFwiLFwiSlwiLFwiVlwiLFwiU1wiXSxcbiAgICAgICAgICAgIFwid2Vla0hlYWRlclwiOiBcIlNtXCIsXG4gICAgICAgICAgICBcImRhdGVGb3JtYXRcIjogXCJkZC9tbS95eVwiLFxuICAgICAgICAgICAgXCJmaXJzdERheVwiOiAxLFxuICAgICAgICAgICAgXCJpc1JUTFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2hvd01vbnRoQWZ0ZXJZZWFyXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ5ZWFyU3VmZml4XCI6IFwiXCJcbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJyZWdpb25hbFwiIDoge31cbiAgICB9LFxuICAgIFwicHRcIjoge1xuICAgICAgICBcInJlZ2lvbmFsXCIgOiB7XG4gICAgICAgICAgICBcImNsb3NlVGV4dFwiOiBcIkZlY2hhclwiLFxuICAgICAgICAgICAgXCJwcmV2VGV4dFwiOiBcIiYjeDNDO0FudGVyaW9yXCIsXG4gICAgICAgICAgICBcIm5leHRUZXh0XCI6IFwiUHLDs3hpbW8mI3gzRTtcIixcbiAgICAgICAgICAgIFwiY3VycmVudFRleHRcIjogXCJIb2plXCIsXG4gICAgICAgICAgICBcIm1vbnRoTmFtZXNcIjogW1wiSmFuZWlyb1wiLFwiRmV2ZXJlaXJvXCIsXCJNYXLDp29cIixcIkFicmlsXCIsXCJNYWlvXCIsXCJKdW5ob1wiLFwiSnVsaG9cIixcIkFnb3N0b1wiLFwiU2V0ZW1icm9cIixcIk91dHVicm9cIixcIk5vdmVtYnJvXCIsXCJEZXplbWJyb1wiXSxcbiAgICAgICAgICAgIFwibW9udGhOYW1lc1Nob3J0XCI6IFtcIkphblwiLFwiRmV2XCIsXCJNYXJcIixcIkFiclwiLFwiTWFpXCIsXCJKdW5cIixcIkp1bFwiLFwiQWdvXCIsXCJTZXRcIixcIk91dFwiLFwiTm92XCIsXCJEZXpcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzXCI6IFtcIkRvbWluZ29cIixcIlNlZ3VuZGEtZmVpcmFcIixcIlRlcsOnYS1mZWlyYVwiLFwiUXVhcnRhLWZlaXJhJywnUXVpbnRhLWZlaXJhXCIsXCJTZXh0YS1mZWlyYVwiLFwiU8OhYmFkb1wiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNTaG9ydFwiOiBbXCJEb21cIixcIlNlZ1wiLFwiVGVyXCIsXCJRdWFcIixcIlF1aVwiLFwiU2V4XCIsXCJTw6FiXCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc01pblwiOiBbXCJEb21cIixcIlNlZ1wiLFwiVGVyXCIsXCJRdWFcIixcIlF1aVwiLFwiU2V4XCIsXCJTw6FiXCJdLFxuICAgICAgICAgICAgXCJ3ZWVrSGVhZGVyXCI6IFwiU21cIixcbiAgICAgICAgICAgIFwiZGF0ZUZvcm1hdFwiOiBcImRkL21tL3l5XCIsXG4gICAgICAgICAgICBcImZpcnN0RGF5XCI6IDAsXG4gICAgICAgICAgICBcImlzUlRMXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzaG93TW9udGhBZnRlclllYXJcIjogZmFsc2UsXG4gICAgICAgICAgICBcInllYXJTdWZmaXhcIjogXCJcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiZXNcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJmbmFtZVwiOiBcIk5vbWJyZVwiLFxuICAgICAgICAgICAgXCJsbmFtZVwiOiBcIkFwZWxsaWRvXCIsXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiRW1haWxcIixcbiAgICAgICAgICAgIFwiY291bnRyeVwiOiBcIlBhw61zXCIsXG4gICAgICAgICAgICBcImNpdHlcIjogXCJDaXVkYWRcIixcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCJNw7N2aWxcIixcbiAgICAgICAgICAgIFwic3Vic2NyaWJlXCI6IFwiU3Vic2NyaWJpcnNlXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJlblwiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcImZuYW1lXCI6IFwiTmFtZVwiLFxuICAgICAgICAgICAgXCJsbmFtZVwiOiBcIkxhc3QgTmFtZVwiLFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIkVtYWlsXCIsXG4gICAgICAgICAgICBcImNvdW50cnlcIjogXCJDb3VudHJ5XCIsXG4gICAgICAgICAgICBcImNpdHlcIjogXCJDaXR5XCIsXG4gICAgICAgICAgICBcInBob25lXCI6IFwiTW9iaWxlXCIsXG4gICAgICAgICAgICBcInN1YnNjcmliZVwiOiBcIlN1YnNjcmliZVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicHRcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJmbmFtZVwiOiBcIk5vbWVcIixcbiAgICAgICAgICAgIFwibG5hbWVcIjogXCJTb2JyZW5vbWVcIixcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJFLW1haWxcIixcbiAgICAgICAgICAgIFwiY291bnRyeVwiOiBcIlBhw61zXCIsXG4gICAgICAgICAgICBcImNpdHlcIjogXCJDaWRhZGVcIixcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCJDZWx1bGFyXCIsXG4gICAgICAgICAgICBcInN1YnNjcmliZVwiOiBcIkluc2NyZXZlci1zZVwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIEZsaWdodENvbnRyb2wgPSByZXF1aXJlKCcuL0ZsaWdodENvbnRyb2wnKVxuO1xuXG4vKipcbiAqIEF1dG9jb21wbGV0ZSB3aWRnZXQgd2l0aCBsaXN0IG9mIENvcGEncyBkZXN0aW5hdGlvbnNcbiAqIGZvciBiZXR0ZXIgdXNhYmlsaXR5IHRoYW4gYSBuYXRpdmUgc2VsZWN0IG1lbnUuXG4gKiBAY2xhc3NcbiAqL1xuY2xhc3MgQXV0b2NvbXBsZXRlXG57XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgQ3VzdG9tIG9wdGlvbnMgZm9yIHRoaXMgd2lkZ2V0IGluc3RhbmNlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGRlc3RpbmF0aW9ucyBmcm9tIEZsaWdodCBDb250cm9sIEFQSVxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYiBDYWxsYmFjayB3aGVuIEFQSSBjYWxsIGZpbmlzaGVzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgIGFuZCBkZXN0aW5hdGlvbnMgYXJlIGZldGNoZWRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHN0YXJ0KGNiKSB7XG4gICAgICAgIHZhciBmbGlnaHRDb250cm9sID0gbmV3IEZsaWdodENvbnRyb2woeyBsYW5nOiB0aGlzLm9wdGlvbnMubGFuZyB9KTtcblxuICAgICAgICBmbGlnaHRDb250cm9sLmZldGNoKCdkZXN0aW5hdGlvbnMnLCAoZGVzdGluYXRpb25zKSA9PiB7XG4gICAgICAgICAgICAvLyBGb3JtYXQgcmF3IGRlc3RpbmF0aW9ucyB0byBhdXRvY29tcGxldGUgc3RydWN0dXJlXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc291cmNlID0gdGhpcy5mb3JtYXQoZGVzdGluYXRpb25zLmxpc3QpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBhdXRvY29tcGxldGUgd2lkZ2V0XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50IERPTSBlbGVtZW50IHRvIGF0dGFjaCB3aWRnZXQgdG9cbiAgICAgKi9cbiAgICByZW5kZXIoZWxlbWVudCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKGVsZW1lbnQpLmhpZGUoKSxcbiAgICAgICAgICAgIHNvdXJjZUNsYXNzZXMgPSAkdGhpcy5hdHRyKCdjbGFzcycpLFxuICAgICAgICAgICAgc291cmNlVmFsdWUgPSAkdGhpcy52YWwoKSxcbiAgICAgICAgICAgIHNvdXJjZVBsYWNlaG9sZGVyID0gJHRoaXMuYXR0cigncGxhY2Vob2xkZXInKSxcbiAgICAgICAgICAgIGRhdGFJbnB1dCA9ICR0aGlzLmRhdGEoJ2lucHV0LWZpZWxkJylcbiAgICAgICAgO1xuXG4gICAgICAgIHZhciAkaW5wdXQgPSAkKCc8aW5wdXQgLz4nKVxuICAgICAgICAgICAgLnZhbChzb3VyY2VWYWx1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd0eXBlJywgJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3BsYWNlaG9sZGVyJywgc291cmNlUGxhY2Vob2xkZXIpXG4gICAgICAgICAgICAuYXR0cignZGF0YS1pbnB1dC1maWVsZCcsIGRhdGFJbnB1dClcbiAgICAgICAgO1xuXG4gICAgICAgIC8vIEFkZCBhdXRvY29tcGxldGUgZnVuY3Rpb25hbGl0eVxuICAgICAgICAkaW5wdXQuYXV0b2NvbXBsZXRlKHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgLy8gT3BlbiBsaXN0IG9uIGlucHV0IGZvY3VzXG4gICAgICAgICRpbnB1dC5vbignZm9jdXMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZiAoJHRoaXMudmFsKCkubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICR0aGlzLmF1dG9jb21wbGV0ZSgnc2VhcmNoJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBzdHlsaW5nXG4gICAgICAgICRpbnB1dFxuICAgICAgICAgICAgLmFkZENsYXNzKHNvdXJjZUNsYXNzZXMpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3VpLXdpZGdldCAgdWktd2lkZ2V0LWNvbnRlbnQgIHVpLXN0YXRlLWRlZmF1bHQnKTtcblxuICAgICAgICAvLyBJbnNlcnQgaW50byBET01cbiAgICAgICAgJGlucHV0Lmluc2VydEFmdGVyKCR0aGlzKTtcblxuICAgICAgICAvLyBPdmVyd3JpdGUgYXV0b2NvbXBsZXRlIGl0ZW0gcmVuZGVyaW5nIHdpdGggY3VzdG9tIG1hcmt1cFxuICAgICAgICAkaW5wdXQuYXV0b2NvbXBsZXRlKCdpbnN0YW5jZScpLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24odWwsIGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAkKCc8bGk+JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kKGl0ZW0ubGFiZWwpXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKHVsKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBDdXN0b20gZmlsdGVyaW5nIGZ1bmN0aW9uXG4gICAgICAgICQudWkuYXV0b2NvbXBsZXRlLmZpbHRlciA9IGZ1bmN0aW9uIGF1dG9Db21wbGV0ZUZpbHRlcihhcnJheSwgdGVybSkge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCdcXFxcYicgKyAkLnVpLmF1dG9jb21wbGV0ZS5lc2NhcGVSZWdleCh0ZXJtKSwgJ2knKTtcbiAgICAgICAgICAgIHJldHVybiAkLmdyZXAoYXJyYXksIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVyLnRlc3QodmFsdWUubGFiZWwgfHwgdmFsdWUudmFsdWUgfHwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0cyBkZXN0aW5hdGlvbnMgaW50byB0aGUgbmVlZGVkIHN0cnVjdHVyZSB0byBiZSBkaXNwbGF5ZWRcbiAgICAgKiBvbiB0aGUgYXV0b2NvbXBsZXRlIG1lbnUgd2lkZ2V0LlxuICAgICAqIEBwYXJhbSAge0FycmF5fSBkZXN0aW5hdGlvbnMgUmF3IGRhdGEgcmV0dXJuZWQgZnJvbSBGbGlnaHQgQ29udHJvbFxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgICAgRm9ybWF0dGVkIGRlc3RpbmF0aW9uc1xuICAgICAqL1xuICAgIGZvcm1hdChkZXN0aW5hdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgICQuZWFjaChkZXN0aW5hdGlvbnMsIChpLCBkZXN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgdGVtcExhYmVsID1cbiAgICAgICAgICAgICAgICAgICAgYDxiPiR7IGRlc3QubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10gfSwgJHsgZGVzdC5jb3VudHJ5IH08L2I+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29kZVwiPiB8ICR7IGRlc3QuaWQgfTwvc3Bhbj5gLFxuICAgICAgICAgICAgICAgIHRlbXBWYWx1ZSA9IGRlc3QuaWQsXG4gICAgICAgICAgICAgICAgdGV4dFZhbHVlID0gZGVzdC5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSArICcsICcgKyBkZXN0LmlkO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiB0ZW1wTGFiZWwsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRlbXBWYWx1ZSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0ZXh0VmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBFeHBvcnRcbiAqIEBleHBvcnRzIEF1dG9jb21wbGV0ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IEF1dG9jb21wbGV0ZTtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgaTE4biA9IHJlcXVpcmUoJy4uLy4uLy4uL2xhbmcvZGF0ZXBpY2tlci5qc29uJyksXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIGRlcGFydHVyZVNlbGVjdG9yOiAnLmNvcGFhaXItYm9va2luZy1kYXRlcGlja2VyLWRlcGFydHVyZScsXG4gICAgICAgIHJldHVyblNlbGVjdG9yOiAnLmNvcGFhaXItYm9va2luZy1kYXRlcGlja2VyLXJldHVybicsXG4gICAgICAgIGRhdGVSdWxlczoge1xuICAgICAgICAgICAgdG9kYXk6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICB3ZWVrTGF0ZXI6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApXG4gICAgICAgIH0sXG4gICAgICAgIGxhbmc6ICdlcydcbiAgICB9XG47XG5cbi8qKlxuICogRGF0ZXBpY2tlciBtb2R1bGVcbiAqL1xuY2xhc3MgRGF0ZXBpY2tlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgZGF0ZSBwaWNrZXIgaW5zaWRlIHRoZSBib29raW5nIGZvcm1cbiAgICAgKiBzZXR1cHMgdGhlIGRlZmF1bHRzIGRhdGVzIGFuZCBsYW5ndWFnZVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5zZXRMb2NhbGUoKTtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0RGF0ZXMoKTtcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgZGVmYXVsdHMgZGF0ZXNcbiAgICAgKiB0aGlzIGNvbnNpc3QgaW4gc2V0IGN1cnJlbnQgZGF0ZSBmb3IgZGVwYXJ0dXJlXG4gICAgICogYW5kIG9uZSB3ZWVrIGxhdGVyIGZvciByZXR1cm5cbiAgICAgKi9cbiAgICBzZXREZWZhdWx0RGF0ZXMoKSB7XG5cbiAgICAgICAgdmFyIGRhdGVSdWxlcyA9IHRoaXMub3B0aW9ucy5kYXRlUnVsZXMsXG4gICAgICAgICAgICAkZGVwYXJ0dXJlRmllbGQgPSAkKHRoaXMub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvciksXG4gICAgICAgICAgICAkcmV0dXJuRmllbGQgPSAkKHRoaXMub3B0aW9ucy5yZXR1cm5TZWxlY3Rvcik7XG5cblxuICAgICAgICAkZGVwYXJ0dXJlRmllbGQuZGF0ZXBpY2tlcih7XG4gICAgICAgICAgICBtaW5EYXRlOiBuZXcgRGF0ZSgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKHtcbiAgICAgICAgICAgIG1pbkRhdGU6IG5ldyBEYXRlKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoXCJzZXREYXRlXCIsIGRhdGVSdWxlcy50b2RheSk7XG4gICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKFwic2V0RGF0ZVwiLCBkYXRlUnVsZXMud2Vla0xhdGVyKTtcbiAgICB9XG5cbiAgICBldmVudHMoKSB7XG4gICAgICAgIHZhciAkZGVwYXJ0dXJlRmllbGQgPSAkKHRoaXMub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvciksXG4gICAgICAgICAgICAkcmV0dXJuRmllbGQgPSAkKHRoaXMub3B0aW9ucy5yZXR1cm5TZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoJ29wdGlvbicsICdvblNlbGVjdCcsIHRoaXMub25TZWxlY3RPdXRib3VuZCk7XG4gICAgfVxuXG5cbiAgICBvblNlbGVjdE91dGJvdW5kKGRhdGVUZXh0LCBpbnN0KSB7XG4gICAgICAgICAgICB2YXIgJHJldHVybkZpZWxkID0gJCh0aGlzLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpLFxuICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShpbnN0LnNlbGVjdGVkWWVhciwgaW5zdC5zZWxlY3RlZE1vbnRoLCBpbnN0LnNlbGVjdGVkRGF5KTtcblxuICAgICAgICAgICAgLy90aGlzIHNldHMgdGhlIGluYm91bmQgZGF0ZSBwaWNrZXIgdG8gYSB3ZWVrIGxhdGVyIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgd2Vla2xhdGVyID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignc2V0RGF0ZScsIHdlZWtsYXRlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZSBkYXRlcGlja2VyIGRlcGVuZGluZyBvbiB0aGVcbiAgICAgKiBsb2NhbGl6YXRpb25cbiAgICAgKi9cbiAgICBzZXRMb2NhbGUoKSB7XG4gICAgICAgIHZhciByZWdpb25hbCA9IGkxOG5bdGhpcy5vcHRpb25zLmxhbmddLnJlZ2lvbmFsO1xuICAgICAgICAkLmRhdGVwaWNrZXIuc2V0RGVmYXVsdHMocmVnaW9uYWwpO1xuICAgIH1cblxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0ZXBpY2tlcjtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5yZXF1aXJlKCdzdG9yZS1qcycpO1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIGFwaToge1xuICAgICAgICAgICAgZGVzdGluYXRpb25zIDogXCJodHRwczovL2ZsaWdodGNvbnRyb2wuaW8vYXBpL3JvdXRlcy9kZXN0aW5hdGlvbnNcIixcbiAgICAgICAgICAgIGNvdW50cmllcyA6IFwiaHR0cHM6Ly9mbGlnaHRjb250cm9sLmlvL2FwaS9yb3V0ZXMvY291bnRyaWVzXCIsXG4gICAgICAgICAgICByZWdpb25zIDogXCJodHRwczovL2ZsaWdodGNvbnRyb2wuaW8vYXBpL3JvdXRlcy9yZWdpb25zXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHN0b3JhZ2VFeHBpcmF0aW9uOiA4NjQwMDAwMCxcbiAgICAgICAgc3RvcmFnZTogdHJ1ZSxcbiAgICB9XG47XG5cbi8qKlxuICogRXh0ZW5zaW9uIHRvIHRoZSBzdG9yYWdlIGNsYXNzXG4gKiB0byBzZXR1cCB0aGUgZXhwaXJhdGlvbiB2YWx1ZVxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIHN0b3JlV2lkdGhFeHBpcmF0aW9uID0ge1xuICAgIHNldDogZnVuY3Rpb24oa2V5LCB2YWwsIGV4cCkge1xuICAgICAgICBzdG9yZS5zZXQoa2V5LCB7IHZhbDp2YWwsIGV4cDpleHAsIHRpbWU6bmV3IERhdGUoKS5nZXRUaW1lKCkgfSlcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHZhciBpbmZvID0gc3RvcmUuZ2V0KGtleSlcbiAgICAgICAgaWYgKCFpbmZvKSB7IHJldHVybiBudWxsIH1cbiAgICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5mby50aW1lID4gaW5mby5leHApIHsgcmV0dXJuIG51bGwgfVxuICAgICAgICByZXR1cm4gaW5mby52YWxcbiAgICB9XG59XG5cbi8qKlxuICogTW9kdWxlIEZsaWdodENvbnRyb2xcbiAqL1xuY2xhc3MgRmxpZ2h0Q29udHJvbCB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcblxuICAgICAgICBpZighc3RvcmUuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Jyb3dzZXIgbm90IHN1cHBvcnRlZCBvciBpbiBwcml2YXRlIG1vZGUnKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zdG9yYWdlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBkYXRhIGZyb20gZmxpZ2h0IGNvbnRyb2xsZXJcbiAgICAgKiBiYXNlZCBvbiB0aGUgcmVzb3VyY2UgbmFtZVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICByZXNvdXJjZU5hbWU6IGRlc3RpbmF0aW9uc3xjb3VudHJpZXN8cmVnaW9uc1xuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYiAgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmZXRjaChyZXNvdXJjZU5hbWUsIGNiKSB7XG4gICAgICAgIHZhciByZXNvdXJjZVZhbHVlID0ge307XG5cbiAgICAgICAgaWYodGhpcy5vcHRpb25zLnN0b3JhZ2UgJiYgc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSlcbiAgICAgICAgICAgJiYgc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSArICcuY291bnQnKSkge1xuICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5saXN0ID0gc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSk7XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmNvdW50ID0gc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSArICcuY291bnQnKTtcblxuICAgICAgICAgICByZXR1cm4gY2IocmVzb3VyY2VWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAkLmdldEpTT04odGhpcy5vcHRpb25zLmFwaVtyZXNvdXJjZU5hbWVdLCAoZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnNvcnROYW1lcyhkYXRhKTtcblxuICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLnN0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICBzdG9yZVdpZHRoRXhwaXJhdGlvbi5zZXQocmVzb3VyY2VOYW1lLCBkYXRhLCB0aGlzLm9wdGlvbnMuc3RvcmFnZUV4cGlyYXRpb24pO1xuICAgICAgICAgICAgICAgIHN0b3JlV2lkdGhFeHBpcmF0aW9uLnNldChyZXNvdXJjZU5hbWUgKyAnLmNvdW50JywgZGF0YS5sZW5ndGgsIHRoaXMub3B0aW9ucy5zdG9yYWdlRXhwaXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmxpc3QgPSBkYXRhO1xuICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5jb3VudCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgICBjYihyZXNvdXJjZVZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHNvcnQgZGF0YVxuICAgICAqIGJhc2VkIG9uIGxhbmd1YWdlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgc29ydE5hbWVzKGRhdGEpIHtcbiAgICAgICAgZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSA+IGIubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10pIHJldHVybiAxO1xuICAgICAgICAgICAgaWYgKGEubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10gPCBiLm5hbWVbdGhpcy5vcHRpb25zLmxhbmddKSByZXR1cm4gLTE7XG5cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxpZ2h0Q29udHJvbDtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIG9yaWdpbjogJ2FsbCcsXG4gICAgICAgIGRlc3RpbmF0aW9uOiAnYWxsJyxcbiAgICAgICAgLy8gcmVxdWlyZWQgZmllbGQgdG8gc3VibWl0IGZvcm1cbiAgICAgICAgLy8gdG8gY29wYVxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHRyaXBUeXBlOiBcIlJUXCIsXG4gICAgICAgICAgICBmbGV4aWJsZVNlYXJjaDogXCJ0cnVlXCIsXG4gICAgICAgICAgICBwb3M6IFwiQ01HU1wiLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzBdLnR5cGVcIjogXCJBRFRcIixcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1sxXS50eXBlXCI6IFwiQ05OXCIsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMl0udHlwZVwiOiBcIklORlwiLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzBdLmFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzFdLmFtb3VudFwiOiAwLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzJdLmFtb3VudFwiOiAwLFxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIjogbnVsbCxcbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCI6IG51bGwsXG4gICAgICAgICAgICBcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiOiBudWxsLFxuICAgICAgICAgICAgLy8gXCJjb3Vwb25cIjogbnVsbCxcbiAgICAgICAgICAgIC8vIG9yaWdpblxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiOiBudWxsLFxuICAgICAgICAgICAgLy8gZGVzdGluYXRpb25cbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIC8vIC8vIGNhYmluIGNsYXNzIEJ1c2luZXNzfEVjb25vbXlcbiAgICAgICAgICAgIFwiY2FiaW5DbGFzc1wiOiBcIkVjb25vbXlcIixcbiAgICAgICAgICAgIC8vIGQxOiBudWxsLFxuICAgICAgICAgICAgbGFuZzogJ2VzJ1xuICAgICAgICB9LFxuICAgICAgICBmb3JtVXJsOiAnaHR0cHM6Ly9ib29raW5ncy5jb3BhYWlyLmNvbS9DTUdTLycgK1xuICAgICAgICAgICAgICAgICAgICAgICAnQWlyTG93RmFyZVNlYXJjaEV4dGVybmFsLmRvPydcbiAgICB9XG47XG5cbi8qKlxuICogRm9ybUhlbHBlciBtb2R1bGVcbiAqL1xuY2xhc3MgRm9ybUhlbHBlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcblxuICAgICAgICAvLyBzZXQgZGVmYXV0bHMgdmFsdWVzXG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdEJvdW5kcygpO1xuICAgICAgICB0aGlzLnNldERhdGVzKHRoaXMub3B0aW9ucy5kYXRlcGlja2VyLCB7cmV0dXJuczp0cnVlLCBkZXBhcnR1cmU6dHJ1ZX0pO1xuXG4gICAgICAgIC8vIGxvYWQgZXZlbnRzIHJlbGF0ZWQgd2l0aCBmb3JtIGhlbHBlciBhbmQgb3RoZXIgbW9kdWxlc1xuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9wdGlvbnMuaW5wdXRzKTtcbiAgICB9XG5cblxuXG4gICAgcHJvY2VzcygpIHtcbiAgICAgICAgdmFyIGh0dHBRdWVyeSA9ICQucGFyYW0odGhpcy5vcHRpb25zLmlucHV0cyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGh0dHBRdWVyeSk7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLm9wdGlvbnMuZm9ybVVybDtcblxuICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGlvbkVycm9yKCk7XG5cbiAgICAgICAgaWYgKHZhbGlkYXRpb24uZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0aW9uLmJhZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBubyBlcnJvcnMsIGZvcndhcmQgZm9ybSB2YWx1ZXMgdG8gY29wYVxuICAgICAgICAgICAgdmFyIHNlYXJjaFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCArIGh0dHBRdWVyeSwgJ19ibGFuaycpO1xuICAgICAgICAgICAgc2VhcmNoV2luZG93LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREZWZhdWx0Qm91bmRzKCkge1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMub3JpZ2luICE9PSAnYWxsJykge1xuICAgICAgICAgICAgdGhpcy5zZXRCb3VuZHMoJ29yaWdpbicsIHRoaXMub3B0aW9ucy5vcmlnaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbiAhPT0nYWxsJykge1xuICAgICAgICAgICAgdGhpcy5zZXRCb3VuZHMoJ2Rlc3RpbmF0aW9uJywgdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Qm91bmRzKGJvdW5kLCBsb2NhdGlvbikge1xuXG4gICAgICAgIGlmIChib3VuZCA9PT0gJ29yaWdpbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIl0gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLmRlc3RpbmF0aW9uTG9jYXRpb25Db2RlXCJdID0gbG9jYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm91bmQgPT09ICdkZXN0aW5hdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiXSA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24ub3JpZ2luTG9jYXRpb25Db2RlXCJdID0gbG9jYXRpb247XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldERhdGVzKGRhdGVwaWNrZXIsIGJvdW5kcykge1xuICAgICAgICAvLyBnZXQgY3VycmVudCBkYXRlcGlja2VycyBkYXRlc1xuICAgICAgICB2YXIgZGVwYXJ0dXJlRGF0ZSA9ICQoZGF0ZXBpY2tlci5vcHRpb25zLmRlcGFydHVyZVNlbGVjdG9yKS5kYXRlcGlja2VyKCdnZXREYXRlJyksXG4gICAgICAgIHJldHVybkRhdGUgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5yZXR1cm5TZWxlY3RvcikuZGF0ZXBpY2tlcignZ2V0RGF0ZScpO1xuXG4gICAgICAgIGlmIChib3VuZHMucmV0dXJucykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlRGF5XCJdID0gcmV0dXJuRGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiXSA9IHJldHVybkRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCJdID0gcmV0dXJuRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoYm91bmRzLmRlcGFydHVyZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiXSA9IGRlcGFydHVyZURhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCJdID0gZGVwYXJ0dXJlRGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCJdID0gZGVwYXJ0dXJlRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q2FiaW5DbGFzcyh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImNhYmluQ2xhc3NcIl0gPSAkKHRhcmdldCkudmFsKCk7XG4gICAgfVxuXG4gICAgc2V0UGFzc2VuZ2Vyc0Ftb3VudCh0eXBlLCB2YWx1ZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FkdWx0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiZ3Vlc3RUeXBlc1swXS5hbW91bnRcIl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hpbGQnOlxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJndWVzdFR5cGVzWzFdLmFtb3VudFwiXSA9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbmZhbnQnOlxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJndWVzdFR5cGVzWzJdLmFtb3VudFwiXSA9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDb3Vwb24oY291cG9uKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHMuY291cG9uID0gY291cG9uO1xuICAgIH1cblxuICAgIHNldEQxKGQxVmFsdWUpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0cy5kMSA9IGQxVmFsdWU7XG4gICAgfVxuXG4gICAgdmFsaWRhdGlvbkVycm9yKCkge1xuICAgICAgICB2YXIgZXJyb3JzICA9IHtcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGJhZzpbXVxuICAgICAgICB9O1xuICAgICAgICB2YXIgY3VycmVudEVycm9yO1xuICAgICAgICBmb3IgKHZhciBpbnB1dCBpbiB0aGlzLm9wdGlvbnMuaW5wdXRzKSB7XG4gICAgICAgICAgICBpZighdGhpcy5vcHRpb25zLmlucHV0c1tpbnB1dF0gJiYgdGhpcy5vcHRpb25zLmlucHV0c1tpbnB1dF0gIT09IDApIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RXJyb3IgPSB7fTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RXJyb3IuZmllbGQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICBjdXJyZW50RXJyb3IubWVzc2FnZSA9IGBUaGUgaW5wdXQgJHtpbnB1dH0gbXVzdCBoYXZlIHNvbWUgdmFsdWVgO1xuICAgICAgICAgICAgICAgIGVycm9ycy5iYWcucHVzaChjdXJyZW50RXJyb3IpO1xuICAgICAgICAgICAgICAgIGVycm9ycy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3JzO1xuICAgIH07XG5cbiAgICBldmVudHMoKSB7XG5cbiAgICAgICAgdmFyIGRhdGVwaWNrZXIgPSB0aGlzLm9wdGlvbnMuZGF0ZXBpY2tlcixcbiAgICAgICAgICAgICRkZXBhcnR1cmVGaWVsZCA9ICQoZGF0ZXBpY2tlci5vcHRpb25zLmRlcGFydHVyZVNlbGVjdG9yKSxcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZCA9ICQoZGF0ZXBpY2tlci5vcHRpb25zLnJldHVyblNlbGVjdG9yKTtcblxuICAgICAgICAkZGVwYXJ0dXJlRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ29uU2VsZWN0JywgKGRhdGVUZXh0LCBpbnN0KSA9PntcblxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShpbnN0LnNlbGVjdGVkWWVhciwgaW5zdC5zZWxlY3RlZE1vbnRoLCBpbnN0LnNlbGVjdGVkRGF5KTtcblxuICAgICAgICAgICAgLy8gdGhpcyBzZXRzIHRoZSBpbmJvdW5kIGRhdGUgcGlja2VyIHRvIGEgd2VlayBsYXRlciBvZiBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgdmFyIHdlZWtsYXRlciA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgJHJldHVybkZpZWxkLmRhdGVwaWNrZXIoJ3NldERhdGUnLCB3ZWVrbGF0ZXIpO1xuICAgICAgICAgICAgJHJldHVybkZpZWxkLmRhdGVwaWNrZXIoJ29wdGlvbicsICdtaW5EYXRlJywgZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGVzKGRhdGVwaWNrZXIsIHtyZXR1cm5zOnRydWUsIGRlcGFydHVyZTp0cnVlfSk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgJHJldHVybkZpZWxkLmRhdGVwaWNrZXIoJ29wdGlvbicsICdvblNlbGVjdCcsIChkYXRlVGV4dCwgaW5zdCkgPT57XG5cbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoaW5zdC5zZWxlY3RlZFllYXIsIGluc3Quc2VsZWN0ZWRNb250aCwgaW5zdC5zZWxlY3RlZERheSk7XG5cbiAgICAgICAgICAgIC8vIHRoaXMgc2V0cyB0aGUgaW5ib3VuZCBkYXRlIHBpY2tlciB0byBhIHdlZWsgbGF0ZXIgb2YgY3VycmVudCBzZWxlY3Rpb25cbiAgICAgICAgICAgIHZhciB3ZWVrbGF0ZXIgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0ZXMoZGF0ZXBpY2tlciwge3JldHVybnM6dHJ1ZSwgZGVwYXJ0dXJlOmZhbHNlfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1jYWJpbi1jbGFzcycpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldENhYmluQ2xhc3MoZS50YXJnZXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtYWR1bHRzLWFtb3VudCcpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgY2hhbmdlOiAoZSwgdWkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhc3NlbmdlcnNBbW91bnQoJ2FkdWx0JywgdWkuaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1jaGlsZHJlbi1hbW91bnQnKS5zZWxlY3RtZW51KHtcbiAgICAgICAgICAgIGNoYW5nZTogKGUsIHVpKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYXNzZW5nZXJzQW1vdW50KCdjaGlsZCcsIHVpLml0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtaW5mYW50cy1hbW91bnQnKS5zZWxlY3RtZW51KHtcbiAgICAgICAgICAgIGNoYW5nZTogKGUsIHVpKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYXNzZW5nZXJzQW1vdW50KCdpbmZhbnQnLCB1aS5pdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLXN1Ym1pdCcpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3MoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUhlbHBlcjtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgSGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hhbmRsZWJhcnMnKSxcbiAgICBpMThuID0ge1xuICAgICAgICBib29raW5nOiByZXF1aXJlKCcuLi8uLi8uLi9sYW5nL2Jvb2tpbmcuanNvbicpLFxuICAgICAgICBzaWdudXA6IHJlcXVpcmUoJy4uLy4uLy4uL2xhbmcvc2lnbnVwLmpzb24nKSxcbiAgICB9LFxuICAgIGRlZmF1bHRzID0ge1xuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBzcmM6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcycsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHt9XG4gICAgfVxuO1xuXG5jbGFzcyBUZW1wbGF0ZVxue1xuXG4gICAgY29uc3RydWN0b3Iod2lkZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIGlmICh0eXBlb2YgSGFuZGxlYmFycyAhPT0gJ3VuZGVmaW5lZCcgJiYgSGFuZGxlYmFycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGAke3RoaXMub3B0aW9ucy5zcmN9LyR7d2lkZ2V0fS5oYnNgLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh0cGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCBpMThuW3dpZGdldF1bdGhpcy5vcHRpb25zLmxhbmddKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSB0aGlzLmNvbXBpbGUod2lkZ2V0LCB0cGwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2soaHRtbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGlzIHBsdWdpbiByZXF1aXJlcyBIYW5kbGViYXJzLmpzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21waWxlKHdpZGdldCwgdHBsKSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZSh0cGwpO1xuICAgICAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKHRoaXMub3B0aW9ucy5kYXRhKTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlbXBsYXRlO1xuIiwiLyoqXG4gKiBNb2R1bGVzXG4gKi9cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9saWIvVGVtcGxhdGUnKSxcbiAgICBGbGlnaHRDb250cm9sID0gcmVxdWlyZSgnLi4vbGliL0ZsaWdodENvbnRyb2wnKSxcbiAgICBEYXRlcGlja2VyID0gcmVxdWlyZSgnLi4vbGliL0RhdGVwaWNrZXInKSxcbiAgICBBdXRvY29tcGxldGUgPSByZXF1aXJlKCcuLi9saWIvQXV0b2NvbXBsZXRlJyksXG4gICAgRm9ybUhlbHBlciA9IHJlcXVpcmUoJy4uL2xpYi9Gb3JtSGVscGVyJylcbjtcblxuLyoqXG4gKiBPcHRpb25zXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIGQxOiBudWxsLFxuICAgICAgICBjb3Vwb246IG51bGwsXG4gICAgICAgIG9yaWdpbjogbnVsbCxcbiAgICAgICAgZGVzdGluYXRpb246IG51bGwsXG4gICAgICAgIHRlbXBsYXRlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcy9ib29raW5nLmhicycsXG4gICAgICAgIGxhbmd1YWdlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL2xhbmcvJ1xuICAgIH1cbjtcblxuXG5jbGFzcyBCb29raW5nIHtcblxuICAgIC8qKlxuICAgICAqIFdpZGdldCBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvciBlbGVtZW50IERPTSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAgT3B0aW9ucyBwYXNzZWQgb24gcGx1Z2luIGluc3RhbmNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRib29raW5nID0gJChlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgbmV3IFRlbXBsYXRlKCdib29raW5nJywge1xuICAgICAgICAgICAgJ2xhbmcnOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgICdvcmlnaW4nOiB0aGlzLm9wdGlvbnMub3JpZ2luLFxuICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uJzogdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgY2FsbGJhY2s6IChodG1sKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYm9va2luZy5odG1sKGh0bWwpO1xuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBmaW5pc2hlZCwgYnVpbGQgYWxsIHRoZSB3aWRnZXRzXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cFNlbGVjdE1lbnVzKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXR1cCBkYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGVwaWNrZXIgPSBuZXcgRGF0ZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgICAgICdsYW5nJzogdGhpcy5vcHRpb25zLmxhbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkYXRlcGlja2VyLnJlbmRlcigpO1xuXG5cbiAgICAgICAgICAgICAgICB2YXIgZm9ybUhlbHBlciA9IG5ldyBGb3JtSGVscGVyKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXBpY2tlcjogZGF0ZXBpY2tlcixcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiB0aGlzLm9wdGlvbnMub3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgY3VzdG9tIHZhbHVlcyBkMSAmIGNvdXBvblxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLmQxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1IZWxwZXIuc2V0RDEodGhpcy5vcHRpb25zLmQxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMuY291cG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1IZWxwZXIuc2V0Q291cG9uKHRoaXMub3B0aW9ucy5jb3Vwb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEF1dG9jb21wbGV0ZSB3aWRnZXRzXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0QXV0b2NvbXBsZXRlKGZvcm1IZWxwZXIpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBCaW5kIGV2ZW50c1xuICAgICAgICAgICAgICAgIHRoaXMuYm9va2luZ0V2ZW50cygpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHVwIGF1dG9jb21wbGV0ZSBkZXN0aW5hdGlvbiB3aWRnZXRzXG4gICAgICogQHNlZSBtb2R1bGU6QXV0b2NvbXBsZXRlXG4gICAgICovXG4gICAgaW5pdEF1dG9jb21wbGV0ZShmb3JtSGVscGVyKSB7XG4gICAgICAgIC8vIEluaXQgY2xhc3Mgd2l0aCBvcHRpb25zXG4gICAgICAgIHZhciBhdXRvY29tcGxldGUgPSBuZXcgQXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgIGxhbmc6IHRoaXMub3B0aW9ucy5sYW5nLFxuICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCBkaXNwbGF5IHZhbHVlIHRvIHRoZSBpbnB1dFxuICAgICAgICAgICAgICAgICQodGhpcykudmFsKHVpLml0ZW0uZGlzcGxheSk7XG4gICAgICAgICAgICAgICAgLy9zZXQgYWN0dWFsIHZhbHVlIGF0IHRoZSBib29raW5nIG9iamVjdFxuICAgICAgICAgICAgICAgIGZvcm1IZWxwZXIuc2V0Qm91bmRzKCQodGhpcykuZGF0YSgnaW5wdXQtZmllbGQnKSwgdWkuaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gQHRvZG8gTWFrZSB0aGlzIGR5bmFtaWNcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbXk6ICdsZWZ0IGJvdHRvbScsXG4gICAgICAgICAgICAgICAgYXQ6ICdsZWZ0IHRvcCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcHBlbmRUbzogdGhpcy4kYm9va2luZ1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCdWlsZFxuICAgICAgICBhdXRvY29tcGxldGUuc3RhcnQoKCkgPT4ge1xuICAgICAgICAgICAgYXV0b2NvbXBsZXRlLnJlbmRlcih0aGlzLiRib29raW5nLmZpbmQoJy5qcy1ib29raW5nLWF1dG9jb21wbGV0ZScpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgc2VsZWN0IG1lbnVzIHdpdGggY3VzdG9tIFVJIHdpZGdldHNcbiAgICAgKi9cbiAgICBzZXR1cFNlbGVjdE1lbnVzKCkge1xuICAgICAgICAkKCcuanMtc2VsZWN0bWVudScpLnNlbGVjdG1lbnUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZCBldmVudHMgcmVsYXRlZCB0byBib29raW5nIGludGVyYWN0aW9uXG4gICAgICovXG4gICAgYm9va2luZ0V2ZW50cygpIHtcbiAgICAgICAgdmFyICRmb3JtID0gJCgnLmNvcGFhaXItYm9va2luZycpO1xuICAgICAgICB2YXIgJHRvZ2dsZSA9ICQoJy5qcy1jb3BhYWlyLXRvZ2dsZScpO1xuXG4gICAgICAgIC8vIFNob3cgYm90dG9tIHJvdyB3aGVuIGFueSBpbnB1dCBnZXRzIGZvY3VzXG4gICAgICAgIHRoaXMuJGJvb2tpbmcub24oJ2ZvY3VzLmNvcGFhaXInLCAnaW5wdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkdG9nZ2xlLnJlbW92ZUNsYXNzKCdjb3BhYWlyLWhpZGRlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDbGlja2luZyBhbnl3aGVyZSBpbiB0aGUgZG9jdW1lbnQgaGlkZXMgYm90dG9tIHJvd1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2suY29wYWFpcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICR0b2dnbGUuYWRkQ2xhc3MoJ2NvcGFhaXItaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN0b3AgcHJvcGFnYXRpb24gb2YgY2xpY2tzIGluc2lkZSB0aGUgZm9ybSB0byBwcmV2ZW50XG4gICAgICAgIC8vIHRyaWdnZXJpbmcgdG9wIGV2ZW50LlxuICAgICAgICB0aGlzLiRib29raW5nLm9uKCdjbGljay5jb3BhYWlyJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm9va2luZztcbiIsInZhciBUZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL2xpYi9UZW1wbGF0ZScpO1xuXG5jbGFzcyBTaWdudXAge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRmb3JtID0gJChlbGVtZW50KTtcblxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBsYW5nOiAnZXMnXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBMb2FkIHRlbXBsYXRlXG4gICAgICAgIG5ldyBUZW1wbGF0ZSgnc2lnbnVwJywge1xuICAgICAgICAgICAgJ2xhbmcnOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoaHRtbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGZvcm0uaHRtbChodG1sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbnVwO1xuIl19
