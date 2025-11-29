import { Injectable, OnModuleInit } from '@nestjs/common';
import { Context, Markup, Telegraf } from 'telegraf';

@Injectable()
export class BotService implements OnModuleInit {
  private bot: Telegraf
    
    async onModuleInit() {
    this.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || "")
    
    this.bot.command('open', (ctx)=> {
      ctx.reply('Открыть Mini App', 
        Markup.inlineKeyboard([
         Markup.button.webApp(
           'Запустить Mini App',
          'https://13c7f6c75707.ngrok-free.app'
         )
        ])
      )
    })

   
    this.bot.launch();
    console.log('Bot started');
  }

  private registerStartCommand() {
    this.bot.start((ctx: Context)=> {
      ctx.reply('Привет! Это бот Зануда 2025 на nest.js \n Cписок комманд: \n /start \n /help \n /ping')
    })
  }

   private registerHelpCommand() {
    this.bot.command('help', (ctx: Context) => {
      ctx.reply('Список команд:\n/start\n/help\n/ping');
    });
  }

    private registerPingCommand() {
    this.bot.command('ping', (ctx: Context) => {
      ctx.reply('Пинг?', {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Понг!', callback_data: 'pong' }],
          ],
        },
      });
    });

    // Обработчик inline-кнопки
    this.bot.action('pong', (ctx: Context) => {
      ctx.answerCbQuery();
      ctx.reply('ПОНГ! 😄');
    });
    
  }

    private registerTextHandler() {
    this.bot.on('text', (ctx: Context) => {
      ctx.reply(`Ты написал: "${ctx.message?.['text']}"`);
    });
  }
}
