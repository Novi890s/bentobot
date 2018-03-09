//Import packages
require("dotenv").config();
const { CommandoClient, SQLiteProvider } = require("discord.js-commando");
const path = require("path");
const sqlite = require("sqlite");
var antispam = require("discord-anti-spam");
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

//Initialize Anti-Spam
antispam(client, {
  warnBuffer: 10, //Maximum amount of messages allowed to send in the interval time before getting warned.
  maxBuffer: 15, // Maximum amount of messages allowed to send in the interval time before getting banned.
  interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
  warningMessage: "stop spamming or I'll ban you..", // Warning message send to the user indicating they are going to fast.
  banMessage: "has been banned for spamming, anyone else?", // Ban message, always tags the banned user in front of it.
  maxDuplicatesWarning: 15, // Maximum amount of duplicate messages a user can send in a timespan before getting warned
  maxDuplicatesBan: 20 // Maximum amount of duplicate messages a user can send in a timespan before getting banned
});

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
