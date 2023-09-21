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
import { SectionsService } from './sections.service';
import { CreateSectionDto } from './dto/create.dto';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';
import * as fs from 'fs'; 
import * as path from 'path'; 

@Controller('/api/v1/sections')
@ApiTags('sections')
export class SectionsController {
  constructor(private sectionsService: SectionsService) {}

  @Get()
  async findAll() {
    const sections = await this.sectionsService.findAll();
    return sections;
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    const section = await this.sectionsService.findOneById(id);
    if (!section) {
      throw new NotFoundException('Section not found');
    }
    return section;
  }

  @Post()
  async create(@Body() createSectionDto: CreateSectionDto) {
    const section = await this.sectionsService.create(createSectionDto);
    return section;
  }

  @Post('upload-image/:sectionId')
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
    @Param('sectionId') sectionId: string, 
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

    return this.sectionsService.updateSectionImage(sectionId, imagePath);
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateSectionDto: CreateSectionDto,
  ) {
    const existingSection = await this.sectionsService.findOneById(id);
    if (!existingSection) {
      throw new NotFoundException('Section not found');
    }
    const updatedSection = await this.sectionsService.update(
      id,
      updateSectionDto,
    );
    return updatedSection;
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const existingSection = await this.sectionsService.findOneById(id);
    if (!existingSection) {
      throw new NotFoundException('Section not found');
    }
    await this.sectionsService.remove(id);
    return { message: 'Section deleted successfully' };
  }
}
