import { NextFunction } from 'express';
import { Response, Request } from 'express';
import { validationResult } from 'express-validator';
import {RequestValidationError} from "../errors/request-validation-error";


export const requestValidator =(req: Request, res: Response, next: NextFunction)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       return res.status(400).json(errors.array())
    }
    next();
}
