import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';
import { CreateGalleryDto } from './dto/create.dto';
import { UpdateGalleryDto } from './dto/update.dto';

@Controller('/api/v1/gallery')
@ApiTags('/api/v1/gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post()
  @ApiBody({ type: CreateGalleryDto })
  async createGallery(@Body() createGalleryDto: CreateGalleryDto){
    return this.galleryService.createGallery(createGalleryDto);
  }

  @Get('')
  async getAll(){
    return this.galleryService.getAllItems();
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  async getGalleryById(@Param('id') id: string){
    return this.galleryService.getGalleryById(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ type: UpdateGalleryDto })
  async updateGallery(
    @Param('id') id: string,
    @Body() updateGalleryDto: UpdateGalleryDto,
  ){
    return this.galleryService.updateGallery(id, updateGalleryDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  async deleteGallery(@Param('id') id: string){
    return this.galleryService.deleteGallery(id);
  }
}
