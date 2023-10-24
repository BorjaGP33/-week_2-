"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
// Crear un nuevo objeto myMobile de la clase Mobile, en el fichero mobileTest.ts, y probar
// todos sus métodos.
var mobile = new mobile_1.Mobile("oreo", "dreamobile", "hermetico", " blue", 899);
var mobile2 = new mobile_1.Mobile("twix", "hummer", "zeta,", "black", 699);
var mobile3 = new mobile_1.Mobile("marx", "young", "max", "white", 599);
var myMobiles = [mobile, mobile2, mobile3];
mobile.setname("principe");
console.log(mobile.getname());
mobile.settrademark("sandmobile");
console.log(mobile.gettrademark());
mobile.setmodel("acuatico");
console.log(mobile.getmodel());
mobile.setcolor("red");
console.log(mobile.getcolor());
mobile.setprice(799);
console.log(mobile.getprice());
myMobiles[0].printcaracteristic();
console.log(myMobiles[0].printcaracteristic());
mobile2.printcaracteristic();
console.log(mobile2.printcaracteristic());
mobile3.printcaracteristic();
console.log(mobile3.printcaracteristic());
// printCharacteristics() {
//     for (let i = 0; i < myMobiles.length; i++) {
//         myMobiles[i].printCharacteristics();
//     }
// }
