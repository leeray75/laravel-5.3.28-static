"use strict";
var Contact = (function () {
    function Contact() {
    }
    Contact.prototype.reset = function () {
        this.name = "";
        this.email = "";
        this.message = "";
    };
    return Contact;
}());
exports.Contact = Contact;
