import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cấu hình CORS
  app.enableCors();

  // Cấu hình Swagger
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('Tài liệu API cho hệ thống')
    .setVersion('1.0')
    .addTag('api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Thêm route handler cho route gốc trả về "Hello World"
  app.getHttpAdapter().get('/', (req, res) => {
    res.send('Hello World');
  });

  await app.listen(process.env.PORT || 3000, '0.0.0.0');

  console.log(`Ứng dụng đang chạy tại: ${await app.getUrl()}`);
  console.log(`Swagger UI: ${await app.getUrl()}/api`);
}
bootstrap();
