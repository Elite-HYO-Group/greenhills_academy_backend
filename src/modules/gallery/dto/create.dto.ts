import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateGalleryDto {
  @ApiProperty({ required: true, example: 'Attachment URL' })
  @IsNotEmpty()
  @IsString()
  attachmentUrl: string;

  @ApiProperty({ required: false, example: true })
  @IsBoolean()
  isPublic?: boolean;
}
