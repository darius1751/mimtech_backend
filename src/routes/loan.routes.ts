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
        this.router.put('/:userId/:bookId', jwtMiddleware, validatorParamsLoanMiddleware, validatorUpdateLoanMiddleware,this.loanController.devolutionOne);
    }
}