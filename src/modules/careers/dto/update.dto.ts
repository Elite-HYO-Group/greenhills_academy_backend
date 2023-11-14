import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsOptional, IsString } from "class-validator";

export class UpdateCareerDto {
  @ApiProperty({required: false, example: 'Updated Job Title'})
  @IsOptional()
  @IsString()
  jobTitle?: string;

  @ApiProperty({required: false, example: 'Updated Job Description'})
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({required: false, example: 'Updated Industry'})
  @IsOptional()
  @IsString()
  industry?: string;

  @ApiProperty({required: false, example: 'Updated Job Level'})
  @IsOptional()
  @IsString()
  jobLevel?: string;

  @ApiProperty({required: false, example: 'Updated Experience'})
  @IsOptional()
  @IsString()
  experience?: string;

  @ApiProperty({required: false, example: '2024-12-31T23:59:59Z'})
  @IsOptional()
  @IsDateString()
  deadline?: string;

  @ApiProperty({required: false, example: false})
  @IsOptional()
  @IsBoolean()
  isFullTime?: boolean;

  @ApiProperty({required: false, example: 'Updated Picture URL'})
  @IsOptional()
  @IsString()
  pictureUrl?: string;

  @ApiProperty({required: false, example: false})
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
}
