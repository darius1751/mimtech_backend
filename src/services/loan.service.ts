import { Repository } from "typeorm";
import { Loan } from "../models/loan.entity";
import { AppDataSource } from "../connection/connection.config";

export class LoanService {
    private readonly loanRepository: Repository<Loan>;

    constructor() {
        this.loanRepository = AppDataSource.getRepository(Loan);
    }

    async loanOne(userId: number, bookId: number) {
        try {
            const loanDate = new Date().toJSON();
            return await this.loanRepository.save({ user: { id: userId }, book: { id: bookId }, loanDate });
        } catch (error) {
            throw { error }
        }
    }
    async devolutionOne(userId: number, bookId: number) {
        try {
            const { id } = await this.getOne(userId, bookId);
            const returnDate = new Date().toJSON();
            return await this.loanRepository.save({ id, returnDate });
        } catch (error) {
            throw { error }
        }
    }
    async getAll() {
        return await this.loanRepository.find({
            relations: {
                book: true,
            }
        });
    }

    async getOne(userId: number, bookId: number) {
        try {
            return await this.loanRepository.findOneByOrFail({ book: { id: bookId }, user: { id: userId } });
        } catch (error) {
            throw { error }
        }
    }
}