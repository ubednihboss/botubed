let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: UBEDNIHBOSS
╠➥ Script: Ubed x Gans
║
╠➥ Github: https://github.com/ubednihboss
╠➥ Instagram: @ubed_zid
╠➥ YouTube: Jawara Slurd
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Dana: 0813-5867-9254
╠➥ Gopay: 0813-5867-9254
╠➥ Tsel: 0813-5867-9254
║
║>Request? Wa.me/6281358679254
║
╠═〘 UBED BOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

