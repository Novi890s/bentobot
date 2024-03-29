//Import Commando.
const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
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
  async run(msg, { text }) {
    msg.delete();
    let embed = new Discord.RichEmbed()
      .setTitle("ERROR!")
      .setAuthor("Bento", "https://i.imgur.com/3ORRlTr.png")
      /*
       * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
       */
      .setColor(0x00ae86)
      .setImage("http://http.cat/" + text)
      /*
       * Takes a Date object, defaults to current date.
       */
      .setTimestamp();

    msg.channel.send({ embed });
    embed = new Discord.RichEmbed()
      .setTitle("ERROR!")
      .setAuthor("Bento", "https://i.imgur.com/3ORRlTr.png")
      /*
       * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
       */
      .setColor(0x00ae86)
      .setImage("http://http.cat/" + text)
      /*
       * Takes a Date object, defaults to current date.
       */
      .setTimestamp();
    return;
  }
};
