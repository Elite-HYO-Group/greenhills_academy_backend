import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateAlbumDto {
  @ApiProperty({required: true, example: 'Album Title'})
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({required: false, example: true})
  @IsBoolean()
  isPublic?: boolean;
}
