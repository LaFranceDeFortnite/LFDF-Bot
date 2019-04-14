const Discord = require('discord.js');
let prefix = "!";

module.exports = (client) => {

    client.on('message', message => {
        if(message.content === "!fun") {
            var fun_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(`:metal: Commande Fun`)
            .addField("**``!ah``**", "Faire apparaitre denis")
            .addField("**``!projet``**", "C'est notre projet")
            .addField("**``!issou``**", "Issouuuu")
            .addField("**``!bravo``**", "Applaudissement")
            .addField("**``!sayembed {Texte}``**", "Posté un Embed")
            .addField("**``!smoke``**", "Le Bot Fume")
            .addField("**``!pf``**", "Pile ou Face")
            .addField("**``!calin``**", "Le Bot te fait un Calin")
            .addField("**``!choose [choix 1] [choix 2]``**", "Le Bot choisie entre plusieurs choix")
            .addField("**``!8ball [question]``**", "Pose une Question au Bot")
            .addField("**``!weather [ville]``**", "Voire la Météo de chez toi")
            .setTimestamp()
            message.channel.send(fun_embed);
            console.log('Commande Fun');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Fun**");
        }
        if(message.content === "!help") {
            var fun_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(`:pushpin: Commande utile du Discord !`)
            .addField("**``!help``**", ":wrench: Affiche ce menu d'aide")
            .addField("**``!reseaux``**", ":computer: Affiche tous nos Réseaux")
            .addField("**``!infofortnite``**", "<:Fortnite:518772145099374605> Affiche les Commandes Fortnite")
            .addField("**``!fun``**", ":metal: Affiche les Commandes Fun")
            .addField("**``!musique``**", "🎧 Affiche les Commandes Musique")
            .setTimestamp()
            message.channel.send(fun_embed);
            console.log('Commande Help');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Help**");
        }
        if(message.content === "!musique") {
            var fun_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(`🎧 Commande Musique !`)
            .addField("**``!play [musique]``**", "▶ Lancer une Musique")
            .addField("**``!pause``**", "⏸ Mettre en Pause la Musique")
            .addField("**``!stop``**", "⏹ Stopper la Musique")
            .addField("**``!queue``**", "📃 Queue de toutes les Musiques")
            .addField("**``!skip``**", "🔁 Passer la Musique")
            .setTimestamp()
            message.channel.send(fun_embed);
            console.log('Commande Musique');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Musique**");
        }
        if(message.content === prefix + "modo") {
            var mod_embed = new Discord.RichEmbed()
            .setColor('#0090ff')
            .setTitle(':tools: Voici les commandes modérations !')
            .addField("!kick <@user>", "Kick l'utilisateur mentionné")
            .addField("!ban <@user>", "Bannir un utilisateur mentionné")
            .addField("!purge nombre", "Supprime le nombre de messages indiqué")
            .addField("!mute <@user>", "Mute l'utilisateur mentionné")
            .addField("!unmute <@user>", "Unmute l'utilisateur mentionné")
            .setTimestamp()
             message.channel.send(mod_embed);
             console.log('Commande Modo');
             client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Modo**");
        }
        if(message.content === "!infofortnite") {
            var fun_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(`<:Fortnite:518772145099374605> Commande en rapport avec Fortnite !`)
            .addField("**``!news``**", ":globe_with_meridians: Toutes les Actualité Fornite : https://www.epicgames.com/fortnite/fr/news")
            .addField("**``!twitterfr``**", ":calling: Twitter Fornite France : https://twitter.com/FortniteFR")
            .addField("**``!boutique``**", ":shopping_cart: Boutique entière (en Anglais) : https://fnbr.co/shop")
            .addField("**``!spawn``**", ":hotel: Te donne un Spawn aléatoire sur le Carte")
            .addField("**``!map``**", ":mountain_snow: Affiche la Map Fortnite")
            .addField("**``!sftn``**", "📈 Voir les Commandes pour les Stats Fortnite")
            .setTimestamp()
            message.channel.send(fun_embed);
            console.log('Commande Fortnite');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Fortnite**");
        }
        if(message.content === prefix + "reseaux") {
            var mod_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(':calling: Réseaux du Discord !')
            .addField("**``!twitter``**", "<:Twitter:534424956306587648> Affiche le Twitter du Discord")
            .addField("**``!youtube``**", ":computer: Affiche le YouTuBe du Discord")
            .addField("**``!twitch``**", "<:Twitch:533611356469985280> Affiche le Twitch du Discord")
            .setTimestamp()
             message.channel.send(mod_embed);
             console.log('Commande Réseaux');
             client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Réseaux**");
        }
        if(message.content === prefix + "serveur-info") {
            var info_embed = new Discord.RichEmbed()
            .setColor('')
            .setTitle(":wrench: Informations sur le Serveur")
            .addField("Créateur :", "Stricix & Azvox", true)
            .addField("Nom du Serveur :", message.guild.name, true)
            .addField("Serveur créer :", "le 23/11/2018", true)
            .addField("Nombre de membres :", message.guild.members.size, true)
            .addField("Nombre de catégories et de salons :", message.guild.channels.size, true)
            .setFooter("Serveur : La France De Fortnite | ID : 515604887686610944")
            message.channel.sendMessage(info_embed);
            console.log('Commande Info');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Info**");
        }
        if(message.content === prefix + "map") {
            var info_embed = new Discord.RichEmbed()
            .setColor("#fd0071")
            .setTitle(":triangular_flag_on_post: Voici la map actuelle Fortnite")
            .setImage('https://cdn.discordapp.com/attachments/516014468086628352/552154178865070091/Fortnite_MapComplete_Saison8.jpg')
            message.channel.sendMessage(info_embed);
            console.log('Commande Map');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Map**");
        }
        if(message.content === prefix + "projet") {
            var info_embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage("https://images-ext-2.discordapp.net/external/kIoFsV999Mm50aBO1ixMhoVtD-brAwOH1i07tOrf5G4/http/i0.kym-cdn.com/photos/images/newsfeed/001/246/478/eac.gif")
            message.channel.sendMessage(info_embed);
            console.log('Commande Projet');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Projet**");
        }
        if(message.content === prefix + "ah") {
            var info_embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage("https://images-ext-2.discordapp.net/external/QLLPFggtUq-gOu1XbmsGRhVPrlQCtLCkFz4t3WgoRRs/%3Fitemid%3D7256068/https/media1.tenor.com/images/dfd5671e5d4847a48be0d024abd03e72/tenor.gif")
            message.channel.sendMessage(info_embed);
            console.log('Commande Ah');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Ah (Deny)**");
        }
        if(message.content === prefix + "issou") {
            var info_embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage("https://images-ext-2.discordapp.net/external/OshEMVAVJD71nF9uFm1MXe16DXWt05NAaDnGqm1azsw/%3Fitemid%3D7315327/https/media1.tenor.com/images/0ca6f8a1d31646286b94671f0cd0f5a4/tenor.gif")
            message.channel.sendMessage(info_embed);
            console.log('Commande Ah');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Ah (Deny)**");
        }
        if(message.content.startsWith(prefix + "sayembed")) {
            let arg = message.content.split(" ").slice(1);
            let thingToEco = arg.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription(thingToEco)
            message.channel.sendMessage(embed);
        message.delete();
        client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Say Embed**");
        }
        if(message.content === "!sftn") {
            var fun_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(`:metal: Commande Stats Fortnite`)
            .setDescription(":point_right: Pour voir ces Stats Fortnite : !ftn pc/psn/xbl {pseudo} \n :point_right: Pour voir juste ces Stats Fortnite SOLO : !solo pc/psn/xbl {pseudo} \n :point_right: Pour voir juste ces Stats Fortnite DUO : !duo pc/psn/xbl {pseudo} \n :point_right: Pour voir juste ces Stats Fortnite SQUAD : !squad pc/psn/xbl {pseudo}")
            .setTimestamp()
            message.channel.send(fun_embed);
            console.log('Commande Fun');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Stats Fortnite**");
        }
    });
};
