import { Request, Response } from "express";
import { LoanService } from "../services/loan.service";

export class LoanController {
    public readonly loanService: LoanService;
    constructor() {
        this.loanService = new LoanService();
        this.devolutionOne = this.devolutionOne.bind(this);
        this.loanOne = this.loanOne.bind(this);
        this.getAll = this.getAll.bind(this);
    }
    async loanOne(request: Request, response: Response) {
        try {
            const { userId, bookId } = request.params;
            const loan = await this.loanService.loanOne(+userId, +bookId);
            response.json(loan);
        } catch (error) {
            response.status(500).json(error);
        }
    }

    async devolutionOne(request: Request, response: Response) {
        try {
            const { userId, bookId } = request.params;
            const loan = await this.loanService.devolutionOne(+userId, +bookId);
            response.json(loan);
        } catch (error) {
            response.status(500).json(error);
        }
    }

    async getAll(request: Request, response: Response) {
        const loans = await this.loanService.getAll();
        response.json(loans);
    }
}