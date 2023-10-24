import { Mobile } from "./mobile";

export class MobileCollection {
    private mobiles: Mobile[];
    private totalPrice: number;
    private totalPricecalculation: number;

    constructor(mobiles: Mobile[]) {
        this.mobiles = mobiles;
        this.totalPrice
        this.totalPricecalculation = mobiles.reduce((total, mobile) => total + mobile.getprice(), 0);// reduce: metodo que actua sobre cada
    }                                                                                                // elemento de un array devolviendo un unico valor, 
                                                                                                    //el 0 es el valor inicial del acumulador

    public setMobiles(mobiles: Mobile[]): void {
        this.mobiles = mobiles;
    }

    public getMobiles(): Mobile[] {
        return this.mobiles;
    }


    public setTotalPrice(totalPrice: number): void {
        this.totalPrice = totalPrice;
    }

    public getTotalPrice(): number {
        return this.totalPrice;
    }

    public setTotalPricecalculaton(totalPricecalculation: number): void {
        this.totalPricecalculation = totalPricecalculation;
    }

    public getTotalPricecalculation(): number {
        return this.totalPricecalculation;
    }


    public printcollection():string{

        console.log("this is all my mobiles:");
        // for(let i = 0; i <this.mobiles.length;i++){
        //     console.log(`the characteristic of the mobile ${this.mobiles[i]} are:`);
        //     console.log(`•Name: ${this.mobiles[i]}`);
        //     console.log(`•Trademark: ${this.mobiles[i]}`);
        //     console.log(`•Model: ${this.mobiles[i]}`);
        //     console.log(`•Color ${this.mobiles[i]}`);
        //     console.log(`•Price ${this.mobiles[i]}`);
            
            
            
            
        // }
        let moviles = "";
        for(let movil of this.mobiles){
           moviles+= "\n" + movil.printcaracteristic()+"\n";
        }
        return moviles;
    }
}