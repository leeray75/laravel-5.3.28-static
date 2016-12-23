var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("contact", [], function(exports_1, context_1) {
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
System.register("contact-us.service", ['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
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
            exports_2("ContactUsService", ContactUsService);
        }
    }
});
System.register("contact-us.component", ['@angular/core', "contact", "contact-us.service"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, contact_1, contact_us_service_1;
    var ContactUsComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (contact_1_1) {
                contact_1 = contact_1_1;
            },
            function (contact_us_service_1_1) {
                contact_us_service_1 = contact_us_service_1_1;
            }],
        execute: function() {
            ContactUsComponent = (function () {
                function ContactUsComponent(contactUsService) {
                    this.contactUsService = contactUsService;
                    this.contact = new contact_1.Contact();
                }
                ContactUsComponent.prototype.sendEmail = function () {
                    var _this = this;
                    this.contactUsService
                        .send(this.contact)
                        .then(function (response) {
                        _this.contact.reset();
                    });
                };
                ContactUsComponent = __decorate([
                    core_2.Component({
                        selector: 'contact-us',
                        templateUrl: window.GlobalVariables.app.templateSrc + 'contact-us.component.html'
                    }), 
                    __metadata('design:paramtypes', [contact_us_service_1.ContactUsService])
                ], ContactUsComponent);
                return ContactUsComponent;
            }());
            exports_3("ContactUsComponent", ContactUsComponent);
        }
    }
});
System.register("app.module", ['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', "contact-us.service", 'common/rxjs-extensions', "contact-us.component"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, platform_browser_1, forms_1, http_2, contact_us_service_2, contact_us_component_1;
    var AppModule;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (contact_us_service_2_1) {
                contact_us_service_2 = contact_us_service_2_1;
            },
            function (_2) {},
            function (contact_us_component_1_1) {
                contact_us_component_1 = contact_us_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_3.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_2.HttpModule,
                        ],
                        declarations: [
                            contact_us_component_1.ContactUsComponent
                        ],
                        providers: [contact_us_service_2.ContactUsService],
                        bootstrap: [contact_us_component_1.ContactUsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_4("AppModule", AppModule);
        }
    }
});
System.register("main", ['@angular/platform-browser-dynamic', '@angular/core', "app.module"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var platform_browser_dynamic_1, core_4, app_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
            if (window.GlobalVariables.environment === "production") {
                core_4.enableProdMode();
            }
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    }
});
