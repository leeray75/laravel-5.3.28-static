import "jquery";
import { LoginModule }  from './login/login.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//let $ = window.$;
export class UsersModule {
	private $loginModal: any;
	private isLoginLoaded = false;
	login(){
  		if(!this.isLoginLoaded){
    		platformBrowserDynamic().bootstrapModule(LoginModule);
    		this.isLoginLoaded = true;
    	}
    	console.log("this.$loginModal:",this.$loginModal);
    	setTimeout( () => { $('#login-modal').modal('show'); },0);
  	}
};
