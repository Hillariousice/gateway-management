"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generalConfig = {
    DOC_FILE: process.env.DOC_FILE,
    NODE_ENV: process.env.NODE_ENV,
    IS_LIVE: process.env.NODE_ENV === "production",
    PASSWORD: process.env.PASSWORD,
    MONGO_URL: process.env.MONGO_URL
};
exports.default = generalConfig;
