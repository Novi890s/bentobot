//Import packages
require('dotenv').config();
const { CommandoClient, SQLiteProvider  } = require('discord.js-commando');
const path = require('path');
const sqlite = require('sqlite');
const Enmap = require('enmap');
const EnmapLevel = require("enmap-level");
//Init SQLite settings provider.
sqlite.open(path.join(__dirname, "settings.sqlite3")).then((db) => {
    client.setProvider(new SQLiteProvider(db));
});
//Open points DB
const pointProvider = new EnmapLevel({name: "points"});
this.points = new Enmap({provider: pointProvider});
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
    client.pointsMonitor(client, message);
});
//Log in with token defined in .env
client.login(process.env.TOKEN);
