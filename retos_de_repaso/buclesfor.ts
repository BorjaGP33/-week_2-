// Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)

// function evenNumber(num) {

//     for (let i = 0; i <= num; i++) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// }
// console.log(evenNumber(9));


// Realizar una función que como parámetro de entrada reciba un array de strings y como
// salida devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)

// function myRevert(myArr: string[]): string[] {
//     let reverso: string[] = [];

//     for (let i = myArr.length - 1; i >= 0; i--) {
//         reverso.push(myArr[i])
//     }
//     return reverso
// }
// console.log(myRevert(["perro", "gato", "loro"]));


// Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)


// function isRainbow(colors: string[]): void {
//     let rainbow: string[] = ["azul", "rojo", "verde", "morado", "amarillo", "naranja"];

//     for (let i = 0; i < colors.length; i++) {
//         let col = false;

//         for (let t = 0; t < rainbow.length; t++) {
//             if (colors[i] == rainbow[t]) {
//                 col = true;
//             }
//         }

//         if (col) {
//             console.log(`${colors[i]} esta en el arcoiris`);

//         } else {
//             console.log(`${colors[i]} no esta en el arcoiris`);

//         }
//     }
// }
// isRainbow(["pitufo"]);


// Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)

export function add(mywords: string[]):number{
    let suma = 0;

    for(let i =0; i < mywords.length; i++){

        suma += mywords[i].length;
    }
    return suma;

}
console.log(add(["se positivo"]));