import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { ConfigModule } from '@nestjs/config';
import { SectionsModule } from './modules/sections/sections.module';
import { StaffModule } from './modules/staff/staff.module';
import { NewsModule } from './modules/news/news.module';
import { EducationModule } from './modules/education/education.module';
import { ContactModule } from './modules/contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    UserModule,
    RoleModule,
    SectionsModule,
    StaffModule,
    NewsModule,
    EducationModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
