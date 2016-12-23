import { UsersModule } from './users.module';

(function(){
	window.GlobalVariables.modules = window.GlobalVariables.modules || {};
	window.GlobalVariables.modules.users = new UsersModule();
})();
