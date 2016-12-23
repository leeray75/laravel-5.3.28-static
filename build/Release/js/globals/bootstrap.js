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
                }
                Globals.prototype.init = function () {
                    this.initLoginLinks();
                };
                Globals.prototype.initLoginLinks = function () {
                    var _this = this;
                    jquery_1.default(document).one('click', '.log-in-link', function (event) {
                        _this.getUsersModule().then(function (users) {
                            users.login();
                        });
                    });
                };
                Globals.prototype.getUsersModule = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        if (_this.UsersModule != null) {
                            resolve(_this.UsersModule);
                        }
                        else {
                            var scriptPath = window.GlobalVariables.staticPath + (window.GlobalVariables.environment == 'production' ? '/js/apps/users/users.combo.min.js' : '/js/apps/users/users.combo.js');
                            jquery_1.default.getScript(scriptPath).then(function () {
                                System.import('users.module').then(function (module) {
                                    try {
                                        _this.UsersModule = new module.UsersModule();
                                        resolve(_this.UsersModule);
                                    }
                                    catch (e) {
                                        console.error(e);
                                        reject(e);
                                    }
                                });
                            });
                        }
                    }); // end return Promise;
                };
                return Globals;
            }());
        }
    }
});
