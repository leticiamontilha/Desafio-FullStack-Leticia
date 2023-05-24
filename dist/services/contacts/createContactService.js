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
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const errors_1 = require("../../errors");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createContactService = (contactData, token) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(entities_1.Contact);
    const userRepository = data_source_1.AppDataSource.getRepository(entities_1.User);
    let userId = "";
    token = token.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            throw new errors_1.AppError(error.message, 401);
        }
        userId = decoded.id;
    });
    const findUser = yield userRepository.findOneBy({
        id: userId
    });
    const findNameContact = yield contactRepository.findOneBy({
        name: contactData.name
    });
    if (findNameContact) {
        throw new errors_1.AppError("This name is already on your contacts list");
    }
    const findEmail = yield contactRepository.findOneBy({
        email: contactData.email
    });
    if (findEmail) {
        throw new errors_1.AppError("This email is already on your contacts list");
    }
    const findPhoneNumber = yield contactRepository.findOneBy({
        phone_number: contactData.phone_number
    });
    if (findPhoneNumber) {
        throw new errors_1.AppError("This phone number is already on your contacts list");
    }
    const newContact = contactRepository.create(Object.assign(Object.assign({}, contactData), { user: findUser }));
    yield contactRepository.save(newContact);
    return newContact;
});
exports.default = createContactService;
