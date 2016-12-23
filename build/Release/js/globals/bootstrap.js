System.register(['jquery', 'bootstrap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var jquery_1;
    var Globals;
    function bootstrap() {
        var globals = new Globals();
        globals.init();
    }
    exports_1("bootstrap", bootstrap);
    return {
        setters:[
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (_1) {}],
        execute: function() {
            Globals = (function () {
                function Globals() {
                    this.isLoginInit = false;
                }
                Globals.prototype.init = function () {
                    this.initLoginLinks();
                };
                Globals.prototype.initLoginLinks = function () {
                    var _this = this;
                    jquery_1.default(document).one('click', '.log-in-link', function (event) {
                        console.log("login link clicked", event);
                        if (!_this.isLoginInit) {
                            _this.getUsersModule().then(function (userModule) {
                                _this.isLoginInit = true;
                                userModule.login();
                            });
                        }
                    });
                };
                Globals.prototype.getUsersModule = function () {
                    return new Promise(function (resolve, reject) {
                        if (window.GlobalVariables.modules.UserModule) {
                            resolve(window.GlobalVariables.modules.UserModule);
                        }
                        else {
                            return System.import('app/users/users.module').then(function (module) {
                                try {
                                    window.GlobalVariables.modules.UserModule = new module.UserModule();
                                    resolve(window.GlobalVariables.modules.UserModule);
                                }
                                catch (e) {
                                    console.error(e);
                                }
                            });
                        }
                    });
                };
                return Globals;
            }());
        }
    }
});
