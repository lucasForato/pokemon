import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  await app.listen(5000, () => {
    console.log('application running on port 5000');
  });
}
bootstrap();
