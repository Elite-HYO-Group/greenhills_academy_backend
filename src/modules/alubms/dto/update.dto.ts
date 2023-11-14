import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsString } from "class-validator";

export class UpdateAlbumDto {
  @ApiProperty({required: false, example: 'Updated Album Title'})
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({required: false, example: false})
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
}
