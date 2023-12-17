"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateVerifyAddress = exports.validateUpdateGateway = exports.validateGetGateway = exports.validateGateway = void 0;
const express_validator_1 = require("express-validator");
const texts_1 = require("../../utils/constants/texts");
const validateGateway = () => {
    return [
        (0, express_validator_1.body)('serial_number', texts_1.texts.SERIAL_NUMBER_REQUIRED).isString().isLength({ min: 3, max: 20 }),
        (0, express_validator_1.body)('name', texts_1.texts.NAME_REQUIRED).isString().isLength({ min: 3, max: 20 }),
        (0, express_validator_1.body)('ipaddress', texts_1.texts.IPADDRESS_INVALID).isIP().isLength({ min: 3, max: 20 }),
    ];
};
exports.validateGateway = validateGateway;
const validateGetGateway = () => {
    return [
        (0, express_validator_1.param)('_id', texts_1.texts.VALIDATION_NOT_FOUND).isMongoId(),
    ];
};
exports.validateGetGateway = validateGetGateway;
const validateUpdateGateway = () => {
    return [
        (0, express_validator_1.param)('_id', texts_1.texts.VALIDATION_NOT_FOUND).isMongoId(),
        (0, express_validator_1.body)('serial_number', texts_1.texts.SERIAL_NUMBER_REQUIRED).isString().isLength({ min: 3, max: 20 }),
        (0, express_validator_1.body)('name', texts_1.texts.NAME_REQUIRED).isString().isLength({ min: 3, max: 20 }),
        (0, express_validator_1.body)('ipaddress', texts_1.texts.IPADDRESS_INVALID).isIP().isLength({ min: 3, max: 20 }),
    ];
};
exports.validateUpdateGateway = validateUpdateGateway;
const validateVerifyAddress = () => {
    return [
        (0, express_validator_1.param)('_id', texts_1.texts.VALIDATION_NOT_FOUND).isMongoId(),
        (0, express_validator_1.body)('ipaddress_verified', texts_1.texts.ADDRESS_NOT_VERIFIED).isBoolean(),
    ];
};
exports.validateVerifyAddress = validateVerifyAddress;
