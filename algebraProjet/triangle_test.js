"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("./triangle");
var point_1 = require("./point");
var vertex1 = new point_1.Point(3, 7);
var vertex2 = new point_1.Point(9, 9);
var vertex3 = new point_1.Point(3, 3);
var mytriangle = new triangle_1.Triangle(vertex1, vertex2, vertex3);
console.log(mytriangle.calculateLengthsides());
