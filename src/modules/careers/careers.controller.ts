import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { CareersService } from './careers.service';
import { CreateCareerDto } from './dto/create.dto';
import { UpdateCareerDto } from './dto/update.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/api/v1/careers')
@ApiTags('/api/v1/careers')
export class CareersController {
  constructor(private readonly careersService: CareersService) {}

  @Post()
  async createCareer(@Body() createCareerDto: CreateCareerDto) {
    return this.careersService.createCareer(createCareerDto);
  }

  @Get()
  async getAllCareers() {
    return this.careersService.getAllCareers();
  }

  @Get('public')
  async getPublicCareers() {
    return this.careersService.getPublicCareers();
  }

  @Get(':id')
  async getCareerById(@Param('id') id: string) {
    return this.careersService.getCareerById(id);
  }

  @Get('industry/:industry')
  async getCareersByIndustry(@Param('industry') industry: string) {
    return this.careersService.getCareersByIndustry(industry);
  }

  @Put(':id')
  async updateCareer(@Param('id') id: string, @Body() updateCareerDto: UpdateCareerDto) {
    return this.careersService.updateCareer(id, updateCareerDto);
  }

  @Delete(':id')
  async deleteCareer(@Param('id') id: string) {
    return this.careersService.deleteCareer(id);
  }
}
