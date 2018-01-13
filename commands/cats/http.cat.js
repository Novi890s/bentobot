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
    let embed = new Discord.RichEmbed()
      .setTitle("It's Caturday!")
      .setAuthor("Bento", "https://i.imgur.com/lm8s41J.png")
      /*
       * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
       */
      .setColor(0x00ae86)
      .setImage("http.cat/" + text)
      /*
       * Takes a Date object, defaults to current date.
       */
      .setTimestamp();

    msg.channel.send({ embed });
    embed = new Discord.RichEmbed()
      .setTitle("It's Caturday!")
      .setAuthor("Bento", "https://i.imgur.com/lm8s41J.png")
      /*
       * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
       */
      .setColor(0x00ae86)
      .setImage("http.cat/" + text)
      /*
       * Takes a Date object, defaults to current date.
       */
      .setTimestamp();
    return;
  }
};
