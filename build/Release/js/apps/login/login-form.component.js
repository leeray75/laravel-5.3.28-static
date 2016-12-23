System.register(['@angular/core', './user', './login.service'], function(exports_1, context_1) {
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
    var core_1, user_1, login_service_1;
    var LoginFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                    console.log("login form init 3");
                    this.$loginModal = $('#login-modal').modal('hide');
                    this.initEventOpener();
                    this.loginModal = document.getElementById('login-modal');
                };
                LoginFormComponent.prototype.initEventOpener = function () {
                    var _this = this;
                    var openEl = document.querySelector('.log-in-link');
                    console.log("openEl:", openEl);
                    openEl.addEventListener('click', function (event) {
                        console.log("click:", event);
                        console.log("this.loginModal", _this.$loginModal);
                        _this.$loginModal.modal('show');
                    });
                };
                LoginFormComponent.prototype.sendLogin = function () {
                    var _this = this;
                    this.loginService
                        .send(this.user)
                        .then(function (response) {
                        _this.alertMessage = response.message;
                        _this.user.reset();
                    });
                };
                __decorate([
                    core_1.ViewChild('childModal'), 
                    __metadata('design:type', Object)
                ], LoginFormComponent.prototype, "childModal", void 0);
                LoginFormComponent = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        templateUrl: window.GlobalVariables.app.templateSrc + 'login/login-form.html'
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService])
                ], LoginFormComponent);
                return LoginFormComponent;
            }());
            exports_1("LoginFormComponent", LoginFormComponent);
        }
    }
});
