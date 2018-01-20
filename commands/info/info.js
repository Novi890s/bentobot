//Import Commando.
const { Command } = require("discord.js-commando");
//Initialize command.
module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      //Define attributes of the command.
      name: "info",
      group: "info",
      memberName: "info",
      description: "Info about BentoBot",
      examples: ["info"],
      userPermissions: ["SEND_MESSAGES"]
    });
  }
  async run(msg) {
    //Delete command
    msg.delete();
    //Return info
    return msg.channel.send(
      "BentoBot is maintained by suushii. Visit https://suushii.github.io/bentobot."
    );
  }
};
