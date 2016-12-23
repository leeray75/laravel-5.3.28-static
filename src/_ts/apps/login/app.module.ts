import { NgModule} from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { LoginService } from './login.service';
import { LoginFormComponent }  from './login-form.component';
import { AlertModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   //ModalModule 
    
  ],
  declarations: [
    LoginFormComponent
  ],
  providers: [ LoginService],
  bootstrap: [ LoginFormComponent ]
})
export class AppModule { }


