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
 
  var tl =["🌸====『 हाय मैं मर जावा तेरी मासूम शकल पे_____😗  " , "🌸====『 बॉट बॉट ना बोल ओए जानू बोल____😝🙈🦋 " , "🌸====『𒁍कल काली पहाड़ी के पीछे तू मिल जा_______😁😈" , "🌸====『 मैं गरीबों से बात नहीं करता ____😉🤪" , " 🌸====『 चुप होजा मनहूस प्राणि वर्ना खोपचे में ले जाऊंगा तुझे________😝🤪" , "🌸====『 बोलो बाबू तुम मुझे प्यार करते हो ना______🙈 " , "🌸====『 अरे मेरी जान मजाक के मूड में नहीं हूं मैं जो काम है बोलो शर्माओ नहीं _______🎸🎭━━•☆°•°•💗" , "🌸====『 बार बार बोल के दिमाग ख़राब किया तो id हैक कर लूंगा_____🙂♡• || _[🙂]~🖤 •|" , "🌸====『 तुम बंद नहीं करोगे क्या?_____🙂" , "लव यू बोलो __😁" ,  "🌸====『 मैं तुम्हारे चक्कर में सबको ब्लॉक कर रहा हूं अब आई लव यू बोलोगे की नहीं____🙂" , "🌸====『 मैं हाथ जोड़ के मोदी से गुजारिश करता हूं मेरी मदद करेगा_____❁⃝❤️➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢**💫" , "🌸====『 तुमको कोई और कम नहीं पूरे दिन मेसेंजर पे बॉट बॉट करते हो___😁" , " 🌸====『 अभिषेक यादव जी तेरा baind बजा देंगे गलत आदेश मत देना________🙈😜 " , "🌸====『 अभी बोला तो दोबारा मत बोलना____🙂" , "🌸====『 बोल दे कोई नहीं देख रहा हे___ 🙄☢━💛🌹💛" , "🌸====『 हाय मैं मर जावा एके चुम्मा तो देदो काफी दिन से चुम्मी नहीं मिली_____😝🦋" , "🌸====『 मुझे कोई पटा लो मैं बहुत मासूम हूं____🙈" , "🌸====『 बोलो मेरी जान क्या हाल है आपका _____😚 " , "🌸====『 चुप रह नहीं बाहर आके तेरा दांत तोड़ दूंगा___♡• || •___'[💔]~~🖤 " , "🌸====『 हां मेरी जान चली बेडरूम में रोमांस करेंगे _____😹🙈", "🌸====『 तेरी याद ना आये ऐसा कोई दिन नहीं ___😝🙈🙈🙈 " , "🌸====『 जिंदगी में लगने लगे कि कोई अपना नहीं है तो आ जाना मेरे पास में रख लूंगा _____😝•||•●┼┼──🦋☘️•|" , "🌸====『 कल हवेली मिल जरा तू कुछ कम है___😈🙈♡• || _[🙂]~🖤 •| " , "🌸====『 साला पूरा दिन लोग बॉट बॉट करते हैं लेकिन गर्लफ्रेंड नहीं बनती ___🙄" , "🌸====『𒁍🌸 अरे मेरी जान ज्यादा परशान Mat करो अभिषेक यादव जी देख लेंगे_______🙈😝🎸🎭━━•☆°•°•💗","🌸====『 बाबू तुम तो वही हो ना चप्पल चोर__420_________😹😹","🌸====『 चलो जानी हम सदी कर लेते हे भाग के______🙈😁", "🌸====『 हम मेरी जान बोलो क्या कम था ____🙂" , " दिल तो पागल है दिल दीवाना है थोड़े से पैसे दे दो दिल का इलाज करवाना है_______❤️🤸‍♂️😁━━•☆°•°•💗" , "तू तो मेरी जान है फ़िर क्यूँ तेरी ही याद मेरी जान ले रही है...?? 🤸‍♂️😒👈" , "सच्ची मोहब्बत में प्यार मिले न मिले लेकिन याद करने को एक चहरा ज़रूर मिल जाता है। 🙈🤸‍♂️" , " देखो कोई मेरा मजाक नहीं बनाना ओके पढ़ना ====『𒁍•🦋🔐अभिषेक यादव जी *★᭄ ཫ༄𒁍≛ 』====को बुला लूंगी_______🎸🤸‍♂️━━•☆°•°•💗" , " कोई हमें भी पटा लो गरीबों की दुआ लगेगी__---😁🤸‍♂️__❤️ " , "🌸====『𒁍•🦋🔐अभिषेक यादव जी *★᭄ ཫ༄𒁍≛ 』====🌸 को नहीं बताना हम तुम पर लाइन मार रहे हैं__━━•☆😁🙅" , " चलो इश्क लड़ाएं डार्लिंग🎸🤸‍♂️━━•☆°•°•💗 ====『𒁍•🦋🔐अभिषेक यादव जी *★᭄ ཫ༄𒁍≛ 』====🎸🙅🤸‍♂️━━•☆°•°•💗" , " हमको तुमसे प्यार है फिर भी तुम्हें इंकार है🎸🤸‍♂️━━•☆°•°•💗" , " चलो हम लोग इनबॉक्स में चलें_❤️ ____🤸‍♂️" , " तेरी मासूमियत ने हमें बंजारा बना दिया🎸🤸‍♂️━━•☆°•°•💗" , " इश्क बड़ा बेदर्दी रात दिन सताए😕━━•☆🤸‍♂️" , " अभी मैं खाना खा रहा हूं तुम लोग भी खा लो🎸🌹━━•☆°•°•💗" , " बहुत प्यारे हो आप🎸😘━━•☆°•°•💗 " , " तुम्हें एक बात बताओ मैं क्यों बताऊं हा हा हा हा🎸🤸‍♂️━━•☆°•°•💗" , " आ ले चलु तुझे तारों के शहर में🎸🤸‍♂️━━•☆°•°•💗" , " राधे राधे _❤️और कैसे हो आप सब🎸❤️━━•☆°•°•💗" , " मैं अभी सो🥱 रहा हूं तुम भी सो जाओ🎸🤸‍♂️━━•☆°•°•💗" , " इधर मेरा ====『𒁍•🦋🔐अभिषेक यादव जी *★᭄ ཫ༄𒁍≛ 』====बॉस देख रहा है चलो इनबॉक्स में बाबू सोना करें🎸🤸‍♂️━━•☆°•°💗" , " आओ तोता उड़ मैना और खेलें🎸🤸‍♂️━━•☆°•°•💗" , " एक ने मेरे ====『𒁍•🦋🔐अभिषेक यादव जी *★᭄ ཫ༄𒁍≛ 』==== वॉश को धोखा दिया दूसरी का भरोसा नहीं🤣🎸🤸‍♂️━━•☆°•°•💗" , " आ ले चलु तुझे तारों के शहर में🎸🤸‍♂️━━•☆°•°•💗" , " हंसी हो जवां हो नशा हो तुम 🤸‍♂️━━•☆°•°•💗" , " आप ने खाना खा लिया━━•☆❤️" , " अब हम तुम्हारी वजह से सब को ब्लॉक कर रहे हैं━━•☆😤😕" , " चलो अब हमें अपना व्हाट्सएप नंबर दो🎸🤸‍♂️━━•☆°•°•💗" , " थोड़ा काम धाम भी कर लिया करो जब देखो बूट बूट बूट बोलते रहते हो🎸🤸‍♂️━━•☆°•°•💗 ",];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "Good night all ")) {
     return api.sendMessage("🌸====『𒁍•🦋🔐वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ शुभ रात्रि ___😘सोने से पहले एक बार मेरा नाम ले लेना भूत नहीं आएगा_____ 😂:))", threadID);
   };

    if ((event.body.toLowerCase() == "chumma 😘") || (event.body.toLowerCase() == "chumma")) {
     return api.sendMessage("🌸====『𒁍•🦋🔐वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ 😘😘😘😘😘😘", threadID);
   };
   
    if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "I love you 😘")) {
     return api.sendMessage("🌸====『𒁍•🦋🔐वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________𝐈 𝐋𝐨𝐯𝐞 𝐲𝐨𝐮 𝐭𝐨 𝐦𝐞𝐫𝐢 𝐣𝐚𝐧 __𒁍•🦋🔐😘", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("🌸====『𒁍•🦋🔐वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ प्रीफिक्स .कौन लगाएगा तेरा पापा हवा में लिख दिया यार...... omffo😒", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "Hii")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ हेलो, हेलो, बाय बाय. ये सब के अलावा कुछ बोलना नहीं आता क्या तुमको चलो जय श्री राम बोलो_____❤️", threadID);
   };

   if ((event.body.toLowerCase() == "who is this god") || (event.body.toLowerCase() == "bhagwan kon hai")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ हिंदुओं के मान्यता के अनुसार कोई अंतर नहीं है अर्थात ईश्वर और अल्लाह एक ही आईटम है लेकिन मुसलमानों की मान्यता के अनुसार अल्लाह ही सत्य है और उसके अतिरिक्त कुछ अन्य पूज्य नहीं है बल्कि मनगढ़ंत है। ईश्वर हर जगह रहते हैं, कण कण में विराजमान हैं। सब कुछ परमात्मा में ही समाया हुआ है। ईश्वर निराकार और साकार दोनों है। ", threadID);
   };

   if ((event.body.toLowerCase() == "koi hai") || (event.body.toLowerCase() == "koi h")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ मैं हूं ना जानी _______ ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "Good morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ 【 GOOD  MORNING Hello dear, have a nice day ❤️ 】", threadID);
   };

   if ((event.body.toLowerCase() == "Koi he") || (event.body.toLowerCase() == "Koi h")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ Main Hu na jaani ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "kya kar rahe ho") || (event.body.toLowerCase() == "kya kar rahe ho ji") || (event.body.toLowerCase() == "kya kar raha he") || (event.body.toLowerCase() == "Kya kar raha hai bot")) {
     return api.sendMessage( "🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ कुछ नहीं मेरी जान बस आपसे बात कर रहे हैं_____😗😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "create you")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞➸⃝🐼⃝⃞⃟💙__________________𝐕𝐀𝐑𝐔𝐍 𝐃𝐇𝐀𝐖𝐀𝐋 𝐆🎸  ☜ 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐌𝐫 Varun.______________________ 𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- www.facebook.com/61556417013686__________________________________", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko kisne banaya ")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ 𝐀𝐁𝐇𝐈𝐒𝐇𝐄𝐊 𝐘𝐀𝐃𝐀𝐕 𝐆❤️ Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Raha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ He is 𝐀𝐁𝐇𝐈𝐒𝐇𝐄𝐊 𝐘𝐀𝐃𝐀𝐕 𝐆. He Gives his name Mr 𝐀𝐁𝐇𝐈𝐒𝐇𝐄𝐊 𝐘𝐀𝐃𝐀𝐕 𝐆 everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "uff") || (event.body.toLowerCase() == "Uff")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ हाए_🙃तेरी मासूमियत उफ़____ 😘", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ हांजी, करूंगा लेकिन बच्चा। आपके पेट एम होगा. मंजुर है_____😁", threadID);
   };

   if ((event.body.toLowerCase() == "Chup") || (event.body.toLowerCase() == "Kam bol") || (event.body.toLowerCase() == "Shut up") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ kyu rahu chup🥺🥺", "सिर्फ आपके कहने पर चुप हो गया वरना________🙂", threadID);
   };

   if ((event.body.toLowerCase() == "Bsdk") || (event.body.toLowerCase() == "BSDK")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ Tu Hai Btc. BhoSDK MDRXOD ME TO BOT HU", threadID);
   };

   if ((event.body.toLowerCase() == "Mai hi tera malik varun") || (event.body.toLowerCase() == "abhishek yadav hu bsdk") || (event.body.toLowerCase() == "Mai tera owner hu abhishek yadav") || (event.body.toLowerCase() == "Malik hu tera vinod yadav")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ सॉरी अभिषेक मलिक अब नहीं करूंगा___ 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "Bsdk") || (event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "land") || (event.body.toLowerCase() == "Lamra")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ गा*** ला**** मत कर या फिर बाहर फेक दूंगा_____🙂. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "kiss") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸 __________________________________सब देख रहे हैं वरना बहुत किस देता ____😗🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Jaan")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ मैं हूं ही ऐसा सब लोग तरफ करते हैं_____😍", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल*★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ 🥺 मैं तो सिर्फ मजाक कर रहा था🥺.मेरी जान गुस्सा मत करो. एक चुम्मी ली और शांत रहो______ 😘", threadID);
   };

   if ((event.body.toLowerCase() == "Hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ हम हं न कर सिधा सिधा बोल. अरे मुझसे शादी कर लो____🙈", threadID);
   };

   if ((event.body.toLowerCase() == "gm") || (event.body.toLowerCase() == "Gm") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛वरुण धावाल *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ सुप्रभात __राधे राधे__🙏🧡.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "Bot ke bachche")) {
