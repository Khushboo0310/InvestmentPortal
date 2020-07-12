export class Agent{
    public name:string;
    public mobile:number;
    public address:string;
    public email:string;

    constructor(name:string, mobile:number, address:string, email:string){
        this.name=name;
        this.mobile=mobile;
        this.address=address;
        this.email=email;
    }
}