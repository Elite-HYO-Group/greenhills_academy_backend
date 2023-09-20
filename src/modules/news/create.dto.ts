import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty } from 'class-validator';
import { newsEnum } from 'src/common/enum/news-enum';

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
  content: string;

  @ApiProperty({
    required: true,
    type: 'enum', 
    enum: newsEnum,
    default: newsEnum.NEWS, 
  })
  @IsNotEmpty()
  category: newsEnum;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  image: string;
}
