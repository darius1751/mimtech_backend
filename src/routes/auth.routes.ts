import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { validatorCreateUserMiddleware } from "../middlewares/create";

export class AuthRouter {
    public readonly router: Router;
    private readonly authController: AuthController;

    constructor() {
        this.router = Router();
        this.authController = new AuthController();
        this.createRoutes();
    }
    private createRoutes(): void {
        this.router.post('/login', this.authController.login);
        this.router.post('/register', validatorCreateUserMiddleware, this.authController.register);
    }
}