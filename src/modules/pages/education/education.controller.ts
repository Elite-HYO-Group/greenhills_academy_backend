import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EducationService } from './education.service';
import { CreateEducationPageDto } from './dto/create.dto';
import { UpdateEducationPageDto } from './dto/update.dto';

@Controller('/api/v1/pages/education')
@ApiTags('/api/v1/pages/education')
export class EducationPageController {
  constructor(private educationPageService: EducationService){}

  @Post()
  async create(
    @Body() createEducationPageDto: CreateEducationPageDto
  ){
    return this.educationPageService.create(createEducationPageDto);
  }
  @Get()
  async getHomeInfo(){
    return this.educationPageService.getEducationPageData();
  }
  
  @Put()
  @HttpCode(200)
  async updateEducationPage(
    @Body() updateEducationPageDto: UpdateEducationPageDto
  ){
    return this.educationPageService.update(updateEducationPageDto)
  }

  @Delete("/id")
  @HttpCode(200)
  async deletePage(
    @Param("id") id: string
  ){
    return this.educationPageService.deletePage(id)
  }
}
