import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateAlbumDto } from './dto/create.dto';
import { UpdateAlbumDto } from './dto/update.dto';

@Injectable()
export class AlbumsService {
  constructor(private prismaService: PrismaService) {}

  async createAlbum(createAlbumDto: CreateAlbumDto){
    return this.prismaService.album.create({
      data: createAlbumDto,
    });
  }

  async getAll(){
    return this.prismaService.album.findMany({
        include: {
          galleries: true, // Fetches associated galleries with each album
        },
      });
  }
  async updateAlbum(id: string, updateAlbumDto: UpdateAlbumDto){
    const album = await this.findAlbumById(id);
    if(!album) throw new NotFoundException("Album not found");

    return this.prismaService.album.update({
      where: { id },
      data: updateAlbumDto,
    });
  }

  async deleteAlbum(id: string){
    const album = await this.findAlbumById(id);
    if(!album) throw new NotFoundException("Album not found");

    return this.prismaService.album.delete({
      where: { id },
    });
  }

  async getAlbumById(id: string){
    return this.findAlbumById(id);
  }

  private async findAlbumById(id: string){
    const album = await this.prismaService.album.findUnique({ where: { id } });

    if (!album) {
      throw new NotFoundException(`Album with ID ${id} not found`);
    }

    return album;
  }
}
