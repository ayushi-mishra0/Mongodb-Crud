import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {    //initializes our application
  const app = await NestFactory.create(AppModule);

//enable validation pipe globally
app.useGlobalPipes(new ValidationPipe({
  transform: true, // Automatically transform payloads into DTO instances
  whitelist: true, // Strip properties that do not have decorators
  forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are present
}));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
