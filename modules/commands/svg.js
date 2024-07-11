module.exports.config = {
  name: "svg",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kim Joseph DG Bien",
  description: "Send Video Games ( highlights/edit )",
  commandCategory: "Fun",
  usage: "[ gamename ]",
  cooldowns: 5,
};

const axios = require("axios");
const fs = require("fs");
const path = require("path");

const categories = {
  farlight: "farlight+highlight",
  codm: "codm+highlight",
  mlbb: "mlbb+highlight",
  roblox: "roblox+edit",
  dota2: "dota+2+highlight",
  lol: "League+of+Legends+highlight",
  breakout: "arena+breakout+highlight",
  worldwar: "world+war+zone+edit",
  minecraft: "Minecraft+pvp+Hive",
  fortnite: "Fornite+edit",
  apexlegend: "Apex+Legends+highlights",
  rocketleague: "Rocket+League+highlights",
  amogus: "Among+Us+edit",
  overwatch: "Overwatch+edit",
  worldofwar: "World+of+warcraft+edit",
  valorant: "Valorant+highlights",
  gta: "GTA+V+edit",
  heartstone:"Heart+stone+edit",
  rdr2: "Red+Dead+Redemption+edit",
  csgo: "Counter+Strike+Global+Offensive+edit",
  worldoftanks: "World+of+tank+highlights",
  geometrydash: "GeometryDash+highlights",
  terraria: "Terraria+edit",
  crossfire: "Crossfire+highlights",
  pokemon: "PokemonGo+Game+edit",
  cod4: "Call+of+duty+4+Modern+Warfare+edit",
  nba2k20: "NBA2K20+edit",
  forza5: "Forza+horizon+edit",
  dungeon: "Dungeon+fighter+highlights",
  coc: "Clash+of+clans+edit"
};

module.exports.run = async function({ api, event, args }) {
  try {
    if (args.length === 0) {
      api.sendMessage(`Please specify a game name or use ">svg list" to show available categories.`, event.threadID);
      return;
    }

    const command = args[0].toLowerCase();

    if (command === "list") {
      const availableCategories = Object.keys(categories).join(", ");
      api.sendMessage(`List of Available videoGame (highlights/editz):\n\n${availableCategories}`, event.threadID);
      return;
    }

    const categoryQuery = categories[command];

    if (!categoryQuery) {
      api.sendMessage(`Use ">svg list" to show all gamename.`, event.threadID);
      return;
    }

    api.sendMessage(`Sending random ${command} video...`, event.threadID);

    const response = await axios.get(`https://hiroshi.hiroshiapi.repl.co/tiktok/searchvideo?keywords=${categoryQuery}`);
    const videoUrl = response.data.data.videos[0].play;

    const filePath = path.join(__dirname, `/cache/${command}_video.mp4`);
    const writer = fs.createWriteStream(filePath);

    const videoResponse = await axios({
      method: 'get',
      url: videoUrl,
      responseType: 'stream'
    });

    videoResponse.data.pipe(writer);

    writer.on('finish', () => {
      const message = `${command} highlight video:`;
      api.sendMessage(
        { body: message, attachment: fs.createReadStream(filePath) },
        event.threadID,
        () => fs.unlinkSync(filePath)
      );
    });
  } catch (error) {
    console.error('Error:', error);
  }
};
