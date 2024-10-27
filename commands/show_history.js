const storage = require('../libs/storage');

module.exports = (bot, msg) => {
    const history = storage.getPasswordHistory(msg.chat.id);
    const historyMessage = history.length > 0
        ? "Your Password History:\n" + history.join("\n")
        : "No password history found.";

    bot.sendMessage(msg.chat.id, historyMessage);
};
