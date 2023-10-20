import { Person } from "./classperson";
import { Contacts } from "./contacts";

let persona = new Person("Pedro", 75,"felicidad");// objeto de tipo persona lo
let persona2 = new Person("Pablo", 75,"enfado");
let persona3 = new Person("Maria", 75,"neutro");

let people = [persona, persona2, persona3];



let contacto = new Contacts() // let contact = {people: []}
contacto.people = [persona, persona2, persona3];
console.log(contacto);

contacto.printCalendar();