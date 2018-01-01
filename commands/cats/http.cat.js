//Import Commando.
const { Command } = require("discord.js-commando");
//Initialize command.
module.exports = class HttpCatCommand extends Command {
  constructor(client) {
    super(client, {
      //Define attributes of the command.
      name: "httpcat",
      group: "cats",
      memberName: "httpcat",
      description: "HTTPcats",
      examples: ["httpcat code"],
      userPermissions: ["SEND_MESSAGES"],
      args: [
        {
          key: "text",
          prompt: "What is the HTTP Code?",
          type: "integer"
        }
      ]
    });
  }
  run(msg, { text }) {
    msg.delete();
    //Put HTTP status code in URL
    return msg.say("http://http.cat/" + text);
  }
};
