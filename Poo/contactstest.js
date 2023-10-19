const { person } = require("./person.js");
const { contacts } = require("./contacts.js");


let persona = new person("Jose", 75, 175, 1963);
let persona2 = new person("paz", 78, 163, 1962);
let persona3 = new person("miriam", 65, 173, 1999);


let contacto = new contacts();
contacto.contacts = [persona, persona2, persona3];

contacto.printPersons();










