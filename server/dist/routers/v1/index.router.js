"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = __importDefault(require("../../controllers/index.controller"));
const index_service_1 = __importDefault(require("../../services/index.service"));
const routerOptions = {
    mergeParams: true,
    strict: false,
    caseSensitive: true,
};
const service = new index_service_1.default();
const controller = new index_controller_1.default(service);
const commonRouter = (0, express_1.Router)(routerOptions);
/** DO NESTED ROUTING HERE */
commonRouter.route('/')
    .get(controller.ping.bind(controller))
    .all(controller.methodNotAllowed.bind(controller));
commonRouter.route('/docs')
    .get(controller.getDocs.bind(controller))
    .all(controller.methodNotAllowed.bind(controller));
exports.default = commonRouter;
