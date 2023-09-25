import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateEducationDto } from './dto/create.dto';

@Injectable()
export class EducationService {
     constructor(private prismaService: PrismaService) { }
     
  async findAll() {
    return await this.prismaService.education.findMany();
  }

  async findOneById(id: string) {
    const education = await this.prismaService.education.findUnique({
      where: { id },
    });
    return education;
  }

  async findByCategory(programName: string) {
    const education = await this.prismaService.education.findMany({
      where: { programName },
    });
    return education;
  }

  async create(createEducationDto: CreateEducationDto) {
    const education = await this.prismaService.education.findUnique({
      where: { programName: createEducationDto.programName },
    });
    if (education) {
      throw new BadRequestException('Education program with this name already exists');
    }
    return await this.prismaService.education.create({
      data: createEducationDto,
    });
  }

  async update(id: string, updateEducationDto: CreateEducationDto) {
    const existingEducation = await this.findOneById(id);
    if (!existingEducation) {
      throw new NotFoundException('Education program not found');
    }
    return await this.prismaService.education.update({
      where: { id },
      data: updateEducationDto,
    });
  }

  async remove(id: string) {
    const education = await this.findOneById(id);
    if (!education) {
      throw new NotFoundException('education not found');
    }
    await this.prismaService.education.delete({ where: { id } });
  }

  async updateEducationImage(educationId: string, imagePath: string) {
    const education = await this.prismaService.education.findUnique({
      where: { id: educationId },
    });

    if (!education) {
      throw new NotFoundException('education not found');
    }

    const updatedEducation = await this.prismaService.education.update({
      where: { id: educationId },
      data: { image: imagePath },
    });

    return updatedEducation;
  }
}
