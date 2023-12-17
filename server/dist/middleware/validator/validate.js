"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const StatusCodes_utils_1 = __importDefault(require("../../utils/constants/StatusCodes.utils"));
const validate = (validationChain) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    function runValidator(i = 0, err = undefined, middlewareError = undefined) {
        if (middlewareError)
            return next(middlewareError);
        if (err) {
            return res.status(StatusCodes_utils_1.default.BAD_REQUEST).json({
                status: StatusCodes_utils_1.default.BAD_REQUEST,
                message: err,
                data: null,
            });
        }
        if (i === validationChain.length)
            return next();
        validationChain[i](req, res, (error) => {
            const validateResult = (0, express_validator_1.validationResult)(req);
            if (validateResult.array()[0])
                console.log(validateResult.array()[0]);
            if (!validateResult.isEmpty())
                err = validateResult.array()[0].msg;
            runValidator(i + 1, err, error);
        });
    }
    runValidator();
});
exports.validate = validate;
