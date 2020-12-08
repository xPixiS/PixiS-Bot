// -Bot giriş kısmı- 
module.exports = (client) => {

    var oynuyorkısımları = [
    "Prefix: !",
    "!komutlar",
    "!yardım"
    ]
    
    
    setInterval(function() {
    
            var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
           client.user.setActivity(oynuyorkısımları[random], { type: 'LISTENING' });
            }, 2 * 6000);
    
        console.log("BOT ACTİVATED")
    }
    