import $ from 'jquery';
import 'bootstrap';

class Globals{
	private isLoginInit = false;
	init(){
		this.initLoginLinks();
	}
	initLoginLinks(){
		$(document).one('click', '.log-in-link', event => {
			console.log("login link clicked",event);
			if(!this.isLoginInit){
				this.getUsersModule().then(userModule => {
					this.isLoginInit = true;
					userModule.login();
				}
			}
		})
	},
	getUsersModule(){
		return new Promise( (resolve, reject) => {
			if(window.GlobalVariables.modules.UserModule){
				resolve(window.GlobalVariables.modules.UserModule)
			}
			else{
				return System.import('app/users/users.module').then(function(module){
					try{
						window.GlobalVariables.modules.UserModule = new module.UserModule();
						resolve(window.GlobalVariables.modules.UserModule)
					}catch(e){
						console.error(e);
					}
				});
			}
		});
	}
}

export function bootstrap() {
	let globals = new Globals();
	globals.init();
}