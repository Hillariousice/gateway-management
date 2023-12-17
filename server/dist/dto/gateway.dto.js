"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyAdressDto = exports.UpdateGatewayDto = exports.CreateGatewayDto = exports.GatewayDto = void 0;
class GatewayDto {
}
exports.GatewayDto = GatewayDto;
class CreateGatewayDto {
    constructor(data) {
        this.serial_number = data.serial_number;
        this.name = data.name;
        this.ipaddress = data.ipaddress;
        this.ipaddress_verified = data.ipaddress_verified;
    }
}
exports.CreateGatewayDto = CreateGatewayDto;
class UpdateGatewayDto {
}
exports.UpdateGatewayDto = UpdateGatewayDto;
class VerifyAdressDto {
}
exports.VerifyAdressDto = VerifyAdressDto;
