import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateNewsDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  date: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  slug: string;

  @ApiProperty({
    required: true,
  })
  @IsOptional()
  type: string;

  @ApiProperty({
    required: true,
  })
  @IsOptional()
  imageUrl: string;
}
