import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateContactDto {
    @ApiProperty({required: true, example: 'info@greenhillsacademy.rw'})
    @IsOptional()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({required: true, example: '+250 735 832 348'})
    @IsOptional()
    @IsString()
    phoneNumber: string;

    @ApiProperty({required: true, example: 'Kigali KG 278 St, Nyarutarama Kigali'})
    @IsOptional()
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
    @IsOptional()
    workingDays: {label: string, value: string}[]
}