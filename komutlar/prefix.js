const db = require("wio.db")


module.exports = {
    name: "prefix",
    aliases: ["prefix"],
    description: "sdsdsdsdsdsd",
    usage: "prefix",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client) => {
   
        if(!message.guild.members.cache.get(message.author.id).hasPermission("ADMINISTRATOR")){
            return message.channel.send("Gerekli Yetkiniz Bulunmamaktadır.")
        }

    var args = args[0]
    
    db.set("prefix=" + message.guild.id, args)

    message.channel.send("Prefix (Ön Ekiniz) " + args + " Olarak Ayarlandı.")
    }
}