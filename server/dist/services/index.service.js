"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const general_config_1 = __importDefault(require("../config/general.config"));
class IndexService {
    getPong() {
        return 'PONG';
    }
    getDocs() {
        var url = general_config_1.default.DOC_FILE;
        return url;
    }
}
exports.default = IndexService;
