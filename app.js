//Import packages
require("dotenv").config();
const { CommandoClient, SQLiteProvider } = require("discord.js-commando");
const path = require("path");
const sqlite = require("sqlite");
const Music = require("discord.js-musicbot-addon");

//Init SQLite settings provider.
sqlite.open(path.join(__dirname, "settings.sqlite3")).then(db => {
  client.setProvider(new SQLiteProvider(db));
});

//Initialize client
const client = new CommandoClient({
  commandPrefix: "[]",
  unknownCommandResponse: false,
  owner: "101852812962443264",
  disableEveryone: false
});
// Initalize Music Bot
const music = new Music(client, {
  youtubeKey: process.env.YT_DATA_KEY,
  prefix: "[] ",
  enableQueueStat: true
});

//Register defaults, commands, and groups.
client.registry
  .registerDefaultTypes()
  .registerGroups([
    ["utility", "Utility Commands"],
    ["cats", "Cat Commands"],
    ["info", "Information about BentoBot"]
  ])
  .registerDefaultGroups()
  /* Halley's Comment */
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, "commands"));

//Fire on ready
client.on("ready", () => {
  //Confirm log in and set game
  console.log("Logged in!");
  client.user
    .setActivity("@Bento help", {
      type: "STREAMING",
      url: "https://twitch.tv/search&suushii&on&github"
    })
    .then(presence =>
      console.log(
        `Activity set to ${presence.game ? presence.game.name : "none"}`
      )
    )
    .catch(console.error);
  console.log("Server count: " + client.guilds.size);
});
client.on("message", message => {
  if (message.author.bot) return; // Ignore bots.
  if (message.channel.type === "dm") return; // Ignore DM channels.
});
//Log in with token defined in .env
client.login(process.env.TOKEN);
