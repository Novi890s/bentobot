//Import Commando.
const { Command } = require('discord.js-commando');
//Initialize command.
module.exports = class HttpCatCommand extends Command {
    constructor(client) {
        super(client, {
            //Define attributes of the command.
            name: 'httpcat',
            group: 'utility',
            memberName: 'httpcat',
            description: 'HTTPcat api',
            examples: ['httpcat code'],
            userPermissions: ['SEND_MESSAGES'],
            args: [
                {
                    key: 'code',
                    prompt: 'What is the HTTP Code?',
                    type: 'string'
                }
            ]
        });
    }
    run(msg, {text}) {
        //Put code in
        return msg.say("http://http.cat/" + text);
    }
};