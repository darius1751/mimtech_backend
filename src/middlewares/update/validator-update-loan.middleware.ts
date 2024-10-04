import { NextFunction, Request, Response } from "express";
import { UpdateLoanDAO } from "../../models/dao/update/";
import { validateOrReject } from "class-validator";
import { mapMiddlewareError } from "../map-middleware-error";

export const validatorUpdateLoanMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { loanDate, returnDate } = req.body;
        const updateLoanDao = new UpdateLoanDAO();
        updateLoanDao.loanDate = loanDate
        updateLoanDao.returnDate = returnDate
        await validateOrReject(updateLoanDao);
        req.body = {
            loanDate,
            returnDate
        }
        next()
    } catch (e: any) {
        res.status(400).json({ status: 400, message: 'Error in validation update loan: ', errors: mapMiddlewareError(e) });
    }
}