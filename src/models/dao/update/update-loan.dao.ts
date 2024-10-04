import { IsDateString, IsNumber, IsOptional } from "class-validator";

export class UpdateLoanDAO {
    @IsNumber()
    @IsOptional()
    public userId: number;

    @IsNumber()
    @IsOptional()
    public bookId: number;

    @IsDateString()
    @IsOptional()
    public loanDate: string;

    @IsDateString()
    @IsOptional()
    public returnDate: string;
}