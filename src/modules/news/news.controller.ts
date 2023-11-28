import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CreateNewsDto } from './create.dto';
import * as fs from 'fs';
import * as path from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';

@Controller('/api/v1/news')
@ApiTags('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Get()
  async findAll() {
    const newsItems = await this.newsService.findAll();
    return newsItems;
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    const newsItem = await this.newsService.findOneById(id);
    if (!newsItem) {
      throw new NotFoundException('News not found');
    }
    return newsItem;
  }

  @Get('/category/:categoryName')
  async findBycategoryName(@Param('categoryName') categoryName: string) {
    const newsItem = await this.newsService.findByCategory(categoryName);
    if (!newsItem) {
      throw new NotFoundException('News not found');
    }
    return newsItem;
  }

  @Post()
  async create(@Body() createNewsDto: CreateNewsDto) {
    const existingNews = await this.newsService.create(createNewsDto);
    return existingNews;
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() updateNewsDto: CreateNewsDto) {
    const updatedNews = await this.newsService.update(id, updateNewsDto);
    return updatedNews;
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    await this.newsService.remove(id);
    return { message: 'News deleted successfully' };
  }

  @Post('upload-image/:newsId')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        image: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadImage(
    @UploadedFile() image: Multer.File,
    @Param('newsId') newsId: string,
  ) {
    const rootDirectory = process.cwd();
    const uploadDirectory = path.join(
      rootDirectory,
      'src',
      'common',
      'uploads',
      'section',
    );

    if (!fs.existsSync(uploadDirectory)) {
      fs.mkdirSync(uploadDirectory, { recursive: true });
    }

    const imagePath = path.join(
      uploadDirectory,
      `${Date.now()}-${image.originalname}`,
    );

    try {
      fs.writeFileSync(imagePath, image.buffer);
    } catch (error) {
      console.error('Error saving image:', error);
      throw new Error('Failed to save the image.');
    }

    return this.newsService.updateNewsImage(newsId, imagePath);
  }
}
