const fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_23_04_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNixcbiAgICAgICAgMTA4LFxuICAgICAgICA3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgzLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDY2LFxuICAgICAgICA1OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEwLFxuICAgICAgICA3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc2LFxuICAgICAgICA3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDcyLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyajdUcDAzOXhKV3hIKytESC9XMmYzdWhodnB1Yy92SmRid08zS1VVMEEwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTYyNTMyNzk4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzA2MTVEQjg2MjdGMEQyRjEzMEE2ODFENkJFREQyMUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzEzNDg2MTg4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NjI1MzI3OTg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNDY1QjNCNEZCNUQ1RDkwMjIzNjhGMzY4ODA0NDExMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTM0ODYxODhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQTlpMVVSTmRUNmFsZmRjMU1FWlZIZ1wiLFxuICBcInBob25lSWRcIjogXCJkZTE4MGFhZi01ZmNhLTRiNGMtYTgxOC0yODc1YWJhZTFlNzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgMjIyLFxuICAgICAgMTUsXG4gICAgICAxMzcsXG4gICAgICAxNTEsXG4gICAgICAxNzcsXG4gICAgICAxMTIsXG4gICAgICAxNzAsXG4gICAgICAxODAsXG4gICAgICAxOCxcbiAgICAgIDEzNSxcbiAgICAgIDc1LFxuICAgICAgMjIxLFxuICAgICAgOTYsXG4gICAgICA1OSxcbiAgICAgIDc3LFxuICAgICAgODQsXG4gICAgICAxNDksXG4gICAgICAyNDIsXG4gICAgICA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDEyLFxuICAgICAgMjQsXG4gICAgICAxMDYsXG4gICAgICAxMjUsXG4gICAgICAxNDUsXG4gICAgICAxNDQsXG4gICAgICAyNDksXG4gICAgICAyMzYsXG4gICAgICA5NSxcbiAgICAgIDExNixcbiAgICAgIDEwLFxuICAgICAgMTYzLFxuICAgICAgNDcsXG4gICAgICA5MixcbiAgICAgIDIxOCxcbiAgICAgIDI1MSxcbiAgICAgIDI0MyxcbiAgICAgIDEzLFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko1R1dGNkJYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2MjUzMjc5ODQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIksyOVwiLFxuICAgIFwibGlkXCI6IFwiMTMyMTA5MjUxMzg3NjMzOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTks2dnUwSEVPTHlockVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQbjNNREhuMktBVmd5eXIwSzlLZ0pCSGpDclI2Z3RWc1BFeUFpRTlrVldVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9CTEFSckE2S3o1VFN5em9xQi9aaW91d1JHVVNwQTFyeGF5RnBxU0MxQUJCOHVPQmROZDNILzE3NDdCUTlqdElDT0tqUU5ObFdMUmtkNHBBTEhjOEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBjWnZxUlU1TjVMU0MrbGo5dDJtUFAyOTNrakMwM1FNNWVSTjNkSDE1a202QXhiSldYR1l6b2VrUTdRbDFqWTFOckFZWCt0VE1IZzRKQTFWSjRLWWdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYyNTMyNzk4NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzEzNDg2MTgxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
