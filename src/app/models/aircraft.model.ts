export class Aircraft {
    id:number;
    prog:string;
    design:boolean;
    development:boolean;

    constructor(id:number, prog:string, design:boolean, development:boolean){
        this.id=id;
        this.prog=prog;
        this.design=design;
        this.development=development;
    }
}
