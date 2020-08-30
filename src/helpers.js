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
  displayNewMembers(ctx) {
    const members = ctx.message.new_chat_members
    members.forEach(member => {
      
    });
  }
};