const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "remini",
  version: "1.0.",
  hasPermssion: 0,
  credits: "shiki",
  description: "enhance your photo ",
  commandCategory: "test",
  usages: "[ reply image ]",
  cooldowns: 2,
};

module.exports.run = async ({ api, event, args }) => {
  let pathie = __dirname + `/cache/zombie.jpg`;
  const { threadID, messageID } = event;
  
  var james = event.messageReply.attachments[0].url || args.join(" ");
  
  try {
    const response = await axios.get(`https://code-merge-api-hazeyy01.replit.app/api/try/remini?url=${encodeURIComponent(james)}`);
    const processedImageURL = response.data.image_data;
    
    const img = (await axios.get(processedImageURL, { responseType: "arraybuffer"})).data;
     
    fs.writeFileSync(pathie, Buffer.from(img, 'utf-8'));
     
    api.sendMessage({
      body: "Processed Image",
      attachment: fs.createReadStream(pathie)
    }, threadID, () => fs.unlinkSync(pathie), messageID);
  } catch (error) {
    api.sendMessage(`Error processing image: ${error}`, threadID, messageID);
  };
};
const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "remini",
  version: "1.0.",
  hasPermssion: 0,
  credits: "shiki",
  description: "enhance your photo ",
  commandCategory: "test",
  usages: "[ reply image ]",
  cooldowns: 2,
};

module.exports.run = async ({ api, event, args }) => {
  let pathie = __dirname + `/cache/zombie.jpg`;
  const { threadID, messageID } = event;
  
  var james = event.messageReply.attachments[0].url || args.join(" ");
  
  try {
    const response = await axios.get(`https://remeni.hayih59124.repl.co/remeni?url=${encodeURIComponent(james)}`);
    const processedImageURL = response.data.image_data;
    
    const img = (await axios.get(processedImageURL, { responseType: "arraybuffer"})).data;
     
    fs.writeFileSync(pathie, Buffer.from(img, 'utf-8'));
     
    api.sendMessage({
      body: "Processed Image",
      attachment: fs.createReadStream(pathie)
    }, threadID, () => fs.unlinkSync(pathie), messageID);
  } catch (error) {
    api.sendMessage(`Error processing image: ${error}`, threadID, messageID);
  };
};
