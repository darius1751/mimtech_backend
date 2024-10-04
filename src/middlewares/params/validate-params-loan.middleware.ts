import { NextFunction, Request, Response } from "express";
import { mapMiddlewareError } from "../map-middleware-error";
import { ParamsLoanDao } from '../../models/dao/params-loan.dao';
import { validateOrReject } from "class-validator";

export const validatorParamsLoanMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId, bookId } = req.params;
        const paramsLoanDao = new ParamsLoanDao();
        paramsLoanDao.userId = +userId;
        paramsLoanDao.bookId = +bookId;
        await validateOrReject(paramsLoanDao);
        req.params = { 
            userId,
            bookId
        }
        next()
    } catch (e: any) {
        res.status(400).json({ status: 400, message: 'Error in validations create loan: ', errors: mapMiddlewareError(e) });
    }
}