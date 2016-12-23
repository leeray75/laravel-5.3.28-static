import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class LoginService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private apiUrl = 'api/login';  // URL to web api

  	constructor(private http: Http) { }
	
	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}

	send(user: User): Promise<any> {
		let userData = {};
		userData.email = user.email
		userData.password = user.password;
	  return this.http
	    .post(this.apiUrl, userData, {headers: this.headers})
	    .toPromise()
	    .then(res => res.json());
	}
}

