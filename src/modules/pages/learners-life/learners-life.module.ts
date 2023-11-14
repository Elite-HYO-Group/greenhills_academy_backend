import { Module } from '@nestjs/common';
import { LearnersLifeService } from './learners-life.service';
import { LearnersLifeController } from './learners-life.controller';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  providers: [LearnersLifeService, PrismaService],
  controllers: [LearnersLifeController]
})
export class LearnersLifeModule {}
