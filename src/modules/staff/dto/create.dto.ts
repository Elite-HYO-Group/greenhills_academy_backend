import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateStaffDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  gender: string;
}
