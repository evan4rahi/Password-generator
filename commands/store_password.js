const storage = require('../libs/storage');

module.exports = (bot, msg) => {
    bot.sendMessage(msg.chat.id, "Please enter the website address:");
    bot.once('message', (msg) => {
        const website = msg.text;
        bot.sendMessage(msg.chat.id, "Please enter the username/email:");
        bot.once('message', (msg) => {
            const username = msg.text;
            bot.sendMessage(msg.chat.id, "Please enter the password:");
            bot.once('message', (msg) => {
                const password = msg.text;
                storage.storePassword(msg.chat.id, website, username, password);
                bot.sendMessage(msg.chat.id, "Password stored successfully!");
            });
        });
    });
};
