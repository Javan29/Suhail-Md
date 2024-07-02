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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255694187008";




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
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_30_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICA4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM4LFxuICAgICAgICA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMxLFxuICAgICAgICA2MixcbiAgICAgICAgNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI3LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg2LFxuICAgICAgICA4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc2LFxuICAgICAgICAyOSxcbiAgICAgICAgODksXG4gICAgICAgIDg5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDczLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc4LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDU3LFxuICAgICAgICA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDMwLFxuICAgICAgICA3NixcbiAgICAgICAgMTIzLFxuICAgICAgICA1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyLFxuICAgICAgICA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibXJaNDZIc0NNSUErY2N2clhTVUpoUkdnbFVCVXk0UHgzRU1vdmtldS9KND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMHp2S0d4NE1UQWVXSWxLYTlzUl90UVwiLFxuICBcInBob25lSWRcIjogXCI3YzQ4NDRjZS0xMjM4LTQzNjUtOGJmZi01OTA1ZmNmMjc5Y2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAxOTIsXG4gICAgICAxNTEsXG4gICAgICAxMTgsXG4gICAgICAxMCxcbiAgICAgIDE1NixcbiAgICAgIDE0NyxcbiAgICAgIDE0MSxcbiAgICAgIDE1NCxcbiAgICAgIDIzNSxcbiAgICAgIDEwNixcbiAgICAgIDEzLFxuICAgICAgMzQsXG4gICAgICA5NCxcbiAgICAgIDEyNyxcbiAgICAgIDI3LFxuICAgICAgMTc5LFxuICAgICAgNjMsXG4gICAgICA2OCxcbiAgICAgIDE3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICAyMjYsXG4gICAgICAyMjMsXG4gICAgICA5OCxcbiAgICAgIDIyNixcbiAgICAgIDIwMCxcbiAgICAgIDk5LFxuICAgICAgMjExLFxuICAgICAgMTE3LFxuICAgICAgMjEwLFxuICAgICAgMjQzLFxuICAgICAgNTMsXG4gICAgICAyNTMsXG4gICAgICAyMTYsXG4gICAgICAyNDAsXG4gICAgICAxOCxcbiAgICAgIDEwLFxuICAgICAgNjEsXG4gICAgICAyMzUsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRSlFHMlo5N1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1Njk0MTg3MDA4OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSzI5XCIsXG4gICAgXCJsaWRcIjogXCIyNDA2NzMyNTcxNjkxMTk6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlM2dnUwSEVOcUVqclFHR0JZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQbjNNREhuMktBVmd5eXIwSzlLZ0pCSGpDclI2Z3RWc1BFeUFpRTlrVldVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldrSm5wRVBFbVk4a1FuM3NLZDR1b2ZuZWJJcDFSUjhGTDFoaG1yek0rV3hPM3B5WFphWHIxcUE0aGJ2L3JKR3hETnpzMm1yWUtUK2VYOWs0RTFUd0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm94aUlvRFpHVlBMVnhmTkRrVUtwSTJBZUxkQWhNZXdLN01YaDlxZXJQS3QyTFBaQzIxQTRjYUZmVDFDeHBJTHA4UmlGWEM3d3laUlJLSFFNOFJVYkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY5NDE4NzAwODoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTg5NDYyMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUI5ZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjlkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWTEyakVmV2ZITDM0dVhDK3dxbjYyQk1QV0hGN3FDcHNyNWNZV1ZTSU9NVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTA4NjYxMDc2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-YkAMrlbKEHFxrKzBQcHYT3BlbkFJ100pXylj15rDLYZlKqCr",
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
