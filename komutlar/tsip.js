const Discord = require("discord.js")
module.exports = {
    name: "ts-ip",
    aliases: ["ts-ip","ts"],
    description: "sdsdsdsdsdsd",
    usage: ["ts-ip","ts"],
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client) => {
        var embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setFooter(`•${message.author.tag} `, `${message.author.avatarURL({dynamic: true})}`)
        .setDescription("╔═════════๑۩۞ TS3 İP ADRESİ ۞۩๑════════╗" + "```                kose.klani.net```" + "╚═════════๑۩۞ T A Ş I N  D I K ۞۩๑════════╝")

   message.channel.send({embed:embed})
    }
}