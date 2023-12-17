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
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const texts_1 = require("..//utils/constants/texts");
class GatewayController extends base_1.BaseController {
    constructor(GatewayService) {
        super();
        this.GatewayService = GatewayService;
    }
    createGateway(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gateway = yield this.GatewayService.createGateway(req.body);
                this.sendSuccessResponse(res, this.StatusCodes.CREATED, texts_1.texts.GATEWAY_CREATED, gateway);
            }
            catch (err) {
                this.catch(err, res);
                console.log(err);
            }
        });
    }
    getGateway(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gate = yield this.GatewayService.getGateway(req.params._id);
                this.sendSuccessResponse(res, this.StatusCodes.OK, texts_1.texts.OPERATION_SUCCESSFUL, gate);
            }
            catch (err) {
                this.catch(err, res);
            }
        });
    }
    getGateways(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gate = yield this.GatewayService.getGateways();
                this.sendSuccessResponse(res, this.StatusCodes.OK, texts_1.texts.OPERATION_SUCCESSFUL, gate);
            }
            catch (err) {
                this.catch(err, res);
            }
        });
    }
    updateGateways(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.GatewayService.updateGateway(req.params._id, req.body);
                this.sendSuccessResponse(res, this.StatusCodes.OK, texts_1.texts.GATEWAY_UPDATED, null);
            }
            catch (err) {
                this.catch(err, res);
            }
        });
    }
    verifyAddress(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedGateway = yield this.GatewayService.verifyIpAddress(req.params._id, req.body);
                this.sendSuccessResponse(res, this.StatusCodes.OK, texts_1.texts.ADDRESS_VERIFIED, updatedGateway);
            }
            catch (err) {
                this.catch(err, res);
            }
        });
    }
    deleteGateway(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.GatewayService.deleteGateway(req.params._id);
                this.sendSuccessResponse(res, this.StatusCodes.OK, texts_1.texts.GATEWAY_DELETED, null);
            }
            catch (err) {
                this.catch(err, res);
            }
        });
    }
}
exports.default = GatewayController;
;
