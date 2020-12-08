const Discord = require("discord.js")

var embed = new Discord.MessageEmbed()
        .setDescription("```LÜTFEN BİR ODAYA GEÇİNİZ.....```")
        .setColor("RED")



var embed3 = new Discord.MessageEmbed()
        .setDescription("```ŞUANDA BİR ŞARKI ÇALMIYOR.....```")
        .setColor("RED")


module.exports = {
    name: "listeyi-temizle",
    aliases: ["listeyi-temizle","listeyi-temizle1"],
    description: "sdsdsdsdsdsd",
    usage: "listeyi-temizle",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client) => {

        var embed2 = new Discord.MessageEmbed()
        .setTitle("🗑  LİSTE TEMİZLENDİ.....")
        .setFooter(`•${message.author.tag} `, `${message.author.avatarURL({dynamic: true})}`)
        .setColor("RED")
    if(client.player.isPlaying(message.guild.id) === true) {

        if(!message.guild.members.cache.get(message.author.id).voice.channel) {
            return message.channel.send({embed:embed})
        }
        

        client.player.clearQueue(message.guild.id);
        
        return message.channel.send({embed:embed2})
    } else{
        return message.channel.send({embed:embed3})
    }
       
        
    }
}