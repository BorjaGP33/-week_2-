const {person} = require ("./person");

let persona = new person("Jose", 75, 175, 1963);
let persona2 = new person("paz", 78, 163, 1962);

persona2.Hobbies = ["peliculas","bailar","verTv"];

persona.printAll()
persona.printhobbies()

persona2.printAll()
persona2.printhobbies()

persona.calculaEdad()
persona.calcularIMC()

persona2.calculaEdad()
persona2.calcularIMC()


