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
class DeviceController extends base_1.BaseController {
    constructor(DeviceService) {
        super();
        this.DeviceService = DeviceService;
    }
    createMasterDevice(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params._id;
                const Device = yield this.DeviceService.createMasterDevice(_id, req.body);
                this.sendSuccessResponse(res, this.StatusCodes.CREATED, texts_1.texts.DEVICE_CREATED, Device);
            }
            catch (err) {
                this.catch(err, res);
            }
        });
    }
    createChildDevice(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params._id;
                const gate = yield this.DeviceService.createChildDevice(_id, req.body);
                this.sendSuccessResponse(res, this.StatusCodes.OK, texts_1.texts.OPERATION_SUCCESSFUL, gate);
            }
            catch (err) {
                this.catch(err, res);
            }
        });
    }
    getMaster(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gate = yield this.DeviceService.getMasterDevices();
                this.sendSuccessResponse(res, this.StatusCodes.OK, texts_1.texts.OPERATION_SUCCESSFUL, gate);
            }
            catch (err) {
                this.catch(err, res);
            }
        });
    }
    deleteChildDevice(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.DeviceService.deleteChildDevice(req.params._id);
                this.sendSuccessResponse(res, this.StatusCodes.OK, texts_1.texts.DEVICE_DELETED, null);
            }
            catch (err) {
                this.catch(err, res);
            }
        });
    }
}
exports.default = DeviceController;
;
