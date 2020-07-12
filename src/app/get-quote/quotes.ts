export class Quote{
    public name:string;
    public network:string;
    public deductible:number;
    public principle:number;
    public timePeriod:number;

    constructor(name:string,network:string, deductible:number, principle:number, timePeriod:number){
        this.name=name;
        this.network=network;
        this.deductible=deductible;
        this.principle=principle;
        this.timePeriod=timePeriod;
    }
}