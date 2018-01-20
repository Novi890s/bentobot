//Import Commando.
const { Command } = require("discord.js-commando");
//Initialize command.
module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      //Define attributes of the command.
      name: "agree",
      group: "utility",
      memberName: "agree",
      description: "Agree to the rules.",
      examples: ["agree"],
      userPermissions: ["SEND_MESSAGES"]
    });
  }
  async run(msg) {
    //Find role in server named 'Member'
    var memberRole = msg.guild.roles.find("name", "Member");
    //Add role and log it.
    msg.member.addRole(memberRole, "Agreed to rules");
    //Delete command
    msg.delete();
    //Confirm verification
    return msg.say("You agreed to the rules. Happy chatting!");
  }
};
