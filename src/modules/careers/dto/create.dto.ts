import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCareerDto {
  @ApiProperty({required: true, example: 'Job Title'})
  @IsNotEmpty()
  @IsString()
  jobTitle: string;

  @ApiProperty({required: true, example: 'Job Description'})
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({required: true, example: 'Industry'})
  @IsNotEmpty()
  @IsString()
  industry: string;

  @ApiProperty({required: true, example: 'Job Level'})
  @IsNotEmpty()
  @IsString()
  jobLevel: string;

  @ApiProperty({required: true, example: 'Experience'})
  @IsNotEmpty()
  @IsString()
  experience: string;

  @ApiProperty({required: true, example: '2023-12-31T23:59:59Z'})
  @IsNotEmpty()
  @IsDateString()
  deadline: string;

  @ApiProperty({required: true, example: true})
  @IsNotEmpty()
  @IsBoolean()
  isFullTime: boolean;

  @ApiProperty({required: true, example: 'Picture URL'})
  @IsNotEmpty()
  @IsString()
  pictureUrl: string;

  @ApiProperty({required: false, example: true})
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
}
