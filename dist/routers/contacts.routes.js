"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsRoute = void 0;
const express_1 = require("express");
const contact_controller_1 = require("../controllers/contact.controller");
const contact_schema_1 = require("../schemas/contact.schema");
const verifyData_middleware_1 = __importDefault(require("../middlewares/verifyData.middleware"));
const ensureAuth_middleware_1 = __importDefault(require("../middlewares/ensureAuth.middleware"));
const contactsRoute = (0, express_1.Router)();
exports.contactsRoute = contactsRoute;
contactsRoute.post("", ensureAuth_middleware_1.default, (0, verifyData_middleware_1.default)(contact_schema_1.contactsSchema), contact_controller_1.createContactController);
contactsRoute.get("", ensureAuth_middleware_1.default, contact_controller_1.listContactsController);
contactsRoute.patch("/:id", ensureAuth_middleware_1.default, contact_controller_1.updateContactController);
contactsRoute.delete("/:id", ensureAuth_middleware_1.default, contact_controller_1.deleteContactController);
