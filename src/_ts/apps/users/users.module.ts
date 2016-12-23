import { LoginModule }  from './login/login.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

export class UsersModule {
  login(){
    platformBrowserDynamic().bootstrapModule(LoginModule);
  }
};



