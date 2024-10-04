import { Repository } from "typeorm";
import { Book } from "../models/book.entity";
import { AppDataSource } from "../connection/connection.config";
import { CreateBookDAO } from "../models/dao/create";
import { UpdateBookDAO } from "../models/dao/update";

export class BookService {
    private readonly bookRepository: Repository<Book>;

    constructor() {
        this.bookRepository = AppDataSource.getRepository(Book);
    }
    async getAll() {
        try {
            return await this.bookRepository.find();
        } catch (error) {
            throw { error };
        }
    }

    async getOneById(id: number) {
        try {
            return await this.bookRepository.findOneByOrFail({ id });
        } catch (error) {
            throw { error };
        }
    }

    async existById(id: number) {
        return await this.bookRepository.existsBy({ id });
    }

    async createOne(createBookDao: CreateBookDAO) {
        try {
            return await this.bookRepository.save(createBookDao);
        } catch (error) {
            throw { error };
        }
    }

    async updateOne(id: number, updateBookDao: UpdateBookDAO) {
        try {
            await this.bookRepository.update({ id }, updateBookDao);
            return await this.getOneById(id);            
        } catch (error) {
            throw { error };
        }
    }

    async deleteOne(id: number) {
        try {
            const book = await this.getOneById(id);
            await this.bookRepository.delete({ id });
            return book;
        } catch (error) {
            throw { error }
        }
    }
}