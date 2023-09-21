import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateSectionOverviewDto } from './overview.dto';
import { Type } from 'class-transformer';

export class CreateSectionDto {
  @ApiProperty({
    required: true,
    description: 'The name of the section.',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
    description: 'A brief description of the section.',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    required: true,
    description: 'A slogan or tagline for the section.',
  })
  @IsNotEmpty()
  @IsString()
  slogan: string;

  // @ApiProperty({
  //   required: true,
  //   description: 'The image URL or path for the section.',
  // })
  // @IsNotEmpty()
  // @IsString()
  // image: string;

  @ApiProperty({
    required: true,
    description: 'The section overview.',
    type: CreateSectionOverviewDto,
  })
  @ValidateNested()
  @Type(() => CreateSectionOverviewDto)
  overview: CreateSectionOverviewDto;
}
