import { NextFunction, Request, Response } from "express";
import { CreateBookDAO } from "../../models/dao/create";
import { validateOrReject } from "class-validator";
import { mapMiddlewareError } from "../map-middleware-error";

export const validatorCreateBookMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, author, publicationYear } = req.body;
        const createBookDao = new CreateBookDAO();
        createBookDao.author = author;
        createBookDao.publicationYear = publicationYear;
        createBookDao.title = title;
        await validateOrReject(createBookDao);
        req.body = {
            title,
            author,
            publicationYear
        }
        next()
    } catch (e: any) {
        res.status(400).json({ status: 400, message: 'Error in validations create loan: ', errors: mapMiddlewareError(e) });
    }
}