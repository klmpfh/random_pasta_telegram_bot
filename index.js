const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = require('./token.json').token;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on('error', console.error);
bot.on('polling_error', console.error);
bot.on('webhook_error', console.error);

bot.onText(/\/get/, sendMsg);
bot.onText(/\/start/, sendMsg);
bot.onText(/\/pasta/, sendMsg);
bot.onText(/\/go/, sendMsg);

const data = require('./data.json');

function sendMsg(chatId){

    const msgStringArray = [
        'your pasta:',
        '',
    ];

    // from every data-array a random alement
    data.forEach(arr => msgStringArray.push(arr[Math.floor(Math.random()*arr.length)]));

    // new line and some discrition
    msgStringArray.push('');
    msgStringArray.push('get a new one with /get, /start, /pasta, or /go');

    bot.sendMessage(chatId, msgStringArray.join('\n'));
}
