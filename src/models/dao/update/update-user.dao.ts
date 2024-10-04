import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";
import 'reflect-metadata';
export class UpdateUserDAO {
    @IsString()
    @MinLength(4)
    @IsOptional()
    public name: string;

    @IsEmail()
    @IsOptional()
    public email: string;

    @IsString()
    @MinLength(8)
    @IsOptional()
    public password: string;
}