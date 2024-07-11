const axios = require('axios');

module.exports.config = {
    name: "llama",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hashier",
    description: "LLaMa MetaAI",
    commandCategory: "ai",
    usages: "[ask]",
    cooldowns: 2,
};

module.exports.run = async function({ api, args, event, Threads }) {
  api.setMessageReaction("❤️", event.messageID, (err) => {}, true);

  const t = event.threadID;
  const m = event.messageID;

  const apiUrl = 'https://api.hashier-project.repl.co/api/ai/llamav2';
  const question = encodeURIComponent(args.join(""));

  if (!question) {
    return api.sendMessage(`Please enter what you need to search/ask.`, event.threadID, event.messageID);
  } else {
    try {
      const res = await axios.get(`${apiUrl}?question=${question}`);
      const sagot = res.data.answer;
      api.sendMessage(sagot, t, m);
    } catch (e) {
      console.error(e);
      api.sendMessage(`Error while fetching the LLaMa response. Try again later.`, event.threadID, event.messageID);
    }
  }
};