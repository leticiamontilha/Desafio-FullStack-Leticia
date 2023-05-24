"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContactSchema = exports.returnContactSchema = exports.contactsSchema = void 0;
const zod_1 = require("zod");
const contactsSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    phone_number: zod_1.z.string()
});
exports.contactsSchema = contactsSchema;
const returnContactSchema = contactsSchema
    .extend({
    id: zod_1.z.string().optional(),
    createdAt: zod_1.z.date()
});
exports.returnContactSchema = returnContactSchema;
const updateContactSchema = contactsSchema.partial();
exports.updateContactSchema = updateContactSchema;
