import { IsNumber, IsPositive } from "class-validator";

export class ParamsLoanDao {
    @IsNumber()
    @IsPositive()
    public userId: number;

    @IsNumber()
    @IsPositive()
    public bookId: number;
}