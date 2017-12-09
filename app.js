//Import packages
require('dotenv').config();
const { CommandoClient, SQLiteProvider  } = require('discord.js-commando');
const path = require('path');
const sqlite = require('sqlite');
var antispam = require("discord-anti-spam");

//Init SQLite settings provider.
sqlite.open(path.join(__dirname, "settings.sqlite3")).then((db) => {
    client.setProvider(new SQLiteProvider(db));
});

//Initialize client
const client = new CommandoClient({
    commandPrefix: '[bento]',
    unknownCommandResponse: false,
    owner: '101852812962443264',
    disableEveryone: true
});


//Register defaults, commands, and groups.
client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['utility', 'Utility Commands']
    ])
    .registerDefaultGroups()
    /* Halley's Comment */
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

//Initialize Anti-Spam
antispam(bot, {
    warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned. 
    maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned. 
    interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned. 
    warningMessage: "stop spamming or I'll whack your head off.", // Warning message send to the user indicating they are going to fast. 
    banMessage: "has been banned for spamming, anyone else?", // Ban message, always tags the banned user in front of it. 
    maxDuplicatesWarning: 7, // Maximum amount of duplicate messages a user can send in a timespan before getting warned 
    maxDuplicatesBan: 10 // Maximum amount of duplicate messages a user can send in a timespan before getting banned 
  });

//Fire on ready
client.on('ready', () => {
    //Confirm log in and set game
    console.log('Logged in!');
    client.user.setGame('[bento] help');
    console.log('Server count: ' + client.guilds.size);
});
client.on('message', (message) => {
    if (message.author.bot) return; // Ignore bots.
    if (message.channel.type === "dm") return; // Ignore DM channels.

});
//Log in with token defined in .env
client.login(process.env.TOKEN);
