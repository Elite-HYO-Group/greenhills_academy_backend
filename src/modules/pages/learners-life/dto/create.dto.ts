import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateLearnersLifeDto {
    @ApiProperty({required: true, example: '/images/1.png'})
    @IsNotEmpty()
    @IsString()
    bannerImageUrl: string;

    @ApiProperty({required: true, example: 'Diverse Choices: Choose from over 35 clubs and extracurricular activities, ensuring that education extends beyond the classroom.'})
    @IsNotEmpty()
    @IsString()
    description: string;
}