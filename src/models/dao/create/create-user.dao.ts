import { IsEmail, IsString, MinLength } from "class-validator";
import 'reflect-metadata';
export class CreateUserDAO {
    @IsString()
    @MinLength(4)
    public name: string;

    @IsEmail()
    public email: string;

    @IsString()
    @MinLength(8)
    public password: string;
}