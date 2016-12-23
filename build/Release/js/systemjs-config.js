(function (GlobalVariables) {
    var isProduction = GlobalVariables.environment === "production" ? true : false;
    System.config({
        defaultExtension: isProduction ? 'min.js' : 'js',
        paths: {
            'npm:': isProduction ? '//unpkg.com/' : '/static/node_modules/',
        },
        map: {
            // our app is within the app folder
            app: isProduction ? '/static/build/Release/js/apps' : '/static/build/dev/js/apps',
            common: isProduction ? '/static/build/Release/js/common' : '/static/build/dev/js/common',
            pages: isProduction ? '/static/build/Release/js/pages' : '/static/build/dev/js/pages',
            globals: isProduction ? 'build/Release/js/globals/main.js' : 'build/dev/js/globals/main.js',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',
            //'@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
            'moment': 'npm:moment/moment.js',
            //'ng2-bootstrap': 'npm:ng2-bootstrap/ng2-bootstrap.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
        },
        packages: {
            app: isProduction ? {} : {
                main: GlobalVariables.app.mainSrc,
                defaultExtension: 'js'
            },
            common: {
                defaultExtension: isProduction ? 'min.js' : 'js'
            },
            pages: {
                defaultExtension: isProduction ? 'min.js' : 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    }); // systemConfig
})(window.GlobalVariables);
