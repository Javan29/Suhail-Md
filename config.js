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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "749263432";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_42_04_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU5LFxuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTQsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIzLFxuICAgICAgICA2MyxcbiAgICAgICAgOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzksXG4gICAgICAgIDY5LFxuICAgICAgICA3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDYwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMixcbiAgICAgICAgNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNixcbiAgICAgICAgODksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY3LFxuICAgICAgICA1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInJlZXR0ZmVtR3RjRHdyaXpJMUpJaFFzdTR3OXptL2I2YWlOZUxCSlVlNnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzQ5MjYzNDMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwOUEwNjgzODZFODI4OTgzMDRCRkQ1MUVGN0VCRUZERVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTM3MDY5MTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NDkyNjM0MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg3OUVCQjI3QTA5NkZFOUExQzAwMzFGMzkxOTYyNEY4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxMzcwNjkxOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc0OTI2MzQzMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTQwQTk5MTcwOURDNzZGOTcyNEEzNUU2NjdGNzA5RjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzEzNzA2OTI0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVjNElyV2h4UkJXSml1VmNpVlBNemdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTFiNWQxMDYtN2Q3YS00NzQ2LWJjMDEtNDY1NDMyZWJmMTZiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgMTk1LFxuICAgICAgNzUsXG4gICAgICAzOCxcbiAgICAgIDIxMixcbiAgICAgIDg2LFxuICAgICAgMjQ1LFxuICAgICAgMTU2LFxuICAgICAgMTE4LFxuICAgICAgODYsXG4gICAgICAxNCxcbiAgICAgIDEzLFxuICAgICAgNTksXG4gICAgICAxNDYsXG4gICAgICA5MCxcbiAgICAgIDU2LFxuICAgICAgOSxcbiAgICAgIDEzNixcbiAgICAgIDE2NSxcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDIyMyxcbiAgICAgIDIwNSxcbiAgICAgIDYxLFxuICAgICAgNzUsXG4gICAgICAxNDcsXG4gICAgICAxNTIsXG4gICAgICAxOTQsXG4gICAgICA3OSxcbiAgICAgIDEyNCxcbiAgICAgIDIxOSxcbiAgICAgIDI1LFxuICAgICAgMTY0LFxuICAgICAgMTYwLFxuICAgICAgMTUzLFxuICAgICAgNjMsXG4gICAgICAyMDIsXG4gICAgICAyNDIsXG4gICAgICAyMDYsXG4gICAgICA4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHRVo3M0ZHRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzQ5MjYzNDMyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzMDczOTI0MDcwMTk1OToxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkZ1Y2tcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMalIvWWtCRUtHdmxMRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJKNEM1YzQwRWUwY0J1bFo2dEg4cmZ3OG9Sb2xwYkhMTHU5WkFVcTBhaGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ1lLR1FjbXlvTGFlT1BsdHB0V3JSOGdwcVlNNDhBNnF3dm9BYit3RGlpOWxLOHFNVVliM3IzR0I1UDJrQnR0YWtqSjY3VzdVN2dPbWVsaDNBUmRlRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM1ZYdEwwdHphWmpiUkQvTldtKzVLL1dZQUw1WFllbXd2bzUvSkhNTkM4OVNBQXpTL0wvaEh3dDNaY3Y4UzBHcHV4SmJiV0FVa2VCd0NUcGN6VnNpZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzQ5MjYzNDMyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxMzcwNjkxNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9WU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1ZTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQW1Wenk4QVhGajFrdDdsWG4xbDZNM2N0WFBDY2NjdUc3NFdEb1BYeFVoWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODkzNjgyNDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMzcwNjkyMTM5MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "K29",
  ownername:process.env.OWNER_NAME|| "K29",


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
