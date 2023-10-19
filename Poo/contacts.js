// Crear una clase que se llame Contacts que tenga un atributo que sea un array de objetos
// de la clase Person. 

class contacts {

    constructor(){

        this.contacts = []
    }
    printPersons(){

        console.log(this.contacts);
    }
    // Crear un método llamado printPersons que imprima cada uno de los atributos de cada
    // objeto Person.
}
module.exports = { contacts };