"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNumbers = void 0;
const generateNumbers = (length) => {
    let numbers = '';
    for (var i = 0; i < length; i++) {
        numbers += Math.floor(Math.random() * 10);
    }
    return numbers;
};
exports.generateNumbers = generateNumbers;
