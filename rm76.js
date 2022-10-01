/*
› Create By rm76
› Base Ori rm76

🌷 KALAU MAU RENAME TARO CREDITS GUA : HW MODS*/

//=================================================//
require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const path = require('path')
const os = require('os')
const cl = require('caliph-api') 
const crypto = require('crypto')
const hx = require('hxz-api')
const mel = require('kitsune-api')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const google = require('google-it')
const mathjs = require('mathjs')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { exec, spawn, execSync } = require("child_process")
const { ngazap } = require('./baseikal/virtex/ngazap')
const { buttonvirus } = require('./baseikal/virtex/buttonvirus')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { virtex1 } = require('./baseikal/virtex/virtex1')
const { virtex2 } = require('./baseikal/virtex/virtex2')
const { virtex, vipi } = require('./baseikal/virtex/virtex.js')
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser } = require('./baseikal/lib/register')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./baseikal/lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
const content = JSON.stringify(m.message)
//=================================================//
virgam = fs.readFileSync(`./baseikal/image/deden.jpeg`)
const kalimaggee = fs.readFileSync ('./baseikal/image/fakemodsgans.jpg')
const thumbnail = fs.readFileSync ('./baseikal/image/mamak.jpg')
const mekih = fs.readFileSync ('./baseikal/image/deden.jpeg')
const { mediafireDl } = require('./baseikal/lib/mediafire.js')
const banned = JSON.parse(fs.readFileSync('./baseikal/dbnye/banned.json'))
const ntilink = JSON.parse(fs.readFileSync("./baseikal/lib/antilink.json"))
//=================================================//
// Function
wm = 'GABUT-ASSISTAND'
symbol = '*≻* '
linkwm = 'https://wa.me/message/4DCK3UGKERTGC1'
tamnelIMG = 'https://telegra.ph/file/0525592db36e4253bbd56.png'
//=================================================//
// Time & Date
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
//=================================================//
module.exports = rm76 = async (rm76, m, chatUpdate, store) => {
 try {
 var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await rm76.decodeJid(rm76.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const isBan = banned.includes(m.sender)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
//=================================================//
// Group
const groupMetadata = m.isGroup ? await rm76.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const welcm = m.isGroup ? wlcm.includes(from) : false
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const AntiNsfww = m.isGroup ? ntnsfww.includes(from) : false
const _registered = JSON.parse(fs.readFileSync('./baseikal/dbnye/registered.json'));
const register = JSON.parse(fs.readFileSync('./baseikal/dbnye/register.json'));
const isRegistered = checkRegisteredUser(m.sender)
//=================================================//
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
// Random Image Simple Menu
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//RANDM
function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
        }
//document randomizer
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
// Date
moment.tz.setDefault("Asia/Jakarta").locale("id");

//=================================================//
try {
ppuser = await rm76.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
const ppnyausers = await getBuffer(ppuser)
const fake = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "14169948404-1305080833@g.us" } : {}) 
},
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"externalAdReply": {
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `${linkwm}`,
"thumbnailUrl": `${tamnelIMG}`, 
"thumbnail": ppnyausers
}}}
//=================================================//
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `${wm}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}
//=================================================//
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);   
//=================================================//
const bal = (teks) => {
rm76.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${wm}`,"body": `Hai Kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ppnyausers,"sourceUrl": `${linkwm}`}}}, { quoted: doc })
} 
// Target
const reply = (teks) => {
return rm76.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${wm}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ppnyausers,"sourceUrl": `${linkwm}`}}}, { quoted: m })
} 

const anjay = (teks) => {
 rm76.sendMessage(m.chat, { image: kalimaggee, caption: teks, contextInfo:{"externalAdReply": {"title": `${wm}`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `${linkwm}`,
thumbnailUrl: `${tamnelIMG}`, 
thumbnail: ppnyausers,
}
}}, { quoted:fake})
}
//=================================================//
const deploy = (teks) => {
  rm76.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}
//=================================================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
} else global.db.data.chats[m.chat] = {
mute: false,
}
} catch (err) {
console.log(err)
}
//=================================================//
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await rm76.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauseers = await getBuffer(ppuser)
// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
/*async function replyReg(teks) {
const anakau = {
}
rm76.sendButtonText(m.chat, `\n`, `Haii 👋 Kak ${pushname} Selamat ${salam}
Agar Bot Bisa Di Gunakan Silahkan Tekan Tombol Di Bawah ↓↓↓`,  [{ buttonId: 'daftar', buttonText: { displayText: 'CLICK HERE' }, type: 1 }], m)
}
async function sendButRegis(from) {
var serialUser = createSerial(18)
_registered.push(sender)
fs.writeFileSync('./baseikal/dbnye/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const anu = {
video:fs.readFileSync("./baseikal/video/rm76.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `
Haii 👋 Kak ${pushname} Selamat ${salam} 

Nama : *${pushname}*
Status : Terdaftar
Total User : *${_registered.length}*

*Silahkan Ketik Menu Untuk Menggunakan Bot`,
}
rm76.sendMessage(m.chat, anu, {quoted: fake})
}*/
//=================================================// 
// Public & Self
if (!rm76.public) {
if (!m.key.fromMe) return
}
//console bukan kontol
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.
green(budy || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
 }
//=================================================// 
var sticWait = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/wait.webp')
rm76.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticAdmin = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/BotAdman.webp')
rm76.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticOwner = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/owner.webp')
rm76.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticSukses = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SuksesCok.webp')
rm76.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticBanLu = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/BanLu.webp')
rm76.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var groupon = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/groupon.webp')
rm76.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var SiGroupadmin = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SiGroupadmin.webp')
rm76.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
//=================================================//
// Mute Chat
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}
//=================================================//
// AntiLink
if (AntiLink) {
linkgce = await rm76.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await rm76.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
rm76.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:fake})
} else {
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: rm76.user.id,
quoted: fake.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, rm76.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
rm76.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
//=================================================//
//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
rm76.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
rm76.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) rm76.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) rm76.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) rm76.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
rm76.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) rm76.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) rm76.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
rm76.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
//=================================================//
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}
if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Hello Saya Bot fake Mods${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//
switch(command) {
//=================================================//
//=================================================//
//=================================================//
case 'inspect': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!args[0]) return reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
rm76.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await rm76.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
rm76.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await rm76.parseMention(tekse) })
})
}
break
//=================================================//
case 'asupan':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/random`
rm76.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Success"}, {quoted:fake})
break
//=================================================//
case 'asupanukhty':
case 'asupan-ukhty':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/ukhty`
rm76.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted:fake})
break
//=================================================//
case 'asupan-santuy':
case 'asupansantuy':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/santuy`
rm76.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted:fake})
break
//=================================================//
case 'hijaber':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/hijaber`
rm76.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:fake})
break
//=================================================//
case 'cecan-indo':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/indonesia`
rm76.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:fake})
break
//=================================================//
case 'cecan-malaysia':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/malaysia`
rm76.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:fake})
break
//=================================================//
case 'cecan-thai':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/thailand`
rm76.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:fake})
break
//=================================================//
case 'cecan-vietnam':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/vietnam`
rm76.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:fake})
break
//=================================================//
case 'cecan-korea':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/korea`
rm76.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:fake})
break
//=================================================//
case 'cecan-jepan':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/japan`
rm76.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:fake})
break
//=================================================//
case 'cecan':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/cecan`
rm76.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:fake})
break
//=================================================//
case 'ban': case 'banned': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!args[0]) return reply(`*Enter Option Select add or delete*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return reply('*User has been banned*')
banned.push(orgnye)
reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return reply('*ban lifted you happy*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
reply(`*Success Removing Banned Users*`)
} else {
reply("Error")
}
}
break
//=================================================//
//=================================================//
case 'searchgroups':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!q) return reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
//=================================================//
//=================================================//
case 'once': case 'toonce': { 
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await rm76.downloadAndSaveMediaMessage(quoted)
rm76.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: fake })
} else if (/video/.test(mime)) {
anu = await rm76.downloadAndSaveMediaMessage(quoted)
rm76.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: fake })
}
}
break
//=================================================//
//=================================================//
case 'translate': case 'terjemahan': case 'tr': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!args.join(" ")) return reply("Text?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
reply(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
break
//=================================================//
case 'bully': case 'waifu': case 'cuddle': case 'neko': case 'cry': case 'kiss': case 'hug': case 'awoo': case 'lick': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let anu = await getBuffer(`https://yx-api.herokuapp.com/api/sfw/${command}`)
rm76.sendMessage(m.chat, { image: anu, caption: `NihKak` }, { quoted:fake})
}
break
//=================================================//
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
rm76.sendImage(m.chat, data.url, mess.success, m)
})
break
//=================================================//
//=================================================//
case 'darkjoke':{
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=apivproject`)
rm76.sendMessage(m.chat, { image: anu, caption: `Beliau ini....` }, { quoted:fake}).catch((err) => reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'meme':{
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme?APIKEY=apivproject`)
rm76.sendMessage(m.chat, { image: anu, caption: `Bilek` }, { quoted:fake}).catch((err) => reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'meme2':{
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme2?APIKEY=apivproject`)
rm76.sendMessage(m.chat, { image: anu, caption: `bilek` }, { quoted:fake}).catch((err) => reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'ss': case 'ssweb': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
rm76.sendMessage(m.chat, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted:fake }).catch((err) => reply(jsonformat('*error*')))
}
break
//=================================================//
case 'fajar-news':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case "quotes":
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
var res = await Quotes()
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ""
reply(teks)
break
//=================================================//
case "darkjoke": case "darkjokes":
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
var res = await Darkjokes()
teks = "*Darkjokes*"
rm76.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : fake })
break
//=================================================//
case 'cnn-news':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca-search':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc-news':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rm76.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : fake })
})
break
//=================================================//
case 'tribun-news':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rm76.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : fake })
})
break
//=================================================//
case 'indozone-news':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rm76.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : fake })
})
break
//=================================================//
case 'kompas-news':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rm76.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : fake })
})
break
//=================================================//
case 'detik-news':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rm76.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : fake })
})
break
//=================================================//
case 'daily-news':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rm76.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : fake })
})
break
//=================================================//
case 'inews-news':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone-news':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rm76.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : fake })
})
break
//=================================================//
case 'sindo-news':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo-news':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rm76.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : fake })
})
break
//=================================================//
case 'antara-news':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rm76.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : fake })
})
break
//=================================================//
case "kontan-news":
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rm76.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : fake })
})
break
//=================================================//
case "merdeka-news":
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rm76.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : fake })
})
break
//=================================================//
case "jalantikus-meme":
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
var res = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${res}`
teks += ""
rm76.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : fake })
break
//=================================================//
/*Random*/
 case 'apakah':
 if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
rm76.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: fake })
break
//=================================================//
case 'bisakah':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
rm76.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: fake })
break
//=================================================//
case 'bagaimanakah':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
rm76.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: fake })
break
//=================================================//
case 'rate':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const te = ra[Math.floor(Math.random() * ra.length)]
rm76.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: fake })
break
//=================================================//
case 'gantengcek':
case 'cekganteng':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} rm76`)
const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const teng = gan[Math.floor(Math.random() * gan.length)]
rm76.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: fake })
break
//=================================================//
case 'cantikcek':
case 'cekcantik':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} rm76`)
const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const tik = can[Math.floor(Math.random() * can.length)]
rm76.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: fake })
break
//=================================================//
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'lesbicek':
case 'ceklesbi':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
rm76.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: fake })
break
//=================================================//
case 'kapankah':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
rm76.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: fake })
break
//=================================================//
case 'wangy':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!q) return reply (`Contoh : .wangy rm76`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
 reply(awikwok)
break
//=================================================//
case 'cekmati':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!q) return reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
//=================================================//
//=================================================//
//=================================================//
case 'suitpvp': case 'suit': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_
@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit
Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await rm76.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) rm76.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
//=================================================//
case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n 13k Per Group via E-Walet 1 Month\n 18k via pulsa 1 Month\n\n Premium Price Bot\n 8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6282142108243 (Owner)\n\nDonate For Me : \n\n Paypal : https://trakteer.id/fake-mods-wa-rm76\n Saweria : https://saweria.co/fakemodswa` }, { quoted: fake })
}
break
//=================================================//
case 'sc': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
reply('Telegram : https://t.me/rm76857\n\n Sc Bot : ${linkwm}')
}
break
//=================================================//
case 'chat': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
rm76.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
rm76.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'archive') {
rm76.chatModify({archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
rm76.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'read') {
rm76.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unread') {
rm76.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'delete') {
rm76.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
break
//=================================================//
case 'family100': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if ('family100'+m.chat in _family100) {
reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await rm76.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
//=================================================//
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
//=================================================//
//=================================================//
case 'mediafire': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return  
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait zimbot processing..._

*${wm}*`
reply(`${result4}`)
rm76.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : fake }).catch ((err) => reply('*Failed to download File*'))
}
break
//=================================================//
//=================================================//
//=================================================//
case 'react': {
 reactionMessage = {
react: {
text: '🇮🇩',
key: { remoteJid: from, fromMe: false, id: quoted.id }
}
}
rm76.sendMessage(from, reactionMessage)
}
break
//=================================================//
case 'join': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
await rm76.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'keluar': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
await rm76.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'setexif': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
 if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
 if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
reply(`Exif berhasil diubah menjadi\n\n Packname : ${global.packname}\n Author : ${global.author}`)
}
break
//=================================================//
case 'kick': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw reply(mess.group)
if (!isBotAdmins) throw reply(mess.botAdmin)
if (!isAdmins) throw reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rm76.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'add': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw reply(mess.group)
if (!isBotAdmins) throw reply(mess.botAdmin)
if (!isAdmins) throw reply(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rm76.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'promote': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw reply(mess.group)
if (!isBotAdmins) throw reply(mess.botAdmin)
if (!isAdmins) throw reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rm76.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'demote': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw reply(mess.group)
if (!isBotAdmins) throw reply(mess.botAdmin)
if (!isAdmins) throw reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rm76.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'block': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rm76.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rm76.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'setname': case 'setsubject': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw reply(mess.group)
if (!isBotAdmins) throw reply(mess.botAdmin)
if (!isAdmins) throw reply(mess.admin)
if (!text) throw 'Text ?'
await rm76.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'setdesc': case 'setdesk': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw reply(mess.group)
if (!isBotAdmins) throw reply(mess.botAdmin)
if (!isAdmins) throw reply(mess.admin)
if (!text) throw 'Text ?'
await rm76.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'nsfw': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return reply('Sudah Aktif')
ntnsfw.push(from)
reply('Sukses Telah mengaktifkan Nsfw Di group Ini')
var groupe = await rm76.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
rm76.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya`, contextInfo: { mentionedJid : mems }}, {quoted:fake})
} else if (args[0] === "off") {
if (!AntiNsfw) return reply('Sudah Non Aktif')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
reply('Sukses Mematikan Nsfw di group ini')
} else {
const anuu = {
video:fs.readFileSync("./baseikal/video/rm76.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Ketik Text Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan
\n\n*HELLO SANGEAN\n\n
trap
gasm
nwaifu
hneko `,
}
rm76.sendMessage(m.chat, anuu, `${global.botname}`, m)
}
}
break
case 'trap' :
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) return reply(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)
 const trapbot = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
rm76.sendMessage(m.chat, trapbot, { quoted:fake }).catch(err => {
 return('Error!')
})
break
case 'hentai-neko' :
case 'hneko' :
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) return reply(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 const hnekobot = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
rm76.sendMessage(m.chat, hnekobot, { quoted:fake }).catch(err => {
 return('Error!')
})
break
case 'hentai-waifu' :
case 'nwaifu' :
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) return reply(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const nwaifubot = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
rm76.sendMessage(m.chat, nwaifubot, { quoted:fake }).catch(err => {
 return('Error!')
})
break
case 'gasm':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait) 
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
 const wbuttsss = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
rm76.sendMessage(m.chat, wbuttsss,{ quoted:fake }).catch(err => {
 return('Error!')
})
break
case 'penjara':
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!q) return reply(`*Contoh* :\n#penjara namagroup`)
let cret = await rm76.groupCreate(args.join(" "), [])
let response = await rm76.groupInviteCode(cret.id)
teks = `「 *Create Group* 」

_▸ Name : ${cret.subject}_
_▸ Owner : @${cret.owner.split("@")[0]}_
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_
https://chat.whatsapp.com/${response}
`
reply(teks)
break
case 'setppbot': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
reply(mess.wait)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var media = await rm76.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./baseikal/lib/myfunc")
var { img } = await generateProfilePicture(media)
await rm76.query({ tag: 'iq',attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await rm76.updateProfilePicture(botNumber, { url: media }) }
reply(mess.success)
} catch { reply('Gagal Mengganti Photo Profile') }
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
reply(mess.wait)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await rm76.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./baseikal/lib/myfunc")
var { img } = await generateProfilePicture(media)
await rm76.query({ tag: 'iq',attrs: { to: m.chat, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await rm76.updateProfilePicture(m.chat, { url: media }) }
reply(mess.success)
} catch { reply('Gagal Mengganti Photo Profile') }
}
break
//=================================================//
case 'tagall': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw reply(mess.group)
if (!isBotAdmins) throw reply(mess.botAdmin)
if (!isAdmins) throw reply(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += ` @${mem.id.split('@')[0]}\n`
}
rm76.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fake })
}
break
//=================================================//
case 'hidetag': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw reply(mess.group)
if (!isBotAdmins) throw reply(mess.botAdmin)
if (!isAdmins) throw reply(mess.admin)
rm76.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fake })
}
break
//=================================================//
case 'style': case 'styletext': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./baseikal/lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += ` *${i.name}* : ${i.result}\n\n`
}
reply(teks)
}
break
//=================================================//
//=================================================//
 case 'group': case 'grup': {
 if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw reply(mess.group)
if (!isBotAdmins) throw reply(mess.botAdmin)
if (!isAdmins) throw reply(mess.admin)
if (args[0] === 'close'){
await rm76.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await rm76.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
const anmu = {
video:fs.readFileSync("./baseikal/video/rm76.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mode Group`,
}
rm76.sendMessage(m.chat, anmu, `Mode Group`, rm76.user.name, m)
 }
}
break
//=================================================//
case 'editinfo': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw reply(mess.group)
if (!isBotAdmins) throw reply(mess.botAdmin)
if (!isAdmins) throw reply(mess.admin)
 if (args[0] === 'open'){
await rm76.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await rm76.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else {
 const anju = {
video:fs.readFileSync("./baseikal/video/rm76.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mode Edit Info`,
}
rm76.sendMessage(m.chat, anju, `Mode Edit Info`, rm76.user.name, m)
}
}
break
//=================================================//
 case 'mute': {
 if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw reply(mess.group)
if (!isBotAdmins) throw reply(mess.botAdmin)
if (!isAdmins) throw reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
reply(`${rm76.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
reply(`${rm76.user.name} telah di unmute di group ini !`)
} else {
 const anaku = {
video:fs.readFileSync("./baseikal/video/rm76.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mute Bot`,
}
rm76.sendMessage(m.chat, anaku, `Mute Bot`, rm76.user.name, m)
}
 }
 break
//=================================================//
case 'linkgroup': case 'linkgc': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw reply(mess.group)
if (!isBotAdmins) throw reply(mess.botAdmin)
let response = await rm76.groupInviteCode(m.chat)
rm76.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'ephemeral': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) throw reply(mess.group)
if (!isBotAdmins) throw reply(mess.botAdmin)
if (!isAdmins) throw reply(mess.admin)
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await rm76.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await rm76.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
break
//=================================================//
case 'delete': case 'del': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
rm76.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
//=================================================//
case 'infochat': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted) reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += ` @${i.userJid.split('@')[0]}\n`
teks += ` ┗━ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}  *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
rm76.sendTextWithMentions(m.chat, teks, m)
}
break
//=================================================//
case 'q': case 'quoted': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted) return reply('Reply Pesannya!!')
let wokwol = await rm76.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
//=================================================//
case 'listpc': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 rm76.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
case 'listgc': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await rm76.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 rm76.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
 case 'listonline': case 'liston': {
 if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
rm76.sendText(m.chat, 'List Online:\n\n' + online.map(v => ' @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
//=================================================//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await rm76.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await rm76.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'ebinary': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} text`
let { eBinary } = require('./baseikal/lib/binary')
let eb = await eBinary(text)
reply(eb)
}
break
//=================================================//
case 'dbinary': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} text`
let { dBinary } = require('./baseikal/lib/binary')
let db = await dBinary(text)
reply(db)
}
break
//=================================================//
case 'emojimix': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await rm76.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await rm76.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
 case 'attp': case 'ttp': {
 if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
 if (!text) throw `Example : ${prefix + command} text`
 await rm76.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'rm76', 'morou', m, {asSticker: true})
 }
 break
case 'spam': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted) return reply("Reply pesanya!")
if (args.length == 0) return reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
quoted.copyNForward(m.chat, true)
}
} 
break
//=================================================//
 /*case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
 if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await quoted.download()
let { floNime } = require('./baseikal/lib/uploader')
let fatGans = await floNime(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
let FaTiH = await rm76.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(FaTiH)
}
 break */
//=================================================// 
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (text.includes('|')) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
reply(mess.wait)
arg = args.join(' ')
mee = await rm76.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./baseikal/lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await rm76.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break 
case 'toimage': case 'toimg': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await rm76.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
rm76.sendMessage(m.chat, { image: buffer }, { quoted: fake })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await rm76.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await rm76.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: fake })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
rm76.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : fake })
}
break
case 'tomp3': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
rm76.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${rm76.user.name}.mp3`}, { quoted : fake })
}
break
case 'tovn': case 'toptt': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./baseikal/lib/converter')
let audio = await toPTT(media, 'mp4')
rm76.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:fake})
}
break
case 'togif': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await rm76.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await rm76.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: fake })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./baseikal/lib/uploader')
let media = await rm76.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//=================================================//
case 'yts': case 'ytsearch': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += ` No : ${no++}\n Type : ${i.type}\n Video ID : ${i.videoId}\n Title : ${i.title}\n Views : ${i.views}\n Duration : ${i.timestamp}\n Upload At : ${i.ago}\n Author : ${i.author.name}\n Url : ${i.url}\n\n─────────────────\n\n`
}
rm76.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },caption: teks }, { quoted: fake })
}
break
//=================================================//
case 'google': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += ` *Title* : ${g.title}\n`
teks += ` *Description* : ${g.snippet}\n`
teks += ` *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
//=================================================//
case 'gimage': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} kaori cicak`
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
const mllo = {
image: { url: images },
caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`
}
rm76.sendMessage(m.chat, mllo, { quoted: fake })
})
}
break
//=================================================//
case 'play': case 'ytplay': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
const kals = {
image: { url: anu.thumbnail },
caption: `
 Title : ${anu.title}
 Ext : Search
 ID : ${anu.videoId}
 Duration : ${anu.timestamp}
 Viewers : ${anu.views}
 Upload At : ${anu.ago}
 Author : ${anu.author.name}
 Channel : ${anu.author.url}
 Description : ${anu.description}
 Url : ${anu.url}`
}
rm76.sendMessage(m.chat, kals, { quoted: fake })
}
break
//=================================================//
case 'ytmp3': case 'ytaudio': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let { yta } = require('./baseikal/lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
rm76.sendImage(m.chat, media.thumb, ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolusi : ${args[1] || '128kbps'}`, m)
rm76.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted:fake })
}
break
//=================================================//
case 'ytmp4': case 'ytvideo': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let { ytv } = require('./baseikal/lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
rm76.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolusi : ${args[1] || '360p'}` }, { quoted:fake })
}
break
//=================================================//
case 'getmusic': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let { yta } = require('./baseikal/lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
rm76.sendImage(m.chat, media.thumb, ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${urls[text - 1]}\n Ext : MP3\n Resolusi : ${args[1] || '128kbps'}`, m)
rm76.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: fake })
}
break
//=================================================//
case 'getvideo': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let { ytv } = require('./baseikal/lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
rm76.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${urls[text - 1]}\n Ext : MP3\n Resolusi : ${args[1] || '360p'}` }, { quoted: fake })
}
break
//=================================================//
case 'pinterest': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
rm76.sendMessage(m.chat, { image: { url: result }, caption: ' Media Url : '+result }, { quoted: fake })
}
break
//=================================================//
case 'couple': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
rm76.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: fake })
rm76.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: fake })
}
break
//=================================================//
case 'coffe': case 'kopi': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
const ko = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`
}
rm76.sendMessage(m.chat, ko, { quoted: fake })
}
break
//=================================================//
case 'wallpaper': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw 'Masukkan Query Title'
let { wallpaper } = require('./baseikal/lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
const mlo = {
image: { url: result.image[0] },
caption: ` Title : ${result.title}\n Category : ${result.type}\n Detail : ${result.source}\n Media Url : ${result.image[2] || result.image[1] || result.image[0]}`
}
rm76.sendMessage(m.chat, mlo, { quoted: fake })
}
break
//=================================================//
case 'wikimedia': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw 'Masukkan Query Title'
let { wikimedia } = require('./baseikal/lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
const mbk = {
image: { url: result.image },
caption: ` Title : ${result.title}\n Source : ${result.source}\n Media Url : ${result.image}`
}
rm76.sendMessage(m.chat, mbk, { quoted: fake })
}
break
//=================================================//
case 'quotesanime': case 'quoteanime': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let { quotesAnime } = require('./baseikal/lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]

const anualas = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`
}
rm76.sendMessage(m.chat, anualas, { quoted: fake })
}
break
//=================================================//
case 'nomerhoki': case 'nomorhoki': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Nomor HP :* ${anu.message.nomer_hp}\n *Angka Shuzi :* ${anu.message.angka_shuzi}\n *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
//=================================================//
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Mimpi :* ${anu.message.mimpi}\n *Arti :* ${anu.message.arti}\n *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} rm76, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} rm76, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'suamiistri': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} rm76, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Nama Suami :* ${anu.message.suami.nama}\n *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n *Nama Istri :* ${anu.message.istri.nama}\n *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalancinta': case 'ramalcinta': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} rm76, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Sisi Positif :* ${anu.message.sisi_positif}\n *Sisi Negatif :* ${anu.message.sisi_negatif}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} rm76 Gans`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Arti :* ${anu.message.arti}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} rm76, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Life Path :* ${anu.message.life_path}\n *Destiny :* ${anu.message.destiny}\n *Destiny Desire :* ${anu.message.destiny_desire}\n *Personality :* ${anu.message.personality}\n *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} rm76|Putri`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
rm76.sendImage(m.chat,anu.message.gambar, ` *Nama Anda :* ${anu.message.nama_anda}\n *Nama Pasangan :* ${anu.message.nama_pasangan}\n *Sisi Positif :* ${anu.message.sisi_positif}\n *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Tanggal Pernikahan :* ${anu.message.tanggal}\n *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Rezeki :* ${anu.message.rejeki}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Pekerjaan :* ${anu.message.pekerjaan}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Analisa :* ${anu.message.analisa}\n *Angka Akar :* ${anu.message.angka_akar}\n *Sifat :* ${anu.message.sifat}\n *Elemen :* ${anu.message.elemen}\n *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Analisa :* ${anu.message.analisa}\n *Sektor :* ${anu.message.sektor}\n *Elemen :* ${anu.message.elemen}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendImage(m.chat, anu.message.image, ` *Lahir :* ${anu.message.tgl_lahir}\n *Simbol Tarot :* ${anu.message.simbol_tarot}\n *Arti :* ${anu.message.arti}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} rm76, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tahun_lahir}\n *Gender :* ${anu.message.jenis_kelamin}\n *Angka Kua :* ${anu.message.angka_kua}\n *Kelompok :* ${anu.message.kelompok}\n *Karakter :* ${anu.message.karakter}\n *Sektor Baik :* ${anu.message.sektor_baik}\n *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Lahir :* ${anu.message.tgl_lahir}\n *Kala Tinantang :* ${anu.message.kala_tinantang}\n *Info :* ${anu.message.info}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Lahir :* ${anu.message.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Info :* ${anu.message.info}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *Hari Naas :* ${anu.message.hari_naas}\n *Info :* ${anu.message.catatan}\n *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *tanggal Lahir :* ${anu.message.tgl_lahir}\n *Arah Rezeki :* ${anu.message.arah_rejeki}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Tanggal :* ${anu.message.tanggal}\n *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n *Watak Hari :* ${anu.message.watak_hari}\n *Naga Hari :* ${anu.message.naga_hari}\n *Jam Baik :* ${anu.message.jam_baik}\n *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} rm76, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} rm76, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Tanggal :* ${anu.message.tgl_memancing}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'verifikasi': case 'daftar':{
if (isRegistered) return reply('Akun Kamu Sudah Terverfikasi!!!')
await sendButRegis(from)
}
break
//=================================================//
//=================================================//
case 'nowa': {
if (isBan) return reply(`*Lu tu ga di ajak*`)
if (!args[0]) return reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return reply('lah?')
reply(mess.wait)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await rm76.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await rm76.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
//=================================================//
//=================================================//
case 'zodiak': case 'zodiac': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Zodiak :* ${anu.message.zodiak}\n *Nomor :* ${anu.message.nomor_keberuntungan}\n *Aroma :* ${anu.message.aroma_keberuntungan}\n *Planet :* ${anu.message.planet_yang_mengitari}\n *Bunga :* ${anu.message.bunga_keberuntungan}\n *Warna :* ${anu.message.warna_keberuntungan}\n *Batu :* ${anu.message.batu_keberuntungan}\n *Elemen :* ${anu.message.elemen_keberuntungan}\n *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return reply(anu.message)
rm76.sendText(m.chat, ` *Hasil :* ${anu.message}`, m)
}
break
//=================================================// 
//=================================================//
case 'ringtone': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} black rover`
let { ringtone } = require('./baseikal/lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
rm76.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: fake })
}
break
//=================================================//
case 'iqra': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
rm76.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:fake}).catch ((err) => reply(oh))
}
break
//=================================================//
case 'juzamma': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (args[0] === 'pdf') {
rm76.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:fake})
} else if (args[0] === 'docx') {
rm76.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:fake})
} else if (args[0] === 'pptx') {
rm76.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:fake})
} else if (args[0] === 'xlsx') {
rm76.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:fake})
} else {
reply(`Mau format apa ? Example : ${prefix + command} pdf
Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
break
//=================================================//
case 'hadis': case 'hadist': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1
Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
reply(`No. ${number}
${arab}
${id}`)
} catch (e) {
reply(`Hadis tidak ditemukan !`)
}
}
break
//=================================================//
case 'alquran': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
reply(txt)
rm76.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : fake })
}
break
//=================================================//
case 'tafsirsurah': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*」
*Pendek* : ${res.result.data.tafsir.id.short}
*Panjang* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
reply(txt)
}
break
//=================================================//
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await rm76.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
rm76.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : fake })
fs.unlinkSync(ran)
})
} else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//=================================================//
case 'setcmd': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
reply(`Done!`)
}
break
//=================================================//
case 'listcmd': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
rm76.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'lockcmd': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
reply('Done!')
}
break
//=================================================//
case 'addmsg': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
if (!text) throw `Example : ${prefix + command} nama file`
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
//=================================================//
case 'getmsg': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
rm76.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
//=================================================//
case 'listmsg': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let msgs = JSON.parse(fs.readFileSync('./baseikal/dbnye/database.json'))
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
reply(teks)
}
break
//=================================================//
case 'delmsg': case 'deletemsg': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
//=================================================//

case 'public': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.public = true
reply('Sukse Change To Public')
}
break
//=================================================//
case 'self': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.public = false
reply('Sukses Change To Self')
}
break
//=================================================//
case 'nowa':
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
var teks = body.slice(6)
if (!teks) return reply("lah?")
var numberPattern = /\d+/g;
var nomer = teks.match(numberPattern)
var random_length = teks.length - nomer[0].length;
if (random_length == 1) {
    var random = 10
} else if (random_length == 2) {
    var random = 100
} else if (random_length == 3) {
    var random = 1000
} else if (random_length == 4) {
    var random = 10000
}
console.log(random)
var nomerny = `List Nomer\n`
for (let i = 0; i < random; i++) {
    var nu = ['1','2','3','4','5','6','7','8','9']
    var dom1 = nu[Math.floor(Math.random() * nu.length)]
    var dom2 = nu[Math.floor(Math.random() * nu.length)]
    var dom3 = nu[Math.floor(Math.random() * nu.length)]
    var dom4 = nu[Math.floor(Math.random() * nu.length)]
    if (random_length == 1) {
var rndm = `${dom1}`
var gdaftar = []
    } else if (random_length == 2) {
rndm = `${dom1}${dom2}`
    } else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
    } else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
    }
    var anu = await rm76.getName(`${nomer[0]}${i}@s.whatsapp.net`);
    var bionye = await rm76.setStatus(`${nomer[0]}${i}@s.whatsapp.net`);
    var anuu = anu ? anu : false;
    try {
if (nomerny.includes(m.quoted.sender("@")[0])) {
//console.log(i)
} else {
nomerny += `NO: wa.me/${m.quoted.sender("@")[0]}\nBIO: ${bionye.status}\n\n`
}
    } catch {
console.log(i)
    }
}
reply(nomerny)
console.log("Done dump")
break
case 'ping': case 'botstatus': case 'statusbot': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
}
break
//=================================================//
case 'speedtest': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
 } finally {
let { stdout, stderr } = o
if (stdout.trim()) reply(stdout)
if (stderr.trim()) reply(stderr)
}
}
break
//=================================================//
case 'kalkulator': case 'kal': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (args.length < 1) return reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('Error')
} else {
reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
//=================================================//
case 'bokep':{
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
rm76.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted:fake })
}
break


case 'antilink': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return reply('Sudah Aktif')
ntilink.push(from)
reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
reply('Succes mematikan antilink di group ini 🌷')
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
case 'tiktok': case 'tiktoknowm':
if (isBan) throw reply(`*Lu tu ga di ajak*`)
if (!q) return reply(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dede = await cl.downloader.tiktok(`${q}`)
krt = await getBuffer(dede.nowm)
reply(mess.wait)
rm76.sendMessage(m.chat, { video: krt, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Video Nya Kak` }, { quoted:fake })
break
//=================================================//
case 'cowner': {
if (!isCreator) return
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (!args[0]) return reply(`*Example* : #cowner add 628xxxx`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return reply('User sudah menjadi owner')
owner.push(orgnye)
reply(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
reply(`Succes del friends`)
} else {
reply("Error")
}
}
break
case 'pacarowner':{
reply('CARI APA KAWAN ;)')
}
break
//=================================================//
case 'getname': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (qtod === "true") {
namenye = await rm76.getName(m.quoted.sender)
reply(namenye)
} else if (qtod === "false") {
rm76.sendMessage(from, {text:"Reply orangnya"}, {quoted:fake})
}
}
break
//=================================================//
case 'getpic': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
if (qtod === "true") {
try {
pporg = await rm76.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
rm76.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await rm76.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
rm76.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
//=================================================//
case 'owner': case 'crator': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.sendContact(m.chat, global.owner, m)
}
break
//=================================================//
//=================================================//
case 'menu':{
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
timestampe = speed();
latensie = speed() - timestampe 
/* let sections = [
                {
                title: `\n`,
                rows: [
                {title: "RANDOM IMAGE", rowId: `scraperimage`, description: `Displays the Random Image menu`},
                {title: "COVEVERT MENU", rowId: `scrapconvert`, description: `Displays the Convert Menu`},
                {title: "ASUPAN MENU", rowId: `asupanmata`, description: `Displays the Asupan Menu`},
                {title: "NSFW MENU", rowId: `nsfw`, description: `Displays the Nsfw menu`},
                {title: "FUN MENU", rowId: `funnmenu`, description: `Displays the Fun Menu`},
                {title: "MUSLIM MENU", rowId: `islamiyah`, description: `Displays the Muslim Menu`}, 
                {title: "PRIMBON MENU", rowId: `primbonmenu`, description: `Displays the Primbon Menu`},
  {title: "SEARCH MENU", rowId: `searchmenu`, description: `Displays the Search menu`},
                {title: "NEWS CMD", rowId: `beritanews`, description: `Displays the News Menu`},
                {title: "CMD MENU", rowId: `cmdmenu`, description: `Displays the CMD Menu`},
                {title: "OWNER MENU", rowId: `ownermenu`, description: `Displays the owner menu`},
                {title: "GROUP MENU", rowId: `groupmenu`, description: `Displays the Group Menu`},
                {title: "DOWNLOAD MENU", rowId: `downloadmenu`, description: `Displays the DOWNLOAD Menu`}, 
                {title: "VOICE CHANGER", rowId: `voicechanger`, description: `Displays the Voice Changer Menu`}
                ]
                },
                ]
                rm76.sendListMsg(m.chat, `HAI SAYA ${botname} Selamat ${salam}
▰▭▰▭▰▭▰▭▰▭▰▭▰▭
*INFO BOT*
Speed : ${latensie.toFixed(4)} miliseconds
Runtime : ${runtime(process.uptime())}
Host : ${os.hostname()}
Plaform : ${os.platform()}
▰▭▰▭▰▭▰▭▰▭▰▭▰▭
*THANKS TO*
- HW MODS
- DIKA ARDNT
- ADIWAJSING (BAILEYS)
- ALL USER BOT
- ALL PROGRAMING 
▰▭▰▭▰▭▰▭▰▭▰▭▰▭
NOTE ; JANGAN SPAM AJG 😊
▰▭▰▭▰▭▰▭▰▭▰▭▰▭`, rm76.user.name, `Jangan lupa bernafas`, `CLICK HERE`, sections, m)*/      
let btn = [{
      quickReplyButton: {
      displayText: 'ALL MENU',
      id: 'assistandddddd'
      }      
      }]
 rm76.send5ButLoc(m.chat, `▰▭▰▭▰▭▰▭▰▭▰▭▰▭
*INFO BOT*
Speed : ${latensie.toFixed(4)} miliseconds
Runtime : ${runtime(process.uptime())}
Host : ${os.hostname()}
Plaform : ${os.platform()}
▰▭▰▭▰▭▰▭▰▭▰▭▰▭
*THANKS TO*
- HW MODS
- DIKA ARDNT
- ADIWAJSING (BAILEYS)
- ALL USER BOT
- ALL PROGRAMING 
▰▭▰▭▰▭▰▭▰▭▰▭▰▭
NOTE ; JANGAN SPAM AJG 😊
▰▭▰▭▰▭▰▭▰▭▰▭▰▭`, `${wm}`, fs.readFileSync('./thumb.jpg'), btn) 
            }
            break
//=================================================//
case 'bot': {
if (!isCreator) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/fakemodsgans.jpg') }, { upload: rm76.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": ` © Hay Kak ${pushname} 👋 Selamat ${salam} Apa Yang Bisa Saya Bantu 🙏`,
"description": ` - © ${wm} -
SILAHKAN KETIK MENU UNTUK MENGGUNAKAN BOT LEBIB LANJUT ✌️`,
"currencyCode": "IDR",
"footerText": ` `,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `${wm}`,
"url": "Wa.me/6282142108243"
},
"businessOwnerJid": "6282142108243@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: fake })
rm76.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
//=================================================//
case 'assistandddddd': case 'help':{
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
reply(`
*DOWNLOAD COMMAND* 
${symbol}pinterestdl [url]
${symbol}ytmp3 [url]
${symbol}ytmp4 [url]
${symbol}getmusic [query]
${symbol}getvideo [query]
${symbol}mediafire [url]

*OWNER COMMAND* 
${symbol}react [emoji]
${symbol}chat [option]
${symbol}join [link]
${symbol}leave
${symbol}block @user
${symbol}unblock @user
${symbol}bcText [text]
${symbol}setppbot [image]
${symbol}setexif
${symbol}ping
${symbol}owner
${symbol}creator
${symbol}menu / help /?
${symbol}delete
${symbol}infochat
${symbol}quoted
${symbol}pacarowner
${symbol}cowner
${symbol}listpc
${symbol}listgc
${symbol}listonline
${symbol}speedtest

*COVRT CMD* 
${symbol}attp
${symbol}ttp
${symbol}toimage
${symbol}sticker
${symbol}emojimix
${symbol}emojimix2
${symbol}tovideo
${symbol}togif
${symbol}tourl
${symbol}tovn
${symbol}toonce
${symbol}tomp3
${symbol}toaudio
${symbol}ebinary
${symbol}dbinary
${symbol}styletext
${symbol}smeme
${symbol}ss [url]

*RANDOM IMAGE* 
${symbol}coffe
${symbol}quotesanime
${symbol}couple
${symbol}wibu
${symbol}loli
${symbol}bully
${symbol}waifu
${symbol}cuddle
${symbol}neko
${symbol}cry
${symbol}kiss
${symbol}hug
${symbol}lick
${symbol}awoo
${symbol}yeet
${symbol}bite
${symbol}lick
${symbol}pat
${symbol}kill
${symbol}nom
${symbol}poke
${symbol}wink
${symbol}bonk
${symbol}glomp
${symbol}smug
${symbol}blush
${symbol}wave
${symbol}smile
${symbol}highfive
${symbol}cringe
${symbol}dance
${symbol}happy
${symbol}handhold 
${symbol}darkjoke
${symbol}meme
${symbol}meme2

*COMMAND MSG* 
${symbol}setcmd
${symbol}listcmd
${symbol}delcmd
${symbol}lockcmd
${symbol}addmsg
${symbol}listmsg
${symbol}getmsg
${symbol}delmsg

*SEARCH COMMAND* 
${symbol}play [query]
${symbol}yts [query]
${symbol}google [query]
${symbol}gimage [query]
${symbol}pinterest [query]
${symbol}wallpaper [query]
${symbol}wikimedia [query]
${symbol}ytsearch [query]
${symbol}ringtone [query]
${symbol}searchgroups [query]

*ASUPAN BANH* 
${symbol}asupan
${symbol}asupanukhty
${symbol}asupansantuy
${symbol}cecan-malaysia
${symbol}cecan-indo
${symbol}hijaber
${symbol}cecan-korea
${symbol}cecan-vietnam
${symbol}cecan-thai
${symbol}cecan-jepan
${symbol}cecan
${symbol}bokep

*VOICE COMMAND* 
${symbol}bass
${symbol}blown
${symbol}deep
${symbol}earrape
${symbol}fast
${symbol}fat
${symbol}nightcore
${symbol}reverse
${symbol}robot
${symbol}slow
${symbol}tupai

*GROUP COMMAND* 
${symbol}linkgroup
${symbol}ephemeral [option]
${symbol}setppgc [image]
${symbol}setname [text]
${symbol}setdesc [text]
${symbol}group [option]
${symbol}editinfo [option]
${symbol}add @user
${symbol}kick @user
${symbol}ban [targer]
${symbol}hidetag [text]
${symbol}tagall [text]
${symbol}promote @user
${symbol}demote @user
${symbol}inspect
${symbol}mute on / off
${symbol}getname
${symbol}translate
${symbol}kalkulator
${symbol}intro
${symbol}getpic
${symbol}penjara
${symbol}intro

*NEWS COMMAND* 
${symbol}merdeka-news
${symbol}kontan-news 
${symbol}cnbc-news
${symbol}tribun-news
${symbol}indozone-news
${symbol}kompas-news
${symbol}detik-news
${symbol}daily-news
${symbol}inews-news
${symbol}okezone-news
${symbol}sindo-news
${symbol}tempo-news
${symbol}antara-news
${symbol}cnn-news
${symbol}fajar-news

*ISLAM COMMAND* 
${symbol}iqra
${symbol}hadist
${symbol}alquran
${symbol}juzamma
${symbol}tafsirsurah

*PRIMBON COMMAND* 
${symbol}nomorhoki
${symbol}artimimpi
${symbol}artinama
${symbol}ramaljodoh
${symbol}ramaljodohbali
${symbol}suamiistri
${symbol}ramalcinta
${symbol}cocoknama
${symbol}pasangan
${symbol}jadiannikah
${symbol}sifatusaha
${symbol}rezeki
${symbol}pekerjaan
${symbol}nasib
${symbol}penyakit
${symbol}tarot
${symbol}fengshui
${symbol}haribaik
${symbol}harisangar
${symbol}harisial
${symbol}nagahari
${symbol}arahrezeki
${symbol}peruntungan
${symbol}weton
${symbol}karakter
${symbol}keberuntungan
${symbol}memancing
${symbol}masasubur
${symbol}zodiak
${symbol}shio

*FUN COMMAND* 
${symbol}bagaimanakah
${symbol}kapankah
${symbol}apakah
${symbol}bisakah
${symbol}rate
${symbol}wangy
${symbol}gantengcek
${symbol}cekganteng
${symbol}cantikcek
${symbol}cekcantik
${symbol}sangecek
${symbol}ceksange
${symbol}gaycek
${symbol}cekgay
${symbol}lesbicek
${symbol}halah
${symbol}hilih
${symbol}huluh
${symbol}heleh
${symbol}holoh
${symbol}delttt
${symbol}suitpvp [@tag]`)
ajg = fs.readFileSync('./baseikal/sound/pe.mp3')
fakyou = fs.readFileSync('./baseikal/sound/p.mp3')
anu1 = fs.readFileSync('./baseikal/sound/anu1.mp3')
anu2 = fs.readFileSync('./baseikal/sound/anu2.mp3')
anu3 = fs.readFileSync('./baseikal/sound/anu3.mp3')
anu4 = fs.readFileSync('./baseikal/sound/anu4.mp3')
 nyong = pickRandom([ajg, fakyou, anu1, anu2, anu3, anu4])
rm76.sendMessage(m.chat, {audio: nyong, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})      
}
break
/*
//=================================================//
//=================================================//
case 'primbonmenu': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.sendMessage(m.chat, { image: kalimaggee, caption: `
`,
contextInfo:{"externalAdReply": {"title": `${wm}`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `${linkwm}`,
thumbnailUrl: `${tamnelIMG}`, 
thumbnail: ppnyausers,
}
}}, { quoted:fake})
}
break
case 'islamiyah': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.sendMessage(m.chat, { image: kalimaggee, caption: `
`,
contextInfo:{"externalAdReply": {"title": `${wm}`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `${linkwm}`,
thumbnailUrl: `${tamnelIMG}`, 
thumbnail: ppnyausers,
}
}}, { quoted:fake})
}
break
//=================================================//
case 'beritanews': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.sendMessage(m.chat, { image: kalimaggee, caption: `
  `,
contextInfo:{"externalAdReply": {"title": `${wm}`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `${linkwm}`,
thumbnailUrl: `${tamnelIMG}`, 
thumbnail: ppnyausers,
}
}}, { quoted:fake})
}
break
//=================================================//
case 'groupmenu': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.sendMessage(m.chat, { image: kalimaggee, caption: `
 `,
contextInfo:{"externalAdReply": {"title": `${wm}`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `${linkwm}`,
thumbnailUrl: `${tamnelIMG}`, 
thumbnail: ppnyausers,
}
}}, { quoted:fake})
}
break
//=================================================//
case 'voicechanger': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.sendMessage(m.chat, { image: kalimaggee, caption: `
 `,
contextInfo:{"externalAdReply": {"title": `${wm}`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `${linkwm}`,
thumbnailUrl: `${tamnelIMG}`, 
thumbnail: ppnyausers,
}
}}, { quoted:fake})
}
break
//=================================================//
case 'asupanmata': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.sendMessage(m.chat, { image: kalimaggee, caption: `
 `,
contextInfo:{"externalAdReply": {"title": `${wm}`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `${linkwm}`,
thumbnailUrl: `${tamnelIMG}`, 
thumbnail: ppnyausers,
}
}}, { quoted:fake})
}
break
//=================================================//
case 'searchmenu': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.sendMessage(m.chat, { image: kalimaggee, caption: `
`,
contextInfo:{"externalAdReply": {"title": `${wm}`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `${linkwm}`,
thumbnailUrl: `${tamnelIMG}`, 
thumbnail: ppnyausers,
}
}}, { quoted:fake})
}
break
//=================================================//
case 'scrapconvert': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.sendMessage(m.chat, { image: kalimaggee, caption: `
`,
contextInfo:{"externalAdReply": {"title": `${wm}`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `${linkwm}`,
thumbnailUrl: `${tamnelIMG}`, 
thumbnail: ppnyausers,
}
}}, { quoted:fake})
}
break
//=================================================//
case 'cmdmenu': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.sendMessage(m.chat, { image: kalimaggee, caption: `
`,
contextInfo:{"externalAdReply": {"title": `${wm}`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `${linkwm}`,
thumbnailUrl: `${tamnelIMG}`, 
thumbnail: ppnyausers,
}
}}, { quoted:fake})
}
break
//=================================================//
case 'downloadmenu': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.sendMessage(m.chat, { image: kalimaggee, caption: `
`,
contextInfo:{"externalAdReply": {"title": `${wm}`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `${linkwm}`,
thumbnailUrl: `${tamnelIMG}`, 
thumbnail: ppnyausers,
}
}}, { quoted:fake})
}
break
//=================================================//
case 'ownermenu': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.sendMessage(m.chat, { image: kalimaggee, caption: `

`,
contextInfo:{"externalAdReply": {"title": `${wm}`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `${linkwm}`,
thumbnailUrl: `${tamnelIMG}`, 
thumbnail: ppnyausers,
}
}}, { quoted:fake})
}
break
//=================================================//
case 'scraperimage': {
if (isBan) throw reply(`*Lu tu ga di ajak*`)
//if (!isRegistered) return replyReg(mess.verif)
rm76.sendMessage(m.chat, { image: kalimaggee, caption: `
`,
contextInfo:{"externalAdReply": {"title": `${wm}`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `${linkwm}`,
thumbnailUrl: `${tamnelIMG}`, 
thumbnail: ppnyausers,
}
}}, { quoted:fake})
}
break*/
//=================================================//
//=================================================//
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return 
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}
//=================================================//
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('status@broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
rm76.copyNForward(m.chat, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})