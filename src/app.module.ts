import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/testing.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://sms-dev:passwordPrompt@mongodb-staging.apps.nbb.ai:27017/sms-dev',
    ),
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
