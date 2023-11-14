import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateQueryDto {
    @ApiProperty({required: true,})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({required: true})
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({required: true})
    @IsNotEmpty()
    @IsString()
    message: string;
}