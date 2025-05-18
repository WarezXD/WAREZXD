global.owner = ['+60135087209','601113256170']  
global.mods = ['60135087209','601113256170'] 
global.prems = ['60135087209','601113256170']
global.nameowner = 'WarezXD'
global.numberowner = ['60135087209','601113256179']
global.mail = 'admin@warezgaming.com' 
global.gc = 'https://chat.whatsapp.com/warezgaming'
global.instagram = 'https://instagram.com/faizwarez'
global.wm = '© WarezXD'
global.wait = '_*Wait a moment please*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Sticker is making now...*'
global.packname = 'Made With'
global.author = 'Bot WarezXD'
global.maxwarn = '5' // Peringatan maksimum Warn

global.autobio = false // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = false // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: true)
global.spam = false // Set true/false untuk anti spam (default: true)
global.gcspam = false // Set true/false untuk menutup grup ketika spam (default: false)
    

// APIKEY INI WAJIB DI ISI! //
global.btc = 'warezxd' 
//Daftar terlebih dahulu https://api.botcahx.eu.org



// INI HANYA OPTIONAL SAJA BOLEH DI ISI BOLEH JUGA ENGGA //
global.lann = 'warezxd'
//Daftar https://api.betabotz.eu.org 

//Gausah diganti atau di ubah
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

//Gausah diganti atau di ubah
global.APIKeys = { 
  'https://api.botcahx.eu.org': global.btc
}


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
