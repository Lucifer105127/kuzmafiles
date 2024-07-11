const axios = require("axios");

const config = {
  name: "aiv1",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Jazer",
  description: "OpenAI official AI with no prefix",
  commandCategory: "ai",
  usages: "...",
  cooldowns: 0
};

const handleEvent = async function ({ api, event, client, __GLOBAL }) {

  if (event.body.indexOf("ai") === 0 || event.body.indexOf("Ai") === 0) {
    const { threadID, messageID } = event;
    const input = event.body;
    const message = input.split(" ");

    if (message.length < 2) {
      api.sendMessage("Please provide a question first.", event.threadID, event.messageID);
    } else {
      try {
        api.sendMessage('Please wait while I think through your request...', event.threadID, event.messageID);
        const ris = await axios.get(`https://api.kenliejugarap.com/gptgo/?text=${message.slice(1).join(" ")}`);
        const result = ris.data.response;
        const a = "credits: www.facebook.com/devs150";
        const haha = `${result.replace("\n#GPTGO \n\nIs this answer helpful to you? Kindly click the link below\nhttps:\/\/click2donate.kenliejugarap.com\n(Clicking the link and clicking any ads or button and wait for 30 seconds (3 times) everyday is a big donation and help to us to maintain the servers, last longer, and upgrade servers in the future)", "")}`;
        const jazer = `𝗝𝗔𝗭𝗘𝗥 🤖:\n\n${haha}\n\n${a}`;
        api.sendMessage(jazer, event.threadID, event.messageID);
      } catch (err) {
        console.error(err);
        api.sendMessage("An error occurred while fetching the data from API.", event.threadID, event.messageID);
      }
    }
  }
};

const run = function ({ api, event, client, __GLOBAL }) {
};

module.exports = { config, handleEvent, run };