import { IsOptional, IsPositive, IsString, Min, MinLength } from "class-validator";

export class UpdateBookDAO {
    @IsString()
    @MinLength(4)
    @IsOptional()
    public title?: string;

    @IsString()
    @MinLength(4)
    @IsOptional()
    public author?: string;

    @IsPositive()
    @Min(1900)
    @IsOptional()
    public publicationYear?: number;
}
