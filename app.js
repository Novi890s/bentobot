require('dotenv').config();
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '[bento]',
    unknownCommandResponse: false,
    owner: '101852812962443264',
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['utility', 'Utility Commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setGame('[bento] help');
});

client.login(process.env.TOKEN);