"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gateAuthRouter = void 0;
const express_1 = require("express");
const gateway_service_1 = __importDefault(require("../../services/gateway.service"));
const gateway_controllers_1 = __importDefault(require("../../controllers/gateway.controllers"));
const Gateway_1 = __importDefault(require("../../models/Gateway"));
const validate_1 = require("../../middleware/validator/validate");
const gatewayValidator_1 = require("../../middleware/validator/gatewayValidator");
const routerOptions = {
    mergeParams: true,
    strict: false,
    caseSensitive: true,
};
const service = new gateway_service_1.default(Gateway_1.default);
const controller = new gateway_controllers_1.default(service);
exports.gateAuthRouter = (0, express_1.Router)(routerOptions);
exports.gateAuthRouter.route('/create')
    .post((0, validate_1.validate)((0, gatewayValidator_1.validateGateway)()), controller.createGateway.bind(controller))
    .all(controller.methodNotAllowed.bind(controller));
exports.gateAuthRouter.route('/:_id')
    .get((0, validate_1.validate)((0, gatewayValidator_1.validateGetGateway)()), controller.getGateway.bind(controller))
    .put((0, validate_1.validate)((0, gatewayValidator_1.validateUpdateGateway)()), controller.updateGateways.bind(controller))
    .patch((0, validate_1.validate)((0, gatewayValidator_1.validateVerifyAddress)()), controller.verifyAddress.bind(controller))
    .delete(controller.deleteGateway.bind(controller))
    .all(controller.methodNotAllowed.bind(controller));
exports.gateAuthRouter.route('/')
    .get(controller.getGateways.bind(controller))
    .all(controller.methodNotAllowed.bind(controller));
