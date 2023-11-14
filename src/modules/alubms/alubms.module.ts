import { Module } from '@nestjs/common';
import { AlbumsService } from './alubms.service';
import { AlbumsController } from './alubms.controller';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  providers: [AlbumsService, PrismaService],
  controllers: [AlbumsController]
})
export class AlbumsModule {}
