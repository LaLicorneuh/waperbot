var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[!help] | WaPerBot', type: 0 } })
    console.log('Bot Launched...')
});

bot.login(process.env.TOKEN)
