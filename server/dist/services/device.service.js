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
const interfaces_1 = require("../interfaces");
const StatusCodes_utils_1 = __importDefault(require("../utils/constants/StatusCodes.utils"));
const texts_1 = require("../utils/constants/texts");
class DeviceService {
    constructor(GatewayModel, PeripheralModel, MasterModel) {
        this.GatewayModel = GatewayModel;
        this.PeripheralModel = PeripheralModel;
        this.MasterModel = MasterModel;
    }
    createMasterDevice(_id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const gateway = yield this.GatewayModel.findById(_id);
            console.log(_id);
            if (!gateway)
                throw new interfaces_1.ControllerError(texts_1.texts.GATEWAY_NOT_FOUND, StatusCodes_utils_1.default.NOT_FOUND);
            const device = new this.MasterModel(data);
            console.log(device);
            yield device.save();
            gateway.device.push(device);
            yield gateway.save();
            return device;
        });
    }
    createChildDevice(_id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const master = yield this.MasterModel.findById(_id);
            console.log(_id);
            if (!master)
                throw new interfaces_1.ControllerError(texts_1.texts.MASTERDEVICE_NOT_FOUND, StatusCodes_utils_1.default.NOT_FOUND);
            const device = new this.PeripheralModel(data);
            yield device.save();
            master.devices.push(device);
            yield master.save();
            return device;
        });
    }
    getMasterDevices() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.MasterModel.find();
        });
    }
    deleteChildDevice(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const child = yield this.PeripheralModel.findByIdAndDelete(_id);
            return child;
        });
    }
}
exports.default = DeviceService;
