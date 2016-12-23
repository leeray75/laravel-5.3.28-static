export class Contact{
	name: string;
	email: string;
	message: string;
	constructor(){}
	reset(): void{
		this.name="";
		this.email="";
		this.message="";
	}
}