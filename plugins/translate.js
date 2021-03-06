const translate = require('translate-google-api')
const defaultLang = 'en'
const tld = 'cn'

let handler = async (m, { args, usedPrefix, command    }) => {
 try {   let err = `
Example:
${usedPrefix + command} <Ęá´É´Éĸ> [text]
${usedPrefix + command} id your messages

List of supported languages: https://cloud.google.com/translate/docs/languages
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = text ? text : m.quoted && m.quoted.text ? m.quoted.text : 'eh! no text!!?'

    let result
    try {
        result = await translate(`${text}`, {
            tld,
            to: lang,
        })
    } catch (e) {
        result = await translate(`${text}`, {
            tld,
            to: defaultLang,
        })
        throw err
    } finally {
        msgsz.reply(m.chat, result[0], m)
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
  msgsz.reply('120363041922413381@g.us', `đđŋđŋđŧđŋ : ${util.format(e)}\n\n
  đđŧđēđēđŽđģđą : ${usedPrefix+command}`, null, {})
} } 

    handler.help1 = ['á´Ęá´É´sĘá´á´á´'].map(v => v + ' <lang> <á´á´xá´>')
handler.help = ['đđ'].map(v => v + ' ')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i

module.exports = handler
