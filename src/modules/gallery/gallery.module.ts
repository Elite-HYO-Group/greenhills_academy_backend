import { Module } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { GalleryController } from './gallery.controller';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  providers: [GalleryService, PrismaService],
  controllers: [GalleryController]
})
export class GalleryModule {}
