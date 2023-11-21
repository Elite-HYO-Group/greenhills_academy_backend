import { config } from 'dotenv';
config(); 

import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('GreenHills_Academy')
    .setDescription('GreenHills_Academy API')
    .setVersion('1.0')
    .addTag('user')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();

  // const prismaService = app.get(PrismaService);

  // await prismaService.enableShutdownHooks(app);

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(process.env.APP_PORT || 9000);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
