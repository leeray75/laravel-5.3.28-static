import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Contact } from './contact';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ContactUsService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private apiUrl = 'api/contact';  // URL to web api

  	constructor(private http: Http) { }
	
	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}

	send(contact: Contact): Promise<any> {
	  return this.http
	    .post(this.apiUrl, contact, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json());
	}

}

