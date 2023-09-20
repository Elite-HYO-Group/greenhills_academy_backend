import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSectionOverviewDto {
  @ApiProperty({
    required: true,
    description: 'The INTRO of the section.',
  })
  @IsNotEmpty()
  @IsString()
  intro: string;

  @ApiProperty({
    required: true,
    description: 'The INTRO of the section.',
  })
  @IsNotEmpty()
  @IsString()
  overview: string;
}
