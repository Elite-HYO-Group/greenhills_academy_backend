import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException
} from '@nestjs/common';
import { NewsService } from './news.service'; 
import { ApiTags } from '@nestjs/swagger';
import { CreateNewsDto } from './create.dto';

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
}
