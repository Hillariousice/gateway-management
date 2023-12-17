"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandDevice = exports.slimDevice = void 0;
function slimDevice(device) {
    return {
        o: device.os,
        b: device.brand,
        m: device.model,
        p: device.platform,
        t: device.type,
        v: device.version,
    };
}
exports.slimDevice = slimDevice;
function expandDevice(slim) {
    return {
        os: slim.o,
        brand: slim.b,
        model: slim.m,
        platform: slim.p,
        type: slim.t,
        version: slim.v,
    };
}
exports.expandDevice = expandDevice;
