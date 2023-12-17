"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceAuthRouter = void 0;
const express_1 = require("express");
const device_controller_1 = __importDefault(require("../../controllers/device.controller"));
const Gateway_1 = __importDefault(require("../../models/Gateway"));
const device_service_1 = __importDefault(require("../../services/device.service"));
const Device_1 = __importDefault(require("../../models/Device"));
const MasterDevice_1 = __importDefault(require("../../models/MasterDevice"));
const deviceValidator_1 = require("../../middleware/validator/deviceValidator");
const validate_1 = require("../../middleware/validator/validate");
const routerOptions = {
    mergeParams: true,
    strict: false,
    caseSensitive: true,
};
const service = new device_service_1.default(Gateway_1.default, Device_1.default, MasterDevice_1.default);
const controller = new device_controller_1.default(service);
exports.deviceAuthRouter = (0, express_1.Router)(routerOptions);
exports.deviceAuthRouter.route('/create/:_id')
    .post((0, validate_1.validate)((0, deviceValidator_1.validateMasterDevice)()), controller.createMasterDevice.bind(controller))
    .all(controller.methodNotAllowed.bind(controller));
exports.deviceAuthRouter.route('/createpd/:_id')
    .post((0, validate_1.validate)((0, deviceValidator_1.validatePDevice)()), controller.createChildDevice.bind(controller))
    .all(controller.methodNotAllowed.bind(controller));
exports.deviceAuthRouter.route('/:_id')
    .delete(controller.deleteChildDevice.bind(controller))
    .all(controller.methodNotAllowed.bind(controller));
exports.deviceAuthRouter.route('/')
    .get(controller.getMaster.bind(controller))
    .all(controller.methodNotAllowed.bind(controller));
