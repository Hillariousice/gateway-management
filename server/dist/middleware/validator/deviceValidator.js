"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePDevice = exports.validateMasterDevice = void 0;
const express_validator_1 = require("express-validator");
const texts_1 = require("../../utils/constants/texts");
const validateMasterDevice = () => {
    return [
        (0, express_validator_1.param)('_id', texts_1.texts.GATEWAY_NOT_FOUND).isMongoId(),
        (0, express_validator_1.body)('uid', texts_1.texts.UID_REQUIRED).isString().isLength({ min: 3, max: 20 }),
        (0, express_validator_1.body)('vendor', texts_1.texts.VENDOR_REQUIRED).isString().isLength({ min: 3, max: 20 }),
        (0, express_validator_1.body)('status', texts_1.texts.INVALID_STATUS).optional().isIn(['online', 'offline']),
        (0, express_validator_1.body)('date-created', texts_1.texts.INVALID_DATE).optional().isDate()
    ];
};
exports.validateMasterDevice = validateMasterDevice;
const validatePDevice = () => {
    return [
        (0, express_validator_1.param)('_id', texts_1.texts.MASTERDEVICE_NOT_FOUND).isMongoId(),
        (0, express_validator_1.body)('uid', texts_1.texts.UID_REQUIRED).isString().isLength({ min: 3, max: 20 }),
        (0, express_validator_1.body)('vendor', texts_1.texts.VENDOR_REQUIRED).isString().isLength({ min: 3, max: 20 }),
        (0, express_validator_1.body)('status', texts_1.texts.INVALID_STATUS).optional().isIn(['online', 'offline']),
        (0, express_validator_1.body)('date-created', texts_1.texts.INVALID_DATE).optional().isDate()
    ];
};
exports.validatePDevice = validatePDevice;
