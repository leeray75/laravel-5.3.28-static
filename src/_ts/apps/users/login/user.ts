export class User{
	email: string;
	password: string;
	errors = {
		email: "",
		password: ""
	}
	constructor(){}
	reset(): void{
		this.email="";
		this.password="";
	}
}