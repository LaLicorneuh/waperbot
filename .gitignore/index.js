var Discord = require('discord.js');
var bot = new Discord.Client();


bot.on('ready', () => {
    console.log('Bot Launched...')
});
bot.login('process.env.TOKEN');
