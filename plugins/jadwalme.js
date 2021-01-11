let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
==============================

```SENIN```

♧ 07.30-08.30 = bahasa jawa
♧ 08.30-09.30 = bahasa indonesia
♧ 09.30-10.00 = free
♧ 10.00-11.00 = ski

```SELASA```

♧ 07.30-08.30 = ipa biologi
♧ 08.30-09.30 = seni budaya
♧ 09.30-10.00 = free
♧ 10.00-11.00 = informatika

```RABU```

♧ 07.30-08.30 = aqidah
♧ 08.30-09.30 = matematika
♧ 09.30-10.00 = free
♧ 10.00-11.00 = fikih

```KAMIS```

♧ 07.30-08.30 = prakarya
♧ 08.30-09.30 = fisika
♧ 09.30-10.00 = free
♧ 10.00-11.00 = bahasa inggris

```JUMAT```

♧ 07.30-08.30 = ips
♧ 08.30-09.30 = bahasa arab
♧ 09.30-10.00 = free
♧ 10.00-11.00 = pjok

```SABTU```

♧ 07.30-08.30 = al qur'an hadist
♧ 08.30-09.30 = ppkn
♧ 09.30-10.00 = free
♧ 10.00-11.00 = matematika

==============================

`.trim(), m)
}
handler.command = /^(jadwalme)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
