"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsSchema = exports.updateUserSchema = exports.returnAllUsersSchema = exports.returnUserSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
const contact_schema_1 = require("./contact.schema");
Object.defineProperty(exports, "contactsSchema", { enumerable: true, get: function () { return contact_schema_1.contactsSchema; } });
const userSchema = zod_1.z.object({
    name: zod_1.z.string().min(3).max(50),
    email: zod_1.z.string().email().max(45),
    phone_number: zod_1.z.string().max(11),
    password: zod_1.z.string().min(4).max(120)
});
exports.userSchema = userSchema;
const returnUserSchema = userSchema
    .extend({
    id: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    contacts: zod_1.z.array(contact_schema_1.returnContactSchema).default([]),
}).omit({ password: true });
exports.returnUserSchema = returnUserSchema;
const returnAllUsersSchema = returnUserSchema.array();
exports.returnAllUsersSchema = returnAllUsersSchema;
const updateUserSchema = zod_1.z.object({
    name: zod_1.z.string().max(45).optional(),
    email: zod_1.z.string().email().optional(),
    password: zod_1.z.string().optional(),
    phone_number: zod_1.z.string().optional()
});
exports.updateUserSchema = updateUserSchema;
