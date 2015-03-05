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
    defaults = {
    lang: "es",
    origin: false,
    destination: false,
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
        coupon: null,
        // origin
        "outboundOption.originLocationCode": null,
        "inboundOption.destinationLocationCode": null,
        // destination
        "outboundOption.destinationLocationCode": null,
        "inboundOption.originLocationCode": null,
        // // cabin class Business|Economy
        cabinClass: "Economy",
        d1: null,
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
    }

    _prototypeProperties(FormHelper, null, {
        process: {
            value: function process() {

                var httpQuery = $.param(this.options.inputs);
                // console.log(httpQuery);
                var url = this.options.formUrl;

                //     if(_this.validationError(form)){
                //         console.log('error in the form');
                //     }
                //     else{
                var searchWindow = window.open(url + httpQuery, "_blank");
                searchWindow.focus();
                //     }
                // });
            },
            writable: true,
            configurable: true
        },
        setDefaultBounds: {
            value: function setDefaultBounds() {

                if (this.options.origin) {
                    this.setBounds("origin", this.options.origin);
                }

                if (this.options.destination) {
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

                var formHelper = new FormHelper({ datepicker: datepicker });

                // Autocomplete widgets
                _this.initAutocomplete(formHelper);

                //set form defualt values afected
                //by datepicker

                //datepicker events that modify
                //form values
                // this.datepickerFormEvents(datepicker);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9pbmRleC5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvYm93ZXJfY29tcG9uZW50cy9zdG9yZS5qcy9zdG9yZS5taW4uanMiLCJsYW5nL2Jvb2tpbmcuanNvbiIsImxhbmcvZGF0ZXBpY2tlci5qc29uIiwibGFuZy9zaWdudXAuanNvbiIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9BdXRvY29tcGxldGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvRGF0ZXBpY2tlci5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9GbGlnaHRDb250cm9sLmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGFhaXItd2lkZ2V0cy9zcmMvanMvbGliL0Zvcm1IZWxwZXIuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvVGVtcGxhdGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL0Jvb2tpbmcuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL1NpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLEFBQUMsQ0FBQSxVQUFVLE9BQU8sRUFBRTtBQUNoQixnQkFBWSxDQUFDOztBQUViLFFBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7O0FBRTVDLGNBQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9CLE1BQU0sSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7O0FBRXZDLGVBQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUM5QixNQUFNOztBQUVILGVBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNuQjtDQUNKLENBQUEsQ0FBQyxVQUFTLENBQUMsRUFBRTtBQUNWLGdCQUFZLENBQUM7O0FBRWIsUUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDO1FBQ3RDLE1BQU0sR0FBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FDeEM7Ozs7Ozs7O0FBUUQsS0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsU0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFO0FBQ25ELGVBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFXO0FBQ3hCLGdCQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLENBQUMsRUFBRTtBQUN4QyxpQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDckU7U0FDSixDQUFDLENBQUM7S0FDTixDQUFDOztBQUVGLEtBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxHQUFHLFNBQVMsYUFBYSxDQUFDLE9BQU8sRUFBRTtBQUNqRCxlQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBVztBQUN4QixnQkFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixDQUFDLEVBQUU7QUFDdkMsaUJBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ25FO1NBQ0osQ0FBQyxDQUFDO0tBQ04sQ0FBQztDQUNMLENBQUMsQ0FBRTs7Ozs7Ozs7O0FDeENKLENBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFTLENBQUMsR0FBRTtBQUFDLFFBQUc7QUFBQyxhQUFPLENBQUMsSUFBSSxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLGFBQU0sQ0FBQyxDQUFDLENBQUE7S0FBQztHQUFDLElBQUksQ0FBQyxHQUFDLEVBQUU7TUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFFBQVE7TUFBQyxDQUFDLEdBQUMsY0FBYztNQUFDLENBQUMsR0FBQyxRQUFRO01BQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFHLFNBQVMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsUUFBUSxHQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxLQUFDLElBQUUsSUFBSSxLQUFHLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQSxBQUFDLEVBQUMsQ0FBQyxJQUFFLElBQUksS0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFBLEFBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsWUFBVSxFQUFFLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsU0FBUyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsV0FBVyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsUUFBRyxPQUFPLENBQUMsSUFBRSxRQUFRLEVBQUMsT0FBTyxTQUFTLENBQUMsSUFBRztBQUFDLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxhQUFPLENBQUMsSUFBRSxTQUFTLENBQUE7S0FBQztHQUFDLENBQUMsSUFBRyxDQUFDLEVBQUUsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsV0FBTyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxBQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsUUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxLQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLFlBQVU7QUFBQyxLQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsWUFBVTtBQUFDLFFBQUksQ0FBQyxHQUFDLEVBQUUsQ0FBQyxRQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsT0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtLQUFDLENBQUMsRUFBQyxDQUFDLENBQUEsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFNBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO0FBQUMsVUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFDO0dBQUMsQ0FBQyxLQUFLLElBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUM7UUFBSyxDQUFDLEVBQUMsQ0FBQztRQUF5TyxDQUFDLEVBQXVNLENBQUM7OztVQUFrRSxDQUFDLEdBQVYsVUFBVyxDQUFDLEVBQUM7QUFBQyxlQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUE7T0FBQzs7QUFBeGlCLFVBQUc7QUFBQyxTQUFDLEdBQUMsSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxzQkFBc0IsR0FBQyxDQUFDLEdBQUMseUNBQXVDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtPQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtPQUFDO0FBQUksT0FBQyxHQUFDLFdBQVMsQ0FBQyxFQUFDO0FBQUMsZUFBTyxZQUFVO0FBQUMsY0FBSSxDQUFDLEdBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsUUFBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBO1NBQUMsQ0FBQTtPQUFDOztBQUFDLE9BQUMsR0FBQyxJQUFJLE1BQU0sQ0FBQyx1Q0FBdUMsRUFBQyxHQUFHLENBQUM7QUFBK0QsT0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLGdCQUFPLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFHLFNBQVMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxBQUFDLENBQUEsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsU0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFlBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7T0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLFlBQUksQ0FBQyxHQUFDLEVBQUUsQ0FBQyxRQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtTQUFDLENBQUMsRUFBQyxDQUFDLENBQUEsQ0FBQTtPQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsWUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQUMsQ0FBQyxDQUFBOztHQUFDLElBQUc7QUFBQyxRQUFJLENBQUMsR0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLEtBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtHQUFDLENBQUEsT0FBTSxDQUFDLEVBQUM7QUFBQyxLQUFDLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUMsT0FBTyxNQUFNLElBQUUsV0FBVyxJQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDLE1BQU0sS0FBRyxNQUFNLEdBQUMsTUFBTSxDQUFDLE9BQU8sR0FBQyxDQUFDLEdBQUMsT0FBTyxNQUFNLElBQUUsVUFBVSxJQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFBO0NBQUMsQ0FBQSxDQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUE7Ozs7Ozs7Ozs7QUNEbitFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbkNBLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxR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cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBOb2RlL0NvbW1vbkpTXG4gICAgICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxufShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIEJvb2tpbmcgPSByZXF1aXJlKCcuL3dpZGdldHMvQm9va2luZycpLFxuICAgICAgICBTaWdudXAgID0gcmVxdWlyZSgnLi93aWRnZXRzL1NpZ251cCcpXG4gICAgO1xuXG4gICAgLyoqXG4gICAgICogQmluZCB3aWRnZXRzIHRvIGpRdWVyeSBvYmplY3QgcHJvdG90eXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIG92ZXJyaWRlIGRlZmF1bHRzLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBDdXJyZW50IG9iamVjdCBpbnN0YW5jZVxuICAgICAqL1xuICAgICQuZm4uY29wYWFpckJvb2tpbmcgPSBmdW5jdGlvbiBjb3BhYWlyQm9va2luZyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoISQuZGF0YSh0aGlzLCAncGx1Z2luX2NvcGFhaXJCb29raW5nJykpIHtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyQm9va2luZycsIG5ldyBCb29raW5nKHRoaXMsIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQuZm4uY29wYWFpclNpZ251cCA9IGZ1bmN0aW9uIGNvcGFhaXJTaWdudXAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyU2lnbnVwJykpIHtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyU2lnbnVwJywgbmV3IFNpZ251cCh0aGlzLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59KSk7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxMyBNYXJjdXMgV2VzdGluICovXG4oZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbygpe3RyeXtyZXR1cm4gciBpbiBlJiZlW3JdfWNhdGNoKHQpe3JldHVybiExfX12YXIgdD17fSxuPWUuZG9jdW1lbnQscj1cImxvY2FsU3RvcmFnZVwiLGk9XCJzY3JpcHRcIixzO3QuZGlzYWJsZWQ9ITEsdC52ZXJzaW9uPVwiMS4zLjE3XCIsdC5zZXQ9ZnVuY3Rpb24oZSx0KXt9LHQuZ2V0PWZ1bmN0aW9uKGUsdCl7fSx0Lmhhcz1mdW5jdGlvbihlKXtyZXR1cm4gdC5nZXQoZSkhPT11bmRlZmluZWR9LHQucmVtb3ZlPWZ1bmN0aW9uKGUpe30sdC5jbGVhcj1mdW5jdGlvbigpe30sdC50cmFuc2FjdD1mdW5jdGlvbihlLG4scil7cj09bnVsbCYmKHI9bixuPW51bGwpLG49PW51bGwmJihuPXt9KTt2YXIgaT10LmdldChlLG4pO3IoaSksdC5zZXQoZSxpKX0sdC5nZXRBbGw9ZnVuY3Rpb24oKXt9LHQuZm9yRWFjaD1mdW5jdGlvbigpe30sdC5zZXJpYWxpemU9ZnVuY3Rpb24oZSl7cmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpfSx0LmRlc2VyaWFsaXplPWZ1bmN0aW9uKGUpe2lmKHR5cGVvZiBlIT1cInN0cmluZ1wiKXJldHVybiB1bmRlZmluZWQ7dHJ5e3JldHVybiBKU09OLnBhcnNlKGUpfWNhdGNoKHQpe3JldHVybiBlfHx1bmRlZmluZWR9fTtpZihvKCkpcz1lW3JdLHQuc2V0PWZ1bmN0aW9uKGUsbil7cmV0dXJuIG49PT11bmRlZmluZWQ/dC5yZW1vdmUoZSk6KHMuc2V0SXRlbShlLHQuc2VyaWFsaXplKG4pKSxuKX0sdC5nZXQ9ZnVuY3Rpb24oZSxuKXt2YXIgcj10LmRlc2VyaWFsaXplKHMuZ2V0SXRlbShlKSk7cmV0dXJuIHI9PT11bmRlZmluZWQ/bjpyfSx0LnJlbW92ZT1mdW5jdGlvbihlKXtzLnJlbW92ZUl0ZW0oZSl9LHQuY2xlYXI9ZnVuY3Rpb24oKXtzLmNsZWFyKCl9LHQuZ2V0QWxsPWZ1bmN0aW9uKCl7dmFyIGU9e307cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0LG4pe2VbdF09bn0pLGV9LHQuZm9yRWFjaD1mdW5jdGlvbihlKXtmb3IodmFyIG49MDtuPHMubGVuZ3RoO24rKyl7dmFyIHI9cy5rZXkobik7ZShyLHQuZ2V0KHIpKX19O2Vsc2UgaWYobi5kb2N1bWVudEVsZW1lbnQuYWRkQmVoYXZpb3Ipe3ZhciB1LGE7dHJ5e2E9bmV3IEFjdGl2ZVhPYmplY3QoXCJodG1sZmlsZVwiKSxhLm9wZW4oKSxhLndyaXRlKFwiPFwiK2krXCI+ZG9jdW1lbnQudz13aW5kb3c8L1wiK2krJz48aWZyYW1lIHNyYz1cIi9mYXZpY29uLmljb1wiPjwvaWZyYW1lPicpLGEuY2xvc2UoKSx1PWEudy5mcmFtZXNbMF0uZG9jdW1lbnQscz11LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIil9Y2F0Y2goZil7cz1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdT1uLmJvZHl9dmFyIGw9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApO24udW5zaGlmdChzKSx1LmFwcGVuZENoaWxkKHMpLHMuYWRkQmVoYXZpb3IoXCIjZGVmYXVsdCN1c2VyRGF0YVwiKSxzLmxvYWQocik7dmFyIGk9ZS5hcHBseSh0LG4pO3JldHVybiB1LnJlbW92ZUNoaWxkKHMpLGl9fSxjPW5ldyBSZWdFeHAoXCJbIVxcXCIjJCUmJygpKissL1xcXFxcXFxcOjs8PT4/QFtcXFxcXV5ge3x9fl1cIixcImdcIik7ZnVuY3Rpb24gaChlKXtyZXR1cm4gZS5yZXBsYWNlKC9eZC8sXCJfX18kJlwiKS5yZXBsYWNlKGMsXCJfX19cIil9dC5zZXQ9bChmdW5jdGlvbihlLG4saSl7cmV0dXJuIG49aChuKSxpPT09dW5kZWZpbmVkP3QucmVtb3ZlKG4pOihlLnNldEF0dHJpYnV0ZShuLHQuc2VyaWFsaXplKGkpKSxlLnNhdmUociksaSl9KSx0LmdldD1sKGZ1bmN0aW9uKGUsbixyKXtuPWgobik7dmFyIGk9dC5kZXNlcmlhbGl6ZShlLmdldEF0dHJpYnV0ZShuKSk7cmV0dXJuIGk9PT11bmRlZmluZWQ/cjppfSksdC5yZW1vdmU9bChmdW5jdGlvbihlLHQpe3Q9aCh0KSxlLnJlbW92ZUF0dHJpYnV0ZSh0KSxlLnNhdmUocil9KSx0LmNsZWFyPWwoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5YTUxEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0cmlidXRlcztlLmxvYWQocik7Zm9yKHZhciBuPTAsaTtpPXRbbl07bisrKWUucmVtb3ZlQXR0cmlidXRlKGkubmFtZSk7ZS5zYXZlKHIpfSksdC5nZXRBbGw9ZnVuY3Rpb24oZSl7dmFyIG49e307cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbihlLHQpe25bZV09dH0pLG59LHQuZm9yRWFjaD1sKGZ1bmN0aW9uKGUsbil7dmFyIHI9ZS5YTUxEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0cmlidXRlcztmb3IodmFyIGk9MCxzO3M9cltpXTsrK2kpbihzLm5hbWUsdC5kZXNlcmlhbGl6ZShlLmdldEF0dHJpYnV0ZShzLm5hbWUpKSl9KX10cnl7dmFyIHA9XCJfX3N0b3JlanNfX1wiO3Quc2V0KHAscCksdC5nZXQocCkhPXAmJih0LmRpc2FibGVkPSEwKSx0LnJlbW92ZShwKX1jYXRjaChmKXt0LmRpc2FibGVkPSEwfXQuZW5hYmxlZD0hdC5kaXNhYmxlZCx0eXBlb2YgbW9kdWxlIT1cInVuZGVmaW5lZFwiJiZtb2R1bGUuZXhwb3J0cyYmdGhpcy5tb2R1bGUhPT1tb2R1bGU/bW9kdWxlLmV4cG9ydHM9dDp0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOmUuc3RvcmU9dH0pKEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSkiLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcIm9yaWdpblwiOiBcIkRlc2RlXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uXCI6IFwiSGFjaWFcIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiU2FsaWRhXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJlZ3Jlc29cIixcbiAgICAgICAgICAgIFwiZWNvbm9taWNcIjogXCJDbGFzZSBFY29uw7NtaWNhXCIsXG4gICAgICAgICAgICBcImJ1c2luZXNzXCI6IFwiQ2xhc2UgRWplY3V0aXZhXCIsXG4gICAgICAgICAgICBcInN1Ym1pdFwiOiBcIlZlciBWdWVsb3NcIixcbiAgICAgICAgICAgIFwiYWR1bHRzXCI6IFwiQWR1bHRvc1wiLFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBcIk5pw7Fvc1wiLFxuICAgICAgICAgICAgXCJpbmZhbnRzXCIgOiBcIkluZmFudGVzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlc1wiOiB7XG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZW5cIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJvcmlnaW5cIjogXCJGcm9tXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uXCI6IFwiVG9cIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiRGVwYXJ0dXJlXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJldHVyblwiLFxuICAgICAgICAgICAgXCJlY29ub21pY1wiOiBcIkJ1c2luZXNzIENsYXNzXCIsXG4gICAgICAgICAgICBcImJ1c2luZXNzXCI6IFwiRWNvbm9teSBDbGFzc1wiLFxuICAgICAgICAgICAgXCJzdWJtaXRcIjogXCJGaW5kIGZsaWdodHNcIixcbiAgICAgICAgICAgIFwiYWR1bHRzXCI6IFwiQWR1bHRzXCIsXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IFwiQ2hpbGRyZW5cIixcbiAgICAgICAgICAgIFwiaW5mYW50c1wiIDogXCJJbmZhbnRzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlc1wiOiB7XG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiOiBcIlBsZWFzZSBjb21wbGV0ZSBhbGwgdGhlIC4uLlwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBsZWFzZSBjb21wbGV0ZSBhbGwgdGhlIC4uLlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicHRcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJvcmlnaW5cIjogXCJEZVwiLFxuICAgICAgICAgICAgXCJkZXN0aW5hdGlvblwiOiBcIlBhcmFcIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiU2HDrWRhXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJlZ3Jlc3NvXCIsXG4gICAgICAgICAgICBcImVjb25vbWljXCI6IFwiQ2xhc3NlIGVjb27DtG1pY2FcIixcbiAgICAgICAgICAgIFwiYnVzaW5lc3NcIjogXCJDbGFzc2UgRXhlY3V0aXZhXCIsXG4gICAgICAgICAgICBcInN1Ym1pdFwiOiBcIkJ1c2NhciB2b29zXCIsXG4gICAgICAgICAgICBcImFkdWx0c1wiOiBcIkFkdWx0b3NcIixcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogXCJDcmlhbsOnYXNcIixcbiAgICAgICAgICAgIFwiaW5mYW50c1wiIDogXCJCZWLDqnNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1lc3NhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibm90aWZpY2F0aW9uXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJyZWdpb25hbFwiOiB7XG4gICAgICAgICAgICBcImNsb3NlVGV4dFwiOiBcIkNlcnJhclwiLFxuICAgICAgICAgICAgXCJwcmV2VGV4dFwiOiBcIiYjeDNDO0FudFwiLFxuICAgICAgICAgICAgXCJuZXh0VGV4dFwiOiBcIlNpZyYjeDNFO1wiLFxuICAgICAgICAgICAgXCJjdXJyZW50VGV4dFwiOiBcIkhveVwiLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzXCI6IFtcImVuZXJvXCIsXCJmZWJyZXJvXCIsXCJtYXJ6b1wiLFwiYWJyaWxcIixcIm1heW9cIixcImp1bmlvXCIsXG4gICAgICAgICAgICBcImp1bGlvXCIsXCJhZ29zdG9cIixcInNlcHRpZW1icmVcIixcIm9jdHVicmVcIixcIm5vdmllbWJyZVwiLFwiZGljaWVtYnJlXCJdLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzU2hvcnRcIjogW1wiZW5lXCIsXCJmZWJcIixcIm1hclwiLFwiYWJyXCIsXCJtYXlcIixcImp1bicsJ2p1bFwiLFwiYWdvXCIsXCJzZXBcIixcIm9jdFwiLFwibm92XCIsXCJkaWNcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzXCI6IFtcImRvbWluZ29cIixcImx1bmVzXCIsXCJtYXJ0ZXNcIixcIm1pw6lyY29sZXMnLCdqdWV2ZXNcIixcInZpZXJuZXNcIixcInPDoWJhZG9cIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzU2hvcnRcIjogW1wiZG9tXCIsXCJsdW5cIixcIm1hclwiLFwibWnDqVwiLFwianV2XCIsXCJ2aWVcIixcInPDoWJcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzTWluXCI6IFtcIkRcIixcIkxcIixcIk1cIixcIlhcIixcIkpcIixcIlZcIixcIlNcIl0sXG4gICAgICAgICAgICBcIndlZWtIZWFkZXJcIjogXCJTbVwiLFxuICAgICAgICAgICAgXCJkYXRlRm9ybWF0XCI6IFwiZGQvbW0veXlcIixcbiAgICAgICAgICAgIFwiZmlyc3REYXlcIjogMSxcbiAgICAgICAgICAgIFwiaXNSVExcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNob3dNb250aEFmdGVyWWVhclwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwieWVhclN1ZmZpeFwiOiBcIlwiXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgXCJlblwiOiB7XG4gICAgICAgIFwicmVnaW9uYWxcIiA6IHt9XG4gICAgfSxcbiAgICBcInB0XCI6IHtcbiAgICAgICAgXCJyZWdpb25hbFwiIDoge1xuICAgICAgICAgICAgXCJjbG9zZVRleHRcIjogXCJGZWNoYXJcIixcbiAgICAgICAgICAgIFwicHJldlRleHRcIjogXCImI3gzQztBbnRlcmlvclwiLFxuICAgICAgICAgICAgXCJuZXh0VGV4dFwiOiBcIlByw7N4aW1vJiN4M0U7XCIsXG4gICAgICAgICAgICBcImN1cnJlbnRUZXh0XCI6IFwiSG9qZVwiLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzXCI6IFtcIkphbmVpcm9cIixcIkZldmVyZWlyb1wiLFwiTWFyw6dvXCIsXCJBYnJpbFwiLFwiTWFpb1wiLFwiSnVuaG9cIixcIkp1bGhvXCIsXCJBZ29zdG9cIixcIlNldGVtYnJvXCIsXCJPdXR1YnJvXCIsXCJOb3ZlbWJyb1wiLFwiRGV6ZW1icm9cIl0sXG4gICAgICAgICAgICBcIm1vbnRoTmFtZXNTaG9ydFwiOiBbXCJKYW5cIixcIkZldlwiLFwiTWFyXCIsXCJBYnJcIixcIk1haVwiLFwiSnVuXCIsXCJKdWxcIixcIkFnb1wiLFwiU2V0XCIsXCJPdXRcIixcIk5vdlwiLFwiRGV6XCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc1wiOiBbXCJEb21pbmdvXCIsXCJTZWd1bmRhLWZlaXJhXCIsXCJUZXLDp2EtZmVpcmFcIixcIlF1YXJ0YS1mZWlyYScsJ1F1aW50YS1mZWlyYVwiLFwiU2V4dGEtZmVpcmFcIixcIlPDoWJhZG9cIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzU2hvcnRcIjogW1wiRG9tXCIsXCJTZWdcIixcIlRlclwiLFwiUXVhXCIsXCJRdWlcIixcIlNleFwiLFwiU8OhYlwiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNNaW5cIjogW1wiRG9tXCIsXCJTZWdcIixcIlRlclwiLFwiUXVhXCIsXCJRdWlcIixcIlNleFwiLFwiU8OhYlwiXSxcbiAgICAgICAgICAgIFwid2Vla0hlYWRlclwiOiBcIlNtXCIsXG4gICAgICAgICAgICBcImRhdGVGb3JtYXRcIjogXCJkZC9tbS95eVwiLFxuICAgICAgICAgICAgXCJmaXJzdERheVwiOiAwLFxuICAgICAgICAgICAgXCJpc1JUTFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2hvd01vbnRoQWZ0ZXJZZWFyXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ5ZWFyU3VmZml4XCI6IFwiXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwiZm5hbWVcIjogXCJOb21icmVcIixcbiAgICAgICAgICAgIFwibG5hbWVcIjogXCJBcGVsbGlkb1wiLFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIkVtYWlsXCIsXG4gICAgICAgICAgICBcImNvdW50cnlcIjogXCJQYcOtc1wiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiQ2l1ZGFkXCIsXG4gICAgICAgICAgICBcInBob25lXCI6IFwiTcOzdmlsXCIsXG4gICAgICAgICAgICBcInN1YnNjcmliZVwiOiBcIlN1YnNjcmliaXJzZVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZW5cIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJmbmFtZVwiOiBcIk5hbWVcIixcbiAgICAgICAgICAgIFwibG5hbWVcIjogXCJMYXN0IE5hbWVcIixcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJFbWFpbFwiLFxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiQ291bnRyeVwiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiQ2l0eVwiLFxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIk1vYmlsZVwiLFxuICAgICAgICAgICAgXCJzdWJzY3JpYmVcIjogXCJTdWJzY3JpYmVcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInB0XCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwiZm5hbWVcIjogXCJOb21lXCIsXG4gICAgICAgICAgICBcImxuYW1lXCI6IFwiU29icmVub21lXCIsXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiRS1tYWlsXCIsXG4gICAgICAgICAgICBcImNvdW50cnlcIjogXCJQYcOtc1wiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiQ2lkYWRlXCIsXG4gICAgICAgICAgICBcInBob25lXCI6IFwiQ2VsdWxhclwiLFxuICAgICAgICAgICAgXCJzdWJzY3JpYmVcIjogXCJJbnNjcmV2ZXItc2VcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBGbGlnaHRDb250cm9sID0gcmVxdWlyZSgnLi9GbGlnaHRDb250cm9sJylcbjtcblxuLyoqXG4gKiBBdXRvY29tcGxldGUgd2lkZ2V0IHdpdGggbGlzdCBvZiBDb3BhJ3MgZGVzdGluYXRpb25zXG4gKiBmb3IgYmV0dGVyIHVzYWJpbGl0eSB0aGFuIGEgbmF0aXZlIHNlbGVjdCBtZW51LlxuICogQGNsYXNzXG4gKi9cbmNsYXNzIEF1dG9jb21wbGV0ZVxue1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIEN1c3RvbSBvcHRpb25zIGZvciB0aGlzIHdpZGdldCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgICAgIG1pbkxlbmd0aDogMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBkZXN0aW5hdGlvbnMgZnJvbSBGbGlnaHQgQ29udHJvbCBBUElcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2sgd2hlbiBBUEkgY2FsbCBmaW5pc2hlc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICBhbmQgZGVzdGluYXRpb25zIGFyZSBmZXRjaGVkXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzdGFydChjYikge1xuICAgICAgICB2YXIgZmxpZ2h0Q29udHJvbCA9IG5ldyBGbGlnaHRDb250cm9sKHsgbGFuZzogdGhpcy5vcHRpb25zLmxhbmcgfSk7XG5cbiAgICAgICAgZmxpZ2h0Q29udHJvbC5mZXRjaCgnZGVzdGluYXRpb25zJywgKGRlc3RpbmF0aW9ucykgPT4ge1xuICAgICAgICAgICAgLy8gRm9ybWF0IHJhdyBkZXN0aW5hdGlvbnMgdG8gYXV0b2NvbXBsZXRlIHN0cnVjdHVyZVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNvdXJjZSA9IHRoaXMuZm9ybWF0KGRlc3RpbmF0aW9ucy5saXN0KTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBhdXRvY29tcGxldGUgd2lkZ2V0XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50IERPTSBlbGVtZW50IHRvIGF0dGFjaCB3aWRnZXQgdG9cbiAgICAgKi9cbiAgICByZW5kZXIoZWxlbWVudCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKGVsZW1lbnQpLmhpZGUoKSxcbiAgICAgICAgICAgIHNvdXJjZUNsYXNzZXMgPSAkdGhpcy5hdHRyKCdjbGFzcycpLFxuICAgICAgICAgICAgc291cmNlVmFsdWUgPSAkdGhpcy52YWwoKSxcbiAgICAgICAgICAgIHNvdXJjZVBsYWNlaG9sZGVyID0gJHRoaXMuYXR0cigncGxhY2Vob2xkZXInKSxcbiAgICAgICAgICAgIGRhdGFJbnB1dCA9ICR0aGlzLmRhdGEoJ2lucHV0LWZpZWxkJylcbiAgICAgICAgO1xuXG4gICAgICAgIHZhciAkaW5wdXQgPSAkKCc8aW5wdXQgLz4nKVxuICAgICAgICAgICAgLnZhbChzb3VyY2VWYWx1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd0eXBlJywgJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3BsYWNlaG9sZGVyJywgc291cmNlUGxhY2Vob2xkZXIpXG4gICAgICAgICAgICAuYXR0cignZGF0YS1pbnB1dC1maWVsZCcsIGRhdGFJbnB1dClcbiAgICAgICAgO1xuXG4gICAgICAgIC8vIEFkZCBhdXRvY29tcGxldGUgZnVuY3Rpb25hbGl0eVxuICAgICAgICAkaW5wdXQuYXV0b2NvbXBsZXRlKHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgLy8gT3BlbiBsaXN0IG9uIGlucHV0IGZvY3VzXG4gICAgICAgICRpbnB1dC5vbignZm9jdXMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZiAoJHRoaXMudmFsKCkubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICR0aGlzLmF1dG9jb21wbGV0ZSgnc2VhcmNoJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBzdHlsaW5nXG4gICAgICAgICRpbnB1dFxuICAgICAgICAgICAgLmFkZENsYXNzKHNvdXJjZUNsYXNzZXMpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3VpLXdpZGdldCAgdWktd2lkZ2V0LWNvbnRlbnQgIHVpLXN0YXRlLWRlZmF1bHQnKTtcblxuICAgICAgICAvLyBJbnNlcnQgaW50byBET01cbiAgICAgICAgJGlucHV0Lmluc2VydEFmdGVyKCR0aGlzKTtcblxuICAgICAgICAvLyBPdmVyd3JpdGUgYXV0b2NvbXBsZXRlIGl0ZW0gcmVuZGVyaW5nIHdpdGggY3VzdG9tIG1hcmt1cFxuICAgICAgICAkaW5wdXQuYXV0b2NvbXBsZXRlKCdpbnN0YW5jZScpLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24odWwsIGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAkKCc8bGk+JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kKGl0ZW0ubGFiZWwpXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKHVsKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBDdXN0b20gZmlsdGVyaW5nIGZ1bmN0aW9uXG4gICAgICAgICQudWkuYXV0b2NvbXBsZXRlLmZpbHRlciA9IGZ1bmN0aW9uIGF1dG9Db21wbGV0ZUZpbHRlcihhcnJheSwgdGVybSkge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCdcXFxcYicgKyAkLnVpLmF1dG9jb21wbGV0ZS5lc2NhcGVSZWdleCh0ZXJtKSwgJ2knKTtcbiAgICAgICAgICAgIHJldHVybiAkLmdyZXAoYXJyYXksIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVyLnRlc3QodmFsdWUubGFiZWwgfHwgdmFsdWUudmFsdWUgfHwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0cyBkZXN0aW5hdGlvbnMgaW50byB0aGUgbmVlZGVkIHN0cnVjdHVyZSB0byBiZSBkaXNwbGF5ZWRcbiAgICAgKiBvbiB0aGUgYXV0b2NvbXBsZXRlIG1lbnUgd2lkZ2V0LlxuICAgICAqIEBwYXJhbSAge0FycmF5fSBkZXN0aW5hdGlvbnMgUmF3IGRhdGEgcmV0dXJuZWQgZnJvbSBGbGlnaHQgQ29udHJvbFxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgICAgRm9ybWF0dGVkIGRlc3RpbmF0aW9uc1xuICAgICAqL1xuICAgIGZvcm1hdChkZXN0aW5hdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgICQuZWFjaChkZXN0aW5hdGlvbnMsIChpLCBkZXN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgdGVtcExhYmVsID1cbiAgICAgICAgICAgICAgICAgICAgYDxiPiR7IGRlc3QubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10gfSwgJHsgZGVzdC5jb3VudHJ5IH08L2I+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29kZVwiPiB8ICR7IGRlc3QuaWQgfTwvc3Bhbj5gLFxuICAgICAgICAgICAgICAgIHRlbXBWYWx1ZSA9IGRlc3QuaWQsXG4gICAgICAgICAgICAgICAgdGV4dFZhbHVlID0gZGVzdC5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSArICcsICcgKyBkZXN0LmlkO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiB0ZW1wTGFiZWwsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRlbXBWYWx1ZSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0ZXh0VmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBFeHBvcnRcbiAqIEBleHBvcnRzIEF1dG9jb21wbGV0ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IEF1dG9jb21wbGV0ZTtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgaTE4biA9IHJlcXVpcmUoJy4uLy4uLy4uL2xhbmcvZGF0ZXBpY2tlci5qc29uJyksXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIGRlcGFydHVyZVNlbGVjdG9yOiAnLmNvcGFhaXItYm9va2luZy1kYXRlcGlja2VyLWRlcGFydHVyZScsXG4gICAgICAgIHJldHVyblNlbGVjdG9yOiAnLmNvcGFhaXItYm9va2luZy1kYXRlcGlja2VyLXJldHVybicsXG4gICAgICAgIGRhdGVSdWxlczoge1xuICAgICAgICAgICAgdG9kYXk6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICB3ZWVrTGF0ZXI6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApXG4gICAgICAgIH0sXG4gICAgICAgIGxhbmc6ICdlcydcbiAgICB9XG47XG5cbi8qKlxuICogRGF0ZXBpY2tlciBtb2R1bGVcbiAqL1xuY2xhc3MgRGF0ZXBpY2tlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgZGF0ZSBwaWNrZXIgaW5zaWRlIHRoZSBib29raW5nIGZvcm1cbiAgICAgKiBzZXR1cHMgdGhlIGRlZmF1bHRzIGRhdGVzIGFuZCBsYW5ndWFnZVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5zZXRMb2NhbGUoKTtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0RGF0ZXMoKTtcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgZGVmYXVsdHMgZGF0ZXNcbiAgICAgKiB0aGlzIGNvbnNpc3QgaW4gc2V0IGN1cnJlbnQgZGF0ZSBmb3IgZGVwYXJ0dXJlXG4gICAgICogYW5kIG9uZSB3ZWVrIGxhdGVyIGZvciByZXR1cm5cbiAgICAgKi9cbiAgICBzZXREZWZhdWx0RGF0ZXMoKSB7XG5cbiAgICAgICAgdmFyIGRhdGVSdWxlcyA9IHRoaXMub3B0aW9ucy5kYXRlUnVsZXMsXG4gICAgICAgICAgICAkZGVwYXJ0dXJlRmllbGQgPSAkKHRoaXMub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvciksXG4gICAgICAgICAgICAkcmV0dXJuRmllbGQgPSAkKHRoaXMub3B0aW9ucy5yZXR1cm5TZWxlY3Rvcik7XG5cblxuICAgICAgICAkZGVwYXJ0dXJlRmllbGQuZGF0ZXBpY2tlcih7XG4gICAgICAgICAgICBtaW5EYXRlOiBuZXcgRGF0ZSgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKHtcbiAgICAgICAgICAgIG1pbkRhdGU6IG5ldyBEYXRlKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoXCJzZXREYXRlXCIsIGRhdGVSdWxlcy50b2RheSk7XG4gICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKFwic2V0RGF0ZVwiLCBkYXRlUnVsZXMud2Vla0xhdGVyKTtcbiAgICB9XG5cbiAgICBldmVudHMoKSB7XG4gICAgICAgIHZhciAkZGVwYXJ0dXJlRmllbGQgPSAkKHRoaXMub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvciksXG4gICAgICAgICAgICAkcmV0dXJuRmllbGQgPSAkKHRoaXMub3B0aW9ucy5yZXR1cm5TZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoJ29wdGlvbicsICdvblNlbGVjdCcsIHRoaXMub25TZWxlY3RPdXRib3VuZCk7XG4gICAgfVxuXG5cbiAgICBvblNlbGVjdE91dGJvdW5kKGRhdGVUZXh0LCBpbnN0KSB7XG4gICAgICAgICAgICB2YXIgJHJldHVybkZpZWxkID0gJCh0aGlzLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpLFxuICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShpbnN0LnNlbGVjdGVkWWVhciwgaW5zdC5zZWxlY3RlZE1vbnRoLCBpbnN0LnNlbGVjdGVkRGF5KTtcblxuICAgICAgICAgICAgLy90aGlzIHNldHMgdGhlIGluYm91bmQgZGF0ZSBwaWNrZXIgdG8gYSB3ZWVrIGxhdGVyIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgd2Vla2xhdGVyID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignc2V0RGF0ZScsIHdlZWtsYXRlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZSBkYXRlcGlja2VyIGRlcGVuZGluZyBvbiB0aGVcbiAgICAgKiBsb2NhbGl6YXRpb25cbiAgICAgKi9cbiAgICBzZXRMb2NhbGUoKSB7XG4gICAgICAgIHZhciByZWdpb25hbCA9IGkxOG5bdGhpcy5vcHRpb25zLmxhbmddLnJlZ2lvbmFsO1xuICAgICAgICAkLmRhdGVwaWNrZXIuc2V0RGVmYXVsdHMocmVnaW9uYWwpO1xuICAgIH1cblxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0ZXBpY2tlcjtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5yZXF1aXJlKCdzdG9yZS1qcycpO1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIGFwaToge1xuICAgICAgICAgICAgZGVzdGluYXRpb25zIDogXCJodHRwczovL2ZsaWdodGNvbnRyb2wuaW8vYXBpL3JvdXRlcy9kZXN0aW5hdGlvbnNcIixcbiAgICAgICAgICAgIGNvdW50cmllcyA6IFwiaHR0cHM6Ly9mbGlnaHRjb250cm9sLmlvL2FwaS9yb3V0ZXMvY291bnRyaWVzXCIsXG4gICAgICAgICAgICByZWdpb25zIDogXCJodHRwczovL2ZsaWdodGNvbnRyb2wuaW8vYXBpL3JvdXRlcy9yZWdpb25zXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHN0b3JhZ2VFeHBpcmF0aW9uOiA4NjQwMDAwMCxcbiAgICAgICAgc3RvcmFnZTogdHJ1ZSxcbiAgICB9XG47XG5cbi8qKlxuICogRXh0ZW5zaW9uIHRvIHRoZSBzdG9yYWdlIGNsYXNzXG4gKiB0byBzZXR1cCB0aGUgZXhwaXJhdGlvbiB2YWx1ZVxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIHN0b3JlV2lkdGhFeHBpcmF0aW9uID0ge1xuICAgIHNldDogZnVuY3Rpb24oa2V5LCB2YWwsIGV4cCkge1xuICAgICAgICBzdG9yZS5zZXQoa2V5LCB7IHZhbDp2YWwsIGV4cDpleHAsIHRpbWU6bmV3IERhdGUoKS5nZXRUaW1lKCkgfSlcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHZhciBpbmZvID0gc3RvcmUuZ2V0KGtleSlcbiAgICAgICAgaWYgKCFpbmZvKSB7IHJldHVybiBudWxsIH1cbiAgICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5mby50aW1lID4gaW5mby5leHApIHsgcmV0dXJuIG51bGwgfVxuICAgICAgICByZXR1cm4gaW5mby52YWxcbiAgICB9XG59XG5cbi8qKlxuICogTW9kdWxlIEZsaWdodENvbnRyb2xcbiAqL1xuY2xhc3MgRmxpZ2h0Q29udHJvbCB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcblxuICAgICAgICBpZighc3RvcmUuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Jyb3dzZXIgbm90IHN1cHBvcnRlZCBvciBpbiBwcml2YXRlIG1vZGUnKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zdG9yYWdlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBkYXRhIGZyb20gZmxpZ2h0IGNvbnRyb2xsZXJcbiAgICAgKiBiYXNlZCBvbiB0aGUgcmVzb3VyY2UgbmFtZVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICByZXNvdXJjZU5hbWU6IGRlc3RpbmF0aW9uc3xjb3VudHJpZXN8cmVnaW9uc1xuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYiAgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmZXRjaChyZXNvdXJjZU5hbWUsIGNiKSB7XG4gICAgICAgIHZhciByZXNvdXJjZVZhbHVlID0ge307XG5cbiAgICAgICAgaWYodGhpcy5vcHRpb25zLnN0b3JhZ2UgJiYgc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSlcbiAgICAgICAgICAgJiYgc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSArICcuY291bnQnKSkge1xuICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5saXN0ID0gc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSk7XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmNvdW50ID0gc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSArICcuY291bnQnKTtcblxuICAgICAgICAgICByZXR1cm4gY2IocmVzb3VyY2VWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAkLmdldEpTT04odGhpcy5vcHRpb25zLmFwaVtyZXNvdXJjZU5hbWVdLCAoZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnNvcnROYW1lcyhkYXRhKTtcblxuICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLnN0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICBzdG9yZVdpZHRoRXhwaXJhdGlvbi5zZXQocmVzb3VyY2VOYW1lLCBkYXRhLCB0aGlzLm9wdGlvbnMuc3RvcmFnZUV4cGlyYXRpb24pO1xuICAgICAgICAgICAgICAgIHN0b3JlV2lkdGhFeHBpcmF0aW9uLnNldChyZXNvdXJjZU5hbWUgKyAnLmNvdW50JywgZGF0YS5sZW5ndGgsIHRoaXMub3B0aW9ucy5zdG9yYWdlRXhwaXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmxpc3QgPSBkYXRhO1xuICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5jb3VudCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgICBjYihyZXNvdXJjZVZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHNvcnQgZGF0YVxuICAgICAqIGJhc2VkIG9uIGxhbmd1YWdlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgc29ydE5hbWVzKGRhdGEpIHtcbiAgICAgICAgZGF0YS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChhLm5hbWVbbGFuZ10gPiBiLm5hbWVbbGFuZ10pIHJldHVybiAxO1xuICAgICAgICAgICAgaWYgKGEubmFtZVtsYW5nXSA8IGIubmFtZVtsYW5nXSkgcmV0dXJuIC0xO1xuXG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsaWdodENvbnRyb2w7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIGRlZmF1bHRzID0ge1xuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBvcmlnaW46IGZhbHNlLFxuICAgICAgICBkZXN0aW5hdGlvbjogZmFsc2UsXG4gICAgICAgIC8vIHJlcXVpcmVkIGZpZWxkIHRvIHN1Ym1pdCBmb3JtXG4gICAgICAgIC8vIHRvIGNvcGFcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB0cmlwVHlwZTogXCJSVFwiLFxuICAgICAgICAgICAgZmxleGlibGVTZWFyY2g6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgcG9zOiBcIkNNR1NcIixcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1swXS50eXBlXCI6IFwiQURUXCIsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMV0udHlwZVwiOiBcIkNOTlwiLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzJdLnR5cGVcIjogXCJJTkZcIixcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1swXS5hbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1sxXS5hbW91bnRcIjogMCxcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1syXS5hbW91bnRcIjogMCxcbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlRGF5XCI6IG51bGwsXG4gICAgICAgICAgICBcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCI6IG51bGwsXG4gICAgICAgICAgICBcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZVllYXJcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZVllYXJcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY291cG9uXCI6IG51bGwsXG4gICAgICAgICAgICAvLyBvcmlnaW5cbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24ub3JpZ2luTG9jYXRpb25Db2RlXCI6IG51bGwsXG4gICAgICAgICAgICBcImluYm91bmRPcHRpb24uZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIC8vIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICBcIm91dGJvdW5kT3B0aW9uLmRlc3RpbmF0aW9uTG9jYXRpb25Db2RlXCI6IG51bGwsXG4gICAgICAgICAgICBcImluYm91bmRPcHRpb24ub3JpZ2luTG9jYXRpb25Db2RlXCI6IG51bGwsXG4gICAgICAgICAgICAvLyAvLyBjYWJpbiBjbGFzcyBCdXNpbmVzc3xFY29ub215XG4gICAgICAgICAgICBcImNhYmluQ2xhc3NcIjogXCJFY29ub215XCIsXG4gICAgICAgICAgICBkMTogbnVsbCxcbiAgICAgICAgICAgIGxhbmc6ICdlcydcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybVVybDogJ2h0dHBzOi8vYm9va2luZ3MuY29wYWFpci5jb20vQ01HUy8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgJ0Fpckxvd0ZhcmVTZWFyY2hFeHRlcm5hbC5kbz8nXG4gICAgfVxuO1xuXG4vKipcbiAqIEZvcm1IZWxwZXIgbW9kdWxlXG4gKi9cbmNsYXNzIEZvcm1IZWxwZXIge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgLy8gc2V0IGRlZmF1dGxzIHZhbHVlc1xuICAgICAgICB0aGlzLnNldERlZmF1bHRCb3VuZHMoKTtcbiAgICAgICAgdGhpcy5zZXREYXRlcyh0aGlzLm9wdGlvbnMuZGF0ZXBpY2tlciwge3JldHVybnM6dHJ1ZSwgZGVwYXJ0dXJlOnRydWV9KTtcblxuICAgICAgICAvLyBsb2FkIGV2ZW50cyByZWxhdGVkIHdpdGggZm9ybSBoZWxwZXIgYW5kIG90aGVyIG1vZHVsZXNcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcbiAgICB9XG5cblxuXG4gICAgcHJvY2VzcygpIHtcblxuICAgICAgICB2YXIgaHR0cFF1ZXJ5ID0gJC5wYXJhbSh0aGlzLm9wdGlvbnMuaW5wdXRzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaHR0cFF1ZXJ5KTtcbiAgICAgICAgdmFyIHVybCA9IHRoaXMub3B0aW9ucy5mb3JtVXJsO1xuXG4gICAgICAgIC8vICAgICBpZihfdGhpcy52YWxpZGF0aW9uRXJyb3IoZm9ybSkpe1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiB0aGUgZm9ybScpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgZWxzZXtcbiAgICAgICAgdmFyIHNlYXJjaFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCArIGh0dHBRdWVyeSwgJ19ibGFuaycpO1xuICAgICAgICBzZWFyY2hXaW5kb3cuZm9jdXMoKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgc2V0RGVmYXVsdEJvdW5kcygpIHtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9yaWdpbikge1xuICAgICAgICAgICAgdGhpcy5zZXRCb3VuZHMoJ29yaWdpbicsIHRoaXMub3B0aW9ucy5vcmlnaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXRCb3VuZHMoJ2Rlc3RpbmF0aW9uJywgdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Qm91bmRzKGJvdW5kLCBsb2NhdGlvbikge1xuXG4gICAgICAgIGlmIChib3VuZCA9PT0gJ29yaWdpbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIl0gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLmRlc3RpbmF0aW9uTG9jYXRpb25Db2RlXCJdID0gbG9jYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm91bmQgPT09ICdkZXN0aW5hdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiXSA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24ub3JpZ2luTG9jYXRpb25Db2RlXCJdID0gbG9jYXRpb247XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldERhdGVzKGRhdGVwaWNrZXIsIGJvdW5kcykge1xuICAgICAgICAvLyBnZXQgY3VycmVudCBkYXRlcGlja2VycyBkYXRlc1xuICAgICAgICB2YXIgZGVwYXJ0dXJlRGF0ZSA9ICQoZGF0ZXBpY2tlci5vcHRpb25zLmRlcGFydHVyZVNlbGVjdG9yKS5kYXRlcGlja2VyKCdnZXREYXRlJyksXG4gICAgICAgIHJldHVybkRhdGUgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5yZXR1cm5TZWxlY3RvcikuZGF0ZXBpY2tlcignZ2V0RGF0ZScpO1xuXG4gICAgICAgIGlmIChib3VuZHMucmV0dXJucykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlRGF5XCJdID0gcmV0dXJuRGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiXSA9IHJldHVybkRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCJdID0gcmV0dXJuRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoYm91bmRzLmRlcGFydHVyZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiXSA9IGRlcGFydHVyZURhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCJdID0gZGVwYXJ0dXJlRGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCJdID0gZGVwYXJ0dXJlRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q2FiaW5DbGFzcyh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImNhYmluQ2xhc3NcIl0gPSAkKHRhcmdldCkudmFsKCk7XG4gICAgfVxuXG4gICAgc2V0UGFzc2VuZ2Vyc0Ftb3VudCh0eXBlLCB2YWx1ZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FkdWx0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiZ3Vlc3RUeXBlc1swXS5hbW91bnRcIl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hpbGQnOlxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJndWVzdFR5cGVzWzFdLmFtb3VudFwiXSA9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbmZhbnQnOlxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJndWVzdFR5cGVzWzJdLmFtb3VudFwiXSA9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGV2ZW50cygpIHtcblxuICAgICAgICB2YXIgZGF0ZXBpY2tlciA9IHRoaXMub3B0aW9ucy5kYXRlcGlja2VyLFxuICAgICAgICAgICAgJGRlcGFydHVyZUZpZWxkID0gJChkYXRlcGlja2VyLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLFxuICAgICAgICAgICAgJHJldHVybkZpZWxkID0gJChkYXRlcGlja2VyLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpO1xuXG4gICAgICAgICRkZXBhcnR1cmVGaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnb25TZWxlY3QnLCAoZGF0ZVRleHQsIGluc3QpID0+e1xuXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGluc3Quc2VsZWN0ZWRZZWFyLCBpbnN0LnNlbGVjdGVkTW9udGgsIGluc3Quc2VsZWN0ZWREYXkpO1xuXG4gICAgICAgICAgICAvLyB0aGlzIHNldHMgdGhlIGluYm91bmQgZGF0ZSBwaWNrZXIgdG8gYSB3ZWVrIGxhdGVyIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgd2Vla2xhdGVyID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignc2V0RGF0ZScsIHdlZWtsYXRlcik7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ21pbkRhdGUnLCBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0ZXMoZGF0ZXBpY2tlciwge3JldHVybnM6dHJ1ZSwgZGVwYXJ0dXJlOnRydWV9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ29uU2VsZWN0JywgKGRhdGVUZXh0LCBpbnN0KSA9PntcblxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShpbnN0LnNlbGVjdGVkWWVhciwgaW5zdC5zZWxlY3RlZE1vbnRoLCBpbnN0LnNlbGVjdGVkRGF5KTtcblxuICAgICAgICAgICAgLy8gdGhpcyBzZXRzIHRoZSBpbmJvdW5kIGRhdGUgcGlja2VyIHRvIGEgd2VlayBsYXRlciBvZiBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgdmFyIHdlZWtsYXRlciA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlcyhkYXRlcGlja2VyLCB7cmV0dXJuczp0cnVlLCBkZXBhcnR1cmU6ZmFsc2V9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLWNhYmluLWNsYXNzJykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2FiaW5DbGFzcyhlLnRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1hZHVsdHMtYW1vdW50Jykuc2VsZWN0bWVudSh7XG4gICAgICAgICAgICBjaGFuZ2U6IChlLCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFzc2VuZ2Vyc0Ftb3VudCgnYWR1bHQnLCB1aS5pdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLWNoaWxkcmVuLWFtb3VudCcpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgY2hhbmdlOiAoZSwgdWkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhc3NlbmdlcnNBbW91bnQoJ2NoaWxkJywgdWkuaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1pbmZhbnRzLWFtb3VudCcpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgY2hhbmdlOiAoZSwgdWkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhc3NlbmdlcnNBbW91bnQoJ2luZmFudCcsIHVpLml0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtc3VibWl0Jykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2VzcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtSGVscGVyO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGFuZGxlYmFycycpLFxuICAgIGkxOG4gPSB7XG4gICAgICAgIGJvb2tpbmc6IHJlcXVpcmUoJy4uLy4uLy4uL2xhbmcvYm9va2luZy5qc29uJyksXG4gICAgICAgIHNpZ251cDogcmVxdWlyZSgnLi4vLi4vLi4vbGFuZy9zaWdudXAuanNvbicpLFxuICAgIH0sXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIHNyYzogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcycsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHt9XG4gICAgfVxuO1xuXG5jbGFzcyBUZW1wbGF0ZVxue1xuICAgIGNvbnN0cnVjdG9yKHdpZGdldCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgSGFuZGxlYmFycyAhPT0gJ3VuZGVmaW5lZCcgJiYgSGFuZGxlYmFycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGAke3RoaXMub3B0aW9ucy5zcmN9LyR7d2lkZ2V0fS5oYnNgLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh0cGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSB0aGlzLmNvbXBpbGUod2lkZ2V0LCB0cGwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2soaHRtbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGlzIHBsdWdpbiByZXF1aXJlcyBIYW5kbGViYXJzLmpzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21waWxlKHdpZGdldCwgdHBsKSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZSh0cGwpO1xuICAgICAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKGkxOG5bd2lkZ2V0XVt0aGlzLm9wdGlvbnMubGFuZ10pO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVtcGxhdGU7XG4iLCIvLyBDcmVhdGUgdGhlIGRlZmF1bHRzXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIFRlbXBsYXRlID0gcmVxdWlyZSgnLi4vbGliL1RlbXBsYXRlJyksXG4gICAgRmxpZ2h0Q29udHJvbCA9IHJlcXVpcmUoJy4uL2xpYi9GbGlnaHRDb250cm9sJyksXG4gICAgRGF0ZXBpY2tlciA9IHJlcXVpcmUoJy4uL2xpYi9EYXRlcGlja2VyJyksXG4gICAgQXV0b2NvbXBsZXRlID0gcmVxdWlyZSgnLi4vbGliL0F1dG9jb21wbGV0ZScpLFxuICAgIEZvcm1IZWxwZXIgPSByZXF1aXJlKCcuLi9saWIvRm9ybUhlbHBlcicpLFxuICAgIGRlZmF1bHRzID0ge1xuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBvcmlnaW46ICdhbGwnLFxuICAgICAgICBkZXN0aW5hdGlvbjogJ2FsbCcsXG4gICAgICAgIHRlbXBsYXRlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcy9ib29raW5nLmhicycsXG4gICAgICAgIGxhbmd1YWdlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL2xhbmcvJ1xuICAgIH0sXG4gICAgY29wYUFwaVVybHMgPSB7XG4gICAgICAgIGFsbERlc3RpbmF0aW9uczogJ2h0dHBzOi8vY29wYWFwaS5uYnhhcHBzLmNvbS9kZXN0aW5hdGlvbnMvJyxcbiAgICAgICAgY291bnRyeURlc3RpbmF0aW9uczogJ2h0dHBzOi8vY29wYWFwaS5uYnhhcHBzLmNvbS9kZXN0aW5hdGlvbnMvP2NvdW50cnk9J1xuICAgIH1cbjtcblxuXG5jbGFzcyBCb29raW5nIHtcblxuICAgIC8qKlxuICAgICAqIFdpZGdldCBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvciBlbGVtZW50IERPTSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAgT3B0aW9ucyBwYXNzZWQgb24gcGx1Z2luIGluc3RhbmNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRib29raW5nID0gJChlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgbmV3IFRlbXBsYXRlKCdib29raW5nJywge1xuICAgICAgICAgICAgJ2xhbmcnOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoaHRtbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGJvb2tpbmcuaHRtbChodG1sKTtcblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gZmluaXNoZWQsIGJ1aWxkIGFsbCB0aGUgd2lkZ2V0c1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWxlY3RNZW51cygpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0dXAgZGF0ZXBpY2tlclxuICAgICAgICAgICAgICAgIHZhciBkYXRlcGlja2VyID0gbmV3IERhdGVwaWNrZXIoKTtcbiAgICAgICAgICAgICAgICBkYXRlcGlja2VyLnJlbmRlcigpO1xuXG5cbiAgICAgICAgICAgICAgICB2YXIgZm9ybUhlbHBlciA9IG5ldyBGb3JtSGVscGVyKHtkYXRlcGlja2VyOmRhdGVwaWNrZXJ9KTtcblxuICAgICAgICAgICAgICAgIC8vIEF1dG9jb21wbGV0ZSB3aWRnZXRzXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0QXV0b2NvbXBsZXRlKGZvcm1IZWxwZXIpO1xuXG4gICAgICAgICAgICAgICAgLy9zZXQgZm9ybSBkZWZ1YWx0IHZhbHVlcyBhZmVjdGVkXG4gICAgICAgICAgICAgICAgLy9ieSBkYXRlcGlja2VyXG5cbiAgICAgICAgICAgICAgICAvL2RhdGVwaWNrZXIgZXZlbnRzIHRoYXQgbW9kaWZ5XG4gICAgICAgICAgICAgICAgLy9mb3JtIHZhbHVlc1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZGF0ZXBpY2tlckZvcm1FdmVudHMoZGF0ZXBpY2tlcik7XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCBhdXRvY29tcGxldGUgZGVzdGluYXRpb24gd2lkZ2V0c1xuICAgICAqIEBzZWUgbW9kdWxlOkF1dG9jb21wbGV0ZVxuICAgICAqL1xuICAgIGluaXRBdXRvY29tcGxldGUoZm9ybUhlbHBlcikge1xuICAgICAgICAvLyBJbml0IGNsYXNzIHdpdGggb3B0aW9uc1xuICAgICAgICB2YXIgYXV0b2NvbXBsZXRlID0gbmV3IEF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICBsYW5nOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgIHNlbGVjdDogZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIC8vIHNldCBkaXNwbGF5IHZhbHVlIHRvIHRoZSBpbnB1dFxuICAgICAgICAgICAgICAgICQodGhpcykudmFsKHVpLml0ZW0uZGlzcGxheSk7XG4gICAgICAgICAgICAgICAgLy9zZXQgYWN0dWFsIHZhbHVlIGF0IHRoZSBib29raW5nIG9iamVjdFxuICAgICAgICAgICAgICAgIGZvcm1IZWxwZXIuc2V0Qm91bmRzKCQodGhpcykuZGF0YSgnaW5wdXQtZmllbGQnKSwgdWkuaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gQHRvZG8gTWFrZSB0aGlzIGR5bmFtaWNcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbXk6ICdsZWZ0IGJvdHRvbScsXG4gICAgICAgICAgICAgICAgYXQ6ICdsZWZ0IHRvcCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQnVpbGRcbiAgICAgICAgYXV0b2NvbXBsZXRlLnN0YXJ0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLmpzLWJvb2tpbmctYXV0b2NvbXBsZXRlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGUucmVuZGVyKHRoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIHNlbGVjdCBtZW51cyB3aXRoIGN1c3RvbSBVSSB3aWRnZXRzXG4gICAgICovXG4gICAgc2V0dXBTZWxlY3RNZW51cygpIHtcbiAgICAgICAgJCgnLmpzLXNlbGVjdG1lbnUnKS5zZWxlY3RtZW51KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmQgZXZlbnRzIHJlbGF0ZWQgdG8gYm9va2luZyBpbnRlcmFjdGlvblxuICAgICAqL1xuICAgIGJvb2tpbmdFdmVudHMoKSB7XG4gICAgICAgIHZhciAkZm9ybSA9ICQoJy5jb3BhYWlyLWJvb2tpbmcnKTtcbiAgICAgICAgLy8gTG9hZCBmb3JtIHN1Ym1pdGlvbiBldmVudHNcbiAgICAgICAgdGhpcy5zdWJtaXRGb3JtKCRmb3JtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5jZSBzb21lIGRlZmF1bHRzIHZhbHVlcyBhcmUgc2V0IG9uIHRoZSBkYXRlcGlja2Vyc1xuICAgICAqIHRoZSBmb3JtIGhhdmUgc29tZSBoaWRkZW4gaW5wdXRzIHRoYXQgdXNlIHRoaXMgdmFsdWVzXG4gICAgICovXG4gICAgc2V0Rm9ybVZhbHVlcyhkYXRlcGlja2VyKSB7XG5cbiAgICAgICAgdmFyICRmb3JtID0gdGhpcy4kYm9va2luZyxcblxuICAgICAgICAvLyBnZXQgY3VycmVudCBkYXRlcGlja2VycyBkYXRlc1xuICAgICAgICBkZXBhcnR1cmVEYXRlID0gJChkYXRlcGlja2VyLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLmRhdGVwaWNrZXIoJ2dldERhdGUnKSxcbiAgICAgICAgcmV0dXJuRGF0ZSA9ICQoZGF0ZXBpY2tlci5vcHRpb25zLnJldHVyblNlbGVjdG9yKS5kYXRlcGlja2VyKCdnZXREYXRlJyk7XG5cbiAgICAgICAgLy8gTGVzdCBtaWdyYXRlIGRhdGUgcGlja2VycyBkYXRlIHRvIHRoZSBoaWRkZW5cbiAgICAgICAgLy8gZGF0ZSBmb3JtIGZpZWxkcy4gVGhpcyBmaWVsZHMgYXJlIHJlcXVpcmVkIGJ5XG4gICAgICAgIC8vIENvcGEgQm9va2luZ1xuXG4gICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiXScpXG4gICAgICAgICAgICAuYXR0cigndmFsdWUnLCByZXR1cm5EYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCJdJylcbiAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIHJldHVybkRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCJdJylcbiAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIHJldHVybkRhdGUuZ2V0RnVsbFllYXIoKSk7XG5cbiAgICAgICAgLy8gc2V0IG91dGJvdW5kT3B0aW9uIGRlcGFydHVyZSBkYXRlc1xuICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlRGF5XCJdJylcbiAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGRlcGFydHVyZURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICAgICAgJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCJdJylcbiAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGRlcGFydHVyZURhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiXScpXG4gICAgICAgICAgICAuYXR0cigndmFsdWUnLCBkZXBhcnR1cmVEYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgIH1cblxuXG4gICAgZGF0ZXBpY2tlckZvcm1FdmVudHMoZGF0ZXBpY2tlcikge1xuXG4gICAgICAgIHZhciAkZGVwYXJ0dXJlRmllbGQgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvciksXG4gICAgICAgICAgICAkcmV0dXJuRmllbGQgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5yZXR1cm5TZWxlY3RvciksXG4gICAgICAgICAgICAkZm9ybSA9IHRoaXMuJGJvb2tpbmc7XG5cbiAgICAgICAgdmFyIG9uU2VsZWN0T3V0Ym91bmQgPSBmdW5jdGlvbihkYXRlVGV4dCwgaW5zdCkge1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShpbnN0LnNlbGVjdGVkWWVhciwgaW5zdC5zZWxlY3RlZE1vbnRoLCBpbnN0LnNlbGVjdGVkRGF5KTtcblxuICAgICAgICAgICAgLy90aGlzIHNldHMgdGhlIGluYm91bmQgZGF0ZSBwaWNrZXIgdG8gYSB3ZWVrIGxhdGVyIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgd2Vla2xhdGVyID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignc2V0RGF0ZScsIHdlZWtsYXRlcik7XG5cbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiXScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgd2Vla2xhdGVyLmdldFVUQ0RhdGUoKSk7XG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiXScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgd2Vla2xhdGVyLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZVllYXJcIl0nKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIHdlZWtsYXRlci5nZXRGdWxsWWVhcigpKTtcblxuICAgICAgICAgICAgLy90aGlzIGhlbHBzIHRoYXQgdGhlIHVzZXIgZG9lc250IHRyYXZlbCBiYWNrIGluIHRpbWVcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnbWluRGF0ZScsIGRhdGUpO1xuICAgICAgICAgICAgJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiXScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgaW5zdC5zZWxlY3RlZERheSk7XG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIl0nKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGluc3Quc2VsZWN0ZWRNb250aCArIDEpO1xuICAgICAgICAgICAgJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZVllYXJcIl0nKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGluc3Quc2VsZWN0ZWRZZWFyKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb25TZWxlY3RJbmJvdW5kID0gZnVuY3Rpb24oZGF0ZVRleHQsIGluc3QpIHtcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiXScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgaW5zdC5zZWxlY3RlZERheSk7XG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiXScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgaW5zdC5zZWxlY3RlZE1vbnRoICsgMSk7XG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCJdJylcbiAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBpbnN0LnNlbGVjdGVkWWVhcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoJ29wdGlvbicsICdvblNlbGVjdCcsIG9uU2VsZWN0T3V0Ym91bmQpO1xuICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ29uU2VsZWN0Jywgb25TZWxlY3RJbmJvdW5kKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzdWJtaXRGb3JtXG4gICAgICogY2FwdHVyZXMgZm9ybSBzdWJtaXQgZXZlbnQgYW5kIHByb2Nlc3MgaXRcbiAgICAgKi9cbiAgICBzdWJtaXRGb3JtKGZvcm0pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBodHRwUXVlcnkgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xuICAgICAgICAgICAgdmFyIHVybCA9IF90aGlzLm9wdGlvbnMuZm9ybVVybDtcblxuICAgICAgICAgICAgaWYoX3RoaXMudmFsaWRhdGlvbkVycm9yKGZvcm0pKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gdGhlIGZvcm0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdmFyIHNlYXJjaFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCArIGh0dHBRdWVyeSwgJ19ibGFuaycpO1xuICAgICAgICAgICAgICAgIHNlYXJjaFdpbmRvdy5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm9va2luZztcbiIsInZhciBUZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL2xpYi9UZW1wbGF0ZScpO1xuXG5jbGFzcyBTaWdudXAge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRmb3JtID0gJChlbGVtZW50KTtcblxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBsYW5nOiAnZXMnXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBMb2FkIHRlbXBsYXRlXG4gICAgICAgIG5ldyBUZW1wbGF0ZSgnc2lnbnVwJywge1xuICAgICAgICAgICAgJ2xhbmcnOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoaHRtbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGZvcm0uaHRtbChodG1sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbnVwO1xuIl19
