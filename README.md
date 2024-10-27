# Telegram Password Manager Bot

This bot provides users with features to:
- Generate passwords (Normal, Medium, and Advanced).
- View password history.
- Store and retrieve saved passwords.

### Project Structure
- **commands/**: Contains the bot commands for handling user actions.
- **libs/**: Helper libraries for password generation and storage.
- **bot.json**: Configuration file for the bot.

### Setup Instructions
1. Install dependencies with `npm install`.
2. Configure bot token in `bot.json`.
3. Start the bot with `node index.js`.

### Commands
- **/start**: Initialize the bot and show main options.
- **/generate_password**: Show password generation options.
- **/show_history**: Show password history.
- **/store_password**: Store a password.
- **/show_saved_passwords**: Show all saved passwords.
