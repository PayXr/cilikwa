let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`${toM(a)} ❤️ ${toM(b)}\n *Samawa Buat Kalian Ah aht aht 🥵🥵🥵*`, null, {
        mentions: [a, b]
    })
}
handler.help = ['jadian']
handler.tags = ['main', 'fun']
handler.command = ['jadian']

handler.group = true

export default handler
