// update-event.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateEventDto {
  @ApiProperty({ required: true, example: 'Event Title' })
  @IsOptional()
  @IsString()
  title: string;

  @ApiProperty({ required: true, example: 'Event Description' })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  slug: string;

  @ApiProperty({ required: true, example: '2023-12-31' })
  @IsOptional()
  @IsDateString()
  date: string;

  @ApiProperty({ required: true, example: '10:00 AM' })
  @IsOptional()
  @IsString()
  startTime: string;

  @ApiProperty({ required: true, example: '06:00 PM' })
  @IsOptional()
  @IsString()
  endTime: string;

  @ApiProperty({ required: true, example: 'Event Location' })
  @IsOptional()
  @IsString()
  location: string;

  @ApiProperty({ required: false, example: 'Cover Photo URL' })
  @IsOptional()
  @IsString()
  coverPhotoUrl?: string;

  @ApiProperty({
    required: true,
    example: [
      'https://res.cloudinary.com/dbqwmndns/image/upload/v1700301546/GHA/virtual_quufxw.png',
      'https://res.cloudinary.com/dbqwmndns/image/upload/v1700301546/GHA/virtual_quufxw.png',
    ],
  })
  @IsOptional()
  @IsString()
  moreImages: string[];

  @ApiProperty({ required: false, example: true })
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
}
