const { Command } = require('discord.js-commando');
module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'agree',
            group: 'group1',
            memberName: 'agree',
            description: 'Agree to the rules.',
            examples: ['agree'],
            clientPermissions: ['MANAGE_ROLES']
        });
    }
    run(msg) {
        var memberRole = msg.guild.roles.find('name', 'Member');
        msg.member.addRole(memberRole, "Agreed to rules");
        msg.delete();
        return msg.say("You agreed to the rules. Happy chatting!");
    }
};