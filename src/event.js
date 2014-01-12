var CEvent = {
    on: function (name, callback) {
        if (!this.__events) this.__events = {};
        if (!this.__events[name]) this.__events[name] = [];

        this.__events[name].push(callback);

        return name + '_' + (this.__events[name].length - 1);
    },

    trigger: function (name, params) {
        if (params !== undefined && !(params instanceof Array)) {
            throw "params mast be an array";
        }

        if (!this.__events) this.__events = {};
        if (!this.__events[name]) this.__events[name] = [];

        var ret = undefined;
        $.each(this.__events[name], function (n, callback) {
            ret = callback.apply(this, params);
            return ret;
        });

        return ret;
    },

    off: function (name) {
        var params = name.split('_', 2),
            eName = params[0],
            key = +params[1];

        if (!this.__events) this.__events = {};
        if (!this.__events[eName]) this.__events[eName] = [];

        delete this.__events[eName][key];
        return Object.keys(this.__events[eName]).length;
    },

    mixin: function (self) {
        var attachEvent = function (event, callback) {
            if (event.indexOf('on') === 0 && self.prototype.on !== undefined) {
                event = event.substr(2, event.length);
                event = event.charAt(0).toLowerCase() + event.slice(1);
                self.prototype.on(event, callback);

                return true;
            }

            return false;
        };

        for (var i in CEvent) {
            if (CEvent.hasOwnProperty(i) && i !== 'mixin') {
                if (!attachEvent(i, CEvent[i]) && self.prototype[i] === undefined) {
                    self.prototype[i] = CEvent[i];
                }
            }
        }
    }
};