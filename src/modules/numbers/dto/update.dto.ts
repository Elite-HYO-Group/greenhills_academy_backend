import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateNumberSectionDto {
    @ApiProperty({required: true, example: 'Learners'})
    @IsOptional()
    @IsString()
    sectionTitle: string;

    @ApiProperty({required: true, example: 2050})
    @IsOptional()
    @IsNumber()
    number: number;

}