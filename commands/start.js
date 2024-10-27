module.exports = (bot, msg) => {
    bot.sendMessage(msg.chat.id, "Welcome! Choose an option:\n1. Generate Password\n2. Password History\n3. Store Password\n4. Show Saved Passwords", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Generate Password", callback_data: "/generate_password" }],
                [{ text: "Password History", callback_data: "/show_history" }],
                [{ text: "Store Password", callback_data: "/store_password" }],
                [{ text: "Show Saved Passwords", callback_data: "/show_saved_passwords" }]
            ]
        }
    });
};
