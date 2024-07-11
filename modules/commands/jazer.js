const fs = require("fs");
module.exports.config = {
  name: "jazer",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Jazer",
  description: "no prefix",
  commandCategory: "no prefix",
  usages: "generate random msg",
  cooldowns: 5,
};

const jazer = [
  "tsnginamo wag mong hinahanap amo ko papatayin kita", "bakit mo hinahanap owner ko 😼", "tigil kakatawag sa pangalan na yan sasapakin kita", "isang mention pa masasapak na talaga kita", "anong kailangan mo kay jazer?"];

const randomMessage = () => {
  const randomIndex = Math.floor(Math.random() * jazer.length);
  return jazer[randomIndex];
};

module.exports.handleEvent = function ({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.includes("Jazer") || event.body.includes("jazer")) {
    const msg = randomMessage();
    var message = {
      body: msg,
    };
    api.sendMessage(message, threadID, messageID);
  }
};

module.exports.run = function ({ api, event, client, __GLOBAL }) {
  // Add your logic or functionality dito
};