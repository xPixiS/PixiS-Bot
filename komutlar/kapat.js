const Discord = require("discord.js")



module.exports = {
    name: "kapat",
    aliases: ["kapat","kapat1"],
    description: "sdsdsdsdsdsd",
    usage: "kapat",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client) => {
    if(client.player.isPlaying(message.guild.id) === true) {

        if(!message.guild.members.cache.get(message.author.id).voice.channel) {
            return message.channel.send({embed: embed2})
        }
        

        client.player.stop(message.guild.id);

        var embed3 = new Discord.MessageEmbed()
        .setDescription("```ŞUANDA BİR ŞARKI ÇALMIYOR.....```")
        .setFooter(`•${message.author.tag} `, `${message.author.avatarURL({dynamic: true})}`)
        .setColor("RED")
        
        var embed2 = new Discord.MessageEmbed()
        .setDescription("```LÜTFEN BİR ODAYA GEÇİNİZ.....```")
        .setFooter(`•${message.author.tag} `, `${message.author.avatarURL({dynamic: true})}`)
        .setColor("RED")

        var embed = new Discord.MessageEmbed()
        .setTitle("❌  MÜZİK KAPANDI.....")
        .setFooter(`•${message.author.tag} `, `${message.author.avatarURL({dynamic: true})}`)
        .setColor("RED")

        return message.channel.send({embed: embed})
    } else{
        return message.channel.send({embed:embed3})
    }
       
        
    }
}