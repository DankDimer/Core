const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("***You maynot warn this user***");
        let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!wUser) return message.reply("***You must provide a user.***")
        if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("***You may not warn this user***")
        let wReason = args.join(" ").slice(22);

        if(!warns[wUser.id]) warns[wUser.id] = {
            warns: 0
        };

        warns[wUser.id], warns++;

        fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
           if (err) console.log(err);
        });

        let warnEmbed = new Discord.RichEmbed()
        .setDescription("Warns")
        .setAuthor(message.author.username)
        .setColor(colors.red)
        .addField("Warned User", `<@{wUser.id}>`)
        .addField("Warned In", message.channel)
        .addField("Number of Warnings", warns[wUser.id].warns)
        .addField("Reason", wReason);

        let warnchannel = message.guild.channels.find(`name`, "incidents");
        if(!warnchannel) return message.reply("***Must create an 'incidents' channel.***");

        warnchannel.send(warnEmbed);

        if(warns[wUser.id].warns == 2){
            let muterole = message.guild.roles.find(`name`, "[~] Muted");
            if(!muterole) return message.reply("***You must create the '[~] Muted' role***");

            let wMuteTime = "2d";
            await(wUser.addRole(muterole.id));
            message.channel.send(`${wUser.tag} has been muted for 2 days.`)

            setTimeout(function(){
                wUser.removeRole(muterole.id)
                message.channel.reply(`${wUser.tag} has been unmuted.`)
            })
        }
        if(warns[wUser.id].warns == 4){
            message.guild.member(wUser).kick(reason)
            message.channel.send(`${wUser.tag} Has Been Kicked.`)
        };


    }
    module.exports.help = {
        name: "warn"
      }
