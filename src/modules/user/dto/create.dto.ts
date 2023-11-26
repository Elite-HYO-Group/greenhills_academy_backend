import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  username: string;

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
  phoneNumber: string;

  @ApiProperty({
    required: true,
    example: 'IT',
  })
  @IsNotEmpty()
  department: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    required: true,
    example: 'user',
  })
  @IsNotEmpty()
  role: string;

  @ApiProperty({
    required: true,
    example: ['read', 'write'],
  })
  permissions: string[];

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  profilePicture: string;
}

export class UpdateUserDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({
    required: true,
    example: 'IT',
  })
  @IsNotEmpty()
  department: string;

  @ApiProperty({
    required: true,
    example: 'user',
  })
  @IsNotEmpty()
  role: string;

  @ApiProperty({
    required: true,
    example: ['read', 'write'],
  })
  permissions: string[];

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  profilePicture: string;
}
