let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('Nampaknya group ini sudah tidak perlukan saya, Saya akan keluar dari group. Jangan lupa makan ye, Nanti sakit.Untuk sewa/jadi bot sila contact +60135087209', m.chat) 
        await sleep(1000)
        await conn.groupLeave(group)
        }
handler.command = handler.help = ['botout', 'botleavegc']
handler.tags = ['group']

handler.admin = true
handler.group = true

module.exports = handler

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
