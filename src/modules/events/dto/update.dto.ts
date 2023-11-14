// update-event.dto.ts
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString,IsOptional, IsString } from "class-validator";

export class UpdateEventDto {
  @ApiProperty({required: false, example: 'Updated Event Title'})
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({required: false, example: 'Updated Event Description'})
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({required: false, example: '2023-12-31'})
  @IsOptional()
  @IsDateString()
  date?: string;

  @ApiProperty({required: false, example: '10:00 AM'})
  @IsOptional()
  @IsString()
  startTime?: string;

  @ApiProperty({required: false, example: '06:00 PM'})
  @IsOptional()
  @IsString()
  endTime?: string;

  @ApiProperty({required: false, example: 'Updated Event Location'})
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({required: false, example: 'Updated Cover Photo URL'})
  @IsOptional()
  @IsString()
  coverPhotoUrl?: string;

  @ApiProperty({required: false, example: 'Updated Picture URL'})
  @IsOptional()
  @IsString()
  pictureUrl?: string;

  @ApiProperty({required: false, example: false})
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
}
