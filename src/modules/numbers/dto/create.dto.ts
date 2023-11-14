import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AddNumberSectionDto {
    @ApiProperty({required: true, example: 'LEARNERS'})
    @IsNotEmpty()
    @IsString()
    sectionSlug: string;

    @ApiProperty({required: true, example: 'Learners'})
    @IsNotEmpty()
    @IsString()
    sectionTitle: string;

    @ApiProperty({required: true, example: 2050})
    @IsNotEmpty()
    @IsNumber()
    number: number;

}