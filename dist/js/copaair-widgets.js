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

    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || "");
            } else {
                o[this.name] = this.value || "";
            }
        });
        return o;
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
            "subscribe": "Suscribir"
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
    d1: null,
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
        this.options.inputs.lang = this.options.lang;
        // load events related with form helper and other modules
        this.events();
    }

    _prototypeProperties(FormHelper, null, {
        process: {
            value: function process() {

                var url = this.options.formUrl;
                var validation = this.validationError();
                var httpQuery = $.param(this.options.inputs);
                httpQuery += "&" + $.param({ d1: this.options.d1 });

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
            value: function setD1() {
                this.options.inputs.d1 = this.options.d1;
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
                    console.log(this.options.inputs[input]);
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
                    booking: _this.$booking,
                    d1: _this.options.d1,
                    lang: _this.options.lang });

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

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Template = require("../lib/Template");

var Signup = (function () {
    function Signup(element, options) {
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
                _this.signupEvents();
            }
        });
    }

    _prototypeProperties(Signup, null, {
        signupEvents: {
            value: function signupEvents() {
                var _this = this;

                var $form = this.$form;
                var $toggle = this.$form.find(".js-copaair-toggle");

                // Show bottom row when any input gets focus
                $form.on("focus.copaair", "input", function (e) {
                    $form.addClass("copaair-widget-open");
                    $toggle.removeClass("copaair-hidden");
                });

                $form.on("submit", function (e) {
                    e.preventDefault();
                    _this.submitForm(e.target);
                });
            },
            writable: true,
            configurable: true
        },
        submitForm: {
            value: function submitForm(target) {
                var $form = $(target);

                var data = $form.serializeObject();
                data.fullname = data.first_name + " " + data.last_name;
                data.source = this.options.source;
                data.language = this.options.lang;

                var container = this.options.container;

                $.ajax({
                    type: "POST",
                    url: "https://flightcontrol.io/api/signup/add",
                    data: data
                }).done(function (res) {
                    container.fadeOut();
                });
            },
            writable: true,
            configurable: true
        }
    });

    return Signup;
})();

module.exports = Signup;

},{"../lib/Template":10}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9pbmRleC5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvYm93ZXJfY29tcG9uZW50cy9zdG9yZS5qcy9zdG9yZS5taW4uanMiLCJsYW5nL2Jvb2tpbmcuanNvbiIsImxhbmcvZGF0ZXBpY2tlci5qc29uIiwibGFuZy9zaWdudXAuanNvbiIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9BdXRvY29tcGxldGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvRGF0ZXBpY2tlci5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9GbGlnaHRDb250cm9sLmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGFhaXItd2lkZ2V0cy9zcmMvanMvbGliL0Zvcm1IZWxwZXIuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvVGVtcGxhdGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL0Jvb2tpbmcuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL1NpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLEFBQUMsQ0FBQSxVQUFVLE9BQU8sRUFBRTtBQUNoQixnQkFBWSxDQUFDOztBQUViLFFBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7O0FBRTVDLGNBQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxD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RUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUcsU0FBUyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLFVBQVMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLFlBQVUsRUFBRSxFQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLEtBQUMsSUFBRSxJQUFJLEtBQUcsQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFBLEFBQUMsRUFBQyxDQUFDLElBQUUsSUFBSSxLQUFHLENBQUMsR0FBQyxFQUFFLENBQUEsQUFBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLFlBQVUsRUFBRSxFQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxRQUFHLE9BQU8sQ0FBQyxJQUFFLFFBQVEsRUFBQyxPQUFPLFNBQVMsQ0FBQyxJQUFHO0FBQUMsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLGFBQU8sQ0FBQyxJQUFFLFNBQVMsQ0FBQTtLQUFDO0dBQUMsQ0FBQyxJQUFHLENBQUMsRUFBRSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxXQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxRQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLEtBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsWUFBVTtBQUFDLEtBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxZQUFVO0FBQUMsUUFBSSxDQUFDLEdBQUMsRUFBRSxDQUFDLFFBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxPQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsU0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7QUFBQyxVQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUM7R0FBQyxDQUFDLEtBQUssSUFBRyxDQUFDLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBQztRQUFLLENBQUMsRUFBQyxDQUFDO1FBQXlPLENBQUMsRUFBdU0sQ0FBQzs7O1VBQWtFLENBQUMsR0FBVixVQUFXLENBQUMsRUFBQztBQUFDLGVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQTtPQUFDOztBQUF4aUIsVUFBRztBQUFDLFNBQUMsR0FBQyxJQUFJLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLHNCQUFzQixHQUFDLENBQUMsR0FBQyx5Q0FBdUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO09BQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLFNBQUMsR0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO09BQUM7QUFBSSxPQUFDLEdBQUMsV0FBUyxDQUFDLEVBQUM7QUFBQyxlQUFPLFlBQVU7QUFBQyxjQUFJLENBQUMsR0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxRQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBLENBQUE7U0FBQyxDQUFBO09BQUM7O0FBQUMsT0FBQyxHQUFDLElBQUksTUFBTSxDQUFDLHVDQUF1QyxFQUFDLEdBQUcsQ0FBQztBQUErRCxPQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsZ0JBQU8sQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQSxDQUFBO09BQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFHLFNBQVMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO09BQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLFNBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsWUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsWUFBSSxDQUFDLEdBQUMsRUFBRSxDQUFDLFFBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO1NBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBO09BQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxZQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7T0FBQyxDQUFDLENBQUE7O0dBQUMsSUFBRztBQUFDLFFBQUksQ0FBQyxHQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsS0FBRyxDQUFDLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLEtBQUMsQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxDQUFDLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBQyxPQUFPLE1BQU0sSUFBRSxXQUFXLElBQUUsTUFBTSxDQUFDLE9BQU8sSUFBRSxJQUFJLENBQUMsTUFBTSxLQUFHLE1BQU0sR0FBQyxNQUFNLENBQUMsT0FBTyxHQUFDLENBQUMsR0FBQyxPQUFPLE1BQU0sSUFBRSxVQUFVLElBQUUsTUFBTSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUE7Q0FBQyxDQUFBLENBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQTs7Ozs7Ozs7OztBQ0RuK0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RUFBRSxDQUFDO0FBQ25CLDBCQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzdCLENBQUMsQ0FBQTthQUVMOzs7O0FBRUQsa0JBQVU7bUJBQUEsb0JBQUMsTUFBTSxFQUFFO0FBQ2Ysb0JBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFdEIsb0JBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNuQyxvQkFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ3ZELG9CQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ2xDLG9CQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOztBQUVsQyxvQkFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7O0FBRXZDLGlCQUFDLENBQUMsSUFBSSxDQUFDO0FBQ0gsd0JBQUksRUFBRSxNQUFNO0FBQ1osdUJBQUcsRUFBRSx5Q0FBeUM7QUFDOUMsd0JBQUksRUFBRSxJQUFJO2lCQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxHQUFHLEVBQUU7QUFDbEIsNkJBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDdkIsQ0FBQyxDQUFDO2FBQ047Ozs7OztXQXpEQyxNQUFNOzs7QUE2RFosTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBOb2RlL0NvbW1vbkpTXG4gICAgICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxufShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIEJvb2tpbmcgPSByZXF1aXJlKCcuL3dpZGdldHMvQm9va2luZycpLFxuICAgICAgICBTaWdudXAgID0gcmVxdWlyZSgnLi93aWRnZXRzL1NpZ251cCcpXG4gICAgO1xuXG4gICAgLyoqXG4gICAgICogQmluZCB3aWRnZXRzIHRvIGpRdWVyeSBvYmplY3QgcHJvdG90eXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIG92ZXJyaWRlIGRlZmF1bHRzLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBDdXJyZW50IG9iamVjdCBpbnN0YW5jZVxuICAgICAqL1xuICAgICQuZm4uY29wYWFpckJvb2tpbmcgPSBmdW5jdGlvbiBjb3BhYWlyQm9va2luZyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoISQuZGF0YSh0aGlzLCAncGx1Z2luX2NvcGFhaXJCb29raW5nJykpIHtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyQm9va2luZycsIG5ldyBCb29raW5nKHRoaXMsIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQuZm4uY29wYWFpclNpZ251cCA9IGZ1bmN0aW9uIGNvcGFhaXJTaWdudXAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyU2lnbnVwJykpIHtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyU2lnbnVwJywgbmV3IFNpZ251cCh0aGlzLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkLmZuLnNlcmlhbGl6ZU9iamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbyA9IHt9O1xuICAgICAgICB2YXIgYSA9IHRoaXMuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgJC5lYWNoKGEsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKG9bdGhpcy5uYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvW3RoaXMubmFtZV0ucHVzaCkge1xuICAgICAgICAgICAgICAgICAgICBvW3RoaXMubmFtZV0gPSBbb1t0aGlzLm5hbWVdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb1t0aGlzLm5hbWVdLnB1c2godGhpcy52YWx1ZSB8fCAnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9bdGhpcy5uYW1lXSA9IHRoaXMudmFsdWUgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbztcbiAgICB9O1xuXG59KSk7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxMyBNYXJjdXMgV2VzdGluICovXG4oZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbygpe3RyeXtyZXR1cm4gciBpbiBlJiZlW3JdfWNhdGNoKHQpe3JldHVybiExfX12YXIgdD17fSxuPWUuZG9jdW1lbnQscj1cImxvY2FsU3RvcmFnZVwiLGk9XCJzY3JpcHRcIixzO3QuZGlzYWJsZWQ9ITEsdC52ZXJzaW9uPVwiMS4zLjE3XCIsdC5zZXQ9ZnVuY3Rpb24oZSx0KXt9LHQuZ2V0PWZ1bmN0aW9uKGUsdCl7fSx0Lmhhcz1mdW5jdGlvbihlKXtyZXR1cm4gdC5nZXQoZSkhPT11bmRlZmluZWR9LHQucmVtb3ZlPWZ1bmN0aW9uKGUpe30sdC5jbGVhcj1mdW5jdGlvbigpe30sdC50cmFuc2FjdD1mdW5jdGlvbihlLG4scil7cj09bnVsbCYmKHI9bixuPW51bGwpLG49PW51bGwmJihuPXt9KTt2YXIgaT10LmdldChlLG4pO3IoaSksdC5zZXQoZSxpKX0sdC5nZXRBbGw9ZnVuY3Rpb24oKXt9LHQuZm9yRWFjaD1mdW5jdGlvbigpe30sdC5zZXJpYWxpemU9ZnVuY3Rpb24oZSl7cmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpfSx0LmRlc2VyaWFsaXplPWZ1bmN0aW9uKGUpe2lmKHR5cGVvZiBlIT1cInN0cmluZ1wiKXJldHVybiB1bmRlZmluZWQ7dHJ5e3JldHVybiBKU09OLnBhcnNlKGUpfWNhdGNoKHQpe3JldHVybiBlfHx1bmRlZmluZWR9fTtpZihvKCkpcz1lW3JdLHQuc2V0PWZ1bmN0aW9uKGUsbil7cmV0dXJuIG49PT11bmRlZmluZWQ/dC5yZW1vdmUoZSk6KHMuc2V0SXRlbShlLHQuc2VyaWFsaXplKG4pKSxuKX0sdC5nZXQ9ZnVuY3Rpb24oZSxuKXt2YXIgcj10LmRlc2VyaWFsaXplKHMuZ2V0SXRlbShlKSk7cmV0dXJuIHI9PT11bmRlZmluZWQ/bjpyfSx0LnJlbW92ZT1mdW5jdGlvbihlKXtzLnJlbW92ZUl0ZW0oZSl9LHQuY2xlYXI9ZnVuY3Rpb24oKXtzLmNsZWFyKCl9LHQuZ2V0QWxsPWZ1bmN0aW9uKCl7dmFyIGU9e307cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0LG4pe2VbdF09bn0pLGV9LHQuZm9yRWFjaD1mdW5jdGlvbihlKXtmb3IodmFyIG49MDtuPHMubGVuZ3RoO24rKyl7dmFyIHI9cy5rZXkobik7ZShyLHQuZ2V0KHIpKX19O2Vsc2UgaWYobi5kb2N1bWVudEVsZW1lbnQuYWRkQmVoYXZpb3Ipe3ZhciB1LGE7dHJ5e2E9bmV3IEFjdGl2ZVhPYmplY3QoXCJodG1sZmlsZVwiKSxhLm9wZW4oKSxhLndyaXRlKFwiPFwiK2krXCI+ZG9jdW1lbnQudz13aW5kb3c8L1wiK2krJz48aWZyYW1lIHNyYz1cIi9mYXZpY29uLmljb1wiPjwvaWZyYW1lPicpLGEuY2xvc2UoKSx1PWEudy5mcmFtZXNbMF0uZG9jdW1lbnQscz11LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIil9Y2F0Y2goZil7cz1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdT1uLmJvZHl9dmFyIGw9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApO24udW5zaGlmdChzKSx1LmFwcGVuZENoaWxkKHMpLHMuYWRkQmVoYXZpb3IoXCIjZGVmYXVsdCN1c2VyRGF0YVwiKSxzLmxvYWQocik7dmFyIGk9ZS5hcHBseSh0LG4pO3JldHVybiB1LnJlbW92ZUNoaWxkKHMpLGl9fSxjPW5ldyBSZWdFeHAoXCJbIVxcXCIjJCUmJygpKissL1xcXFxcXFxcOjs8PT4/QFtcXFxcXV5ge3x9fl1cIixcImdcIik7ZnVuY3Rpb24gaChlKXtyZXR1cm4gZS5yZXBsYWNlKC9eZC8sXCJfX18kJlwiKS5yZXBsYWNlKGMsXCJfX19cIil9dC5zZXQ9bChmdW5jdGlvbihlLG4saSl7cmV0dXJuIG49aChuKSxpPT09dW5kZWZpbmVkP3QucmVtb3ZlKG4pOihlLnNldEF0dHJpYnV0ZShuLHQuc2VyaWFsaXplKGkpKSxlLnNhdmUociksaSl9KSx0LmdldD1sKGZ1bmN0aW9uKGUsbixyKXtuPWgobik7dmFyIGk9dC5kZXNlcmlhbGl6ZShlLmdldEF0dHJpYnV0ZShuKSk7cmV0dXJuIGk9PT11bmRlZmluZWQ/cjppfSksdC5yZW1vdmU9bChmdW5jdGlvbihlLHQpe3Q9aCh0KSxlLnJlbW92ZUF0dHJpYnV0ZSh0KSxlLnNhdmUocil9KSx0LmNsZWFyPWwoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5YTUxEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0cmlidXRlcztlLmxvYWQocik7Zm9yKHZhciBuPTAsaTtpPXRbbl07bisrKWUucmVtb3ZlQXR0cmlidXRlKGkubmFtZSk7ZS5zYXZlKHIpfSksdC5nZXRBbGw9ZnVuY3Rpb24oZSl7dmFyIG49e307cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbihlLHQpe25bZV09dH0pLG59LHQuZm9yRWFjaD1sKGZ1bmN0aW9uKGUsbil7dmFyIHI9ZS5YTUxEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0cmlidXRlcztmb3IodmFyIGk9MCxzO3M9cltpXTsrK2kpbihzLm5hbWUsdC5kZXNlcmlhbGl6ZShlLmdldEF0dHJpYnV0ZShzLm5hbWUpKSl9KX10cnl7dmFyIHA9XCJfX3N0b3JlanNfX1wiO3Quc2V0KHAscCksdC5nZXQocCkhPXAmJih0LmRpc2FibGVkPSEwKSx0LnJlbW92ZShwKX1jYXRjaChmKXt0LmRpc2FibGVkPSEwfXQuZW5hYmxlZD0hdC5kaXNhYmxlZCx0eXBlb2YgbW9kdWxlIT1cInVuZGVmaW5lZFwiJiZtb2R1bGUuZXhwb3J0cyYmdGhpcy5tb2R1bGUhPT1tb2R1bGU/bW9kdWxlLmV4cG9ydHM9dDp0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOmUuc3RvcmU9dH0pKEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSkiLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcIm9yaWdpblwiOiBcIkRlc2RlXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uXCI6IFwiSGFjaWFcIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiU2FsaWRhXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJlZ3Jlc29cIixcbiAgICAgICAgICAgIFwiZWNvbm9taWNcIjogXCJDbGFzZSBFY29uw7NtaWNhXCIsXG4gICAgICAgICAgICBcImJ1c2luZXNzXCI6IFwiQ2xhc2UgRWplY3V0aXZhXCIsXG4gICAgICAgICAgICBcInN1Ym1pdFwiOiBcIlZlciBWdWVsb3NcIixcbiAgICAgICAgICAgIFwiYWR1bHRzXCI6IFwiQWR1bHRvc1wiLFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBcIk5pw7Fvc1wiLFxuICAgICAgICAgICAgXCJpbmZhbnRzXCIgOiBcIkluZmFudGVzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlc1wiOiB7XG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZW5cIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJvcmlnaW5cIjogXCJGcm9tXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uXCI6IFwiVG9cIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiRGVwYXJ0dXJlXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJldHVyblwiLFxuICAgICAgICAgICAgXCJlY29ub21pY1wiOiBcIkVjb25vbXkgQ2xhc3NcIixcbiAgICAgICAgICAgIFwiYnVzaW5lc3NcIjogXCJCdXNpbmVzcyBDbGFzc1wiLFxuICAgICAgICAgICAgXCJzdWJtaXRcIjogXCJGaW5kIGZsaWdodHNcIixcbiAgICAgICAgICAgIFwiYWR1bHRzXCI6IFwiQWR1bHRzXCIsXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IFwiQ2hpbGRyZW5cIixcbiAgICAgICAgICAgIFwiaW5mYW50c1wiIDogXCJJbmZhbnRzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlc1wiOiB7XG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiOiBcIlBsZWFzZSBjb21wbGV0ZSBhbGwgdGhlIC4uLlwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBsZWFzZSBjb21wbGV0ZSBhbGwgdGhlIC4uLlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicHRcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJvcmlnaW5cIjogXCJEZVwiLFxuICAgICAgICAgICAgXCJkZXN0aW5hdGlvblwiOiBcIlBhcmFcIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiU2HDrWRhXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJlZ3Jlc3NvXCIsXG4gICAgICAgICAgICBcImVjb25vbWljXCI6IFwiQ2xhc3NlIGVjb27DtG1pY2FcIixcbiAgICAgICAgICAgIFwiYnVzaW5lc3NcIjogXCJDbGFzc2UgRXhlY3V0aXZhXCIsXG4gICAgICAgICAgICBcInN1Ym1pdFwiOiBcIkJ1c2NhciB2b29zXCIsXG4gICAgICAgICAgICBcImFkdWx0c1wiOiBcIkFkdWx0b3NcIixcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogXCJDcmlhbsOnYXNcIixcbiAgICAgICAgICAgIFwiaW5mYW50c1wiIDogXCJCZWLDqnNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1lc3NhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibm90aWZpY2F0aW9uXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJyZWdpb25hbFwiOiB7XG4gICAgICAgICAgICBcImNsb3NlVGV4dFwiOiBcIkNlcnJhclwiLFxuICAgICAgICAgICAgXCJwcmV2VGV4dFwiOiBcIiYjeDNDO0FudFwiLFxuICAgICAgICAgICAgXCJuZXh0VGV4dFwiOiBcIlNpZyYjeDNFO1wiLFxuICAgICAgICAgICAgXCJjdXJyZW50VGV4dFwiOiBcIkhveVwiLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzXCI6IFtcImVuZXJvXCIsXCJmZWJyZXJvXCIsXCJtYXJ6b1wiLFwiYWJyaWxcIixcIm1heW9cIixcImp1bmlvXCIsXG4gICAgICAgICAgICBcImp1bGlvXCIsXCJhZ29zdG9cIixcInNlcHRpZW1icmVcIixcIm9jdHVicmVcIixcIm5vdmllbWJyZVwiLFwiZGljaWVtYnJlXCJdLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzU2hvcnRcIjogW1wiZW5lXCIsXCJmZWJcIixcIm1hclwiLFwiYWJyXCIsXCJtYXlcIixcImp1bicsJ2p1bFwiLFwiYWdvXCIsXCJzZXBcIixcIm9jdFwiLFwibm92XCIsXCJkaWNcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzXCI6IFtcImRvbWluZ29cIixcImx1bmVzXCIsXCJtYXJ0ZXNcIixcIm1pw6lyY29sZXMnLCdqdWV2ZXNcIixcInZpZXJuZXNcIixcInPDoWJhZG9cIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzU2hvcnRcIjogW1wiZG9tXCIsXCJsdW5cIixcIm1hclwiLFwibWnDqVwiLFwianV2XCIsXCJ2aWVcIixcInPDoWJcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzTWluXCI6IFtcIkRcIixcIkxcIixcIk1cIixcIlhcIixcIkpcIixcIlZcIixcIlNcIl0sXG4gICAgICAgICAgICBcIndlZWtIZWFkZXJcIjogXCJTbVwiLFxuICAgICAgICAgICAgXCJkYXRlRm9ybWF0XCI6IFwiZGQvbW0veXlcIixcbiAgICAgICAgICAgIFwiZmlyc3REYXlcIjogMSxcbiAgICAgICAgICAgIFwiaXNSVExcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNob3dNb250aEFmdGVyWWVhclwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwieWVhclN1ZmZpeFwiOiBcIlwiXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgXCJlblwiOiB7XG4gICAgICAgIFwicmVnaW9uYWxcIiA6IHt9XG4gICAgfSxcbiAgICBcInB0XCI6IHtcbiAgICAgICAgXCJyZWdpb25hbFwiIDoge1xuICAgICAgICAgICAgXCJjbG9zZVRleHRcIjogXCJGZWNoYXJcIixcbiAgICAgICAgICAgIFwicHJldlRleHRcIjogXCImI3gzQztBbnRlcmlvclwiLFxuICAgICAgICAgICAgXCJuZXh0VGV4dFwiOiBcIlByw7N4aW1vJiN4M0U7XCIsXG4gICAgICAgICAgICBcImN1cnJlbnRUZXh0XCI6IFwiSG9qZVwiLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzXCI6IFtcIkphbmVpcm9cIixcIkZldmVyZWlyb1wiLFwiTWFyw6dvXCIsXCJBYnJpbFwiLFwiTWFpb1wiLFwiSnVuaG9cIixcIkp1bGhvXCIsXCJBZ29zdG9cIixcIlNldGVtYnJvXCIsXCJPdXR1YnJvXCIsXCJOb3ZlbWJyb1wiLFwiRGV6ZW1icm9cIl0sXG4gICAgICAgICAgICBcIm1vbnRoTmFtZXNTaG9ydFwiOiBbXCJKYW5cIixcIkZldlwiLFwiTWFyXCIsXCJBYnJcIixcIk1haVwiLFwiSnVuXCIsXCJKdWxcIixcIkFnb1wiLFwiU2V0XCIsXCJPdXRcIixcIk5vdlwiLFwiRGV6XCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc1wiOiBbXCJEb21pbmdvXCIsXCJTZWd1bmRhLWZlaXJhXCIsXCJUZXLDp2EtZmVpcmFcIixcIlF1YXJ0YS1mZWlyYScsJ1F1aW50YS1mZWlyYVwiLFwiU2V4dGEtZmVpcmFcIixcIlPDoWJhZG9cIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzU2hvcnRcIjogW1wiRG9tXCIsXCJTZWdcIixcIlRlclwiLFwiUXVhXCIsXCJRdWlcIixcIlNleFwiLFwiU8OhYlwiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNNaW5cIjogW1wiRG9tXCIsXCJTZWdcIixcIlRlclwiLFwiUXVhXCIsXCJRdWlcIixcIlNleFwiLFwiU8OhYlwiXSxcbiAgICAgICAgICAgIFwid2Vla0hlYWRlclwiOiBcIlNtXCIsXG4gICAgICAgICAgICBcImRhdGVGb3JtYXRcIjogXCJkZC9tbS95eVwiLFxuICAgICAgICAgICAgXCJmaXJzdERheVwiOiAwLFxuICAgICAgICAgICAgXCJpc1JUTFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2hvd01vbnRoQWZ0ZXJZZWFyXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ5ZWFyU3VmZml4XCI6IFwiXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwiZm5hbWVcIjogXCJOb21icmVcIixcbiAgICAgICAgICAgIFwibG5hbWVcIjogXCJBcGVsbGlkb1wiLFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIkVtYWlsXCIsXG4gICAgICAgICAgICBcImNvdW50cnlcIjogXCJQYcOtc1wiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiQ2l1ZGFkXCIsXG4gICAgICAgICAgICBcInBob25lXCI6IFwiTcOzdmlsXCIsXG4gICAgICAgICAgICBcInN1YnNjcmliZVwiOiBcIlN1c2NyaWJpclwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZW5cIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJmbmFtZVwiOiBcIk5hbWVcIixcbiAgICAgICAgICAgIFwibG5hbWVcIjogXCJMYXN0IE5hbWVcIixcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJFbWFpbFwiLFxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiQ291bnRyeVwiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiQ2l0eVwiLFxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIk1vYmlsZVwiLFxuICAgICAgICAgICAgXCJzdWJzY3JpYmVcIjogXCJTdWJzY3JpYmVcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInB0XCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwiZm5hbWVcIjogXCJOb21lXCIsXG4gICAgICAgICAgICBcImxuYW1lXCI6IFwiU29icmVub21lXCIsXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiRS1tYWlsXCIsXG4gICAgICAgICAgICBcImNvdW50cnlcIjogXCJQYcOtc1wiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiQ2lkYWRlXCIsXG4gICAgICAgICAgICBcInBob25lXCI6IFwiQ2VsdWxhclwiLFxuICAgICAgICAgICAgXCJzdWJzY3JpYmVcIjogXCJJbnNjcmV2ZXItc2VcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBGbGlnaHRDb250cm9sID0gcmVxdWlyZSgnLi9GbGlnaHRDb250cm9sJylcbjtcblxuLyoqXG4gKiBBdXRvY29tcGxldGUgd2lkZ2V0IHdpdGggbGlzdCBvZiBDb3BhJ3MgZGVzdGluYXRpb25zXG4gKiBmb3IgYmV0dGVyIHVzYWJpbGl0eSB0aGFuIGEgbmF0aXZlIHNlbGVjdCBtZW51LlxuICogQGNsYXNzXG4gKi9cbmNsYXNzIEF1dG9jb21wbGV0ZVxue1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIEN1c3RvbSBvcHRpb25zIGZvciB0aGlzIHdpZGdldCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgICAgIG1pbkxlbmd0aDogMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBkZXN0aW5hdGlvbnMgZnJvbSBGbGlnaHQgQ29udHJvbCBBUElcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2sgd2hlbiBBUEkgY2FsbCBmaW5pc2hlc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICBhbmQgZGVzdGluYXRpb25zIGFyZSBmZXRjaGVkXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzdGFydChjYikge1xuICAgICAgICB2YXIgZmxpZ2h0Q29udHJvbCA9IG5ldyBGbGlnaHRDb250cm9sKHsgbGFuZzogdGhpcy5vcHRpb25zLmxhbmcgfSk7XG5cbiAgICAgICAgZmxpZ2h0Q29udHJvbC5mZXRjaCgnZGVzdGluYXRpb25zJywgKGRlc3RpbmF0aW9ucykgPT4ge1xuICAgICAgICAgICAgLy8gRm9ybWF0IHJhdyBkZXN0aW5hdGlvbnMgdG8gYXV0b2NvbXBsZXRlIHN0cnVjdHVyZVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNvdXJjZSA9IHRoaXMuZm9ybWF0KGRlc3RpbmF0aW9ucy5saXN0KTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBhdXRvY29tcGxldGUgd2lkZ2V0XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50IERPTSBlbGVtZW50IHRvIGF0dGFjaCB3aWRnZXQgdG9cbiAgICAgKi9cbiAgICByZW5kZXIoZWxlbWVudCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKGVsZW1lbnQpLmhpZGUoKSxcbiAgICAgICAgICAgIHNvdXJjZUNsYXNzZXMgPSAkdGhpcy5hdHRyKCdjbGFzcycpLFxuICAgICAgICAgICAgc291cmNlVmFsdWUgPSAkdGhpcy52YWwoKSxcbiAgICAgICAgICAgIHNvdXJjZVBsYWNlaG9sZGVyID0gJHRoaXMuYXR0cigncGxhY2Vob2xkZXInKSxcbiAgICAgICAgICAgIGRhdGFJbnB1dCA9ICR0aGlzLmRhdGEoJ2lucHV0LWZpZWxkJylcbiAgICAgICAgO1xuXG4gICAgICAgIHZhciAkaW5wdXQgPSAkKCc8aW5wdXQgLz4nKVxuICAgICAgICAgICAgLnZhbChzb3VyY2VWYWx1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd0eXBlJywgJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3BsYWNlaG9sZGVyJywgc291cmNlUGxhY2Vob2xkZXIpXG4gICAgICAgICAgICAuYXR0cignZGF0YS1pbnB1dC1maWVsZCcsIGRhdGFJbnB1dClcbiAgICAgICAgO1xuXG4gICAgICAgIC8vIEFkZCBhdXRvY29tcGxldGUgZnVuY3Rpb25hbGl0eVxuICAgICAgICAkaW5wdXQuYXV0b2NvbXBsZXRlKHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgLy8gT3BlbiBsaXN0IG9uIGlucHV0IGZvY3VzXG4gICAgICAgICRpbnB1dC5vbignZm9jdXMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZiAoJHRoaXMudmFsKCkubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICR0aGlzLmF1dG9jb21wbGV0ZSgnc2VhcmNoJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBzdHlsaW5nXG4gICAgICAgICRpbnB1dFxuICAgICAgICAgICAgLmFkZENsYXNzKHNvdXJjZUNsYXNzZXMpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3VpLXdpZGdldCAgdWktd2lkZ2V0LWNvbnRlbnQgIHVpLXN0YXRlLWRlZmF1bHQnKTtcblxuICAgICAgICAvLyBJbnNlcnQgaW50byBET01cbiAgICAgICAgJGlucHV0Lmluc2VydEFmdGVyKCR0aGlzKTtcblxuICAgICAgICAvLyBPdmVyd3JpdGUgYXV0b2NvbXBsZXRlIGl0ZW0gcmVuZGVyaW5nIHdpdGggY3VzdG9tIG1hcmt1cFxuICAgICAgICAkaW5wdXQuYXV0b2NvbXBsZXRlKCdpbnN0YW5jZScpLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24odWwsIGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAkKCc8bGk+JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kKGl0ZW0ubGFiZWwpXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKHVsKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBDdXN0b20gZmlsdGVyaW5nIGZ1bmN0aW9uXG4gICAgICAgICQudWkuYXV0b2NvbXBsZXRlLmZpbHRlciA9IGZ1bmN0aW9uIGF1dG9Db21wbGV0ZUZpbHRlcihhcnJheSwgdGVybSkge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKCdcXFxcYicgKyAkLnVpLmF1dG9jb21wbGV0ZS5lc2NhcGVSZWdleCh0ZXJtKSwgJ2knKTtcbiAgICAgICAgICAgIHJldHVybiAkLmdyZXAoYXJyYXksIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVyLnRlc3QodmFsdWUubGFiZWwgfHwgdmFsdWUudmFsdWUgfHwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0cyBkZXN0aW5hdGlvbnMgaW50byB0aGUgbmVlZGVkIHN0cnVjdHVyZSB0byBiZSBkaXNwbGF5ZWRcbiAgICAgKiBvbiB0aGUgYXV0b2NvbXBsZXRlIG1lbnUgd2lkZ2V0LlxuICAgICAqIEBwYXJhbSAge0FycmF5fSBkZXN0aW5hdGlvbnMgUmF3IGRhdGEgcmV0dXJuZWQgZnJvbSBGbGlnaHQgQ29udHJvbFxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgICAgRm9ybWF0dGVkIGRlc3RpbmF0aW9uc1xuICAgICAqL1xuICAgIGZvcm1hdChkZXN0aW5hdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgICQuZWFjaChkZXN0aW5hdGlvbnMsIChpLCBkZXN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgdGVtcExhYmVsID1cbiAgICAgICAgICAgICAgICAgICAgYDxiPiR7IGRlc3QubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10gfSwgJHsgZGVzdC5jb3VudHJ5IH08L2I+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29kZVwiPiB8ICR7IGRlc3QuaWQgfTwvc3Bhbj5gLFxuICAgICAgICAgICAgICAgIHRlbXBWYWx1ZSA9IGRlc3QuaWQsXG4gICAgICAgICAgICAgICAgdGV4dFZhbHVlID0gZGVzdC5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSArICcsICcgKyBkZXN0LmlkO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiB0ZW1wTGFiZWwsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRlbXBWYWx1ZSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0ZXh0VmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBFeHBvcnRcbiAqIEBleHBvcnRzIEF1dG9jb21wbGV0ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IEF1dG9jb21wbGV0ZTtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgaTE4biA9IHJlcXVpcmUoJy4uLy4uLy4uL2xhbmcvZGF0ZXBpY2tlci5qc29uJyksXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIGRlcGFydHVyZVNlbGVjdG9yOiAnLmNvcGFhaXItYm9va2luZy1kYXRlcGlja2VyLWRlcGFydHVyZScsXG4gICAgICAgIHJldHVyblNlbGVjdG9yOiAnLmNvcGFhaXItYm9va2luZy1kYXRlcGlja2VyLXJldHVybicsXG4gICAgICAgIGRhdGVSdWxlczoge1xuICAgICAgICAgICAgdG9kYXk6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICB3ZWVrTGF0ZXI6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApXG4gICAgICAgIH0sXG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIGJlZm9yZVNob3c6IGZ1bmN0aW9uKGlucHV0LCBpc250KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlzbnQuZHBEaXYucG9zaXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBteTogJ2xlZnQgYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgYXQ6ICdsZWZ0IHRvcCcsXG4gICAgICAgICAgICAgICAgICAgIG9mOiBpbnB1dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG47XG5cbi8qKlxuICogRGF0ZXBpY2tlciBtb2R1bGVcbiAqL1xuY2xhc3MgRGF0ZXBpY2tlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGRhdGUgcGlja2VyIGluc2lkZSB0aGUgYm9va2luZyBmb3JtXG4gICAgICogc2V0dXBzIHRoZSBkZWZhdWx0cyBkYXRlcyBhbmQgbGFuZ3VhZ2VcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0TG9jYWxlKCk7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdERhdGVzKCk7XG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGRlZmF1bHRzIGRhdGVzXG4gICAgICogdGhpcyBjb25zaXN0IGluIHNldCBjdXJyZW50IGRhdGUgZm9yIGRlcGFydHVyZVxuICAgICAqIGFuZCBvbmUgd2VlayBsYXRlciBmb3IgcmV0dXJuXG4gICAgICovXG4gICAgc2V0RGVmYXVsdERhdGVzKCkge1xuICAgICAgICB2YXIgZGF0ZVJ1bGVzID0gdGhpcy5vcHRpb25zLmRhdGVSdWxlcyxcbiAgICAgICAgICAgICRkZXBhcnR1cmVGaWVsZCA9ICQodGhpcy5vcHRpb25zLmRlcGFydHVyZVNlbGVjdG9yKSxcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZCA9ICQodGhpcy5vcHRpb25zLnJldHVyblNlbGVjdG9yKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMubWluRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIodGhpcy5vcHRpb25zKTtcbiAgICAgICAgJHJldHVybkZpZWxkLmRhdGVwaWNrZXIodGhpcy5vcHRpb25zKTtcblxuICAgICAgICAkZGVwYXJ0dXJlRmllbGQuZGF0ZXBpY2tlcihcInNldERhdGVcIiwgZGF0ZVJ1bGVzLnRvZGF5KTtcbiAgICAgICAgJHJldHVybkZpZWxkLmRhdGVwaWNrZXIoXCJzZXREYXRlXCIsIGRhdGVSdWxlcy53ZWVrTGF0ZXIpO1xuICAgIH1cblxuICAgIGV2ZW50cygpIHtcbiAgICAgICAgdmFyICRkZXBhcnR1cmVGaWVsZCA9ICQodGhpcy5vcHRpb25zLmRlcGFydHVyZVNlbGVjdG9yKSxcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZCA9ICQodGhpcy5vcHRpb25zLnJldHVyblNlbGVjdG9yKTtcblxuICAgICAgICAvLyAkZGVwYXJ0dXJlRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ29uU2VsZWN0JywgdGhpcy5vblNlbGVjdE91dGJvdW5kKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdE91dGJvdW5kKGRhdGVUZXh0LCBpbnN0KSB7XG4gICAgICAgICAgICB2YXIgJHJldHVybkZpZWxkID0gJCh0aGlzLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpLFxuICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShpbnN0LnNlbGVjdGVkWWVhciwgaW5zdC5zZWxlY3RlZE1vbnRoLCBpbnN0LnNlbGVjdGVkRGF5KTtcblxuICAgICAgICAgICAgLy90aGlzIHNldHMgdGhlIGluYm91bmQgZGF0ZSBwaWNrZXIgdG8gYSB3ZWVrIGxhdGVyIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgd2Vla2xhdGVyID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignc2V0RGF0ZScsIHdlZWtsYXRlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJlIGRhdGVwaWNrZXIgZGVwZW5kaW5nIG9uIHRoZVxuICAgICAqIGxvY2FsaXphdGlvblxuICAgICAqL1xuICAgIHNldExvY2FsZSgpIHtcbiAgICAgICAgdmFyIHJlZ2lvbmFsID0gaTE4blt0aGlzLm9wdGlvbnMubGFuZ10ucmVnaW9uYWw7XG4gICAgICAgICQuZGF0ZXBpY2tlci5zZXREZWZhdWx0cyhyZWdpb25hbCk7XG4gICAgfVxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEYXRlcGlja2VyO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnJlcXVpcmUoJ3N0b3JlLWpzJyk7XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgYXBpOiB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbnMgOiBcImh0dHBzOi8vZmxpZ2h0Y29udHJvbC5pby9hcGkvcm91dGVzL2Rlc3RpbmF0aW9uc1wiLFxuICAgICAgICAgICAgY291bnRyaWVzIDogXCJodHRwczovL2ZsaWdodGNvbnRyb2wuaW8vYXBpL3JvdXRlcy9jb3VudHJpZXNcIixcbiAgICAgICAgICAgIHJlZ2lvbnMgOiBcImh0dHBzOi8vZmxpZ2h0Y29udHJvbC5pby9hcGkvcm91dGVzL3JlZ2lvbnNcIixcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcmFnZUV4cGlyYXRpb246IDg2NDAwMDAwLFxuICAgICAgICBzdG9yYWdlOiB0cnVlLFxuICAgIH1cbjtcblxuLyoqXG4gKiBFeHRlbnNpb24gdG8gdGhlIHN0b3JhZ2UgY2xhc3NcbiAqIHRvIHNldHVwIHRoZSBleHBpcmF0aW9uIHZhbHVlXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgc3RvcmVXaWR0aEV4cGlyYXRpb24gPSB7XG4gICAgc2V0OiBmdW5jdGlvbihrZXksIHZhbCwgZXhwKSB7XG4gICAgICAgIHN0b3JlLnNldChrZXksIHsgdmFsOnZhbCwgZXhwOmV4cCwgdGltZTpuZXcgRGF0ZSgpLmdldFRpbWUoKSB9KVxuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgdmFyIGluZm8gPSBzdG9yZS5nZXQoa2V5KVxuICAgICAgICBpZiAoIWluZm8pIHsgcmV0dXJuIG51bGwgfVxuICAgICAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBpbmZvLnRpbWUgPiBpbmZvLmV4cCkgeyByZXR1cm4gbnVsbCB9XG4gICAgICAgIHJldHVybiBpbmZvLnZhbFxuICAgIH1cbn1cblxuLyoqXG4gKiBNb2R1bGUgRmxpZ2h0Q29udHJvbFxuICovXG5jbGFzcyBGbGlnaHRDb250cm9sIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuXG4gICAgICAgIGlmKCFzdG9yZS5lbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYnJvd3NlciBub3Qgc3VwcG9ydGVkIG9yIGluIHByaXZhdGUgbW9kZScpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0b3JhZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIGRhdGEgZnJvbSBmbGlnaHQgY29udHJvbGxlclxuICAgICAqIGJhc2VkIG9uIHRoZSByZXNvdXJjZSBuYW1lXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgIHJlc291cmNlTmFtZTogZGVzdGluYXRpb25zfGNvdW50cmllc3xyZWdpb25zXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNiICBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGZldGNoKHJlc291cmNlTmFtZSwgY2IpIHtcbiAgICAgICAgdmFyIHJlc291cmNlVmFsdWUgPSB7fTtcblxuICAgICAgICBpZih0aGlzLm9wdGlvbnMuc3RvcmFnZSAmJiBzdG9yZVdpZHRoRXhwaXJhdGlvbi5nZXQocmVzb3VyY2VOYW1lKVxuICAgICAgICAgICAmJiBzdG9yZVdpZHRoRXhwaXJhdGlvbi5nZXQocmVzb3VyY2VOYW1lICsgJy5jb3VudCcpKSB7XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmxpc3QgPSBzdG9yZVdpZHRoRXhwaXJhdGlvbi5nZXQocmVzb3VyY2VOYW1lKTtcbiAgICAgICAgICAgIHJlc291cmNlVmFsdWUuY291bnQgPSBzdG9yZVdpZHRoRXhwaXJhdGlvbi5nZXQocmVzb3VyY2VOYW1lICsgJy5jb3VudCcpO1xuXG4gICAgICAgICAgIHJldHVybiBjYihyZXNvdXJjZVZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQuZ2V0SlNPTih0aGlzLm9wdGlvbnMuYXBpW3Jlc291cmNlTmFtZV0sIChkYXRhKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuc29ydE5hbWVzKGRhdGEpO1xuXG4gICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMuc3RvcmFnZSkge1xuICAgICAgICAgICAgICAgIHN0b3JlV2lkdGhFeHBpcmF0aW9uLnNldChyZXNvdXJjZU5hbWUsIGRhdGEsIHRoaXMub3B0aW9ucy5zdG9yYWdlRXhwaXJhdGlvbik7XG4gICAgICAgICAgICAgICAgc3RvcmVXaWR0aEV4cGlyYXRpb24uc2V0KHJlc291cmNlTmFtZSArICcuY291bnQnLCBkYXRhLmxlbmd0aCwgdGhpcy5vcHRpb25zLnN0b3JhZ2VFeHBpcmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc291cmNlVmFsdWUubGlzdCA9IGRhdGE7XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmNvdW50ID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGNiKHJlc291cmNlVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gc29ydCBkYXRhXG4gICAgICogYmFzZWQgb24gbGFuZ3VhZ2VcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBzb3J0TmFtZXMoZGF0YSkge1xuICAgICAgICBkYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLm5hbWVbdGhpcy5vcHRpb25zLmxhbmddID4gYi5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSkgcmV0dXJuIDE7XG4gICAgICAgICAgICBpZiAoYS5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSA8IGIubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10pIHJldHVybiAtMTtcblxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbGlnaHRDb250cm9sO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgb3JpZ2luOiAnYWxsJyxcbiAgICAgICAgZGVzdGluYXRpb246ICdhbGwnLFxuICAgICAgICBkMTogbnVsbCxcbiAgICAgICAgLy8gcmVxdWlyZWQgZmllbGQgdG8gc3VibWl0IGZvcm1cbiAgICAgICAgLy8gdG8gY29wYVxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHRyaXBUeXBlOiBcIlJUXCIsXG4gICAgICAgICAgICBmbGV4aWJsZVNlYXJjaDogXCJ0cnVlXCIsXG4gICAgICAgICAgICBwb3M6IFwiQ01HU1wiLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzBdLnR5cGVcIjogXCJBRFRcIixcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1sxXS50eXBlXCI6IFwiQ05OXCIsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMl0udHlwZVwiOiBcIklORlwiLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzBdLmFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzFdLmFtb3VudFwiOiAwLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzJdLmFtb3VudFwiOiAwLFxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIjogbnVsbCxcbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCI6IG51bGwsXG4gICAgICAgICAgICBcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiOiBudWxsLFxuICAgICAgICAgICAgLy8gXCJjb3Vwb25cIjogbnVsbCxcbiAgICAgICAgICAgIC8vIG9yaWdpblxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiOiBudWxsLFxuICAgICAgICAgICAgLy8gZGVzdGluYXRpb25cbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIC8vIC8vIGNhYmluIGNsYXNzIEJ1c2luZXNzfEVjb25vbXlcbiAgICAgICAgICAgIFwiY2FiaW5DbGFzc1wiOiBcIkVjb25vbXlcIixcbiAgICAgICAgICAgIGxhbmc6ICdlcydcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybVVybDogJ2h0dHBzOi8vYm9va2luZ3MuY29wYWFpci5jb20vQ01HUy8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgJ0Fpckxvd0ZhcmVTZWFyY2hFeHRlcm5hbC5kbz8nXG4gICAgfVxuO1xuXG4vKipcbiAqIEZvcm1IZWxwZXIgbW9kdWxlXG4gKi9cbmNsYXNzIEZvcm1IZWxwZXIge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgLy8gc2V0IGRlZmF1dGxzIHZhbHVlc1xuICAgICAgICB0aGlzLnNldERlZmF1bHRCb3VuZHMoKTtcbiAgICAgICAgdGhpcy5zZXREYXRlcyh0aGlzLm9wdGlvbnMuZGF0ZXBpY2tlciwge3JldHVybnM6dHJ1ZSwgZGVwYXJ0dXJlOnRydWV9KTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0cy5sYW5nID0gdGhpcy5vcHRpb25zLmxhbmc7XG4gICAgICAgIC8vIGxvYWQgZXZlbnRzIHJlbGF0ZWQgd2l0aCBmb3JtIGhlbHBlciBhbmQgb3RoZXIgbW9kdWxlc1xuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgIH1cblxuXG5cbiAgICBwcm9jZXNzKCkge1xuXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLm9wdGlvbnMuZm9ybVVybDtcbiAgICAgICAgdmFyIHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb25FcnJvcigpO1xuICAgICAgICB2YXIgaHR0cFF1ZXJ5ID0gJC5wYXJhbSh0aGlzLm9wdGlvbnMuaW5wdXRzKTtcbiAgICAgICAgaHR0cFF1ZXJ5ICs9ICcmJyArICQucGFyYW0oe2QxOiB0aGlzLm9wdGlvbnMuZDF9KTtcblxuICAgICAgICBpZiAodmFsaWRhdGlvbi5lcnJvcikge1xuICAgICAgICAgICAgLy8gaGFuZGxlIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb24uYmFnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIGVycm9ycywgZm9yd2FyZCBmb3JtIHZhbHVlcyB0byBjb3BhXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhodHRwUXVlcnkpO1xuICAgICAgICAgICAgdmFyIHNlYXJjaFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCArIGh0dHBRdWVyeSwgJ19ibGFuaycpO1xuICAgICAgICAgICAgc2VhcmNoV2luZG93LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREZWZhdWx0Qm91bmRzKCkge1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMub3JpZ2luICE9PSAnYWxsJykge1xuICAgICAgICAgICAgdGhpcy5zZXRCb3VuZHMoJ29yaWdpbicsIHRoaXMub3B0aW9ucy5vcmlnaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbiAhPT0nYWxsJykge1xuICAgICAgICAgICAgdGhpcy5zZXRCb3VuZHMoJ2Rlc3RpbmF0aW9uJywgdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Qm91bmRzKGJvdW5kLCBsb2NhdGlvbikge1xuXG4gICAgICAgIGlmIChib3VuZCA9PT0gJ29yaWdpbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIl0gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLmRlc3RpbmF0aW9uTG9jYXRpb25Db2RlXCJdID0gbG9jYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm91bmQgPT09ICdkZXN0aW5hdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiXSA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24ub3JpZ2luTG9jYXRpb25Db2RlXCJdID0gbG9jYXRpb247XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldERhdGVzKGRhdGVwaWNrZXIsIGJvdW5kcykge1xuICAgICAgICAvLyBnZXQgY3VycmVudCBkYXRlcGlja2VycyBkYXRlc1xuICAgICAgICB2YXIgZGVwYXJ0dXJlRGF0ZSA9ICQoZGF0ZXBpY2tlci5vcHRpb25zLmRlcGFydHVyZVNlbGVjdG9yKS5kYXRlcGlja2VyKCdnZXREYXRlJyksXG4gICAgICAgIHJldHVybkRhdGUgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5yZXR1cm5TZWxlY3RvcikuZGF0ZXBpY2tlcignZ2V0RGF0ZScpO1xuXG4gICAgICAgIGlmIChib3VuZHMucmV0dXJucykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlRGF5XCJdID0gcmV0dXJuRGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiXSA9IHJldHVybkRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCJdID0gcmV0dXJuRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoYm91bmRzLmRlcGFydHVyZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiXSA9IGRlcGFydHVyZURhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCJdID0gZGVwYXJ0dXJlRGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCJdID0gZGVwYXJ0dXJlRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q2FiaW5DbGFzcyh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImNhYmluQ2xhc3NcIl0gPSAkKHRhcmdldCkudmFsKCk7XG4gICAgfVxuXG4gICAgc2V0UGFzc2VuZ2Vyc0Ftb3VudCh0eXBlLCB2YWx1ZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FkdWx0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiZ3Vlc3RUeXBlc1swXS5hbW91bnRcIl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hpbGQnOlxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJndWVzdFR5cGVzWzFdLmFtb3VudFwiXSA9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbmZhbnQnOlxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJndWVzdFR5cGVzWzJdLmFtb3VudFwiXSA9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDb3Vwb24oY291cG9uKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHMuY291cG9uID0gY291cG9uO1xuICAgIH1cblxuICAgIHNldEQxKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzLmQxID0gdGhpcy5vcHRpb25zLmQxO1xuICAgIH1cblxuICAgIHZhbGlkYXRpb25FcnJvcigpIHtcbiAgICAgICAgdmFyIGVycm9ycyAgPSB7XG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBiYWc6W11cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGN1cnJlbnRFcnJvcjtcbiAgICAgICAgZm9yICh2YXIgaW5wdXQgaW4gdGhpcy5vcHRpb25zLmlucHV0cykge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vcHRpb25zLmlucHV0c1tpbnB1dF0pO1xuICAgICAgICAgICAgaWYoIXRoaXMub3B0aW9ucy5pbnB1dHNbaW5wdXRdICYmIHRoaXMub3B0aW9ucy5pbnB1dHNbaW5wdXRdICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVycm9yID0ge307XG4gICAgICAgICAgICAgICAgY3VycmVudEVycm9yLmZpZWxkID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY3VycmVudEVycm9yLm1lc3NhZ2UgPSBgVGhlIGlucHV0ICR7aW5wdXR9IG11c3QgaGF2ZSBzb21lIHZhbHVlYDtcbiAgICAgICAgICAgICAgICBlcnJvcnMuYmFnLnB1c2goY3VycmVudEVycm9yKTtcbiAgICAgICAgICAgICAgICBlcnJvcnMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVycm9ycztcbiAgICB9O1xuXG4gICAgZXZlbnRzKCkge1xuXG4gICAgICAgIHZhciBkYXRlcGlja2VyID0gdGhpcy5vcHRpb25zLmRhdGVwaWNrZXIsXG4gICAgICAgICAgICAkZGVwYXJ0dXJlRmllbGQgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvciksXG4gICAgICAgICAgICAkcmV0dXJuRmllbGQgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5yZXR1cm5TZWxlY3Rvcik7XG5cbiAgICAgICAgJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoJ29wdGlvbicsICdvblNlbGVjdCcsIChkYXRlVGV4dCwgaW5zdCkgPT57XG5cbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoaW5zdC5zZWxlY3RlZFllYXIsIGluc3Quc2VsZWN0ZWRNb250aCwgaW5zdC5zZWxlY3RlZERheSk7XG5cbiAgICAgICAgICAgIC8vIHRoaXMgc2V0cyB0aGUgaW5ib3VuZCBkYXRlIHBpY2tlciB0byBhIHdlZWsgbGF0ZXIgb2YgY3VycmVudCBzZWxlY3Rpb25cbiAgICAgICAgICAgIHZhciB3ZWVrbGF0ZXIgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKCdzZXREYXRlJywgd2Vla2xhdGVyKTtcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnbWluRGF0ZScsIGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlcyhkYXRlcGlja2VyLCB7cmV0dXJuczp0cnVlLCBkZXBhcnR1cmU6dHJ1ZX0pO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnb25TZWxlY3QnLCAoZGF0ZVRleHQsIGluc3QpID0+e1xuXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGluc3Quc2VsZWN0ZWRZZWFyLCBpbnN0LnNlbGVjdGVkTW9udGgsIGluc3Quc2VsZWN0ZWREYXkpO1xuXG4gICAgICAgICAgICAvLyB0aGlzIHNldHMgdGhlIGluYm91bmQgZGF0ZSBwaWNrZXIgdG8gYSB3ZWVrIGxhdGVyIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgd2Vla2xhdGVyID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGVzKGRhdGVwaWNrZXIsIHtyZXR1cm5zOnRydWUsIGRlcGFydHVyZTpmYWxzZX0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuYm9va2luZy5maW5kKCcuanMtY2FiaW4tY2xhc3MnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRDYWJpbkNsYXNzKGUudGFyZ2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmJvb2tpbmcuZmluZCgnLmpzLWFkdWx0cy1hbW91bnQnKS5zZWxlY3RtZW51KHtcbiAgICAgICAgICAgIGNoYW5nZTogKGUsIHVpKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYXNzZW5nZXJzQW1vdW50KCdhZHVsdCcsIHVpLml0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuYm9va2luZy5maW5kKCcuanMtY2hpbGRyZW4tYW1vdW50Jykuc2VsZWN0bWVudSh7XG4gICAgICAgICAgICBjaGFuZ2U6IChlLCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFzc2VuZ2Vyc0Ftb3VudCgnY2hpbGQnLCB1aS5pdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmJvb2tpbmcuZmluZCgnLmpzLWluZmFudHMtYW1vdW50Jykuc2VsZWN0bWVudSh7XG4gICAgICAgICAgICBjaGFuZ2U6IChlLCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFzc2VuZ2Vyc0Ftb3VudCgnaW5mYW50JywgdWkuaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5ib29raW5nLmZpbmQoJy5qcy1zdWJtaXQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1IZWxwZXI7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIEhhbmRsZWJhcnMgPSByZXF1aXJlKCdoYW5kbGViYXJzJyksXG4gICAgaTE4biA9IHtcbiAgICAgICAgYm9va2luZzogcmVxdWlyZSgnLi4vLi4vLi4vbGFuZy9ib29raW5nLmpzb24nKSxcbiAgICAgICAgc2lnbnVwOiByZXF1aXJlKCcuLi8uLi8uLi9sYW5nL3NpZ251cC5qc29uJyksXG4gICAgfSxcbiAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgLy9zcmM6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcycsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHt9XG4gICAgfVxuO1xuXG5cblxuY2xhc3MgVGVtcGxhdGVcbntcblxuICAgIGNvbnN0cnVjdG9yKHdpZGdldCwgb3B0aW9ucykge1xuXG4gICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24ucG9ydCA/ICc6JyArIHdpbmRvdy5sb2NhdGlvbi5wb3J0OiAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0cy5zcmMgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy9ib3dlcl9jb21wb25lbnRzL2NvcGFhaXItd2lkZ2V0cy90ZW1wbGF0ZXMnO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIGlmICh0eXBlb2YgSGFuZGxlYmFycyAhPT0gJ3VuZGVmaW5lZCcgJiYgSGFuZGxlYmFycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGAke3RoaXMub3B0aW9ucy5zcmN9LyR7d2lkZ2V0fS5oYnNgLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh0cGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCBpMThuW3dpZGdldF1bdGhpcy5vcHRpb25zLmxhbmddKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSB0aGlzLmNvbXBpbGUod2lkZ2V0LCB0cGwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2soaHRtbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGlzIHBsdWdpbiByZXF1aXJlcyBIYW5kbGViYXJzLmpzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21waWxlKHdpZGdldCwgdHBsKSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZSh0cGwpO1xuICAgICAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKHRoaXMub3B0aW9ucy5kYXRhKTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlbXBsYXRlO1xuIiwiLyoqXG4gKiBNb2R1bGVzXG4gKi9cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9saWIvVGVtcGxhdGUnKSxcbiAgICBGbGlnaHRDb250cm9sID0gcmVxdWlyZSgnLi4vbGliL0ZsaWdodENvbnRyb2wnKSxcbiAgICBEYXRlcGlja2VyID0gcmVxdWlyZSgnLi4vbGliL0RhdGVwaWNrZXInKSxcbiAgICBBdXRvY29tcGxldGUgPSByZXF1aXJlKCcuLi9saWIvQXV0b2NvbXBsZXRlJyksXG4gICAgRm9ybUhlbHBlciA9IHJlcXVpcmUoJy4uL2xpYi9Gb3JtSGVscGVyJylcbjtcblxuLyoqXG4gKiBPcHRpb25zXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIGQxOiBudWxsLFxuICAgICAgICBjb3Vwb246IG51bGwsXG4gICAgICAgIG9yaWdpbjogbnVsbCxcbiAgICAgICAgZGVzdGluYXRpb246IG51bGwsXG4gICAgICAgIGRlc3RpbmF0aW9uTmFtZTogbnVsbCxcbiAgICAgICAgd2lkZ2V0UG9zaXRpb246IHsgbXk6ICdsZWZ0IGJvdHRvbScsIGF0OiAnbGVmdCB0b3AnIH0sXG4gICAgICAgIHRlbXBsYXRlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcy9ib29raW5nLmhicycsXG4gICAgICAgIGxhbmd1YWdlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL2xhbmcvJ1xuICAgIH1cbjtcblxuXG5jbGFzcyBCb29raW5nIHtcblxuICAgIC8qKlxuICAgICAqIFdpZGdldCBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvciBlbGVtZW50IERPTSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAgT3B0aW9ucyBwYXNzZWQgb24gcGx1Z2luIGluc3RhbmNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRib29raW5nID0gJChlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgbmV3IFRlbXBsYXRlKCdib29raW5nJywge1xuICAgICAgICAgICAgJ2xhbmcnOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgICdvcmlnaW4nOiB0aGlzLm9wdGlvbnMub3JpZ2luLFxuICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uJzogdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uTmFtZSc6IHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbk5hbWUsIC8vIHRlbXBvcmFyeSBmaXggZm9yIHN0YXRpYyBkZXN0aW5hdGlvblxuICAgICAgICAgICAgY2FsbGJhY2s6IChodG1sKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYm9va2luZy5odG1sKGh0bWwpO1xuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBmaW5pc2hlZCwgYnVpbGQgYWxsIHRoZSB3aWRnZXRzXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cFNlbGVjdE1lbnVzKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXR1cCBkYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGVwaWNrZXIgPSBuZXcgRGF0ZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgICAgIGxhbmc6IHRoaXMub3B0aW9ucy5sYW5nLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRhdGVwaWNrZXIucmVuZGVyKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZm9ybUhlbHBlciA9IG5ldyBGb3JtSGVscGVyKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXBpY2tlcjogZGF0ZXBpY2tlcixcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiB0aGlzLm9wdGlvbnMub3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBib29raW5nOiB0aGlzLiRib29raW5nLFxuICAgICAgICAgICAgICAgICAgICBkMTogdGhpcy5vcHRpb25zLmQxLFxuICAgICAgICAgICAgICAgICAgICBsYW5nOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLmNvdXBvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3JtSGVscGVyLnNldENvdXBvbih0aGlzLm9wdGlvbnMuY291cG9uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBdXRvY29tcGxldGUgd2lkZ2V0c1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEF1dG9jb21wbGV0ZShmb3JtSGVscGVyKTtcblxuXG4gICAgICAgICAgICAgICAgLy8gQmluZCBldmVudHNcbiAgICAgICAgICAgICAgICB0aGlzLmJvb2tpbmdFdmVudHMoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCBhdXRvY29tcGxldGUgZGVzdGluYXRpb24gd2lkZ2V0c1xuICAgICAqIEBzZWUgbW9kdWxlOkF1dG9jb21wbGV0ZVxuICAgICAqL1xuICAgIGluaXRBdXRvY29tcGxldGUoZm9ybUhlbHBlcikge1xuICAgICAgICAvLyBJbml0IGNsYXNzIHdpdGggb3B0aW9uc1xuICAgICAgICB2YXIgYXV0b2NvbXBsZXRlID0gbmV3IEF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICBsYW5nOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgIHNlbGVjdDogZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgZGlzcGxheSB2YWx1ZSB0byB0aGUgaW5wdXRcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCh1aS5pdGVtLmRpc3BsYXkpO1xuICAgICAgICAgICAgICAgIC8vc2V0IGFjdHVhbCB2YWx1ZSBhdCB0aGUgYm9va2luZyBvYmplY3RcbiAgICAgICAgICAgICAgICBmb3JtSGVscGVyLnNldEJvdW5kcygkKHRoaXMpLmRhdGEoJ2lucHV0LWZpZWxkJyksIHVpLml0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm9wdGlvbnMud2lkZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICBhcHBlbmRUbzogdGhpcy4kYm9va2luZ1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCdWlsZFxuICAgICAgICBhdXRvY29tcGxldGUuc3RhcnQoKCkgPT4ge1xuICAgICAgICAgICAgYXV0b2NvbXBsZXRlLnJlbmRlcih0aGlzLiRib29raW5nLmZpbmQoJy5qcy1ib29raW5nLWF1dG9jb21wbGV0ZScpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgc2VsZWN0IG1lbnVzIHdpdGggY3VzdG9tIFVJIHdpZGdldHNcbiAgICAgKi9cbiAgICBzZXR1cFNlbGVjdE1lbnVzKCkge1xuICAgICAgICAkKCcuanMtc2VsZWN0bWVudScpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMub3B0aW9ucy53aWRnZXRQb3NpdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIGV2ZW50cyByZWxhdGVkIHRvIGJvb2tpbmcgaW50ZXJhY3Rpb25cbiAgICAgKi9cbiAgICBib29raW5nRXZlbnRzKCkge1xuICAgICAgICB2YXIgJGJvb2tpbmcgPSB0aGlzLiRib29raW5nO1xuICAgICAgICB2YXIgJHRvZ2dsZSA9IHRoaXMuJGJvb2tpbmcuZmluZCgnLmpzLWNvcGFhaXItdG9nZ2xlJyk7XG5cbiAgICAgICAgLy8gU2hvdyBib3R0b20gcm93IHdoZW4gYW55IGlucHV0IGdldHMgZm9jdXNcbiAgICAgICAgJGJvb2tpbmcub24oJ2ZvY3VzLmNvcGFhaXInLCAnaW5wdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkYm9va2luZy5hZGRDbGFzcygnY29wYWFpci13aWRnZXQtb3BlbicpO1xuICAgICAgICAgICAgJHRvZ2dsZS5yZW1vdmVDbGFzcygnY29wYWFpci1oaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2xpY2tpbmcgYW55d2hlcmUgaW4gdGhlIGRvY3VtZW50IGhpZGVzIGJvdHRvbSByb3dcbiAgICAgICAgJGJvb2tpbmcub24oJ2NsaWNrLmNvcGFhaXInLCAnLmpzLWNvcGFhaXItY2xvc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkYm9va2luZy5yZW1vdmVDbGFzcygnY29wYWFpci13aWRnZXQtb3BlbicpO1xuICAgICAgICAgICAgJHRvZ2dsZS5hZGRDbGFzcygnY29wYWFpci1oaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm9va2luZztcbiIsInZhciBUZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL2xpYi9UZW1wbGF0ZScpO1xuXG5jbGFzcyBTaWdudXAge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRmb3JtID0gJChlbGVtZW50KTtcblxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBsYW5nOiAnZXMnXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBMb2FkIHRlbXBsYXRlXG4gICAgICAgIG5ldyBUZW1wbGF0ZSgnc2lnbnVwJywge1xuICAgICAgICAgICAgJ2xhbmcnOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoaHRtbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGZvcm0uaHRtbChodG1sKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpZ251cEV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgc2lnbnVwRXZlbnRzKCkge1xuICAgICAgICB2YXIgJGZvcm0gPSB0aGlzLiRmb3JtO1xuICAgICAgICB2YXIgJHRvZ2dsZSA9IHRoaXMuJGZvcm0uZmluZCgnLmpzLWNvcGFhaXItdG9nZ2xlJyk7XG5cbiAgICAgICAgLy8gU2hvdyBib3R0b20gcm93IHdoZW4gYW55IGlucHV0IGdldHMgZm9jdXNcbiAgICAgICAgJGZvcm0ub24oJ2ZvY3VzLmNvcGFhaXInLCAnaW5wdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkZm9ybS5hZGRDbGFzcygnY29wYWFpci13aWRnZXQtb3BlbicpO1xuICAgICAgICAgICAgJHRvZ2dsZS5yZW1vdmVDbGFzcygnY29wYWFpci1oaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGZvcm0ub24oJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oZS50YXJnZXQpO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgc3VibWl0Rm9ybSh0YXJnZXQpIHtcbiAgICAgICAgdmFyICRmb3JtID0gJCh0YXJnZXQpO1xuXG4gICAgICAgIHZhciBkYXRhID0gJGZvcm0uc2VyaWFsaXplT2JqZWN0KCk7XG4gICAgICAgIGRhdGEuZnVsbG5hbWUgPSBkYXRhLmZpcnN0X25hbWUgKyAnICcgKyBkYXRhLmxhc3RfbmFtZTtcbiAgICAgICAgZGF0YS5zb3VyY2UgPSB0aGlzLm9wdGlvbnMuc291cmNlO1xuICAgICAgICBkYXRhLmxhbmd1YWdlID0gdGhpcy5vcHRpb25zLmxhbmc7XG5cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXI7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZmxpZ2h0Y29udHJvbC5pby9hcGkvc2lnbnVwL2FkZCcsXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBjb250YWluZXIuZmFkZU91dCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWdudXA7XG4iXX0=
