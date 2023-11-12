import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HomeService } from './home.service';
import { CreateHomeDto, UpdateHomeDto } from './dto/create.dto';

@Controller('/api/v1/pages/home')
@ApiTags('/api/v1/pages/home')
export class HomeController {
  constructor(private homeService: HomeService){}

  @Post()
  async create(
    @Body() createHomeDto: CreateHomeDto
  ){
    return this.homeService.create(createHomeDto);
  }
  @Get()
  async getHomeInfo(){
    return this.homeService.getHomePageData();
  }
  
  @Put()
  @HttpCode(200)
  async updateHomePage(
    @Body() updateDto: UpdateHomeDto
  ){
    return this.homeService.update(updateDto)
  }

  @Delete("/id")
  @HttpCode(200)
  async deletePage(
    @Param("id") id: string
  ){
    return this.homeService.deletePage(id)
  }
}
