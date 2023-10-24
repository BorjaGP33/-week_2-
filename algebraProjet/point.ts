export class Point {

    private x: number;
    private y: number;

    constructor(x: number, y: number) {

        this.x = x;
        this.y = y;
    }

    public setx(x: number): void {
        this.x = x
    }

    public getx(): number {
        return this.x
    }


    public sety(y: number): void {
        this.y = y

    }

    public gety(): number {
        return this.y
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    distanceToOrigin(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    calculateDistance(anotherPoint: Point): number {
        return Math.sqrt((this.x - anotherPoint.x) ** 2 + (this.y - anotherPoint.y) ** 2);
    }

    calculateQuadrant(): number {

        let cuadrante = 0

        if (this.x == 0 || this.y == 0) {
            cuadrante = 0

        } else if (this.x > 0 && this.y > 0) {
            cuadrante = 1

        } else if (this.x < 0 && this.y > 0) {
            cuadrante = 2

        } else if (this.x < 0 && this.y < 0) {
            cuadrante = 3

        } else if (this.x > 0 && this.y < 0) {
            cuadrante = 4

        }
        return cuadrante;
    }


    public calculateNearest(point: Point[]): Point {

        let distanciaMin: number =100 ; //Inicializa la variable distanciaMin con un valor muy grande.
       
        let puntoMinimo: Point = point[0];  // Inicializa la variable puntoMinimo con el primer objeto en el array point.


       
        for (let i = 0; i < point.length; i++) {   //itera sobre cada objeto en el array point.
           
            let distanciActual = this.calculateDistance(point[i]);  //Calcula la distancia entre el punto actual y el objeto actual en el array 
           
            if (distanciActual < distanciaMin) {  //Compara la distancia actual con la distancia más cercana encontrada hasta ahora.
                distanciaMin = distanciActual
            }
            puntoMinimo = point[i]  //Actualiza la variable puntoMinimo con el objeto actual en el array point.
        }
       
        return puntoMinimo

}


}
