"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routers_1 = __importDefault(require("./routers"));
const config_1 = require("./config");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
(0, config_1.connectDB)();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static(path_1.default.join(process.cwd(), './public')));
app.use((0, cookie_parser_1.default)());
(0, routers_1.default)(app);
app.listen(process.env.PORT, () => { console.log(`app running on ${process.env.PORT}`); });
exports.default = app;
