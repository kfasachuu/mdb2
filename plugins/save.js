let handler = async(m, { text, msgsz, usedPrefix, command    }) => {
 try { if (/saveme|sv(me|gua|g?w|aku)$/i.test(command)) {
     msgsz.sendContact(m.chat, `${m.sender.split('@')[0]}`, `${await msgsz.getName(m.sender)}`, m)
    }
    let teks = text
  if (/savehe?s?|svshe|savedia|svdia$/i.test(command)) {
     try {
     let who
     if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
     else who = m.quoted.sender ? m.quoted.sender : m.sender
     msgsz.sendContact(m.chat, `${who.split('@')[0]}`, `${await msgsz.getName(who)}`, m)
    } catch {
      throw `@tag or reply the contact `
      }
    }
  if (/save|sv$/i.test(command)) {
     if(!text) 
          teks = msgsz.getName(who)
     try {
     let who
     if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
     else who = m.quoted.sender ? m.quoted.sender : m.sender
     msgsz.sendContact(m.chat, `${who.split('@')[0]}`, teks, m) 
  } catch {
     msgsz.sendContact(m.chat, `${m.sender.split('@')[0]}`, teks, m)
  }
 }
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

    handler.help1 = ['sá´á´ á´ <@á´á´É¢/Êá´á´ÊÊ>']
handler.help = ['ðð°ðð´']
handler.tags = ['tools']
handler.command = /^save?$/i

module.exports = handler
