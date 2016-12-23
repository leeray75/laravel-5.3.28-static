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
    console.log("login form init 3");
    this.$loginModal = $('#login-modal').modal('hide');
    this.initEventOpener();
    this.loginModal = <HTMLElement> document.getElementById('login-modal');
  }
  initEventOpener(){
    let openEl = <HTMLElement>document.querySelector('.log-in-link');
    console.log("openEl:",openEl);
    openEl.addEventListener('click',event => {
      console.log("click:",event);
      console.log("this.loginModal",this.$loginModal);
      this.$loginModal.modal('show');
    });
  }
  sendLogin(){
  	this.loginService
  		.send(this.user)
  		.then(response => {
  			this.alertMessage = response.message;
  			this.user.reset();
  		})
  }
}