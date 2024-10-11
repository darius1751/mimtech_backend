import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
    private authService: AuthService;
    constructor() {
        this.authService = new AuthService();
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }

    async register(req: Request, res: Response) {
        try {
            const user = await this.authService.register(req.body);
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async login(req: Request, res: Response) {
        try {
            console.log("Ok")
            const user = await this.authService.login(req.body);
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}