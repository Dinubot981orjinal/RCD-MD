//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94720660742,94728899640";
global.owner = process.env.OWNER_NUMBER || "94728899640";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUpGRURvNHkxMWczYVByc096MnFiM0xTOWtvQ3FkTFo5VHIwK2hyUDdXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDBDbXVlK2ZjbWx5UGN0VXFsVXNOYUpWY3RRSURJMlJhM3djcWNrelpFUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTVJhL1JXRXd6dm5yV3l6V0U0UVlXMTkxUDNYY01iOUtNcWdOaTZpKzN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMQ0huV0loRXgyUmxHNkZGWjVaYXFjem1MYXd0M0xMV2IyamdkczVNS1dRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1IZ1l0NUFOeXZwZldwbnpMdWxkeEtBcXpiWDFzS212OGV1cFh3bXQ4bjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9RSUtLVms0bjMxQW5UcW56TnZoRUFZczVNQVNvUzZBOWVTWENjTlR4a009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZwYXR1SE9WY3NXUXNSWlA1L2U2OGZtS2lZQUM1YVdRVkFCd0REVXdtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTldnbXdsZ1JWR2I3YVhyeGlKOVJsU1J4TGZDOEh2a1pUQWxIcGR5R3pTQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InA0RFJwZjQxdXM0b2dsRVFDM0pvV3Nxbk9JM0w1cEFLSHcrTGhrdzI0NWdEbXFNT1hKc3lMdUw5MHkrQVI2cXYrTkd4RmtBem1XblJCUSswSldlUkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6ImdHTUtVWW1BS2I3bFVLUnRRMVpJRUlYZTVRa3FzdHRzcHlPcXJSN3cxN2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjkwekdURjMzUTRtR25mRGhYN20tYlEiLCJwaG9uZUlkIjoiMWU2NDZiZjgtMGE5OC00MjRhLWEyNjgtNzk4NWI4M2Q5YTMzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAzZ1JCWm5IcGhzK0RwUzFKekdGdmJEcjN0VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0aW05REZNc0l4UTZudlVWNEFhL1QwSDc3VUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUVdIRVBEWDYiLCJtZSI6eyJpZCI6Ijk0NzI4ODk5NjQwOjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRsIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMVyszdlVDRUkvWXc3TUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrZ3VBeG9uWXYxa1dXbFdMY3pNRThFMXVGN2VRY1dxSEhKSmxyeENseWw4PSIsImFjY291bnRTaWduYXR1cmUiOiJBV3QwNjdPSTFKYld2VVAxUzRNSDc5a1hYOHVmQmgwQUdzTUJMNG5xTHU0a01aWng3bUF2Z3lBM1VhOWFNVk0vbm9BNWlycUUrbXdLcTVjbk00anhCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUWRnTE1CejhnbGRvcW9XcGZzMGtLcXVBaGI1Z1Yza2E4a1R6eDNTdHJWakxwMWNWL2p6VW5zMXZHdERYUXVqdjNIWlVmci9MYm5zK2ovSlFuMFQ4QlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyODg5OTY0MDoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaSUxnTWFKMkw5WkZscFZpM016QlBCTmJoZTNrSEZxaHh5U1phOFFwY3BmIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4Njc2NTA5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVYYSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃&𝐎𝐖𝐍𝐄𝐑-𝐃𝐈𝐍𝐔",
  author: process.env.PACK_AUTHER || "𝐃𝐈𝐍𝐔",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐃𝐈𝐍𝐔",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
