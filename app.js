//Import packages
require('dotenv').config();
const { CommandoClient } = require('discord.js-commando');
const path = require('path');
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
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));
//Fire on ready
client.on('ready', () => {
    //Confirm log in and set game
    console.log('Logged in!');
    client.user.setGame('[bento] help');
});
//Log in with token defined in .env
client.login(process.env.TOKEN);