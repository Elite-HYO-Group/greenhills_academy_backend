import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AdmissionPageService } from './admission-page.service';
import { CreateAdmissionPageDto } from './dto/create.dto';
import { UpdateAdmissionPageDto } from './dto/update.dto';

@Controller('/api/v1/pages/admission')
@ApiTags('/api/v1/pages/admission')
export class AdmissionPageController {
  constructor(private admissionPageService: AdmissionPageService){}

  @Post()
  async create(
    @Body() createAdmissionPageDto: CreateAdmissionPageDto
  ){
    return this.admissionPageService.create(createAdmissionPageDto);
  }
  @Get()
  async getHomeInfo(){
    return this.admissionPageService.getAdmissionPageData();
  }
  
  @Put()
  @HttpCode(200)
  async updateAdmissionPage(
    @Body() updateAdmissionPageDto: UpdateAdmissionPageDto
  ){
    return this.admissionPageService.update(updateAdmissionPageDto)
  }

  @Delete("/id")
  @HttpCode(200)
  async deletePage(
    @Param("id") id: string
  ){
    return this.admissionPageService.deletePage(id)
  }
}
