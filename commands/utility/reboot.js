//Import Commando.
const {
    Command
} = require('discord.js-commando');
//Initialize command.
module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            //Define attributes of the command.
            name: 'reboot',
            group: 'utility',
            memberName: 'reboot',
            description: 'Reboot all instances of the bot.',
            examples: ['agree']
        });
    }
    hasPermission(msg) {
        return this.client.isOwner(msg.author);
    }

    run(msg) {
        msg.delete();
        return process.exit(0);
    }
}
};