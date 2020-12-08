module.exports = {
    name: "unban",
    aliases: ['unban'],
    description: ".",
    usage: "unban",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client, ) => {
        let id = args[0]
        if (!message.member.hasPermission('BAN_MEMBERS')) return;
        if (!message.guild.me.hasPermission('BAN_MEMBERS'))return;
        if (isNaN(id)) return message.reply('lütfen geçerli bir id giriniz');
        message.guild.fetchBans().then(ban => {
            if (ban.size === 0) return message.reply('Bu sunucuda kimse yasaklanmamış');
            const banlanan = ban.find(b => b.user.id === id)
            if (!banlanan) return message.channel.send('Bu kişi bu sunucuda yasaklanmamış');
            message.guild.members.unban(banlanan.user)
            message.reply('bu kişinin yasağı kalkmiştur')
        })
}}