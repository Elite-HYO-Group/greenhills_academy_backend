import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateGalleryDto {
  @ApiProperty({ required: false, example: 'Updated Attachment URL' })
  @IsOptional()
  @IsString()
  attachmentUrl?: string;

  @ApiProperty({ required: false, example: false })
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
}
