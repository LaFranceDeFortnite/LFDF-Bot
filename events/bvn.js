const Discord = require('discord.js');

module.exports = (client) => {

client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription('Hey __**' + member.user.username + "**__, bienvenue sur **uFc4 Esport** :tada: :hugging: !\n\n N'oublie pas de choisir t'es grade dans ➔ <#515850558020517898> \n\n Et de mettre dans la Boutique Fortnite notre code Créateur : **UFC4-TEAM** :gem:")
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('519294938102366250').send(embed)
    member.addRole('533994115063611402')
    member.addRole('533995952671948811')
    member.addRole('515606140638330890')
    });
client.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        let bvnembed = new Discord.RichEmbed()
        .setColor('#10d64f')
        .setTitle('Bienvenue sur le discord **uFc4 Esport**')
        .setDescription(`N'oublie pas de choisir t'es grade dans ➔ <#515850558020517898> \n\n Et de mettre dans la Boutique Fortnite notre code Créateur : \n **UFC4-TEAM** \n\n __Nos réseaux :__ \n\n [Twich](https://www.twitch.tv/lafrancedefortnite) \n [Twitter](https://twitter.com/LaFranceDeFort1) \n [YouTuBe](https://www.youtube.com/channel/UC0KPlzbTKQhZzHITyljYotw) \n [Instagram](https://www.instagram.com/lafrancedefortnite/) \n [LFDF Animation](https://discord.gg/c65ZJSg)`)
        .setThumbnail("https://cdn.discordapp.com/attachments/516014468086628352/582994096294199306/PicsArt_05-12-07.45.35.jpg")
        .setFooter("Si tu as une question, renvoie-moi un message")
        .setTimestamp()
        return channel.send(bvnembed)
    });
    });
};
