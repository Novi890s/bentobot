const { Command } = require("discord.js-commando");

module.exports = class SupaShipCommand extends Command {
  constructor(client) {
    super(client, {
      name: "supership",
      group: "utility",
      memberName: "supership",
      description: "Ships 4 people.",
      examples: ["supership (name1) (name2) (name3) (name4)"],
      throttling: {
        usages: 5,
        duration: 10
      },
      args: [
        {
          key: "name1",
          prompt: "What's the first name?",
          type: "string",
          default: "bento"
        },
        {
          key: "name2",
          prompt: "What's the second name?",
          type: "string",
          default: "bento"
        },
        {
          key: "name3",
          prompt: "What's the third name?",
          type: "string",
          default: "bento"
        },
        {
          key: "name4",
          prompt: "What's the fourth name?",
          type: "string",
          default: "bento"
        }
      ]
    });
  }

  run(msg, { name1, name2, name3, name4 }) {
    var shippuden = Math.floor(Math.random() * 3) + 2;
    var shipname1 = name1;
    var shipname2 = name2;
    var shipname3 = name3;
    var shipname4 = name4;
    var slice1 = shipname1.slice(0, shippuden);
    var slice2 = shipname2.slice(3);
    var slice3 = shipname3.slice(0, shippuden * shippuden);
    var slice4 = shipname4.slice(3);
    var finalshipname = slice1 + slice2 + slice3 + slice4;
    return msg.channel.send("Introducing... " + finalshipname + "!");
  }
};
