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
import { HomeModule } from './modules/pages/home/home.module';
import { AboutModule } from './modules/pages/about/about.module';
import { EducationPageModule } from './modules/pages/education/education.module';
import { AdmissionPageModule } from './modules/pages/admission-page/admission-page.module';
import { ContactPageModule } from './modules/pages/contact/contact.module';
import { QueriesModule } from './modules/queries/queries.module';
import { LearnersLifeModule } from './modules/pages/learners-life/learners-life.module';

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
    HomeModule,
    AboutModule,
    EducationPageModule,
    AdmissionPageModule,
    ContactPageModule,
    QueriesModule,
    LearnersLifeModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
