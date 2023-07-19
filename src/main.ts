import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PokeApiMiddleware } from './middlware/pokeapi.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  await app.listen(3000, () => {
    console.log('application running on port 3000');
  });
}
bootstrap();
