import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCareerDto {
  @ApiProperty({ required: true, example: 'Event Title' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  slug: string;

  @ApiProperty({ required: true, example: 'Full time' })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({ required: true, example: 'Event Description' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ required: true, example: 'Finance' })
  @IsNotEmpty()
  @IsString()
  industry: string;

  @ApiProperty({ required: true, example: 'Entry Level' })
  @IsNotEmpty()
  @IsString()
  jobLevel: string;

  @ApiProperty({ required: true, example: '2-4 Years' })
  @IsNotEmpty()
  @IsString()
  experience: string;

  @ApiProperty({ required: true, example: '500,000 - 1,000,000' })
  @IsNotEmpty()
  @IsString()
  salary: string;

  @ApiProperty({ required: true, example: '2023-12-31' })
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @ApiProperty({ required: true, example: '10:00 AM' })
  @IsNotEmpty()
  @IsString()
  startTime: string;

  @ApiProperty({ required: true, example: '12/01/2024' })
  @IsNotEmpty()
  @IsString()
  deadline: string;

  @ApiProperty({ required: false, example: 'Cover Photo URL' })
  @IsOptional()
  @IsString()
  coverPhotoUrl?: string;

  @ApiProperty({ required: false, example: true })
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @ApiProperty({ required: false, example: true })
  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;
}
