let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `


KEPO LOH ANJINK


WOWKWOWKWOK




By: ubed
wa.me/6281358679254




`.trim(), m)
}
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
