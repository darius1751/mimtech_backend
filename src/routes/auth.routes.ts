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

/**
    * @swagger
    * /auth/login:
    *   post:
    *       summary: login user
    *       description: login user with email and password
    *       requestBody:
    *           required: true
    *           type: json
    *           example:
    *           content:
    *               application/json:
    *                   schema:
    *                       type: object
    *                       properties:
    *                           email:
    *                               type: string
    *                           password:
    *                               type: string
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
    * /auth/register:
    *   post:
    *       summary: register user
    *       description: register user with email and password
    *       requestBody:
    *           required: true
    *           type: json
    *           example:
    *           content:
    *               application/json:
    *                   schema:
    *                       type: object
    *                       properties:
    *                           name:
    *                               type: string
    *                           email:
    *                               type: string
    *                           password:
    *                               type: string
    *       responses:
    *           '200':
    *               description: Register Successfull
    *           '500':
    *               description: Error in register user
 */