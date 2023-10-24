"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
function isEven(number) {
    if (number % 2 == 0) {
        console.log("el numero es par");
    }
    else {
        console.log("el numero es impar");
    }
}
exports.isEven = isEven;
;
console.log(isEven(3));
