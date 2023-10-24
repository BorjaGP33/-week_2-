import { Point} from "./point";

let myPoint:Point = new Point(3,9);
let myPoint2:Point = new Point(1,7);
let mypoint3:Point = new Point(9,7);
let points= [myPoint,myPoint2,mypoint3];
myPoint.setx(3);
console.log(myPoint.getx());
myPoint.sety(9);
console.log(myPoint.gety());
myPoint.toString();
console.log(myPoint.toString());
console.log(myPoint.distanceToOrigin());
console.log(myPoint.calculateDistance(myPoint2));
console.log(myPoint.calculateQuadrant());
console.log(myPoint2.calculateNearest(points));