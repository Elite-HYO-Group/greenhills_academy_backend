import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateCareerDto {
  @ApiProperty({ required: true, example: 'Event Title' })
  @IsOptional()
  @IsString()
  title: string;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  slug: string;

  @ApiProperty({ required: true, example: 'Full time' })
  @IsOptional()
  @IsString()
  type: string;

  @ApiProperty({ required: true, example: 'Event Description' })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({ required: true, example: 'Finance' })
  @IsOptional()
  @IsString()
  industry: string;

  @ApiProperty({ required: true, example: 'Entry Level' })
  @IsOptional()
  @IsString()
  jobLevel: string;

  @ApiProperty({ required: true, example: '2-4 Years' })
  @IsOptional()
  @IsString()
  experience: string;

  @ApiProperty({ required: true, example: '500,000 - 1,000,000' })
  @IsOptional()
  @IsString()
  salary: string;

  @ApiProperty({ required: true, example: '2023-12-31' })
  @IsOptional()
  @IsDateString()
  date: string;

  @ApiProperty({ required: true, example: '10:00 AM' })
  @IsOptional()
  @IsString()
  startTime: string;

  @ApiProperty({ required: true, example: '12/01/2024' })
  @IsOptional()
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
