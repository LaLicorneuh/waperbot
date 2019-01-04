var Discord = require('discord.js');
var bot = new Discord.Client();
bot.login(process.env.TOKEN)

bot.on('ready', () => {
    console.log('Bot Launched...')
});
