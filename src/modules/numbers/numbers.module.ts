import { Module } from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { NumbersController } from './numbers.controller';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  providers: [NumbersService, PrismaService],
  controllers: [NumbersController]
})
export class NumbersModule {}
