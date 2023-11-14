import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEventDto {
  @ApiProperty({required: true, example: 'Event Title'})
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({required: true, example: 'Event Description'})
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({required: true, example: '2023-12-31'})
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @ApiProperty({required: true, example: '10:00 AM'})
  @IsNotEmpty()
  @IsString()
  startTime: string;

  @ApiProperty({required: true, example: '06:00 PM'})
  @IsNotEmpty()
  @IsString()
  endTime: string;

  @ApiProperty({required: true, example: 'Event Location'})
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({required: false, example: 'Cover Photo URL'})
  @IsOptional()
  @IsString()
  coverPhotoUrl?: string;

  @ApiProperty({required: true, example: 'Picture URL'})
  @IsNotEmpty()
  @IsString()
  pictureUrl: string;

  @ApiProperty({required: false, example: true})
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
}
