import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [
    DbModule,
    BotModule
  ]
})
export class AppModule {}
