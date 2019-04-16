const Discord = require('discord.js');

module.exports = (client) => {

    client.on("message", async message => {

        let inscriptionduo = ["Nom de l'équipe :", "Joueur 1 :", "Joueur 2 :" ]
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
    
            message.author.send("Bonjour !\n \nVotre message dans le channel <#552476052144783372> ne respecte pas le modèle donné \n \n``Nom de l'équipe : \n Joueur 1 : Pseudo Fortnite Joueur 1 / @mention \n Joueur 2 : Pseudo Fortnite Joueur 2 / @mention``\n \nÂ bientôt !");
            return;
          }
        message.react("✅")
        message.member.addRole('554750595374776342')
        }
    
    });

};
