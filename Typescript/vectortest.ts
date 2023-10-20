import { Vector } from "./vector";

let vector1 = new Vector(3,5);
let vector2 = new Vector(3,5);
console.log(vector1)
console.log(vector2)
vector1.printVector();
console.log(vector1.add(vector2));
console.log(vector1.subsVector(vector2));
console.log(vector1.multVector(vector2));
console.log(vector1.multnumber(3));

