import { IsDateString, IsNumber } from "class-validator";

export class CreateLoanDAO{
    @IsNumber()
    public userId: number;

    @IsNumber()
    public bookId: number;

    @IsDateString()
    public loanDate: string;

    @IsDateString()
    public returnDate: string;
}