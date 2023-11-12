import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationPageController } from './education.controller';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  providers: [EducationService, PrismaService],
  controllers: [EducationPageController]
})
export class EducationPageModule {}
