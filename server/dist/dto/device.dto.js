"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChildDeviceDto = exports.CreateMasterDeviceDto = exports.Device = void 0;
class Device {
}
exports.Device = Device;
class CreateMasterDeviceDto {
    constructor(_id, data) {
        this._id = _id;
        this.uid = data.uid;
        this.vendor = data.vendor;
        this.date_created = data.date_created;
        this.status = data.status;
    }
}
exports.CreateMasterDeviceDto = CreateMasterDeviceDto;
class CreateChildDeviceDto {
    constructor(_id, data) {
        this._id = _id;
        this.uid = data.uid;
        this.vendor = data.vendor;
        this.date_created = data.date_created;
        this.status = data.status;
    }
}
exports.CreateChildDeviceDto = CreateChildDeviceDto;
