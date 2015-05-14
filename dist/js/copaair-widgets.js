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
    lang: "es",
    beforeShow: function beforeShow(input, isnt) {
        setTimeout(function () {
            isnt.dpDiv.position({
                my: "left bottom",
                at: "left top",
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

                this.options.minDate = new Date();

                $departureField.datepicker(this.options);
                $returnField.datepicker(this.options);

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
        // console.log(this.options.inputs);
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
                    // console.log(httpQuery);
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

                this.options.booking.find(".js-cabin-class").on("click", function (e) {
                    _this.setCabinClass(e.target);
                });

                this.options.booking.find(".js-adults-amount").selectmenu({
                    change: function (e, ui) {
                        _this.setPassengersAmount("adult", ui.item.value);
                    }
                });

                this.options.booking.find(".js-children-amount").selectmenu({
                    change: function (e, ui) {
                        _this.setPassengersAmount("child", ui.item.value);
                    }
                });

                this.options.booking.find(".js-infants-amount").selectmenu({
                    change: function (e, ui) {
                        _this.setPassengersAmount("infant", ui.item.value);
                    }
                });

                this.options.booking.find(".js-submit").on("click", function (e) {
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
    //src: window.location.origin + '/bower_components/copaair-widgets/templates',
    callback: function callback() {}
};

var Template = (function () {
    function Template(widget, options) {
        var _this = this;

        _classCallCheck(this, Template);

        if (!window.location.origin) {
            window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
        }

        defaults.src = window.location.origin + "/bower_components/copaair-widgets/templates";

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
    destinationName: null,
    widgetPosition: { my: "left bottom", at: "left top" },
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
            destinationName: this.options.destinationName, // temporary fix for static destination
            callback: function (html) {
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
                    destination: _this.options.destination,
                    booking: _this.$booking
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
                    position: this.options.widgetPosition,
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
                $(".js-selectmenu").selectmenu({
                    position: this.options.widgetPosition
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
                var $booking = this.$booking;
                var $toggle = this.$booking.find(".js-copaair-toggle");

                // Show bottom row when any input gets focus
                $booking.on("focus.copaair", "input", function (e) {
                    $booking.addClass("copaair-widget-open");
                    $toggle.removeClass("copaair-hidden");
                });

                // Clicking anywhere in the document hides bottom row
                $booking.on("click.copaair", ".js-copaair-close", function (e) {
                    e.preventDefault();
                    $booking.removeClass("copaair-widget-open");
                    $toggle.addClass("copaair-hidden");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9pbmRleC5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvYm93ZXJfY29tcG9uZW50cy9zdG9yZS5qcy9zdG9yZS5taW4uanMiLCJsYW5nL2Jvb2tpbmcuanNvbiIsImxhbmcvZGF0ZXBpY2tlci5qc29uIiwibGFuZy9zaWdudXAuanNvbiIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9BdXRvY29tcGxldGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvRGF0ZXBpY2tlci5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9GbGlnaHRDb250cm9sLmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGFhaXItd2lkZ2V0cy9zcmMvanMvbGliL0Zvcm1IZWxwZXIuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvVGVtcGxhdGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL0Jvb2tpbmcuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL1NpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLEFBQUMsQ0FBQSxVQUFVLE9BQU8sRUFBRTtBQUNoQixnQkFBWSxDQUFDOztBQUViLFFBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7O0FBRTVDLGNBQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9CLE1BQU0sSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7O0FBRXZDLGVBQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUM5QixNQUFNOztBQUVILGVBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNuQjtDQUNKLENBQUEsQ0FBQyxVQUFTLENBQUMsRUFBRTtBQUNWLGdCQUFZLENBQUM7O0FBRWIsUUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDO1FBQ3RDLE1BQU0sR0FBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FDeEM7Ozs7Ozs7O0FBUUQsS0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsU0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFO0FBQ25ELGVBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFXO0FBQ3hCLGdCQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLENBQUMsRUFBRTtBQUN4QyxpQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDckU7U0FDSixDQUFDLENBQUM7S0FDTixDQUFDOztBQUVGLEtBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxHQUFHLFNBQVMsYUFBYSxDQUFDLE9BQU8sRUFBRTtBQUNqRCxlQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBVztBQUN4QixnQkFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixDQUFDLEVBQUU7QUFDdkMsaUJBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ25FO1NBQ0osQ0FBQyxDQUFDO0tBQ04sQ0FBQztDQUNMLENBQUMsQ0FBRTs7Ozs7Ozs7O0FDeENKLENBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFTLENBQUMsR0FBRTtBQUFDLFFBQUc7QUFBQyxhQUFPLENBQUMsSUFBSSxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLGFBQU0sQ0FBQyxDQUFDLENBQUE7S0FBQztHQUFDLElBQUksQ0FBQyxHQUFDLEVBQUU7TUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFFBQVE7TUFBQyxDQUFDLEdBQUMsY0FBYztNQUFDLENBQUMsR0FBQyxRQUFRO01BQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFHLFNBQVMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsUUFBUSxHQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxLQUFDLElBQUUsSUFBSSxLQUFHLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQSxBQUFDLEVBQUMsQ0FBQyxJQUFFLElBQUksS0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFBLEFBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsWUFBVSxFQUFFLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsU0FBUyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsV0FBVyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsUUFBRyxPQUFPLENBQUMsSUFBRSxRQUFRLEVBQUMsT0FBTyxTQUFTLENBQUMsSUFBRztBQUFDLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxhQUFPLENBQUMsSUFBRSxTQUFTLENBQUE7S0FBQztHQUFDLENBQUMsSUFBRyxDQUFDLEVBQUUsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxBQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsUUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxLQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLFlBQVU7QUFBQyxLQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsWUFBVTtBQUFDLFFBQUksQ0FBQyxHQUFDLEVBQUUsQ0FBQyxRQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsT0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtLQUFDLENBQUMsRUFBQyxDQUFDLENBQUEsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFNBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO0FBQUMsVUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFDO0dBQUMsQ0FBQyxLQUFLLElBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUM7UUFBSyxDQUFDLEVBQUMsQ0FBQztRQUF5TyxDQUFDLEVBQXVNLENBQUM7OztVQUFrRSxDQUFDLEdBQVYsVUFBVyxDQUFDLEVBQUM7QUFBQyxlQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUE7T0FBQzs7QUFBeGlCLFVBQUc7QUFBQyxTQUFDLEdBQUMsSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxzQkFBc0IsR0FBQyxDQUFDLEdBQUMseUNBQXVDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtPQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtPQUFDO0FBQUksT0FBQyxHQUFDLFdBQVMsQ0FBQyxFQUFDO0FBQUMsZUFBTyxZQUFVO0FBQUMsY0FBSSxDQUFDLEdBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsUUFBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBO1NBQUMsQ0FBQTtPQUFDOztBQUFDLE9BQUMsR0FBQyxJQUFJLE1BQU0sQ0FBQyx1Q0FBdUMsRUFBQyxHQUFHLENBQUM7QUFBK0QsT0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLGdCQUFPLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFHLFNBQVMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxBQUFDLENBQUEsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsU0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFlBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7T0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFlBQUksQ0FBQyxHQUFDLEVBQUUsQ0FBQyxRQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtTQUFDLENBQUMsRUFBQyxDQUFDLENBQUEsQ0FBQTtPQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsWUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQUMsQ0FBQyxDQUFBOztHQUFDLElBQUc7QUFBQyxRQUFJLENBQUMsR0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLEtBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtHQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxLQUFDLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUMsT0FBTyxNQUFNLElBQUUsV0FBVyxJQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDLE1BQU0sS0FBRyxNQUFNLEdBQUMsTUFBTSxDQUFDLE9BQU8sR0FBQyxDQUFDLEdBQUMsT0FBTyxNQUFNLElBQUUsVUFBVSxJQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFBO0NBQUMsQ0FBQSxDQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUE7Ozs7Ozs7Ozs7QUNEbitFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbkNBLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxR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YUFFTjs7Ozs7O1dBdEhDLE9BQU87OztBQXlIYixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7Ozs7Ozs7O0FDdEp6QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7SUFFcEMsTUFBTSxHQUVHLFNBRlQsTUFBTSxDQUVJLE9BQU8sRUFBRSxPQUFPOzs7MEJBRjFCLE1BQU07O0FBR0osUUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXhCLFFBQUksUUFBUSxHQUFHO0FBQ1gsWUFBSSxFQUFFLElBQUk7S0FDYixDQUFDOztBQUVGLFFBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDOzs7QUFHL0MsUUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFO0FBQ25CLGNBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO0FBQ3pCLGdCQUFRLEVBQUUsVUFBQyxJQUFJLEVBQUs7QUFDaEIsa0JBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtLQUNKLENBQUMsQ0FBQztDQUNOOztBQUlMLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gTm9kZS9Db21tb25KU1xuICAgICAgICBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cbn0oZnVuY3Rpb24oJCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBCb29raW5nID0gcmVxdWlyZSgnLi93aWRnZXRzL0Jvb2tpbmcnKSxcbiAgICAgICAgU2lnbnVwICA9IHJlcXVpcmUoJy4vd2lkZ2V0cy9TaWdudXAnKVxuICAgIDtcblxuICAgIC8qKlxuICAgICAqIEJpbmQgd2lkZ2V0cyB0byBqUXVlcnkgb2JqZWN0IHByb3RvdHlwZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIHBhc3NlZCB0byBvdmVycmlkZSBkZWZhdWx0cy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgQ3VycmVudCBvYmplY3QgaW5zdGFuY2VcbiAgICAgKi9cbiAgICAkLmZuLmNvcGFhaXJCb29raW5nID0gZnVuY3Rpb24gY29wYWFpckJvb2tpbmcob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyQm9va2luZycpKSB7XG4gICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsICdwbHVnaW5fY29wYWFpckJvb2tpbmcnLCBuZXcgQm9va2luZyh0aGlzLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkLmZuLmNvcGFhaXJTaWdudXAgPSBmdW5jdGlvbiBjb3BhYWlyU2lnbnVwKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghJC5kYXRhKHRoaXMsICdwbHVnaW5fY29wYWFpclNpZ251cCcpKSB7XG4gICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsICdwbHVnaW5fY29wYWFpclNpZ251cCcsIG5ldyBTaWdudXAodGhpcywgb3B0aW9ucykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufSkpO1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTMgTWFyY3VzIFdlc3RpbiAqL1xuKGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIG8oKXt0cnl7cmV0dXJuIHIgaW4gZSYmZVtyXX1jYXRjaCh0KXtyZXR1cm4hMX19dmFyIHQ9e30sbj1lLmRvY3VtZW50LHI9XCJsb2NhbFN0b3JhZ2VcIixpPVwic2NyaXB0XCIsczt0LmRpc2FibGVkPSExLHQudmVyc2lvbj1cIjEuMy4xN1wiLHQuc2V0PWZ1bmN0aW9uKGUsdCl7fSx0LmdldD1mdW5jdGlvbihlLHQpe30sdC5oYXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHQuZ2V0KGUpIT09dW5kZWZpbmVkfSx0LnJlbW92ZT1mdW5jdGlvbihlKXt9LHQuY2xlYXI9ZnVuY3Rpb24oKXt9LHQudHJhbnNhY3Q9ZnVuY3Rpb24oZSxuLHIpe3I9PW51bGwmJihyPW4sbj1udWxsKSxuPT1udWxsJiYobj17fSk7dmFyIGk9dC5nZXQoZSxuKTtyKGkpLHQuc2V0KGUsaSl9LHQuZ2V0QWxsPWZ1bmN0aW9uKCl7fSx0LmZvckVhY2g9ZnVuY3Rpb24oKXt9LHQuc2VyaWFsaXplPWZ1bmN0aW9uKGUpe3JldHVybiBKU09OLnN0cmluZ2lmeShlKX0sdC5kZXNlcmlhbGl6ZT1mdW5jdGlvbihlKXtpZih0eXBlb2YgZSE9XCJzdHJpbmdcIilyZXR1cm4gdW5kZWZpbmVkO3RyeXtyZXR1cm4gSlNPTi5wYXJzZShlKX1jYXRjaCh0KXtyZXR1cm4gZXx8dW5kZWZpbmVkfX07aWYobygpKXM9ZVtyXSx0LnNldD1mdW5jdGlvbihlLG4pe3JldHVybiBuPT09dW5kZWZpbmVkP3QucmVtb3ZlKGUpOihzLnNldEl0ZW0oZSx0LnNlcmlhbGl6ZShuKSksbil9LHQuZ2V0PWZ1bmN0aW9uKGUsbil7dmFyIHI9dC5kZXNlcmlhbGl6ZShzLmdldEl0ZW0oZSkpO3JldHVybiByPT09dW5kZWZpbmVkP246cn0sdC5yZW1vdmU9ZnVuY3Rpb24oZSl7cy5yZW1vdmVJdGVtKGUpfSx0LmNsZWFyPWZ1bmN0aW9uKCl7cy5jbGVhcigpfSx0LmdldEFsbD1mdW5jdGlvbigpe3ZhciBlPXt9O3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCxuKXtlW3RdPW59KSxlfSx0LmZvckVhY2g9ZnVuY3Rpb24oZSl7Zm9yKHZhciBuPTA7bjxzLmxlbmd0aDtuKyspe3ZhciByPXMua2V5KG4pO2Uocix0LmdldChyKSl9fTtlbHNlIGlmKG4uZG9jdW1lbnRFbGVtZW50LmFkZEJlaGF2aW9yKXt2YXIgdSxhO3RyeXthPW5ldyBBY3RpdmVYT2JqZWN0KFwiaHRtbGZpbGVcIiksYS5vcGVuKCksYS53cml0ZShcIjxcIitpK1wiPmRvY3VtZW50Lnc9d2luZG93PC9cIitpKyc+PGlmcmFtZSBzcmM9XCIvZmF2aWNvbi5pY29cIj48L2lmcmFtZT4nKSxhLmNsb3NlKCksdT1hLncuZnJhbWVzWzBdLmRvY3VtZW50LHM9dS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpfWNhdGNoKGYpe3M9bi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHU9bi5ib2R5fXZhciBsPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKTtuLnVuc2hpZnQocyksdS5hcHBlbmRDaGlsZChzKSxzLmFkZEJlaGF2aW9yKFwiI2RlZmF1bHQjdXNlckRhdGFcIikscy5sb2FkKHIpO3ZhciBpPWUuYXBwbHkodCxuKTtyZXR1cm4gdS5yZW1vdmVDaGlsZChzKSxpfX0sYz1uZXcgUmVnRXhwKFwiWyFcXFwiIyQlJicoKSorLC9cXFxcXFxcXDo7PD0+P0BbXFxcXF1eYHt8fX5dXCIsXCJnXCIpO2Z1bmN0aW9uIGgoZSl7cmV0dXJuIGUucmVwbGFjZSgvXmQvLFwiX19fJCZcIikucmVwbGFjZShjLFwiX19fXCIpfXQuc2V0PWwoZnVuY3Rpb24oZSxuLGkpe3JldHVybiBuPWgobiksaT09PXVuZGVmaW5lZD90LnJlbW92ZShuKTooZS5zZXRBdHRyaWJ1dGUobix0LnNlcmlhbGl6ZShpKSksZS5zYXZlKHIpLGkpfSksdC5nZXQ9bChmdW5jdGlvbihlLG4scil7bj1oKG4pO3ZhciBpPXQuZGVzZXJpYWxpemUoZS5nZXRBdHRyaWJ1dGUobikpO3JldHVybiBpPT09dW5kZWZpbmVkP3I6aX0pLHQucmVtb3ZlPWwoZnVuY3Rpb24oZSx0KXt0PWgodCksZS5yZW1vdmVBdHRyaWJ1dGUodCksZS5zYXZlKHIpfSksdC5jbGVhcj1sKGZ1bmN0aW9uKGUpe3ZhciB0PWUuWE1MRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dHJpYnV0ZXM7ZS5sb2FkKHIpO2Zvcih2YXIgbj0wLGk7aT10W25dO24rKyllLnJlbW92ZUF0dHJpYnV0ZShpLm5hbWUpO2Uuc2F2ZShyKX0pLHQuZ2V0QWxsPWZ1bmN0aW9uKGUpe3ZhciBuPXt9O3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24oZSx0KXtuW2VdPXR9KSxufSx0LmZvckVhY2g9bChmdW5jdGlvbihlLG4pe3ZhciByPWUuWE1MRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dHJpYnV0ZXM7Zm9yKHZhciBpPTAscztzPXJbaV07KytpKW4ocy5uYW1lLHQuZGVzZXJpYWxpemUoZS5nZXRBdHRyaWJ1dGUocy5uYW1lKSkpfSl9dHJ5e3ZhciBwPVwiX19zdG9yZWpzX19cIjt0LnNldChwLHApLHQuZ2V0KHApIT1wJiYodC5kaXNhYmxlZD0hMCksdC5yZW1vdmUocCl9Y2F0Y2goZil7dC5kaXNhYmxlZD0hMH10LmVuYWJsZWQ9IXQuZGlzYWJsZWQsdHlwZW9mIG1vZHVsZSE9XCJ1bmRlZmluZWRcIiYmbW9kdWxlLmV4cG9ydHMmJnRoaXMubW9kdWxlIT09bW9kdWxlP21vZHVsZS5leHBvcnRzPXQ6dHlwZW9mIGRlZmluZT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kP2RlZmluZSh0KTplLnN0b3JlPXR9KShGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkpIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiZXNcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJvcmlnaW5cIjogXCJEZXNkZVwiLFxuICAgICAgICAgICAgXCJkZXN0aW5hdGlvblwiOiBcIkhhY2lhXCIsXG4gICAgICAgICAgICBcImRlcGFydHVyZVwiOiBcIlNhbGlkYVwiLFxuICAgICAgICAgICAgXCJyZXR1cm5cIjogXCJSZWdyZXNvXCIsXG4gICAgICAgICAgICBcImVjb25vbWljXCI6IFwiQ2xhc2UgRWNvbsOzbWljYVwiLFxuICAgICAgICAgICAgXCJidXNpbmVzc1wiOiBcIkNsYXNlIEVqZWN1dGl2YVwiLFxuICAgICAgICAgICAgXCJzdWJtaXRcIjogXCJWZXIgVnVlbG9zXCIsXG4gICAgICAgICAgICBcImFkdWx0c1wiOiBcIkFkdWx0b3NcIixcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogXCJOacOxb3NcIixcbiAgICAgICAgICAgIFwiaW5mYW50c1wiIDogXCJJbmZhbnRlc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWVzc2FnZXNcIjoge1xuICAgICAgICAgICAgXCJub3RpZmljYXRpb25cIjogXCJQb3IgZmF2b3IgY29tcGxldGEgdG9kb3MgbG9zIGNhbXBvcy5cIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJQb3IgZmF2b3IgY29tcGxldGEgdG9kb3MgbG9zIGNhbXBvcy5cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwib3JpZ2luXCI6IFwiRnJvbVwiLFxuICAgICAgICAgICAgXCJkZXN0aW5hdGlvblwiOiBcIlRvXCIsXG4gICAgICAgICAgICBcImRlcGFydHVyZVwiOiBcIkRlcGFydHVyZVwiLFxuICAgICAgICAgICAgXCJyZXR1cm5cIjogXCJSZXR1cm5cIixcbiAgICAgICAgICAgIFwiZWNvbm9taWNcIjogXCJCdXNpbmVzcyBDbGFzc1wiLFxuICAgICAgICAgICAgXCJidXNpbmVzc1wiOiBcIkVjb25vbXkgQ2xhc3NcIixcbiAgICAgICAgICAgIFwic3VibWl0XCI6IFwiRmluZCBmbGlnaHRzXCIsXG4gICAgICAgICAgICBcImFkdWx0c1wiOiBcIkFkdWx0c1wiLFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBcIkNoaWxkcmVuXCIsXG4gICAgICAgICAgICBcImluZmFudHNcIiA6IFwiSW5mYW50c1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWVzc2FnZXNcIjoge1xuICAgICAgICAgICAgXCJub3RpZmljYXRpb25cIjogXCJQbGVhc2UgY29tcGxldGUgYWxsIHRoZSAuLi5cIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJQbGVhc2UgY29tcGxldGUgYWxsIHRoZSAuLi5cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInB0XCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwib3JpZ2luXCI6IFwiRGVcIixcbiAgICAgICAgICAgIFwiZGVzdGluYXRpb25cIjogXCJQYXJhXCIsXG4gICAgICAgICAgICBcImRlcGFydHVyZVwiOiBcIlNhw61kYVwiLFxuICAgICAgICAgICAgXCJyZXR1cm5cIjogXCJSZWdyZXNzb1wiLFxuICAgICAgICAgICAgXCJlY29ub21pY1wiOiBcIkNsYXNzZSBlY29uw7RtaWNhXCIsXG4gICAgICAgICAgICBcImJ1c2luZXNzXCI6IFwiQ2xhc3NlIEV4ZWN1dGl2YVwiLFxuICAgICAgICAgICAgXCJzdWJtaXRcIjogXCJCdXNjYXIgdm9vc1wiLFxuICAgICAgICAgICAgXCJhZHVsdHNcIjogXCJBZHVsdG9zXCIsXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IFwiQ3JpYW7Dp2FzXCIsXG4gICAgICAgICAgICBcImluZmFudHNcIiA6IFwiQmViw6pzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlc1wiOiB7XG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwicmVnaW9uYWxcIjoge1xuICAgICAgICAgICAgXCJjbG9zZVRleHRcIjogXCJDZXJyYXJcIixcbiAgICAgICAgICAgIFwicHJldlRleHRcIjogXCImI3gzQztBbnRcIixcbiAgICAgICAgICAgIFwibmV4dFRleHRcIjogXCJTaWcmI3gzRTtcIixcbiAgICAgICAgICAgIFwiY3VycmVudFRleHRcIjogXCJIb3lcIixcbiAgICAgICAgICAgIFwibW9udGhOYW1lc1wiOiBbXCJlbmVyb1wiLFwiZmVicmVyb1wiLFwibWFyem9cIixcImFicmlsXCIsXCJtYXlvXCIsXCJqdW5pb1wiLFxuICAgICAgICAgICAgXCJqdWxpb1wiLFwiYWdvc3RvXCIsXCJzZXB0aWVtYnJlXCIsXCJvY3R1YnJlXCIsXCJub3ZpZW1icmVcIixcImRpY2llbWJyZVwiXSxcbiAgICAgICAgICAgIFwibW9udGhOYW1lc1Nob3J0XCI6IFtcImVuZVwiLFwiZmViXCIsXCJtYXJcIixcImFiclwiLFwibWF5XCIsXCJqdW4nLCdqdWxcIixcImFnb1wiLFwic2VwXCIsXCJvY3RcIixcIm5vdlwiLFwiZGljXCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc1wiOiBbXCJkb21pbmdvXCIsXCJsdW5lc1wiLFwibWFydGVzXCIsXCJtacOpcmNvbGVzJywnanVldmVzXCIsXCJ2aWVybmVzXCIsXCJzw6FiYWRvXCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc1Nob3J0XCI6IFtcImRvbVwiLFwibHVuXCIsXCJtYXJcIixcIm1pw6lcIixcImp1dlwiLFwidmllXCIsXCJzw6FiXCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc01pblwiOiBbXCJEXCIsXCJMXCIsXCJNXCIsXCJYXCIsXCJKXCIsXCJWXCIsXCJTXCJdLFxuICAgICAgICAgICAgXCJ3ZWVrSGVhZGVyXCI6IFwiU21cIixcbiAgICAgICAgICAgIFwiZGF0ZUZvcm1hdFwiOiBcImRkL21tL3l5XCIsXG4gICAgICAgICAgICBcImZpcnN0RGF5XCI6IDEsXG4gICAgICAgICAgICBcImlzUlRMXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzaG93TW9udGhBZnRlclllYXJcIjogZmFsc2UsXG4gICAgICAgICAgICBcInllYXJTdWZmaXhcIjogXCJcIlxuICAgICAgICB9XG5cbiAgICB9LFxuICAgIFwiZW5cIjoge1xuICAgICAgICBcInJlZ2lvbmFsXCIgOiB7fVxuICAgIH0sXG4gICAgXCJwdFwiOiB7XG4gICAgICAgIFwicmVnaW9uYWxcIiA6IHtcbiAgICAgICAgICAgIFwiY2xvc2VUZXh0XCI6IFwiRmVjaGFyXCIsXG4gICAgICAgICAgICBcInByZXZUZXh0XCI6IFwiJiN4M0M7QW50ZXJpb3JcIixcbiAgICAgICAgICAgIFwibmV4dFRleHRcIjogXCJQcsOzeGltbyYjeDNFO1wiLFxuICAgICAgICAgICAgXCJjdXJyZW50VGV4dFwiOiBcIkhvamVcIixcbiAgICAgICAgICAgIFwibW9udGhOYW1lc1wiOiBbXCJKYW5laXJvXCIsXCJGZXZlcmVpcm9cIixcIk1hcsOnb1wiLFwiQWJyaWxcIixcIk1haW9cIixcIkp1bmhvXCIsXCJKdWxob1wiLFwiQWdvc3RvXCIsXCJTZXRlbWJyb1wiLFwiT3V0dWJyb1wiLFwiTm92ZW1icm9cIixcIkRlemVtYnJvXCJdLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzU2hvcnRcIjogW1wiSmFuXCIsXCJGZXZcIixcIk1hclwiLFwiQWJyXCIsXCJNYWlcIixcIkp1blwiLFwiSnVsXCIsXCJBZ29cIixcIlNldFwiLFwiT3V0XCIsXCJOb3ZcIixcIkRlelwiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNcIjogW1wiRG9taW5nb1wiLFwiU2VndW5kYS1mZWlyYVwiLFwiVGVyw6dhLWZlaXJhXCIsXCJRdWFydGEtZmVpcmEnLCdRdWludGEtZmVpcmFcIixcIlNleHRhLWZlaXJhXCIsXCJTw6FiYWRvXCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc1Nob3J0XCI6IFtcIkRvbVwiLFwiU2VnXCIsXCJUZXJcIixcIlF1YVwiLFwiUXVpXCIsXCJTZXhcIixcIlPDoWJcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzTWluXCI6IFtcIkRvbVwiLFwiU2VnXCIsXCJUZXJcIixcIlF1YVwiLFwiUXVpXCIsXCJTZXhcIixcIlPDoWJcIl0sXG4gICAgICAgICAgICBcIndlZWtIZWFkZXJcIjogXCJTbVwiLFxuICAgICAgICAgICAgXCJkYXRlRm9ybWF0XCI6IFwiZGQvbW0veXlcIixcbiAgICAgICAgICAgIFwiZmlyc3REYXlcIjogMCxcbiAgICAgICAgICAgIFwiaXNSVExcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNob3dNb250aEFmdGVyWWVhclwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwieWVhclN1ZmZpeFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcImZuYW1lXCI6IFwiTm9tYnJlXCIsXG4gICAgICAgICAgICBcImxuYW1lXCI6IFwiQXBlbGxpZG9cIixcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJFbWFpbFwiLFxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiUGHDrXNcIixcbiAgICAgICAgICAgIFwiY2l0eVwiOiBcIkNpdWRhZFwiLFxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIk3Ds3ZpbFwiLFxuICAgICAgICAgICAgXCJzdWJzY3JpYmVcIjogXCJTdWJzY3JpYmlyc2VcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwiZm5hbWVcIjogXCJOYW1lXCIsXG4gICAgICAgICAgICBcImxuYW1lXCI6IFwiTGFzdCBOYW1lXCIsXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiRW1haWxcIixcbiAgICAgICAgICAgIFwiY291bnRyeVwiOiBcIkNvdW50cnlcIixcbiAgICAgICAgICAgIFwiY2l0eVwiOiBcIkNpdHlcIixcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCJNb2JpbGVcIixcbiAgICAgICAgICAgIFwic3Vic2NyaWJlXCI6IFwiU3Vic2NyaWJlXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJwdFwiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcImZuYW1lXCI6IFwiTm9tZVwiLFxuICAgICAgICAgICAgXCJsbmFtZVwiOiBcIlNvYnJlbm9tZVwiLFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIkUtbWFpbFwiLFxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiUGHDrXNcIixcbiAgICAgICAgICAgIFwiY2l0eVwiOiBcIkNpZGFkZVwiLFxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIkNlbHVsYXJcIixcbiAgICAgICAgICAgIFwic3Vic2NyaWJlXCI6IFwiSW5zY3JldmVyLXNlXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgRmxpZ2h0Q29udHJvbCA9IHJlcXVpcmUoJy4vRmxpZ2h0Q29udHJvbCcpXG47XG5cbi8qKlxuICogQXV0b2NvbXBsZXRlIHdpZGdldCB3aXRoIGxpc3Qgb2YgQ29wYSdzIGRlc3RpbmF0aW9uc1xuICogZm9yIGJldHRlciB1c2FiaWxpdHkgdGhhbiBhIG5hdGl2ZSBzZWxlY3QgbWVudS5cbiAqIEBjbGFzc1xuICovXG5jbGFzcyBBdXRvY29tcGxldGVcbntcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyBDdXN0b20gb3B0aW9ucyBmb3IgdGhpcyB3aWRnZXQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZGVzdGluYXRpb25zIGZyb20gRmxpZ2h0IENvbnRyb2wgQVBJXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNiIENhbGxiYWNrIHdoZW4gQVBJIGNhbGwgZmluaXNoZXNcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgYW5kIGRlc3RpbmF0aW9ucyBhcmUgZmV0Y2hlZFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3RhcnQoY2IpIHtcbiAgICAgICAgdmFyIGZsaWdodENvbnRyb2wgPSBuZXcgRmxpZ2h0Q29udHJvbCh7IGxhbmc6IHRoaXMub3B0aW9ucy5sYW5nIH0pO1xuXG4gICAgICAgIGZsaWdodENvbnRyb2wuZmV0Y2goJ2Rlc3RpbmF0aW9ucycsIChkZXN0aW5hdGlvbnMpID0+IHtcbiAgICAgICAgICAgIC8vIEZvcm1hdCByYXcgZGVzdGluYXRpb25zIHRvIGF1dG9jb21wbGV0ZSBzdHJ1Y3R1cmVcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zb3VyY2UgPSB0aGlzLmZvcm1hdChkZXN0aW5hdGlvbnMubGlzdCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgYXV0b2NvbXBsZXRlIHdpZGdldFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudCBET00gZWxlbWVudCB0byBhdHRhY2ggd2lkZ2V0IHRvXG4gICAgICovXG4gICAgcmVuZGVyKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJChlbGVtZW50KS5oaWRlKCksXG4gICAgICAgICAgICBzb3VyY2VDbGFzc2VzID0gJHRoaXMuYXR0cignY2xhc3MnKSxcbiAgICAgICAgICAgIHNvdXJjZVZhbHVlID0gJHRoaXMudmFsKCksXG4gICAgICAgICAgICBzb3VyY2VQbGFjZWhvbGRlciA9ICR0aGlzLmF0dHIoJ3BsYWNlaG9sZGVyJyksXG4gICAgICAgICAgICBkYXRhSW5wdXQgPSAkdGhpcy5kYXRhKCdpbnB1dC1maWVsZCcpXG4gICAgICAgIDtcblxuICAgICAgICB2YXIgJGlucHV0ID0gJCgnPGlucHV0IC8+JylcbiAgICAgICAgICAgIC52YWwoc291cmNlVmFsdWUpXG4gICAgICAgICAgICAuYXR0cigndHlwZScsICd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCdwbGFjZWhvbGRlcicsIHNvdXJjZVBsYWNlaG9sZGVyKVxuICAgICAgICAgICAgLmF0dHIoJ2RhdGEtaW5wdXQtZmllbGQnLCBkYXRhSW5wdXQpXG4gICAgICAgIDtcblxuICAgICAgICAvLyBBZGQgYXV0b2NvbXBsZXRlIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgJGlucHV0LmF1dG9jb21wbGV0ZSh0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIC8vIE9wZW4gbGlzdCBvbiBpbnB1dCBmb2N1c1xuICAgICAgICAkaW5wdXQub24oJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCR0aGlzLnZhbCgpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAkdGhpcy5hdXRvY29tcGxldGUoJ3NlYXJjaCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgc3R5bGluZ1xuICAgICAgICAkaW5wdXRcbiAgICAgICAgICAgIC5hZGRDbGFzcyhzb3VyY2VDbGFzc2VzKVxuICAgICAgICAgICAgLmFkZENsYXNzKCd1aS13aWRnZXQgIHVpLXdpZGdldC1jb250ZW50ICB1aS1zdGF0ZS1kZWZhdWx0Jyk7XG5cbiAgICAgICAgLy8gSW5zZXJ0IGludG8gRE9NXG4gICAgICAgICRpbnB1dC5pbnNlcnRBZnRlcigkdGhpcyk7XG5cbiAgICAgICAgLy8gT3ZlcndyaXRlIGF1dG9jb21wbGV0ZSBpdGVtIHJlbmRlcmluZyB3aXRoIGN1c3RvbSBtYXJrdXBcbiAgICAgICAgJGlucHV0LmF1dG9jb21wbGV0ZSgnaW5zdGFuY2UnKS5fcmVuZGVySXRlbSA9IGZ1bmN0aW9uKHVsLCBpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gJCgnPGxpPicpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChpdGVtLmxhYmVsKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyh1bCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ3VzdG9tIGZpbHRlcmluZyBmdW5jdGlvblxuICAgICAgICAkLnVpLmF1dG9jb21wbGV0ZS5maWx0ZXIgPSBmdW5jdGlvbiBhdXRvQ29tcGxldGVGaWx0ZXIoYXJyYXksIHRlcm0pIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgnXFxcXGInICsgJC51aS5hdXRvY29tcGxldGUuZXNjYXBlUmVnZXgodGVybSksICdpJyk7XG4gICAgICAgICAgICByZXR1cm4gJC5ncmVwKGFycmF5LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlci50ZXN0KHZhbHVlLmxhYmVsIHx8IHZhbHVlLnZhbHVlIHx8IHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdHMgZGVzdGluYXRpb25zIGludG8gdGhlIG5lZWRlZCBzdHJ1Y3R1cmUgdG8gYmUgZGlzcGxheWVkXG4gICAgICogb24gdGhlIGF1dG9jb21wbGV0ZSBtZW51IHdpZGdldC5cbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gZGVzdGluYXRpb25zIFJhdyBkYXRhIHJldHVybmVkIGZyb20gRmxpZ2h0IENvbnRyb2xcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICAgIEZvcm1hdHRlZCBkZXN0aW5hdGlvbnNcbiAgICAgKi9cbiAgICBmb3JtYXQoZGVzdGluYXRpb25zKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAkLmVhY2goZGVzdGluYXRpb25zLCAoaSwgZGVzdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRlbXBMYWJlbCA9XG4gICAgICAgICAgICAgICAgICAgIGA8Yj4keyBkZXN0Lm5hbWVbdGhpcy5vcHRpb25zLmxhbmddIH0sICR7IGRlc3QuY291bnRyeSB9PC9iPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvZGVcIj4gfCAkeyBkZXN0LmlkIH08L3NwYW4+YCxcbiAgICAgICAgICAgICAgICB0ZW1wVmFsdWUgPSBkZXN0LmlkLFxuICAgICAgICAgICAgICAgIHRleHRWYWx1ZSA9IGRlc3QubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10gKyAnLCAnICsgZGVzdC5pZDtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogdGVtcExhYmVsLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0ZW1wVmFsdWUsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGV4dFZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbi8qKlxuICogRXhwb3J0XG4gKiBAZXhwb3J0cyBBdXRvY29tcGxldGVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBBdXRvY29tcGxldGU7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIGkxOG4gPSByZXF1aXJlKCcuLi8uLi8uLi9sYW5nL2RhdGVwaWNrZXIuanNvbicpLFxuICAgIGRlZmF1bHRzID0ge1xuICAgICAgICBkZXBhcnR1cmVTZWxlY3RvcjogJy5jb3BhYWlyLWJvb2tpbmctZGF0ZXBpY2tlci1kZXBhcnR1cmUnLFxuICAgICAgICByZXR1cm5TZWxlY3RvcjogJy5jb3BhYWlyLWJvb2tpbmctZGF0ZXBpY2tlci1yZXR1cm4nLFxuICAgICAgICBkYXRlUnVsZXM6IHtcbiAgICAgICAgICAgIHRvZGF5OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgd2Vla0xhdGVyOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKVxuICAgICAgICB9LFxuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBiZWZvcmVTaG93OiBmdW5jdGlvbihpbnB1dCwgaXNudCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpc250LmRwRGl2LnBvc2l0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgbXk6ICdsZWZ0IGJvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGF0OiAnbGVmdCB0b3AnLFxuICAgICAgICAgICAgICAgICAgICBvZjogaW5wdXRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfVxuO1xuXG4vKipcbiAqIERhdGVwaWNrZXIgbW9kdWxlXG4gKi9cbmNsYXNzIERhdGVwaWNrZXIge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBkYXRlIHBpY2tlciBpbnNpZGUgdGhlIGJvb2tpbmcgZm9ybVxuICAgICAqIHNldHVwcyB0aGUgZGVmYXVsdHMgZGF0ZXMgYW5kIGxhbmd1YWdlXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnNldExvY2FsZSgpO1xuICAgICAgICB0aGlzLnNldERlZmF1bHREYXRlcygpO1xuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBkZWZhdWx0cyBkYXRlc1xuICAgICAqIHRoaXMgY29uc2lzdCBpbiBzZXQgY3VycmVudCBkYXRlIGZvciBkZXBhcnR1cmVcbiAgICAgKiBhbmQgb25lIHdlZWsgbGF0ZXIgZm9yIHJldHVyblxuICAgICAqL1xuICAgIHNldERlZmF1bHREYXRlcygpIHtcbiAgICAgICAgdmFyIGRhdGVSdWxlcyA9IHRoaXMub3B0aW9ucy5kYXRlUnVsZXMsXG4gICAgICAgICAgICAkZGVwYXJ0dXJlRmllbGQgPSAkKHRoaXMub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvciksXG4gICAgICAgICAgICAkcmV0dXJuRmllbGQgPSAkKHRoaXMub3B0aW9ucy5yZXR1cm5TZWxlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLm1pbkRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICRkZXBhcnR1cmVGaWVsZC5kYXRlcGlja2VyKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoXCJzZXREYXRlXCIsIGRhdGVSdWxlcy50b2RheSk7XG4gICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKFwic2V0RGF0ZVwiLCBkYXRlUnVsZXMud2Vla0xhdGVyKTtcbiAgICB9XG5cbiAgICBldmVudHMoKSB7XG4gICAgICAgIHZhciAkZGVwYXJ0dXJlRmllbGQgPSAkKHRoaXMub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvciksXG4gICAgICAgICAgICAkcmV0dXJuRmllbGQgPSAkKHRoaXMub3B0aW9ucy5yZXR1cm5TZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoJ29wdGlvbicsICdvblNlbGVjdCcsIHRoaXMub25TZWxlY3RPdXRib3VuZCk7XG4gICAgfVxuXG4gICAgb25TZWxlY3RPdXRib3VuZChkYXRlVGV4dCwgaW5zdCkge1xuICAgICAgICAgICAgdmFyICRyZXR1cm5GaWVsZCA9ICQodGhpcy5vcHRpb25zLnJldHVyblNlbGVjdG9yKSxcbiAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoaW5zdC5zZWxlY3RlZFllYXIsIGluc3Quc2VsZWN0ZWRNb250aCwgaW5zdC5zZWxlY3RlZERheSk7XG5cbiAgICAgICAgICAgIC8vdGhpcyBzZXRzIHRoZSBpbmJvdW5kIGRhdGUgcGlja2VyIHRvIGEgd2VlayBsYXRlciBvZiBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgdmFyIHdlZWtsYXRlciA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgJHJldHVybkZpZWxkLmRhdGVwaWNrZXIoJ3NldERhdGUnLCB3ZWVrbGF0ZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZSBkYXRlcGlja2VyIGRlcGVuZGluZyBvbiB0aGVcbiAgICAgKiBsb2NhbGl6YXRpb25cbiAgICAgKi9cbiAgICBzZXRMb2NhbGUoKSB7XG4gICAgICAgIHZhciByZWdpb25hbCA9IGkxOG5bdGhpcy5vcHRpb25zLmxhbmddLnJlZ2lvbmFsO1xuICAgICAgICAkLmRhdGVwaWNrZXIuc2V0RGVmYXVsdHMocmVnaW9uYWwpO1xuICAgIH1cblxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0ZXBpY2tlcjtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5yZXF1aXJlKCdzdG9yZS1qcycpO1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIGFwaToge1xuICAgICAgICAgICAgZGVzdGluYXRpb25zIDogXCJodHRwczovL2ZsaWdodGNvbnRyb2wuaW8vYXBpL3JvdXRlcy9kZXN0aW5hdGlvbnNcIixcbiAgICAgICAgICAgIGNvdW50cmllcyA6IFwiaHR0cHM6Ly9mbGlnaHRjb250cm9sLmlvL2FwaS9yb3V0ZXMvY291bnRyaWVzXCIsXG4gICAgICAgICAgICByZWdpb25zIDogXCJodHRwczovL2ZsaWdodGNvbnRyb2wuaW8vYXBpL3JvdXRlcy9yZWdpb25zXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHN0b3JhZ2VFeHBpcmF0aW9uOiA4NjQwMDAwMCxcbiAgICAgICAgc3RvcmFnZTogdHJ1ZSxcbiAgICB9XG47XG5cbi8qKlxuICogRXh0ZW5zaW9uIHRvIHRoZSBzdG9yYWdlIGNsYXNzXG4gKiB0byBzZXR1cCB0aGUgZXhwaXJhdGlvbiB2YWx1ZVxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIHN0b3JlV2lkdGhFeHBpcmF0aW9uID0ge1xuICAgIHNldDogZnVuY3Rpb24oa2V5LCB2YWwsIGV4cCkge1xuICAgICAgICBzdG9yZS5zZXQoa2V5LCB7IHZhbDp2YWwsIGV4cDpleHAsIHRpbWU6bmV3IERhdGUoKS5nZXRUaW1lKCkgfSlcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHZhciBpbmZvID0gc3RvcmUuZ2V0KGtleSlcbiAgICAgICAgaWYgKCFpbmZvKSB7IHJldHVybiBudWxsIH1cbiAgICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5mby50aW1lID4gaW5mby5leHApIHsgcmV0dXJuIG51bGwgfVxuICAgICAgICByZXR1cm4gaW5mby52YWxcbiAgICB9XG59XG5cbi8qKlxuICogTW9kdWxlIEZsaWdodENvbnRyb2xcbiAqL1xuY2xhc3MgRmxpZ2h0Q29udHJvbCB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcblxuICAgICAgICBpZighc3RvcmUuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Jyb3dzZXIgbm90IHN1cHBvcnRlZCBvciBpbiBwcml2YXRlIG1vZGUnKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zdG9yYWdlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBkYXRhIGZyb20gZmxpZ2h0IGNvbnRyb2xsZXJcbiAgICAgKiBiYXNlZCBvbiB0aGUgcmVzb3VyY2UgbmFtZVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICByZXNvdXJjZU5hbWU6IGRlc3RpbmF0aW9uc3xjb3VudHJpZXN8cmVnaW9uc1xuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYiAgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmZXRjaChyZXNvdXJjZU5hbWUsIGNiKSB7XG4gICAgICAgIHZhciByZXNvdXJjZVZhbHVlID0ge307XG5cbiAgICAgICAgaWYodGhpcy5vcHRpb25zLnN0b3JhZ2UgJiYgc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSlcbiAgICAgICAgICAgJiYgc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSArICcuY291bnQnKSkge1xuICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5saXN0ID0gc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSk7XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmNvdW50ID0gc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSArICcuY291bnQnKTtcblxuICAgICAgICAgICByZXR1cm4gY2IocmVzb3VyY2VWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAkLmdldEpTT04odGhpcy5vcHRpb25zLmFwaVtyZXNvdXJjZU5hbWVdLCAoZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnNvcnROYW1lcyhkYXRhKTtcblxuICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLnN0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICBzdG9yZVdpZHRoRXhwaXJhdGlvbi5zZXQocmVzb3VyY2VOYW1lLCBkYXRhLCB0aGlzLm9wdGlvbnMuc3RvcmFnZUV4cGlyYXRpb24pO1xuICAgICAgICAgICAgICAgIHN0b3JlV2lkdGhFeHBpcmF0aW9uLnNldChyZXNvdXJjZU5hbWUgKyAnLmNvdW50JywgZGF0YS5sZW5ndGgsIHRoaXMub3B0aW9ucy5zdG9yYWdlRXhwaXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmxpc3QgPSBkYXRhO1xuICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5jb3VudCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgICBjYihyZXNvdXJjZVZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHNvcnQgZGF0YVxuICAgICAqIGJhc2VkIG9uIGxhbmd1YWdlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgc29ydE5hbWVzKGRhdGEpIHtcbiAgICAgICAgZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSA+IGIubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10pIHJldHVybiAxO1xuICAgICAgICAgICAgaWYgKGEubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10gPCBiLm5hbWVbdGhpcy5vcHRpb25zLmxhbmddKSByZXR1cm4gLTE7XG5cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxpZ2h0Q29udHJvbDtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIG9yaWdpbjogJ2FsbCcsXG4gICAgICAgIGRlc3RpbmF0aW9uOiAnYWxsJyxcbiAgICAgICAgLy8gcmVxdWlyZWQgZmllbGQgdG8gc3VibWl0IGZvcm1cbiAgICAgICAgLy8gdG8gY29wYVxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHRyaXBUeXBlOiBcIlJUXCIsXG4gICAgICAgICAgICBmbGV4aWJsZVNlYXJjaDogXCJ0cnVlXCIsXG4gICAgICAgICAgICBwb3M6IFwiQ01HU1wiLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzBdLnR5cGVcIjogXCJBRFRcIixcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1sxXS50eXBlXCI6IFwiQ05OXCIsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMl0udHlwZVwiOiBcIklORlwiLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzBdLmFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzFdLmFtb3VudFwiOiAwLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzJdLmFtb3VudFwiOiAwLFxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIjogbnVsbCxcbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCI6IG51bGwsXG4gICAgICAgICAgICBcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiOiBudWxsLFxuICAgICAgICAgICAgLy8gXCJjb3Vwb25cIjogbnVsbCxcbiAgICAgICAgICAgIC8vIG9yaWdpblxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiOiBudWxsLFxuICAgICAgICAgICAgLy8gZGVzdGluYXRpb25cbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIC8vIC8vIGNhYmluIGNsYXNzIEJ1c2luZXNzfEVjb25vbXlcbiAgICAgICAgICAgIFwiY2FiaW5DbGFzc1wiOiBcIkVjb25vbXlcIixcbiAgICAgICAgICAgIC8vIGQxOiBudWxsLFxuICAgICAgICAgICAgbGFuZzogJ2VzJ1xuICAgICAgICB9LFxuICAgICAgICBmb3JtVXJsOiAnaHR0cHM6Ly9ib29raW5ncy5jb3BhYWlyLmNvbS9DTUdTLycgK1xuICAgICAgICAgICAgICAgICAgICAgICAnQWlyTG93RmFyZVNlYXJjaEV4dGVybmFsLmRvPydcbiAgICB9XG47XG5cbi8qKlxuICogRm9ybUhlbHBlciBtb2R1bGVcbiAqL1xuY2xhc3MgRm9ybUhlbHBlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcblxuICAgICAgICAvLyBzZXQgZGVmYXV0bHMgdmFsdWVzXG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdEJvdW5kcygpO1xuICAgICAgICB0aGlzLnNldERhdGVzKHRoaXMub3B0aW9ucy5kYXRlcGlja2VyLCB7cmV0dXJuczp0cnVlLCBkZXBhcnR1cmU6dHJ1ZX0pO1xuXG4gICAgICAgIC8vIGxvYWQgZXZlbnRzIHJlbGF0ZWQgd2l0aCBmb3JtIGhlbHBlciBhbmQgb3RoZXIgbW9kdWxlc1xuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9wdGlvbnMuaW5wdXRzKTtcbiAgICB9XG5cblxuXG4gICAgcHJvY2VzcygpIHtcbiAgICAgICAgdmFyIGh0dHBRdWVyeSA9ICQucGFyYW0odGhpcy5vcHRpb25zLmlucHV0cyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGh0dHBRdWVyeSk7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLm9wdGlvbnMuZm9ybVVybDtcblxuICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGlvbkVycm9yKCk7XG5cbiAgICAgICAgaWYgKHZhbGlkYXRpb24uZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0aW9uLmJhZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBubyBlcnJvcnMsIGZvcndhcmQgZm9ybSB2YWx1ZXMgdG8gY29wYVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaHR0cFF1ZXJ5KTtcbiAgICAgICAgICAgIHZhciBzZWFyY2hXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwgKyBodHRwUXVlcnksICdfYmxhbmsnKTtcbiAgICAgICAgICAgIHNlYXJjaFdpbmRvdy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGVmYXVsdEJvdW5kcygpIHtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9yaWdpbiAhPT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Qm91bmRzKCdvcmlnaW4nLCB0aGlzLm9wdGlvbnMub3JpZ2luKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24gIT09J2FsbCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Qm91bmRzKCdkZXN0aW5hdGlvbicsIHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEJvdW5kcyhib3VuZCwgbG9jYXRpb24pIHtcblxuICAgICAgICBpZiAoYm91bmQgPT09ICdvcmlnaW4nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wib3V0Ym91bmRPcHRpb24ub3JpZ2luTG9jYXRpb25Db2RlXCJdID0gbG9jYXRpb247XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiXSA9IGxvY2F0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvdW5kID09PSAnZGVzdGluYXRpb24nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wib3V0Ym91bmRPcHRpb24uZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIl0gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLm9yaWdpbkxvY2F0aW9uQ29kZVwiXSA9IGxvY2F0aW9uO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZXREYXRlcyhkYXRlcGlja2VyLCBib3VuZHMpIHtcbiAgICAgICAgLy8gZ2V0IGN1cnJlbnQgZGF0ZXBpY2tlcnMgZGF0ZXNcbiAgICAgICAgdmFyIGRlcGFydHVyZURhdGUgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvcikuZGF0ZXBpY2tlcignZ2V0RGF0ZScpLFxuICAgICAgICByZXR1cm5EYXRlID0gJChkYXRlcGlja2VyLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpLmRhdGVwaWNrZXIoJ2dldERhdGUnKTtcblxuICAgICAgICBpZiAoYm91bmRzLnJldHVybnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiXSA9IHJldHVybkRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIl0gPSByZXR1cm5EYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiXSA9IHJldHVybkRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGJvdW5kcy5kZXBhcnR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIl0gPSBkZXBhcnR1cmVEYXRlLmdldFVUQ0RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiXSA9IGRlcGFydHVyZURhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiXSA9IGRlcGFydHVyZURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENhYmluQ2xhc3ModGFyZ2V0KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJjYWJpbkNsYXNzXCJdID0gJCh0YXJnZXQpLnZhbCgpO1xuICAgIH1cblxuICAgIHNldFBhc3NlbmdlcnNBbW91bnQodHlwZSwgdmFsdWUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdhZHVsdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImd1ZXN0VHlwZXNbMF0uYW1vdW50XCJdID0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NoaWxkJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiZ3Vlc3RUeXBlc1sxXS5hbW91bnRcIl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5mYW50JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiZ3Vlc3RUeXBlc1syXS5hbW91bnRcIl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q291cG9uKGNvdXBvbikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzLmNvdXBvbiA9IGNvdXBvbjtcbiAgICB9XG5cbiAgICBzZXREMShkMVZhbHVlKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHMuZDEgPSBkMVZhbHVlO1xuICAgIH1cblxuICAgIHZhbGlkYXRpb25FcnJvcigpIHtcbiAgICAgICAgdmFyIGVycm9ycyAgPSB7XG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBiYWc6W11cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGN1cnJlbnRFcnJvcjtcbiAgICAgICAgZm9yICh2YXIgaW5wdXQgaW4gdGhpcy5vcHRpb25zLmlucHV0cykge1xuICAgICAgICAgICAgaWYoIXRoaXMub3B0aW9ucy5pbnB1dHNbaW5wdXRdICYmIHRoaXMub3B0aW9ucy5pbnB1dHNbaW5wdXRdICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVycm9yID0ge307XG4gICAgICAgICAgICAgICAgY3VycmVudEVycm9yLmZpZWxkID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY3VycmVudEVycm9yLm1lc3NhZ2UgPSBgVGhlIGlucHV0ICR7aW5wdXR9IG11c3QgaGF2ZSBzb21lIHZhbHVlYDtcbiAgICAgICAgICAgICAgICBlcnJvcnMuYmFnLnB1c2goY3VycmVudEVycm9yKTtcbiAgICAgICAgICAgICAgICBlcnJvcnMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVycm9ycztcbiAgICB9O1xuXG4gICAgZXZlbnRzKCkge1xuXG4gICAgICAgIHZhciBkYXRlcGlja2VyID0gdGhpcy5vcHRpb25zLmRhdGVwaWNrZXIsXG4gICAgICAgICAgICAkZGVwYXJ0dXJlRmllbGQgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvciksXG4gICAgICAgICAgICAkcmV0dXJuRmllbGQgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5yZXR1cm5TZWxlY3Rvcik7XG5cbiAgICAgICAgJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoJ29wdGlvbicsICdvblNlbGVjdCcsIChkYXRlVGV4dCwgaW5zdCkgPT57XG5cbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoaW5zdC5zZWxlY3RlZFllYXIsIGluc3Quc2VsZWN0ZWRNb250aCwgaW5zdC5zZWxlY3RlZERheSk7XG5cbiAgICAgICAgICAgIC8vIHRoaXMgc2V0cyB0aGUgaW5ib3VuZCBkYXRlIHBpY2tlciB0byBhIHdlZWsgbGF0ZXIgb2YgY3VycmVudCBzZWxlY3Rpb25cbiAgICAgICAgICAgIHZhciB3ZWVrbGF0ZXIgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKCdzZXREYXRlJywgd2Vla2xhdGVyKTtcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnbWluRGF0ZScsIGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlcyhkYXRlcGlja2VyLCB7cmV0dXJuczp0cnVlLCBkZXBhcnR1cmU6dHJ1ZX0pO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnb25TZWxlY3QnLCAoZGF0ZVRleHQsIGluc3QpID0+e1xuXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGluc3Quc2VsZWN0ZWRZZWFyLCBpbnN0LnNlbGVjdGVkTW9udGgsIGluc3Quc2VsZWN0ZWREYXkpO1xuXG4gICAgICAgICAgICAvLyB0aGlzIHNldHMgdGhlIGluYm91bmQgZGF0ZSBwaWNrZXIgdG8gYSB3ZWVrIGxhdGVyIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgd2Vla2xhdGVyID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGVzKGRhdGVwaWNrZXIsIHtyZXR1cm5zOnRydWUsIGRlcGFydHVyZTpmYWxzZX0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuYm9va2luZy5maW5kKCcuanMtY2FiaW4tY2xhc3MnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRDYWJpbkNsYXNzKGUudGFyZ2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmJvb2tpbmcuZmluZCgnLmpzLWFkdWx0cy1hbW91bnQnKS5zZWxlY3RtZW51KHtcbiAgICAgICAgICAgIGNoYW5nZTogKGUsIHVpKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYXNzZW5nZXJzQW1vdW50KCdhZHVsdCcsIHVpLml0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuYm9va2luZy5maW5kKCcuanMtY2hpbGRyZW4tYW1vdW50Jykuc2VsZWN0bWVudSh7XG4gICAgICAgICAgICBjaGFuZ2U6IChlLCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFzc2VuZ2Vyc0Ftb3VudCgnY2hpbGQnLCB1aS5pdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmJvb2tpbmcuZmluZCgnLmpzLWluZmFudHMtYW1vdW50Jykuc2VsZWN0bWVudSh7XG4gICAgICAgICAgICBjaGFuZ2U6IChlLCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFzc2VuZ2Vyc0Ftb3VudCgnaW5mYW50JywgdWkuaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5ib29raW5nLmZpbmQoJy5qcy1zdWJtaXQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1IZWxwZXI7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIEhhbmRsZWJhcnMgPSByZXF1aXJlKCdoYW5kbGViYXJzJyksXG4gICAgaTE4biA9IHtcbiAgICAgICAgYm9va2luZzogcmVxdWlyZSgnLi4vLi4vLi4vbGFuZy9ib29raW5nLmpzb24nKSxcbiAgICAgICAgc2lnbnVwOiByZXF1aXJlKCcuLi8uLi8uLi9sYW5nL3NpZ251cC5qc29uJyksXG4gICAgfSxcbiAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgLy9zcmM6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcycsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHt9XG4gICAgfVxuO1xuXG5cblxuY2xhc3MgVGVtcGxhdGVcbntcblxuICAgIGNvbnN0cnVjdG9yKHdpZGdldCwgb3B0aW9ucykge1xuXG4gICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24ucG9ydCA/ICc6JyArIHdpbmRvdy5sb2NhdGlvbi5wb3J0OiAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0cy5zcmMgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy9ib3dlcl9jb21wb25lbnRzL2NvcGFhaXItd2lkZ2V0cy90ZW1wbGF0ZXMnO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIGlmICh0eXBlb2YgSGFuZGxlYmFycyAhPT0gJ3VuZGVmaW5lZCcgJiYgSGFuZGxlYmFycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGAke3RoaXMub3B0aW9ucy5zcmN9LyR7d2lkZ2V0fS5oYnNgLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh0cGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCBpMThuW3dpZGdldF1bdGhpcy5vcHRpb25zLmxhbmddKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSB0aGlzLmNvbXBpbGUod2lkZ2V0LCB0cGwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2soaHRtbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGlzIHBsdWdpbiByZXF1aXJlcyBIYW5kbGViYXJzLmpzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21waWxlKHdpZGdldCwgdHBsKSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZSh0cGwpO1xuICAgICAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKHRoaXMub3B0aW9ucy5kYXRhKTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlbXBsYXRlO1xuIiwiLyoqXG4gKiBNb2R1bGVzXG4gKi9cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9saWIvVGVtcGxhdGUnKSxcbiAgICBGbGlnaHRDb250cm9sID0gcmVxdWlyZSgnLi4vbGliL0ZsaWdodENvbnRyb2wnKSxcbiAgICBEYXRlcGlja2VyID0gcmVxdWlyZSgnLi4vbGliL0RhdGVwaWNrZXInKSxcbiAgICBBdXRvY29tcGxldGUgPSByZXF1aXJlKCcuLi9saWIvQXV0b2NvbXBsZXRlJyksXG4gICAgRm9ybUhlbHBlciA9IHJlcXVpcmUoJy4uL2xpYi9Gb3JtSGVscGVyJylcbjtcblxuLyoqXG4gKiBPcHRpb25zXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIGQxOiBudWxsLFxuICAgICAgICBjb3Vwb246IG51bGwsXG4gICAgICAgIG9yaWdpbjogbnVsbCxcbiAgICAgICAgZGVzdGluYXRpb246IG51bGwsXG4gICAgICAgIGRlc3RpbmF0aW9uTmFtZTogbnVsbCxcbiAgICAgICAgd2lkZ2V0UG9zaXRpb246IHsgbXk6ICdsZWZ0IGJvdHRvbScsIGF0OiAnbGVmdCB0b3AnIH0sXG4gICAgICAgIHRlbXBsYXRlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcy9ib29raW5nLmhicycsXG4gICAgICAgIGxhbmd1YWdlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL2xhbmcvJ1xuICAgIH1cbjtcblxuXG5jbGFzcyBCb29raW5nIHtcblxuICAgIC8qKlxuICAgICAqIFdpZGdldCBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvciBlbGVtZW50IERPTSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAgT3B0aW9ucyBwYXNzZWQgb24gcGx1Z2luIGluc3RhbmNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRib29raW5nID0gJChlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgbmV3IFRlbXBsYXRlKCdib29raW5nJywge1xuICAgICAgICAgICAgJ2xhbmcnOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgICdvcmlnaW4nOiB0aGlzLm9wdGlvbnMub3JpZ2luLFxuICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uJzogdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uTmFtZSc6IHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbk5hbWUsIC8vIHRlbXBvcmFyeSBmaXggZm9yIHN0YXRpYyBkZXN0aW5hdGlvblxuICAgICAgICAgICAgY2FsbGJhY2s6IChodG1sKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYm9va2luZy5odG1sKGh0bWwpO1xuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBmaW5pc2hlZCwgYnVpbGQgYWxsIHRoZSB3aWRnZXRzXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cFNlbGVjdE1lbnVzKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXR1cCBkYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGVwaWNrZXIgPSBuZXcgRGF0ZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgICAgIGxhbmc6IHRoaXMub3B0aW9ucy5sYW5nLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRhdGVwaWNrZXIucmVuZGVyKCk7XG5cblxuICAgICAgICAgICAgICAgIHZhciBmb3JtSGVscGVyID0gbmV3IEZvcm1IZWxwZXIoe1xuICAgICAgICAgICAgICAgICAgICBkYXRlcGlja2VyOiBkYXRlcGlja2VyLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW46IHRoaXMub3B0aW9ucy5vcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmc6IHRoaXMuJGJvb2tpbmdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCBjdXN0b20gdmFsdWVzIGQxICYgY291cG9uXG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMuZDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUhlbHBlci5zZXREMSh0aGlzLm9wdGlvbnMuZDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5jb3Vwb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUhlbHBlci5zZXRDb3Vwb24odGhpcy5vcHRpb25zLmNvdXBvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQXV0b2NvbXBsZXRlIHdpZGdldHNcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRBdXRvY29tcGxldGUoZm9ybUhlbHBlcik7XG5cblxuICAgICAgICAgICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgICAgICAgICAgdGhpcy5ib29raW5nRXZlbnRzKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0dXAgYXV0b2NvbXBsZXRlIGRlc3RpbmF0aW9uIHdpZGdldHNcbiAgICAgKiBAc2VlIG1vZHVsZTpBdXRvY29tcGxldGVcbiAgICAgKi9cbiAgICBpbml0QXV0b2NvbXBsZXRlKGZvcm1IZWxwZXIpIHtcbiAgICAgICAgLy8gSW5pdCBjbGFzcyB3aXRoIG9wdGlvbnNcbiAgICAgICAgdmFyIGF1dG9jb21wbGV0ZSA9IG5ldyBBdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgbGFuZzogdGhpcy5vcHRpb25zLmxhbmcsXG4gICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChlLCB1aSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IGRpc3BsYXkgdmFsdWUgdG8gdGhlIGlucHV0XG4gICAgICAgICAgICAgICAgJCh0aGlzKS52YWwodWkuaXRlbS5kaXNwbGF5KTtcbiAgICAgICAgICAgICAgICAvL3NldCBhY3R1YWwgdmFsdWUgYXQgdGhlIGJvb2tpbmcgb2JqZWN0XG4gICAgICAgICAgICAgICAgZm9ybUhlbHBlci5zZXRCb3VuZHMoJCh0aGlzKS5kYXRhKCdpbnB1dC1maWVsZCcpLCB1aS5pdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5vcHRpb25zLndpZGdldFBvc2l0aW9uLFxuICAgICAgICAgICAgYXBwZW5kVG86IHRoaXMuJGJvb2tpbmdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQnVpbGRcbiAgICAgICAgYXV0b2NvbXBsZXRlLnN0YXJ0KCgpID0+IHtcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZS5yZW5kZXIodGhpcy4kYm9va2luZy5maW5kKCcuanMtYm9va2luZy1hdXRvY29tcGxldGUnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIHNlbGVjdCBtZW51cyB3aXRoIGN1c3RvbSBVSSB3aWRnZXRzXG4gICAgICovXG4gICAgc2V0dXBTZWxlY3RNZW51cygpIHtcbiAgICAgICAgJCgnLmpzLXNlbGVjdG1lbnUnKS5zZWxlY3RtZW51KHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm9wdGlvbnMud2lkZ2V0UG9zaXRpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZCBldmVudHMgcmVsYXRlZCB0byBib29raW5nIGludGVyYWN0aW9uXG4gICAgICovXG4gICAgYm9va2luZ0V2ZW50cygpIHtcbiAgICAgICAgdmFyICRib29raW5nID0gdGhpcy4kYm9va2luZztcbiAgICAgICAgdmFyICR0b2dnbGUgPSB0aGlzLiRib29raW5nLmZpbmQoJy5qcy1jb3BhYWlyLXRvZ2dsZScpO1xuXG4gICAgICAgIC8vIFNob3cgYm90dG9tIHJvdyB3aGVuIGFueSBpbnB1dCBnZXRzIGZvY3VzXG4gICAgICAgICRib29raW5nLm9uKCdmb2N1cy5jb3BhYWlyJywgJ2lucHV0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJGJvb2tpbmcuYWRkQ2xhc3MoJ2NvcGFhaXItd2lkZ2V0LW9wZW4nKTtcbiAgICAgICAgICAgICR0b2dnbGUucmVtb3ZlQ2xhc3MoJ2NvcGFhaXItaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENsaWNraW5nIGFueXdoZXJlIGluIHRoZSBkb2N1bWVudCBoaWRlcyBib3R0b20gcm93XG4gICAgICAgICRib29raW5nLm9uKCdjbGljay5jb3BhYWlyJywgJy5qcy1jb3BhYWlyLWNsb3NlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJGJvb2tpbmcucmVtb3ZlQ2xhc3MoJ2NvcGFhaXItd2lkZ2V0LW9wZW4nKTtcbiAgICAgICAgICAgICR0b2dnbGUuYWRkQ2xhc3MoJ2NvcGFhaXItaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvb2tpbmc7XG4iLCJ2YXIgVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9saWIvVGVtcGxhdGUnKTtcblxuY2xhc3MgU2lnbnVwIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy4kZm9ybSA9ICQoZWxlbWVudCk7XG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbGFuZzogJ2VzJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gTG9hZCB0ZW1wbGF0ZVxuICAgICAgICBuZXcgVGVtcGxhdGUoJ3NpZ251cCcsIHtcbiAgICAgICAgICAgICdsYW5nJzogdGhpcy5vcHRpb25zLmxhbmcsXG4gICAgICAgICAgICBjYWxsYmFjazogKGh0bWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRmb3JtLmh0bWwoaHRtbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ251cDtcbiJdfQ==
