"use strict";
require("jquery");
require('bootstrap');
var Globals = (function () {
    function Globals() {
    }
    Globals.prototype.init = function () {
        console.log("init");
        this.initLoginLinks();
    };
    Globals.prototype.initLoginLinks = function () {
        var _this = this;
        $(document).on('click', '.log-in-link', function (event) {
            _this.getUsersModule().then(function (module) {
                module.login();
            });
        });
    };
    Globals.prototype.getUsersModule = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.UsersModule) {
                resolve(_this.UsersModule);
            }
            else {
                var scriptPath = window.GlobalVariables.staticPath + (window.GlobalVariables.environment == 'production' ? '/js/bundles/users.bundle.min.js' : '/js/bundles/users.bundle.js');
                $.getScript(scriptPath).then(function (module) {
                    _this.UsersModule = window.GlobalVariables.modules.users;
                    resolve(_this.UsersModule);
                });
            }
        }); // end return Promise;
    };
    return Globals;
}());
function bootstrap() {
    window.$ = $;
    window.globals = new Globals();
    window.globals.init();
}
exports.bootstrap = bootstrap;
