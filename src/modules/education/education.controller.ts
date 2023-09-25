import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import * as path from 'path';
import { Multer } from 'multer';

@Controller('education')
@ApiTags('/api/v1/education')
export class EducationController {
  constructor(private educationService: EducationService) {}

  @Get()
  async findAll() {
    const education = await this.educationService.findAll();
    return education;
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    const education = await this.educationService.findOneById(id);
    if (!education) {
      throw new NotFoundException('Education not found');
    }
    return education;
  }

  @Get('/:programName')
  async findBycategoryName(@Param('programName') programName: string) {
    const education = await this.educationService.findByCategory(programName);
    if (!education) {
      throw new NotFoundException('Education not found');
    }
    return education;
  }

  @Post()
  async create(@Body() createEducationDto: CreateEducationDto) {
    const education = await this.educationService.create(createEducationDto);
    return education;
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateEducationDto: CreateEducationDto,
  ) {
    const updatedEducation = await this.educationService.update(
      id,
      updateEducationDto,
    );
    return updatedEducation;
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    await this.educationService.remove(id);
    return { message: 'Education deleted successfully' };
  }

  @Post('upload-image/:id')
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
    @Param('id') id: string,
  ) {
    const rootDirectory = process.cwd();
    const uploadDirectory = path.join(
      rootDirectory,
      'src',
      'common',
      'uploads',
      'education',
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

    return this.educationService.updateEducationImage(id, imagePath);
  }
}
