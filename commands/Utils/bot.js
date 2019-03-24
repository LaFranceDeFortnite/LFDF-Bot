const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let target = message.guild.me;
    let bot_embed = new Discord.RichEmbed()
        .setAuthor(target.user.username)
        .setThumbnail(target.user.avatarURL)
        .setDescription("Les différentes informations du bot \n \n **Créateur :** Stricix#7943 et ɿWคςς_#8269")
        .addField("Nom :", `${target.displayName}`, true)
        .addField("Discriminateur :", `#${client.user.discriminator}`, true)
        .addField("ID :", `${client.user.id}`, true)
        .addField("Language de programmation", "Javascript", true)
        .addField("Version", require('../../package').version, true)
        .addField("Librairies", "Discord.js : "+require('../../package').dependencies["discord.js"].replace("^", "") + " | Node.js : " + process.versions.node, true)
        .setFooter("LFDF | Tous droits réservés")
        .setTimestamp(new Date());
    message.channel.send(bot_embed);
};

exports.info = {
    aliases: ["botinfo", "botstats"],
    description: "Je te donne des informations sur moi",
    usage: "",
    category: "Utils",
    permissions: "",
    showHelp: true
};