const discordMusicPlayer = require("discord-music-player")
const Discord = require("discord.js")


var embed2 = new Discord.MessageEmbed()
.setDescription("BİR ODAYA GEÇİNİZ.....")
.setColor("#40ffff")

var embed3 = new Discord.MessageEmbed()
.setDescription("SIRAYA ŞARKI EKLEYİNİZ.....")
.setColor("#40ffff")


module.exports = {
    name: "geç",
    aliases: ["geç","geç1"],
    description: "sdsdsdsdsdsd",
    usage: "geç",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client) => {
    if(client.player.isPlaying(message.guild.id) === true) {

        if(!message.guild.members.cache.get(message.author.id).voice.channel) {
            return message.channel.send({embed: embed2})
        }
        

        client.player.skip(message.guild.id)

        var embed = new Discord.MessageEmbed()
        .setTitle("♻️  BİR SONRAKİ ŞARKIYA GEÇİYOR.....")
        .setFooter(`•${message.author.tag} `, `${message.author.avatarURL({dynamic: true})}`)
        .setColor("#40ffff")

        return message.channel.send({embed: embed})
    } else{
        return message.channel.send({embed: embed3})
    }
       
        
    }
}