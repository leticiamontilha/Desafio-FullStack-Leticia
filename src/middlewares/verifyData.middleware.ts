import { Request, Response, NextFunction} from "express";
import { ZodTypeAny } from "zod";

const dataIsValidMiddleware = (schema: ZodTypeAny) => (request: Request, response: Response, next: NextFunction) => {
    
    const validateData = schema.parse(request.body)
    
    request.body = validateData

    return next ()
}

export default dataIsValidMiddleware


