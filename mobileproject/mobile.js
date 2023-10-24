"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    Mobile.prototype.setname = function (name) {
        this.name = name;
    };
    Mobile.prototype.getname = function () {
        return this.name;
    };
    Mobile.prototype.settrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.gettrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setmodel = function (model) {
        this.model = model;
    };
    Mobile.prototype.getmodel = function () {
        return this.model;
    };
    Mobile.prototype.setcolor = function (color) {
        this.color = color;
    };
    Mobile.prototype.getcolor = function () {
        return this.color;
    };
    Mobile.prototype.setprice = function (price) {
        this.price = price;
    };
    Mobile.prototype.getprice = function () {
        return this.price;
    };
    Mobile.prototype.printcaracteristic = function () {
        return "\u2022name: ".concat(this.name, "\n    \u2022trademark: ").concat(this.trademark, "\n    \u2022model: ").concat(this.model, "\n    \u2022color: ").concat(this.color, "\n    \u2022price: ").concat(this.price);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
