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

bot.on('new_chat_members', (ctx) => {
  const [user] = ctx.message.new_chat_members
  const newMemberText = `Пришел в чат Заказы
===================
USER INFO
Имя: ${user.first_name}
Username: @${user.username}
Язык: ${user.language_code}
БОТ: ${user.is_bot}`
    telegram.sendMessage(adminsChat, newMemberText)
})

bot.on('left_chat_member', (ctx) => {
  const user = ctx.message.left_chat_member
  const leftMemberText = `Ушел из чата Заказы
===================
USER INFO
Имя: ${user.first_name}
Username: @${user.username}
Язык: ${user.language_code}
БОТ: ${user.is_bot}`
    telegram.sendMessage(adminsChat, leftMemberText)
})
