"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_collection_1 = require("./mobile_collection");
var mobile_1 = require("./mobile");
var mobile = new mobile_1.Mobile("oreo", "dreamobile", "hermetico", " blue", 899); // creacion de un nuevo objeto, crear variable = new (nombre del objeto)
var mobile2 = new mobile_1.Mobile("twix", "hummer", "zeta,", "black", 699);
var mobile3 = new mobile_1.Mobile("marx", "young", "max", "white", 599);
var mobile4 = new mobile_1.Mobile("galaxy", "punkmobile", "omega", "golden", 931);
var myMobiles = [mobile, mobile2, mobile3, mobile4];
var mycollection = new mobile_collection_1.MobileCollection(myMobiles);
console.log(mycollection.getMobiles());
console.log(mycollection.getTotalPricecalculation());
// console.log(mycollection.getMobiles()[0].printcaracteristic());
// console.log(mycollection.getMobiles()[1].printcaracteristic());
// console.log(mycollection.getMobiles()[2].printcaracteristic());
// console.log(mycollection.getMobiles()[3].printcaracteristic());
console.log(mycollection.printcollection());
