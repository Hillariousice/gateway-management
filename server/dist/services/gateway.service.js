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
const gateway_dto_1 = require("../dto/gateway.dto");
const interfaces_1 = require("../interfaces");
const StatusCodes_utils_1 = __importDefault(require("../utils/constants/StatusCodes.utils"));
const texts_1 = require("../utils/constants/texts");
class GatewayService {
    constructor(GatewayModel) {
        this.GatewayModel = GatewayModel;
    }
    createGateway(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = [];
            // Validate maximum number of peripheral devices
            if (data.device && data.device.length > 10) {
                errors.push(texts_1.texts.TOO_MANY_DEVICES);
            }
            console.log(data);
            const gateway = new this.GatewayModel(new gateway_dto_1.CreateGatewayDto(data));
            return yield gateway.save();
        });
    }
    getGateway(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.GatewayModel.findById(_id);
        });
    }
    getGateways() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.GatewayModel.find();
        });
    }
    updateGateway(_id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const gateway = this.GatewayModel.findById(_id);
            if (!gateway)
                throw new interfaces_1.ControllerError(texts_1.texts.GATEWAY_NOT_FOUND, StatusCodes_utils_1.default.NOT_FOUND);
            return yield gateway.findOneAndUpdate({ _id }, data, { new: true });
        });
    }
    verifyIpAddress(gatewayId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const gateway = yield this.GatewayModel.findById(gatewayId);
            if (!gateway)
                throw new interfaces_1.ControllerError(texts_1.texts.GATEWAY_NOT_FOUND, StatusCodes_utils_1.default.NOT_FOUND);
            yield this.GatewayModel.findByIdAndUpdate(gatewayId, data, { new: true });
            yield gateway.save();
            return gateway;
        });
    }
    deleteGateway(gateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const gateway = yield this.GatewayModel.findByIdAndDelete(gateId);
            return gateway;
        });
    }
}
exports.default = GatewayService;
