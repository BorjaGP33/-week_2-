export class Vector {

    private elements: number[];
    constructor(public n: number, public k: number) {

        this.n = n;
        this.k = k;
        this.elements = [];

        for (let i = 0; i < this.n; i++) {
            this.elements.push(Math.floor(Math.random() * this.k));
        }

    }

    printVector(): void {
        console.log(this.elements);
    }

    add(v1: Vector): Vector {
        let suma: Vector = new Vector(0, 0); //variable suma crea objeto Vector que guarda la suma
        for (let i = 0; i < v1.elements.length; i++) { 
            if (v1.elements.length == this.elements.length) {
                suma.elements.push(v1.elements[i] + this.elements[i])
            }
        }
        return suma
    }

    subsVector(v1: Vector): Vector { //variable suma crea objeto Vector que guarda la suma
        let resta: Vector = new Vector(0, 0);
        for (let i = 0; i < v1.elements.length; i++) {
            resta.elements.push(v1.elements[i] - this.elements[i])
        }
        return resta
    }
    multVector(v1: Vector): Vector {
        let mult: Vector = new Vector(0, 0);
        for (let i = 0; i < v1.elements.length; i++) {
            mult.elements.push(v1.elements[i] * this.elements[i])
        }
        return mult

    }
    multnumber(n: number): Vector {
        let multnumber: Vector = new Vector(0, 0);
        for (let i = 0; i < this.elements.length; i++) {
            multnumber.elements.push(this.elements[i] * n);
        }
        return multnumber

    }
}