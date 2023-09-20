import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateSectionDto } from './dto/create.dto';

@Injectable()
export class SectionsService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.sections.findMany();
  }

  async findOneById(id: string) {
    const section = await this.prismaService.sections.findUnique({
      where: { id },
    });
    return section;
  }

  async findOneByName(name: string) {
    const section = await this.prismaService.sections.findUnique({
      where: { name },
    });
    return section;
  }
  async create(createSectionDto: CreateSectionDto) {
    const overview = await this.prismaService.sectionOverview.create({
      data: {
        intro: createSectionDto.overview.intro,
        overview: createSectionDto.overview.overview,
      },
    });

    const section = await this.prismaService.sections.create({
      data: {
        name: createSectionDto.name,
        description: createSectionDto.description,
        slogan: createSectionDto.slogan,
        image: createSectionDto.image,
        overview: { connect: { id: overview.id } }, // Associate with the SectionOverview
      },
    });

    return section;
  }

  async update(id: string, updateSectionDto: CreateSectionDto) {
    const existingSection = await this.findOneById(id);
    if (!existingSection) {
      throw new NotFoundException('Section not found');
    }
    await this.prismaService.sectionOverview.update({
      where: { id: existingSection.overviewId },
      data: {
        intro: updateSectionDto.overview.intro,
        overview: updateSectionDto.overview.overview,
      },
    });

    const updatedSection = await this.prismaService.sections.update({
      where: { id },
      data: {
        name: updateSectionDto.name,
        description: updateSectionDto.description,
        slogan: updateSectionDto.slogan,
        image: updateSectionDto.image,
      },
    });

    return updatedSection;
  }

  async remove(id: string) {
    const existingSection = await this.findOneById(id);
    if (!existingSection) {
      throw new NotFoundException('Section not found');
    }
    await this.prismaService.sections.delete({ where: { id } });
  }
}
