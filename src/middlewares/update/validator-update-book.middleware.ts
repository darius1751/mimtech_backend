import { NextFunction, Request, Response } from "express";
import { UpdateBookDAO } from "../../models/dao/update";
import { validateOrReject } from "class-validator";
import { mapMiddlewareError } from "../map-middleware-error";

export const validatorUpdateBookMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, author, publicationYear } = req.body;
        const updateBookDao = new UpdateBookDAO();
        updateBookDao.title = title;
        updateBookDao.author = author;
        updateBookDao.publicationYear = publicationYear;
        await validateOrReject(updateBookDao);
        req.body = {
            title, author, publicationYear
        }
        next()
    } catch (e: any) {
        res.status(400).json({ status: 400, message: 'Error in validation update book: ', errors: mapMiddlewareError(e) });
    }
}