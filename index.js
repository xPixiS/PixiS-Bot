// CONST
const Discord = require("discord.js");
const client = new Discord.Client();
const proton = require("proton-io")
const db = require("wio.db")
const ayarlar = require("./ayarlar.json")
const { Player } = require("discord-music-player")
const player = new Player(client);
client.player = player;
// LET
let komutDosya = "./komutlar"
let event = "./eventlar"
let gelistiricler = ["301351080636448768"]
let owner = true;
let defaultCommands = ["ping"]

// EMBED
var embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("ALEYKÜM SELAM")

var embed3 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("GÜNAYDIN EMİNEGOEEYM")
        
const komutYukle = new proton(client,komutDosya,event,gelistiricler,{owner,defaultCommands})

let botlaraCevapVer = false;
let etiketlePrefixOgren = true; 
let etiketiPrefixOlarakKullan = true;

client.on('message', async(msg) => {

    if(!await db.has("prefix_" + msg.guild.id)) {
       var prefix = "!"
    } else {
       var prefix = await db.fetch("prefix_" + msg.guild.id)
    }

    komutYukle.message(msg,prefix,{botlaraCevapVer,etiketiPrefixOlarakKullan,etiketlePrefixOgren})
})

client.on("guildMemberAdd",member => {
    var giris = new Discord.MessageEmbed()
    .setColor("GREEN")
    .addField(' 🎁 **SUNUCUYA GİRİŞ YAPTI** 🎁', `${member}`)
    .setImage('https://media2.giphy.com/media/1MSVaOHOoxttKc4OdT/giphy.gif')
    let giriscikis = member.guild.channels.cache.get("784566724560420894");
    giriscikis.send(giris);

    let role = member.guild.roles.cache.get('615973092325588997');
    member.roles.add(role);
})



client.on("message", (message) =>{

    if(message.content.toLowerCase() === "selam"){
        message.channel.send({embed:embed})
    }

     if(message.content.toLowerCase() === "sa"){
        message.channel.send("<:AS:619913709061406733>")
    }

    if(message.content.toLowerCase() === "günaydın"){
        message.channel.send({embed:embed3})
    }

});

client.login(ayarlar.token)