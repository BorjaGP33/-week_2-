class person {
    constructor(nombre, peso, altura, yearOfBirth) {

        this.nombre = nombre
        this.peso = peso
        this.altura = altura
        this.yearOfBirth = yearOfBirth
        this.Hobbies = []
    }


    //  ______ reto-2

//metodos:

    calcularIMC() {
        return this.peso / (this.altura * this.altura) * 10000
    }

    printAll() {
        console.log(`su nombre es ${this.nombre} - su peso es: ${this.peso} - su altura es: ${this.altura} - su fecha es: ${this.yearOfBirth}`)
    };

    printhobbies() {
        console.log(`sus hobbies es ${this.Hobbies}`)
    };

    calculaEdad(yearOfBirth) {
        let year = new Date().getFullYear();
        return year - this.yearOfBirth;
    }



}
let persona = new person("Jose", 75, 175, 1963);
    console.log(persona);

persona.Hobbies = ["nadar", "correr", "jugar"];
console.log(persona.calculaEdad());

    console.log(persona.calcularIMC());
persona.printAll()
persona.printhobbies()
persona.calculaEdad()
persona.calcularIMC()




module.exports = { person }







