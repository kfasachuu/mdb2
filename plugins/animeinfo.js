let handler = async(m, { msgsz, command, text    }) => {
 try { if (!text) throw `Enter the anime!`
  msgsz.reply(m.chat, wait)
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw `${command} *${text}* not found!` //await res.text()
  let json = await res.json()
  let { title, synopsis, episodes, url, rated, score, image_url } = json.results[0]
  let ingfonya = `โจ๏ธ *Title:* ${title}
 *Episodes:* ${episodes}
 *Rating:* ${rated}
 *Score:* ${score}
 *Synopsis:* ${synopsis}
`.trim()
msgsz.sendTBI(m.chat, ingfonya, wm, image_url, `URL Info ${text}`, `${url}`, null ,null, null, null, m)
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

    handler.help1 = ['แดษดษชแดแดษชษดาแด <วซแดแดสส>']
handler.help = ['๐ฐ๐ฝ๐ธ๐ผ๐ด๐ธ๐ฝ๐ต๐พ']
handler.tags = ['anime']
handler.command = /^(animeinfo)$/i

handler.register = true 

module.exports = handler
