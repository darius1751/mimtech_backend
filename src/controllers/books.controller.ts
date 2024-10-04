import { Request, Response } from "express";
import { BookService } from "../services/book.service";

export class BooksController {

    public readonly bookService: BookService;

    constructor() {
        this.bookService = new BookService();
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.createOne = this.createOne.bind(this);
        this.updateOne = this.updateOne.bind(this);
        this.deleteOne = this.deleteOne.bind(this);
    }
    async getAll(request: Request, response: Response) {
        try {
            const books = await this.bookService.getAll();
            response.json(books);
        } catch (error) {
            response.status(500).json(error)
        }
    }

    async getOne(request: Request, response: Response) {
        try {
            const { id } = request.params;
            console.log({ id })
            const book = await this.bookService.getOneById(+id);
            response.json(book);
        } catch (error) {
            response.status(500).json(error);
        }
    }

    async createOne(request: Request, response: Response) {
        try {
            const book = await this.bookService.createOne(request.body);
            response.json(book);
        } catch (error) {
            response.status(500).json(error);
        }
    }

    async updateOne(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const book = await this.bookService.updateOne(+id, request.body);
            response.json(book);
        } catch (error) {
            response.status(500).json(error);
        }
    }

    async deleteOne(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const book = await this.bookService.deleteOne(+id);
            response.json(book);
        } catch (error) {
            response.status(500).json(error);
        }
    }
}