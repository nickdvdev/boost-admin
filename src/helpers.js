module.exports = {
  debug (obj = {}) {
    return JSON.stringify(obj, null, 4); 
  },
  logStart() {
    console.log('Bot has been started...');
  },
  getChatId(ctx) {
    return ctx.chat.id;
  },
  getName(ctx) {
    const firstName = ctx.from.first_name || '';
    const lastName = ctx.from.last_name || '';
    return [firstName, lastName].join(' ');
  },
  makeNewMembers(ctx) {
    const members = ctx.message.new_chat_members
    return members.map((member, i) => `${i + 1}. ${this.makeUserMessage(member)}`);
  },
  makeUserMessage(user) {
    return `===================
Имя: ${user.first_name}
Username: @${user.username}
Язык: ${user.language_code}
БОТ: ${user.is_bot}`
  }
};