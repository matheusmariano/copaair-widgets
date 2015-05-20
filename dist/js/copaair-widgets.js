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

},{"./widgets/Booking":12,"./widgets/Signup":13}],2:[function(require,module,exports){
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

},{"./FlightControl":9}],7:[function(require,module,exports){
(function (global){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    FlightControl = require("./FlightControl"),
    defaults = {
    lang: "es",
    contentType: "countries",
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

    _prototypeProperties(DataMenu, null, {
        setup: {
            value: function setup() {
                var _this = this;

                var flightControl = new FlightControl({ lang: this.options.lang });

                flightControl.fetch(this.options.contentType, function (data, lang) {
                    // Format raw destinations to autocomplete structure
                    _this.options.source = _this.format(data.list);
                    _this.render();
                    if (typeof cb === "function") {
                        cb();
                    }
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var _this = this;

                $.each(this.options.source, function (i, item) {
                    $(_this.options.selector).append(item.display);
                });
            },
            writable: true,
            configurable: true
        },
        format: {

            /**
             * Formats data into the needed structure to be displayed
             * on the autocomplete menu widget.
             * @param  {Array} destinations Raw data returned from Flight Control
             * @return {Array}              Formatted destinations
             */

            value: function format(list) {
                var _this = this;

                var result = [];
                $.each(list, function (i, item) {
                    var option = "<option value=\"" + item.id + "\">" + item.name[_this.options.lang] + "</option>";
                    result.push({
                        display: option
                    });
                });

                return result;
            },
            writable: true,
            configurable: true
        }
    });

    return DataMenu;
})();

module.exports = DataMenu;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./FlightControl":9}],8:[function(require,module,exports){
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

},{"../../../lang/datepicker.json":4}],9:[function(require,module,exports){
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

                if (IE9Data) {

                    var data = IE9Data[resourceName];
                    this.sortNames(data);

                    if (this.options.storage) {
                        storeWidthExpiration.set(resourceName, data, this.options.storageExpiration);
                        storeWidthExpiration.set(resourceName + ".count", data.length, this.options.storageExpiration);
                    }
                    resourceValue.list = data;
                    resourceValue.count = data.length;

                    cb(resourceValue);
                } else {

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
                }
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

},{"store-js":2}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{"../../../lang/booking.json":3,"../../../lang/signup.json":5}],12:[function(require,module,exports){
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

},{"../lib/Autocomplete":6,"../lib/Datepicker":8,"../lib/FlightControl":9,"../lib/FormHelper":10,"../lib/Template":11}],13:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Template = require("../lib/Template"),
    DataMenu = require("../lib/DataMenu"),
    i18n = require("../../../lang/datepicker.json");

var defaults = {
    lang: "es",
    widgetPosition: { my: "left bottom", at: "left top" } };

var Signup = (function () {
    function Signup(element, options) {
        var _this = this;

        _classCallCheck(this, Signup);

        this.$form = $(element);

        this.options = $.extend({}, defaults, options);

        // Load template
        new Template("signup", {
            lang: this.options.lang,
            callback: function (html) {
                _this.$form.html(html);
                _this.signupEvents();
                var lang = _this.options.lang;

                _this.$form.find(".js-selectmenu").each(function () {

                    var dataMenu = new DataMenu({
                        lang: lang,
                        contentType: $(this).data("content"),
                        selector: $(this)
                    });
                });

                _this.setupSelectMenus();

                $(".js-signup-date").datepicker({
                    changeMonth: true,
                    changeYear: true,
                    format: "dd/mm/yy",
                    beforeShow: function beforeShow(input, isnt) {
                        setTimeout(function () {
                            isnt.dpDiv.position({
                                my: "left bottom",
                                at: "left top",
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

    _prototypeProperties(Signup, null, {
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

                $(".js-country-selector").selectmenu({
                    change: function (e, ui) {
                        _this.options.country = ui.item.value;
                    }
                });

                $(".js-city-selector").selectmenu({
                    change: function (e, ui) {
                        _this.options.city = ui.item.value;
                    }
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
                data.language = this.options.lang.toUpperCase();
                data.city = this.options.city;
                data.country = this.options.country;

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

},{"../../../lang/datepicker.json":4,"../lib/DataMenu":7,"../lib/Template":11}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9pbmRleC5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvYm93ZXJfY29tcG9uZW50cy9zdG9yZS5qcy9zdG9yZS5taW4uanMiLCJsYW5nL2Jvb2tpbmcuanNvbiIsImxhbmcvZGF0ZXBpY2tlci5qc29uIiwibGFuZy9zaWdudXAuanNvbiIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9BdXRvY29tcGxldGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvRGF0YU1lbnUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvRGF0ZXBpY2tlci5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9GbGlnaHRDb250cm9sLmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGFhaXItd2lkZ2V0cy9zcmMvanMvbGliL0Zvcm1IZWxwZXIuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvVGVtcGxhdGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL0Jvb2tpbmcuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL1NpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLEFBQUMsQ0FBQSxVQUFVLE9BQU8sRUFBRTtBQUNoQixnQkFBWSxDQUFDOztBQUViLFFBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FB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Q0FBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUcsU0FBUyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLFVBQVMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLFlBQVUsRUFBRSxFQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLEtBQUMsSUFBRSxJQUFJLEtBQUcsQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFBLEFBQUMsRUFBQyxDQUFDLElBQUUsSUFBSSxLQUFHLENBQUMsR0FBQyxFQUFFLENBQUEsQUFBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLFlBQVUsRUFBRSxFQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxRQUFHLE9BQU8sQ0FBQyxJQUFFLFFBQVEsRUFBQyxPQUFPLFNBQVMsQ0FBQyxJQUFHO0FBQUMsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLGFBQU8sQ0FBQyxJQUFFLFNBQVMsQ0FBQTtLQUFDO0dBQUMsQ0FBQyxJQUFHLENBQUMsRUFBRSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxXQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxRQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLEtBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsWUFBVTtBQUFDLEtBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxZQUFVO0FBQUMsUUFBSSxDQUFDLEdBQUMsRUFBRSxDQUFDLFFBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxPQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsU0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7QUFBQyxVQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUM7R0FBQyxDQUFDLEtBQUssSUFBRyxDQUFDLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBQztRQUFLLENBQUMsRUFBQyxDQUFDO1FBQXlPLENBQUMsRUFBdU0sQ0FBQzs7O1VBQWtFLENBQUMsR0FBVixVQUFXLENBQUMsRUFBQztBQUFDLGVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQTtPQUFDOztBQUF4aUIsVUFBRztBQUFDLFNBQUMsR0FBQyxJQUFJLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLHNCQUFzQixHQUFDLENBQUMsR0FBQyx5Q0FBdUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO09BQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLFNBQUMsR0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO09BQUM7QUFBSSxPQUFDLEdBQUMsV0FBUyxDQUFDLEVBQUM7QUFBQyxlQUFPLFlBQVU7QUFBQyxjQUFJLENBQUMsR0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxRQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBLENBQUE7U0FBQyxDQUFBO09BQUM7O0FBQUMsT0FBQyxHQUFDLElBQUksTUFBTSxDQUFDLHVDQUF1QyxFQUFDLEdBQUcsQ0FBQztBQUErRCxPQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsZ0JBQU8sQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQSxDQUFBO09BQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFHLFNBQVMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO09BQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLFNBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsWUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsWUFBSSxDQUFDLEdBQUMsRUFBRSxDQUFDLFFBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO1NBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBO09BQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxZQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7T0FBQyxDQUFDLENBQUE7O0dBQUMsSUFBRztBQUFDLFFBQUksQ0FBQyxHQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsS0FBRyxDQUFDLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLEtBQUMsQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxDQUFDLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBQyxPQUFPLE1BQU0sSUFBRSxXQUFXLElBQUUsTUFBTSxDQUFDLE9BQU8sSUFBRSxJQUFJLENBQUMsTUFBTSxLQUFHLE1BQU0sR0FBQyxNQUFNLENBQUMsT0FBTyxHQUFDLENBQUMsR0FBQyxPQUFPLE1BQU0sSUFBRSxVQUFVLElBQUUsTUFBTSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUE7Q0FBQyxDQUFBLENBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQTs7Ozs7Ozs7OztBQ0RuK0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUN2RCxvQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUNsQyxvQkFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNoRCxvQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztBQUM5QixvQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzs7QUFFcEMsb0JBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDOztBQUV2QyxpQkFBQyxDQUFDLElBQUksQ0FBQztBQUNILHdCQUFJLEVBQUUsTUFBTTtBQUNaLHVCQUFHLEVBQUUseUNBQXlDO0FBQzlDLHdCQUFJLEVBQUUsSUFBSTtpQkFDYixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsR0FBRyxFQUFFO0FBQ2xCLDZCQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3ZCLENBQUMsQ0FBQzthQUNOOzs7Ozs7V0ExR0MsTUFBTTs7O0FBOEdaLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gTm9kZS9Db21tb25KU1xuICAgICAgICBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cbn0oZnVuY3Rpb24oJCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBCb29raW5nID0gcmVxdWlyZSgnLi93aWRnZXRzL0Jvb2tpbmcnKSxcbiAgICAgICAgU2lnbnVwICA9IHJlcXVpcmUoJy4vd2lkZ2V0cy9TaWdudXAnKVxuICAgIDtcblxuICAgIC8qKlxuICAgICAqIEJpbmQgd2lkZ2V0cyB0byBqUXVlcnkgb2JqZWN0IHByb3RvdHlwZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIHBhc3NlZCB0byBvdmVycmlkZSBkZWZhdWx0cy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgQ3VycmVudCBvYmplY3QgaW5zdGFuY2VcbiAgICAgKi9cbiAgICAkLmZuLmNvcGFhaXJCb29raW5nID0gZnVuY3Rpb24gY29wYWFpckJvb2tpbmcob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyQm9va2luZycpKSB7XG4gICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsICdwbHVnaW5fY29wYWFpckJvb2tpbmcnLCBuZXcgQm9va2luZyh0aGlzLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkLmZuLmNvcGFhaXJTaWdudXAgPSBmdW5jdGlvbiBjb3BhYWlyU2lnbnVwKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghJC5kYXRhKHRoaXMsICdwbHVnaW5fY29wYWFpclNpZ251cCcpKSB7XG4gICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsICdwbHVnaW5fY29wYWFpclNpZ251cCcsIG5ldyBTaWdudXAodGhpcywgb3B0aW9ucykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJC5mbi5zZXJpYWxpemVPYmplY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG8gPSB7fTtcbiAgICAgICAgdmFyIGEgPSB0aGlzLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgICQuZWFjaChhLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChvW3RoaXMubmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICghb1t0aGlzLm5hbWVdLnB1c2gpIHtcbiAgICAgICAgICAgICAgICAgICAgb1t0aGlzLm5hbWVdID0gW29bdGhpcy5uYW1lXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9bdGhpcy5uYW1lXS5wdXNoKHRoaXMudmFsdWUgfHwgJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfTtcblxufSkpO1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTMgTWFyY3VzIFdlc3RpbiAqL1xuKGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIG8oKXt0cnl7cmV0dXJuIHIgaW4gZSYmZVtyXX1jYXRjaCh0KXtyZXR1cm4hMX19dmFyIHQ9e30sbj1lLmRvY3VtZW50LHI9XCJsb2NhbFN0b3JhZ2VcIixpPVwic2NyaXB0XCIsczt0LmRpc2FibGVkPSExLHQudmVyc2lvbj1cIjEuMy4xN1wiLHQuc2V0PWZ1bmN0aW9uKGUsdCl7fSx0LmdldD1mdW5jdGlvbihlLHQpe30sdC5oYXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHQuZ2V0KGUpIT09dW5kZWZpbmVkfSx0LnJlbW92ZT1mdW5jdGlvbihlKXt9LHQuY2xlYXI9ZnVuY3Rpb24oKXt9LHQudHJhbnNhY3Q9ZnVuY3Rpb24oZSxuLHIpe3I9PW51bGwmJihyPW4sbj1udWxsKSxuPT1udWxsJiYobj17fSk7dmFyIGk9dC5nZXQoZSxuKTtyKGkpLHQuc2V0KGUsaSl9LHQuZ2V0QWxsPWZ1bmN0aW9uKCl7fSx0LmZvckVhY2g9ZnVuY3Rpb24oKXt9LHQuc2VyaWFsaXplPWZ1bmN0aW9uKGUpe3JldHVybiBKU09OLnN0cmluZ2lmeShlKX0sdC5kZXNlcmlhbGl6ZT1mdW5jdGlvbihlKXtpZih0eXBlb2YgZSE9XCJzdHJpbmdcIilyZXR1cm4gdW5kZWZpbmVkO3RyeXtyZXR1cm4gSlNPTi5wYXJzZShlKX1jYXRjaCh0KXtyZXR1cm4gZXx8dW5kZWZpbmVkfX07aWYobygpKXM9ZVtyXSx0LnNldD1mdW5jdGlvbihlLG4pe3JldHVybiBuPT09dW5kZWZpbmVkP3QucmVtb3ZlKGUpOihzLnNldEl0ZW0oZSx0LnNlcmlhbGl6ZShuKSksbil9LHQuZ2V0PWZ1bmN0aW9uKGUsbil7dmFyIHI9dC5kZXNlcmlhbGl6ZShzLmdldEl0ZW0oZSkpO3JldHVybiByPT09dW5kZWZpbmVkP246cn0sdC5yZW1vdmU9ZnVuY3Rpb24oZSl7cy5yZW1vdmVJdGVtKGUpfSx0LmNsZWFyPWZ1bmN0aW9uKCl7cy5jbGVhcigpfSx0LmdldEFsbD1mdW5jdGlvbigpe3ZhciBlPXt9O3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCxuKXtlW3RdPW59KSxlfSx0LmZvckVhY2g9ZnVuY3Rpb24oZSl7Zm9yKHZhciBuPTA7bjxzLmxlbmd0aDtuKyspe3ZhciByPXMua2V5KG4pO2Uocix0LmdldChyKSl9fTtlbHNlIGlmKG4uZG9jdW1lbnRFbGVtZW50LmFkZEJlaGF2aW9yKXt2YXIgdSxhO3RyeXthPW5ldyBBY3RpdmVYT2JqZWN0KFwiaHRtbGZpbGVcIiksYS5vcGVuKCksYS53cml0ZShcIjxcIitpK1wiPmRvY3VtZW50Lnc9d2luZG93PC9cIitpKyc+PGlmcmFtZSBzcmM9XCIvZmF2aWNvbi5pY29cIj48L2lmcmFtZT4nKSxhLmNsb3NlKCksdT1hLncuZnJhbWVzWzBdLmRvY3VtZW50LHM9dS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpfWNhdGNoKGYpe3M9bi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHU9bi5ib2R5fXZhciBsPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKTtuLnVuc2hpZnQocyksdS5hcHBlbmRDaGlsZChzKSxzLmFkZEJlaGF2aW9yKFwiI2RlZmF1bHQjdXNlckRhdGFcIikscy5sb2FkKHIpO3ZhciBpPWUuYXBwbHkodCxuKTtyZXR1cm4gdS5yZW1vdmVDaGlsZChzKSxpfX0sYz1uZXcgUmVnRXhwKFwiWyFcXFwiIyQlJicoKSorLC9cXFxcXFxcXDo7PD0+P0BbXFxcXF1eYHt8fX5dXCIsXCJnXCIpO2Z1bmN0aW9uIGgoZSl7cmV0dXJuIGUucmVwbGFjZSgvXmQvLFwiX19fJCZcIikucmVwbGFjZShjLFwiX19fXCIpfXQuc2V0PWwoZnVuY3Rpb24oZSxuLGkpe3JldHVybiBuPWgobiksaT09PXVuZGVmaW5lZD90LnJlbW92ZShuKTooZS5zZXRBdHRyaWJ1dGUobix0LnNlcmlhbGl6ZShpKSksZS5zYXZlKHIpLGkpfSksdC5nZXQ9bChmdW5jdGlvbihlLG4scil7bj1oKG4pO3ZhciBpPXQuZGVzZXJpYWxpemUoZS5nZXRBdHRyaWJ1dGUobikpO3JldHVybiBpPT09dW5kZWZpbmVkP3I6aX0pLHQucmVtb3ZlPWwoZnVuY3Rpb24oZSx0KXt0PWgodCksZS5yZW1vdmVBdHRyaWJ1dGUodCksZS5zYXZlKHIpfSksdC5jbGVhcj1sKGZ1bmN0aW9uKGUpe3ZhciB0PWUuWE1MRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dHJpYnV0ZXM7ZS5sb2FkKHIpO2Zvcih2YXIgbj0wLGk7aT10W25dO24rKyllLnJlbW92ZUF0dHJpYnV0ZShpLm5hbWUpO2Uuc2F2ZShyKX0pLHQuZ2V0QWxsPWZ1bmN0aW9uKGUpe3ZhciBuPXt9O3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24oZSx0KXtuW2VdPXR9KSxufSx0LmZvckVhY2g9bChmdW5jdGlvbihlLG4pe3ZhciByPWUuWE1MRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dHJpYnV0ZXM7Zm9yKHZhciBpPTAscztzPXJbaV07KytpKW4ocy5uYW1lLHQuZGVzZXJpYWxpemUoZS5nZXRBdHRyaWJ1dGUocy5uYW1lKSkpfSl9dHJ5e3ZhciBwPVwiX19zdG9yZWpzX19cIjt0LnNldChwLHApLHQuZ2V0KHApIT1wJiYodC5kaXNhYmxlZD0hMCksdC5yZW1vdmUocCl9Y2F0Y2goZil7dC5kaXNhYmxlZD0hMH10LmVuYWJsZWQ9IXQuZGlzYWJsZWQsdHlwZW9mIG1vZHVsZSE9XCJ1bmRlZmluZWRcIiYmbW9kdWxlLmV4cG9ydHMmJnRoaXMubW9kdWxlIT09bW9kdWxlP21vZHVsZS5leHBvcnRzPXQ6dHlwZW9mIGRlZmluZT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kP2RlZmluZSh0KTplLnN0b3JlPXR9KShGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkpIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiZXNcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJvcmlnaW5cIjogXCJEZXNkZVwiLFxuICAgICAgICAgICAgXCJkZXN0aW5hdGlvblwiOiBcIkhhY2lhXCIsXG4gICAgICAgICAgICBcImRlcGFydHVyZVwiOiBcIlNhbGlkYVwiLFxuICAgICAgICAgICAgXCJyZXR1cm5cIjogXCJSZWdyZXNvXCIsXG4gICAgICAgICAgICBcImVjb25vbWljXCI6IFwiQ2xhc2UgRWNvbsOzbWljYVwiLFxuICAgICAgICAgICAgXCJidXNpbmVzc1wiOiBcIkNsYXNlIEVqZWN1dGl2YVwiLFxuICAgICAgICAgICAgXCJzdWJtaXRcIjogXCJWZXIgVnVlbG9zXCIsXG4gICAgICAgICAgICBcImFkdWx0c1wiOiBcIkFkdWx0b3NcIixcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogXCJOacOxb3NcIixcbiAgICAgICAgICAgIFwiaW5mYW50c1wiIDogXCJJbmZhbnRlc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWVzc2FnZXNcIjoge1xuICAgICAgICAgICAgXCJub3RpZmljYXRpb25cIjogXCJQb3IgZmF2b3IgY29tcGxldGEgdG9kb3MgbG9zIGNhbXBvcy5cIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJQb3IgZmF2b3IgY29tcGxldGEgdG9kb3MgbG9zIGNhbXBvcy5cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwib3JpZ2luXCI6IFwiRnJvbVwiLFxuICAgICAgICAgICAgXCJkZXN0aW5hdGlvblwiOiBcIlRvXCIsXG4gICAgICAgICAgICBcImRlcGFydHVyZVwiOiBcIkRlcGFydHVyZVwiLFxuICAgICAgICAgICAgXCJyZXR1cm5cIjogXCJSZXR1cm5cIixcbiAgICAgICAgICAgIFwiZWNvbm9taWNcIjogXCJFY29ub215IENsYXNzXCIsXG4gICAgICAgICAgICBcImJ1c2luZXNzXCI6IFwiQnVzaW5lc3MgQ2xhc3NcIixcbiAgICAgICAgICAgIFwic3VibWl0XCI6IFwiRmluZCBmbGlnaHRzXCIsXG4gICAgICAgICAgICBcImFkdWx0c1wiOiBcIkFkdWx0c1wiLFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBcIkNoaWxkcmVuXCIsXG4gICAgICAgICAgICBcImluZmFudHNcIiA6IFwiSW5mYW50c1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWVzc2FnZXNcIjoge1xuICAgICAgICAgICAgXCJub3RpZmljYXRpb25cIjogXCJQbGVhc2UgY29tcGxldGUgYWxsIHRoZSAuLi5cIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJQbGVhc2UgY29tcGxldGUgYWxsIHRoZSAuLi5cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInB0XCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwib3JpZ2luXCI6IFwiRGVcIixcbiAgICAgICAgICAgIFwiZGVzdGluYXRpb25cIjogXCJQYXJhXCIsXG4gICAgICAgICAgICBcImRlcGFydHVyZVwiOiBcIlNhw61kYVwiLFxuICAgICAgICAgICAgXCJyZXR1cm5cIjogXCJSZWdyZXNzb1wiLFxuICAgICAgICAgICAgXCJlY29ub21pY1wiOiBcIkNsYXNzZSBlY29uw7RtaWNhXCIsXG4gICAgICAgICAgICBcImJ1c2luZXNzXCI6IFwiQ2xhc3NlIEV4ZWN1dGl2YVwiLFxuICAgICAgICAgICAgXCJzdWJtaXRcIjogXCJCdXNjYXIgdm9vc1wiLFxuICAgICAgICAgICAgXCJhZHVsdHNcIjogXCJBZHVsdG9zXCIsXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IFwiQ3JpYW7Dp2FzXCIsXG4gICAgICAgICAgICBcImluZmFudHNcIiA6IFwiQmViw6pzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlc1wiOiB7XG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwicmVnaW9uYWxcIjoge1xuICAgICAgICAgICAgXCJjbG9zZVRleHRcIjogXCJDZXJyYXJcIixcbiAgICAgICAgICAgIFwicHJldlRleHRcIjogXCImI3gzQztBbnRcIixcbiAgICAgICAgICAgIFwibmV4dFRleHRcIjogXCJTaWcmI3gzRTtcIixcbiAgICAgICAgICAgIFwiY3VycmVudFRleHRcIjogXCJIb3lcIixcbiAgICAgICAgICAgIFwibW9udGhOYW1lc1wiOiBbXCJlbmVyb1wiLFwiZmVicmVyb1wiLFwibWFyem9cIixcImFicmlsXCIsXCJtYXlvXCIsXCJqdW5pb1wiLFxuICAgICAgICAgICAgXCJqdWxpb1wiLFwiYWdvc3RvXCIsXCJzZXB0aWVtYnJlXCIsXCJvY3R1YnJlXCIsXCJub3ZpZW1icmVcIixcImRpY2llbWJyZVwiXSxcbiAgICAgICAgICAgIFwibW9udGhOYW1lc1Nob3J0XCI6IFtcImVuZVwiLFwiZmViXCIsXCJtYXJcIixcImFiclwiLFwibWF5XCIsXCJqdW5cIixcImp1bFwiLFwiYWdvXCIsXCJzZXBcIixcIm9jdFwiLFwibm92XCIsXCJkaWNcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzXCI6IFtcImRvbWluZ29cIixcImx1bmVzXCIsXCJtYXJ0ZXNcIixcIm1pw6lyY29sZXMnLCdqdWV2ZXNcIixcInZpZXJuZXNcIixcInPDoWJhZG9cIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzU2hvcnRcIjogW1wiZG9tXCIsXCJsdW5cIixcIm1hclwiLFwibWnDqVwiLFwianV2XCIsXCJ2aWVcIixcInPDoWJcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzTWluXCI6IFtcIkRcIixcIkxcIixcIk1cIixcIlhcIixcIkpcIixcIlZcIixcIlNcIl0sXG4gICAgICAgICAgICBcIndlZWtIZWFkZXJcIjogXCJTbVwiLFxuICAgICAgICAgICAgXCJkYXRlRm9ybWF0XCI6IFwiZGQvbW0veXlcIixcbiAgICAgICAgICAgIFwiZmlyc3REYXlcIjogMSxcbiAgICAgICAgICAgIFwiaXNSVExcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNob3dNb250aEFmdGVyWWVhclwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwieWVhclN1ZmZpeFwiOiBcIlwiXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgXCJlblwiOiB7XG4gICAgICAgIFwicmVnaW9uYWxcIiA6IHt9XG4gICAgfSxcbiAgICBcInB0XCI6IHtcbiAgICAgICAgXCJyZWdpb25hbFwiIDoge1xuICAgICAgICAgICAgXCJjbG9zZVRleHRcIjogXCJGZWNoYXJcIixcbiAgICAgICAgICAgIFwicHJldlRleHRcIjogXCImI3gzQztBbnRlcmlvclwiLFxuICAgICAgICAgICAgXCJuZXh0VGV4dFwiOiBcIlByw7N4aW1vJiN4M0U7XCIsXG4gICAgICAgICAgICBcImN1cnJlbnRUZXh0XCI6IFwiSG9qZVwiLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzXCI6IFtcIkphbmVpcm9cIixcIkZldmVyZWlyb1wiLFwiTWFyw6dvXCIsXCJBYnJpbFwiLFwiTWFpb1wiLFwiSnVuaG9cIixcIkp1bGhvXCIsXCJBZ29zdG9cIixcIlNldGVtYnJvXCIsXCJPdXR1YnJvXCIsXCJOb3ZlbWJyb1wiLFwiRGV6ZW1icm9cIl0sXG4gICAgICAgICAgICBcIm1vbnRoTmFtZXNTaG9ydFwiOiBbXCJKYW5cIixcIkZldlwiLFwiTWFyXCIsXCJBYnJcIixcIk1haVwiLFwiSnVuXCIsXCJKdWxcIixcIkFnb1wiLFwiU2V0XCIsXCJPdXRcIixcIk5vdlwiLFwiRGV6XCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc1wiOiBbXCJEb21pbmdvXCIsXCJTZWd1bmRhLWZlaXJhXCIsXCJUZXLDp2EtZmVpcmFcIixcIlF1YXJ0YS1mZWlyYScsJ1F1aW50YS1mZWlyYVwiLFwiU2V4dGEtZmVpcmFcIixcIlPDoWJhZG9cIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzU2hvcnRcIjogW1wiRG9tXCIsXCJTZWdcIixcIlRlclwiLFwiUXVhXCIsXCJRdWlcIixcIlNleFwiLFwiU8OhYlwiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNNaW5cIjogW1wiRG9tXCIsXCJTZWdcIixcIlRlclwiLFwiUXVhXCIsXCJRdWlcIixcIlNleFwiLFwiU8OhYlwiXSxcbiAgICAgICAgICAgIFwid2Vla0hlYWRlclwiOiBcIlNtXCIsXG4gICAgICAgICAgICBcImRhdGVGb3JtYXRcIjogXCJkZC9tbS95eVwiLFxuICAgICAgICAgICAgXCJmaXJzdERheVwiOiAwLFxuICAgICAgICAgICAgXCJpc1JUTFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2hvd01vbnRoQWZ0ZXJZZWFyXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ5ZWFyU3VmZml4XCI6IFwiXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwiZm5hbWVcIjogXCJOb21icmVcIixcbiAgICAgICAgICAgIFwibG5hbWVcIjogXCJBcGVsbGlkb1wiLFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIkVtYWlsXCIsXG4gICAgICAgICAgICBcImNvdW50cnlcIjogXCJQYcOtc1wiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiQ2l1ZGFkXCIsXG4gICAgICAgICAgICBcInBob25lXCI6IFwiTcOzdmlsXCIsXG4gICAgICAgICAgICBcInN1YnNjcmliZVwiOiBcIlN1c2NyaWJpclwiLFxuICAgICAgICAgICAgXCJiaXJ0aGRheVwiOiBcIkZlY2hhIGRlIG5hY2ltaWVudG9cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgIFwiZm5hbWVcIjogXCJOYW1lXCIsXG4gICAgICAgICAgICBcImxuYW1lXCI6IFwiTGFzdCBOYW1lXCIsXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiRW1haWxcIixcbiAgICAgICAgICAgIFwiY291bnRyeVwiOiBcIkNvdW50cnlcIixcbiAgICAgICAgICAgIFwiY2l0eVwiOiBcIkNpdHlcIixcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCJNb2JpbGVcIixcbiAgICAgICAgICAgIFwic3Vic2NyaWJlXCI6IFwiU3Vic2NyaWJlXCIsXG4gICAgICAgICAgICBcImJpcnRoZGF5XCI6IFwiRGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicHRcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJmbmFtZVwiOiBcIk5vbWVcIixcbiAgICAgICAgICAgIFwibG5hbWVcIjogXCJTb2JyZW5vbWVcIixcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJFLW1haWxcIixcbiAgICAgICAgICAgIFwiY291bnRyeVwiOiBcIlBhw61zXCIsXG4gICAgICAgICAgICBcImNpdHlcIjogXCJDaWRhZGVcIixcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCJDZWx1bGFyXCIsXG4gICAgICAgICAgICBcInN1YnNjcmliZVwiOiBcIkluc2NyZXZlci1zZVwiLFxuICAgICAgICAgICAgXCJiaXJ0aGRheVwiOiBcIkRhdGEgZGUgbmFzY2ltZW50b1wiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIEZsaWdodENvbnRyb2wgPSByZXF1aXJlKCcuL0ZsaWdodENvbnRyb2wnKVxuO1xuXG4vKipcbiAqIEF1dG9jb21wbGV0ZSB3aWRnZXQgd2l0aCBsaXN0IG9mIENvcGEncyBkZXN0aW5hdGlvbnNcbiAqIGZvciBiZXR0ZXIgdXNhYmlsaXR5IHRoYW4gYSBuYXRpdmUgc2VsZWN0IG1lbnUuXG4gKiBAY2xhc3NcbiAqL1xuY2xhc3MgQXV0b2NvbXBsZXRlXG57XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgQ3VzdG9tIG9wdGlvbnMgZm9yIHRoaXMgd2lkZ2V0IGluc3RhbmNlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGRlc3RpbmF0aW9ucyBmcm9tIEZsaWdodCBDb250cm9sIEFQSVxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYiBDYWxsYmFjayB3aGVuIEFQSSBjYWxsIGZpbmlzaGVzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgIGFuZCBkZXN0aW5hdGlvbnMgYXJlIGZldGNoZWRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHN0YXJ0KGNiKSB7XG4gICAgICAgIHZhciBmbGlnaHRDb250cm9sID0gbmV3IEZsaWdodENvbnRyb2woeyBsYW5nOiB0aGlzLm9wdGlvbnMubGFuZyB9KTtcblxuICAgICAgICBmbGlnaHRDb250cm9sLmZldGNoKCdkZXN0aW5hdGlvbnMnLCAoZGVzdGluYXRpb25zKSA9PiB7XG4gICAgICAgICAgICAvLyBGb3JtYXQgcmF3IGRlc3RpbmF0aW9ucyB0byBhdXRvY29tcGxldGUgc3RydWN0dXJlXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc291cmNlID0gdGhpcy5mb3JtYXQoZGVzdGluYXRpb25zLmxpc3QpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGF1dG9jb21wbGV0ZSB3aWRnZXRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnQgRE9NIGVsZW1lbnQgdG8gYXR0YWNoIHdpZGdldCB0b1xuICAgICAqL1xuICAgIHJlbmRlcihlbGVtZW50KSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQoZWxlbWVudCkuaGlkZSgpLFxuICAgICAgICAgICAgc291cmNlQ2xhc3NlcyA9ICR0aGlzLmF0dHIoJ2NsYXNzJyksXG4gICAgICAgICAgICBzb3VyY2VWYWx1ZSA9ICR0aGlzLnZhbCgpLFxuICAgICAgICAgICAgc291cmNlUGxhY2Vob2xkZXIgPSAkdGhpcy5hdHRyKCdwbGFjZWhvbGRlcicpLFxuICAgICAgICAgICAgZGF0YUlucHV0ID0gJHRoaXMuZGF0YSgnaW5wdXQtZmllbGQnKVxuICAgICAgICA7XG5cbiAgICAgICAgdmFyICRpbnB1dCA9ICQoJzxpbnB1dCAvPicpXG4gICAgICAgICAgICAudmFsKHNvdXJjZVZhbHVlKVxuICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigncGxhY2Vob2xkZXInLCBzb3VyY2VQbGFjZWhvbGRlcilcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLWlucHV0LWZpZWxkJywgZGF0YUlucHV0KVxuICAgICAgICA7XG5cbiAgICAgICAgLy8gQWRkIGF1dG9jb21wbGV0ZSBmdW5jdGlvbmFsaXR5XG4gICAgICAgICRpbnB1dC5hdXRvY29tcGxldGUodGhpcy5vcHRpb25zKTtcblxuICAgICAgICAvLyBPcGVuIGxpc3Qgb24gaW5wdXQgZm9jdXNcbiAgICAgICAgJGlucHV0Lm9uKCdmb2N1cycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmICgkdGhpcy52YWwoKS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgJHRoaXMuYXV0b2NvbXBsZXRlKCdzZWFyY2gnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIHN0eWxpbmdcbiAgICAgICAgJGlucHV0XG4gICAgICAgICAgICAuYWRkQ2xhc3Moc291cmNlQ2xhc3NlcylcbiAgICAgICAgICAgIC5hZGRDbGFzcygndWktd2lkZ2V0ICB1aS13aWRnZXQtY29udGVudCAgdWktc3RhdGUtZGVmYXVsdCcpO1xuXG4gICAgICAgIC8vIEluc2VydCBpbnRvIERPTVxuICAgICAgICAkaW5wdXQuaW5zZXJ0QWZ0ZXIoJHRoaXMpO1xuXG4gICAgICAgIC8vIE92ZXJ3cml0ZSBhdXRvY29tcGxldGUgaXRlbSByZW5kZXJpbmcgd2l0aCBjdXN0b20gbWFya3VwXG4gICAgICAgICRpbnB1dC5hdXRvY29tcGxldGUoJ2luc3RhbmNlJykuX3JlbmRlckl0ZW0gPSBmdW5jdGlvbih1bCwgaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuICQoJzxsaT4nKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoaXRlbS5sYWJlbClcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8odWwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEN1c3RvbSBmaWx0ZXJpbmcgZnVuY3Rpb25cbiAgICAgICAgJC51aS5hdXRvY29tcGxldGUuZmlsdGVyID0gZnVuY3Rpb24gYXV0b0NvbXBsZXRlRmlsdGVyKGFycmF5LCB0ZXJtKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJ1xcXFxiJyArICQudWkuYXV0b2NvbXBsZXRlLmVzY2FwZVJlZ2V4KHRlcm0pLCAnaScpO1xuICAgICAgICAgICAgcmV0dXJuICQuZ3JlcChhcnJheSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXIudGVzdCh2YWx1ZS5sYWJlbCB8fCB2YWx1ZS52YWx1ZSB8fCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXRzIGRlc3RpbmF0aW9ucyBpbnRvIHRoZSBuZWVkZWQgc3RydWN0dXJlIHRvIGJlIGRpc3BsYXllZFxuICAgICAqIG9uIHRoZSBhdXRvY29tcGxldGUgbWVudSB3aWRnZXQuXG4gICAgICogQHBhcmFtICB7QXJyYXl9IGRlc3RpbmF0aW9ucyBSYXcgZGF0YSByZXR1cm5lZCBmcm9tIEZsaWdodCBDb250cm9sXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgICBGb3JtYXR0ZWQgZGVzdGluYXRpb25zXG4gICAgICovXG4gICAgZm9ybWF0KGRlc3RpbmF0aW9ucykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgJC5lYWNoKGRlc3RpbmF0aW9ucywgKGksIGRlc3QpID0+IHtcbiAgICAgICAgICAgIGxldCB0ZW1wTGFiZWwgPVxuICAgICAgICAgICAgICAgICAgICBgPGI+JHsgZGVzdC5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSB9LCAkeyBkZXN0LmNvdW50cnkgfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2RlXCI+IHwgJHsgZGVzdC5pZCB9PC9zcGFuPmAsXG4gICAgICAgICAgICAgICAgdGVtcFZhbHVlID0gZGVzdC5pZCxcbiAgICAgICAgICAgICAgICB0ZXh0VmFsdWUgPSBkZXN0Lm5hbWVbdGhpcy5vcHRpb25zLmxhbmddICsgJywgJyArIGRlc3QuaWQ7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHRlbXBMYWJlbCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGVtcFZhbHVlLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRleHRWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4vKipcbiAqIEV4cG9ydFxuICogQGV4cG9ydHMgQXV0b2NvbXBsZXRlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gQXV0b2NvbXBsZXRlO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBGbGlnaHRDb250cm9sID0gcmVxdWlyZSgnLi9GbGlnaHRDb250cm9sJyksXG5cbiAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgY29udGVudFR5cGU6ICdjb3VudHJpZXMnLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7fVxuICAgIH1cbjtcblxuXG5cbmNsYXNzIERhdGFNZW51XG57XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgQ3VzdG9tIG9wdGlvbnMgZm9yIHRoaXMgd2lkZ2V0IGluc3RhbmNlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuXG4gICAgICAgIHRoaXMuc2V0dXAoKTtcbiAgICB9XG5cbiAgICBzZXR1cCgpIHtcblxuICAgICAgICB2YXIgZmxpZ2h0Q29udHJvbCA9IG5ldyBGbGlnaHRDb250cm9sKHsgbGFuZzogdGhpcy5vcHRpb25zLmxhbmcgfSk7XG5cbiAgICAgICAgZmxpZ2h0Q29udHJvbC5mZXRjaCh0aGlzLm9wdGlvbnMuY29udGVudFR5cGUsIChkYXRhLCBsYW5nKSA9PiB7XG4gICAgICAgICAgICAvLyBGb3JtYXQgcmF3IGRlc3RpbmF0aW9ucyB0byBhdXRvY29tcGxldGUgc3RydWN0dXJlXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc291cmNlID0gdGhpcy5mb3JtYXQoZGF0YS5saXN0KTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAkLmVhY2godGhpcy5vcHRpb25zLnNvdXJjZSwgKGksIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLnNlbGVjdG9yKS5hcHBlbmQoaXRlbS5kaXNwbGF5KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXRzIGRhdGEgaW50byB0aGUgbmVlZGVkIHN0cnVjdHVyZSB0byBiZSBkaXNwbGF5ZWRcbiAgICAgKiBvbiB0aGUgYXV0b2NvbXBsZXRlIG1lbnUgd2lkZ2V0LlxuICAgICAqIEBwYXJhbSAge0FycmF5fSBkZXN0aW5hdGlvbnMgUmF3IGRhdGEgcmV0dXJuZWQgZnJvbSBGbGlnaHQgQ29udHJvbFxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgICAgRm9ybWF0dGVkIGRlc3RpbmF0aW9uc1xuICAgICAqL1xuICAgIGZvcm1hdChsaXN0KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgJC5lYWNoKGxpc3QsIChpLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID1cbiAgICAgICAgICAgICAgICBgPG9wdGlvbiB2YWx1ZT1cIiR7IGl0ZW0uaWQgfVwiPiR7IGl0ZW0ubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10gfTwvb3B0aW9uPmA7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpvcHRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFNZW51O1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBpMThuID0gcmVxdWlyZSgnLi4vLi4vLi4vbGFuZy9kYXRlcGlja2VyLmpzb24nKSxcbiAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgZGVwYXJ0dXJlU2VsZWN0b3I6ICcuY29wYWFpci1ib29raW5nLWRhdGVwaWNrZXItZGVwYXJ0dXJlJyxcbiAgICAgICAgcmV0dXJuU2VsZWN0b3I6ICcuY29wYWFpci1ib29raW5nLWRhdGVwaWNrZXItcmV0dXJuJyxcbiAgICAgICAgZGF0ZVJ1bGVzOiB7XG4gICAgICAgICAgICB0b2RheTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIHdlZWtMYXRlcjogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMClcbiAgICAgICAgfSxcbiAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgYmVmb3JlU2hvdzogZnVuY3Rpb24oaW5wdXQsIGlzbnQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaXNudC5kcERpdi5wb3NpdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIG15OiAnbGVmdCBib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBhdDogJ2xlZnQgdG9wJyxcbiAgICAgICAgICAgICAgICAgICAgb2Y6IGlucHV0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgIH1cbjtcblxuLyoqXG4gKiBEYXRlcGlja2VyIG1vZHVsZVxuICovXG5jbGFzcyBEYXRlcGlja2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgZGF0ZSBwaWNrZXIgaW5zaWRlIHRoZSBib29raW5nIGZvcm1cbiAgICAgKiBzZXR1cHMgdGhlIGRlZmF1bHRzIGRhdGVzIGFuZCBsYW5ndWFnZVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5zZXRMb2NhbGUoKTtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0RGF0ZXMoKTtcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgZGVmYXVsdHMgZGF0ZXNcbiAgICAgKiB0aGlzIGNvbnNpc3QgaW4gc2V0IGN1cnJlbnQgZGF0ZSBmb3IgZGVwYXJ0dXJlXG4gICAgICogYW5kIG9uZSB3ZWVrIGxhdGVyIGZvciByZXR1cm5cbiAgICAgKi9cbiAgICBzZXREZWZhdWx0RGF0ZXMoKSB7XG4gICAgICAgIHZhciBkYXRlUnVsZXMgPSB0aGlzLm9wdGlvbnMuZGF0ZVJ1bGVzLFxuICAgICAgICAgICAgJGRlcGFydHVyZUZpZWxkID0gJCh0aGlzLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLFxuICAgICAgICAgICAgJHJldHVybkZpZWxkID0gJCh0aGlzLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5taW5EYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICAkZGVwYXJ0dXJlRmllbGQuZGF0ZXBpY2tlcih0aGlzLm9wdGlvbnMpO1xuICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcih0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgICRkZXBhcnR1cmVGaWVsZC5kYXRlcGlja2VyKFwic2V0RGF0ZVwiLCBkYXRlUnVsZXMudG9kYXkpO1xuICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcihcInNldERhdGVcIiwgZGF0ZVJ1bGVzLndlZWtMYXRlcik7XG4gICAgfVxuXG4gICAgZXZlbnRzKCkge1xuICAgICAgICB2YXIgJGRlcGFydHVyZUZpZWxkID0gJCh0aGlzLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLFxuICAgICAgICAgICAgJHJldHVybkZpZWxkID0gJCh0aGlzLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpO1xuXG4gICAgICAgIC8vICRkZXBhcnR1cmVGaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnb25TZWxlY3QnLCB0aGlzLm9uU2VsZWN0T3V0Ym91bmQpO1xuICAgIH1cblxuICAgIG9uU2VsZWN0T3V0Ym91bmQoZGF0ZVRleHQsIGluc3QpIHtcbiAgICAgICAgICAgIHZhciAkcmV0dXJuRmllbGQgPSAkKHRoaXMub3B0aW9ucy5yZXR1cm5TZWxlY3RvciksXG4gICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGluc3Quc2VsZWN0ZWRZZWFyLCBpbnN0LnNlbGVjdGVkTW9udGgsIGluc3Quc2VsZWN0ZWREYXkpO1xuXG4gICAgICAgICAgICAvL3RoaXMgc2V0cyB0aGUgaW5ib3VuZCBkYXRlIHBpY2tlciB0byBhIHdlZWsgbGF0ZXIgb2YgY3VycmVudCBzZWxlY3Rpb25cbiAgICAgICAgICAgIHZhciB3ZWVrbGF0ZXIgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKCdzZXREYXRlJywgd2Vla2xhdGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmUgZGF0ZXBpY2tlciBkZXBlbmRpbmcgb24gdGhlXG4gICAgICogbG9jYWxpemF0aW9uXG4gICAgICovXG4gICAgc2V0TG9jYWxlKCkge1xuICAgICAgICB2YXIgcmVnaW9uYWwgPSBpMThuW3RoaXMub3B0aW9ucy5sYW5nXS5yZWdpb25hbDtcbiAgICAgICAgJC5kYXRlcGlja2VyLnNldERlZmF1bHRzKHJlZ2lvbmFsKTtcbiAgICB9XG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGVwaWNrZXI7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xucmVxdWlyZSgnc3RvcmUtanMnKTtcblxudmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBhcGk6IHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9ucyA6IFwiaHR0cHM6Ly9mbGlnaHRjb250cm9sLmlvL2FwaS9yb3V0ZXMvZGVzdGluYXRpb25zXCIsXG4gICAgICAgICAgICBjb3VudHJpZXMgOiBcImh0dHBzOi8vZmxpZ2h0Y29udHJvbC5pby9hcGkvcm91dGVzL2NvdW50cmllc1wiLFxuICAgICAgICAgICAgcmVnaW9ucyA6IFwiaHR0cHM6Ly9mbGlnaHRjb250cm9sLmlvL2FwaS9yb3V0ZXMvcmVnaW9uc1wiLFxuICAgICAgICB9LFxuICAgICAgICBzdG9yYWdlRXhwaXJhdGlvbjogODY0MDAwMDAsXG4gICAgICAgIHN0b3JhZ2U6IHRydWUsXG4gICAgfVxuO1xuXG4vKipcbiAqIEV4dGVuc2lvbiB0byB0aGUgc3RvcmFnZSBjbGFzc1xuICogdG8gc2V0dXAgdGhlIGV4cGlyYXRpb24gdmFsdWVcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBzdG9yZVdpZHRoRXhwaXJhdGlvbiA9IHtcbiAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsLCBleHApIHtcbiAgICAgICAgc3RvcmUuc2V0KGtleSwgeyB2YWw6dmFsLCBleHA6ZXhwLCB0aW1lOm5ldyBEYXRlKCkuZ2V0VGltZSgpIH0pXG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgaW5mbyA9IHN0b3JlLmdldChrZXkpXG4gICAgICAgIGlmICghaW5mbykgeyByZXR1cm4gbnVsbCB9XG4gICAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGluZm8udGltZSA+IGluZm8uZXhwKSB7IHJldHVybiBudWxsIH1cbiAgICAgICAgcmV0dXJuIGluZm8udmFsXG4gICAgfVxufVxuXG4vKipcbiAqIE1vZHVsZSBGbGlnaHRDb250cm9sXG4gKi9cbmNsYXNzIEZsaWdodENvbnRyb2wge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgaWYoIXN0b3JlLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdicm93c2VyIG5vdCBzdXBwb3J0ZWQgb3IgaW4gcHJpdmF0ZSBtb2RlJyk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc3RvcmFnZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggZGF0YSBmcm9tIGZsaWdodCBjb250cm9sbGVyXG4gICAgICogYmFzZWQgb24gdGhlIHJlc291cmNlIG5hbWVcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgcmVzb3VyY2VOYW1lOiBkZXN0aW5hdGlvbnN8Y291bnRyaWVzfHJlZ2lvbnNcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2IgIGNhbGxiYWNrXG4gICAgICogQHJldHVybiB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgZmV0Y2gocmVzb3VyY2VOYW1lLCBjYikge1xuICAgICAgICB2YXIgcmVzb3VyY2VWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5zdG9yYWdlICYmIHN0b3JlV2lkdGhFeHBpcmF0aW9uLmdldChyZXNvdXJjZU5hbWUpXG4gICAgICAgICAgICYmIHN0b3JlV2lkdGhFeHBpcmF0aW9uLmdldChyZXNvdXJjZU5hbWUgKyAnLmNvdW50JykpIHtcbiAgICAgICAgICAgIHJlc291cmNlVmFsdWUubGlzdCA9IHN0b3JlV2lkdGhFeHBpcmF0aW9uLmdldChyZXNvdXJjZU5hbWUpO1xuICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5jb3VudCA9IHN0b3JlV2lkdGhFeHBpcmF0aW9uLmdldChyZXNvdXJjZU5hbWUgKyAnLmNvdW50Jyk7XG5cbiAgICAgICAgICAgcmV0dXJuIGNiKHJlc291cmNlVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKElFOURhdGEpIHtcblxuICAgICAgICAgICAgdmFyIGRhdGEgPSBJRTlEYXRhW3Jlc291cmNlTmFtZV07XG4gICAgICAgICAgICB0aGlzLnNvcnROYW1lcyhkYXRhKTtcblxuICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLnN0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICBzdG9yZVdpZHRoRXhwaXJhdGlvbi5zZXQocmVzb3VyY2VOYW1lLCBkYXRhLCB0aGlzLm9wdGlvbnMuc3RvcmFnZUV4cGlyYXRpb24pO1xuICAgICAgICAgICAgICAgIHN0b3JlV2lkdGhFeHBpcmF0aW9uLnNldChyZXNvdXJjZU5hbWUgKyAnLmNvdW50JywgZGF0YS5sZW5ndGgsIHRoaXMub3B0aW9ucy5zdG9yYWdlRXhwaXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmxpc3QgPSBkYXRhO1xuICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5jb3VudCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgICBjYihyZXNvdXJjZVZhbHVlKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG5cbiAgICAgICAgICAgICQuZ2V0SlNPTih0aGlzLm9wdGlvbnMuYXBpW3Jlc291cmNlTmFtZV0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0TmFtZXMoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMuc3RvcmFnZSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZVdpZHRoRXhwaXJhdGlvbi5zZXQocmVzb3VyY2VOYW1lLCBkYXRhLCB0aGlzLm9wdGlvbnMuc3RvcmFnZUV4cGlyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZVdpZHRoRXhwaXJhdGlvbi5zZXQocmVzb3VyY2VOYW1lICsgJy5jb3VudCcsIGRhdGEubGVuZ3RoLCB0aGlzLm9wdGlvbnMuc3RvcmFnZUV4cGlyYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvdXJjZVZhbHVlLmxpc3QgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHJlc291cmNlVmFsdWUuY291bnQgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGNiKHJlc291cmNlVmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gc29ydCBkYXRhXG4gICAgICogYmFzZWQgb24gbGFuZ3VhZ2VcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBzb3J0TmFtZXMoZGF0YSkge1xuICAgICAgICBkYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLm5hbWVbdGhpcy5vcHRpb25zLmxhbmddID4gYi5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSkgcmV0dXJuIDE7XG4gICAgICAgICAgICBpZiAoYS5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSA8IGIubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10pIHJldHVybiAtMTtcblxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbGlnaHRDb250cm9sO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgb3JpZ2luOiAnYWxsJyxcbiAgICAgICAgZGVzdGluYXRpb246ICdhbGwnLFxuICAgICAgICBkMTogbnVsbCxcbiAgICAgICAgLy8gcmVxdWlyZWQgZmllbGQgdG8gc3VibWl0IGZvcm1cbiAgICAgICAgLy8gdG8gY29wYVxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHRyaXBUeXBlOiBcIlJUXCIsXG4gICAgICAgICAgICBmbGV4aWJsZVNlYXJjaDogXCJ0cnVlXCIsXG4gICAgICAgICAgICBwb3M6IFwiQ01HU1wiLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzBdLnR5cGVcIjogXCJBRFRcIixcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1sxXS50eXBlXCI6IFwiQ05OXCIsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMl0udHlwZVwiOiBcIklORlwiLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzBdLmFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzFdLmFtb3VudFwiOiAwLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzJdLmFtb3VudFwiOiAwLFxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIjogbnVsbCxcbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCI6IG51bGwsXG4gICAgICAgICAgICBcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiOiBudWxsLFxuICAgICAgICAgICAgLy8gXCJjb3Vwb25cIjogbnVsbCxcbiAgICAgICAgICAgIC8vIG9yaWdpblxuICAgICAgICAgICAgXCJvdXRib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiOiBudWxsLFxuICAgICAgICAgICAgLy8gZGVzdGluYXRpb25cbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIC8vIC8vIGNhYmluIGNsYXNzIEJ1c2luZXNzfEVjb25vbXlcbiAgICAgICAgICAgIFwiY2FiaW5DbGFzc1wiOiBcIkVjb25vbXlcIixcbiAgICAgICAgICAgIGxhbmc6ICdlcydcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybVVybDogJ2h0dHBzOi8vYm9va2luZ3MuY29wYWFpci5jb20vQ01HUy8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgJ0Fpckxvd0ZhcmVTZWFyY2hFeHRlcm5hbC5kbz8nXG4gICAgfVxuO1xuXG4vKipcbiAqIEZvcm1IZWxwZXIgbW9kdWxlXG4gKi9cbmNsYXNzIEZvcm1IZWxwZXIge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgLy8gc2V0IGRlZmF1dGxzIHZhbHVlc1xuICAgICAgICB0aGlzLnNldERlZmF1bHRCb3VuZHMoKTtcbiAgICAgICAgdGhpcy5zZXREYXRlcyh0aGlzLm9wdGlvbnMuZGF0ZXBpY2tlciwge3JldHVybnM6dHJ1ZSwgZGVwYXJ0dXJlOnRydWV9KTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0cy5sYW5nID0gdGhpcy5vcHRpb25zLmxhbmc7XG4gICAgICAgIC8vIGxvYWQgZXZlbnRzIHJlbGF0ZWQgd2l0aCBmb3JtIGhlbHBlciBhbmQgb3RoZXIgbW9kdWxlc1xuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgIH1cblxuXG5cbiAgICBwcm9jZXNzKCkge1xuXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLm9wdGlvbnMuZm9ybVVybDtcbiAgICAgICAgdmFyIHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb25FcnJvcigpO1xuICAgICAgICB2YXIgaHR0cFF1ZXJ5ID0gJC5wYXJhbSh0aGlzLm9wdGlvbnMuaW5wdXRzKTtcbiAgICAgICAgaHR0cFF1ZXJ5ICs9ICcmJyArICQucGFyYW0oe2QxOiB0aGlzLm9wdGlvbnMuZDF9KTtcblxuICAgICAgICBpZiAodmFsaWRhdGlvbi5lcnJvcikge1xuICAgICAgICAgICAgLy8gaGFuZGxlIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb24uYmFnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIGVycm9ycywgZm9yd2FyZCBmb3JtIHZhbHVlcyB0byBjb3BhXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhodHRwUXVlcnkpO1xuICAgICAgICAgICAgdmFyIHNlYXJjaFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCArIGh0dHBRdWVyeSwgJ19ibGFuaycpO1xuICAgICAgICAgICAgc2VhcmNoV2luZG93LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREZWZhdWx0Qm91bmRzKCkge1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMub3JpZ2luICE9PSAnYWxsJykge1xuICAgICAgICAgICAgdGhpcy5zZXRCb3VuZHMoJ29yaWdpbicsIHRoaXMub3B0aW9ucy5vcmlnaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbiAhPT0nYWxsJykge1xuICAgICAgICAgICAgdGhpcy5zZXRCb3VuZHMoJ2Rlc3RpbmF0aW9uJywgdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Qm91bmRzKGJvdW5kLCBsb2NhdGlvbikge1xuXG4gICAgICAgIGlmIChib3VuZCA9PT0gJ29yaWdpbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5vcmlnaW5Mb2NhdGlvbkNvZGVcIl0gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLmRlc3RpbmF0aW9uTG9jYXRpb25Db2RlXCJdID0gbG9jYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm91bmQgPT09ICdkZXN0aW5hdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiXSA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24ub3JpZ2luTG9jYXRpb25Db2RlXCJdID0gbG9jYXRpb247XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldERhdGVzKGRhdGVwaWNrZXIsIGJvdW5kcykge1xuICAgICAgICAvLyBnZXQgY3VycmVudCBkYXRlcGlja2VycyBkYXRlc1xuICAgICAgICB2YXIgZGVwYXJ0dXJlRGF0ZSA9ICQoZGF0ZXBpY2tlci5vcHRpb25zLmRlcGFydHVyZVNlbGVjdG9yKS5kYXRlcGlja2VyKCdnZXREYXRlJyksXG4gICAgICAgIHJldHVybkRhdGUgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5yZXR1cm5TZWxlY3RvcikuZGF0ZXBpY2tlcignZ2V0RGF0ZScpO1xuXG4gICAgICAgIGlmIChib3VuZHMucmV0dXJucykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlRGF5XCJdID0gcmV0dXJuRGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiXSA9IHJldHVybkRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCJdID0gcmV0dXJuRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoYm91bmRzLmRlcGFydHVyZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiXSA9IGRlcGFydHVyZURhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCJdID0gZGVwYXJ0dXJlRGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVZZWFyXCJdID0gZGVwYXJ0dXJlRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q2FiaW5DbGFzcyh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImNhYmluQ2xhc3NcIl0gPSAkKHRhcmdldCkudmFsKCk7XG4gICAgfVxuXG4gICAgc2V0UGFzc2VuZ2Vyc0Ftb3VudCh0eXBlLCB2YWx1ZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FkdWx0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiZ3Vlc3RUeXBlc1swXS5hbW91bnRcIl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hpbGQnOlxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJndWVzdFR5cGVzWzFdLmFtb3VudFwiXSA9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbmZhbnQnOlxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJndWVzdFR5cGVzWzJdLmFtb3VudFwiXSA9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDb3Vwb24oY291cG9uKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHMuY291cG9uID0gY291cG9uO1xuICAgIH1cblxuICAgIHNldEQxKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzLmQxID0gdGhpcy5vcHRpb25zLmQxO1xuICAgIH1cblxuICAgIHZhbGlkYXRpb25FcnJvcigpIHtcbiAgICAgICAgdmFyIGVycm9ycyAgPSB7XG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBiYWc6W11cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGN1cnJlbnRFcnJvcjtcbiAgICAgICAgZm9yICh2YXIgaW5wdXQgaW4gdGhpcy5vcHRpb25zLmlucHV0cykge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vcHRpb25zLmlucHV0c1tpbnB1dF0pO1xuICAgICAgICAgICAgaWYoIXRoaXMub3B0aW9ucy5pbnB1dHNbaW5wdXRdICYmIHRoaXMub3B0aW9ucy5pbnB1dHNbaW5wdXRdICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVycm9yID0ge307XG4gICAgICAgICAgICAgICAgY3VycmVudEVycm9yLmZpZWxkID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY3VycmVudEVycm9yLm1lc3NhZ2UgPSBgVGhlIGlucHV0ICR7aW5wdXR9IG11c3QgaGF2ZSBzb21lIHZhbHVlYDtcbiAgICAgICAgICAgICAgICBlcnJvcnMuYmFnLnB1c2goY3VycmVudEVycm9yKTtcbiAgICAgICAgICAgICAgICBlcnJvcnMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVycm9ycztcbiAgICB9O1xuXG4gICAgZXZlbnRzKCkge1xuXG4gICAgICAgIHZhciBkYXRlcGlja2VyID0gdGhpcy5vcHRpb25zLmRhdGVwaWNrZXIsXG4gICAgICAgICAgICAkZGVwYXJ0dXJlRmllbGQgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvciksXG4gICAgICAgICAgICAkcmV0dXJuRmllbGQgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5yZXR1cm5TZWxlY3Rvcik7XG5cbiAgICAgICAgJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoJ29wdGlvbicsICdvblNlbGVjdCcsIChkYXRlVGV4dCwgaW5zdCkgPT57XG5cbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoaW5zdC5zZWxlY3RlZFllYXIsIGluc3Quc2VsZWN0ZWRNb250aCwgaW5zdC5zZWxlY3RlZERheSk7XG5cbiAgICAgICAgICAgIC8vIHRoaXMgc2V0cyB0aGUgaW5ib3VuZCBkYXRlIHBpY2tlciB0byBhIHdlZWsgbGF0ZXIgb2YgY3VycmVudCBzZWxlY3Rpb25cbiAgICAgICAgICAgIHZhciB3ZWVrbGF0ZXIgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKCdzZXREYXRlJywgd2Vla2xhdGVyKTtcbiAgICAgICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnbWluRGF0ZScsIGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlcyhkYXRlcGlja2VyLCB7cmV0dXJuczp0cnVlLCBkZXBhcnR1cmU6dHJ1ZX0pO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnb25TZWxlY3QnLCAoZGF0ZVRleHQsIGluc3QpID0+e1xuXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGluc3Quc2VsZWN0ZWRZZWFyLCBpbnN0LnNlbGVjdGVkTW9udGgsIGluc3Quc2VsZWN0ZWREYXkpO1xuXG4gICAgICAgICAgICAvLyB0aGlzIHNldHMgdGhlIGluYm91bmQgZGF0ZSBwaWNrZXIgdG8gYSB3ZWVrIGxhdGVyIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgd2Vla2xhdGVyID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGVzKGRhdGVwaWNrZXIsIHtyZXR1cm5zOnRydWUsIGRlcGFydHVyZTpmYWxzZX0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuYm9va2luZy5maW5kKCcuanMtY2FiaW4tY2xhc3MnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRDYWJpbkNsYXNzKGUudGFyZ2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmJvb2tpbmcuZmluZCgnLmpzLWFkdWx0cy1hbW91bnQnKS5zZWxlY3RtZW51KHtcbiAgICAgICAgICAgIGNoYW5nZTogKGUsIHVpKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYXNzZW5nZXJzQW1vdW50KCdhZHVsdCcsIHVpLml0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuYm9va2luZy5maW5kKCcuanMtY2hpbGRyZW4tYW1vdW50Jykuc2VsZWN0bWVudSh7XG4gICAgICAgICAgICBjaGFuZ2U6IChlLCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFzc2VuZ2Vyc0Ftb3VudCgnY2hpbGQnLCB1aS5pdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmJvb2tpbmcuZmluZCgnLmpzLWluZmFudHMtYW1vdW50Jykuc2VsZWN0bWVudSh7XG4gICAgICAgICAgICBjaGFuZ2U6IChlLCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFzc2VuZ2Vyc0Ftb3VudCgnaW5mYW50JywgdWkuaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5ib29raW5nLmZpbmQoJy5qcy1zdWJtaXQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1IZWxwZXI7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIEhhbmRsZWJhcnMgPSByZXF1aXJlKCdoYW5kbGViYXJzJyksXG4gICAgaTE4biA9IHtcbiAgICAgICAgYm9va2luZzogcmVxdWlyZSgnLi4vLi4vLi4vbGFuZy9ib29raW5nLmpzb24nKSxcbiAgICAgICAgc2lnbnVwOiByZXF1aXJlKCcuLi8uLi8uLi9sYW5nL3NpZ251cC5qc29uJyksXG4gICAgfSxcbiAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgbGFuZzogJ2VzJyxcbiAgICAgICAgLy9zcmM6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcycsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHt9XG4gICAgfVxuO1xuXG5cblxuY2xhc3MgVGVtcGxhdGVcbntcblxuICAgIGNvbnN0cnVjdG9yKHdpZGdldCwgb3B0aW9ucykge1xuXG4gICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24ucG9ydCA/ICc6JyArIHdpbmRvdy5sb2NhdGlvbi5wb3J0OiAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0cy5zcmMgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy9ib3dlcl9jb21wb25lbnRzL2NvcGFhaXItd2lkZ2V0cy90ZW1wbGF0ZXMnO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIGlmICh0eXBlb2YgSGFuZGxlYmFycyAhPT0gJ3VuZGVmaW5lZCcgJiYgSGFuZGxlYmFycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGAke3RoaXMub3B0aW9ucy5zcmN9LyR7d2lkZ2V0fS5oYnNgLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh0cGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCBpMThuW3dpZGdldF1bdGhpcy5vcHRpb25zLmxhbmddKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSB0aGlzLmNvbXBpbGUod2lkZ2V0LCB0cGwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2soaHRtbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGlzIHBsdWdpbiByZXF1aXJlcyBIYW5kbGViYXJzLmpzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21waWxlKHdpZGdldCwgdHBsKSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZSh0cGwpO1xuICAgICAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKHRoaXMub3B0aW9ucy5kYXRhKTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlbXBsYXRlO1xuIiwiLyoqXG4gKiBNb2R1bGVzXG4gKi9cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9saWIvVGVtcGxhdGUnKSxcbiAgICBGbGlnaHRDb250cm9sID0gcmVxdWlyZSgnLi4vbGliL0ZsaWdodENvbnRyb2wnKSxcbiAgICBEYXRlcGlja2VyID0gcmVxdWlyZSgnLi4vbGliL0RhdGVwaWNrZXInKSxcbiAgICBBdXRvY29tcGxldGUgPSByZXF1aXJlKCcuLi9saWIvQXV0b2NvbXBsZXRlJyksXG4gICAgRm9ybUhlbHBlciA9IHJlcXVpcmUoJy4uL2xpYi9Gb3JtSGVscGVyJylcbjtcblxuLyoqXG4gKiBPcHRpb25zXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIGQxOiBudWxsLFxuICAgICAgICBjb3Vwb246IG51bGwsXG4gICAgICAgIG9yaWdpbjogbnVsbCxcbiAgICAgICAgZGVzdGluYXRpb246IG51bGwsXG4gICAgICAgIGRlc3RpbmF0aW9uTmFtZTogbnVsbCxcbiAgICAgICAgd2lkZ2V0UG9zaXRpb246IHsgbXk6ICdsZWZ0IGJvdHRvbScsIGF0OiAnbGVmdCB0b3AnIH0sXG4gICAgICAgIHRlbXBsYXRlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL3RlbXBsYXRlcy9ib29raW5nLmhicycsXG4gICAgICAgIGxhbmd1YWdlUGF0aDogJ2Jvd2VyX2NvbXBvbmVudHMvY29wYWFpci13aWRnZXRzL2xhbmcvJ1xuICAgIH1cbjtcblxuXG5jbGFzcyBCb29raW5nIHtcblxuICAgIC8qKlxuICAgICAqIFdpZGdldCBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvciBlbGVtZW50IERPTSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAgT3B0aW9ucyBwYXNzZWQgb24gcGx1Z2luIGluc3RhbmNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRib29raW5nID0gJChlbGVtZW50KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgbmV3IFRlbXBsYXRlKCdib29raW5nJywge1xuICAgICAgICAgICAgJ2xhbmcnOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgICdvcmlnaW4nOiB0aGlzLm9wdGlvbnMub3JpZ2luLFxuICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uJzogdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uTmFtZSc6IHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbk5hbWUsIC8vIHRlbXBvcmFyeSBmaXggZm9yIHN0YXRpYyBkZXN0aW5hdGlvblxuICAgICAgICAgICAgY2FsbGJhY2s6IChodG1sKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYm9va2luZy5odG1sKGh0bWwpO1xuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBmaW5pc2hlZCwgYnVpbGQgYWxsIHRoZSB3aWRnZXRzXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cFNlbGVjdE1lbnVzKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXR1cCBkYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGVwaWNrZXIgPSBuZXcgRGF0ZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgICAgIGxhbmc6IHRoaXMub3B0aW9ucy5sYW5nLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRhdGVwaWNrZXIucmVuZGVyKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZm9ybUhlbHBlciA9IG5ldyBGb3JtSGVscGVyKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXBpY2tlcjogZGF0ZXBpY2tlcixcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiB0aGlzLm9wdGlvbnMub3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBib29raW5nOiB0aGlzLiRib29raW5nLFxuICAgICAgICAgICAgICAgICAgICBkMTogdGhpcy5vcHRpb25zLmQxLFxuICAgICAgICAgICAgICAgICAgICBsYW5nOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLmNvdXBvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3JtSGVscGVyLnNldENvdXBvbih0aGlzLm9wdGlvbnMuY291cG9uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBdXRvY29tcGxldGUgd2lkZ2V0c1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEF1dG9jb21wbGV0ZShmb3JtSGVscGVyKTtcblxuXG4gICAgICAgICAgICAgICAgLy8gQmluZCBldmVudHNcbiAgICAgICAgICAgICAgICB0aGlzLmJvb2tpbmdFdmVudHMoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCBhdXRvY29tcGxldGUgZGVzdGluYXRpb24gd2lkZ2V0c1xuICAgICAqIEBzZWUgbW9kdWxlOkF1dG9jb21wbGV0ZVxuICAgICAqL1xuICAgIGluaXRBdXRvY29tcGxldGUoZm9ybUhlbHBlcikge1xuICAgICAgICAvLyBJbml0IGNsYXNzIHdpdGggb3B0aW9uc1xuICAgICAgICB2YXIgYXV0b2NvbXBsZXRlID0gbmV3IEF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICBsYW5nOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgIHNlbGVjdDogZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgZGlzcGxheSB2YWx1ZSB0byB0aGUgaW5wdXRcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCh1aS5pdGVtLmRpc3BsYXkpO1xuICAgICAgICAgICAgICAgIC8vc2V0IGFjdHVhbCB2YWx1ZSBhdCB0aGUgYm9va2luZyBvYmplY3RcbiAgICAgICAgICAgICAgICBmb3JtSGVscGVyLnNldEJvdW5kcygkKHRoaXMpLmRhdGEoJ2lucHV0LWZpZWxkJyksIHVpLml0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm9wdGlvbnMud2lkZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICBhcHBlbmRUbzogdGhpcy4kYm9va2luZ1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCdWlsZFxuICAgICAgICBhdXRvY29tcGxldGUuc3RhcnQoKCkgPT4ge1xuICAgICAgICAgICAgYXV0b2NvbXBsZXRlLnJlbmRlcih0aGlzLiRib29raW5nLmZpbmQoJy5qcy1ib29raW5nLWF1dG9jb21wbGV0ZScpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgc2VsZWN0IG1lbnVzIHdpdGggY3VzdG9tIFVJIHdpZGdldHNcbiAgICAgKi9cbiAgICBzZXR1cFNlbGVjdE1lbnVzKCkge1xuICAgICAgICAkKCcuanMtc2VsZWN0bWVudScpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMub3B0aW9ucy53aWRnZXRQb3NpdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIGV2ZW50cyByZWxhdGVkIHRvIGJvb2tpbmcgaW50ZXJhY3Rpb25cbiAgICAgKi9cbiAgICBib29raW5nRXZlbnRzKCkge1xuICAgICAgICB2YXIgJGJvb2tpbmcgPSB0aGlzLiRib29raW5nO1xuICAgICAgICB2YXIgJHRvZ2dsZSA9IHRoaXMuJGJvb2tpbmcuZmluZCgnLmpzLWNvcGFhaXItdG9nZ2xlJyk7XG5cbiAgICAgICAgLy8gU2hvdyBib3R0b20gcm93IHdoZW4gYW55IGlucHV0IGdldHMgZm9jdXNcbiAgICAgICAgJGJvb2tpbmcub24oJ2ZvY3VzLmNvcGFhaXInLCAnaW5wdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkYm9va2luZy5hZGRDbGFzcygnY29wYWFpci13aWRnZXQtb3BlbicpO1xuICAgICAgICAgICAgJHRvZ2dsZS5yZW1vdmVDbGFzcygnY29wYWFpci1oaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2xpY2tpbmcgYW55d2hlcmUgaW4gdGhlIGRvY3VtZW50IGhpZGVzIGJvdHRvbSByb3dcbiAgICAgICAgJGJvb2tpbmcub24oJ2NsaWNrLmNvcGFhaXInLCAnLmpzLWNvcGFhaXItY2xvc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkYm9va2luZy5yZW1vdmVDbGFzcygnY29wYWFpci13aWRnZXQtb3BlbicpO1xuICAgICAgICAgICAgJHRvZ2dsZS5hZGRDbGFzcygnY29wYWFpci1oaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm9va2luZztcbiIsInZhciBUZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL2xpYi9UZW1wbGF0ZScpLFxuICAgIERhdGFNZW51ID0gcmVxdWlyZSgnLi4vbGliL0RhdGFNZW51JyksXG4gICAgaTE4biA9IHJlcXVpcmUoJy4uLy4uLy4uL2xhbmcvZGF0ZXBpY2tlci5qc29uJylcbjtcblxudmFyIGRlZmF1bHRzID0ge1xuICAgIGxhbmc6ICdlcycsXG4gICAgd2lkZ2V0UG9zaXRpb246IHsgbXk6ICdsZWZ0IGJvdHRvbScsIGF0OiAnbGVmdCB0b3AnIH0sXG5cbn07XG5cbmNsYXNzIFNpZ251cCB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gTG9hZCB0ZW1wbGF0ZVxuICAgICAgICBuZXcgVGVtcGxhdGUoJ3NpZ251cCcsIHtcbiAgICAgICAgICAgICdsYW5nJzogdGhpcy5vcHRpb25zLmxhbmcsXG4gICAgICAgICAgICBjYWxsYmFjazogKGh0bWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRmb3JtLmh0bWwoaHRtbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWdudXBFdmVudHMoKTtcbiAgICAgICAgICAgICAgICB2YXIgbGFuZyA9IHRoaXMub3B0aW9ucy5sYW5nO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kZm9ybS5maW5kKCcuanMtc2VsZWN0bWVudScpLmVhY2goIGZ1bmN0aW9uICgpe1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhTWVudSA9IG5ldyBEYXRhTWVudSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5nOiBsYW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICQodGhpcykuZGF0YSgnY29udGVudCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwU2VsZWN0TWVudXMoKTtcblxuICAgICAgICAgICAgICAgICQoJy5qcy1zaWdudXAtZGF0ZScpLmRhdGVwaWNrZXIoe1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb250aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlWWVhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnZGQvbW0veXknLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTaG93OiBmdW5jdGlvbihpbnB1dCwgaXNudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc250LmRwRGl2LnBvc2l0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXk6ICdsZWZ0IGJvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0OiAnbGVmdCB0b3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZjogaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVnaW9uYWwgPSBpMThuW3RoaXMub3B0aW9ucy5sYW5nXS5yZWdpb25hbDtcbiAgICAgICAgICAgICAgICAkLmRhdGVwaWNrZXIucmVnaW9uYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIHNlbGVjdCBtZW51cyB3aXRoIGN1c3RvbSBVSSB3aWRnZXRzXG4gICAgICovXG4gICAgc2V0dXBTZWxlY3RNZW51cygpIHtcbiAgICAgICAgJCgnLmpzLXNlbGVjdG1lbnUnKS5zZWxlY3RtZW51KHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm9wdGlvbnMud2lkZ2V0UG9zaXRpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2lnbnVwRXZlbnRzKCkge1xuICAgICAgICB2YXIgJGZvcm0gPSB0aGlzLiRmb3JtO1xuICAgICAgICB2YXIgJHRvZ2dsZSA9IHRoaXMuJGZvcm0uZmluZCgnLmpzLWNvcGFhaXItdG9nZ2xlJyk7XG5cbiAgICAgICAgLy8gU2hvdyBib3R0b20gcm93IHdoZW4gYW55IGlucHV0IGdldHMgZm9jdXNcbiAgICAgICAgJGZvcm0ub24oJ2ZvY3VzLmNvcGFhaXInLCAnaW5wdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkZm9ybS5hZGRDbGFzcygnY29wYWFpci13aWRnZXQtb3BlbicpO1xuICAgICAgICAgICAgJHRvZ2dsZS5yZW1vdmVDbGFzcygnY29wYWFpci1oaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGZvcm0ub24oJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oZS50YXJnZXQpO1xuICAgICAgICB9KVxuXG4gICAgICAgICQoJy5qcy1jb3VudHJ5LXNlbGVjdG9yJykuc2VsZWN0bWVudSh7XG4gICAgICAgICAgICBjaGFuZ2U6IChlLCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb3VudHJ5ID0gdWkuaXRlbS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLWNpdHktc2VsZWN0b3InKS5zZWxlY3RtZW51KHtcbiAgICAgICAgICAgIGNoYW5nZTogKGUsIHVpKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNpdHkgPSB1aS5pdGVtLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0odGFyZ2V0KSB7XG4gICAgICAgIHZhciAkZm9ybSA9ICQodGFyZ2V0KTtcblxuICAgICAgICB2YXIgZGF0YSA9ICRmb3JtLnNlcmlhbGl6ZU9iamVjdCgpO1xuICAgICAgICBkYXRhLmZ1bGxuYW1lID0gZGF0YS5maXJzdF9uYW1lICsgJyAnICsgZGF0YS5sYXN0X25hbWU7XG4gICAgICAgIGRhdGEuc291cmNlID0gdGhpcy5vcHRpb25zLnNvdXJjZTtcbiAgICAgICAgZGF0YS5sYW5ndWFnZSA9IHRoaXMub3B0aW9ucy5sYW5nLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGRhdGEuY2l0eSA9IHRoaXMub3B0aW9ucy5jaXR5O1xuICAgICAgICBkYXRhLmNvdW50cnkgPSB0aGlzLm9wdGlvbnMuY291bnRyeTtcblxuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lcjtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9mbGlnaHRjb250cm9sLmlvL2FwaS9zaWdudXAvYWRkJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5mYWRlT3V0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ251cDtcbiJdfQ==
