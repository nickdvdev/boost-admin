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
  getName(user) {
    const firstName = user.first_name || '';
    const lastName = user.last_name || '';
    return [firstName, lastName].join(' ');
  },
  makeNewMembers(ctx) {
    const members = ctx.message.new_chat_members
    return members.map((member, i) => `${i + 1}. ${this.makeUserMessage(member)}`);
  },
  makeUserMessage(user) {
    return `===================
Имя: ${this.getName(user)}
Username: @${user.username}
Язык: ${user.language_code}
БОТ: ${user.is_bot}`
  }
};