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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.updateUserController = exports.listUserController = exports.listAllUsersController = exports.createUserController = void 0;
const createUserService_service_1 = __importDefault(require("../services/user/createUserService.service"));
const listAllUserService_service_1 = __importDefault(require("../services/user/listAllUserService.service"));
const listUserIdService_service_1 = __importDefault(require("../services/user/listUserIdService.service"));
const updateUserService_service_1 = __importDefault(require("../services/user/updateUserService.service"));
const deleteUserService_service_1 = __importDefault(require("../services/user/deleteUserService.service"));
const createUserController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = request.body;
    const user = yield (0, createUserService_service_1.default)(userData);
    return response.status(201).json(user);
});
exports.createUserController = createUserController;
const listAllUsersController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield (0, listAllUserService_service_1.default)();
    return response.json(allUsers);
});
exports.listAllUsersController = listAllUsersController;
const listUserController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, listUserIdService_service_1.default)(request.params.id);
    return response.status(200).json(user);
});
exports.listUserController = listUserController;
const updateUserController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = request.params.id;
    const userData = request.body;
    const updateUser = yield (0, updateUserService_service_1.default)(userData, userId);
    return response.status(200).json(updateUser);
});
exports.updateUserController = updateUserController;
const deleteUserController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = request.params.id;
    const userDelete = yield (0, deleteUserService_service_1.default)(userId);
    return response.json();
});
exports.deleteUserController = deleteUserController;
