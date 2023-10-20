import { Book } from "./book";

let book = new Book( "Akira", 379 ,"3337-23999", "nNakata Miyano","sun nacient"); //creacion de un objeto.( new (nombre del objeto))

console.log(book.gettitle());
console.log(book.getnpages());
console.log(book.getisbn());
console.log(book.getAuthor());
console.log(book.geteditorial());

console.log(book.toString());

