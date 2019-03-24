exports.run = (client, message, args) =>{

    message.channel.send('Commencement Snip').then(async message => {
            setTimeout(() => {
                message.edit("**Démarrage de la game dans** : ``1 Minute`` • □□□□□□□□□□ - 0%");
            }, 1000);
            setTimeout(() => {
                message.edit("**Démarrage de la game dans** : ``54 secondes`` • ■□□□□□□□□□ - 10%");
            }, 6000);
            setTimeout(() => {
                message.edit('**Démarrage de la game dans** : ``48 secondes`` • ■■□□□□□□□□ - 20%');
            }, 12000);
            setTimeout(() => {
                message.edit('**Démarrage de la game dans** : ``42 secondes`` • ■■■□□□□□□□ - 30%');
            }, 18000);
            setTimeout(() => {
                message.edit("**Démarrage de la game dans** : ``36 secondes`` • ■■■■□□□□□□ - 40%");
            }, 24000);
            setTimeout(() => {
                message.edit("**Démarrage de la game dans** : ``30 secondes`` • ■■■■■□□□□□ - 50%");
            }, 30000);
            setTimeout(() => {
                message.edit("**Démarrage de la game dans** : ``24 secondes`` • ■■■■■■□□□□ - 60%");
            }, 36000);
            setTimeout(() => {
                message.edit("**Démarrage de la game dans** : ``18 seconde``s • ■■■■■■■□□□ - 70%");
            }, 42000);
            setTimeout(() => {
                message.edit("**Démarrage de la game dans** : ``12 secondes`` • ■■■■■■■■□□ - 80%");
            }, 48000);
            setTimeout(() => {
                message.edit("**Démarrage de la game dans** : ``6 secondes`` • ■■■■■■■■■□ - 90%");
            }, 54000);
            setTimeout(() => {
                message.edit("**Lancement Game Snip** • ■■■■■■■■■■ - 100%");
            }, 60000);
    });
};

exports.info = {
    aliases: ["Snip"],
    description: "Commande Snip",
    usage: "",
    category: "Fun",
    permissions: "",
    showHelp: true
};