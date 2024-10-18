import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.models';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:oqXE5N7AuDP29d5c@clusterfirst.ohqnx.mongodb.net/Ayushidb'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
