let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tri [089677134384]
╰─

╭─「 Donasi • Non Pulsa 」
│ • Dana [0896771134384]
│ • Gopay [089677134384]
╰─
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
