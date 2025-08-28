import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 8080
  await app.listen(port, ()=> console.log(`server started at ${port}`));
}

bootstrap();
