const Discord = require('discord.js');

module.exports = (client) => {

let PlatformeMessageID = "533001717843755014";
let JeuxMessageID = "533001871233777675";
let NotifMessageID = "533002014951735326";

let pcID = "🖱";
let ps4ID = "Ps4";
let xboxID = "Xbox";
let mobileID = "📱";
let switchID = "Switch";
let fortniteID = "🔫";
let csgoID = "CsGo";
let lolID = "LeagueOfLegend";
let patchID = "📝";
let eventID = "🏅";
let notifID = "🔔";
let mzsnipID = "🚧";
let webtvID = "Twitch";
let boutiqueID = "🛒";
let ppID = "🔑";

let pcRoleID = "515856750780612633";
let ps4RoleID = "515856767142461471";
let xboxRoleID = "515856818195660850";
let mobileRoleID = "515856903511998475";
let switchRoleID = "515856788386742273";
let fortniteRoleID = "553237821088071682";
let csgoRoleID = "536216212187906050";
let lolRoleID = "536215910189498368";
let patchRoleID = "515652524284575779";
let eventRoleID = "515652699321270272";
let notifRoleID = "515653837869285378";
let mzsnipRoleID = "533001446900367360";
let webtvRoleID = "533611496253685760";
let boutiqueRoleID = "558709744882286593";
let ppRoleID = "563419686361104429";

client.on('raw', async event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t === "MESSAGE_REACTION_REMOVE"){
        let emoji = event.d.emoji.name;
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg => {
            let member = msg.guild.members.get(event.d.user_id);
            if (msg.id === PlatformeMessageID){
                switch (emoji) {
                    case ps4ID:
                        let ps4Role = member.guild.roles.get(ps4RoleID);
                        addOrRemoveRole(event.t, member, ps4Role);
                        break;
                    case xboxID:
                        let xboxRole = member.guild.roles.get(xboxRoleID);
                        addOrRemoveRole(event.t, member, xboxRole);
                        break;
                    case pcID:
                        let pcRole = member.guild.roles.get(pcRoleID);
                        addOrRemoveRole(event.t, member, pcRole);
                        break;
                    case mobileID:
                        let mobileRole = member.guild.roles.get(mobileRoleID);
                        addOrRemoveRole(event.t, member, mobileRole);
                        break;
                    case switchID:
                        let switchRole = member.guild.roles.get(switchRoleID);
                        addOrRemoveRole(event.t, member, switchRole);
                        break;
                }
            }
        })
    }
});

client.on('raw', async event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t === "MESSAGE_REACTION_REMOVE"){
        let emoji = event.d.emoji.name;
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg => {
            let member = msg.guild.members.get(event.d.user_id);
            if (msg.id === JeuxMessageID){
                switch (emoji) {
                    case fortniteID:
                        let fortniteRole = member.guild.roles.get(fortniteRoleID);
                        addOrRemoveRole(event.t, member, fortniteRole);
                        break;
                    case csgoID:
                        let csgoRole = member.guild.roles.get(csgoRoleID);
                        addOrRemoveRole(event.t, member, csgoRole);
                        break;
                    case lolID:
                        let lolRole = member.guild.roles.get(lolRoleID);
                        addOrRemoveRole(event.t, member, lolRole);
                        break;
                }
            }
        })
    }
});

client.on('raw', async event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t === "MESSAGE_REACTION_REMOVE"){
        let emoji = event.d.emoji.name;
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg => {
            let member = msg.guild.members.get(event.d.user_id);
            if (msg.id === NotifMessageID){
                switch (emoji) {
                    case patchID:
                        let patchRole = member.guild.roles.get(patchRoleID);
                        addOrRemoveRole(event.t, member, patchRole);
                        break;
                    case eventID:
                        let eventRole = member.guild.roles.get(eventRoleID);
                        addOrRemoveRole(event.t, member, eventRole);
                        break;
                    case notifID:
                        let notifRole = member.guild.roles.get(notifRoleID);
                        addOrRemoveRole(event.t, member, notifRole);
                        break;
                    case mzsnipID:
                        let mzsnipRole = member.guild.roles.get(mzsnipRoleID);
                        addOrRemoveRole(event.t, member, mzsnipRole);
                        break;
                    case webtvID:
                        let webtvRole = member.guild.roles.get(webtvRoleID);
                        addOrRemoveRole(event.t, member, webtvRole);
                        break;
                    case boutiqueID:
                        let boutiqueRole = member.guild.roles.get(boutiqueRoleID);
                        addOrRemoveRole(event.t, member, boutiqueRole);
                        break;
                    case ppID:
                        let ppRole = member.guild.roles.get(ppRoleID);
                        addOrRemoveRole(event.t, member, ppRole);
                        break;
                }
            }
        })
    }
});

function addOrRemoveRole(t, member, role) {
    if(t === 'MESSAGE_REACTION_ADD'){
        member.addRole(role);
    }else if(t === 'MESSAGE_REACTION_REMOVE'){
        member.removeRole(role);
    }
}

};
