"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Nombre {
    constructor(value) {
        this.value = Number(value);
    }
    toDecimalPlace(decimal) {
        const helper = Math.pow(10, decimal);
        return Math.round(this.value * helper) / helper;
    }
    toMoney() {
        return this.toDecimalPlace(2);
    }
}
exports.default = Nombre;
