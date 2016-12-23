import "jquery";
import 'bootstrap';

class Globals{
	
	init(){
		console.log("init");
		this.initLoginLinks();
	}
	initLoginLinks(){
		$(document).on('click', '.log-in-link', event => {
			this.getUsersModule().then(function(module){
				module.login();
			});
		});
	}
	getUsersModule(){
		return new Promise( (resolve, reject) => {
			if(this.UsersModule){
				resolve(this.UsersModule)
			}
			else{
			      let scriptPath = window.GlobalVariables.staticPath + (window.GlobalVariables.environment=='production' ? '/js/bundles/users.bundle.min.js' : '/js/bundles/users.bundle.js');
			      $.getScript(scriptPath).then((module) => {
			      	this.UsersModule = window.GlobalVariables.modules.users;
			      	resolve(this.UsersModule);
			      });
			}
		}) // end return Promise;
	}
}

export function bootstrap() {
	window.$ = $;
	window.globals = new Globals();
	window.globals.init();

}