var $ = require('jquery');
    require('store-js');

var endPoints = {
        destinations : "https://flightcontrol.io/api/routes/destinations",
        countries : "https://flightcontrol.io/api/routes/countries",
        regions : "https://flightcontrol.io/api/routes/regions",
    },
    expiration = 86400000,
    lang = 'es';

var storeWidthExpiration = {
    set: function(key, val, exp) {
        store.set(key, { val:val, exp:exp, time:new Date().getTime() })
    },
    get: function(key) {
        var info = store.get(key)
        if (!info) { return null }
        if (new Date().getTime() - info.time > info.exp) { return null }
        return info.val
    }
}


class FlightControl {

    constructor() {
        if(!store.enabled) {
            console.log('browser not supported or in private mode');

        }
    }


    fetch(cb, resourceName) {
        var resourceValue = {};

        if(storeWidthExpiration.get(resourceName) && storeWidthExpiration.get(resourceName + '.count')) {
            resourceValue.list = storeWidthExpiration.get(resourceName);
            resourceValue.count = storeWidthExpiration.get(resourceName + '.count');

            cb(resourceValue);
        }

        $.getJSON(endPoints[resourceName], (data) => {

            this.sortNames(data);

            storeWidthExpiration.set(resourceName, data, this.expiration);
            storeWidthExpiration.set(resourceName + '.count', data.length, this.expiration);
            resourceValue.list = data;
            resourceValue.count = data.length;

            cb(resourceValue);
        });


    }

    //to be defined
    api() {
        // this.fetch(function(data){
        //     console.log(data);
        // }, 'regions');
    }


    sortNames(data) {
        data.sort(function(a, b) {
            if (a.name[lang] > b.name[lang]) return 1;
            if (a.name[lang] < b.name[lang]) return -1;

            return 0;
        });
    }
}

module.exports = FlightControl;
