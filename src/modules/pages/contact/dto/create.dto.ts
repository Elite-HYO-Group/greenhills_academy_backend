import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateContactDto {
    @ApiProperty({required: true, example: 'info@greenhillsacademy.rw'})
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({required: true, example: '+250 735 832 348'})
    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @ApiProperty({required: true, example: 'Kigali KG 278 St, Nyarutarama Kigali'})
    @IsNotEmpty()
    @IsString()
    location: string;

    @ApiProperty({required: true, example: [
        {
            label: 'Sunday',
            value: 'Closed'
        },
        {
            label: 'Saturday',
            value: 'Closed'
        },
        {
            label: 'Monday - Friday',
            value: 'Close7:00 AM - 5:00 PMd'
        }
    ]})
    @IsNotEmpty()
    workingDays: {label: string, value: string}[]
}