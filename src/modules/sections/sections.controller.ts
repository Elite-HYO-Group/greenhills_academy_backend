import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
  BadRequestException,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { SectionsService } from './sections.service';
import { CreateSectionDto } from './dto/create.dto';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from './../../common/config/multer.config';
import { Multer } from 'multer';

@Controller('/api/v1/sections')
@ApiTags('sections')
export class SectionsController {
  constructor(private sectionsService: SectionsService) {}

  @Get()
  async findAll() {
     console.log("egokoooooooooo")
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
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        image: {
          type: 'string',
          format: 'binary',
        },
        name: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        slogan: {
          type: 'string',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @UploadedFile() image: Multer.File,
    @Body() createSectionDto: CreateSectionDto,
  ) {
    console.log("Yooooooooooo")
    console.log(image.path);
    createSectionDto.image = image.path;

    console.log('stuff', createSectionDto);
    const section = await this.sectionsService.create(createSectionDto);
    return section;
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
