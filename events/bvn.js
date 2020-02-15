const Discord = require('discord.js');

module.exports = (client) => {

client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription('Hey __**' + member.user.username + "**__, bienvenue sur notre Discord :tada: :hugging: !\n\n Nous sommes actuellement en Maintenance ! =)")
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('661697039960375296').send(embed)
    member.addRole('515606140638330890')
    member.addRole('533994115063611402')
    member.addRole('533995952671948811')
    });
};
