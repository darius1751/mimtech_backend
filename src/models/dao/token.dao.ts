import { IsJWT } from "class-validator";

export class TokenDao { 
    @IsJWT()
    public token: string;
}