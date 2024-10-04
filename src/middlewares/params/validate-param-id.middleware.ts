import { NextFunction, Request, Response } from "express";
import { mapMiddlewareError } from "../map-middleware-error";
import { ParamIdDao } from '../../models/dao/param-id.dao';
import { validateOrReject } from "class-validator";

export const validatorParamIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const paramIdDao = new ParamIdDao();
        paramIdDao.id = +id;
        await validateOrReject(paramIdDao);
        req.params = {
            id
        }
        next()
    } catch (e: any) {
        res.status(400).json({ status: 400, message: 'Error in validations create loan: ', errors: mapMiddlewareError(e) });
    }
}