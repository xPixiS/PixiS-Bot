const Discord = require('discord.js');
const FynxDogru = "BLACK";
module.exports = {
name: "sil",
aliases: ["sil","temizle","clear"],
description: "Sunucudaki mesajları siler.",
usage: "sil",
ownerOnly: false,
run: async (message,args,client) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: {color: FynxDogru, description: `🔄  | Bu komutu kullanacak yetkin bulunmamakta.` }})
let mesajsayisi = args[0]
if(!mesajsayisi) return message.channel.send({embed: {color: FynxDogru, description: `🔄  | 1 ile 100 arasında sayı girmeyi unuttun.` }})
if (mesajsayisi > 100) return message.channel.send({embed: {color: FynxDogru, description: `🔄  | 1 ile 100 arasında sayı girmeyi unuttun.` }})
if (mesajsayisi < 1) return message.channel.send({embed: {color: FynxDogru, description: `🔄  | 1 ile 100 arasında sayı girmeyi unuttun.` }})
try {
await message.channel.bulkDelete(mesajsayisi)
await message.channel.send({embed: {color: FynxDogru, description: `🔄  | Başarıyla ${mesajsayisi} mesaj sildim.`}});
} catch(error) {
message.channel.send({embed: {color: FynxDogru, description: `🔄  | 14 Günden eski mesajları silemem.`}})}
}
}