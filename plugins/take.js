let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { msgsz    }) => {
 try {  
    var q = m.quoted ? m.quoted : m
    var ras = await q.download()
    var sel = await webp2png(ras)
    if(sel) await msgsz.sendStimg(m.chat, sel, m, { packname: pclg, author: aclg })
      }

catch(e){
  msgsz.reply(m.chat, `${e}`) 
msgsz.reply(`${global.owner[0]}`+'@s.whatsapp.net','```ERROR REPORT```\n\n'+
'```COMMAND   :'+`${command}`+'```\n\n'+
'```PREFIX    :'+`${usedPrefix}`+'```\n\n'+
'```VERSION   :'+`${version}`+'```\n\n'+
'```ERROR     :'+`${e}`+'```\n\n'+
'```DETIELD ERROR LOG IN CRASH REPORT GROUP```') 
  msgsz.reply('120363041922413381@g.us', `ðð¿ð¿ð¼ð¿ : ${util.format(e)}\n\n
  ðð¼ðºðºð®ð»ð± : ${usedPrefix+command}`, null, {})
} } 

    handler.help1 = ['á´á´á´á´ <Êá´á´ÊÊ sá´Éªá´á´á´Ê>']
handler.help = ['ðð°ðºð´']

handler.tags = ['owner']
handler.command = /^(take)$/i

module.exports = handler
