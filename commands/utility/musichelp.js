const { Command } = require("discord.js-commando");

module.exports = class SayCommand extends Command {
  constructor(client) {
    super(client, {
      name: "musichelp",
      group: "utility",
      memberName: "musichelp",
      description: "Get music help",
      examples: ["musichelp"]
    });
  }

  run(msg, {}) {
    msg.delete();
    return;
  }
};
