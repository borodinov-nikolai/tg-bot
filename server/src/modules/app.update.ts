import { Ctx, Start, Update } from "nestjs-telegraf";
import { Context } from "telegraf";


@Update()
export class AppUpdate {
    @Start()
    async onStart(@Ctx() ctx: Context) {
        await ctx.reply('Привет я бот!')
    }
}