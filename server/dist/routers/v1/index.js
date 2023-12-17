"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_router_1 = __importDefault(require("./index.router"));
const gateway_router_1 = require("./gateway.router");
const device_router_1 = require("./device.router");
const routerOptions = {
    mergeParams: true,
    strict: false,
    caseSensitive: true,
};
const router = (0, express_1.Router)(routerOptions);
/** DO NESTED ROUTING HERE */
router.use('/', index_router_1.default);
router.use('/gateway', gateway_router_1.gateAuthRouter);
router.use('/device', device_router_1.deviceAuthRouter);
exports.default = router;
