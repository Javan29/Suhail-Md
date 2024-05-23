goconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255625327984";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_52_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODksXG4gICAgICAgIDU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAwLFxuICAgICAgICA4MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICA0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDYyLFxuICAgICAgICA4MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkxLFxuICAgICAgICA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdhNTJXSE42MkJjdnRUc3NIdU0zQkk2ZHVmR2tKMGZlYkt3NHhxSjhkTU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NjI1MzI3OTg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzMUI2NTFGQTJBMzk2QjE2MDY1RUQ0Q0QwMEFFRTBCMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY0ODMxMjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MjUzMjc5ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJEODc4MjY3QzQzOEMxODUwQjQwRjU1NDdBRDhEM0Y3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjQ4MzEyNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfSzlVTkhaZVNXSzBZeG93OHh2UTVBXCIsXG4gIFwicGhvbmVJZFwiOiBcImZiOGM0ZjJkLTU0NzktNDM4MC1hNWMwLTEyNzE3OTYwOTQwY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OSxcbiAgICAgIDE1NSxcbiAgICAgIDkzLFxuICAgICAgMTcsXG4gICAgICAyNTQsXG4gICAgICA5LFxuICAgICAgMTk4LFxuICAgICAgMjA4LFxuICAgICAgMTc3LFxuICAgICAgNDgsXG4gICAgICAxNixcbiAgICAgIDE2MSxcbiAgICAgIDE4NCxcbiAgICAgIDE3MCxcbiAgICAgIDIzNixcbiAgICAgIDE4MixcbiAgICAgIDU2LFxuICAgICAgMTgwLFxuICAgICAgMjMzLFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgMTA4LFxuICAgICAgNTEsXG4gICAgICAyMjcsXG4gICAgICA0LFxuICAgICAgMTExLFxuICAgICAgMjEwLFxuICAgICAgODUsXG4gICAgICAxNDAsXG4gICAgICAxNzMsXG4gICAgICAwLFxuICAgICAgMTU3LFxuICAgICAgMjcsXG4gICAgICA5MyxcbiAgICAgIDE2MCxcbiAgICAgIDE4NixcbiAgICAgIDQsXG4gICAgICAxMzUsXG4gICAgICAxMTMsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2UVdUVlpEUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjI1MzI3OTg0OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLMjlcIixcbiAgICBcImxpZFwiOiBcIjEzMjEwOTI1MTM4NzYzMzo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05PNnZ1MEhFS3JvdmJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUG4zTURIbjJLQVZneXlyMEs5S2dKQkhqQ3JSNmd0VnNQRXlBaUU5a1ZXVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuazljN04xb0hOTXBYZU5Zajh2WVZJNHdGemFPMkRJbXhtSUxiOEFMYUlNYnJWcVU1c2NmQnpiQW1KTHNwQmJQa2w1dG5FY1J0cmJkNEx2T0FSeUdBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKOGJ2eGh0dW53M0VkUjRHY09wT29xUVpNNnNiT1Z0WnhKN0FSVjVub2pYR2RkMXQyWk9TMXpUZ1l4cU51U0tLTlZSWjZRK2dzOCtTZGdDaHBzaWVBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2MjUzMjc5ODQ6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjQ4MzExOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1XRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVdGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOFVKQzVwOFNIajk3eHJ3OSsvOWxhWDR5TE9UV016K2xYelRPRU40d2V6Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTA4NjYxMDc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY0ODMxMjU1NzFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Javan",
  ownername:process.env.OWNER_NAME|| "It'x Javan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
