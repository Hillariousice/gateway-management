"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v1_1 = __importDefault(require("./v1"));
const base_1 = require("../controllers/base");
exports.default = (app) => {
    const controller = new base_1.BaseController();
    app.use("/api/v1", v1_1.default);
    app.use(controller.errorHandler.bind(controller));
    app.use('*', controller.wildCard.bind(controller));
};
