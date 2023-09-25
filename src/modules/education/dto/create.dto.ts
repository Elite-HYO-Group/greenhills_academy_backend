import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateEducationDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  programName: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  overview: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  curriculum: string;
     
}
