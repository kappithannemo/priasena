/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");

const Language = require('../language');
const Lang = Language.getString('webss');

Asena.addCommand({pattern: 'ss ?(.*)', fromMe: false, desc: Lang.SS_DESC}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.LİNK);

    var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=${match[1]}&output=image&full_page=true`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'})

}));

Asena.addCommand({pattern: 'pss ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.LİNK);

    var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=${match[1]}&output=image&full_page=true`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'})

}));

Asena.addCommand({pattern: 'vinsta ?(.*)', fromMe: false }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.LİNK);

    var webimage = await axios.get(`https://videfikri.com/api/igdl/?url=${match[1]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.result.video.data), MessageType.video, {mimetype: Mimetype.mp4 })

}));
