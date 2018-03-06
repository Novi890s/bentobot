const { Command } = require("discord.js-commando");

module.exports = class SayCommand extends Command {
  constructor(client) {
    super(client, {
      name: "suggest",
      group: "utility",
      memberName: "suggest",
      description:
        "Suggest something for the server. Do this in a suggestions channel.",
      examples: ["suggest dank memes"],
      args: [
        {
          key: "text",
          prompt: "What would you like to suggest?",
          type: "string"
        }
      ]
    });
  }

  run(msg, { text }) {
    msg.delete();
    return msg.channel
      .send("@here New suggestion: " + text)
      .then(sentMessage => {
        sentMessage
          .react("👍")
          .then(sentMessage.react("👎").then(sentMessage.react("🤷")));
      });
  }
};
