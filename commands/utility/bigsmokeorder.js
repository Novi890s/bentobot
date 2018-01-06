//Import Commando.
const { Command } = require("discord.js-commando");
//Initialize command.
module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      //Define attributes of the command.
      name: "bigsmokeorder",
      group: "utility",
      memberName: "bigsmokeorder",
      description: "Big Smoke's order",
      examples: ["bigsokeorder"],
      userPermissions: ["SEND_MESSAGES"]
    });
  }
  run(msg) {
    //Delete command
    msg.delete();
    //Big Smoke's Order
    return msg.channel.send(
      "I’ll have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda."
    );
  }
};
