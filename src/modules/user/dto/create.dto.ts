import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, isEmail } from "class-validator";


export class CreateUserDto {
    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    firstname: string;

    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    lastname: string;

    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    password: string;

    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    roleId: string;

}