let handler = async (m, { msgsz, usedPrefix, command, text }) => {
  try { 
if(!text) return msgsz.reply(m.chat, `_Enter Query_`)
  let res = pickRandom(await scrape.wallpaper(text))
  let { title, type, image } = res
  let capt = `*Title:* ${title}\n*Type:* ${type}`
  await msgsz.sendBI(m.chat, capt, wm, image, [[`Next`, `${usedPrefix}${command} ${text}`]], m, {jpegThumbnail: await(await fetch(image)).buffer(), mentions:[m.sender] })
}

catch(e){
  msgsz.reply(m.chat, `${e}`) 
msgsz.reply(`${global.owner[0]}`+'@s.whatsapp.net','```ERROR REPORT```\n\n'+
'```COMMAND   :'+`${command}`+'```\n\n'+
'```PREFIX    :'+`${usedPrefix}`+'```\n\n'+
'```VERSION   :'+`${version}`+'```\n\n'+
'```ERROR     :'+`${e}`+'```\n\n'+
'```DETIELD ERROR LOG IN CRASH REPORT GROUP```') 
  msgsz.reply('120363041922413381@g.us', `๐๐ฟ๐ฟ๐ผ๐ฟ : ${util.format(e)}\n\n
  ๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ : ${usedPrefix+command}`, null, {})
} }
handler.tags = ['แดกแดสสแดแดแดแดส <วซแดแดสส>']
    handler.help1 = ['internet']
handler.help = ['๐๐ฐ๐ป๐ป๐ฟ๐ฐ๐ฟ๐ด๐']
handler.command = /^(wallpaper)$/i



module.exports = handler

function pickRandom(isi) {
        return isi[Math.floor(Math.random() * isi.length)]
    }
