"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
const verifyData_middleware_1 = __importDefault(require("../middlewares/verifyData.middleware"));
const login_schema_1 = require("../schemas/login.schema");
const login_controller_1 = require("../controllers/login.controller");
const loginRouter = (0, express_1.Router)();
exports.loginRouter = loginRouter;
loginRouter.post("", (0, verifyData_middleware_1.default)(login_schema_1.loginSchema), login_controller_1.createLoginController);
