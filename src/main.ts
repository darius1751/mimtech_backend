import express from "express";
import cors from 'cors';
import { BookRouter, AuthRouter, LoanRouter } from "./routes";

const main = async () => {
    const app = express();

    app.use(cors())
    app.use(express.json())

    const bookRouter = new BookRouter();
    const authRouter = new AuthRouter();
    const loanRouter = new LoanRouter();
    app.use("/api/books", bookRouter.router);
    app.use("/api/auth", authRouter.router);
    app.use("/api/loans", loanRouter.router);

    const port = process.env.PORT || 4000;

    app.listen(port, async () => {
        console.log(`Run app in : ${port}`);
    });
}
main();