"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataIsValidMiddleware = (schema) => (request, response, next) => {
    const validatedData = schema.parse(request.body);
    request.body = validatedData;
    return next();
};
exports.default = dataIsValidMiddleware;
