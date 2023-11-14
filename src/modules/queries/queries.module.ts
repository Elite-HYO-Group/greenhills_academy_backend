import { Module } from '@nestjs/common';
import { QueriesController } from './queries.controller';
import { QueriesService } from './queries.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [QueriesController],
  providers: [QueriesService, PrismaService]
})
export class QueriesModule {}
