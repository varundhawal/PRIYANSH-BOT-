const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["तेवर तो हम वक्त आने पे दिखायेंगे ,,शहेर तुम खरीदलो उस पर हुकुमत हम  चलायेंगे…!!!😎" , "जरा बताओ तो.. किसे गुरुर है अपनी दौलत पर…चलो उसे बादशाहों से भरा कब्रस्तान दिखाता हु।😐" , "#इतनी ☝ भी नफरत 👺 न कर 😕 मुझसे 👨 #ऐ_ज़िन्दगी 💓 #में 👉 इंसान 👤 हूँ कोई 🙂 करेले 🌵 की #सब्जी_नही" , "#वो 👦 #मेरी_जिंदगी 👩#क्या_बनायेगा, 😌 जिसे #मैगी_नूडल्स 🍜 बनाना #नहीं_आता ।।😜😏" , "हर कामयाब स्टूडेंट🤓के पीछे, माँ 👫 की चप्पल का हाथ 👋होता है !!" , "कहानीयो के हकदार नही, इतिहास के वारसदार हैं # हम !!" , "बादशाह नहीं बाजीगर से पहचानते है लोग ,,…क्यूकी…….हम रानियो के सामने झुका नहीं करते….!!" , "हर कामयाब स्टूडेंट🤓के पीछे, माँ 👫 की चप्पल का हाथ 👋होता है !!", "तुमसा कोई दूसरा जमीन पर हुआ; तो रब से शिकायत होगी! एक का तो झेला नहीं जाता; दूसरा आ गया तो क्या हालत होगी!😜🤣"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

 if ((event.body.toLowerCase() == "sayri") || (event.body.toLowerCase() == "shayri") || (event.body.toLowerCase() == "sayeri") || (event.body.toLowerCase() == "attitude")) {
    return api.sendMessage("tere dil ♥️ me rahuga whatsapp ban kar dhadkano 🫀me bajuga ringtone📱ban kar kabhi apne dil se alag mat karna tere sath 💑chaluga network 🛜 ban kar" , threadID);
    };
    
   mess = "{name}"
  
  if (event.body.includes("sayri") == 1 ||
   (event.body.includes("shayri ") == 1 ||
   (event.body.includes("sayeri") == 1 ||
   (event.body.includes("attitude") == 1 ||
   (event.body.includes("romantic") == 1 ||
  (event.body.includes("funny") == 1 ||
   (event.body.includes("joke") == 1 ||
   (event.body.includes("oye") == 1 )))))))) {
    var msg = {
      body: `    ${name}                                                            ✧══════•❁❁•══════✧                                                              ${rand}                                                                                                   ✧══════•❁❁•══════✧       *★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 ཫ༄𒁍≛➸⃟̀̀⍤⃝𝐕𝐀𝐑𝐔𝐍 𝐃𝐇𝐀𝐖𝐀𝐋*★᭄ ཫ༄𒁍≛🌸✺۟❥⃢❀͙̽`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
