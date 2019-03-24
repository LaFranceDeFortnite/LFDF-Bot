const Discord = require('discord.js');

module.exports = (client) => {

    client.on('message', message => {
        if(message.content === "!bravo") {
            message.channel.sendMessage('https://tenor.com/view/clapping-clap-slow-joel-mchale-gif-11475161');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Bravo**");
        }
        if(message.content === "!twitch") {
            message.channel.sendMessage('Twitch du Discord : https://www.twitch.tv/lafrancedefortnite');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Twitch**");
        }
        if(message.content === "!youtube") {
            message.channel.sendMessage('YouTuBe du Discord : https://www.youtube.com/channel/UC0KPlzbTKQhZzHITyljYotw?view_as=subscriber');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **YouTuBe**");
        }
        if(message.content === "!twitter") {
            message.channel.sendMessage('Twitter du Discord : https://twitter.com/LaFranceDeFort1');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Twitter**");
        }
        if(message.content === "!lfdfanimation") {
            message.channel.sendMessage('LFDF Animation : https://discord.gg/cGhSxbN');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Discord LFDF Animation**");
        }
        if(message.content === "!dm") {
            message.channel.send(":white_check_mark: Message envoyé !");
            message.author.createDM().then(channel => {
                channel.send('Salut toi tu sais que t beau?');
        });
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **DM**");
        }
        if(message.content === "!news") {
            message.channel.sendMessage(':globe_with_meridians: Toutes les Actualité Fornite : https://www.epicgames.com/fortnite/fr/news');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **News Fortnite**");
        }
        if(message.content === "!twitterfr") {
            message.channel.sendMessage(':calling: Twitter Fornite France : https://twitter.com/FortniteFR');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Twitter Fortnite France**");
        }
        if(message.content === "!boutique") {
            message.channel.sendMessage(':shopping_cart: Boutique du jour (en Anglais) : https://fnbr.co/shop');
            client.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Boutique**");
        }
    });
};