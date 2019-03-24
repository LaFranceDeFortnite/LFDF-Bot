const Discord = require("discord.js");
const fortclient = require('fortnite');
const ft = new fortclient("fb69fa20-f69f-4968-ae6b-3eb29b38a605");

module.exports.run = async (client, message, args) => {

    try {
        let infoEmbed = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setTitle(":x: Erreur, Utilisateur non trouvé...")
            .setDescription("Assurez-vous d'utiliser la bonne syntaxe : \n \n ``!fn`` ``[platform]`` ``[user]``\n \n __Exemples :__ !ftn pc Ninja");

        let platform = args[0] || 'pc' || 'psn' || 'xbl';
        let username = args[1];

        if (!platform) return message.channel.send(infoEmbed);
        if (!username) return message.channel.send(infoEmbed);

        let data = ft.user(username, platform).then(data => {

            let stats = data.stats;
            let lifetime = stats.lifetime;


            let score = lifetime[6]['Score'];
            let mPlayed = lifetime[7]['Matches Played'];
            let Wins = lifetime[8]['Wins'];
            let WinPercentage = lifetime[9]['Win%'];
            let Kills = lifetime[10]['Kills'];
            let kd = lifetime[11]['K/d'];
            let solo = stats.solo;
            let soloScore = solo.score;
            let soloMatches = solo.matches;
            let soloWins = solo.wins;
            let soloKills = solo.kills;
            let soloKd = solo.kd;
            let duo = stats.duo;
            let duoScore = duo.score;
            let duoMatches = duo.matches;
            let duoWins = duo.wins;
            let duoKills = duo.kills;
            let duoKd = duo.kd;
            let squad = stats.squad;
            let squadScore = squad.score;
            let squadMatches = squad.matches;
            let squadWins = squad.wins;
            let squadKills = squad.kills;
            let squadKd = squad.kd;


            let FortniteEmbed = new Discord.RichEmbed()
                .setTitle("📈 Fortnite Stats de " + data.username)
                .setDescription("Wins Total : " + Wins + "   | Win Rate : " + WinPercentage + "\n Kills Total : " + Kills + "   | K/D : " + kd + "\n Matches : " + mPlayed + "   | Score : " + score)
                .addField("__Stats SOLO__ \nMatches :", soloMatches, true)
                .addField("__Stats DUO__ \nMatches :", duoMatches, true)
                .addField("__Stats SQUAD__ \nMatches :", squadMatches, true)
                .addField("Kills Total :", soloKills, true)
                .addField("Kills Total :", duoKills, true)
                .addField("Kills Total :", squadKills, true)
                .addField("Wins Total :", soloWins, true)
                .addField("Wins Total :", duoWins, true)
                .addField("Wins Total :", squadWins, true)
                .addField("K/D :", soloKd, true)
                .addField("K/D :", duoKd, true)
                .addField("K/D :", squadKd, true)
                .addField("Score :", soloScore, true)
                .addField("Score :", duoScore, true)
                .addField("Score :", squadScore, true)

            message.channel.send(FortniteEmbed)

        });

    } catch (error) {
        message.channel.send("An error occured while getting the stats!");
        console.log(error)

    }
}

module.exports.help = {
    name: "fn"
}
