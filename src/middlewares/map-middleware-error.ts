import { ValidationError } from "class-validator";
import { MiddlewareError } from "./middleware-error.interface";

export const mapMiddlewareError = (e: ValidationError[]) => {
    let errors: MiddlewareError = {};
    const validationErrors: ValidationError[] = e;
    for (const { property, constraints } of validationErrors) {
        errors[property] = constraints;
    }
    return errors;
}