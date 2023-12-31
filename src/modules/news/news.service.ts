import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateNewsDto } from './create.dto';

@Injectable()
export class NewsService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.news.findMany();
  }

  async findOneById(id: string) {
    const newsItem = await this.prismaService.news.findUnique({
      where: { id },
    });
    return newsItem;
  }

  async findByCategory(type: string) {
    const newsItem = await this.prismaService.news.findMany({
      where: { type },
    });
    return newsItem;
  }

  async create(createNewsDto: CreateNewsDto) {
    const existingNews = await this.prismaService.news.findUnique({
      where: { title: createNewsDto.title },
    });
    if (existingNews) {
      throw new BadRequestException('News with this name already exists');
    }
    return await this.prismaService.news.create({
      data: createNewsDto,
    });
  }

  async update(id: string, updateNewsDto: CreateNewsDto) {
    const existingNews = await this.findOneById(id);
    if (!existingNews) {
      throw new NotFoundException('News not found');
    }
    return await this.prismaService.news.update({
      where: { id },
      data: updateNewsDto,
    });
  }

  async remove(id: string) {
    const existingNews = await this.findOneById(id);
    if (!existingNews) {
      throw new NotFoundException('News not found');
    }
    await this.prismaService.news.delete({ where: { id } });
  }

  async updateNewsImage(newsId: string, imagePath: string) {
    const news = await this.prismaService.news.findUnique({
      where: { id: newsId },
    });

    if (!news) {
      throw new NotFoundException('Section not found');
    }

    const updatedNews = await this.prismaService.news.update({
      where: { id: newsId },
      data: { imageUrl: imagePath },
    });

    return updatedNews;
  }
}
