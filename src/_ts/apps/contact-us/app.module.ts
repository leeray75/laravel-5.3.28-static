import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
//import './rxjs-extensions';

//import { AppRoutingModule }     from './app-routing.module';
import { ContactUsComponent }         from './contact-us.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //AppRoutingModule
  ],
  declarations: [
    ContactUsComponent
  ],
  providers: [],
  bootstrap: [ ContactUsComponent ]
})
export class AppModule { }
