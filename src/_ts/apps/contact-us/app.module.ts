import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { ContactUsService } from './contact-us.service';
import { ContactUsComponent }  from './contact-us.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule 
  ],
  declarations: [
    ContactUsComponent
  ],
  providers: [ ContactUsService],
  bootstrap: [ ContactUsComponent ]
})
export class AppModule { }
