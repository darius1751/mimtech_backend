import { IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreateBookDAO {
    @IsString()
    @MinLength(4)
    public title: string;

    @IsString()
    @MinLength(4)
    public author: string;

    @IsPositive()
    @Min(1900)
    public publicationYear: number;
}
