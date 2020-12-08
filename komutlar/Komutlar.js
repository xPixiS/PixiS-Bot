const Discord = require("discord.js")

module.exports = {
    name: "komutlar",
    aliases: ["yardım","komutlar"],
    description: "sdsdsdsdsdsd",
    usage: ["yardım","komutlar"],
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client) => {
        
        var embed = new Discord.MessageEmbed()
        .setThumbnail(client.user.avatarURL())
        .setDescription(
            "** ⚙️ KOMUTLAR ⚙️  **\n\n**Müzik Açma - Sıraya Ekleme =** ``!oynat``\n**Müzik Geçme =**  ``!geç``\n**Müzik Sonlandırma =** ``!kapat``\n**Müzik Sırasını Görme =** ``!liste``\n**Müzik Sırasını Silme =** ``!listeyi-temizle``\n**Ping Öğrenme =** ``!ping``\n**Team Speak Sunucumuzun İp'sini Öğrenme =** ``!ts-ip``\n**Mesajları Silme [Sadece Yetkililer Kullanabilir] =** ``!sil``"
        )  
        .setFooter(`•${message.author.tag} `, `${message.author.avatarURL({dynamic: true})}`)
        .setColor("RANDOM") 
   
   message.channel.send({embed:embed})
    }
}