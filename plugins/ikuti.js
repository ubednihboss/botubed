let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

╠═〘 IKUTI UBED 〙 ═
║
║➥YOUTUBE: https://bit.ly/3bqERve
╠➥ INSTAGRAM: https://bit.ly/2LBrIVt
╠➥ TIK TOK: https://bit.ly/3bzNWSm
╠➥ WHATSAPP: https://bit.ly/3bslylh
║
╠═〘 DONASI 〙 ═
╠➥ Dana: 0813-5867-9254
╠➥ Gopay: 0813-5867-9254
╠➥ Tsel: 0813-5867-9254
║
║
╠═〘 IKUTI UBED 〙 ═

`.trim(), m)
}
handler.command = /^(ikuti)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

