let handler = async (m, { msgsz, args: [event], text    }) => {
 try {   if (!event) throw `List Event: welcome, bye, delete, promote, demote`
    let mentions = text.replace(event, '').trimStart()
    let who = mentions ? msgsz.parseMention(mentions) : []
    let participants = who.length ? who : [m.sender]
    let action = false
    msgsz.reply(m.chat, `Simulating ${event}...`)
    switch (event.toLowerCase()) {
        case 'add':
        case 'invite':
        case 'welcome':
            action = 'add'
            break
        case 'bye':
        case 'kick':
        case 'leave':
        case 'remove':
            action = 'remove'
            break
        case 'promote':
            action = 'promote'
            break
        case 'demote':
            action = 'demote'
            break
        case 'delete':
            deleted = m
            break
        default:
            throw `List Event: welcome, bye, delete, promote, demote`
    }
    if (action) return msgsz.participantsUpdate({
        id: m.chat,
        participants,
        action
    })
    return msgsz.onDelete(m)
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

    handler.help1 = ['sษชแดแดสแดแดแด <แดแด แดษดแด> [@แดแดษดแดษชแดษด]']
handler.help = ['๐๐ธ๐ผ๐๐ป๐ฐ๐๐ด']
handler.tags = ['owner']

handler.command = /^simulate$/i
module.exports = handler
