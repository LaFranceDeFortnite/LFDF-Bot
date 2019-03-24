const Discord = require("discord.js");
const bot = new Discord.Client();
let prefix = "!";

bot.on("ready", () => {
    console.log("Je suis prêt !");
    let statuses = ["Mp for Support", `Mp for Support`];

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "STREAMING", url:"https://www.twitch.tv/lafrancedefortnite"});
    }, 5000)
    bot.channels.get("540107675397128202").send(`:white_check_mark: Bot **${bot.user.username}** en ligne, Prêt à travailler !`);
    bot.channels.get("540107675397128202").send(":wavy_dash: :wavy_dash: :wavy_dash: :black_small_square: :wavy_dash: :wavy_dash: :wavy_dash:")
});

bot.login(process.env.token);
