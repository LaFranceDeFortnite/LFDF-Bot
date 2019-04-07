const fs = require("fs");
const path = require("path");
const Enmap = require("enmap");
const Discord = require("discord.js");
const bot = new Discord.Client();
const db = require('quick.db');
const FortniteClient = require('fortnite-client').FortniteClient;
const FortniteBR = require('fnbrco.js');
let prefix = "!";

bot.config = require("./config.json");
bot.commands = new Enmap();

const fnbr = new FortniteBR("69da3005-db72-4c10-bc45-dfd378644c89")

bot.on('message', async message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if (!message.content.startsWith(prefix)) {
        return
    }

    if (cmd === `${prefix}shop`) {
        channelId = message.channel.id
        await shopItems(channelId)
    }

    if (cmd === `${prefix}newssss`) {
        let typeArg = args.join(" ")
        let type;
        if (!typeArg || typeArg.toLowerCase() === 'br' || typeArg.toLowerCase() === 'battle royale') {
            type = 'br'
        } else if (typeArg.toLowerCase() === 'stw' || typeArg.toLowerCase() === 'save the world') {
            type = 'stw'
        } else if (typeArg.toLowerCase() === 'bp' || typeArg.toLowerCase() === 'battle pass' || typeArg.toLowerCase() === 'battlepass') {
            type = 'bp'
        }
        await ftnNews(type, message.channel.id)
    }
});

async function shopItems(channel) {
    try {
        let shop = await fnbr.getShop();
        let sChannel = bot.channels.find("name", "🛒boutique");
        let embed = new Discord.RichEmbed()
            .setColor("#8600da")
            .setDescription(`╚> N’oublie pas de mettre dans la Boutique notre Code Créateur : **LFDF-TOURNOI**`)
            .setAuthor("Boutique Fortnite du Jour")
            .setFooter("La France De Fortnite")
            .setTimestamp()
        for (let i = 0; i < shop.featured.length; i++) {

            const shopFeatured = shop.featured[i];
            if (!shopFeatured) {
                embed.addField("Not available cosmetic", "Empty", true)
            } else {
                embed.addField( shopFeatured.name, shopFeatured.price + " " + shopFeatured.priceIcon, true)
            }
        }
        embed.addBlankField()
        for (let i = 0; i < shop.daily.length; i++) {
            const shopDaily = shop.daily[i];
            embed.addField( shopDaily.name, shopDaily.price + " " + shopDaily.priceIcon, true)
        }
        sChannel.send(embed).then(msg => msg.delete(300000))


    } catch (err) {
        console.error(err)
    }
}

async function ftnNews(type, channel) {
    let sChannel = bot.channels.find("name", "🌐news-fortnite")
    try {
        var news = await FortniteClient.GET_GAME_NEWS()
    } catch (err) {
        console.log(err)
    }
    if (type === 'br') {
        for (let i = 0; i < news.battleroyalenews.news.messages.length; i++) {
            let imageURL = news.battleroyalenews.news.messages[i].image
            if (!imageURL) {
                imageURL = icons[1];
            }
            let embed = new Discord.RichEmbed()
                .setColor("#ffc704")
                .setTitle(news.battleroyalenews.news.messages[i].title)
                .setAuthor("News Battle Royale")
                .setDescription(news.battleroyalenews.news.messages[i].body)
                .setThumbnail(imageURL)
            sChannel.send(embed)
        }
    } else if (type === 'stw') {
        for (let i = 0; i < news.savetheworldnews.news.messages.length; i++) {
            let imageURL = news.savetheworldnews.news.messages[i].image
            if (!imageURL) {
                imageURL = icons[1];
            }
            let embed = new Discord.RichEmbed()
                .setColor("#ffc704")
                .setTitle(news.savetheworldnews.news.messages[i].title)
                .setAuthor("News Sauver le Monde")
                .setDescription(news.savetheworldnews.news.messages[i].body)
                .setThumbnail(imageURL)
            sChannel.send(embed)
        }
    } else if (type === 'bp') {
        for (let i = 0; i < news.battlepassaboutmessages.news.messages.length; i++) {
            let imageURL = news.battlepassaboutmessages.news.messages[i].image
            if (!imageURL) {
                imageURL = icons[1];
            }
            let embed = new Discord.RichEmbed()
                .setColor("#ffc704")
                .setTitle(news.battlepassaboutmessages.news.messages[i].title)
                .setAuthor("News Passe de Combat")
                .setDescription(news.battlepassaboutmessages.news.messages[i].body)
                .setThumbnail(imageURL)
            sChannel.send(embed)
        }
    }
}

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
            let ascalonall = guild.roles.find(`name`, "【✔️】Membre");
            let moderationrole = guild.roles.find(`name`, "【⚜️】Fondateur");
            let respmodorole = guild.roles.find(`name`, "【⚙️】Staff");


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

      author.send(":flag_mf: Merci d'avoir contacté le support ! Un membre du staff va vous contacter dans les plus brefs délais \n:flag_lr: Thank you for contacting the support ! A member of the staff will contact you as soon as possible");

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

    if(message.content.toLowerCase() == '?complete') {

        message.channel.delete();

        db.delete(`support_${support.targetID}`);
        return;
        }

    bot.users.get(support.targetID).send(`**${message.member.displayName}** : ${message.content}`)
    message.delete();


    return message.channel.send(`**${message.member.displayName}** : ${message.content}`);
  }
  });

bot.on('message', message => {
    if(!message.guild) return;
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLocaleLowerCase()=== prefix + "spawn") {
        let rep = ["Loot Lake", "Lazy Lagoon", "Sunny Steps", "Lonely Lodge", "Shifty Shafts", "Haunted Hills", "Junk Junction", "Snobby Shores", "Frosty Flights", "Happy Hamlet", "Dusty Divot", "Polar Peak", "The Block", "Fatal Field", "Retail Row", "Lucky Landing", "Salty Spring", "Tilted Tower", "Pleasent Parck"];
        let reptaille = Math.floor((Math.random()* rep.length));
        
        let embed = new Discord.RichEmbed()
            .setTitle(":checkered_flag: Tu dois drop là bas !")
            .setColor("#0092ff")
            .setDescription("➔ " + rep[reptaille]);
        message.reply(embed);
    bot.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Spawn**");
    }
    if(message.content.startsWith(prefix + "sdg")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send(":x: Vous n'avez pas la permission !");
            let arg = message.content.split(" ").slice(1);
            let thingToEco = arg.join(" ")
            let myRole = message.guild.roles.find(role => role.name === "【🔔】Notif");
            bot.channels.get("515646253992771595").sendMessage("Mention : " + myRole);
            var embed = new Discord.RichEmbed()
                .setDescription(`📅 **SONDAGE**`)
                .addField(thingToEco, "Répondez au sondage avec ✅ ou ❌")
                .setColor("ffc600")
                .setTimestamp()
                .setFooter("La France De Fortnite")
            message.guild.channels.find("name", "📅sondage").sendEmbed(embed)
            .then(function (message) {
            message.react("✅")
            message.react("❌")

            }).catch(function() { 
            });
            message.delete();
            console.log('Commande Sondage');
            bot.channels.get("540107675397128202").send("Log / Utilisateur **" + message.author.username + "** / Commande **Sondage**");
    }
});
