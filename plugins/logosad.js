let fetch = require('node-fetch')
let handler = async (m, { msgsz, args    }) => {
 try {    response = args.join(' ').split('|')
   if (!args[0]) return msgsz.reply(m.chat, 'Enter text1 dan text2\n\nExample: .sadlogo Whatsapp|Bug')
   msgsz.reply(m.chat, '*Wait a minuteโณ*\nprocessing โ๏ธ...')
  let res = `https://melcanz.com/sadboy?nama=${response[0]}&nama2=${response[1]}&apikey=dUtJxxvp`
  msgsz.sendFile(m.chat, res, 'sadboy.jpg', mainfooter, m, false)
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

    handler.help1 = ['sadlogo'].map(v => v + ' <text|text>')
handler.help = ['๐๐ฐ๐ณ๐ป๐พ๐ถ๐พ'].map(v => v + '')
handler.tags = ['maker']
handler.command = /^(sadlogo)$/i

module.exports = handler
