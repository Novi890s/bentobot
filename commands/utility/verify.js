const { Command } = require('discord.js-commando');
module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'agree',
            group: 'utility',
            memberName: 'agree',
            description: 'Agree to the rules.',
            examples: ['agree'],
            userPermissions: ['SEND_MESSAGES']
        });
    }
    run(msg) {
        var memberRole = msg.guild.roles.find('name', 'Member');
        msg.member.addRole(memberRole, "Agreed to rules");
        msg.delete();
        return msg.say("You agreed to the rules. Happy chatting!");
    }
};