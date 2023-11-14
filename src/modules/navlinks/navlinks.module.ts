import { Module } from '@nestjs/common';
import { NavLinksServices } from './navlinks.service';
import { NavlinksController } from './navlinks.controller';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  providers: [NavLinksServices, PrismaService],
  controllers: [NavlinksController]
})
export class NavlinksModule {}
