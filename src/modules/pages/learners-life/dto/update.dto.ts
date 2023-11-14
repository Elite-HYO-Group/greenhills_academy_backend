import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateLearnersLifeDto {
    @ApiProperty({required: true, example: '/images/1.png'})
    @IsOptional()
    @IsString()
    bannerImageUrl: string;

    @ApiProperty({required: true, example: 'Diverse Choices: Choose from over 35 clubs and extracurricular activities, ensuring that education extends beyond the classroom.'})
    @IsOptional()
    @IsString()
    description: string;
}