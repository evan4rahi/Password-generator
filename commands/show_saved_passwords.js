const storage = require('../libs/storage');

module.exports = (bot, msg) => {
    const savedPasswords = storage.getSavedPasswords(msg.chat.id);
    if (savedPasswords.length > 0) {
        const response = "Your Saved Passwords:\n" + savedPasswords.map((p, index) =>
            `${index + 1}. Website: ${p.website}, Username: ${p.username}, Password: ${p.password}`
        ).join("\n");
        bot.sendMessage(msg.chat.id, response);
    } else {
        bot.sendMessage(msg.chat.id, "No saved passwords found.");
    }
};
