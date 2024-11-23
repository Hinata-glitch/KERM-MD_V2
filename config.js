//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "22870287077";
global.owner = process.env.OWNER_NUMBER || "22870287077";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "yes";
global.read_status_from = process.env.READ_STATUS_FROM || "yes";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk14VUtidnBtUEFqSVdTR1JJblY5K3hYWkxST2ZzQUY4T0xiYXo3dXRFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVVsZU9NNDc3VkowMWJPUXd0ZERTSEJldEQ5cXpBMThpeHlDUlJLVjVtMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTUxSTUZFa2JvK2UzQ1l4QUhTbUhsNUtoakYyMEFuMGNPeGFNcVdXc0dnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSdVE2dmVmYi9sQkNxZVlNeWg1S0J4YmtKdFBZTHRSZ21oeGl5czhkQ2swPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1DMCtEY21DbC9jZUtjVDBnaitMNkhMYmRiRE5hUnQ0WVdLVTZhMGVuMWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFzUTRmcmJJWmwvV3hlekE2SUtINzc2N0lBWUE5L3RRaG8yNi9VMU9NaWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FiWEQwUEhkUlFCaHltdVNPN2w0SWpxMzZ3Tmg5c0E3ZnN1TzdETGFtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0FvdmI2NTQrc1BINXlMT2FrdnBObEF3R21YbXBIWjg2ZnZ2NnhVWHF3bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhCRGF4a24rMlJTSlJLY0NFWG9aMW9hTHVKcjM2Qi9FR1paS1pmcitYQy9vdVAvcmFWTzFtdnFWempxcHIzcG05V2NjaG9keWo3ZlFPUVMvMGlBa0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6IlFJbjNPbCtmcERHbHRMeTZpTEEyaFlZOUc4bVNZRjJWQ1ZoMENSbCtWVU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlhiNDBRTGY4U3dHbHVIWWxrT25uWlEiLCJwaG9uZUlkIjoiZTQ4ODJlNTEtOWEzZS00NjBhLTgyODctOTEwMzJhYTFjYzUwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjUxUlprVXBsczVBa2pRSFRBem12TUZkdXBZST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnMTNrRlRFcm1JY3U4MkxJN0pzaUErenZNemc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiODhHWDZIU0ciLCJtZSI6eyJpZCI6IjIyODcwMjg3MDc3OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QkvCdkJTwnZqw8J2QifCdmrDwnZq08J2aqyDwnZCS8J2aq/CdkIvwnZuB8J2aq/CdmrvwnZqv8J2aqvCdmrUg8J2atPCdkJjwnZqz8J2ar/CdkJTwnZCSIERPTUlOSU9OIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJcjZzZmtERVBtS2lib0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFS3FRQXByWDg5UCs0TERHQWVydjNSWDlsYXNIdmpjVk1reGZQaUNuelJFPSIsImFjY291bnRTaWduYXR1cmUiOiJ2TFFpb1QzM3hEaDZCTTdiYit4Z2NBNStKdldQM1hvQzBMOUd5SnprNUliQ0l0L0lZMGxwdytJQXZVdWhRVktHMkl5cW9nd1pmYUxjZzAydWVzUEVEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibFpKbXpiRERYS2JZY2lKd2lpRmpkN2MwaXl0WTQralBicDVSZjk2SkVtdCs3VXNUUkFON2hYc0FBN1lZcGtGdjloelNGVTRBcjh2bU1RRGJ2SEVHQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjg3MDI4NzA3Nzo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJDcWtBS2ExL1BUL3VDd3hnSHE3OTBWL1pXckI3NDNGVEpNWHo0Z3A4MFIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzIzOTY0MjEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUEthIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "𝐒𝐔𝚰𝐉𝚰𝚴𝚫 𝐒𝚫𝐋𝛁𝚫𝚻𝚯𝚪𝚵 𝚴𝐘𝚳𝚯𝐔𝐒 °•✮•DOMINION°•✮•°",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
