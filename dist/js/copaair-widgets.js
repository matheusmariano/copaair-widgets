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
                    },
                    appendTo: this.$booking
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2luZGV4LmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGEvY29wYWFpci13aWRnZXRzL2Jvd2VyX2NvbXBvbmVudHMvc3RvcmUuanMvc3RvcmUubWluLmpzIiwibGFuZy9ib29raW5nLmpzb24iLCJsYW5nL2RhdGVwaWNrZXIuanNvbiIsImxhbmcvc2lnbnVwLmpzb24iLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9BdXRvY29tcGxldGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9EYXRlcGlja2VyLmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGEvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvRmxpZ2h0Q29udHJvbC5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhL2NvcGFhaXItd2lkZ2V0cy9zcmMvanMvbGliL0Zvcm1IZWxwZXIuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9UZW1wbGF0ZS5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhL2NvcGFhaXItd2lkZ2V0cy9zcmMvanMvd2lkZ2V0cy9Cb29raW5nLmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGEvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL1NpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLEFBQUMsQ0FBQSxVQUFVLE9BQU8sRUFBRTtBQUNoQixnQkFBWSxDQUFDOztBQUViLFFBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7O0FBRTVDLGNBQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9CLE1BQU0sSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7O0FBRXZDLGVBQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUM5QixNQUFNOztBQUVILGVBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNuQjtDQUNKLENBQUEsQ0FBQyxVQUFTLENBQUMsRUFBRTtBQUNWLGdCQUFZLENBQUM7O0FBRWIsUUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDO1FBQ3RDLE1BQU0sR0FBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FDeEM7Ozs7Ozs7O0FBUUQsS0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsU0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFO0FBQ25ELGVBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFXO0FBQ3hCLGdCQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLENBQUMsRUFBRTtBQUN4QyxpQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDckU7U0FDSixDQUFDLENBQUM7S0FDTixDQUFDOztBQUVGLEtBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxHQUFHLFNBQVMsYUFBYSxDQUFDLE9BQU8sRUFBRTtBQUNqRCxlQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBVztBQUN4QixnQkFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixDQUFDLEVBQUU7QUFDdkMsaUJBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ25FO1NBQ0osQ0FBQyxDQUFDO0tBQ04sQ0FBQztDQUNMLENBQUMsQ0FBRTs7Ozs7Ozs7O0FDeENKLENBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFTLENBQUMsR0FBRTtBQUFDLFFBQUc7QUFBQyxhQUFPLENBQUMsSUFBSSxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLGFBQU0sQ0FBQyxDQUFDLENBQUE7S0FBQztHQUFDLElBQUksQ0FBQyxHQUFDLEVBQUU7TUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFFBQVE7TUFBQyxDQUFDLEdBQUMsY0FBYztNQUFDLENBQUMsR0FBQyxRQUFRO01BQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFHLFNBQVMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsUUFBUSxHQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxLQUFDLElBQUUsSUFBSSxLQUFHLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQSxBQUFDLEVBQUMsQ0FBQyxJQUFFLElBQUksS0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFBLEFBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsWUFBVSxFQUFFLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsU0FBUyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsV0FBVyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsUUFBRyxPQUFPLENBQUMsSUFBRSxRQUFRLEVBQUMsT0FBTyxTQUFTLENBQUMsSUFBRztBQUFDLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxhQUFPLENBQUMsSUFBRSxTQUFTLENBQUE7S0FBQztHQUFDLENBQUMsSUFBRyxDQUFDLEVBQUUsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxBQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsUUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxLQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLFlBQVU7QUFBQyxLQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsWUFBVTtBQUFDLFFBQUksQ0FBQyxHQUFDLEVBQUUsQ0FBQyxRQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsT0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtLQUFDLENBQUMsRUFBQyxDQUFDLENBQUEsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFNBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO0FBQUMsVUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFDO0dBQUMsQ0FBQyxLQUFLLElBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUM7UUFBSyxDQUFDLEVBQUMsQ0FBQztRQUF5TyxDQUFDLEVBQXVNLENBQUM7OztVQUFrRSxDQUFDLEdBQVYsVUFBVyxDQUFDLEVBQUM7QUFBQyxlQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUE7T0FBQzs7QUFBeGlCLFVBQUc7QUFBQyxTQUFDLEdBQUMsSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxzQkFBc0IsR0FBQyxDQUFDLEdBQUMseUNBQXVDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtPQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtPQUFDO0FBQUksT0FBQyxHQUFDLFdBQVMsQ0FBQyxFQUFDO0FBQUMsZUFBTyxZQUFVO0FBQUMsY0FBSSxDQUFDLEdBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsUUFBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBO1NBQUMsQ0FBQTtPQUFDOztBQUFDLE9BQUMsR0FBQyxJQUFJLE1BQU0sQ0FBQyx1Q0FBdUMsRUFBQyxHQUFHLENBQUM7QUFBK0QsT0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLGdCQUFPLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFHLFNBQVMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxBQUFDLENBQUEsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsU0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFlBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7T0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFlBQUksQ0FBQyxHQUFDLEVBQUUsQ0FBQyxRQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtTQUFDLENBQUMsRUFBQyxDQUFDLENBQUEsQ0FBQTtPQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsWUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQUMsQ0FBQyxDQUFBOztHQUFDLElBQUc7QUFBQyxRQUFJLENBQUMsR0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLEtBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtHQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxLQUFDLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUMsT0FBTyxNQUFNLElBQUUsV0FBVyxJQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDLE1BQU0sS0FBRyxNQUFNLEdBQUMsTUFBTSxDQUFDLE9BQU8sR0FBQyxDQUFDLEdBQUMsT0FBTyxNQUFNLElBQUUsVUFBVSxJQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFBO0NBQUMsQ0FBQSxDQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUE7Ozs7Ozs7Ozs7QUNEbitFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFnQixDQUFDLENBQUM7aUJBQ3RDLENBQUMsQ0FBQzs7OztBQUlILG9CQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBUyxDQUFDLEVBQUU7QUFDMUMscUJBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDdkIsQ0FBQyxDQUFDO2FBRU47Ozs7OztXQXhIQyxPQUFPOzs7QUEySGIsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Ozs7Ozs7OztBQ3RKekIsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7O0lBRXBDLE1BQU0sR0FFRyxTQUZULE1BQU0sQ0FFSSxPQUFPLEVBQUUsT0FBTzs7OzBCQUYxQixNQUFNOztBQUdKLFFBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV4QixRQUFJLFFBQVEsR0FBRztBQUNYLFlBQUksRUFBRSxJQUFJO0tBQ2IsQ0FBQzs7QUFFRixRQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7O0FBRy9DLFFBQUksUUFBUSxDQUFDLFFBQVEsRUFBRTtBQUNuQixjQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtBQUN6QixnQkFBUSxFQUFFLFVBQUMsSUFBSSxFQUFLO0FBQ2hCLGtCQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekI7S0FDSixDQUFDLENBQUM7Q0FDTjs7QUFJTCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIE5vZGUvQ29tbW9uSlNcbiAgICAgICAgZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG59KGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgQm9va2luZyA9IHJlcXVpcmUoJy4vd2lkZ2V0cy9Cb29raW5nJyksXG4gICAgICAgIFNpZ251cCAgPSByZXF1aXJlKCcuL3dpZGdldHMvU2lnbnVwJylcbiAgICA7XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHdpZGdldHMgdG8galF1ZXJ5IG9iamVjdCBwcm90b3R5cGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBwYXNzZWQgdG8gb3ZlcnJpZGUgZGVmYXVsdHMuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgIEN1cnJlbnQgb2JqZWN0IGluc3RhbmNlXG4gICAgICovXG4gICAgJC5mbi5jb3BhYWlyQm9va2luZyA9IGZ1bmN0aW9uIGNvcGFhaXJCb29raW5nKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghJC5kYXRhKHRoaXMsICdwbHVnaW5fY29wYWFpckJvb2tpbmcnKSkge1xuICAgICAgICAgICAgICAgICQuZGF0YSh0aGlzLCAncGx1Z2luX2NvcGFhaXJCb29raW5nJywgbmV3IEJvb2tpbmcodGhpcywgb3B0aW9ucykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJC5mbi5jb3BhYWlyU2lnbnVwID0gZnVuY3Rpb24gY29wYWFpclNpZ251cChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoISQuZGF0YSh0aGlzLCAncGx1Z2luX2NvcGFhaXJTaWdudXAnKSkge1xuICAgICAgICAgICAgICAgICQuZGF0YSh0aGlzLCAncGx1Z2luX2NvcGFhaXJTaWdudXAnLCBuZXcgU2lnbnVwKHRoaXMsIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn0pKTtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxMC0yMDEzIE1hcmN1cyBXZXN0aW4gKi9cbihmdW5jdGlvbihlKXtmdW5jdGlvbiBvKCl7dHJ5e3JldHVybiByIGluIGUmJmVbcl19Y2F0Y2godCl7cmV0dXJuITF9fXZhciB0PXt9LG49ZS5kb2N1bWVudCxyPVwibG9jYWxTdG9yYWdlXCIsaT1cInNjcmlwdFwiLHM7dC5kaXNhYmxlZD0hMSx0LnZlcnNpb249XCIxLjMuMTdcIix0LnNldD1mdW5jdGlvbihlLHQpe30sdC5nZXQ9ZnVuY3Rpb24oZSx0KXt9LHQuaGFzPWZ1bmN0aW9uKGUpe3JldHVybiB0LmdldChlKSE9PXVuZGVmaW5lZH0sdC5yZW1vdmU9ZnVuY3Rpb24oZSl7fSx0LmNsZWFyPWZ1bmN0aW9uKCl7fSx0LnRyYW5zYWN0PWZ1bmN0aW9uKGUsbixyKXtyPT1udWxsJiYocj1uLG49bnVsbCksbj09bnVsbCYmKG49e30pO3ZhciBpPXQuZ2V0KGUsbik7cihpKSx0LnNldChlLGkpfSx0LmdldEFsbD1mdW5jdGlvbigpe30sdC5mb3JFYWNoPWZ1bmN0aW9uKCl7fSx0LnNlcmlhbGl6ZT1mdW5jdGlvbihlKXtyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZSl9LHQuZGVzZXJpYWxpemU9ZnVuY3Rpb24oZSl7aWYodHlwZW9mIGUhPVwic3RyaW5nXCIpcmV0dXJuIHVuZGVmaW5lZDt0cnl7cmV0dXJuIEpTT04ucGFyc2UoZSl9Y2F0Y2godCl7cmV0dXJuIGV8fHVuZGVmaW5lZH19O2lmKG8oKSlzPWVbcl0sdC5zZXQ9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gbj09PXVuZGVmaW5lZD90LnJlbW92ZShlKToocy5zZXRJdGVtKGUsdC5zZXJpYWxpemUobikpLG4pfSx0LmdldD1mdW5jdGlvbihlLG4pe3ZhciByPXQuZGVzZXJpYWxpemUocy5nZXRJdGVtKGUpKTtyZXR1cm4gcj09PXVuZGVmaW5lZD9uOnJ9LHQucmVtb3ZlPWZ1bmN0aW9uKGUpe3MucmVtb3ZlSXRlbShlKX0sdC5jbGVhcj1mdW5jdGlvbigpe3MuY2xlYXIoKX0sdC5nZXRBbGw9ZnVuY3Rpb24oKXt2YXIgZT17fTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQsbil7ZVt0XT1ufSksZX0sdC5mb3JFYWNoPWZ1bmN0aW9uKGUpe2Zvcih2YXIgbj0wO248cy5sZW5ndGg7bisrKXt2YXIgcj1zLmtleShuKTtlKHIsdC5nZXQocikpfX07ZWxzZSBpZihuLmRvY3VtZW50RWxlbWVudC5hZGRCZWhhdmlvcil7dmFyIHUsYTt0cnl7YT1uZXcgQWN0aXZlWE9iamVjdChcImh0bWxmaWxlXCIpLGEub3BlbigpLGEud3JpdGUoXCI8XCIraStcIj5kb2N1bWVudC53PXdpbmRvdzwvXCIraSsnPjxpZnJhbWUgc3JjPVwiL2Zhdmljb24uaWNvXCI+PC9pZnJhbWU+JyksYS5jbG9zZSgpLHU9YS53LmZyYW1lc1swXS5kb2N1bWVudCxzPXUuY3JlYXRlRWxlbWVudChcImRpdlwiKX1jYXRjaChmKXtzPW4uY3JlYXRlRWxlbWVudChcImRpdlwiKSx1PW4uYm9keX12YXIgbD1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMCk7bi51bnNoaWZ0KHMpLHUuYXBwZW5kQ2hpbGQocykscy5hZGRCZWhhdmlvcihcIiNkZWZhdWx0I3VzZXJEYXRhXCIpLHMubG9hZChyKTt2YXIgaT1lLmFwcGx5KHQsbik7cmV0dXJuIHUucmVtb3ZlQ2hpbGQocyksaX19LGM9bmV3IFJlZ0V4cChcIlshXFxcIiMkJSYnKCkqKywvXFxcXFxcXFw6Ozw9Pj9AW1xcXFxdXmB7fH1+XVwiLFwiZ1wiKTtmdW5jdGlvbiBoKGUpe3JldHVybiBlLnJlcGxhY2UoL15kLyxcIl9fXyQmXCIpLnJlcGxhY2UoYyxcIl9fX1wiKX10LnNldD1sKGZ1bmN0aW9uKGUsbixpKXtyZXR1cm4gbj1oKG4pLGk9PT11bmRlZmluZWQ/dC5yZW1vdmUobik6KGUuc2V0QXR0cmlidXRlKG4sdC5zZXJpYWxpemUoaSkpLGUuc2F2ZShyKSxpKX0pLHQuZ2V0PWwoZnVuY3Rpb24oZSxuLHIpe249aChuKTt2YXIgaT10LmRlc2VyaWFsaXplKGUuZ2V0QXR0cmlidXRlKG4pKTtyZXR1cm4gaT09PXVuZGVmaW5lZD9yOml9KSx0LnJlbW92ZT1sKGZ1bmN0aW9uKGUsdCl7dD1oKHQpLGUucmVtb3ZlQXR0cmlidXRlKHQpLGUuc2F2ZShyKX0pLHQuY2xlYXI9bChmdW5jdGlvbihlKXt2YXIgdD1lLlhNTERvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRyaWJ1dGVzO2UubG9hZChyKTtmb3IodmFyIG49MCxpO2k9dFtuXTtuKyspZS5yZW1vdmVBdHRyaWJ1dGUoaS5uYW1lKTtlLnNhdmUocil9KSx0LmdldEFsbD1mdW5jdGlvbihlKXt2YXIgbj17fTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7bltlXT10fSksbn0sdC5mb3JFYWNoPWwoZnVuY3Rpb24oZSxuKXt2YXIgcj1lLlhNTERvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRyaWJ1dGVzO2Zvcih2YXIgaT0wLHM7cz1yW2ldOysraSluKHMubmFtZSx0LmRlc2VyaWFsaXplKGUuZ2V0QXR0cmlidXRlKHMubmFtZSkpKX0pfXRyeXt2YXIgcD1cIl9fc3RvcmVqc19fXCI7dC5zZXQocCxwKSx0LmdldChwKSE9cCYmKHQuZGlzYWJsZWQ9ITApLHQucmVtb3ZlKHApfWNhdGNoKGYpe3QuZGlzYWJsZWQ9ITB9dC5lbmFibGVkPSF0LmRpc2FibGVkLHR5cGVvZiBtb2R1bGUhPVwidW5kZWZpbmVkXCImJm1vZHVsZS5leHBvcnRzJiZ0aGlzLm1vZHVsZSE9PW1vZHVsZT9tb2R1bGUuZXhwb3J0cz10OnR5cGVvZiBkZWZpbmU9PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZD9kZWZpbmUodCk6ZS5zdG9yZT10fSkoRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpKSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwib3JpZ2luXCI6IFwiRGVzZGVcIixcbiAgICAgICAgICAgIFwiZGVzdGluYXRpb25cIjogXCJIYWNpYVwiLFxuICAgICAgICAgICAgXCJkZXBhcnR1cmVcIjogXCJTYWxpZGFcIixcbiAgICAgICAgICAgIFwicmV0dXJuXCI6IFwiUmVncmVzb1wiLFxuICAgICAgICAgICAgXCJlY29ub21pY1wiOiBcIkNsYXNlIEVjb27Ds21pY2FcIixcbiAgICAgICAgICAgIFwiYnVzaW5lc3NcIjogXCJDbGFzZSBFamVjdXRpdmFcIixcbiAgICAgICAgICAgIFwic3VibWl0XCI6IFwiVmVyIFZ1ZWxvc1wiLFxuICAgICAgICAgICAgXCJhZHVsdHNcIjogXCJBZHVsdG9zXCIsXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IFwiTmnDsW9zXCIsXG4gICAgICAgICAgICBcImluZmFudHNcIiA6IFwiSW5mYW50ZXNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1lc3NhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibm90aWZpY2F0aW9uXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJlblwiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcIm9yaWdpblwiOiBcIkZyb21cIixcbiAgICAgICAgICAgIFwiZGVzdGluYXRpb25cIjogXCJUb1wiLFxuICAgICAgICAgICAgXCJkZXBhcnR1cmVcIjogXCJEZXBhcnR1cmVcIixcbiAgICAgICAgICAgIFwicmV0dXJuXCI6IFwiUmV0dXJuXCIsXG4gICAgICAgICAgICBcImVjb25vbWljXCI6IFwiQnVzaW5lc3MgQ2xhc3NcIixcbiAgICAgICAgICAgIFwiYnVzaW5lc3NcIjogXCJFY29ub215IENsYXNzXCIsXG4gICAgICAgICAgICBcInN1Ym1pdFwiOiBcIkZpbmQgZmxpZ2h0c1wiLFxuICAgICAgICAgICAgXCJhZHVsdHNcIjogXCJBZHVsdHNcIixcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogXCJDaGlsZHJlblwiLFxuICAgICAgICAgICAgXCJpbmZhbnRzXCIgOiBcIkluZmFudHNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1lc3NhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibm90aWZpY2F0aW9uXCI6IFwiUGxlYXNlIGNvbXBsZXRlIGFsbCB0aGUgLi4uXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiUGxlYXNlIGNvbXBsZXRlIGFsbCB0aGUgLi4uXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJwdFwiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcIm9yaWdpblwiOiBcIkRlXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uXCI6IFwiUGFyYVwiLFxuICAgICAgICAgICAgXCJkZXBhcnR1cmVcIjogXCJTYcOtZGFcIixcbiAgICAgICAgICAgIFwicmV0dXJuXCI6IFwiUmVncmVzc29cIixcbiAgICAgICAgICAgIFwiZWNvbm9taWNcIjogXCJDbGFzc2UgZWNvbsO0bWljYVwiLFxuICAgICAgICAgICAgXCJidXNpbmVzc1wiOiBcIkNsYXNzZSBFeGVjdXRpdmFcIixcbiAgICAgICAgICAgIFwic3VibWl0XCI6IFwiQnVzY2FyIHZvb3NcIixcbiAgICAgICAgICAgIFwiYWR1bHRzXCI6IFwiQWR1bHRvc1wiLFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBcIkNyaWFuw6dhc1wiLFxuICAgICAgICAgICAgXCJpbmZhbnRzXCIgOiBcIkJlYsOqc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWVzc2FnZXNcIjoge1xuICAgICAgICAgICAgXCJub3RpZmljYXRpb25cIjogXCJQb3IgZmF2b3IgY29tcGxldGEgdG9kb3MgbG9zIGNhbXBvcy5cIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJQb3IgZmF2b3IgY29tcGxldGEgdG9kb3MgbG9zIGNhbXBvcy5cIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiZXNcIjoge1xuICAgICAgICBcInJlZ2lvbmFsXCI6IHtcbiAgICAgICAgICAgIFwiY2xvc2VUZXh0XCI6IFwiQ2VycmFyXCIsXG4gICAgICAgICAgICBcInByZXZUZXh0XCI6IFwiJiN4M0M7QW50XCIsXG4gICAgICAgICAgICBcIm5leHRUZXh0XCI6IFwiU2lnJiN4M0U7XCIsXG4gICAgICAgICAgICBcImN1cnJlbnRUZXh0XCI6IFwiSG95XCIsXG4gICAgICAgICAgICBcIm1vbnRoTmFtZXNcIjogW1wiZW5lcm9cIixcImZlYnJlcm9cIixcIm1hcnpvXCIsXCJhYnJpbFwiLFwibWF5b1wiLFwianVuaW9cIixcbiAgICAgICAgICAgIFwianVsaW9cIixcImFnb3N0b1wiLFwic2VwdGllbWJyZVwiLFwib2N0dWJyZVwiLFwibm92aWVtYnJlXCIsXCJkaWNpZW1icmVcIl0sXG4gICAgICAgICAgICBcIm1vbnRoTmFtZXNTaG9ydFwiOiBbXCJlbmVcIixcImZlYlwiLFwibWFyXCIsXCJhYnJcIixcIm1heVwiLFwianVuJywnanVsXCIsXCJhZ29cIixcInNlcFwiLFwib2N0XCIsXCJub3ZcIixcImRpY1wiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNcIjogW1wiZG9taW5nb1wiLFwibHVuZXNcIixcIm1hcnRlc1wiLFwibWnDqXJjb2xlcycsJ2p1ZXZlc1wiLFwidmllcm5lc1wiLFwic8OhYmFkb1wiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNTaG9ydFwiOiBbXCJkb21cIixcImx1blwiLFwibWFyXCIsXCJtacOpXCIsXCJqdXZcIixcInZpZVwiLFwic8OhYlwiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNNaW5cIjogW1wiRFwiLFwiTFwiLFwiTVwiLFwiWFwiLFwiSlwiLFwiVlwiLFwiU1wiXSxcbiAgICAgICAgICAgIFwid2Vla0hlYWRlclwiOiBcIlNtXCIsXG4gICAgICAgICAgICBcImRhdGVGb3JtYXRcIjogXCJkZC9tbS95eVwiLFxuICAgICAgICAgICAgXCJmaXJzdERheVwiOiAxLFxuICAgICAgICAgICAgXCJpc1JUTFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2hvd01vbnRoQWZ0ZXJZZWFyXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ5ZWFyU3VmZml4XCI6IFwiXCJcbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJyZWdpb25hbFwiIDoge31cbiAgICB9LFxuICAgIFwicHRcIjoge1xuICAgICAgICBcInJlZ2lvbmFsXCIgOiB7XG4gICAgICAgICAgICBcImNsb3NlVGV4dFwiOiBcIkZlY2hhclwiLFxuICAgICAgICAgICAgXCJwcmV2VGV4dFwiOiBcIiYjeDNDO0FudGVyaW9yXCIsXG4gICAgICAgICAgICBcIm5leHRUZXh0XCI6IFwiUHLDs3hpbW8mI3gzRTtcIixcbiAgICAgICAgICAgIFwiY3VycmVudFRleHRcIjogXCJIb2plXCIsXG4gICAgICAgICAgICBcIm1vbnRoTmFtZXNcIjogW1wiSmFuZWlyb1wiLFwiRmV2ZXJlaXJvXCIsXCJNYXLDp29cIixcIkFicmlsXCIsXCJNYWlvXCIsXCJKdW5ob1wiLFwiSnVsaG9cIixcIkFnb3N0b1wiLFwiU2V0ZW1icm9cIixcIk91dHVicm9cIixcIk5vdmVtYnJvXCIsXCJEZXplbWJyb1wiXSxcbiAgICAgICAgICAgIFwibW9udGhOYW1lc1Nob3J0XCI6IFtcIkphblwiLFwiRmV2XCIsXCJNYXJcIixcIkFiclwiLFwiTWFpXCIsXCJKdW5cIixcIkp1bFwiLFwiQWdvXCIsXCJTZXRcIixcIk91dFwiLFwiTm92XCIsXCJEZXpcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzXCI6IFtcIkRvbWluZ29cIixcIlNlZ3VuZGEtZmVpcmFcIixcIlRlcsOnYS1mZWlyYVwiLFwiUXVhcnRhLWZlaXJhJywnUXVpbnRhLWZlaXJhXCIsXCJTZXh0YS1mZWlyYVwiLFwiU8OhYmFkb1wiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNTaG9ydFwiOiBbXCJEb21cIixcIlNlZ1wiLFwiVGVyXCIsXCJRdWFcIixcIlF1aVwiLFwiU2V4XCIsXCJTw6FiXCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc01pblwiOiBbXCJEb21cIixcIlNlZ1wiLFwiVGVyXCIsXCJRdWFcIixcIlF1aVwiLFwiU2V4XCIsXCJTw6FiXCJdLFxuICAgICAgICAgICAgXCJ3ZWVrSGVhZGVyXCI6IFwiU21cIixcbiAgICAgICAgICAgIFwiZGF0ZUZvcm1hdFwiOiBcImRkL21tL3l5XCIsXG4gICAgICAgICAgICBcImZpcnN0RGF5XCI6IDAsXG4gICAgICAgICAgICBcImlzUlRMXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzaG93TW9udGhBZnRlclllYXJcIjogZmFsc2UsXG4gICAgICAgICAgICBcInllYXJTdWZmaXhcIjogXCJcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiZXNcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJmbmFtZVwiOiBcIk5vbWJyZVwiLFxuICAgICAgICAgICAgXCJsbmFtZVwiOiBcIkFwZWxsaWRvXCIsXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiRW1haWxcIixcbiAgICAgICAgICAgIFwiY291bnRyeVwiOiBcIlBhw61zXCIsXG4gICAgICAgICAgICBcImNpdHlcIjogXCJDaXVkYWRcIixcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCJNw7N2aWxcIixcbiAgICAgICAgICAgIFwic3Vic2NyaWJlXCI6IFwiU3Vic2NyaWJpcnNlXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJlblwiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcImZuYW1lXCI6IFwiTmFtZVwiLFxuICAgICAgICAgICAgXCJsbmFtZVwiOiBcIkxhc3QgTmFtZVwiLFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIkVtYWlsXCIsXG4gICAgICAgICAgICBcImNvdW50cnlcIjogXCJDb3VudHJ5XCIsXG4gICAgICAgICAgICBcImNpdHlcIjogXCJDaXR5XCIsXG4gICAgICAgICAgICBcInBob25lXCI6IFwiTW9iaWxlXCIsXG4gICAgICAgICAgICBcInN1YnNjcmliZVwiOiBcIlN1YnNjcmliZVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicHRcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJmbmFtZVwiOiBcIk5vbWVcIixcbiAgICAgICAgICAgIFwibG5hbWVcIjogXCJTb2JyZW5vbWVcIixcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJFLW1haWxcIixcbiAgICAgICAgICAgIFwiY291bnRyeVwiOiBcIlBhw61zXCIsXG4gICAgICAgICAgICBcImNpdHlcIjogXCJDaWRhZGVcIixcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCJDZWx1bGFyXCIsXG4gICAgICAgICAgICBcInN1YnNjcmliZVwiOiBcIkluc2NyZXZlci1zZVwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIEZsaWdodENvbnRyb2wgPSByZXF1aXJlKCcuL0ZsaWdodENvbnRyb2wnKVxuO1xuXG4vKipcbiAqIEF1dG9jb21wbGV0ZSB3aWRnZXQgd2l0aCBsaXN0IG9mIENvcGEncyBkZXN0aW5hdGlvbnNcbiAqIGZvciBiZXR0ZXIgdXNhYmlsaXR5IHRoYW4gYSBuYXRpdmUgc2VsZWN0IG1lbnUuXG4gKiBAY2xhc3NcbiAqL1xuY2xhc3MgQXV0b2NvbXBsZXRlXG57XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgQ3VzdG9tIG9wdGlvbnMgZm9yIHRoaXMgd2lkZ2V0IGluc3RhbmNlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGRlc3RpbmF0aW9ucyBmcm9tIEZsaWdodCBDb250cm9sIEFQSVxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYiBDYWxsYmFjayB3aGVuIEFQSSBjYWxsIGZpbmlzaGVzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgIGFuZCBkZXN0aW5hdGlvbnMgYXJlIGZldGNoZWRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHN0YXJ0KGNiKSB7XG4gICAgICAgIHZhciBmbGlnaHRDb250cm9sID0gbmV3IEZsaWdodENvbnRyb2woeyBsYW5nOiB0aGlzLm9wdGlvbnMubGFuZyB9KTtcblxuICAgICAgICBmbGlnaHRDb250cm9sLmZldGNoKCdkZXN0aW5hdGlvbnMnLCAoZGVzdGluYXRpb25zKSA9PiB7XG4gICAgICAgICAgICAvLyBGb3JtYXQgcmF3IGRlc3RpbmF0aW9ucyB0byBhdXRvY29tcGxldGUgc3RydWN0dXJlXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc291cmNlID0gdGhpcy5mb3JtYXQoZGVzdGluYXRpb25zLmxpc3QpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGF1dG9jb21wbGV0ZSB3aWRnZXRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnQgRE9NIGVsZW1lbnQgdG8gYXR0YWNoIHdpZGdldCB0b1xuICAgICAqL1xuICAgIHJlbmRlcihlbGVtZW50KSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQoZWxlbWVudCkuaGlkZSgpLFxuICAgICAgICAgICAgc291cmNlQ2xhc3NlcyA9ICR0aGlzLmF0dHIoJ2NsYXNzJyksXG4gICAgICAgICAgICBzb3VyY2VWYWx1ZSA9ICR0aGlzLnZhbCgpLFxuICAgICAgICAgICAgc291cmNlUGxhY2Vob2xkZXIgPSAkdGhpcy5hdHRyKCdwbGFjZWhvbGRlcicpLFxuICAgICAgICAgICAgZGF0YUlucHV0ID0gJHRoaXMuZGF0YSgnaW5wdXQtZmllbGQnKVxuICAgICAgICA7XG5cbiAgICAgICAgdmFyICRpbnB1dCA9ICQoJzxpbnB1dCAvPicpXG4gICAgICAgICAgICAudmFsKHNvdXJjZVZhbHVlKVxuICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigncGxhY2Vob2xkZXInLCBzb3VyY2VQbGFjZWhvbGRlcilcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLWlucHV0LWZpZWxkJywgZGF0YUlucHV0KVxuICAgICAgICA7XG5cbiAgICAgICAgLy8gQWRkIGF1dG9jb21wbGV0ZSBmdW5jdGlvbmFsaXR5XG4gICAgICAgICRpbnB1dC5hdXRvY29tcGxldGUodGhpcy5vcHRpb25zKTtcblxuICAgICAgICAvLyBPcGVuIGxpc3Qgb24gaW5wdXQgZm9jdXNcbiAgICAgICAgJGlucHV0Lm9uKCdmb2N1cycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmICgkdGhpcy52YWwoKS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgJHRoaXMuYXV0b2NvbXBsZXRlKCdzZWFyY2gnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIHN0eWxpbmdcbiAgICAgICAgJGlucHV0XG4gICAgICAgICAgICAuYWRkQ2xhc3Moc291cmNlQ2xhc3NlcylcbiAgICAgICAgICAgIC5hZGRDbGFzcygndWktd2lkZ2V0ICB1aS13aWRnZXQtY29udGVudCAgdWktc3RhdGUtZGVmYXVsdCcpO1xuXG4gICAgICAgIC8vIEluc2VydCBpbnRvIERPTVxuICAgICAgICAkaW5wdXQuaW5zZXJ0QWZ0ZXIoJHRoaXMpO1xuXG4gICAgICAgIC8vIE92ZXJ3cml0ZSBhdXRvY29tcGxldGUgaXRlbSByZW5kZXJpbmcgd2l0aCBjdXN0b20gbWFya3VwXG4gICAgICAgICRpbnB1dC5hdXRvY29tcGxldGUoJ2luc3RhbmNlJykuX3JlbmRlckl0ZW0gPSBmdW5jdGlvbih1bCwgaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuICQoJzxsaT4nKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoaXRlbS5sYWJlbClcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8odWwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEN1c3RvbSBmaWx0ZXJpbmcgZnVuY3Rpb25cbiAgICAgICAgJC51aS5hdXRvY29tcGxldGUuZmlsdGVyID0gZnVuY3Rpb24gYXV0b0NvbXBsZXRlRmlsdGVyKGFycmF5LCB0ZXJtKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJ1xcXFxiJyArICQudWkuYXV0b2NvbXBsZXRlLmVzY2FwZVJlZ2V4KHRlcm0pLCAnaScpO1xuICAgICAgICAgICAgcmV0dXJuICQuZ3JlcChhcnJheSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXIudGVzdCh2YWx1ZS5sYWJlbCB8fCB2YWx1ZS52YWx1ZSB8fCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXRzIGRlc3RpbmF0aW9ucyBpbnRvIHRoZSBuZWVkZWQgc3RydWN0dXJlIHRvIGJlIGRpc3BsYXllZFxuICAgICAqIG9uIHRoZSBhdXRvY29tcGxldGUgbWVudSB3aWRnZXQuXG4gICAgICogQHBhcmFtICB7QXJyYXl9IGRlc3RpbmF0aW9ucyBSYXcgZGF0YSByZXR1cm5lZCBmcm9tIEZsaWdodCBDb250cm9sXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgICBGb3JtYXR0ZWQgZGVzdGluYXRpb25zXG4gICAgICovXG4gICAgZm9ybWF0KGRlc3RpbmF0aW9ucykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgJC5lYWNoKGRlc3RpbmF0aW9ucywgKGksIGRlc3QpID0+IHtcbiAgICAgICAgICAgIGxldCB0ZW1wTGFiZWwgPVxuICAgICAgICAgICAgICAgICAgICBgPGI+JHsgZGVzdC5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSB9LCAkeyBkZXN0LmNvdW50cnkgfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2RlXCI+IHwgJHsgZGVzdC5pZCB9PC9zcGFuPmAsXG4gICAgICAgICAgICAgICAgdGVtcFZhbHVlID0gZGVzdC5pZCxcbiAgICAgICAgICAgICAgICB0ZXh0VmFsdWUgPSBkZXN0Lm5hbWVbdGhpcy5vcHRpb25zLmxhbmddICsgJywgJyArIGRlc3QuaWQ7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHRlbXBMYWJlbCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGVtcFZhbHVlLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRleHRWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4vKipcbiAqIEV4cG9ydFxuICogQGV4cG9ydHMgQXV0b2NvbXBsZXRlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gQXV0b2NvbXBsZXRlO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBpMThuID0gcmVxdWlyZSgnLi4vLi4vLi4vbGFuZy9kYXRlcGlja2VyLmpzb24nKSxcbiAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgZGVwYXJ0dXJlU2VsZWN0b3I6ICcuY29wYWFpci1ib29raW5nLWRhdGVwaWNrZXItZGVwYXJ0dXJlJyxcbiAgICAgICAgcmV0dXJuU2VsZWN0b3I6ICcuY29wYWFpci1ib29raW5nLWRhdGVwaWNrZXItcmV0dXJuJyxcbiAgICAgICAgZGF0ZVJ1bGVzOiB7XG4gICAgICAgICAgICB0b2RheTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIHdlZWtMYXRlcjogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMClcbiAgICAgICAgfSxcbiAgICAgICAgbGFuZzogJ2VzJ1xuICAgIH1cbjtcblxuLyoqXG4gKiBEYXRlcGlja2VyIG1vZHVsZVxuICovXG5jbGFzcyBEYXRlcGlja2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBkYXRlIHBpY2tlciBpbnNpZGUgdGhlIGJvb2tpbmcgZm9ybVxuICAgICAqIHNldHVwcyB0aGUgZGVmYXVsdHMgZGF0ZXMgYW5kIGxhbmd1YWdlXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnNldExvY2FsZSgpO1xuICAgICAgICB0aGlzLnNldERlZmF1bHREYXRlcygpO1xuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBkZWZhdWx0cyBkYXRlc1xuICAgICAqIHRoaXMgY29uc2lzdCBpbiBzZXQgY3VycmVudCBkYXRlIGZvciBkZXBhcnR1cmVcbiAgICAgKiBhbmQgb25lIHdlZWsgbGF0ZXIgZm9yIHJldHVyblxuICAgICAqL1xuICAgIHNldERlZmF1bHREYXRlcygpIHtcblxuICAgICAgICB2YXIgZGF0ZVJ1bGVzID0gdGhpcy5vcHRpb25zLmRhdGVSdWxlcyxcbiAgICAgICAgICAgICRkZXBhcnR1cmVGaWVsZCA9ICQodGhpcy5vcHRpb25zLmRlcGFydHVyZVNlbGVjdG9yKSxcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZCA9ICQodGhpcy5vcHRpb25zLnJldHVyblNlbGVjdG9yKTtcblxuXG4gICAgICAgICRkZXBhcnR1cmVGaWVsZC5kYXRlcGlja2VyKHtcbiAgICAgICAgICAgIG1pbkRhdGU6IG5ldyBEYXRlKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHJldHVybkZpZWxkLmRhdGVwaWNrZXIoe1xuICAgICAgICAgICAgbWluRGF0ZTogbmV3IERhdGUoKVxuICAgICAgICB9KTtcblxuICAgICAgICAkZGVwYXJ0dXJlRmllbGQuZGF0ZXBpY2tlcihcInNldERhdGVcIiwgZGF0ZVJ1bGVzLnRvZGF5KTtcbiAgICAgICAgJHJldHVybkZpZWxkLmRhdGVwaWNrZXIoXCJzZXREYXRlXCIsIGRhdGVSdWxlcy53ZWVrTGF0ZXIpO1xuICAgIH1cblxuICAgIGV2ZW50cygpIHtcbiAgICAgICAgdmFyICRkZXBhcnR1cmVGaWVsZCA9ICQodGhpcy5vcHRpb25zLmRlcGFydHVyZVNlbGVjdG9yKSxcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZCA9ICQodGhpcy5vcHRpb25zLnJldHVyblNlbGVjdG9yKTtcblxuICAgICAgICAvLyAkZGVwYXJ0dXJlRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ29uU2VsZWN0JywgdGhpcy5vblNlbGVjdE91dGJvdW5kKTtcbiAgICB9XG5cblxuICAgIG9uU2VsZWN0T3V0Ym91bmQoZGF0ZVRleHQsIGluc3QpIHtcbiAgICAgICAgICAgIHZhciAkcmV0dXJuRmllbGQgPSAkKHRoaXMub3B0aW9ucy5yZXR1cm5TZWxlY3RvciksXG4gICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGluc3Quc2VsZWN0ZWRZZWFyLCBpbnN0LnNlbGVjdGVkTW9udGgsIGluc3Quc2VsZWN0ZWREYXkpO1xuXG4gICAgICAgICAgICAvL3RoaXMgc2V0cyB0aGUgaW5ib3VuZCBkYXRlIHBpY2tlciB0byBhIHdlZWsgbGF0ZXIgb2YgY3VycmVudCBzZWxlY3Rpb25cbiAgICAgICAgICAgIHZhciB3ZWVrbGF0ZXIgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKCdzZXREYXRlJywgd2Vla2xhdGVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29uZmlndXJlIGRhdGVwaWNrZXIgZGVwZW5kaW5nIG9uIHRoZVxuICAgICAqIGxvY2FsaXphdGlvblxuICAgICAqL1xuICAgIHNldExvY2FsZSgpIHtcbiAgICAgICAgdmFyIHJlZ2lvbmFsID0gaTE4blt0aGlzLm9wdGlvbnMubGFuZ10ucmVnaW9uYWw7XG4gICAgICAgICQuZGF0ZXBpY2tlci5zZXREZWZhdWx0cyhyZWdpb25hbCk7XG4gICAgfVxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEYXRlcGlja2VyO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnJlcXVpcmUoJ3N0b3JlLWpzJyk7XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgYXBpOiB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbnMgOiBcImh0dHBzOi8vZmxpZ2h0Y29udHJvbC5pby9hcGkvcm91dGVzL2Rlc3RpbmF0aW9uc1wiLFxuICAgICAgICAgICAgY291bnRyaWVzIDogXCJodHRwczovL2ZsaWdodGNvbnRyb2wuaW8vYXBpL3JvdXRlcy9jb3VudHJpZXNcIixcbiAgICAgICAgICAgIHJlZ2lvbnMgOiBcImh0dHBzOi8vZmxpZ2h0Y29udHJvbC5pby9hcGkvcm91dGVzL3JlZ2lvbnNcIixcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcmFnZUV4cGlyYXRpb246IDg2NDAwMDAwLFxuICAgICAgICBzdG9yYWdlOiB0cnVlLFxuICAgIH1cbjtcblxuLyoqXG4gKiBFeHRlbnNpb24gdG8gdGhlIHN0b3JhZ2UgY2xhc3NcbiAqIHRvIHNldHVwIHRoZSBleHBpcmF0aW9uIHZhbHVlXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgc3RvcmVXaWR0aEV4cGlyYXRpb24gPSB7XG4gICAgc2V0OiBmdW5jdGlvbihrZXksIHZhbCwgZXhwKSB7XG4gICAgICAgIHN0b3JlLnNldChrZXksIHsgdmFsOnZhbCwgZXhwOmV4cCwgdGltZTpuZXcgRGF0ZSgpLmdldFRpbWUoKSB9KVxuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgdmFyIGluZm8gPSBzdG9yZS5nZXQoa2V5KVxuICAgICAgICBpZiAoIWluZm8pIHsgcmV0dXJuIG51bGwgfVxuICAgICAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBpbmZvLnRpbWUgPiBpbmZvLmV4cCkgeyByZXR1cm4gbnVsbCB9XG4gICAgICAgIHJldHVybiBpbmZvLnZhbFxuICAgIH1cbn1cblxuLyoqXG4gKiBNb2R1bGUgRmxpZ2h0Q29udHJvbFxuICovXG5jbGFzcyBGbGlnaHRDb250cm9sIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuXG4gICAgICAgIGlmKCFzdG9yZS5lbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYnJvd3NlciBub3Qgc3VwcG9ydGVkIG9yIGluIHByaXZhdGUgbW9kZScpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0b3JhZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIGRhdGEgZnJvbSBmbGlnaHQgY29udHJvbGxlclxuICAgICAqIGJhc2VkIG9uIHRoZSByZXNvdXJjZSBuYW1lXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgIHJlc291cmNlTmFtZTogZGVzdGluYXRpb25zfGNvdW50cmllc3xyZWdpb25zXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNiICBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGZldGNoKHJlc291cmNlTmFtZSwgY2IpIHtcbiAgICAgICAgdmFyIHJlc291cmNlVmFsdWUgPSB7fTtcblxuICAgICAgICBpZih0aGlzLm9wdGlvbnMuc3RvcmFnZSAmJiBzdG9yZVdpZHRoRXhwaXJhdGlvbi5nZXQocmVzb3VyY2VOYW1lKVxuICAgICAgICAgICAmJiBzdG9yZVdpZHRoRXhwaXJhdGlvbi5nZXQocmVzb3VyY2VOYW1lICsgJy5jb3VudCcpKSB7XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmxpc3QgPSBzdG9yZVdpZHRoRXhwaXJhdGlvbi5nZXQocmVzb3VyY2VOYW1lKTtcbiAgICAgICAgICAgIHJlc291cmNlVmFsdWUuY291bnQgPSBzdG9yZVdpZHRoRXhwaXJhdGlvbi5nZXQocmVzb3VyY2VOYW1lICsgJy5jb3VudCcpO1xuXG4gICAgICAgICAgIHJldHVybiBjYihyZXNvdXJjZVZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQuZ2V0SlNPTih0aGlzLm9wdGlvbnMuYXBpW3Jlc291cmNlTmFtZV0sIChkYXRhKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuc29ydE5hbWVzKGRhdGEpO1xuXG4gICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMuc3RvcmFnZSkge1xuICAgICAgICAgICAgICAgIHN0b3JlV2lkdGhFeHBpcmF0aW9uLnNldChyZXNvdXJjZU5hbWUsIGRhdGEsIHRoaXMub3B0aW9ucy5zdG9yYWdlRXhwaXJhdGlvbik7XG4gICAgICAgICAgICAgICAgc3RvcmVXaWR0aEV4cGlyYXRpb24uc2V0KHJlc291cmNlTmFtZSArICcuY291bnQnLCBkYXRhLmxlbmd0aCwgdGhpcy5vcHRpb25zLnN0b3JhZ2VFeHBpcmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc291cmNlVmFsdWUubGlzdCA9IGRhdGE7XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmNvdW50ID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGNiKHJlc291cmNlVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gc29ydCBkYXRhXG4gICAgICogYmFzZWQgb24gbGFuZ3VhZ2VcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBzb3J0TmFtZXMoZGF0YSkge1xuICAgICAgICBkYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLm5hbWVbdGhpcy5vcHRpb25zLmxhbmddID4gYi5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSkgcmV0dXJuIDE7XG4gICAgICAgICAgICBpZiAoYS5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSA8IGIubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10pIHJldHVybiAtMTtcblxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbGlnaHRDb250cm9sO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgb3JpZ2luOiAnYWxsJyxcbiAgICAgICAgZGVzdGluYXRpb246ICdhbGwnLFxuICAgICAgICAvLyByZXF1aXJlZCBmaWVsZCB0byBzdWJtaXQgZm9ybVxuICAgICAgICAvLyB0byBjb3BhXG4gICAgICAgIGlucHV0czoge1xuICAgICAgICAgICAgdHJpcFR5cGU6IFwiUlRcIixcbiAgICAgICAgICAgIGZsZXhpYmxlU2VhcmNoOiBcInRydWVcIixcbiAgICAgICAgICAgIHBvczogXCJDTUdTXCIsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMF0udHlwZVwiOiBcIkFEVFwiLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzFdLnR5cGVcIjogXCJDTk5cIixcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1syXS50eXBlXCI6IFwiSU5GXCIsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMF0uYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMV0uYW1vdW50XCI6IDAsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMl0uYW1vdW50XCI6IDAsXG4gICAgICAgICAgICBcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiOiBudWxsLFxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiOiBudWxsLFxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCI6IG51bGwsXG4gICAgICAgICAgICBcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlRGF5XCI6IG51bGwsXG4gICAgICAgICAgICBcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCI6IG51bGwsXG4gICAgICAgICAgICAvLyBcImNvdXBvblwiOiBudWxsLFxuICAgICAgICAgICAgLy8gb3JpZ2luXG4gICAgICAgICAgICBcIm91dGJvdW5kT3B0aW9uLm9yaWdpbkxvY2F0aW9uQ29kZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLmRlc3RpbmF0aW9uTG9jYXRpb25Db2RlXCI6IG51bGwsXG4gICAgICAgICAgICAvLyBkZXN0aW5hdGlvblxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLm9yaWdpbkxvY2F0aW9uQ29kZVwiOiBudWxsLFxuICAgICAgICAgICAgLy8gLy8gY2FiaW4gY2xhc3MgQnVzaW5lc3N8RWNvbm9teVxuICAgICAgICAgICAgXCJjYWJpbkNsYXNzXCI6IFwiRWNvbm9teVwiLFxuICAgICAgICAgICAgLy8gZDE6IG51bGwsXG4gICAgICAgICAgICBsYW5nOiAnZXMnXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1Vcmw6ICdodHRwczovL2Jvb2tpbmdzLmNvcGFhaXIuY29tL0NNR1MvJyArXG4gICAgICAgICAgICAgICAgICAgICAgICdBaXJMb3dGYXJlU2VhcmNoRXh0ZXJuYWwuZG8/J1xuICAgIH1cbjtcblxuLyoqXG4gKiBGb3JtSGVscGVyIG1vZHVsZVxuICovXG5jbGFzcyBGb3JtSGVscGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuXG4gICAgICAgIC8vIHNldCBkZWZhdXRscyB2YWx1ZXNcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0Qm91bmRzKCk7XG4gICAgICAgIHRoaXMuc2V0RGF0ZXModGhpcy5vcHRpb25zLmRhdGVwaWNrZXIsIHtyZXR1cm5zOnRydWUsIGRlcGFydHVyZTp0cnVlfSk7XG5cbiAgICAgICAgLy8gbG9hZCBldmVudHMgcmVsYXRlZCB3aXRoIGZvcm0gaGVscGVyIGFuZCBvdGhlciBtb2R1bGVzXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub3B0aW9ucy5pbnB1dHMpO1xuICAgIH1cblxuXG5cbiAgICBwcm9jZXNzKCkge1xuICAgICAgICB2YXIgaHR0cFF1ZXJ5ID0gJC5wYXJhbSh0aGlzLm9wdGlvbnMuaW5wdXRzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaHR0cFF1ZXJ5KTtcbiAgICAgICAgdmFyIHVybCA9IHRoaXMub3B0aW9ucy5mb3JtVXJsO1xuXG4gICAgICAgIHZhciB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uRXJyb3IoKTtcblxuICAgICAgICBpZiAodmFsaWRhdGlvbi5lcnJvcikge1xuICAgICAgICAgICAgLy8gaGFuZGxlIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb24uYmFnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIGVycm9ycywgZm9yd2FyZCBmb3JtIHZhbHVlcyB0byBjb3BhXG4gICAgICAgICAgICB2YXIgc2VhcmNoV2luZG93ID0gd2luZG93Lm9wZW4odXJsICsgaHR0cFF1ZXJ5LCAnX2JsYW5rJyk7XG4gICAgICAgICAgICBzZWFyY2hXaW5kb3cuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldERlZmF1bHRCb3VuZHMoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vcmlnaW4gIT09ICdhbGwnKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvdW5kcygnb3JpZ2luJywgdGhpcy5vcHRpb25zLm9yaWdpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uICE9PSdhbGwnKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJvdW5kcygnZGVzdGluYXRpb24nLCB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRCb3VuZHMoYm91bmQsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgaWYgKGJvdW5kID09PSAnb3JpZ2luJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLm9yaWdpbkxvY2F0aW9uQ29kZVwiXSA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24uZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIl0gPSBsb2NhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib3VuZCA9PT0gJ2Rlc3RpbmF0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLmRlc3RpbmF0aW9uTG9jYXRpb25Db2RlXCJdID0gbG9jYXRpb247XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIl0gPSBsb2NhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0RGF0ZXMoZGF0ZXBpY2tlciwgYm91bmRzKSB7XG4gICAgICAgIC8vIGdldCBjdXJyZW50IGRhdGVwaWNrZXJzIGRhdGVzXG4gICAgICAgIHZhciBkZXBhcnR1cmVEYXRlID0gJChkYXRlcGlja2VyLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLmRhdGVwaWNrZXIoJ2dldERhdGUnKSxcbiAgICAgICAgcmV0dXJuRGF0ZSA9ICQoZGF0ZXBpY2tlci5vcHRpb25zLnJldHVyblNlbGVjdG9yKS5kYXRlcGlja2VyKCdnZXREYXRlJyk7XG5cbiAgICAgICAgaWYgKGJvdW5kcy5yZXR1cm5zKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIl0gPSByZXR1cm5EYXRlLmdldFVUQ0RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCJdID0gcmV0dXJuRGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZVllYXJcIl0gPSByZXR1cm5EYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihib3VuZHMuZGVwYXJ0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlRGF5XCJdID0gZGVwYXJ0dXJlRGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIl0gPSBkZXBhcnR1cmVEYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZVllYXJcIl0gPSBkZXBhcnR1cmVEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDYWJpbkNsYXNzKHRhcmdldCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiY2FiaW5DbGFzc1wiXSA9ICQodGFyZ2V0KS52YWwoKTtcbiAgICB9XG5cbiAgICBzZXRQYXNzZW5nZXJzQW1vdW50KHR5cGUsIHZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYWR1bHQnOlxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJndWVzdFR5cGVzWzBdLmFtb3VudFwiXSA9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGlsZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImd1ZXN0VHlwZXNbMV0uYW1vdW50XCJdID0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luZmFudCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImd1ZXN0VHlwZXNbMl0uYW1vdW50XCJdID0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENvdXBvbihjb3Vwb24pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0cy5jb3Vwb24gPSBjb3Vwb247XG4gICAgfVxuXG4gICAgc2V0RDEoZDFWYWx1ZSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzLmQxID0gZDFWYWx1ZTtcbiAgICB9XG5cbiAgICB2YWxpZGF0aW9uRXJyb3IoKSB7XG4gICAgICAgIHZhciBlcnJvcnMgID0ge1xuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgYmFnOltdXG4gICAgICAgIH07XG4gICAgICAgIHZhciBjdXJyZW50RXJyb3I7XG4gICAgICAgIGZvciAodmFyIGlucHV0IGluIHRoaXMub3B0aW9ucy5pbnB1dHMpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLm9wdGlvbnMuaW5wdXRzW2lucHV0XSAmJiB0aGlzLm9wdGlvbnMuaW5wdXRzW2lucHV0XSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvciA9IHt9O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvci5maWVsZCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvci5tZXNzYWdlID0gYFRoZSBpbnB1dCAke2lucHV0fSBtdXN0IGhhdmUgc29tZSB2YWx1ZWA7XG4gICAgICAgICAgICAgICAgZXJyb3JzLmJhZy5wdXNoKGN1cnJlbnRFcnJvcik7XG4gICAgICAgICAgICAgICAgZXJyb3JzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgfTtcblxuICAgIGV2ZW50cygpIHtcblxuICAgICAgICB2YXIgZGF0ZXBpY2tlciA9IHRoaXMub3B0aW9ucy5kYXRlcGlja2VyLFxuICAgICAgICAgICAgJGRlcGFydHVyZUZpZWxkID0gJChkYXRlcGlja2VyLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLFxuICAgICAgICAgICAgJHJldHVybkZpZWxkID0gJChkYXRlcGlja2VyLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpO1xuXG4gICAgICAgICRkZXBhcnR1cmVGaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnb25TZWxlY3QnLCAoZGF0ZVRleHQsIGluc3QpID0+e1xuXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGluc3Quc2VsZWN0ZWRZZWFyLCBpbnN0LnNlbGVjdGVkTW9udGgsIGluc3Quc2VsZWN0ZWREYXkpO1xuXG4gICAgICAgICAgICAvLyB0aGlzIHNldHMgdGhlIGluYm91bmQgZGF0ZSBwaWNrZXIgdG8gYSB3ZWVrIGxhdGVyIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgd2Vla2xhdGVyID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignc2V0RGF0ZScsIHdlZWtsYXRlcik7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ21pbkRhdGUnLCBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0ZXMoZGF0ZXBpY2tlciwge3JldHVybnM6dHJ1ZSwgZGVwYXJ0dXJlOnRydWV9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ29uU2VsZWN0JywgKGRhdGVUZXh0LCBpbnN0KSA9PntcblxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShpbnN0LnNlbGVjdGVkWWVhciwgaW5zdC5zZWxlY3RlZE1vbnRoLCBpbnN0LnNlbGVjdGVkRGF5KTtcblxuICAgICAgICAgICAgLy8gdGhpcyBzZXRzIHRoZSBpbmJvdW5kIGRhdGUgcGlja2VyIHRvIGEgd2VlayBsYXRlciBvZiBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgdmFyIHdlZWtsYXRlciA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlcyhkYXRlcGlja2VyLCB7cmV0dXJuczp0cnVlLCBkZXBhcnR1cmU6ZmFsc2V9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLWNhYmluLWNsYXNzJykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2FiaW5DbGFzcyhlLnRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1hZHVsdHMtYW1vdW50Jykuc2VsZWN0bWVudSh7XG4gICAgICAgICAgICBjaGFuZ2U6IChlLCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFzc2VuZ2Vyc0Ftb3VudCgnYWR1bHQnLCB1aS5pdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLWNoaWxkcmVuLWFtb3VudCcpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgY2hhbmdlOiAoZSwgdWkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhc3NlbmdlcnNBbW91bnQoJ2NoaWxkJywgdWkuaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1pbmZhbnRzLWFtb3VudCcpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgY2hhbmdlOiAoZSwgdWkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhc3NlbmdlcnNBbW91bnQoJ2luZmFudCcsIHVpLml0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtc3VibWl0Jykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2VzcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtSGVscGVyO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGFuZGxlYmFycycpLFxuICAgIGkxOG4gPSB7XG4gICAgICAgIGJvb2tpbmc6IHJlcXVpcmUoJy4uLy4uLy4uL2xhbmcvYm9va2luZy5qc29uJyksXG4gICAgICAgIHNpZ251cDogcmVxdWlyZSgnLi4vLi4vLi4vbGFuZy9zaWdudXAuanNvbicpLFxuICAgIH0sXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIHNyYzogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcycsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHt9XG4gICAgfVxuO1xuXG5jbGFzcyBUZW1wbGF0ZVxue1xuICAgIGNvbnN0cnVjdG9yKHdpZGdldCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgSGFuZGxlYmFycyAhPT0gJ3VuZGVmaW5lZCcgJiYgSGFuZGxlYmFycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGAke3RoaXMub3B0aW9ucy5zcmN9LyR7d2lkZ2V0fS5oYnNgLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh0cGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCBpMThuW3dpZGdldF1bdGhpcy5vcHRpb25zLmxhbmddKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSB0aGlzLmNvbXBpbGUod2lkZ2V0LCB0cGwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2soaHRtbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGlzIHBsdWdpbiByZXF1aXJlcyBIYW5kbGViYXJzLmpzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21waWxlKHdpZGdldCwgdHBsKSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZSh0cGwpO1xuICAgICAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKHRoaXMub3B0aW9ucy5kYXRhKTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlbXBsYXRlO1xuIiwiLyoqXG4gKiBNb2R1bGVzXG4gKi9cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9saWIvVGVtcGxhdGUnKSxcbiAgICBGbGlnaHRDb250cm9sID0gcmVxdWlyZSgnLi4vbGliL0ZsaWdodENvbnRyb2wnKSxcbiAgICBEYXRlcGlja2VyID0gcmVxdWlyZSgnLi4vbGliL0RhdGVwaWNrZXInKSxcbiAgICBBdXRvY29tcGxldGUgPSByZXF1aXJlKCcuLi9saWIvQXV0b2NvbXBsZXRlJyksXG4gICAgRm9ybUhlbHBlciA9IHJlcXVpcmUoJy4uL2xpYi9Gb3JtSGVscGVyJylcbjtcblxuLyoqXG4gKiBPcHRpb25zXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIGQxOiBudWxsLFxuICAgICAgICBjb3Vwb246IG51bGwsXG4gICAgICAgIG9yaWdpbjogbnVsbCxcbiAgICAgICAgZGVzdGluYXRpb246IG51bGwsXG4gICAgICAgIHRlbXBsYXRlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcy9ib29raW5nLmhicycsXG4gICAgICAgIGxhbmd1YWdlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL2xhbmcvJ1xuICAgIH1cbjtcblxuXG5jbGFzcyBCb29raW5nIHtcblxuICAgIC8qKlxuICAgICAqIFdpZGdldCBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvciBlbGVtZW50IERPTSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAgT3B0aW9ucyBwYXNzZWQgb24gcGx1Z2luIGluc3RhbmNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRib29raW5nID0gJChlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgbmV3IFRlbXBsYXRlKCdib29raW5nJywge1xuICAgICAgICAgICAgJ2xhbmcnOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgICdvcmlnaW4nOiB0aGlzLm9wdGlvbnMub3JpZ2luLFxuICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uJzogdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgY2FsbGJhY2s6IChodG1sKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYm9va2luZy5odG1sKGh0bWwpO1xuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBmaW5pc2hlZCwgYnVpbGQgYWxsIHRoZSB3aWRnZXRzXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cFNlbGVjdE1lbnVzKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXR1cCBkYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGVwaWNrZXIgPSBuZXcgRGF0ZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgICAgICdsYW5nJzogdGhpcy5vcHRpb25zLmxhbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkYXRlcGlja2VyLnJlbmRlcigpO1xuXG5cbiAgICAgICAgICAgICAgICB2YXIgZm9ybUhlbHBlciA9IG5ldyBGb3JtSGVscGVyKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXBpY2tlcjogZGF0ZXBpY2tlcixcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiB0aGlzLm9wdGlvbnMub3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgY3VzdG9tIHZhbHVlcyBkMSAmIGNvdXBvblxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLmQxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1IZWxwZXIuc2V0RDEodGhpcy5vcHRpb25zLmQxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMuY291cG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1IZWxwZXIuc2V0Q291cG9uKHRoaXMub3B0aW9ucy5jb3Vwb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEF1dG9jb21wbGV0ZSB3aWRnZXRzXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0QXV0b2NvbXBsZXRlKGZvcm1IZWxwZXIpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBCaW5kIGV2ZW50c1xuICAgICAgICAgICAgICAgIHRoaXMuYm9va2luZ0V2ZW50cygpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHVwIGF1dG9jb21wbGV0ZSBkZXN0aW5hdGlvbiB3aWRnZXRzXG4gICAgICogQHNlZSBtb2R1bGU6QXV0b2NvbXBsZXRlXG4gICAgICovXG4gICAgaW5pdEF1dG9jb21wbGV0ZShmb3JtSGVscGVyKSB7XG4gICAgICAgIC8vIEluaXQgY2xhc3Mgd2l0aCBvcHRpb25zXG4gICAgICAgIHZhciBhdXRvY29tcGxldGUgPSBuZXcgQXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgIGxhbmc6IHRoaXMub3B0aW9ucy5sYW5nLFxuICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgLy8gc2V0IGRpc3BsYXkgdmFsdWUgdG8gdGhlIGlucHV0XG4gICAgICAgICAgICAgICAgJCh0aGlzKS52YWwodWkuaXRlbS5kaXNwbGF5KTtcbiAgICAgICAgICAgICAgICAvL3NldCBhY3R1YWwgdmFsdWUgYXQgdGhlIGJvb2tpbmcgb2JqZWN0XG4gICAgICAgICAgICAgICAgZm9ybUhlbHBlci5zZXRCb3VuZHMoJCh0aGlzKS5kYXRhKCdpbnB1dC1maWVsZCcpLCB1aS5pdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBAdG9kbyBNYWtlIHRoaXMgZHluYW1pY1xuICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICBteTogJ2xlZnQgYm90dG9tJyxcbiAgICAgICAgICAgICAgICBhdDogJ2xlZnQgdG9wJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFwcGVuZFRvOiB0aGlzLiRib29raW5nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJ1aWxkXG4gICAgICAgIGF1dG9jb21wbGV0ZS5zdGFydChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5qcy1ib29raW5nLWF1dG9jb21wbGV0ZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlLnJlbmRlcih0aGlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBzZWxlY3QgbWVudXMgd2l0aCBjdXN0b20gVUkgd2lkZ2V0c1xuICAgICAqL1xuICAgIHNldHVwU2VsZWN0TWVudXMoKSB7XG4gICAgICAgICQoJy5qcy1zZWxlY3RtZW51Jykuc2VsZWN0bWVudSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIGV2ZW50cyByZWxhdGVkIHRvIGJvb2tpbmcgaW50ZXJhY3Rpb25cbiAgICAgKi9cbiAgICBib29raW5nRXZlbnRzKCkge1xuICAgICAgICB2YXIgJGZvcm0gPSAkKCcuY29wYWFpci1ib29raW5nJyk7XG4gICAgICAgIHZhciAkdG9nZ2xlID0gJCgnLmpzLWNvcGFhaXItdG9nZ2xlJyk7XG5cbiAgICAgICAgLy8gU2hvdyBib3R0b20gcm93IHdoZW4gYW55IGlucHV0IGdldHMgZm9jdXNcbiAgICAgICAgdGhpcy4kYm9va2luZy5vbignZm9jdXMuY29wYWFpcicsICdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICR0b2dnbGUucmVtb3ZlQ2xhc3MoJ2NvcGFhaXItaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENsaWNraW5nIGFueXdoZXJlIGluIHRoZSBkb2N1bWVudCBoaWRlcyBib3R0b20gcm93XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5jb3BhYWlyJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJHRvZ2dsZS5hZGRDbGFzcygnY29wYWFpci1oaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU3RvcCBwcm9wYWdhdGlvbiBvZiBjbGlja3MgaW5zaWRlIHRoZSBmb3JtIHRvIHByZXZlbnRcbiAgICAgICAgLy8gdHJpZ2dlcmluZyB0b3AgZXZlbnQuXG4gICAgICAgIHRoaXMuJGJvb2tpbmcub24oJ2NsaWNrLmNvcGFhaXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb29raW5nO1xuIiwidmFyIFRlbXBsYXRlID0gcmVxdWlyZSgnLi4vbGliL1RlbXBsYXRlJyk7XG5cbmNsYXNzIFNpZ251cCB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkKGVsZW1lbnQpO1xuXG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGxhbmc6ICdlcydcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIExvYWQgdGVtcGxhdGVcbiAgICAgICAgbmV3IFRlbXBsYXRlKCdzaWdudXAnLCB7XG4gICAgICAgICAgICAnbGFuZyc6IHRoaXMub3B0aW9ucy5sYW5nLFxuICAgICAgICAgICAgY2FsbGJhY2s6IChodG1sKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZm9ybS5odG1sKGh0bWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWdudXA7XG4iXX0=
