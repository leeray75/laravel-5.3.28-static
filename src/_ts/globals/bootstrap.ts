import $ from 'jquery';
import 'bootstrap';

class Globals{
	private UsersModule: <any>;
	init(){
		this.initLoginLinks();
	}
	initLoginLinks(){
		$(document).one('click', '.log-in-link', event => {
			this.getUsersModule().then(users => {
				users.login();
			});
		});
	}
	getUsersModule(){
		return new Promise( (resolve, reject) => {
			if(this.UsersModule!=null){
				resolve(this.UsersModule)
			}
			else{
			      let scriptPath = window.GlobalVariables.staticPath + (window.GlobalVariables.environment=='production' ? '/js/apps/users/users.combo.min.js' : '/js/apps/users/users.combo.js');
			      $.getScript(scriptPath).then(()=>{
						System.import('users.module').then(module => {
							try{
								this.UsersModule = new module.UsersModule();
								resolve(this.UsersModule)
							}catch(e){
								console.error(e);
								reject(e);
							}
						});
			      });
			}
		}) // end return Promise;
	}
}

export function bootstrap() {
	let globals = new Globals();
	globals.init();
}