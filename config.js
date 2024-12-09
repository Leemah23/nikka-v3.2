//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349022750436";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0thZ3VXVE1IcUpnN0xDR2t3WTFIcXVid3NtcmhNTEgwRDRwVERMMUFWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVBraG1kbDB1SmtIcEVGSVROaFJWNUU1NEpZMUIrLzFKNnYzN2Y3RWRSWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSGp1K0hITitOMUJ0dmw1eVo5WmxZMFp3dWRQYml1Mk5JRHJUalF1VWtJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLOUNLZElrS2hRbS9kZ3VIbTFsWHpUbldxeGNNTFRiRGdRVFdjMEp2Y0Q4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1LSElRdEFGUTJDSld3OFpJcVpzTW1WK1ppUlBCdFNybTNJb0ptSzFnMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjU4UE5qUXRPdmtNY0J6ZlFsOHlTN2lFOGhoQ3dyU1JsdkE0M1RtWWFaUVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME85aVU4a0dONWNtbEViNnJsWXo3dlhPakxrYm1TV2JvSC9rckRnQzlrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDNVME9Sb053cEZUb3dmSE8yMWhxSHovWnlhT2YvM1Ywd3hJcHdnMEJnND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFEMHdWRTlld2x0S2hBSk1nUGxUL3hYYVVaUnZXYVArRjBzSWg1ZVdGcFVibmtrbFJrNFc5WlMwd0hxeDVhSlhnU1RCZUYzaUJVT2N5STVEV1hzTGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJMU2tNcVNoRlhiVVhUNGNwSDYxM25RRStzUjlScXc3RlVpN3dWRDU1NjVNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1NjZfZU5KQ1RqLTRNWlNWUVV3NFlRIiwicGhvbmVJZCI6ImVlMTZhNDAxLTg0Y2ItNGEwZS05MmQ4LTdhMzQ4MTBjYzNlMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxcjFEREY2SGlhYlhHU1h6dUplWVRSellzeTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUlERFVHOUpicmJJdjRHWG14T1ozTVBkd1RVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFRTVk1WUpDIiwibWUiOnsiaWQiOiIyMzQ5MDIyNzUwNDM2OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTGVlbWFoIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJNzVtTEVCRUlULzNMb0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvVm5GUDVvQXlhZ09CZk9CTjBlaDBCREh1WjJQS2lEanlxV0tzQVhaS2hJPSIsImFjY291bnRTaWduYXR1cmUiOiJMM2lkUUdkZjFFcE1RYjQ5d0pqMGZlbklKUncrOXBsdG9HMDlOaWhCZk5yZmJKNkIyMGhsenhNakkwdTUycHRObktyRTA5dmVlbHEyYmczM09McE5DUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQTZZcWlMekVsa2huUzZrM1Z5aXJUbHg5SXpUZUp0OEJaRlFXbzlsaEFvKzNSai81MEIxSFE0Q3pCbVZzUDU0NTl2WXhGZ0QyQVFpNDIrL1BGMW5jZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDIyNzUwNDM2OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZjFaeFQrYUFNbW9EZ1h6Z1RkSG9kQVF4N21kanlvZzQ4cWxpckFGMlNvUyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzc3MTE1NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNTkMifQ== // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
