require('dotenv').config();
const markup = require('telegraf/markup') 
const { Telegraf } = require('telegraf')
console.log('Bot has been started...')
const bot = new Telegraf(process.env.BOT_TOKEN);
//======================================================

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

bot.command('stat', (ctx) => {
  console.log(ctx.chat.id)
  if (ctx.chat.id === ADMIN_CHAT) {
    ctx.reply('@TGstat @cheapeloboost')
    ctx.reply('@TGstat @esprtnews')
  }
})

// const bot = new Telegraf(process.env.BOT_TOKEN)
// bot.command('oldschool', (ctx) => ctx.reply('Hello'))
// bot.command('modern', ({ reply }) => reply('Yo'))
// bot.command('hipster', Telegraf.reply('λ'))
// bot.launch()

bot.on('new_chat_members', (ctx) => {})
