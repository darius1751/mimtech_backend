import { Router } from "express";
import { LoanController } from "../controllers/loan.controller";
import { validatorParamsLoanMiddleware } from "../middlewares/params/validate-params-loan.middleware";
import { jwtMiddleware } from "../middlewares/secure/jwt.middleware";
import { validatorUpdateLoanMiddleware } from "../middlewares/update";

export class LoanRouter {
    public readonly router: Router;
    private readonly loanController: LoanController;
    constructor() {
        this.router = Router();
        this.loanController = new LoanController();
        this.createRoutes();
    }
    private createRoutes(): void {
        this.router.get('', this.loanController.getAll);
        this.router.post('/:userId/:bookId', jwtMiddleware, validatorParamsLoanMiddleware, this.loanController.loanOne);
        this.router.put('/:userId/:bookId', jwtMiddleware, validatorParamsLoanMiddleware, validatorUpdateLoanMiddleware, this.loanController.devolutionOne);
    }
}
/**
    * @swagger
    * /loans:
    *   get:
    *       summary: Get all loans
    *       description: Get all loans in DB
    *       responses:
    *           '200':
    *               description: Get all loans Successfull
    *           '400':
    *               description: Not Authorization
*/
/**
    * @swagger
    * /loans/{userId}/{bookId}:
    *   post:
    *       summary: create one loan
    *       description: create one loan with userId and bookId
    *       parameters:
    *           - name: userId
    *             in: path
    *             required: true
    *             description: The id of the user to loan book
    *             schema:
    *               type: integer
    *           - name: bookId
    *             in: path
    *             required: true
    *             description: The id of the book to loan
    *             schema:
    *               type: integer
    *       responses:
    *           '200':
    *               description: Create book Successfull
    *           '500':
    *               description: Error in loan book
    *           '400':
    *               description: Not Authorization
*/
/**
    * @swagger
    * /loans/{userId}/{bookId}:
    *   put:
    *       summary: devolution book
    *       description: devolution book in DB
    *       parameters:
    *           - name: userId
    *             in: path
    *             required: true
    *             description: The id of the user to devolution book
    *             schema:
    *               type: integer
    *           - name: bookId
    *             in: path
    *             required: true
    *             description: The id of the book to devolution
    *             schema:
    *               type: integer
    *       responses:
    *           '200':
    *               description: Create book Successfull
    *           '500':
    *               description: Error in loan book
    *           '400':
    *               description: Not Authorization
*/