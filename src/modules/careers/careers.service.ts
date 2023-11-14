import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateCareerDto } from './dto/create.dto';
import { UpdateCareerDto } from './dto/update.dto';

@Injectable()
export class CareersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createCareer(createCareerDto: CreateCareerDto){
    return this.prismaService.career.create({
      data: createCareerDto,
    });
  }

  async getAllCareers() {
    return this.prismaService.career.findMany();
  }

  async getPublicCareers() {
    return this.prismaService.career.findMany({
      where: {
        isPublic: true,
      },
    });
  }

  async getCareerById(id: string){
    return this.findCareerById(id);
  }

  async getCareersByIndustry(industry: string) {
    return this.prismaService.career.findMany({
      where: {
        industry: industry,
      },
    });
  }

  async updateCareer(id: string, updateCareerDto: UpdateCareerDto){
    const career = await this.findCareerById(id);

    return this.prismaService.career.update({
      where: { id },
      data: updateCareerDto,
    });
  }

  async deleteCareer(id: string){
    const career = await this.findCareerById(id);

    return this.prismaService.career.delete({
      where: { id },
    });
  }

  private async findCareerById(id: string){
    const career = await this.prismaService.career.findUnique({ where: { id } });

    if (!career) {
      throw new NotFoundException(`Career with ID ${id} not found`);
    }

    return career;
  }
}
