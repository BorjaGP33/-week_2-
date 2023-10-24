// Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)
// function hasEven(myNums: number[]): boolean {
//     let i = 0;
//     while (i < myNums.length) {
//         if (myNums[i] % 2 == 0) {
//             return true;
//         }
//         i++
//     }
//     return false;
// }
// console.log(hasEven([1,3,30,7,9]));
// Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)
function startWithM(myNames) {
    var i = 0;
    while (i < myNames.length) {
        if (myNames[i][0] !== "M") {
            return false;
        }
        i++;
    }
    return true;
}
console.log(startWithM(["Maria", "Magdalena"]));
