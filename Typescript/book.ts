export class Book {
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor(title: string, nPages: number, isbn: string, author: string, editorial: string) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;

    }

    //metodos
    public settitle(title: string): void {

        this.title = title;
    }

    public gettitle(): string {

        return this.title;
    }

    public setnPages(nPages: number): void {

        this.nPages = this.nPages;
    }

    public getnpages(): number {

        return this.nPages
    }

    public setisbn(isbn: string): void {

        this.isbn = isbn;
    }

    public getisbn(): string {

        return this.isbn
    }

    public setAuthor(author: string): void {

        this.author = this.author;
    }

    public getAuthor(): string {

        return this.author
    }

    public seteditorial(editorial: string): void {

        this.editorial = editorial;
    }

    public geteditorial(): string {

        return this.editorial
    }

    public toString(): string {
        return `"title -- ${this.title}, number of pages -- ${this.nPages}, ISBN -- ${this.isbn}, Author -- ${this.author}, Editorial -- ${this.editorial}"`;
    }
}