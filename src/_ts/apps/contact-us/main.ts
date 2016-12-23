import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import { AppModule } from './app.module';
if(window.GlobalVariables.environment==="production"){
	enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
