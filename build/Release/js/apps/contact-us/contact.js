System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Contact;
    return {
        setters:[],
        execute: function() {
            Contact = (function () {
                function Contact() {
                }
                Contact.prototype.reset = function () {
                    this.name = "";
                    this.email = "";
                    this.message = "";
                };
                return Contact;
            }());
            exports_1("Contact", Contact);
        }
    }
});
