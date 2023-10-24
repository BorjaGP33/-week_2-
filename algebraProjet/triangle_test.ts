import { Triangle } from "./triangle";
import { Point } from "./point";


let vertex1 = new Point(3,7);
let vertex2 = new Point(9,9)
let vertex3 = new Point(3,3);

let mytriangle:Triangle = new Triangle(vertex1,vertex2,vertex3);
console.log(mytriangle.calculateLengthsides());