const Discord = require('discord.js');

module.exports = (client) => {

client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription('Hey __**' + member.user.username + "**__, bienvenue sur **uFc4 Esport** :tada: :hugging: !\n\n N'oublie pas de choisir t'es grade dans ➔ <#661697044607401984> \n\n Et de mettre dans la Boutique Fortnite notre code Créateur : **UFC4-TEAM** :gem:")
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('661697039960375296').send(embed)
    member.addRole('515606140638330890')
    member.addRole('533994115063611402')
    member.addRole('533995952671948811')
    });
client.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        let bvnembed = new Discord.RichEmbed()
        .setColor('#10d64f')
        .setTitle('Bienvenue sur le discord **uFc4 Esport**')
        .setDescription(`N'oublie pas de choisir t'es grade dans ➔ <#661697044607401984> \n\n Et de mettre dans la Boutique Fortnite notre code Créateur : \n **UFC4-TEAM** \n\n __Nos réseaux :__ \n\n [Twich](https://www.twitch.tv/lafrancedefortnite) \n [Twitter](https://twitter.com/uFc4_Esport) \n [YouTuBe](https://www.youtube.com/channel/UC0KPlzbTKQhZzHITyljYotw)`)
        .setThumbnail("https://cdn.discordapp.com/attachments/661697060038508564/667353614196408320/UFC4.png")
        .setFooter("Si tu as une question, renvoie-moi un message")
        .setTimestamp()
        return channel.send(bvnembed)
    });
    });
};
