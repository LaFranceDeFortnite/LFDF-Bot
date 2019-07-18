const fs = require("fs");
const path = require("path");
const Enmap = require("enmap");
const Discord = require("discord.js");
const bot = new Discord.Client();
const db = require('quick.db');
let prefix = "!";

bot.config = require("./config.json");
bot.commands = new Enmap();

console.log("Connnection au serveur discord...");
bot.on('ready', async () => {

    fs.readdir(path.join(__dirname, "commands"), (err, files) => {
        if (err) return console.error(err);
        registerCommand(path.join(__dirname, "commands"), files);
    });

    fs.readdirSync(path.join(__dirname, "events")).forEach(function(file) {
        require('./events/' + file)(bot);
    });

    console.log("Le bot est connecter");
});

function registerCommand(pathFile, files) {
    files.forEach(file => {
        if(fs.lstatSync(path.join(pathFile.toLocaleString(), file)).isDirectory()){
            fs.readdir(path.join(pathFile.toLocaleString(), file), (err, files) => {
                registerCommand(path.join(pathFile.toLocaleString(), file), files);
            });
        }else{
            if (!file.endsWith(".js")) return;
            let props = require(`${pathFile}/${file}`);
            let commandName = file.split(".")[0];
            props.command = commandName;
            bot.commands.set(commandName, props);
        }
    });

}

bot.connectDatabase = function connectDatabase(bot, mongoose) {
    mongoose.connect("mongodb://"+bot.config.bdd.user+":"+bot.config.bdd.password+"@"+bot.config.bdd.url+"/"+bot.config.bdd.database, { useNewUrlParser: true }).then();
};

bot.on("ready", () => {
    let statuses = ["Mp for Support", `Mp for Support`];

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "STREAMING", url:"https://www.twitch.tv/lafrancedefortnite"});
    }, 5000)
    bot.channels.get("540107675397128202").send(`:white_check_mark: Bot **${bot.user.username}** en ligne, Prêt à travailler !`);
});

bot.login(process.env.token);

bot.on("message", async message => {

  if(message.author.bot) return;

  if(message.channel.type !== 'text') {

    let active = await db.fetch(`support_${message.author.id}`);

    let guild = bot.guilds.get('515604887686610944');

    let channel, found = true;

    try {
      if(active) bot.channels.get(active.channelID).guild;
    }catch(e) {
      found = false;
    }

    if(!active || !found) {

      active = {};

      channel = await guild.createChannel(`${message.author.username}-${message.author.discriminator}`);

      channel = await channel.setParent('515876927266095105');

      try {
            let ascalonall = guild.roles.find(`name`, "✔️ | Membre");
            let moderationrole = guild.roles.find(`name`, "⚜️ | Directeur");
            let respmodorole = guild.roles.find(`name`, "⚙️ | Staff All");


            channel.overwritePermissions(ascalonall, {
            CREATE_INSTANT_INVITE: false,
            KICK_MEMBERS: false,
            BAN_MEMBERS: false,
            ADMINISTRATOR: false,
            MANAGE_CHANNELS: false,
            MANAGE_GUILD: false,
            ADD_REACTIONS: false,
            VIEW_AUDIT_LOG: false,
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false
          });

          channel.overwritePermissions(moderationrole, {
          CREATE_INSTANT_INVITE: true,
          KICK_MEMBERS: true,
          BAN_MEMBERS: true,
          ADMINISTRATOR: true,
          MANAGE_CHANNELS: true,
          MANAGE_GUILD: true,
          ADD_REACTIONS: true,
          VIEW_AUDIT_LOG: true,
          VIEW_CHANNEL: true,
          SEND_MESSAGES: true
        });

        channel.overwritePermissions(respmodorole, {
        CREATE_INSTANT_INVITE: true,
        KICK_MEMBERS: true,
        BAN_MEMBERS: true,
        ADMINISTRATOR: true,
        MANAGE_CHANNELS: true,
        MANAGE_GUILD: true,
        ADD_REACTIONS: true,
        VIEW_AUDIT_LOG: true,
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true
      });

        } catch(e){
          console.log(e.stack);
        }

      let author = message.author;

      const newChannel = new Discord.RichEmbed()
      .setColor(0x36393e)
      .setAuthor(author.tag)
      .setFooter('Support Ticket Created')
      .addField('User', author)
      .addField('ID', author.id)

      await channel.send(newChannel);

      author.send(":wave: __**Bonjour/Bonsoir**__ ! \n \n :pushpin: Merci d'avoir contacté le __Support Bot LFDF__ ! Un membre du staff va vous répondre dans les plus brefs délais. \n \n :warning: Avertissement : Si tu envoies des Messages type **Trool**/**Lien**/**Insulte**/**Raciste** ou autres au Bot, tu seras automatiquement __Banni du Serveur__.");

      active.channelID = channel.id;
      active.targetID = author.id;

    }


    channel = bot.channels.get(active.channelID);

   // message.author.send(":flag_mf: Votre message a été envoyé \n:flag_lr: Your message has been sent");

    const embed = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(message.author.tag)
    .setDescription(message.content)
    .setFooter(`Message Recieved -- ${message.author.tag}`)

    await channel.send(embed);

    db.set(`support_${message.author.id}`, active);
    db.set(`supportChannel_${channel.id}`, message.author.id);
    return;
  }

  let support = await db.fetch(`supportChannel_${message.channel.id}`);

  if(support) {

    support = await db.fetch(`support_${support}`);

    let supportUser = bot.users.get(support.targetID);
    if(!supportUser) return message.channel.delete();

    if(message.content.toLowerCase() == "?ban") {

      message.channel.delete();

      db.delete(`support_${support.targetID}`);
      message.guild.member(supportUser).ban("Troll bot / Invite Discord");
      return;

    }

    if(message.content.toLowerCase() == '?close') {

        message.channel.delete();

        db.delete(`support_${support.targetID}`);
        bot.users.get(support.targetID).send(`**Merci d'avoir contacté le Support Bot LFDF.** <:LaFranceDeFortnite:515999362904752131> \n\n Nous te souhaitons une agréable journée/soirée et restons à votre disposition pour toute(s) autre(s) question(s). \n\n *Merci de ne pas répondre à la suite de ce message, sauf si vous avez d'autre(s) question(s).*`)
        return;
        }

    bot.users.get(support.targetID).send(`**${message.member.displayName}** : ${message.content}`)
    message.delete();


    return message.channel.send(`**${message.member.displayName}** : ${message.content}`);
  }
  });

bot.on('message', message => {
    if(message.content.startsWith(prefix + "sdg")) {
                  if(message.author.id == 419536423796998155 || message.author.id == 540597069753221149 || message.author.id == 353187152961732608) {
          let emoji = message.guild.emojis.find('name', "Yess");
          let emoji1 = message.guild.emojis.find('name', "Noo");
          let arg = message.content.split(" ").slice(1);
          let thingToEco = arg.join(" ")
          let myRole = message.guild.roles.find(role => role.name === "🔔 | Notif");
          message.guild.channels.find("name", "📅sondage").sendMessage(`:date: **Sondage du Jour** \n __Mention :__ ${myRole} \n\n __Question :__ ** ${thingToEco}** \n\n Répondez au sondage avec <a:Yess:566680823395385345> ou <a:Noo:566680901950504990> \n `+ "``By La France De Fortnite``")
          .then(function (message) {
          message.react(emoji)
          message.react(emoji1)

          }).catch(function() { 
          });
          message.guild.channels.find("name", "📅sondage").sendMessage("", {
            files: [
              "images/ligne.jpg"
          ]
          });
          message.delete();
          console.log('Commande Sondage');
              }
    }
        if(message.content.startsWith(prefix + "actu")) {
      if(message.author.id == 419536423796998155 || message.author.id == 540597069753221149 || message.author.id == 353187152961732608) {
          let arg = message.content.split(" ").slice(1);
          let thingToEco = arg.join(" ")
          message.guild.channels.find("name", "🌴actu-lfdf").sendMessage("``📌 NOUVELLE ACTUALITÉ ! 📌`` \n\n " + thingToEco + " \n\n __Bonne Journée !__ :crossed_swords:")
          message.guild.channels.find("name", "🌴actu-lfdf").sendMessage("", {
            files: [
              "images/ligne.jpg"
          ]
          });
          message.delete();
          console.log('Commande Actu LFDF');
      }
    }
});
