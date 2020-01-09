const Discord = require('discord.js');

module.exports = (client) => {

    client.on('message', message => {
        if(message.content === "!emojisserveur") {
            const emoji = message.guild.emojis;
            if (!emoji.size) return message.channel.send("Le serveur n'as aucun emoji :construction:");
            const embed = new Discord.RichEmbed()
            .addField("Emojis du serveur", emoji.map((e) => e).join(' '));
            message.channel.send({embed});
        }
        if(message.content === "!bot") {
            let target = message.guild.me;
            let bot_embed = new Discord.RichEmbed()
                .setAuthor(target.user.username)
                .setThumbnail(target.user.avatarURL)
                .setDescription("Les différentes informations du bot \n \n **Créateur :** Stricix#7943 et ɿWคςς_#8269")
                .addField("Nom :", `${target.displayName}`, true)
                .addField("Discriminateur :", `#${client.user.discriminator}`, true)
                .addField("ID :", `${client.user.id}`, true)
                .addField("Language de programmation", "Javascript", true)
                .addField("Version 1.0.0", true)
                .addField("Librairies", "Discord.js : **LFDF Bot**" + " | Node.js : " + process.versions.node, true)
                .setFooter("uFc4 | Tous droits réservés")
                .setTimestamp(new Date());
            message.channel.send(bot_embed);
        }
        if(message.content === "!ping") {
            message.channel.send(":ping_pong: Pong ! (`"+ `${message.createdTimestamp - Date.now()}` + '` ms)');
            client.channels.get("664916311838687242").send("Log / Utilisateur **" + message.author.username + "** / Commande **Ping**");
        }
        if(message.content === "!calin") {
            message.channel.send('`＼(^o^)／`').then(async message => {
                setTimeout(() => {
                    message.edit('`d=(´▽｀)=b`');
                }, 1000);
                setTimeout(() => {
                    message.edit('`⊂((・▽・))⊃`');
                }, 2000);
                setTimeout(() => {
                    message.edit('`⊂( ◜◒◝ )⊃`');
                }, 3000);
                setTimeout(() => {
                    message.edit('`⊂（♡⌂♡）⊃`');
                }, 4000);
                setTimeout(() => {
                    message.edit('`⊂(◉‿◉)つ`');
                }, 5000);
            });
        }
        if(message.content === "!smoke") {
            message.channel.send('**BISSSSHES IM SMOKING**').then(async message => {
                setTimeout(() => {
                    message.edit('🚬');
                }, 500);
                setTimeout(() => {
                    message.edit('🚬 ☁ ');
                }, 1000);
                setTimeout(() => {
                    message.edit('🚬 ☁☁ ');
                }, 1500);
                setTimeout(() => {
                    message.edit('🚬 ☁☁☁ ');
                }, 2000);
                setTimeout(() => {
                    message.edit('🚬 ☁☁');
                }, 2500);
                setTimeout(() => {
                    message.edit('🚬 ☁');
                }, 3000);
                setTimeout(() => {
                    message.edit('🚬 ');
                }, 3500);
            });
        }
        if(message.content === "!snip") {
            message.channel.send('Commencement Snip').then(async message => {
                setTimeout(() => {
                    message.edit("**Démarrage de la game dans** : ``1 Minute`` • □□□□□□□□□□ - 0%");
                }, 1000);
                setTimeout(() => {
                    message.edit("**Démarrage de la game dans** : ``54 secondes`` • ■□□□□□□□□□ - 10%");
                }, 6000);
                setTimeout(() => {
                    message.edit('**Démarrage de la game dans** : ``48 secondes`` • ■■□□□□□□□□ - 20%');
                }, 12000);
                setTimeout(() => {
                    message.edit('**Démarrage de la game dans** : ``42 secondes`` • ■■■□□□□□□□ - 30%');
                }, 18000);
                setTimeout(() => {
                    message.edit("**Démarrage de la game dans** : ``36 secondes`` • ■■■■□□□□□□ - 40%");
                }, 24000);
                setTimeout(() => {
                    message.edit("**Démarrage de la game dans** : ``30 secondes`` • ■■■■■□□□□□ - 50%");
                }, 30000);
                setTimeout(() => {
                    message.edit("**Démarrage de la game dans** : ``24 secondes`` • ■■■■■■□□□□ - 60%");
                }, 36000);
                setTimeout(() => {
                    message.edit("**Démarrage de la game dans** : ``18 seconde``s • ■■■■■■■□□□ - 70%");
                }, 42000);
                setTimeout(() => {
                    message.edit("**Démarrage de la game dans** : ``12 secondes`` • ■■■■■■■■□□ - 80%");
                }, 48000);
                setTimeout(() => {
                    message.edit("**Démarrage de la game dans** : ``6 secondes`` • ■■■■■■■■■□ - 90%");
                }, 54000);
                setTimeout(() => {
                    message.edit("**Lancement Game Snip** • ■■■■■■■■■■ - 100%");
                }, 60000);
        });
        }
    });
};
