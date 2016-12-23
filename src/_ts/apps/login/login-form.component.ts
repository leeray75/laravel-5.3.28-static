import { Component, ViewChild, OnInit } from '@angular/core';
import { User } from './user';
import { LoginService } from './login.service';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'login-form',
  templateUrl: window.GlobalVariables.app.templateSrc+'login/login-form.html'
})
export class LoginFormComponent implements OnInit  {
  @ViewChild('childModal') public childModal:ModalDirective;
  user = new User();
  alertMessage = "";
  $loginModal: <any>;

  constructor(private loginService: LoginService){}
  ngOnInit(): void{
    this.$loginModal = $('#login-modal').modal('hide');
    $(document).on('click', '.log-in-link', event => {
      this.$loginModal.modal('show');
    })
  }

  sendLogin(){
  	this.loginService
  		.send(this.user)
  		.then(response => {
  			console.log("response:",response);
        if(response.status==="success"){
          this.$loginModal.modal('hide');
          this.alertMessage="";
          this.user.reset();
        }
        else{
          this.alertMessage=response.message;
        }
  			
  		})
  }
}