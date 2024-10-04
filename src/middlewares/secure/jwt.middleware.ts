import { NextFunction, Request, Response } from "express";
import { TokenDao } from "../../models/dao/token.dao";
import { validateOrReject } from "class-validator";
import { mapMiddlewareError } from "../map-middleware-error";
import { verify } from "jsonwebtoken";

export const jwtMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { token } = req.headers;
        const tokenDao = new TokenDao();
        tokenDao.token = token?.toString() || "";
        await validateOrReject(tokenDao);
        verify(tokenDao.token, process.env.SECRET_JWT || "", { complete: true });
        next()
    } catch (e: any) {
        res.status(400).json({ status: 400, message: 'Error in validations create loan: ', errors: mapMiddlewareError(e) });
    }
}