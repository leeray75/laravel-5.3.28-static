System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var ContactUsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ContactUsService = (function () {
                function ContactUsService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.apiUrl = 'api/contact'; // URL to web api
                }
                ContactUsService.prototype.handleError = function (error) {
                    console.error('An error occurred', error); // for demo purposes only
                    return Promise.reject(error.message || error);
                };
                ContactUsService.prototype.send = function (contact) {
                    return this.http
                        .post(this.apiUrl, contact, { headers: this.headers })
                        .toPromise()
                        .then(function (res) { return res.json(); });
                };
                ContactUsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ContactUsService);
                return ContactUsService;
            }());
            exports_1("ContactUsService", ContactUsService);
        }
    }
});