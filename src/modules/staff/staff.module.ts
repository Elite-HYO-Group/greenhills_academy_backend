import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  providers: [StaffService, PrismaService],
  controllers: [StaffController]
})
export class StaffModule {}
