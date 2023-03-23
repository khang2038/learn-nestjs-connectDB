import { ValidationPipe } from '@nestjs/common/pipes';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3333;
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(port, () => {
    console.log(`app start with port ${port}`);
  });
}
bootstrap();
