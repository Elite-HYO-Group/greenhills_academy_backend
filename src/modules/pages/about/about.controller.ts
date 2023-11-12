import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AboutService } from './about.service';
import { CreateAboutDto } from './dto/create.dto';
import { UpdateAboutDto } from './dto/updated.dto';

@Controller('about')
@ApiTags('/api/v1/pages/about')
export class AboutController {
  constructor(private aboutService: AboutService){}

  @Post()
  async create(
    @Body() createAboutDto: CreateAboutDto
  ){
    return this.aboutService.create(createAboutDto);
  }
  @Get()
  async getHomeInfo(){
    return this.aboutService.getAboutPageData();
  }
  
  @Put()
  @HttpCode(200)
  async updateAboutPage(
    @Body() updateDto: UpdateAboutDto
  ){
    return this.aboutService.update(updateDto)
  }

  @Delete("/id")
  @HttpCode(200)
  async deletePage(
    @Param("id") id: string
  ){
    return this.aboutService.deletePage(id)
  }
}
