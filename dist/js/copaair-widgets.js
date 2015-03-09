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

},{"../../../lang/booking.json":3,"../../../lang/signup.json":5}],11:[function(require,module,exports){
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
    FormHelper = require("../lib/FormHelper"),
    defaults = {
    lang: "es",
    origin: "all",
    destination: "all",
    d1: null,
    coupon: null,
    templatePath: "bower_components/copaair-widgets/templates/booking.hbs",
    languagePath: "bower_components/copaair-widgets/lang/"
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
                // Init class with options
                var autocomplete = new Autocomplete({
                    lang: this.options.lang,
                    select: function select(e, ui) {
                        e.preventDefault();
                        // set display value to the input
                        $(this).val(ui.item.display);
                        //set actual value at the booking object
                        formHelper.setBounds($(this).data("input-field"), ui.item.value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9pbmRleC5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvYm93ZXJfY29tcG9uZW50cy9zdG9yZS5qcy9zdG9yZS5taW4uanMiLCJsYW5nL2Jvb2tpbmcuanNvbiIsImxhbmcvZGF0ZXBpY2tlci5qc29uIiwibGFuZy9zaWdudXAuanNvbiIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9BdXRvY29tcGxldGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvRGF0ZXBpY2tlci5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9GbGlnaHRDb250cm9sLmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGFhaXItd2lkZ2V0cy9zcmMvanMvbGliL0Zvcm1IZWxwZXIuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvVGVtcGxhdGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL0Jvb2tpbmcuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL1NpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLEFBQUMsQ0FBQSxVQUFVLE9BQU8sRUFBRTtBQUNoQixnQkFBWSxDQUFDOztBQUViLFFBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7O0FBRTVDLGNBQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9CLE1BQU0sSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7O0FBRXZDLGVBQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUM5QixNQUFNOztBQUVILGVBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNuQjtDQUNKLENBQUEsQ0FBQyxVQUFTLENBQUMsRUFBRTtBQUNWLGdCQUFZLENBQUM7O0FBRWIsUUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDO1FBQ3RDLE1BQU0sR0FBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FDeEM7Ozs7Ozs7O0FBUUQsS0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsU0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFO0FBQ25ELGVBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFXO0FBQ3hCLGdCQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLENBQUMsRUFBRTtBQUN4QyxpQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDckU7U0FDSixDQUFDLENBQUM7S0FDTixDQUFDOztBQUVGLEtBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxHQUFHLFNBQVMsYUFBYSxDQUFDLE9BQU8sRUFBRTtBQUNqRCxlQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBVztBQUN4QixnQkFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixDQUFDLEVBQUU7QUFDdkMsaUJBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ25FO1NBQ0osQ0FBQyxDQUFDO0tBQ04sQ0FBQztDQUNMLENBQUMsQ0FBRTs7Ozs7Ozs7O0FDeENKLENBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFTLENBQUMsR0FBRTtBQUFDLFFBQUc7QUFBQyxhQUFPLENBQUMsSUFBSSxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLGFBQU0sQ0FBQyxDQUFDLENBQUE7S0FBQztHQUFDLElBQUksQ0FBQyxHQUFDLEVBQUU7TUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFFBQVE7TUFBQyxDQUFDLEdBQUMsY0FBYztNQUFDLENBQUMsR0FBQyxRQUFRO01BQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFHLFNBQVMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsUUFBUSxHQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxLQUFDLElBQUUsSUFBSSxLQUFHLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQSxBQUFDLEVBQUMsQ0FBQyxJQUFFLElBQUksS0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFBLEFBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsWUFBVSxFQUFFLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsU0FBUyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsV0FBVyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsUUFBRyxPQUFPLENBQUMsSUFBRSxRQUFRLEVBQUMsT0FBTyxTQUFTLENBQUMsSUFBRztBQUFDLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxhQUFPLENBQUMsSUFBRSxTQUFTLENBQUE7S0FBQztHQUFDLENBQUMsSUFBRyxDQUFDLEVBQUUsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxBQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsUUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxLQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLFlBQVU7QUFBQyxLQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsWUFBVTtBQUFDLFFBQUksQ0FBQyxHQUFDLEVBQUUsQ0FBQyxRQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsT0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtLQUFDLENBQUMsRUFBQyxDQUFDLENBQUEsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFNBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO0FBQUMsVUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFDO0dBQUMsQ0FBQyxLQUFLLElBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUM7UUFBSyxDQUFDLEVBQUMsQ0FBQztRQUF5TyxDQUFDLEVBQXVNLENBQUM7OztVQUFrRSxDQUFDLEdBQVYsVUFBVyxDQUFDLEVBQUM7QUFBQyxlQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUE7T0FBQzs7QUFBeGlCLFVBQUc7QUFBQyxTQUFDLEdBQUMsSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxzQkFBc0IsR0FBQyxDQUFDLEdBQUMseUNBQXVDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtPQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtPQUFDO0FBQUksT0FBQyxHQUFDLFdBQVMsQ0FBQyxFQUFDO0FBQUMsZUFBTyxZQUFVO0FBQUMsY0FBSSxDQUFDLEdBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsUUFBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBO1NBQUMsQ0FBQTtPQUFDOztBQUFDLE9BQUMsR0FBQyxJQUFJLE1BQU0sQ0FBQyx1Q0FBdUMsRUFBQyxHQUFHLENBQUM7QUFBK0QsT0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLGdCQUFPLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFHLFNBQVMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxBQUFDLENBQUEsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsU0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFlBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7T0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFlBQUksQ0FBQyxHQUFDLEVBQUUsQ0FBQyxRQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtTQUFDLENBQUMsRUFBQyxDQUFDLENBQUEsQ0FBQTtPQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsWUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQUMsQ0FBQyxDQUFBOztHQUFDLElBQUc7QUFBQyxRQUFJLENBQUMsR0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLEtBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtHQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxLQUFDLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUMsT0FBTyxNQUFNLElBQUUsV0FBVyxJQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDLE1BQU0sS0FBRyxNQUFNLEdBQUMsTUFBTSxDQUFDLE9BQU8sR0FBQyxDQUFDLEdBQUMsT0FBTyxNQUFNLElBQUUsVUFBVSxJQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFBO0NBQUMsQ0FBQSxDQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUE7Ozs7Ozs7Ozs7QUNEbitFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbkNBLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxR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LENBQUMsQ0FBQzs7SUFFcEMsTUFBTSxHQUVHLFNBRlQsTUFBTSxDQUVJLE9BQU8sRUFBRSxPQUFPOzs7MEJBRjFCLE1BQU07O0FBR0osUUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXhCLFFBQUksUUFBUSxHQUFHO0FBQ1gsWUFBSSxFQUFFLElBQUk7S0FDYixDQUFDOztBQUVGLFFBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDOzs7QUFHL0MsUUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFO0FBQ25CLGNBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO0FBQ3pCLGdCQUFRLEVBQUUsVUFBQyxJQUFJLEVBQUs7QUFDaEIsa0JBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtLQUNKLENBQUMsQ0FBQztDQUNOOztBQUlMLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gTm9kZS9Db21tb25KU1xuICAgICAgICBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cbn0oZnVuY3Rpb24oJCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBCb29raW5nID0gcmVxdWlyZSgnLi93aWRnZXRzL0Jvb2tpbmcnKSxcbiAgICAgICAgU2lnbnVwICA9IHJlcXVpcmUoJy4vd2lkZ2V0cy9TaWdudXAnKVxuICAgIDtcblxuICAgIC8qKlxuICAgICAqIEJpbmQgd2lkZ2V0cyB0byBqUXVlcnkgb2JqZWN0IHByb3RvdHlwZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIHBhc3NlZCB0byBvdmVycmlkZSBkZWZhdWx0cy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgQ3VycmVudCBvYmplY3QgaW5zdGFuY2VcbiAgICAgKi9cbiAgICAkLmZuLmNvcGFhaXJCb29raW5nID0gZnVuY3Rpb24gY29wYWFpckJvb2tpbmcob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyQm9va2luZycpKSB7XG4gICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsICdwbHVnaW5fY29wYWFpckJvb2tpbmcnLCBuZXcgQm9va2luZyh0aGlzLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkLmZuLmNvcGFhaXJTaWdudXAgPSBmdW5jdGlvbiBjb3BhYWlyU2lnbnVwKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghJC5kYXRhKHRoaXMsICdwbHVnaW5fY29wYWFpclNpZ251cCcpKSB7XG4gICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsICdwbHVnaW5fY29wYWFpclNpZ251cCcsIG5ldyBTaWdudXAodGhpcywgb3B0aW9ucykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufSkpO1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTMgTWFyY3VzIFdlc3RpbiAqL1xuKGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIG8oKXt0cnl7cmV0dXJuIHIgaW4gZSYmZVtyXX1jYXRjaCh0KXtyZXR1cm4hMX19dmFyIHQ9e30sbj1lLmRvY3VtZW50LHI9XCJsb2NhbFN0b3JhZ2VcIixpPVwic2NyaXB0XCIsczt0LmRpc2FibGVkPSExLHQudmVyc2lvbj1cIjEuMy4xN1wiLHQuc2V0PWZ1bmN0aW9uKGUsdCl7fSx0LmdldD1mdW5jdGlvbihlLHQpe30sdC5oYXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHQuZ2V0KGUpIT09dW5kZWZpbmVkfSx0LnJlbW92ZT1mdW5jdGlvbihlKXt9LHQuY2xlYXI9ZnVuY3Rpb24oKXt9LHQudHJhbnNhY3Q9ZnVuY3Rpb24oZSxuLHIpe3I9PW51bGwmJihyPW4sbj1udWxsKSxuPT1udWxsJiYobj17fSk7dmFyIGk9dC5nZXQoZSxuKTtyKGkpLHQuc2V0KGUsaSl9LHQuZ2V0QWxsPWZ1bmN0aW9uKCl7fSx0LmZvckVhY2g9ZnVuY3Rpb24oKXt9LHQuc2VyaWFsaXplPWZ1bmN0aW9uKGUpe3JldHVybiBKU09OLnN0cmluZ2lmeShlKX0sdC5kZXNlcmlhbGl6ZT1mdW5jdGlvbihlKXtpZih0eXBlb2YgZSE9XCJzdHJpbmdcIilyZXR1cm4gdW5kZWZpbmVkO3RyeXtyZXR1cm4gSlNPTi5wYXJzZShlKX1jYXRjaCh0KXtyZXR1cm4gZXx8dW5kZWZpbmVkfX07aWYobygpKXM9ZVtyXSx0LnNldD1mdW5jdGlvbihlLG4pe3JldHVybiBuPT09dW5kZWZpbmVkP3QucmVtb3ZlKGUpOihzLnNldEl0ZW0oZSx0LnNlcmlhbGl6ZShuKSksbil9LHQuZ2V0PWZ1bmN0aW9uKGUsbil7dmFyIHI9dC5kZXNlcmlhbGl6ZShzLmdldEl0ZW0oZSkpO3JldHVybiByPT09dW5kZWZpbmVkP246cn0sdC5yZW1vdmU9ZnVuY3Rpb24oZSl7cy5yZW1vdmVJdGVtKGUpfSx0LmNsZWFyPWZ1bmN0aW9uKCl7cy5jbGVhcigpfSx0LmdldEFsbD1mdW5jdGlvbigpe3ZhciBlPXt9O3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCxuKXtlW3RdPW59KSxlfSx0LmZvckVhY2g9ZnVuY3Rpb24oZSl7Zm9yKHZhciBuPTA7bjxzLmxlbmd0aDtuKyspe3ZhciByPXMua2V5KG4pO2Uocix0LmdldChyKSl9fTtlbHNlIGlmKG4uZG9jdW1lbnRFbGVtZW50LmFkZEJlaGF2aW9yKXt2YXIgdSxhO3RyeXthPW5ldyBBY3RpdmVYT2JqZWN0KFwiaHRtbGZpbGVcIiksYS5vcGVuKCksYS53cml0ZShcIjxcIitpK1wiPmRvY3VtZW50Lnc9d2luZG93PC9cIitpKyc+PGlmcmFtZSBzcmM9XCIvZmF2aWNvbi5pY29cIj48L2lmcmFtZT4nKSxhLmNsb3NlKCksdT1hLncuZnJhbWVzWzBdLmRvY3VtZW50LHM9dS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpfWNhdGNoKGYpe3M9bi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHU9bi5ib2R5fXZhciBsPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKTtuLnVuc2hpZnQocyksdS5hcHBlbmRDaGlsZChzKSxzLmFkZEJlaGF2aW9yKFwiI2RlZmF1bHQjdXNlckRhdGFcIikscy5sb2FkKHIpO3ZhciBpPWUuYXBwbHkodCxuKTtyZXR1cm4gdS5yZW1vdmVDaGlsZChzKSxpfX0sYz1uZXcgUmVnRXhwKFwiWyFcXFwiIyQlJicoKSorLC9cXFxcXFxcXDo7PD0+P0BbXFxcXF1eYHt8fX5dXCIsXCJnXCIpO2Z1bmN0aW9uIGgoZSl7cmV0dXJuIGUucmVwbGFjZSgvXmQvLFwiX19fJCZcIikucmVwbGFjZShjLFwiX19fXCIpfXQuc2V0PWwoZnVuY3Rpb24oZSxuLGkpe3JldHVybiBuPWgobiksaT09PXVuZGVmaW5lZD90LnJlbW92ZShuKTooZS5zZXRBdHRyaWJ1dGUobix0LnNlcmlhbGl6ZShpKSksZS5zYXZlKHIpLGkpfSksdC5nZXQ9bChmdW5jdGlvbihlLG4scil7bj1oKG4pO3ZhciBpPXQuZGVzZXJpYWxpemUoZS5nZXRBdHRyaWJ1dGUobikpO3JldHVybiBpPT09dW5kZWZpbmVkP3I6aX0pLHQucmVtb3ZlPWwoZnVuY3Rpb24oZSx0KXt0PWgodCksZS5yZW1vdmVBdHRyaWJ1dGUodCksZS5zYXZlKHIpfSksdC5jbGVhcj1sKGZ1bmN0aW9uKGUpe3ZhciB0PWUuWE1MRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dHJpYnV0ZXM7ZS5sb2FkKHIpO2Zvcih2YXIgbj0wLGk7aT10W25dO24rKyllLnJlbW92ZUF0dHJpYnV0ZShpLm5hbWUpO2Uuc2F2ZShyKX0pLHQuZ2V0QWxsPWZ1bmN0aW9uKGUpe3ZhciBuPXt9O3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24oZSx0KXtuW2VdPXR9KSxufSx0LmZvckVhY2g9bChmdW5jdGlvbihlLG4pe3ZhciByPWUuWE1MRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dHJpYnV0ZXM7Zm9yKHZhciBpPTAscztzPXJbaV07KytpKW4ocy5uYW1lLHQuZGVzZXJpYWxpemUoZS5nZXRBdHRyaWJ1dGUocy5uYW1lKSkpfSl9dHJ5e3ZhciBwPVwiX19zdG9yZWpzX19cIjt0LnNldChwLHApLHQuZ2V0KHApIT1wJiYodC5kaXNhYmxlZD0hMCksdC5yZW1vdmUocCl9Y2F0Y2goZil7dC5kaXNhYmxlZD0hMH10LmVuYWJsZWQ9IXQuZGlzYWJsZWQsdHlwZW9mIG1vZHVsZSE9XCJ1bmRlZmluZWRcIiYmbW9kdWxlLmV4cG9ydHMmJnRoaXMubW9kdWxlIT09bW9kdWxlP21vZHVsZS5leHBvcnRzPXQ6dHlwZW9mIGRlZmluZT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kP2RlZmluZSh0KTplLnN0b3JlPXR9KShGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkpIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiZXNcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJvcmlnaW5cIjogXCJEZXNkZVwiLFxuICAgICAgICAgICAgXCJkZXN0aW5hdGlvblwiOiBcIkhhY2lhXCIsXG4gICAgICAgICAgICBcImRlcGFydHVyZVwiOiBcIlNhbGlkYVwiLFxuICAgICAgICAgICAgXCJyZXR1cm5cIjogXCJSZWdyZXNvXCIsXG4gICAgICAgICAgICBcImVjb25vbWljXCI6IFwiQ2xhc2UgRWNvbsOzbWljYVwiLFxuICAgICAgICAgICAgXCJidXNpbmVzc1wiOiBcIkNsYXNlIEVqZWN1dGl2YVwiLFxuICAgICAgICAgICAgXCJzdWJtaXRcIjogXCJWZXIgVnVlbG9zXCIsXG4gICAgICAgICAgICBcImFkdWx0c1wiOiBcIkFkdWx0b3NcIixcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogXCJOacOxb3NcIixcbiAgICAgICAgICAgIFwiaW5mYW50c1wiIDogXCJJbmZhbnRlc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWVzc2FnZXNcIjoge1xuICAgICAgICAgICAgXCJub3RpZmljYXRpb25cIjogXCJQb3IgZmF2b3IgY29tcGxldGEgdG9kb3MgbG9zIGNhbXBvcy5cIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJQb3IgZmF2b3IgY29tcGxldGEgdG9kb3MgbG9zIGNhbXBvcy5cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwib3JpZ2luXCI6IFwiRnJvbVwiLFxuICAgICAgICAgICAgXCJkZXN0aW5hdGlvblwiOiBcIlRvXCIsXG4gICAgICAgICAgICBcImRlcGFydHVyZVwiOiBcIkRlcGFydHVyZVwiLFxuICAgICAgICAgICAgXCJyZXR1cm5cIjogXCJSZXR1cm5cIixcbiAgICAgICAgICAgIFwiZWNvbm9taWNcIjogXCJCdXNpbmVzcyBDbGFzc1wiLFxuICAgICAgICAgICAgXCJidXNpbmVzc1wiOiBcIkVjb25vbXkgQ2xhc3NcIixcbiAgICAgICAgICAgIFwic3VibWl0XCI6IFwiRmluZCBmbGlnaHRzXCIsXG4gICAgICAgICAgICBcImFkdWx0c1wiOiBcIkFkdWx0c1wiLFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBcIkNoaWxkcmVuXCIsXG4gICAgICAgICAgICBcImluZmFudHNcIiA6IFwiSW5mYW50c1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWVzc2FnZXNcIjoge1xuICAgICAgICAgICAgXCJub3RpZmljYXRpb25cIjogXCJQbGVhc2UgY29tcGxldGUgYWxsIHRoZSAuLi5cIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJQbGVhc2UgY29tcGxldGUgYWxsIHRoZSAuLi5cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInB0XCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwib3JpZ2luXCI6IFwiRGVcIixcbiAgICAgICAgICAgIFwiZGVzdGluYXRpb25cIjogXCJQYXJhXCIsXG4gICAgICAgICAgICBcImRlcGFydHVyZVwiOiBcIlNhw61kYVwiLFxuICAgICAgICAgICAgXCJyZXR1cm5cIjogXCJSZWdyZXNzb1wiLFxuICAgICAgICAgICAgXCJlY29ub21pY1wiOiBcIkNsYXNzZSBlY29uw7RtaWNhXCIsXG4gICAgICAgICAgICBcImJ1c2luZXNzXCI6IFwiQ2xhc3NlIEV4ZWN1dGl2YVwiLFxuICAgICAgICAgICAgXCJzdWJtaXRcIjogXCJCdXNjYXIgdm9vc1wiLFxuICAgICAgICAgICAgXCJhZHVsdHNcIjogXCJBZHVsdG9zXCIsXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IFwiQ3JpYW7Dp2FzXCIsXG4gICAgICAgICAgICBcImluZmFudHNcIiA6IFwiQmViw6pzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlc1wiOiB7XG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwicmVnaW9uYWxcIjoge1xuICAgICAgICAgICAgXCJjbG9zZVRleHRcIjogXCJDZXJyYXJcIixcbiAgICAgICAgICAgIFwicHJldlRleHRcIjogXCImI3gzQztBbnRcIixcbiAgICAgICAgICAgIFwibmV4dFRleHRcIjogXCJTaWcmI3gzRTtcIixcbiAgICAgICAgICAgIFwiY3VycmVudFRleHRcIjogXCJIb3lcIixcbiAgICAgICAgICAgIFwibW9udGhOYW1lc1wiOiBbXCJlbmVyb1wiLFwiZmVicmVyb1wiLFwibWFyem9cIixcImFicmlsXCIsXCJtYXlvXCIsXCJqdW5pb1wiLFxuICAgICAgICAgICAgXCJqdWxpb1wiLFwiYWdvc3RvXCIsXCJzZXB0aWVtYnJlXCIsXCJvY3R1YnJlXCIsXCJub3ZpZW1icmVcIixcImRpY2llbWJyZVwiXSxcbiAgICAgICAgICAgIFwibW9udGhOYW1lc1Nob3J0XCI6IFtcImVuZVwiLFwiZmViXCIsXCJtYXJcIixcImFiclwiLFwibWF5XCIsXCJqdW4nLCdqdWxcIixcImFnb1wiLFwic2VwXCIsXCJvY3RcIixcIm5vdlwiLFwiZGljXCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc1wiOiBbXCJkb21pbmdvXCIsXCJsdW5lc1wiLFwibWFydGVzXCIsXCJtacOpcmNvbGVzJywnanVldmVzXCIsXCJ2aWVybmVzXCIsXCJzw6FiYWRvXCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc1Nob3J0XCI6IFtcImRvbVwiLFwibHVuXCIsXCJtYXJcIixcIm1pw6lcIixcImp1dlwiLFwidmllXCIsXCJzw6FiXCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc01pblwiOiBbXCJEXCIsXCJMXCIsXCJNXCIsXCJYXCIsXCJKXCIsXCJWXCIsXCJTXCJdLFxuICAgICAgICAgICAgXCJ3ZWVrSGVhZGVyXCI6IFwiU21cIixcbiAgICAgICAgICAgIFwiZGF0ZUZvcm1hdFwiOiBcImRkL21tL3l5XCIsXG4gICAgICAgICAgICBcImZpcnN0RGF5XCI6IDEsXG4gICAgICAgICAgICBcImlzUlRMXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzaG93TW9udGhBZnRlclllYXJcIjogZmFsc2UsXG4gICAgICAgICAgICBcInllYXJTdWZmaXhcIjogXCJcIlxuICAgICAgICB9XG5cbiAgICB9LFxuICAgIFwiZW5cIjoge1xuICAgICAgICBcInJlZ2lvbmFsXCIgOiB7fVxuICAgIH0sXG4gICAgXCJwdFwiOiB7XG4gICAgICAgIFwicmVnaW9uYWxcIiA6IHtcbiAgICAgICAgICAgIFwiY2xvc2VUZXh0XCI6IFwiRmVjaGFyXCIsXG4gICAgICAgICAgICBcInByZXZUZXh0XCI6IFwiJiN4M0M7QW50ZXJpb3JcIixcbiAgICAgICAgICAgIFwibmV4dFRleHRcIjogXCJQcsOzeGltbyYjeDNFO1wiLFxuICAgICAgICAgICAgXCJjdXJyZW50VGV4dFwiOiBcIkhvamVcIixcbiAgICAgICAgICAgIFwibW9udGhOYW1lc1wiOiBbXCJKYW5laXJvXCIsXCJGZXZlcmVpcm9cIixcIk1hcsOnb1wiLFwiQWJyaWxcIixcIk1haW9cIixcIkp1bmhvXCIsXCJKdWxob1wiLFwiQWdvc3RvXCIsXCJTZXRlbWJyb1wiLFwiT3V0dWJyb1wiLFwiTm92ZW1icm9cIixcIkRlemVtYnJvXCJdLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzU2hvcnRcIjogW1wiSmFuXCIsXCJGZXZcIixcIk1hclwiLFwiQWJyXCIsXCJNYWlcIixcIkp1blwiLFwiSnVsXCIsXCJBZ29cIixcIlNldFwiLFwiT3V0XCIsXCJOb3ZcIixcIkRlelwiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNcIjogW1wiRG9taW5nb1wiLFwiU2VndW5kYS1mZWlyYVwiLFwiVGVyw6dhLWZlaXJhXCIsXCJRdWFydGEtZmVpcmEnLCdRdWludGEtZmVpcmFcIixcIlNleHRhLWZlaXJhXCIsXCJTw6FiYWRvXCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc1Nob3J0XCI6IFtcIkRvbVwiLFwiU2VnXCIsXCJUZXJcIixcIlF1YVwiLFwiUXVpXCIsXCJTZXhcIixcIlPDoWJcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzTWluXCI6IFtcIkRvbVwiLFwiU2VnXCIsXCJUZXJcIixcIlF1YVwiLFwiUXVpXCIsXCJTZXhcIixcIlPDoWJcIl0sXG4gICAgICAgICAgICBcIndlZWtIZWFkZXJcIjogXCJTbVwiLFxuICAgICAgICAgICAgXCJkYXRlRm9ybWF0XCI6IFwiZGQvbW0veXlcIixcbiAgICAgICAgICAgIFwiZmlyc3REYXlcIjogMCxcbiAgICAgICAgICAgIFwiaXNSVExcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNob3dNb250aEFmdGVyWWVhclwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwieWVhclN1ZmZpeFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcImZuYW1lXCI6IFwiTm9tYnJlXCIsXG4gICAgICAgICAgICBcImxuYW1lXCI6IFwiQXBlbGxpZG9cIixcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJFbWFpbFwiLFxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiUGHDrXNcIixcbiAgICAgICAgICAgIFwiY2l0eVwiOiBcIkNpdWRhZFwiLFxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIk3Ds3ZpbFwiLFxuICAgICAgICAgICAgXCJzdWJzY3JpYmVcIjogXCJTdWJzY3JpYmlyc2VcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwiZm5hbWVcIjogXCJOYW1lXCIsXG4gICAgICAgICAgICBcImxuYW1lXCI6IFwiTGFzdCBOYW1lXCIsXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiRW1haWxcIixcbiAgICAgICAgICAgIFwiY291bnRyeVwiOiBcIkNvdW50cnlcIixcbiAgICAgICAgICAgIFwiY2l0eVwiOiBcIkNpdHlcIixcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCJNb2JpbGVcIixcbiAgICAgICAgICAgIFwic3Vic2NyaWJlXCI6IFwiU3Vic2NyaWJlXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJwdFwiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcImZuYW1lXCI6IFwiTm9tZVwiLFxuICAgICAgICAgICAgXCJsbmFtZVwiOiBcIlNvYnJlbm9tZVwiLFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIkUtbWFpbFwiLFxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiUGHDrXNcIixcbiAgICAgICAgICAgIFwiY2l0eVwiOiBcIkNpZGFkZVwiLFxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIkNlbHVsYXJcIixcbiAgICAgICAgICAgIFwic3Vic2NyaWJlXCI6IFwiSW5zY3JldmVyLXNlXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgRmxpZ2h0Q29udHJvbCA9IHJlcXVpcmUoJy4vRmxpZ2h0Q29udHJvbCcpXG47XG5cbi8qKlxuICogQXV0b2NvbXBsZXRlIHdpZGdldCB3aXRoIGxpc3Qgb2YgQ29wYSdzIGRlc3RpbmF0aW9uc1xuICogZm9yIGJldHRlciB1c2FiaWxpdHkgdGhhbiBhIG5hdGl2ZSBzZWxlY3QgbWVudS5cbiAqIEBjbGFzc1xuICovXG5jbGFzcyBBdXRvY29tcGxldGVcbntcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyBDdXN0b20gb3B0aW9ucyBmb3IgdGhpcyB3aWRnZXQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZGVzdGluYXRpb25zIGZyb20gRmxpZ2h0IENvbnRyb2wgQVBJXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNiIENhbGxiYWNrIHdoZW4gQVBJIGNhbGwgZmluaXNoZXNcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgYW5kIGRlc3RpbmF0aW9ucyBhcmUgZmV0Y2hlZFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3RhcnQoY2IpIHtcbiAgICAgICAgdmFyIGZsaWdodENvbnRyb2wgPSBuZXcgRmxpZ2h0Q29udHJvbCh7IGxhbmc6IHRoaXMub3B0aW9ucy5sYW5nIH0pO1xuXG4gICAgICAgIGZsaWdodENvbnRyb2wuZmV0Y2goJ2Rlc3RpbmF0aW9ucycsIChkZXN0aW5hdGlvbnMpID0+IHtcbiAgICAgICAgICAgIC8vIEZvcm1hdCByYXcgZGVzdGluYXRpb25zIHRvIGF1dG9jb21wbGV0ZSBzdHJ1Y3R1cmVcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zb3VyY2UgPSB0aGlzLmZvcm1hdChkZXN0aW5hdGlvbnMubGlzdCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgYXV0b2NvbXBsZXRlIHdpZGdldFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudCBET00gZWxlbWVudCB0byBhdHRhY2ggd2lkZ2V0IHRvXG4gICAgICovXG4gICAgcmVuZGVyKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJChlbGVtZW50KS5oaWRlKCksXG4gICAgICAgICAgICBzb3VyY2VDbGFzc2VzID0gJHRoaXMuYXR0cignY2xhc3MnKSxcbiAgICAgICAgICAgIHNvdXJjZVZhbHVlID0gJHRoaXMudmFsKCksXG4gICAgICAgICAgICBzb3VyY2VQbGFjZWhvbGRlciA9ICR0aGlzLmF0dHIoJ3BsYWNlaG9sZGVyJyksXG4gICAgICAgICAgICBkYXRhSW5wdXQgPSAkdGhpcy5kYXRhKCdpbnB1dC1maWVsZCcpXG4gICAgICAgIDtcblxuICAgICAgICB2YXIgJGlucHV0ID0gJCgnPGlucHV0IC8+JylcbiAgICAgICAgICAgIC52YWwoc291cmNlVmFsdWUpXG4gICAgICAgICAgICAuYXR0cigndHlwZScsICd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCdwbGFjZWhvbGRlcicsIHNvdXJjZVBsYWNlaG9sZGVyKVxuICAgICAgICAgICAgLmF0dHIoJ2RhdGEtaW5wdXQtZmllbGQnLCBkYXRhSW5wdXQpXG4gICAgICAgIDtcblxuICAgICAgICAvLyBBZGQgYXV0b2NvbXBsZXRlIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgJGlucHV0LmF1dG9jb21wbGV0ZSh0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIC8vIE9wZW4gbGlzdCBvbiBpbnB1dCBmb2N1c1xuICAgICAgICAkaW5wdXQub24oJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCR0aGlzLnZhbCgpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAkdGhpcy5hdXRvY29tcGxldGUoJ3NlYXJjaCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgc3R5bGluZ1xuICAgICAgICAkaW5wdXRcbiAgICAgICAgICAgIC5hZGRDbGFzcyhzb3VyY2VDbGFzc2VzKVxuICAgICAgICAgICAgLmFkZENsYXNzKCd1aS13aWRnZXQgIHVpLXdpZGdldC1jb250ZW50ICB1aS1zdGF0ZS1kZWZhdWx0Jyk7XG5cbiAgICAgICAgLy8gSW5zZXJ0IGludG8gRE9NXG4gICAgICAgICRpbnB1dC5pbnNlcnRBZnRlcigkdGhpcyk7XG5cbiAgICAgICAgLy8gT3ZlcndyaXRlIGF1dG9jb21wbGV0ZSBpdGVtIHJlbmRlcmluZyB3aXRoIGN1c3RvbSBtYXJrdXBcbiAgICAgICAgJGlucHV0LmF1dG9jb21wbGV0ZSgnaW5zdGFuY2UnKS5fcmVuZGVySXRlbSA9IGZ1bmN0aW9uKHVsLCBpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gJCgnPGxpPicpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChpdGVtLmxhYmVsKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyh1bCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ3VzdG9tIGZpbHRlcmluZyBmdW5jdGlvblxuICAgICAgICAkLnVpLmF1dG9jb21wbGV0ZS5maWx0ZXIgPSBmdW5jdGlvbiBhdXRvQ29tcGxldGVGaWx0ZXIoYXJyYXksIHRlcm0pIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgnXFxcXGInICsgJC51aS5hdXRvY29tcGxldGUuZXNjYXBlUmVnZXgodGVybSksICdpJyk7XG4gICAgICAgICAgICByZXR1cm4gJC5ncmVwKGFycmF5LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlci50ZXN0KHZhbHVlLmxhYmVsIHx8IHZhbHVlLnZhbHVlIHx8IHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdHMgZGVzdGluYXRpb25zIGludG8gdGhlIG5lZWRlZCBzdHJ1Y3R1cmUgdG8gYmUgZGlzcGxheWVkXG4gICAgICogb24gdGhlIGF1dG9jb21wbGV0ZSBtZW51IHdpZGdldC5cbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gZGVzdGluYXRpb25zIFJhdyBkYXRhIHJldHVybmVkIGZyb20gRmxpZ2h0IENvbnRyb2xcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICAgIEZvcm1hdHRlZCBkZXN0aW5hdGlvbnNcbiAgICAgKi9cbiAgICBmb3JtYXQoZGVzdGluYXRpb25zKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAkLmVhY2goZGVzdGluYXRpb25zLCAoaSwgZGVzdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRlbXBMYWJlbCA9XG4gICAgICAgICAgICAgICAgICAgIGA8Yj4keyBkZXN0Lm5hbWVbdGhpcy5vcHRpb25zLmxhbmddIH0sICR7IGRlc3QuY291bnRyeSB9PC9iPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvZGVcIj4gfCAkeyBkZXN0LmlkIH08L3NwYW4+YCxcbiAgICAgICAgICAgICAgICB0ZW1wVmFsdWUgPSBkZXN0LmlkLFxuICAgICAgICAgICAgICAgIHRleHRWYWx1ZSA9IGRlc3QubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10gKyAnLCAnICsgZGVzdC5pZDtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogdGVtcExhYmVsLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0ZW1wVmFsdWUsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGV4dFZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbi8qKlxuICogRXhwb3J0XG4gKiBAZXhwb3J0cyBBdXRvY29tcGxldGVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBBdXRvY29tcGxldGU7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIGkxOG4gPSByZXF1aXJlKCcuLi8uLi8uLi9sYW5nL2RhdGVwaWNrZXIuanNvbicpLFxuICAgIGRlZmF1bHRzID0ge1xuICAgICAgICBkZXBhcnR1cmVTZWxlY3RvcjogJy5jb3BhYWlyLWJvb2tpbmctZGF0ZXBpY2tlci1kZXBhcnR1cmUnLFxuICAgICAgICByZXR1cm5TZWxlY3RvcjogJy5jb3BhYWlyLWJvb2tpbmctZGF0ZXBpY2tlci1yZXR1cm4nLFxuICAgICAgICBkYXRlUnVsZXM6IHtcbiAgICAgICAgICAgIHRvZGF5OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgd2Vla0xhdGVyOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKVxuICAgICAgICB9LFxuICAgICAgICBsYW5nOiAnZXMnXG4gICAgfVxuO1xuXG4vKipcbiAqIERhdGVwaWNrZXIgbW9kdWxlXG4gKi9cbmNsYXNzIERhdGVwaWNrZXIge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGRhdGUgcGlja2VyIGluc2lkZSB0aGUgYm9va2luZyBmb3JtXG4gICAgICogc2V0dXBzIHRoZSBkZWZhdWx0cyBkYXRlcyBhbmQgbGFuZ3VhZ2VcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0TG9jYWxlKCk7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdERhdGVzKCk7XG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGRlZmF1bHRzIGRhdGVzXG4gICAgICogdGhpcyBjb25zaXN0IGluIHNldCBjdXJyZW50IGRhdGUgZm9yIGRlcGFydHVyZVxuICAgICAqIGFuZCBvbmUgd2VlayBsYXRlciBmb3IgcmV0dXJuXG4gICAgICovXG4gICAgc2V0RGVmYXVsdERhdGVzKCkge1xuXG4gICAgICAgIHZhciBkYXRlUnVsZXMgPSB0aGlzLm9wdGlvbnMuZGF0ZVJ1bGVzLFxuICAgICAgICAgICAgJGRlcGFydHVyZUZpZWxkID0gJCh0aGlzLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLFxuICAgICAgICAgICAgJHJldHVybkZpZWxkID0gJCh0aGlzLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpO1xuXG5cbiAgICAgICAgJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoe1xuICAgICAgICAgICAgbWluRGF0ZTogbmV3IERhdGUoKVxuICAgICAgICB9KTtcblxuICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcih7XG4gICAgICAgICAgICBtaW5EYXRlOiBuZXcgRGF0ZSgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgICRkZXBhcnR1cmVGaWVsZC5kYXRlcGlja2VyKFwic2V0RGF0ZVwiLCBkYXRlUnVsZXMudG9kYXkpO1xuICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcihcInNldERhdGVcIiwgZGF0ZVJ1bGVzLndlZWtMYXRlcik7XG4gICAgfVxuXG4gICAgZXZlbnRzKCkge1xuICAgICAgICB2YXIgJGRlcGFydHVyZUZpZWxkID0gJCh0aGlzLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLFxuICAgICAgICAgICAgJHJldHVybkZpZWxkID0gJCh0aGlzLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpO1xuXG4gICAgICAgIC8vICRkZXBhcnR1cmVGaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnb25TZWxlY3QnLCB0aGlzLm9uU2VsZWN0T3V0Ym91bmQpO1xuICAgIH1cblxuXG4gICAgb25TZWxlY3RPdXRib3VuZChkYXRlVGV4dCwgaW5zdCkge1xuICAgICAgICAgICAgdmFyICRyZXR1cm5GaWVsZCA9ICQodGhpcy5vcHRpb25zLnJldHVyblNlbGVjdG9yKSxcbiAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoaW5zdC5zZWxlY3RlZFllYXIsIGluc3Quc2VsZWN0ZWRNb250aCwgaW5zdC5zZWxlY3RlZERheSk7XG5cbiAgICAgICAgICAgIC8vdGhpcyBzZXRzIHRoZSBpbmJvdW5kIGRhdGUgcGlja2VyIHRvIGEgd2VlayBsYXRlciBvZiBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgdmFyIHdlZWtsYXRlciA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgJHJldHVybkZpZWxkLmRhdGVwaWNrZXIoJ3NldERhdGUnLCB3ZWVrbGF0ZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmUgZGF0ZXBpY2tlciBkZXBlbmRpbmcgb24gdGhlXG4gICAgICogbG9jYWxpemF0aW9uXG4gICAgICovXG4gICAgc2V0TG9jYWxlKCkge1xuICAgICAgICB2YXIgcmVnaW9uYWwgPSBpMThuW3RoaXMub3B0aW9ucy5sYW5nXS5yZWdpb25hbDtcbiAgICAgICAgJC5kYXRlcGlja2VyLnNldERlZmF1bHRzKHJlZ2lvbmFsKTtcbiAgICB9XG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGVwaWNrZXI7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xucmVxdWlyZSgnc3RvcmUtanMnKTtcblxudmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBhcGk6IHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9ucyA6IFwiaHR0cHM6Ly9mbGlnaHRjb250cm9sLmlvL2FwaS9yb3V0ZXMvZGVzdGluYXRpb25zXCIsXG4gICAgICAgICAgICBjb3VudHJpZXMgOiBcImh0dHBzOi8vZmxpZ2h0Y29udHJvbC5pby9hcGkvcm91dGVzL2NvdW50cmllc1wiLFxuICAgICAgICAgICAgcmVnaW9ucyA6IFwiaHR0cHM6Ly9mbGlnaHRjb250cm9sLmlvL2FwaS9yb3V0ZXMvcmVnaW9uc1wiLFxuICAgICAgICB9LFxuICAgICAgICBzdG9yYWdlRXhwaXJhdGlvbjogODY0MDAwMDAsXG4gICAgICAgIHN0b3JhZ2U6IHRydWUsXG4gICAgfVxuO1xuXG4vKipcbiAqIEV4dGVuc2lvbiB0byB0aGUgc3RvcmFnZSBjbGFzc1xuICogdG8gc2V0dXAgdGhlIGV4cGlyYXRpb24gdmFsdWVcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBzdG9yZVdpZHRoRXhwaXJhdGlvbiA9IHtcbiAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsLCBleHApIHtcbiAgICAgICAgc3RvcmUuc2V0KGtleSwgeyB2YWw6dmFsLCBleHA6ZXhwLCB0aW1lOm5ldyBEYXRlKCkuZ2V0VGltZSgpIH0pXG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgaW5mbyA9IHN0b3JlLmdldChrZXkpXG4gICAgICAgIGlmICghaW5mbykgeyByZXR1cm4gbnVsbCB9XG4gICAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGluZm8udGltZSA+IGluZm8uZXhwKSB7IHJldHVybiBudWxsIH1cbiAgICAgICAgcmV0dXJuIGluZm8udmFsXG4gICAgfVxufVxuXG4vKipcbiAqIE1vZHVsZSBGbGlnaHRDb250cm9sXG4gKi9cbmNsYXNzIEZsaWdodENvbnRyb2wge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgaWYoIXN0b3JlLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdicm93c2VyIG5vdCBzdXBwb3J0ZWQgb3IgaW4gcHJpdmF0ZSBtb2RlJyk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc3RvcmFnZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggZGF0YSBmcm9tIGZsaWdodCBjb250cm9sbGVyXG4gICAgICogYmFzZWQgb24gdGhlIHJlc291cmNlIG5hbWVcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgcmVzb3VyY2VOYW1lOiBkZXN0aW5hdGlvbnN8Y291bnRyaWVzfHJlZ2lvbnNcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2IgIGNhbGxiYWNrXG4gICAgICogQHJldHVybiB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgZmV0Y2gocmVzb3VyY2VOYW1lLCBjYikge1xuICAgICAgICB2YXIgcmVzb3VyY2VWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5zdG9yYWdlICYmIHN0b3JlV2lkdGhFeHBpcmF0aW9uLmdldChyZXNvdXJjZU5hbWUpXG4gICAgICAgICAgICYmIHN0b3JlV2lkdGhFeHBpcmF0aW9uLmdldChyZXNvdXJjZU5hbWUgKyAnLmNvdW50JykpIHtcbiAgICAgICAgICAgIHJlc291cmNlVmFsdWUubGlzdCA9IHN0b3JlV2lkdGhFeHBpcmF0aW9uLmdldChyZXNvdXJjZU5hbWUpO1xuICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5jb3VudCA9IHN0b3JlV2lkdGhFeHBpcmF0aW9uLmdldChyZXNvdXJjZU5hbWUgKyAnLmNvdW50Jyk7XG5cbiAgICAgICAgICAgcmV0dXJuIGNiKHJlc291cmNlVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJC5nZXRKU09OKHRoaXMub3B0aW9ucy5hcGlbcmVzb3VyY2VOYW1lXSwgKGRhdGEpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5zb3J0TmFtZXMoZGF0YSk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5zdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgc3RvcmVXaWR0aEV4cGlyYXRpb24uc2V0KHJlc291cmNlTmFtZSwgZGF0YSwgdGhpcy5vcHRpb25zLnN0b3JhZ2VFeHBpcmF0aW9uKTtcbiAgICAgICAgICAgICAgICBzdG9yZVdpZHRoRXhwaXJhdGlvbi5zZXQocmVzb3VyY2VOYW1lICsgJy5jb3VudCcsIGRhdGEubGVuZ3RoLCB0aGlzLm9wdGlvbnMuc3RvcmFnZUV4cGlyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5saXN0ID0gZGF0YTtcbiAgICAgICAgICAgIHJlc291cmNlVmFsdWUuY291bnQgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgICAgY2IocmVzb3VyY2VWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byBzb3J0IGRhdGFcbiAgICAgKiBiYXNlZCBvbiBsYW5ndWFnZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHNvcnROYW1lcyhkYXRhKSB7XG4gICAgICAgIGRhdGEuc29ydCgoYSwgYik9PntcbiAgICAgICAgICAgIGlmIChhLm5hbWVbdGhpcy5vcHRpb25zLmxhbmddID4gYi5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSkgcmV0dXJuIDE7XG4gICAgICAgICAgICBpZiAoYS5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSA8IGIubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10pIHJldHVybiAtMTtcblxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbGlnaHRDb250cm9sO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgb3JpZ2luOiAnYWxsJyxcbiAgICAgICAgZGVzdGluYXRpb246ICdhbGwnLFxuICAgICAgICAvLyByZXF1aXJlZCBmaWVsZCB0byBzdWJtaXQgZm9ybVxuICAgICAgICAvLyB0byBjb3BhXG4gICAgICAgIGlucHV0czoge1xuICAgICAgICAgICAgdHJpcFR5cGU6IFwiUlRcIixcbiAgICAgICAgICAgIGZsZXhpYmxlU2VhcmNoOiBcInRydWVcIixcbiAgICAgICAgICAgIHBvczogXCJDTUdTXCIsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMF0udHlwZVwiOiBcIkFEVFwiLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzFdLnR5cGVcIjogXCJDTk5cIixcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1syXS50eXBlXCI6IFwiSU5GXCIsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMF0uYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMV0uYW1vdW50XCI6IDAsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMl0uYW1vdW50XCI6IDAsXG4gICAgICAgICAgICBcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiOiBudWxsLFxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiOiBudWxsLFxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCI6IG51bGwsXG4gICAgICAgICAgICBcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlRGF5XCI6IG51bGwsXG4gICAgICAgICAgICBcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCI6IG51bGwsXG4gICAgICAgICAgICAvLyBcImNvdXBvblwiOiBudWxsLFxuICAgICAgICAgICAgLy8gb3JpZ2luXG4gICAgICAgICAgICBcIm91dGJvdW5kT3B0aW9uLm9yaWdpbkxvY2F0aW9uQ29kZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLmRlc3RpbmF0aW9uTG9jYXRpb25Db2RlXCI6IG51bGwsXG4gICAgICAgICAgICAvLyBkZXN0aW5hdGlvblxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLm9yaWdpbkxvY2F0aW9uQ29kZVwiOiBudWxsLFxuICAgICAgICAgICAgLy8gLy8gY2FiaW4gY2xhc3MgQnVzaW5lc3N8RWNvbm9teVxuICAgICAgICAgICAgXCJjYWJpbkNsYXNzXCI6IFwiRWNvbm9teVwiLFxuICAgICAgICAgICAgLy8gZDE6IG51bGwsXG4gICAgICAgICAgICBsYW5nOiAnZXMnXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1Vcmw6ICdodHRwczovL2Jvb2tpbmdzLmNvcGFhaXIuY29tL0NNR1MvJyArXG4gICAgICAgICAgICAgICAgICAgICAgICdBaXJMb3dGYXJlU2VhcmNoRXh0ZXJuYWwuZG8/J1xuICAgIH1cbjtcblxuLyoqXG4gKiBGb3JtSGVscGVyIG1vZHVsZVxuICovXG5jbGFzcyBGb3JtSGVscGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuXG4gICAgICAgIC8vIHNldCBkZWZhdXRscyB2YWx1ZXNcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0Qm91bmRzKCk7XG4gICAgICAgIHRoaXMuc2V0RGF0ZXModGhpcy5vcHRpb25zLmRhdGVwaWNrZXIsIHtyZXR1cm5zOnRydWUsIGRlcGFydHVyZTp0cnVlfSk7XG5cbiAgICAgICAgLy8gbG9hZCBldmVudHMgcmVsYXRlZCB3aXRoIGZvcm0gaGVscGVyIGFuZCBvdGhlciBtb2R1bGVzXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub3B0aW9ucy5pbnB1dHMpO1xuICAgIH1cblxuXG5cbiAgICBwcm9jZXNzKCkge1xuICAgICAgICB2YXIgaHR0cFF1ZXJ5ID0gJC5wYXJhbSh0aGlzLm9wdGlvbnMuaW5wdXRzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaHR0cFF1ZXJ5KTtcbiAgICAgICAgdmFyIHVybCA9IHRoaXMub3B0aW9ucy5mb3JtVXJsO1xuXG4gICAgICAgIHZhciB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uRXJyb3IoKTtcblxuICAgICAgICBpZiAodmFsaWRhdGlvbi5lcnJvcikge1xuICAgICAgICAgICAgLy8gaGFuZGxlIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb24uYmFnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIGVycm9ycywgZm9yd2FyZCBmb3JtIHZhbHVlcyB0byBjb3BhXG4gICAgICAgICAgICB2YXIgc2VhcmNoV2luZG93ID0gd2luZG93Lm9wZW4odXJsICsgaHR0cFF1ZXJ5LCAnX2JsYW5rJyk7XG4gICAgICAgICAgICBzZWFyY2hXaW5kb3cuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldERlZmF1bHRCb3VuZHMoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vcmlnaW4gIT09ICdhbGwnKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvdW5kcygnb3JpZ2luJywgdGhpcy5vcHRpb25zLm9yaWdpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uICE9PSdhbGwnKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvdW5kcygnZGVzdGluYXRpb24nLCB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRCb3VuZHMoYm91bmQsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgaWYgKGJvdW5kID09PSAnb3JpZ2luJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLm9yaWdpbkxvY2F0aW9uQ29kZVwiXSA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24uZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIl0gPSBsb2NhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib3VuZCA9PT0gJ2Rlc3RpbmF0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLmRlc3RpbmF0aW9uTG9jYXRpb25Db2RlXCJdID0gbG9jYXRpb247XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIl0gPSBsb2NhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0RGF0ZXMoZGF0ZXBpY2tlciwgYm91bmRzKSB7XG4gICAgICAgIC8vIGdldCBjdXJyZW50IGRhdGVwaWNrZXJzIGRhdGVzXG4gICAgICAgIHZhciBkZXBhcnR1cmVEYXRlID0gJChkYXRlcGlja2VyLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLmRhdGVwaWNrZXIoJ2dldERhdGUnKSxcbiAgICAgICAgcmV0dXJuRGF0ZSA9ICQoZGF0ZXBpY2tlci5vcHRpb25zLnJldHVyblNlbGVjdG9yKS5kYXRlcGlja2VyKCdnZXREYXRlJyk7XG5cbiAgICAgICAgaWYgKGJvdW5kcy5yZXR1cm5zKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIl0gPSByZXR1cm5EYXRlLmdldFVUQ0RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCJdID0gcmV0dXJuRGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZVllYXJcIl0gPSByZXR1cm5EYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihib3VuZHMuZGVwYXJ0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlRGF5XCJdID0gZGVwYXJ0dXJlRGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIl0gPSBkZXBhcnR1cmVEYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZVllYXJcIl0gPSBkZXBhcnR1cmVEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDYWJpbkNsYXNzKHRhcmdldCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiY2FiaW5DbGFzc1wiXSA9ICQodGFyZ2V0KS52YWwoKTtcbiAgICB9XG5cbiAgICBzZXRQYXNzZW5nZXJzQW1vdW50KHR5cGUsIHZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYWR1bHQnOlxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJndWVzdFR5cGVzWzBdLmFtb3VudFwiXSA9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGlsZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImd1ZXN0VHlwZXNbMV0uYW1vdW50XCJdID0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luZmFudCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImd1ZXN0VHlwZXNbMl0uYW1vdW50XCJdID0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENvdXBvbihjb3Vwb24pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0cy5jb3Vwb24gPSBjb3Vwb247XG4gICAgfVxuXG4gICAgc2V0RDEoZDFWYWx1ZSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzLmQxID0gZDFWYWx1ZTtcbiAgICB9XG5cbiAgICB2YWxpZGF0aW9uRXJyb3IoKSB7XG4gICAgICAgIHZhciBlcnJvcnMgID0ge1xuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgYmFnOltdXG4gICAgICAgIH07XG4gICAgICAgIHZhciBjdXJyZW50RXJyb3I7XG4gICAgICAgIGZvciAodmFyIGlucHV0IGluIHRoaXMub3B0aW9ucy5pbnB1dHMpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLm9wdGlvbnMuaW5wdXRzW2lucHV0XSAmJiB0aGlzLm9wdGlvbnMuaW5wdXRzW2lucHV0XSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvciA9IHt9O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvci5maWVsZCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvci5tZXNzYWdlID0gYFRoZSBpbnB1dCAke2lucHV0fSBtdXN0IGhhdmUgc29tZSB2YWx1ZWA7XG4gICAgICAgICAgICAgICAgZXJyb3JzLmJhZy5wdXNoKGN1cnJlbnRFcnJvcik7XG4gICAgICAgICAgICAgICAgZXJyb3JzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgfTtcblxuICAgIGV2ZW50cygpIHtcblxuICAgICAgICB2YXIgZGF0ZXBpY2tlciA9IHRoaXMub3B0aW9ucy5kYXRlcGlja2VyLFxuICAgICAgICAgICAgJGRlcGFydHVyZUZpZWxkID0gJChkYXRlcGlja2VyLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLFxuICAgICAgICAgICAgJHJldHVybkZpZWxkID0gJChkYXRlcGlja2VyLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpO1xuXG4gICAgICAgICRkZXBhcnR1cmVGaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnb25TZWxlY3QnLCAoZGF0ZVRleHQsIGluc3QpID0+e1xuXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGluc3Quc2VsZWN0ZWRZZWFyLCBpbnN0LnNlbGVjdGVkTW9udGgsIGluc3Quc2VsZWN0ZWREYXkpO1xuXG4gICAgICAgICAgICAvLyB0aGlzIHNldHMgdGhlIGluYm91bmQgZGF0ZSBwaWNrZXIgdG8gYSB3ZWVrIGxhdGVyIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgd2Vla2xhdGVyID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignc2V0RGF0ZScsIHdlZWtsYXRlcik7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ21pbkRhdGUnLCBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0ZXMoZGF0ZXBpY2tlciwge3JldHVybnM6dHJ1ZSwgZGVwYXJ0dXJlOnRydWV9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ29uU2VsZWN0JywgKGRhdGVUZXh0LCBpbnN0KSA9PntcblxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShpbnN0LnNlbGVjdGVkWWVhciwgaW5zdC5zZWxlY3RlZE1vbnRoLCBpbnN0LnNlbGVjdGVkRGF5KTtcblxuICAgICAgICAgICAgLy8gdGhpcyBzZXRzIHRoZSBpbmJvdW5kIGRhdGUgcGlja2VyIHRvIGEgd2VlayBsYXRlciBvZiBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgdmFyIHdlZWtsYXRlciA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlcyhkYXRlcGlja2VyLCB7cmV0dXJuczp0cnVlLCBkZXBhcnR1cmU6ZmFsc2V9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLWNhYmluLWNsYXNzJykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2FiaW5DbGFzcyhlLnRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1hZHVsdHMtYW1vdW50Jykuc2VsZWN0bWVudSh7XG4gICAgICAgICAgICBjaGFuZ2U6IChlLCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFzc2VuZ2Vyc0Ftb3VudCgnYWR1bHQnLCB1aS5pdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLWNoaWxkcmVuLWFtb3VudCcpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgY2hhbmdlOiAoZSwgdWkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhc3NlbmdlcnNBbW91bnQoJ2NoaWxkJywgdWkuaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1pbmZhbnRzLWFtb3VudCcpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgY2hhbmdlOiAoZSwgdWkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhc3NlbmdlcnNBbW91bnQoJ2luZmFudCcsIHVpLml0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtc3VibWl0Jykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2VzcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtSGVscGVyO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGFuZGxlYmFycycpLFxuICAgIGkxOG4gPSB7XG4gICAgICAgIGJvb2tpbmc6IHJlcXVpcmUoJy4uLy4uLy4uL2xhbmcvYm9va2luZy5qc29uJyksXG4gICAgICAgIHNpZ251cDogcmVxdWlyZSgnLi4vLi4vLi4vbGFuZy9zaWdudXAuanNvbicpLFxuICAgIH0sXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIHNyYzogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcycsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHt9XG4gICAgfVxuO1xuXG5jbGFzcyBUZW1wbGF0ZVxue1xuICAgIGNvbnN0cnVjdG9yKHdpZGdldCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgSGFuZGxlYmFycyAhPT0gJ3VuZGVmaW5lZCcgJiYgSGFuZGxlYmFycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGAke3RoaXMub3B0aW9ucy5zcmN9LyR7d2lkZ2V0fS5oYnNgLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh0cGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSB0aGlzLmNvbXBpbGUod2lkZ2V0LCB0cGwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2soaHRtbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGlzIHBsdWdpbiByZXF1aXJlcyBIYW5kbGViYXJzLmpzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21waWxlKHdpZGdldCwgdHBsKSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZSh0cGwpO1xuICAgICAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKGkxOG5bd2lkZ2V0XVt0aGlzLm9wdGlvbnMubGFuZ10pO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVtcGxhdGU7XG4iLCIvLyBDcmVhdGUgdGhlIGRlZmF1bHRzXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIFRlbXBsYXRlID0gcmVxdWlyZSgnLi4vbGliL1RlbXBsYXRlJyksXG4gICAgRmxpZ2h0Q29udHJvbCA9IHJlcXVpcmUoJy4uL2xpYi9GbGlnaHRDb250cm9sJyksXG4gICAgRGF0ZXBpY2tlciA9IHJlcXVpcmUoJy4uL2xpYi9EYXRlcGlja2VyJyksXG4gICAgQXV0b2NvbXBsZXRlID0gcmVxdWlyZSgnLi4vbGliL0F1dG9jb21wbGV0ZScpLFxuICAgIEZvcm1IZWxwZXIgPSByZXF1aXJlKCcuLi9saWIvRm9ybUhlbHBlcicpLFxuICAgIGRlZmF1bHRzID0ge1xuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBvcmlnaW46ICdhbGwnLFxuICAgICAgICBkZXN0aW5hdGlvbjogJ2FsbCcsXG4gICAgICAgIGQxOiBudWxsLFxuICAgICAgICBjb3Vwb246IG51bGwsXG4gICAgICAgIHRlbXBsYXRlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcy9ib29raW5nLmhicycsXG4gICAgICAgIGxhbmd1YWdlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL2xhbmcvJ1xuICAgIH0sXG4gICAgY29wYUFwaVVybHMgPSB7XG4gICAgICAgIGFsbERlc3RpbmF0aW9uczogJ2h0dHBzOi8vY29wYWFwaS5uYnhhcHBzLmNvbS9kZXN0aW5hdGlvbnMvJyxcbiAgICAgICAgY291bnRyeURlc3RpbmF0aW9uczogJ2h0dHBzOi8vY29wYWFwaS5uYnhhcHBzLmNvbS9kZXN0aW5hdGlvbnMvP2NvdW50cnk9J1xuICAgIH1cbjtcblxuXG5jbGFzcyBCb29raW5nIHtcblxuICAgIC8qKlxuICAgICAqIFdpZGdldCBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvciBlbGVtZW50IERPTSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAgT3B0aW9ucyBwYXNzZWQgb24gcGx1Z2luIGluc3RhbmNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRib29raW5nID0gJChlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgbmV3IFRlbXBsYXRlKCdib29raW5nJywge1xuICAgICAgICAgICAgJ2xhbmcnOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoaHRtbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGJvb2tpbmcuaHRtbChodG1sKTtcblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gZmluaXNoZWQsIGJ1aWxkIGFsbCB0aGUgd2lkZ2V0c1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWxlY3RNZW51cygpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0dXAgZGF0ZXBpY2tlclxuICAgICAgICAgICAgICAgIHZhciBkYXRlcGlja2VyID0gbmV3IERhdGVwaWNrZXIoKTtcbiAgICAgICAgICAgICAgICBkYXRlcGlja2VyLnJlbmRlcigpO1xuXG5cbiAgICAgICAgICAgICAgICB2YXIgZm9ybUhlbHBlciA9IG5ldyBGb3JtSGVscGVyKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXBpY2tlcjogZGF0ZXBpY2tlcixcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiB0aGlzLm9wdGlvbnMub3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgY3VzdG9tIHZhbHVlcyBkMSAmIGNvdXBvblxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLmQxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1IZWxwZXIuc2V0RDEodGhpcy5vcHRpb25zLmQxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMuY291cG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1IZWxwZXIuc2V0Q291cG9uKHRoaXMub3B0aW9ucy5jb3Vwb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEF1dG9jb21wbGV0ZSB3aWRnZXRzXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0QXV0b2NvbXBsZXRlKGZvcm1IZWxwZXIpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBCaW5kIGV2ZW50c1xuICAgICAgICAgICAgICAgIHRoaXMuYm9va2luZ0V2ZW50cygpO1xuXG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCBhdXRvY29tcGxldGUgZGVzdGluYXRpb24gd2lkZ2V0c1xuICAgICAqIEBzZWUgbW9kdWxlOkF1dG9jb21wbGV0ZVxuICAgICAqL1xuICAgIGluaXRBdXRvY29tcGxldGUoZm9ybUhlbHBlcikge1xuICAgICAgICAvLyBJbml0IGNsYXNzIHdpdGggb3B0aW9uc1xuICAgICAgICB2YXIgYXV0b2NvbXBsZXRlID0gbmV3IEF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICBsYW5nOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgIHNlbGVjdDogZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIC8vIHNldCBkaXNwbGF5IHZhbHVlIHRvIHRoZSBpbnB1dFxuICAgICAgICAgICAgICAgICQodGhpcykudmFsKHVpLml0ZW0uZGlzcGxheSk7XG4gICAgICAgICAgICAgICAgLy9zZXQgYWN0dWFsIHZhbHVlIGF0IHRoZSBib29raW5nIG9iamVjdFxuICAgICAgICAgICAgICAgIGZvcm1IZWxwZXIuc2V0Qm91bmRzKCQodGhpcykuZGF0YSgnaW5wdXQtZmllbGQnKSwgdWkuaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gQHRvZG8gTWFrZSB0aGlzIGR5bmFtaWNcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbXk6ICdsZWZ0IGJvdHRvbScsXG4gICAgICAgICAgICAgICAgYXQ6ICdsZWZ0IHRvcCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQnVpbGRcbiAgICAgICAgYXV0b2NvbXBsZXRlLnN0YXJ0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLmpzLWJvb2tpbmctYXV0b2NvbXBsZXRlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGUucmVuZGVyKHRoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIHNlbGVjdCBtZW51cyB3aXRoIGN1c3RvbSBVSSB3aWRnZXRzXG4gICAgICovXG4gICAgc2V0dXBTZWxlY3RNZW51cygpIHtcbiAgICAgICAgJCgnLmpzLXNlbGVjdG1lbnUnKS5zZWxlY3RtZW51KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmQgZXZlbnRzIHJlbGF0ZWQgdG8gYm9va2luZyBpbnRlcmFjdGlvblxuICAgICAqL1xuICAgIGJvb2tpbmdFdmVudHMoKSB7XG4gICAgICAgIHZhciAkZm9ybSA9ICQoJy5jb3BhYWlyLWJvb2tpbmcnKTtcbiAgICAgICAgdmFyICR0b2dnbGUgPSAkKCcuanMtY29wYWFpci10b2dnbGUnKTtcblxuICAgICAgICAvLyBTaG93IGJvdHRvbSByb3cgd2hlbiBhbnkgaW5wdXQgZ2V0cyBmb2N1c1xuICAgICAgICB0aGlzLiRib29raW5nLm9uKCdmb2N1cy5jb3BhYWlyJywgJ2lucHV0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJHRvZ2dsZS5yZW1vdmVDbGFzcygnY29wYWFpci1oaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2xpY2tpbmcgYW55d2hlcmUgaW4gdGhlIGRvY3VtZW50IGhpZGVzIGJvdHRvbSByb3dcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrLmNvcGFhaXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkdG9nZ2xlLmFkZENsYXNzKCdjb3BhYWlyLWhpZGRlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTdG9wIHByb3BhZ2F0aW9uIG9mIGNsaWNrcyBpbnNpZGUgdGhlIGZvcm0gdG8gcHJldmVudFxuICAgICAgICAvLyB0cmlnZ2VyaW5nIHRvcCBldmVudC5cbiAgICAgICAgdGhpcy4kYm9va2luZy5vbignY2xpY2suY29wYWFpcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvb2tpbmc7XG4iLCJ2YXIgVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9saWIvVGVtcGxhdGUnKTtcblxuY2xhc3MgU2lnbnVwIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy4kZm9ybSA9ICQoZWxlbWVudCk7XG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbGFuZzogJ2VzJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gTG9hZCB0ZW1wbGF0ZVxuICAgICAgICBuZXcgVGVtcGxhdGUoJ3NpZ251cCcsIHtcbiAgICAgICAgICAgICdsYW5nJzogdGhpcy5vcHRpb25zLmxhbmcsXG4gICAgICAgICAgICBjYWxsYmFjazogKGh0bWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRmb3JtLmh0bWwoaHRtbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ251cDtcbiJdfQ==
