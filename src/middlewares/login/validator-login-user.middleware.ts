import { NextFunction, Request, Response } from "express";
import { CreateUserDAO } from "../../models/dao/create/create-user.dao";
import { validateOrReject } from "class-validator";
import { mapMiddlewareError } from "../map-middleware-error";

export const validatorCreateUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;
        const createUserDAO = new CreateUserDAO();
        createUserDAO.name = name;
        createUserDAO.email = email;
        createUserDAO.password = password;
        await validateOrReject(createUserDAO);
        req.body = {
            name,
            email,
            password
        }
        next()
    } catch (e: any) {
        res.status(400).json({ status: 400, message: 'Error in validations login user: ', errors: mapMiddlewareError(e) });
    }
}