import { Module } from '@nestjs/common';
import { CareersService } from './careers.service';
import { CareersController } from './careers.controller';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  providers: [CareersService, PrismaService],
  controllers: [CareersController]
})
export class CareersModule {}
