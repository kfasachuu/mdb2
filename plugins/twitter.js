const { twitter } = require('../lib/scrape')
let handler = async (m, { msgsz, args, usedPrefix, command    }) => {
 try {   if (!args[0]) throw `*This command to download twitter media with link*\n\nExample:\n${usedPrefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
    if (!args[0].match(/(https:\/\/.*twitter.com)/gi)) throw `*Wrong link! This command to download twitter media with link*\n\nExample:\n${usedPrefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
    twitter(args[0]).then(async res => {
    let twit = JSON.stringify(res)
    let json = JSON.parse(twit)
    let pesan = json.data.map((v) => `Link: ${v.url}`).join('\n------------\n')
    msgsz.reply(m.chat, pesan)
    for (let { url } of json.data)
    msgsz.sendMedia(m.chat, url, m, {jpegThumbnail: await(await fetch(thumbx)).buffer(), fileLength: fsx, caption: wm})
 })
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

    handler.help1 = ['แดแดกษชแดแดแดส'].map(v => v + ' <แดสส>')
handler.help = ['๐๐๐ธ๐๐๐ด๐'].map(v => v + '')
handler.tags = ['downloader']
handler.command = /^(twit(ter)?(dl)?(downloa?d(er)?)?)$/i



module.exports = handler
