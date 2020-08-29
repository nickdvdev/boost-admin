require('dotenv').config();
const helpers = require('helpers.js')
const markup = require('telegraf/markup') 
const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.launch()
helpers.logStart()
//======================================================

bot.on('new_chat_members', (ctx) => {
  const newMemberText = `Добавился в чат Заказы
===================
USER INFO
Имя: ${ctx.from.first_name}
Username: @${ctx.from.username}
Язык: ${ctx.from.language_code}`
  bot.sendMessage(ADMIN_CHAT, newMemberText, ctx)
})

bot.on('left_chat_member', (ctx) => {
  const newMemberText = `Ушел из чата Заказы
===================
USER INFO
Имя: ${helpers.getName(ctx)}
Username: @${ctx.from.username}
Язык: ${ctx.from.language_code}`
  bot.sendMessage(ADMIN_CHAT, newMemberText, ctx)
})
