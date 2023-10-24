import { MobileCollection } from "./mobile_collection";
import { Mobile } from "./mobile";
let mobile = new Mobile("oreo", "dreamobile", "hermetico", " blue", 899); // creacion de un nuevo objeto, crear variable = new (nombre del objeto)
let mobile2 = new Mobile("twix", "hummer", "zeta,", "black", 699);
let mobile3 = new Mobile("marx", "young", "max", "white", 599);
let mobile4 = new Mobile("galaxy","punkmobile","omega","golden",931);
let myMobiles = [mobile, mobile2, mobile3,mobile4];
let mycollection = new MobileCollection(myMobiles);


console.log(mycollection.getMobiles());
console.log(mycollection.getTotalPricecalculation());
// console.log(mycollection.getMobiles()[0].printcaracteristic());
// console.log(mycollection.getMobiles()[1].printcaracteristic());
// console.log(mycollection.getMobiles()[2].printcaracteristic());
// console.log(mycollection.getMobiles()[3].printcaracteristic());
console.log(mycollection.printcollection());
