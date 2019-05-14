const Discord = require('discord.js');

module.exports = (client) => {

client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription('Hey __**' + member.user.username + "**__, bienvenue sur **La France De Fortnite** :tada: :hugging: !\n\n N'oublie pas de choisir t'es grade dans ➔ <#515850558020517898> \n\n Et de mettre dans la Boutique Fortnite notre code Créateur : **LFDF-TOURNOI** :gem:")
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('519294938102366250').send(embed)
    member.addRole('533994115063611402')
    member.addRole('533995952671948811')
    member.addRole('515606140638330890')
    });
};
