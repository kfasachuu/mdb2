let fetch = require('node-fetch')
let handler = async (m, { msgsz, args    }) => {
 try {    response = args.join(' ')
  if (!args[0]) throw 'Enter text\nExample: .logo1 Wizard'
   msgsz.reply(m.chat, '*Wait a minuteโณ*\nProcessing โ๏ธ...')
  let res = `https://caliphapi.com/api/kaneki?text=${response}&apikey=9AmAiNPq`
  msgsz.sendFile(m.chat, res, 'kaneki.jpg', mainfooter, m, false)
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

    handler.help1 = ['logo1'].map(v => v + ' <teks>')
handler.help = ['๐ป๐พ๐ถ๐พ๐ท'].map(v => v + ' ')
handler.tags = ['maker']
handler.command = /^(logo1)$/i
handler.limit = true
handler.register = false

module.exports = handler
