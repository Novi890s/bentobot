//Import Commando.
const { Command } = require("discord.js-commando");
//Initialize command.
module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      //Define attributes of the command.
      name: "caturday",
      group: "utility",
      memberName: "caturday",
      description: "It's Caturday!",
      examples: ["caturday"],
      userPermissions: ["SEND_MESSAGES"]
    });
  }
  run(msg) {
    //Delete command
    msg.delete();
    //cat gif plz
    return msg.say("http://thecatapi.com/api/images/get?format=src&type=gif");
  }
};
