import { IsEmail, IsString, MIN, MinLength } from "class-validator";

export class LoginUserDao { 
    @IsEmail()
    public email: string;

    @IsString()
    @MinLength(4)
    public password: string;
}