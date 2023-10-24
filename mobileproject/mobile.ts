export class Mobile{

private name: string
private trademark: string
private model: string
private color: string
private price: number

constructor (name: string, trademark: string, model: string, color: string, price: number){

this.name= name
this.trademark= trademark
this.model= model
this.color= color
this.price= price

}

public setname(name:string):void{
    this.name = name;
}

public getname(): string{
    return this.name;
}

public settrademark(trademark:string): void{
    this.trademark = trademark;
}

public gettrademark(): string{
    return this.trademark;
}

public setmodel(model:string):void{
    this.model = model;
}

public getmodel(): string{
    return this.model;
}
public setcolor(color:string):void{
    this.color= color;
}

public getcolor():string{
    return this.color;
}

public setprice(price: number): void{
    this.price= price;
}

public getprice():number{
    return this.price;
}

public printcaracteristic():string {

    return `•name: ${this.name}
    •trademark: ${this.trademark}
    •model: ${this.model}
    •color: ${this.color}
    •price: ${this.price}` 
}


}



