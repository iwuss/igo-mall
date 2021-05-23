import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const PORT = 12444;
const docPath = 'api-doc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // swagger接口文档
  const config = new DocumentBuilder()
    .setTitle('IGO商城')
    .setDescription('IGO商城api文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(docPath, app, document);

  await app.listen(PORT);

  console.info(`服务已开启：http://localhost:$${PORT} \n接口文档：http://localhost:${PORT}/${docPath}`);
}
bootstrap();
