"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const users_shema_1 = require("../schemas/users.shema");
const verifyData_middleware_1 = __importDefault(require("../middlewares/verifyData.middleware"));
const userIdExist_middleware_1 = __importDefault(require("../middlewares/userIdExist.middleware"));
const ensureAuth_middleware_1 = __importDefault(require("../middlewares/ensureAuth.middleware"));
exports.userRoutes = (0, express_1.Router)();
exports.userRoutes.post("", (0, verifyData_middleware_1.default)(users_shema_1.userSchema), user_controller_1.createUserController);
exports.userRoutes.get("", ensureAuth_middleware_1.default, user_controller_1.listAllUsersController);
exports.userRoutes.get("/:id", ensureAuth_middleware_1.default, userIdExist_middleware_1.default, user_controller_1.listUserController);
exports.userRoutes.patch("/:id", ensureAuth_middleware_1.default, userIdExist_middleware_1.default, user_controller_1.updateUserController);
exports.userRoutes.delete("/:id", ensureAuth_middleware_1.default, userIdExist_middleware_1.default, user_controller_1.deleteUserController);
