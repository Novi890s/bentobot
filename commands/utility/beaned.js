//Import Commando.
const { Command } = require("discord.js-commando");
//Initialize command.
module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      //Define attributes of the command.
      name: "beaned",
      group: "utility",
      memberName: "beaned",
      description: "Get beaned",
      examples: ["beaned @user"],
      userPermissions: ["SEND_MESSAGES"],
      args: [
        {
          key: "text",
          prompt: "Who do you want to bean?",
          type: "user"
        }
      ]
    });
  }
  async run(msg, { text }) {
    msg.delete();
    //you just got beaned
    return msg.channel.send(
      text + " http://i2.kym-cdn.com/photos/images/newsfeed/001/166/608/7d5.jpg"
    );
  }
};
