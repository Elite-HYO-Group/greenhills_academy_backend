import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, isEmail } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  password: string;
}
