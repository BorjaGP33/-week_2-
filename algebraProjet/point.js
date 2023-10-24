"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setx = function (x) {
        this.x = x;
    };
    Point.prototype.getx = function () {
        return this.x;
    };
    Point.prototype.sety = function (y) {
        this.y = y;
    };
    Point.prototype.gety = function () {
        return this.y;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        return Math.sqrt(Math.pow((this.x - anotherPoint.x), 2) + Math.pow((this.y - anotherPoint.y), 2));
    };
    Point.prototype.calculateQuadrant = function () {
        var cuadrante = 0;
        if (this.x == 0 || this.y == 0) {
            cuadrante = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            cuadrante = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            cuadrante = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            cuadrante = 4;
        }
        return cuadrante;
    };
    Point.prototype.calculateNearest = function (point) {
        var distanciaMin = 100; //Inicializa la variable distanciaMin con un valor muy grande.
        var puntoMinimo = point[0]; // Inicializa la variable puntoMinimo con el primer objeto en el array point.
        for (var i = 0; i < point.length; i++) { //itera sobre cada objeto en el array point.
            var distanciActual = this.calculateDistance(point[i]); //Calcula la distancia entre el punto actual y el objeto actual en el array 
            if (distanciActual < distanciaMin) { //Compara la distancia actual con la distancia más cercana encontrada hasta ahora.
                distanciaMin = distanciActual;
            }
            puntoMinimo = point[i]; //Actualiza la variable puntoMinimo con el objeto actual en el array point.
        }
        return puntoMinimo;
    };
    return Point;
}());
exports.Point = Point;
