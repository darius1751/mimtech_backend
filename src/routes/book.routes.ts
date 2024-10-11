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
/**
    * @swagger
    * /books:
    *   get:
    *       summary: get all books
    *       description: get all books in DB
    *       responses:
    *           '200':
    *               description: Get All Books Sucessfull
*/
/**
    * @swagger
    * /books/{id}:
    *   get:
    *       summary: get one book by id
    *       description: get one book by id
    *       parameters:
    *           - name: id
    *             in: path
    *             required: true
    *             description: The id of the book to return
    *             schema:
    *               type: integer
    *       responses:
    *           '200':
    *               description: OK
    *           '500':
    *               description: Not Authentication
    *           '404':
    *               description: Not Found  
*/
/**
    * @swagger
    * /books:
    *   post:
    *       summary: create one book
    *       description: create one book with, title, author and publicationYear
    *       requestBody:
    *           required: true
    *           type: json
    *           content:
    *               application/json:
    *                   schema:
    *                       type: object
    *                       properties:
    *                           title:
    *                               type: string
    *                           author:
    *                               type: string
    *                           publicationYear:
    *                               type: integer
    *       responses:
    *           '200':
    *               description: Create Book Successfull
    *           '500':
    *               description: Error In create book
    *           '400':
    *               description: Not Authorization 
*/
/**
    * @swagger
    * /books/{id}:
    *   put:
    *       summary: create one book
    *       description: create one book with, title, author and publicationYear
    *       parameters:
    *           - name: id
    *             in: path
    *             required: true
    *             description: The id of the book to update
    *             schema:
    *               type: integer
    *       requestBody:
    *           required: true
    *           type: json
    *           content:
    *               application/json:
    *                   schema:
    *                       type: object
    *                       properties:
    *                           title:
    *                               type: string
    *                               required: false
    *                           author:
    *                               type: string
    *                               required: false
    *                           publicationYear:
    *                               type: integer
    *                               required: false
    *       responses:
    *           '200':
    *               description: Create book Successfull
    *           '400':
    *               description: Not Authorization
*/
/**
    * @swagger
    * /books/{id}:
    *   delete:
    *       summary: remove one book
    *       description: remove one book by id
    *       parameters:
    *           - name: id
    *             in: path
    *             required: true
    *             description: The id of the book to remove
    *             schema:
    *               type: integer
    *       responses:
    *           '200':
    *               description: Remove book successful
    *           '500':
    *               description: Error in remove book
    *           '400':
    *               description: Not Authorization
    * 
*/