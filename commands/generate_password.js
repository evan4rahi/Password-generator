module.exports = (bot, msg) => {
    bot.sendMessage(msg.chat.id, "Choose password strength:", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Normal Password", callback_data: "/generate_normal" }],
                [{ text: "Medium Password", callback_data: "/generate_medium" }],
                [{ text: "Advanced Password", callback_data: "/generate_advanced" }]
            ]
        }
    });
};
