System.register(['./login/login.module', '@angular/platform-browser-dynamic'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var login_module_1, platform_browser_dynamic_1;
    var UsersModule;
    return {
        setters:[
            function (login_module_1_1) {
                login_module_1 = login_module_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            UsersModule = (function () {
                function UsersModule() {
                }
                UsersModule.prototype.login = function () {
                    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(login_module_1.LoginModule);
                };
                return UsersModule;
            }());
            exports_1("UsersModule", UsersModule);
            ;
        }
    }
});
