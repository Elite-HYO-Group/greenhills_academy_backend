import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LearnersLifeService } from './learners-life.service';
import { CreateLearnersLifeDto } from './dto/create.dto';
import { UpdateLearnersLifeDto } from './dto/update.dto';

@Controller('/api/v1/pages/learners-life')
@ApiTags('/api/v1/pages/learners-life')
export class LearnersLifeController {
  constructor(private learnersLifeService: LearnersLifeService){}

  @Post()
  async create(
    @Body() createLearnersLifeDto: CreateLearnersLifeDto
  ){
    return this.learnersLifeService.create(createLearnersLifeDto);
  }
  @Get()
  async getLearnersLifePageInfo(){
    return this.learnersLifeService.getLearnersLifePageData();
  }
  
  @Put()
  @HttpCode(200)
  async updateLearnersLifePage(
    @Body() updateLearnersLifeDto: UpdateLearnersLifeDto
  ){
    return this.learnersLifeService.update(updateLearnersLifeDto)
  }

  @Delete("/id")
  @HttpCode(200)
  async deletePage(
    @Param("id") id: string
  ){
    return this.learnersLifeService.deletePage(id)
  }
}
