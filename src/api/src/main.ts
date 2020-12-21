import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});

  const options = new DocumentBuilder()
    .setTitle('爬虫平台')
    .setDescription('爬虫平台开放API文档')
    .setVersion('1.0')
    .setBasePath('api')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/v1', app, document);

  // app.enableCors({})
  await app.listen(3000);
}

bootstrap();
