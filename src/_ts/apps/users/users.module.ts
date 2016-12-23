import { NgModule} from '@angular/core';
import { LoginModule }  from './login/login.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  imports: [
    LoginModule    
  ],
  declarations: [],
  providers: [],
  bootstrap: []
})
export class UserModule {  
  login(){
    platformBrowserDynamic().bootstrapModule(LoginModule);
  }
};



