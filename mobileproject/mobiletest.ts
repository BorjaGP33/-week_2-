import { Mobile } from "./mobile";

// Crear un nuevo objeto myMobile de la clase Mobile, en el fichero mobileTest.ts, y probar
// todos sus métodos.

let mobile = new Mobile("oreo", "dreamobile", "hermetico", " blue", 899);
let mobile2 = new Mobile("twix", "hummer", "zeta,", "black", 699);
let mobile3 = new Mobile("marx", "young", "max", "white", 599);
let myMobiles = [mobile, mobile2, mobile3];
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

// printCharacteristics() {


//     for (let i = 0; i < myMobiles.length; i++) {
//         myMobiles[i].printCharacteristics();
//     }
// }




