"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice;
        this.totalPricecalculation = mobiles.reduce(function (total, mobile) { return total + mobile.getprice(); }, 0); // reduce: metodo que actua sobre cada
    } // elemento de un array devolviendo un unico valor, 
    //el 0 es el valor inicial del acumulador
    MobileCollection.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
    };
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.setTotalPricecalculaton = function (totalPricecalculation) {
        this.totalPricecalculation = totalPricecalculation;
    };
    MobileCollection.prototype.getTotalPricecalculation = function () {
        return this.totalPricecalculation;
    };
    MobileCollection.prototype.printcollection = function () {
        console.log("this is all my mobiles:");
        // for(let i = 0; i <this.mobiles.length;i++){
        //     console.log(`the characteristic of the mobile ${this.mobiles[i]} are:`);
        //     console.log(`•Name: ${this.mobiles[i]}`);
        //     console.log(`•Trademark: ${this.mobiles[i]}`);
        //     console.log(`•Model: ${this.mobiles[i]}`);
        //     console.log(`•Color ${this.mobiles[i]}`);
        //     console.log(`•Price ${this.mobiles[i]}`);
        // }
        var moviles = "";
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var movil = _a[_i];
            moviles += "\n" + movil.printcaracteristic() + "\n";
        }
        return moviles;
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
