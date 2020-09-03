require('dotenv').config();
const helpers = require('./helpers')
const markup = require('telegraf/markup') 
const { Telegraf } = require('telegraf')
const Telegram = require('telegraf/telegram')
const telegram = new Telegram(process.env.BOT_TOKEN)
const bot = new Telegraf(process.env.BOT_TOKEN)
const adminsChat = Number(process.env.ADMINS_CHAT)
const ordersChat = Number(process.env.ORDERS_CHAT)
const myChat = Number(process.env.MY_CHAT)
const docsLink = process.env.DOCS_LINK
bot.launch()
helpers.logStart()
//======================================================

bot.command('docs', (ctx) => {
  if (ctx.message.chat.id === adminsChat) {
      ctx.reply(docsLink)
  }
})

bot.on('new_chat_members', (ctx) => {
  if (ctx.message.chat.id === ordersChat) {
    const users = helpers.makeNewMembers(ctx)
    const newMemberText = `Пришли в чат «Заказы»:`
    telegram.sendMessage(adminsChat, `${newMemberText}\n${users.join('\n')}`)
    telegram.sendMessage(myChat, ctx.chat.id)
    telegram.deleteMessage(myChat, ctx.chat.id)
  }
})

bot.on('left_chat_member', (ctx) => {
  if (ctx.message.chat.id === ordersChat) {
    const user = ctx.message.left_chat_member
    const leftMemberText = `Ушел из чата «Заказы»\n${helpers.makeUserMessage(user)}`
    telegram.sendMessage(adminsChat, leftMemberText)
  }
})

bot.on('message', (ctx) => {
  if (ctx.message.chat.id === ordersChat) {
    if (ctx.message.text !== '+'){
      telegram.deleteMessage(ordersChat, ctx.message.message_id)
    }
  }
})
