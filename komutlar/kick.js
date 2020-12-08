

module.exports = {
    name: "kick",
    aliases: ['kick','kov'],
    description: ".",
    usage: "kick",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client, ) => {
        const args1 = message.content.split(' ').slice(2)
        const neden = args1.join(" ")
        const Discord = require("discord.js");
        const user = message.mentions.users.first();
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send({embed: {color:'RANDOM', description: ` Bu komutu kullanacak yetkin bulunmamakta.` }})
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .kick('Kicklendi')
              .then(() => {
                const kanal = message.guild.channels.cache.get("777251166077583420");
                const embed = new Discord.MessageEmbed()
                .setThumbnail(user.avatarURL({ dynamic: true }))
                .setColor('RANDOM')
                .addField('`KİCKLENDİ`' , member)
                .addField('SEBEP', neden)
                .setImage('https://media1.tenor.com/images/6fef1d9e3ce3d2449d48f4d52110c63d/tenor.gif?itemid=17211465')
                .setFooter(`•${message.author.tag} `, `${message.author.avatarURL({dynamic: true})}`)
                kanal.send(embed)
              })
              .catch(err => {
                message.reply('Bu Kullanıcıyı Atamadım :(');
                console.error(err);
              });
          } else {
            message.reply("Böyle Bir Kullanıcı Bulunmuyor !");
          }

        } else {
          message.reply("Lütfen Tekrar Deneyin !");
        }
}
}