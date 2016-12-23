export class Contact{
	name: string;
	email: string;
	message: string;
	constructor(){}
	private reset(): void{
		this.name="";
		this.email="";
		this.message="";
	}
}