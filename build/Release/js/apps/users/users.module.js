"use strict";
require("jquery");
var login_module_1 = require('./login/login.module');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//let $ = window.$;
var UsersModule = (function () {
    function UsersModule() {
        this.isLoginLoaded = false;
    }
    UsersModule.prototype.login = function () {
        if (!this.isLoginLoaded) {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(login_module_1.LoginModule);
            this.isLoginLoaded = true;
        }
        console.log("this.$loginModal:", this.$loginModal);
        setTimeout(function () { $('#login-modal').modal('show'); }, 0);
    };
    return UsersModule;
}());
exports.UsersModule = UsersModule;
;
