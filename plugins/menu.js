let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Arya274/Arya-Bot')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
🤖 [UBED BOT] 🤖
Created Bye: @UBED X GANS

Hi, ${name} 👋
Exp: ${exp}

📟 Waktu: ${time}
📆 Tanggal: ${week}, ${date}

${more.repeat(1000)}

Cara Tambah XP:
+1 Exp/pesan biasa
+10 Exp/command

╠═════✪〘 Menu 〙✪═══
║
╠═〘 Xp 〙 ═
╠➥ ${_p}leaderboard [jumlah user]
║
╠═〘 Command 〙 ═
╠➥ ${_p}menu
╠➥ ${_p}help
╠➥ ${_p}?
║
╠═〘 Tutor BoT 〙 ═
╠➥ ${_p}tutorial
║
║
╠═〘 INFO 〙 ═
╠➥ ${_p}info
╠➥ ${_p}ikuti
║
║
╠═〘 Others 〙 ═
╠➥ ${_p}qr <teks>
╠➥ ${_p}stiker (caption)
╠➥ ${_p}stiker <url>
╠➥ ${_p}toimg (reply)
╠➥ ${_p}bucin
╠➥ ${_p}pantun
╠➥ ${_p}ssweb <url>
╠➥ ${_p}sswebf <url>
╠➥ ${_p}google <pencarian>
╠➥ ${_p}googlef <pencarian>
╠➥ ${_p}readmore <teks>|<sembunyikan>
╠➥ ${_p}quran
╠➥ ${_p}nulis [text]
║
╠═〘 Group 〙 ═
╠➥ ${_p} add [62xxxxxxxxx]
╠➥ ${_p} promote [@tagmember]
╠➥ ${_p} demote [@tagadmin]
╠➥ ${_p} linkgrup
╠➥ ${_p} pengumuman [text]
╠➥ ${_p} hidetag [text]
╠➥ ${_p} listonline
╠➥ ${_p} kick @Member
╠➥ ${_p} grouplist
║
╠═〘 OWNER 〙 ═
╠➥ ${_p}bcgc <teks>
╠➥ ${_p}setmenu <teks>
╠➥ ${_p}deletechat (chat grup)
╠➥ ${_p}deletechat group
╠➥ ${_p}mutechat (chat grup)
╠➥ ${_p}mutechat group
║
╠═〘 IKLAN 〙 ═
╠➥ Instagram: @ubed_zid
╠➥ Github: https://github.com/ubednihboss
║
╠═〘 Info Bot 〙 ═
╠➥ Name : UBED BOT
╠➥ Coded using *Nano* on Android \\w Termux
╠➥ Request? wa.me/6281358679254
╠═════
║ Advanced:
║  > return m
║
╠═〘 UBED BOT 〙═
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
