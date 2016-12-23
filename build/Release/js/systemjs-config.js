(function (GlobalVariables) {
    var isProduction = GlobalVariables.environment === "production" ? true : false;
    System.config({
        paths: {
            'npm:': isProduction ? '//unpkg.com/' : '/static/node_modules/'
        },
        map: {
            // our app is within the app folder
            app: isProduction ? '/static/build/Release/js/apps' : '/static/build/dev/js/apps',
            common: isProduction ? '/static/build/Release/js/common' : '/static/build/dev/js/common',
            pages: isProduction ? '/static/build/Release/js/pages' : '/static/build/dev/js/pages',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
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
