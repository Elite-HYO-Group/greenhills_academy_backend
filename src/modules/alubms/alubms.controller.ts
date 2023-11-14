import { Body, Controller, Param, Post, Get, Put, Delete } from '@nestjs/common';
import { AlbumsService } from './alubms.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateAlbumDto } from './dto/create.dto';
import { UpdateAlbumDto } from './dto/update.dto';

@Controller('api/v1/albums')
@ApiTags('api/v1/albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Post()
  async createAlbum(@Body() createAlbumDto: CreateAlbumDto) {
    return this.albumsService.createAlbum(createAlbumDto);
  }

  @Get()
  async getAllAlbums() {
    return this.albumsService.getAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  async getAlbumById(@Param('id') id: string) {
    return this.albumsService.getAlbumById(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id' })
  async updateAlbum(
    @Param('id') id: string,
    @Body() updateAlbumDto: UpdateAlbumDto,
  ) {
    return this.albumsService.updateAlbum(id, updateAlbumDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  async deleteAlbum(@Param('id') id: string) {
    return this.albumsService.deleteAlbum(id);
  }
}
