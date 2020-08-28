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


// {
//   "message_id": 227,
//   "from": {
//       "id": 67257081,
//       "is_bot": false,
//       "first_name": "Nick",
//       "last_name": "Cage",
//       "username": "Sebulba",
//       "language_code": "en"
//   },
//   "chat": {
//       "id": -324611645,
//       "title": "BoosterBOYZ",
//       "type": "group",
//       "all_members_are_administrators": true
//   },
//   "date": 1598118902,
//   "new_chat_participant": {
//       "id": 1138509200,
//       "is_bot": true,
//       "first_name": "Helper",
//       "username": "BoostHelper_bot"
//   },
//   "new_chat_member": {
//       "id": 1138509200,
//       "is_bot": true,
//       "first_name": "Helper",
//       "username": "BoostHelper_bot"
//   },
//   "new_chat_members": [
//       {
//           "id": 1138509200,
//           "is_bot": true,
//           "first_name": "Helper",
//           "username": "BoostHelper_bot"
//       }
//   ]
// }