require('dotenv').config();
const helpers = require('./helpers')
const markup = require('telegraf/markup') 
const { Telegraf } = require('telegraf')
const Telegram = require('telegraf/telegram')
const telegram = new Telegram(process.env.BOT_TOKEN)
const bot = new Telegraf(process.env.BOT_TOKEN)
const adminsChat = process.env.ADMINS_CHAT
const ordersChat = process.env.ORDERS_CHAT
const myChat = process.env.MY_CHAT
bot.launch()
helpers.logStart()
//======================================================

// bot.on('left', (ctx) => {
//   if (ctx.chat.id === ordersChat) {
//     const newMemberText = `Добавился в чат Заказы
//     ===================
//     USER INFO
//     Имя: ${ctx.from.first_name}
//     Username: @${ctx.from.username}
//     Язык: ${ctx.from.language_code}`
//     telegram.sendMessage(adminsChat, newMemberText)
//   }
//   return
// })


bot.on('new_chat_members', (ctx) => {
//   const newMemberText = `Пришел в чат Заказы
// ===================
// USER INFO
// Имя: ${ctx.from.first_name}
// Username: @${ctx.from.username}
// Язык: ${ctx.from.language_code}`
    telegram.sendMessage(myChat, ctx.message.new_chat_members)
  return
})

// bot.on('left_chat_member', (ctx) => {
//   const newMemberText = `Ушел из чата Заказы
// ===================
// USER INFO
// Имя: ${ctx.from.first_name}
// Username: @${ctx.from.username}
// Язык: ${ctx.from.language_code}`
//   telegram.sendMessage(adminsChat, newMemberText)
//   return
// })

// bot.hears('getCtx', ctx => {
//   ctx.reply(ctx.from)
//   const newMemberText = `Ушел из чата Заказы
//   ===================
//   USER INFO
//   Имя: ${ctx.from.first_name}
//   Username: @${ctx.from.username}
//   Язык: ${ctx.from.language_code}`
//   ctx.reply(newMemberText)
// })
