import { Book } from "./book";


export class Library {

    private books: Book[];
    private address: string;
    private manager: string;

    constructor(book: Book[], address: string, manager: string) {
        this.books = book;
        this.address = address;
        this.manager = manager;
    }


    public getaddress(): string {

        return this.address
    }



    public setaddress(address: string): void {

        this.address = address;
    }


    public getmanager(): string {

        return this.manager
    }


    public setmanager(manager: string): void {

        this.manager = manager;
    }

    getNumberOfbook(): number{
        return this.books.length;
    }

    findByAuthor(author: string): Book[] {
        return this.books.filter((book) => {
            return book.getAuthor() == author;
        });
    }

    public toString() {

        let imprime = "";

        for (let book of this.books) {

            imprime += book.toString()

        };
 
return imprime 
}


}

let book:Book = new Book("la historia interminable", 453, "235689 - bc7412", "harry hopking", "gold editorial");
let book2:Book = new Book("lucky luke", 103, "235665 - bc7497", "trevor wayne", "silver editorial"); //creacion de un objeto: new(nombre objeto)



let library:Library = new Library([book, book2],"address alegria","rodrigo gomez");

// console.log(library.toString());
// console.log(library.getNumberOfbook());
// console.log(library.findByAuthor("harry hopking"));