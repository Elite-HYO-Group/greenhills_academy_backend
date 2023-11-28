import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateGalleryDto } from './dto/create.dto';
import { UpdateGalleryDto } from './dto/update.dto';

@Injectable()
export class GalleryService {
  constructor(private readonly prismaService: PrismaService) {}

  async createGallery(createGalleryDto: CreateGalleryDto) {
    return this.prismaService.gallery.create({
      data: createGalleryDto,
    });
  }

  async getAllItems() {
    return this.prismaService.gallery.findMany();
  }

  async updateGallery(id: string, updateGalleryDto: UpdateGalleryDto) {
    const gallery = await this.findGalleryById(id);
    if (!gallery) throw new BadRequestException('Gallery item not found');

    return this.prismaService.gallery.update({
      where: { id },
      data: updateGalleryDto,
    });
  }

  async deleteGallery(id: string) {
    const gallery = await this.findGalleryById(id);
    if (!gallery) throw new BadRequestException('Gallery item not found');

    return this.prismaService.gallery.delete({
      where: { id },
    });
  }

  async getGalleryById(id: string) {
    return this.findGalleryById(id);
  }

  private async findGalleryById(id: string) {
    const gallery = await this.prismaService.gallery.findUnique({
      where: { id },
    });

    if (!gallery) {
      throw new NotFoundException(`Gallery with ID ${id} not found`);
    }

    return gallery;
  }
}
