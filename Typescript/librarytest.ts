import { Library } from "./library";
import { Book } from "./book";
let book:Book = new Book("la historia interminable", 453, "235689 - bc7412", "harry hopking", "gold editorial");
let book2:Book = new Book("lucky luke", 103, "235665 - bc7497", "trevor wayne", "silver editorial");
let library :Library = new Library([book,book2],"address sol","jaime figura");

library.setaddress("calle encanto");
console.log(library.getaddress());// getter siempre lleva console.log para verlo en terminal.
library.setmanager("felix perez");
console.log(library.getmanager());
console.log(library.getNumberOfbook());
console.log(library.findByAuthor("trevor wayne"));