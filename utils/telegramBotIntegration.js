const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.TELEGRAM_BOT_TOKEN; // Ensure this environment variable is set
const bot = new TelegramBot(TOKEN, {polling: true});

// Function to connect to the bot
exports.connectToBot = () => {
    console.log('Connected to the Telegram bot');
    // In a real-world scenario, you could add more initialization code here if needed
};

// Function to send a message to a specific chat
exports.sendMessage = (chatId, message) => {
    bot.sendMessage(chatId, message)
        .then(() => {
            console.log(`Sent message to the Telegram chat ${chatId}: ${message}`);
        })
        .catch(err => {
            console.error("Failed to send message:", err);
        });
};

// You can add other utility functions related to the Telegram bot as needed...
