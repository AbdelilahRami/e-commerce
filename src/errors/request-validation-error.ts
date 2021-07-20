import {ValidationError} from 'express-validator';

export class RequestValidationError extends Error {
    statusCode=400;

    constructor(public errors: ValidationError[]){
        super('Invalid request parameters');
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

}
