const fs = require('fs');
const ytdl = require('ytdl-core');
const { resolve } = require('path');
const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Kolkata").format("HH:mm:ss");
async function downloadMusicFromYoutube(link, path) {
  var timestart = Date.now();
  if(!link) return 'Thiếu link'
  var resolveFunc = function () { };
  var rejectFunc = function () { };
  var returnPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
  });
    ytdl(link, {
            filter: format =>
                format.quality == 'tiny' && format.audioBitrate == 128 && format.hasAudio == true
        }).pipe(fs.createWriteStream(path))
        .on("close", async () => {
            var data = await ytdl.getInfo(link)
            var result = {
                title: data.videoDetails.title,
                dur: Number(data.videoDetails.lengthSeconds),
                viewCount: data.videoDetails.viewCount,
                likes: data.videoDetails.likes,
                uploadDate: data.videoDetails.uploadDate,
                sub: data.videoDetails.author.subscriber_count,
                author: data.videoDetails.author.name,
                timestart: timestart
            }
            resolveFunc(result)
        })
  return returnPromise
}
module.exports.config = {
    name: "music",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "PREM BABU",
    description: "THIS BOT IS MADE BY PREM BABU",
    commandCategory: "ALL-MUSIC",
    usages: "[searchMusic]",
    cooldowns: 0
}

module.exports.handleReply = async function ({ api, event, handleReply }) {
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Kolkata").format("HH:mm:ss");
    const axios = require('axios')
    const { createReadStream, unlinkSync, statSync } = require("fs-extra")
    try {
        var path = `${__dirname}/cache/sing-${event.senderID}.mp3`
        var data = await downloadMusicFromYoutube('https://www.youtube.com/watch?v=' + handleReply.link[event.body -1], path);
        if (fs.statSync(path).size > 26214400) return api.sendMessage('मेरी जान गाना का नाम तो लिखो 🤐👈', event.threadID, () => fs.unlinkSync(path), event.messageID);
        api.unsendMessage(handleReply.messageID)
        return api.sendMessage({ 
            body: `┏━━━━━┓\n     प्रेम-बाबू              ✧═•❁𝗠𝗨𝗦𝗜𝗖❁•═✧\n┗━━━━━┛\n\n🌺   [ 1 ]   𒁍 LAUNCH DATE   →  [ ${data.uploadDate} ]\n🌺   [ 2 ]   𒁍 CHANNEL NAME  →   ${data.author}\n🌺   [ 3 ]   𒁍 TOTAL VIEWS  →  [ ${data.viewCount} ]\n🌺   [ 4 ]   𒁍 PROCCEING TIME  →  [ ${Math.floor((Date.now()-data.timestart)/1000)} ]\n🌺   [ 5 ]   𒁍 TITLE NAME  →  ${data.title} [ ${this.convertHMS(data.dur)} ]\n\n❁ ══════ ❃PREM-BABU❃ ══════ ❁`,
            attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
         event.messageID)

    }
    catch (e) { return console.log(e) }
}
module.exports.convertHMS = function(value) {
    const sec = parseInt(value, 10); 
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60); 
    let seconds = sec - (hours * 3600) - (minutes * 60); 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return (hours != '00' ? hours +':': '') + minutes+':'+seconds;
}
module.exports.run = async function ({ api, event, args }) {
  let axios = require('axios');
    if (args.length == 0 || !args) return api.sendMessage('मेरी जान गाना का नाम तो लिखो 🤐👈', event.threadID, event.messageID);
    const keywordSearch = args.join(" ");
    var path = `${__dirname}/cache/sing-${event.senderID}.mp3`
    if (fs.existsSync(path)) { 
        fs.unlinkSync(path)
    }
    if (args.join(" ").indexOf("https://") == 0) {
        try {
            var data = await downloadMusicFromYoutube(args.join(" "), path);
            if (fs.statSync(path).size > 2621440000) return api.sendMessage('𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗴𝘂̛̉𝗶 𝗳𝗶𝗹𝗲 𝗰𝗼́ 𝘁𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘁𝘂̛̀ 01:10:10 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̣𝗻 𝗳𝗶𝗹𝗲 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗮̂𝗺 𝘁𝗵𝗮𝗻𝗵.', event.threadID, () => fs.unlinkSync(path), event.messageID);
            return api.sendMessage({ 
                body: `🎶=====「 𝐌𝐔𝐒𝐈𝐂 」=====️🎶\n━━━━━━━━━━━━━━\n📌 → 𝗧𝗶𝘁𝗹𝗲: ${data.title} ( ${this.convertHMS(data.dur)} )\n📆 → 𝗡𝗴𝗮̀𝘆 𝘁𝗮̉𝗶 𝗹𝗲̂𝗻: ${data.uploadDate}\n📻 → 𝗖𝗵𝗮𝗻𝗻𝗲𝗹: ${data.author} ( ${data.sub} )\n👀 → 𝗟𝘂̛𝗼̛̣𝘁 𝘅𝗲𝗺: ${data.viewCount} 𝘃𝗶𝗲𝘄\n❤️ → 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗵𝗶́𝗰𝗵: ${data.likes}\n⏳ → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘅𝘂̛̉ 𝗹𝘆́: ${Math.floor((Date.now()- data.timestart)/1000)} 𝗴𝗶𝗮̂𝘆\n🔗 →  𝗟𝗶𝗻𝗸 𝘁𝗮̉𝗶: https://www.y2meta.com/vi/youtube/${handleReply.link[event.body - 1]}\n======= [ ${time} ] =======`,
                attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
            event.messageID)

        }
        catch (e) { return console.log(e) }
    } else {
          try {
            var link = [],
                msg = "",
                num = 0,
                numb = 0;
            var imgthumnail = []
            const Youtube = require('youtube-search-api');
            var data = (await Youtube.GetListByKeyword(keywordSearch, false,6)).items;
            for (let value of data) {
              link.push(value.id);
              let folderthumnail = __dirname + `/cache/${numb+=1}.png`;
                let linkthumnail = `https://img.youtube.com/vi/${value.id}/hqdefault.jpg`;
                let getthumnail = (await axios.get(`${linkthumnail}`, {
                    responseType: 'arraybuffer'
                })).data;
                  let datac = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${value.id}&key=AIzaSyANZ2iLlzjDztWXgbCgL8Oeimn3i3qd0bE`)).data;
                     fs.writeFileSync(folderthumnail, Buffer.from(getthumnail, 'utf-8'));
              imgthumnail.push(fs.createReadStream(__dirname + `/cache/${numb}.png`));
              let channel = datac.items[0].snippet.channelTitle;
              num = num+=1
  if (num == 1) var num1 = "[ 1 ]  𒁍 "
  if (num == 2) var num1 = "[ 2 ]  𒁍 "
  if (num == 3) var num1 = "[ 3 ]  𒁍 "
  if (num == 4) var num1 = "[ 4 ]  𒁍 "
  if (num == 5) var num1 = "[ 5 ]  𒁍 "
  if (num == 6) var num1 = "[ 6 ]  𒁍 "

              msg += (`${num1} ${value.title} [ ${value.length.simpleText} ]\n♥️ CHANNEL NAME 𒁍  [ ${channel} ]\n◆━◆━◆━◆━◆━◆━◆━◆━◆━◆━◆━◆━◆\n\n`);
            }
            var body = `┏━━━━━┓\n     प्रेम-बाबू                ✧══•❁𝗠𝗨𝗦𝗜𝗖❁•══✧\n┗━━━━━┛\n\n\n◆━◆━◆━◆━◆━◆━◆━◆━◆━◆━◆━◆━◆\n𝗠𝗨𝗝𝗛𝗘 𝗬𝗘 ${link.length} 𝗠𝗨𝗦𝗜𝗖 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗦𝗘 𝗠𝗜𝗟𝗘 𝗛𝗔𝗜\n◆━◆━◆━◆━◆━◆━◆━◆━◆━◆━◆━◆━◆\n\n${msg}𝗜𝗦𝗦 𝗠𝗘𝗜 𝗦𝗘 𝗞𝗢𝗜 𝗘𝗞 𝗠𝗨𝗦𝗜𝗖 𝗦𝗘𝗟𝗘𝗖𝗧 𝗞𝗥 𝗟𝗢\n\n𝗢𝗪𝗡𝗘𝗥  𒁍 𝗠𝗥 𝗣𝗥𝗘𝗠 𝗕𝗔𝗕𝗨 ♥️♥️`
            return api.sendMessage({
              attachment: imgthumnail,
              body: body
            }, event.threadID, (error, info) => global.client.handleReply.push({
              type: 'reply',
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              link
            }), event.messageID);
          } catch(e) {
            return api.sendMessage('Đã xảy ra lỗi, vui lòng thử lại trong giây lát!!\n' + e, event.threadID, event.messageID);
        }
    }
      }
