let fetch = require('node-fetch')
let handler = async (m, { msgsz, args    }) => {
 try {    response = args.join(' ').split('|')
  if (!args[0]) throw 'Enter'
  msgsz.reply(m.chat, '*Wait a minuteโณ*\nprocessing โ๏ธ...')
  let res = `https://caliphapi.com/api/lolimaker?text=${response[0]}&text2=elyas&apikey=9AmAiNPq`
  msgsz.sendFile(m.chat, res, 'lolilogo.jpg', mainfooter, m, false)
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

    handler.help1 = ['logo2'].map(v => v + ' <text>')
handler.help = ['๐ป๐พ๐ถ๐พ๐ธ'].map(v => v + '')
handler.tags = ['maker']
handler.command = /^(logo2)$/i

module.exports = handler
