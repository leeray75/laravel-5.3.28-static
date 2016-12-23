var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("login/user", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
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
            exports_1("User", User);
        }
    }
});
System.register("login/login.service", ['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, http_1;
    var LoginService;
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
            LoginService = (function () {
                function LoginService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.apiUrl = 'api/login'; // URL to web api
                }
                LoginService.prototype.handleError = function (error) {
                    console.error('An error occurred', error); // for demo purposes only
                    return Promise.reject(error.message || error);
                };
                LoginService.prototype.send = function (user) {
                    var userData = {};
                    userData.email = user.email;
                    userData.password = user.password;
                    return this.http
                        .post(this.apiUrl, userData, { headers: this.headers })
                        .toPromise()
                        .then(function (res) { return res.json(); });
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LoginService);
                return LoginService;
            }());
            exports_2("LoginService", LoginService);
        }
    }
});
System.register("login/login-form.component", ['@angular/core', "login/user", "login/login.service"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, user_1, login_service_1;
    var LoginFormComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            LoginFormComponent = (function () {
                function LoginFormComponent(loginService) {
                    this.loginService = loginService;
                    this.user = new user_1.User();
                    this.alertMessage = "";
                }
                LoginFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.$loginModal = $('#login-modal').modal();
                    $(document).on('click', '.log-in-link', function (event) {
                        _this.$loginModal.modal('show');
                    });
                };
                LoginFormComponent.prototype.sendLogin = function () {
                    var _this = this;
                    this.loginService
                        .send(this.user)
                        .then(function (response) {
                        console.log("response:", response);
                        if (response.status === "success") {
                            _this.$loginModal.modal('hide');
                            _this.alertMessage = "";
                            _this.user.reset();
                        }
                        else {
                            _this.alertMessage = response.message;
                        }
                    });
                };
                __decorate([
                    core_2.ViewChild('childModal'), 
                    __metadata('design:type', Object)
                ], LoginFormComponent.prototype, "childModal", void 0);
                LoginFormComponent = __decorate([
                    core_2.Component({
                        selector: 'login-form',
                        templateUrl: window.GlobalVariables.app.templateSrc + 'login/login-form.html'
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService])
                ], LoginFormComponent);
                return LoginFormComponent;
            }());
            exports_3("LoginFormComponent", LoginFormComponent);
        }
    }
});
System.register("login/login.module", ['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', "login/login.service", "login/login-form.component", 'ng2-bootstrap/ng2-bootstrap'], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, platform_browser_1, forms_1, http_2, login_service_2, login_form_component_1, ng2_bootstrap_1;
    var LoginModule;
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
            function (login_service_2_1) {
                login_service_2 = login_service_2_1;
            },
            function (login_form_component_1_1) {
                login_form_component_1 = login_form_component_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            LoginModule = (function () {
                function LoginModule() {
                }
                LoginModule = __decorate([
                    core_3.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_2.HttpModule,
                            ng2_bootstrap_1.AlertModule
                        ],
                        declarations: [
                            login_form_component_1.LoginFormComponent
                        ],
                        providers: [login_service_2.LoginService],
                        bootstrap: [login_form_component_1.LoginFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoginModule);
                return LoginModule;
            }());
            exports_4("LoginModule", LoginModule);
        }
    }
});
System.register("users.module", ['@angular/core', "login/login.module", '@angular/platform-browser-dynamic'], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_4, login_module_1, platform_browser_dynamic_1;
    var UserModule;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (login_module_1_1) {
                login_module_1 = login_module_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            UserModule = (function () {
                function UserModule() {
                }
                UserModule.prototype.login = function () {
                    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(login_module_1.LoginModule);
                };
                UserModule = __decorate([
                    core_4.NgModule({
                        imports: [
                            login_module_1.LoginModule
                        ],
                        declarations: [],
                        providers: [],
                        bootstrap: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserModule);
                return UserModule;
            }());
            exports_5("UserModule", UserModule);
            ;
        }
    }
});
System.register("main", ['@angular/platform-browser-dynamic', "users.module"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var platform_browser_dynamic_2, users_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_2_1) {
                platform_browser_dynamic_2 = platform_browser_dynamic_2_1;
            },
            function (users_module_1_1) {
                users_module_1 = users_module_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_2.platformBrowserDynamic().bootstrapModule(users_module_1.UsersModule);
        }
    }
});
System.register("login/main", ['@angular/platform-browser-dynamic', "login/login.module"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var platform_browser_dynamic_3, login_module_2;
    return {
        setters:[
            function (platform_browser_dynamic_3_1) {
                platform_browser_dynamic_3 = platform_browser_dynamic_3_1;
            },
            function (login_module_2_1) {
                login_module_2 = login_module_2_1;
            }],
        execute: function() {
            platform_browser_dynamic_3.platformBrowserDynamic().bootstrapModule(login_module_2.LoginModule);
        }
    }
});