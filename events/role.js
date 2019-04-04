const Discord = require('discord.js');

module.exports = (bot) => {

    bot.on('message', message => {
        if(message.content === "!pc") {
            let role = message.guild.roles.find('name', '【💻】 Joueur Pc')
            let myRole = message.guild.roles.find(role => role.name === "【💻】 Joueur Pc");
            if(message.member.roles.find('name', '【💻】 Joueur Pc')) {
                message.member.removeRole(role)
            var embed = new Discord.RichEmbed()
                .setColor('cca25b')
                .setDescription("Tu viens de quitter le groupe " + myRole)
            message.channel.send(embed);
            }
            else {
                message.member.addRole(role)
                var embed = new Discord.RichEmbed()
                    .setColor('cca25b')
                    .setDescription("Tu as bien rejoint le groupe " + myRole)
                message.channel.send(embed);
            }
            console.log('Commande Role PC');
            bot.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande Role **PC**");
        }
        if(message.content === "!ps4") {
            let role = message.guild.roles.find('name', '【🎮】Joueur PS4')
            let myRole = message.guild.roles.find(role => role.name === "【🎮】Joueur PS4");
            if(message.member.roles.find('name', '【🎮】Joueur PS4')) {
                message.member.removeRole(role)
            var embed = new Discord.RichEmbed()
                .setColor('cca25b')
                .setDescription("Tu viens de quitter le groupe " + myRole)
            message.channel.send(embed);
            }
            else {
                message.member.addRole(role)
                var embed = new Discord.RichEmbed()
                    .setColor('cca25b')
                    .setDescription("Tu as bien rejoint le groupe " + myRole)
                message.channel.send(embed);
            }
        console.log('Commande Role PS4');
        bot.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande Role **PS4**");
        }
        if(message.content === "!switch") {
            let role = message.guild.roles.find('name', '【🕹】Joueur Switch')
            let myRole = message.guild.roles.find(role => role.name === "【🕹】Joueur Switch");
            if(message.member.roles.find('name', '【🕹】Joueur Switch')) {
                message.member.removeRole(role)
            var embed = new Discord.RichEmbed()
                .setColor('cca25b')
                .setDescription("Tu viens de quitter le groupe " + myRole)
            message.channel.send(embed);
            }
            else {
                message.member.addRole(role)
                var embed = new Discord.RichEmbed()
                    .setColor('cca25b')
                    .setDescription("Tu as bien rejoint le groupe " + myRole)
                message.channel.send(embed);
            }
        console.log('Commande Role SWITCH');
        bot.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande Role **SWITCH**");
        }
        if(message.content === "!xbox") {
            let role = message.guild.roles.find('name', '【🎮】 Joueur Xbox')
            let myRole = message.guild.roles.find(role => role.name === "【🎮】 Joueur Xbox");
            if(message.member.roles.find('name', '【🎮】 Joueur Xbox')) {
                message.member.removeRole(role)
            var embed = new Discord.RichEmbed()
                .setColor('cca25b')
                .setDescription("Tu viens de quitter le groupe " + myRole)
            message.channel.send(embed);
            }
            else {
                message.member.addRole(role)
                var embed = new Discord.RichEmbed()
                    .setColor('cca25b')
                    .setDescription("Tu as bien rejoint le groupe " + myRole)
                message.channel.send(embed);
            }
        console.log('Commande Role XBOX');
        bot.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande Role **XBOX**");
        }
        if(message.content === "!mobile") {
            let role = message.guild.roles.find('name', '【📱】Joueur Mobile')
            let myRole = message.guild.roles.find(role => role.name === "【📱】Joueur Mobile");
            if(message.member.roles.find('name', '【📱】Joueur Mobile')) {
                message.member.removeRole(role)
            var embed = new Discord.RichEmbed()
                .setColor('cca25b')
                .setDescription("Tu viens de quitter le groupe " + myRole)
            message.channel.send(embed);
            }
            else {
                message.member.addRole(role)
                var embed = new Discord.RichEmbed()
                    .setColor('cca25b')
                    .setDescription("Tu as bien rejoint le groupe " + myRole)
                message.channel.send(embed);
            }
        console.log('Commande Role MOBILE');
        bot.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande Role **MOBILE**");
        }
        if(message.content === "!fortnite") {
            let role = message.guild.roles.find('name', '【💥】Fortnite')
            let myRole = message.guild.roles.find(role => role.name === "【💥】Fortnite");
            if(message.member.roles.find('name', '【💥】Fortnite')) {
                message.member.removeRole(role)
            var embed = new Discord.RichEmbed()
                .setColor('db81e0')
                .setDescription("Tu n'as maintenant plus le Role " + myRole)
            message.channel.send(embed);
            }
            else {
                message.member.addRole(role)
                var embed = new Discord.RichEmbed()
                    .setColor('db81e0')
                    .setDescription("Tu as maintenant le Role " + myRole)
                message.channel.send(embed);
            }
        console.log('Commande Role FORTNITE');
        bot.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande Role **FORTNITE**");
        }
        if(message.content === "!lol") {
            let role = message.guild.roles.find('name', '【🏹】League Of Legend')
            let myRole = message.guild.roles.find(role => role.name === "【🏹】League Of Legend");
            if(message.member.roles.find('name', '【🏹】League Of Legend')) {
                message.member.removeRole(role)
            var embed = new Discord.RichEmbed()
                .setColor('a6d666')
                .setDescription("Tu n'as maintenant plus le Role " + myRole)
            message.channel.send(embed);
            }
            else {
                message.member.addRole(role)
                var embed = new Discord.RichEmbed()
                    .setColor('a6d666')
                    .setDescription("Tu as maintenant le Role " + myRole)
                message.channel.send(embed);
            }
        console.log('Commande Role LEAGUE OF LEGEND');
        bot.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande Role **LEAGUE OF LEGEND**");
        }
        if(message.content === "!csgo") {
            let role = message.guild.roles.find('name', '【🔫】Cs Go')
            let myRole = message.guild.roles.find(role => role.name === "【🔫】Cs Go");
            if(message.member.roles.find('name', '【🔫】Cs Go')) {
                message.member.removeRole(role)
            var embed = new Discord.RichEmbed()
                .setColor('87b6dd')
                .setDescription("Tu n'as maintenant plus le Role " + myRole)
            message.channel.send(embed);
            }
            else {
                message.member.addRole(role)
                var embed = new Discord.RichEmbed()
                    .setColor('87b6dd')
                    .setDescription("Tu as maintenant le Role " + myRole)
                message.channel.send(embed);
            }
        console.log('Commande Role CS GO');
        bot.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande Role **CS GO**");
        }
        if(message.content === "!mzsnip") {
            let role = message.guild.roles.find('name', '【🚧 】Notif Mz Snip')
            let myRole = message.guild.roles.find(role => role.name === "【🚧 】Notif Mz Snip");
            if(message.member.roles.find('name', '【🚧 】Notif Mz Snip')) {
                message.member.removeRole(role)
            var embed = new Discord.RichEmbed()
                .setColor('e27c7c')
                .setDescription("Tu n'as maintenant plus le Role " + myRole)
            message.channel.send(embed);
            }
            else {
                message.member.addRole(role)
                var embed = new Discord.RichEmbed()
                    .setColor('e27c7c')
                    .setDescription("Tu as maintenant le Role " + myRole)
                message.channel.send(embed);
            }
        console.log('Commande Role NOTIF MZ SNIP');
        bot.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande Role **NOTIF MZ SNIP**");
        }
        if(message.content === "!patch") {
            let role = message.guild.roles.find('name', '【📄】Patch Fortnite')
            let myRole = message.guild.roles.find(role => role.name === "【📄】Patch Fortnite");
            if(message.member.roles.find('name', '【📄】Patch Fortnite')) {
                message.member.removeRole(role)
            var embed = new Discord.RichEmbed()
                .setColor('e27c7c')
                .setDescription("Tu n'as maintenant plus le Role " + myRole)
            message.channel.send(embed);
            }
            else {
                message.member.addRole(role)
                var embed = new Discord.RichEmbed()
                    .setColor('e27c7c')
                    .setDescription("Tu as maintenant le Role " + myRole)
                message.channel.send(embed);
            }
        console.log('Commande Role PATCH FORTNITE');
        bot.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande Role **PATCH FORTNITE**");
        }
        if(message.content === "!event") {
            let role = message.guild.roles.find('name', '【🥇】Event')
            let myRole = message.guild.roles.find(role => role.name === "【🥇】Event");
            if(message.member.roles.find('name', '【🥇】Event')) {
                message.member.removeRole(role)
            var embed = new Discord.RichEmbed()
                .setColor('e27c7c')
                .setDescription("Tu n'as maintenant plus le Role " + myRole)
            message.channel.send(embed);
            }
            else {
                message.member.addRole(role)
                var embed = new Discord.RichEmbed()
                    .setColor('e27c7c')
                    .setDescription("Tu as maintenant le Role " + myRole)
                message.channel.send(embed);
            }
        console.log('Commande Role EVENT');
        bot.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande Role **EVENT**");
        }
        if(message.content === "!notif") {
            let role = message.guild.roles.find('name', '【🔔】Notif')
            let myRole = message.guild.roles.find(role => role.name === "【🔔】Notif");
            if(message.member.roles.find('name', '【🔔】Notif')) {
                message.member.removeRole(role)
            var embed = new Discord.RichEmbed()
                .setColor('e27c7c')
                .setDescription("Tu n'as maintenant plus le Role " + myRole)
            message.channel.send(embed);
            }
            else {
                message.member.addRole(role)
                var embed = new Discord.RichEmbed()
                    .setColor('e27c7c')
                    .setDescription("Tu as maintenant le Role " + myRole)
                message.channel.send(embed);
            }
        console.log('Commande Role NOTIF');
        bot.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande Role **NOTIF**");
        }
        if(message.content === "!webtv") {
            let role = message.guild.roles.find('name', '【🎥】WebTv')
            let myRole = message.guild.roles.find(role => role.name === "【🎥】WebTv");
            if(message.member.roles.find('name', '【🎥】WebTv')) {
                message.member.removeRole(role)
            var embed = new Discord.RichEmbed()
                .setColor('e27c7c')
                .setDescription("Tu n'as maintenant plus le Role " + myRole)
            message.channel.send(embed);
            }
            else {
                message.member.addRole(role)
                var embed = new Discord.RichEmbed()
                    .setColor('e27c7c')
                    .setDescription("Tu as maintenant le Role " + myRole)
                message.channel.send(embed);
            }
        console.log('Commande Role WEB TV');
        bot.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande Role **WEB TV**");
        }
    });
    
    const setupCMD = "!setreactionpp"
let initialMessage = `**:bell: __Réction Notification Partie Perso__ :bell:**`;
const roles = ["【🔑】Notif PP"];
const reactions = ["🔑"];


if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";
 
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`Réagie à l'émojii pour avoir le grade :  **"${role}"** ! \n \n :arrow_down: Clique juste en dessous pour obtenir le rôle des notifications :arrow_down:`); //DONT CHANGE THIS
    return messages;
}
 
 
bot.on("message", message => {
    if (message.member.hasPermission("ADMINISTRATOR") && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                }
            });
        }
    }
})
 
 
bot.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
       
        let channel = bot.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
       
        if (msg.author.id == bot.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
       
            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find(r => r.name === role);
                var memberObj = msg.guild.members.get(user.id);
               
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj);
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }  
});

};
