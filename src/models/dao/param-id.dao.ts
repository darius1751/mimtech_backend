import { IsNumber, IsPositive } from "class-validator";

export class ParamIdDao {
    @IsNumber()
    @IsPositive()
    public id: number;
}