import { Module } from '@nestjs/common';
import { AdmissionPageController } from './admission-page.controller';
import { AdmissionPageService } from './admission-page.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [AdmissionPageController],
  providers: [AdmissionPageService, PrismaService]
})
export class AdmissionPageModule {}
