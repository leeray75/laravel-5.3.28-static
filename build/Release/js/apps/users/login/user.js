"use strict";
var User = (function () {
    function User() {
        this.errors = {
            email: "",
            password: ""
        };
    }
    User.prototype.reset = function () {
        this.email = "";
        this.password = "";
    };
    return User;
}());
exports.User = User;
