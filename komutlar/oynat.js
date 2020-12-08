const Discord = require("discord.js")

var embed = new Discord.MessageEmbed()
        .setTitle("BİR MÜZİK ADI YAZINIZ.....")
        .setColor("ORANGE")

var embed2 = new Discord.MessageEmbed()
        .setTitle("MÜZİK AÇMAK İÇİN BİR KANALA GİRİŞ YAPINIZ.....")
        .setColor("ORANGE")


module.exports = {
    name: "oynat",
    aliases: ["oynat","oynat1"],
    description: "sdsdsdsdsdsd",
    usage: "oynat",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client) => {
        
        if(!args[0]) {
            return message.channel.send({embed:embed})
        } 

        var muzik = message.content.slice(6)
        var embed3 = new Discord.MessageEmbed()
        .addField('**SIRAYA EKLENDİ...**', "🎶" + muzik)
        .setFooter(`•${message.author.tag} `, `${message.author.avatarURL({dynamic: true})}`)
        .setColor("GREEN")

   if(client.player.isPlaying(message.guild.id) === true) {
//kuyruğa ekleme kısmı




if(!message.guild.members.cache.get(message.author.id).voice.channel) {
    return message.channel.send({embed:embed2})
}

 var song = client.player.addToQueue(message.guild.id, muzik)

message.channel.send({embed:embed3})

   } else {
       var song = await client.player.play(message.member.voice.channel, muzik, message.member.user.tag)
       var muzikveri = song.song;


    var embed4 = new Discord.MessageEmbed()
    .addField('**Şuanda Oynatılıyor...**', "🎶" + muzikveri.name)
    .setFooter(`•${message.author.tag} `, `${message.author.avatarURL({dynamic: true})}`)
    .setColor("GREEN") 
       message.channel.send({embed: embed4})

   }

    }
}