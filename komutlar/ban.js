

module.exports = {
    name: "ban",
    aliases: ['ban','kov'],
    description: ".",
    usage: "ban",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client, ) => {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({embed: {color:'RANDOM', description: ` Bu komutu kullanacak yetkin bulunmamakta.` }})
        const args1 = message.content.split(' ').slice(2)
        const neden = args1.join(" ")
        const Discord = require("discord.js");
        const user = message.mentions.users.first();
        if (user) {
          
          const member = message.guild.member(user);
    
          if (member) {
       
            member
              .ban({
                reason: 'SİKTİR GİT BİDAHA GELME !!!',
              })
              .then(() => {
                const kanal = message.guild.channels.cache.find(ch => ch.name === 'sohbet')
                const embed = new Discord.MessageEmbed()
                .setThumbnail(user.avatarURL({ dynamic: true }))
                .setColor('RANDOM')
                .addField('**SİKTİR OLDU GİTTİ**' , member)
                .addField('SEBEP', neden)
                .setImage('https://media1.tenor.com/images/d856e0e0055af0d726ed9e472a3e9737/tenor.gif?itemid=8540509')
                .setFooter(`•${message.author.tag} `, `${message.author.avatarURL({dynamic: true})}`)
                kanal.send(embed)
              })
              .catch(err => {
          
                message.reply('Bu Kullanıcıyı Yasaklayamadım :(');
              
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
