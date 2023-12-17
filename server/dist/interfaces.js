"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerError = void 0;
class ControllerError extends Error {
    constructor(msg, status, data) {
        super(msg);
        this.status = status;
        this.data = data;
    }
}
exports.ControllerError = ControllerError;
