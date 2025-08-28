import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { envConfig } from 'src/configs/env';
import { DbModule } from 'src/db/db.module';
import { AppUpdate } from './app.update';

@Module({
  imports: [ConfigModule.forRoot(envConfig),
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN!
    }),
    DbModule
  ],
  providers: [AppUpdate]
})
export class AppModule {}
