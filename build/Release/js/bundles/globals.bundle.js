webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var bootstrap_1 = __webpack_require__(249);
	bootstrap_1.bootstrap();


/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	__webpack_require__(250);
	__webpack_require__(251);
	var Globals = (function () {
	    function Globals() {
	    }
	    Globals.prototype.init = function () {
	        console.log("init");
	        this.initLoginLinks();
	    };
	    Globals.prototype.initLoginLinks = function () {
	        var _this = this;
	        $(document).on('click', '.log-in-link', function (event) {
	            _this.getUsersModule().then(function (module) {
	                module.login();
	            });
	        });
	    };
	    Globals.prototype.getUsersModule = function () {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            if (_this.UsersModule) {
	                resolve(_this.UsersModule);
	            }
	            else {
	                var scriptPath = window.GlobalVariables.staticPath + (window.GlobalVariables.environment == 'production' ? '/js/bundles/users.bundle.min.js' : '/js/bundles/users.bundle.js');
	                $.getScript(scriptPath).then(function (module) {
	                    _this.UsersModule = window.GlobalVariables.modules.users;
	                    resolve(_this.UsersModule);
	                });
	            }
	        }); // end return Promise;
	    };
	    return Globals;
	}());
	function bootstrap() {
	    window.$ = $;
	    window.globals = new Globals();
	    window.globals.init();
	}
	exports.bootstrap = bootstrap;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(250)))

/***/ }

});