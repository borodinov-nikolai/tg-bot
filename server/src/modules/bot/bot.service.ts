import { Injectable, OnModuleInit } from '@nestjs/common';
import { Markup, Telegraf } from 'telegraf';

@Injectable()
export class BotService implements OnModuleInit {
  private bot: Telegraf
    
    async onModuleInit() {
    this.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || "")
    
 this.bot.command('open', (ctx) => {
  ctx.reply(
    'Открыть Mini App',
    Markup.keyboard([
      Markup.button.webApp('Запустить Mini App', 'https://02b939be0679.ngrok-free.app')
    ]).resize()
  );
});

   this.registerTextHandler()
    this.bot.launch();
    console.log('Bot started');
  }

    private registerTextHandler() {
    this.bot.on('web_app_data', (ctx)=> {
      const data = JSON.parse(ctx.message.web_app_data.data)
      console.log(data)
    })
   
    this.bot.on('text', (ctx)=> {
      ctx.reply(`Вы ввели ${ctx.text}`)
    })
  }
}
