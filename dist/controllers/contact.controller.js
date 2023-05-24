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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContactController = exports.updateContactController = exports.listContactsController = exports.createContactController = void 0;
const createContactService_1 = __importDefault(require("../services/contacts/createContactService"));
const listContactsService_1 = __importDefault(require("../services/contacts/listContactsService"));
const updateContactService_1 = __importDefault(require("../services/contacts/updateContactService"));
const deleteContactService_service_1 = __importDefault(require("../services/contacts/deleteContactService.service"));
const createContactController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const contactData = request.body;
    const token = request.headers.authorization;
    const createContact = yield (0, createContactService_1.default)(contactData, token);
    const { user } = createContact, createContactRest = __rest(createContact, ["user"]);
    const userId = user.id;
    return response.status(201).json(Object.assign(Object.assign({}, createContactRest), { userId }));
});
exports.createContactController = createContactController;
const listContactsController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const token = request.headers.authorization;
    const allContacts = yield (0, listContactsService_1.default)(token);
    return response.status(200).json(allContacts);
});
exports.listContactsController = listContactsController;
const updateContactController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const contactData = request.body;
    const contactId = request.params.id;
    const updateContact = yield (0, updateContactService_1.default)(contactData, contactId);
    return response.status(200).json(updateContact);
});
exports.updateContactController = updateContactController;
const deleteContactController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = request.params.id;
    yield (0, deleteContactService_service_1.default)(contactId);
    return response.status(204).json();
});
exports.deleteContactController = deleteContactController;
