"use strict";
var users_module_1 = require('./users.module');
(function () {
    window.GlobalVariables.modules = window.GlobalVariables.modules || {};
    window.GlobalVariables.modules.users = new users_module_1.UsersModule();
})();
