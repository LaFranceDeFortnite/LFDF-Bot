const Discord = require('discord.js');

module.exports = (client) => {

    client.on("message", async message => {

        let inscriptionduo = ['/', '@' ]
        let noFound = false;
      
        if(message.channel.id == "552476052144783372") {
          if(message.member.hasPermissions("ADMINISTRATOR")) {
              return;
          }
    
          for (var i in inscriptionduo) {
          if (!message.content.toLowerCase().includes(inscriptionduo[i].toLowerCase())) noFound = true;
        }
          if(noFound) {
            message.delete();
    
            message.author.send("Bonjour !\n \nVotre message dans le channel <#552476052144783372> ne respecte pas le modèle donné \n \n``Pseudo In game / @mention\n Pseudo In game / @mention``\n \nÂ bientôt !");
            return;
          }
        message.react("✅")
        message.member.addRole('554750595374776342')
        }
    
    });
    
    client.on("message", async message => {

        let statsfortnite = ['!f' ]
        let noFound = false;
      
        if(message.channel.id == "527811956875329546") {
    
          for (var i in statsfortnite) {
          if (!message.content.toLowerCase().includes(statsfortnite[i].toLowerCase())) noFound = true;
        }
          if(noFound) {
            message.delete();
    
            message.author.send("Bonjour !\n Merci d'utiliser ce channel seulement pour voir vos Stats Fortnite. \n Pour parler utiliser le channel #💬général =) ");
            return;
          }
        }
    
    });

};
