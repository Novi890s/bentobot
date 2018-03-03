//Include Commando.
const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
//Initialize command.
module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      //Define attributes of the command.
      name: "caturday",
      group: "cats",
      memberName: "caturday",
      description: "It's Caturday!",
      examples: ["caturday"],
      userPermissions: ["SEND_MESSAGES"]
    });
  }
  run(msg) {
    //Delete command
    msg.delete();
    //cat plz
    let embed = new Discord.RichEmbed()
      .setTitle("It's Caturday!")
      .setAuthor("Bento", "https://i.imgur.com/lm8s41J.png")
      /*
       * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
       */
      .setColor(0x00ae86)
      .setImage(
        "http://thecatapi.com/api/images/get?format=src&results_per_page=1"
      )
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
      .setImage(
        "http://thecatapi.com/api/images/get?format=src&results_per_page=1"
      )
      /*
       * Takes a Date object, defaults to current date.
       */
      .setTimestamp();

    return msg.channel.send("React on this message with :+1: or :-1: to vote!");
  }
};
