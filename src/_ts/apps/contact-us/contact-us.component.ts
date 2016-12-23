import { Component } from '@angular/core';
import { Contact } from './contact';
import { ContactUsService } from './contact-us.service';
@Component({
  selector: 'contact-us',
  templateUrl: window.GlobalVariables.app.templateSrc+'contact-us.component.html'
})
export class ContactUsComponent {
  contact = new Contact();
  constructor(private contactUsService: ContactUsService){}
  sendEmail(){
  	this.contactUsService
  		.send(this.contact)
  		.then(response => {
  			this.contact.reset();
  		})
  }
}