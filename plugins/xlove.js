const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Source Code Will Be On Github Soon!"}, (async (message, match) => {

    var skl = await axios.get("https://i.ibb.co/FbMnwYF/logo.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name: Amalser*

*Creator number : wa.me/918919822103?text=Hi%20Amal%20Ser.%20*

 *To check update .update   To update Bot .update now*

 Bot Made With ❤️ By Nischal*
     
 *Instagram id: https://www.instagram.com/i.am.nischal/?utm_medium=copy_link*

 *githublink : Will Be Available Soon*

 Nishi-Bot Made with ❤️ By Nischal🥰*
`}) 

}));
