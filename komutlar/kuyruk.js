const Discord = require("discord.js")

var embed = new Discord.MessageEmbed()
.setDescription("BİR ODAYA GEÇİNİZ.....")
.setColor("ORANGE")

var embed2 = new Discord.MessageEmbed()
.setDescription("ŞUANDA MÜZİK ÇALMIYOR.....")
.setColor("ORANGE")

module.exports = {
    name: "liste",
    aliases: ["liste","liste1"],
    description: "sdsdsdsdsdsd",
    usage: "liste",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client) => {
    if(client.player.isPlaying(message.guild.id) === true) {

        if(!message.guild.members.cache.get(message.author.id).voice.channel) {
            return message.channel.send({embed:embed})
        }
       
        let queue = await client.player.getQueue(message.guild.id);
        message.channel.send('Sunucu şarkı listesi:\n'+(queue.songs.map((song, i) => {
            return `${i === 0 ? 'Şuanda oynatılıyor:' : `#${i+1}`} - ${song.name} | `
        }).join('\n')));

    } else {
        return message.channel.send({embed:embed2})
    }
       
        
    }
}