"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const StatusCodes_utils_1 = __importDefault(require("../utils/constants/StatusCodes.utils"));
const interfaces_1 = require("../interfaces");
const texts_1 = require("../utils/constants/texts");
class BaseController {
    constructor() {
        this.StatusCodes = StatusCodes_utils_1.default;
    }
    sendErrorResponse(res, code, message, data) {
        console.log(message);
        res.status(code).json({
            status: 'error',
            message: message || texts_1.texts.AN_ERROR_OCCURED,
            data: data || null
        });
    }
    ;
    sendSuccessResponse(res, code, message, data) {
        res.status(code).json({
            status: 'success',
            message: message || texts_1.texts.OPERATION_SUCCESSFUL,
            data: data || null
        });
    }
    ;
    catch(err, res) {
        console.error(err);
        if (err instanceof interfaces_1.ControllerError) {
            return this.sendErrorResponse(res, err.status, err.message, err.data || null);
        }
        this.sendErrorResponse(res, StatusCodes_utils_1.default.INTERNAL_SERVER_ERROR, texts_1.texts.AN_ERROR_OCCURED, null);
    }
    methodNotAllowed(req, res) {
        this.sendErrorResponse(res, this.StatusCodes.METHOD_NOT_ALLOWED, texts_1.texts.METHOD_NOT_ALLOWED, null);
    }
    errorHandler(error, _, res, __) {
        console.log(error);
        let message, status = StatusCodes_utils_1.default.BAD_REQUEST, data = null;
        if (error.custom) {
            message = error.message;
            status = error.status;
            data = error.data || null;
        }
        else if (error.statusCode == StatusCodes_utils_1.default.BAD_REQUEST || error.status == StatusCodes_utils_1.default.BAD_REQUEST) {
            message = texts_1.texts.INVALID_REQ_BODY;
        }
        else {
            status = StatusCodes_utils_1.default.INTERNAL_SERVER_ERROR;
            message = texts_1.texts.AN_ERROR_OCCURED;
        }
        ;
        this.sendErrorResponse(res, status, message, data);
    }
    wildCard(_, res) {
        this.sendErrorResponse(res, StatusCodes_utils_1.default.NOT_FOUND, texts_1.texts.NOT_FOUND, null);
    }
}
exports.BaseController = BaseController;
