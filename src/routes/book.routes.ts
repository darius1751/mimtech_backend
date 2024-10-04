import { Router } from "express";
import { BooksController } from "../controllers/books.controller";
import { validatorCreateBookMiddleware } from "../middlewares/create/";
import { validatorUpdateBookMiddleware } from "../middlewares/update";
import { validatorParamIdMiddleware } from "../middlewares/params/validate-param-id.middleware";
import { jwtMiddleware } from "../middlewares/secure/jwt.middleware";
export class BookRouter {
    public readonly router: Router;
    private readonly booksController: BooksController;
    constructor() {
        this.router = Router();
        this.booksController = new BooksController();
        this.createRoutes();
    }
    private createRoutes(): void {
        this.router.get('', this.booksController.getAll);
        this.router.get('/:id', validatorParamIdMiddleware, this.booksController.getOne);
        this.router.post('', jwtMiddleware, validatorCreateBookMiddleware, this.booksController.createOne);
        this.router.put('/:id', jwtMiddleware, validatorParamIdMiddleware, validatorUpdateBookMiddleware, this.booksController.updateOne);
        this.router.delete('/:id', jwtMiddleware, validatorParamIdMiddleware, this.booksController.deleteOne);
    }
}