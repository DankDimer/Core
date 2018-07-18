const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
    let aUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!aUser) return message.guild.member("Couldn't find user");
    let aReason = args.join(" ").slice(22);
 

let applyembed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("000000")
.addField("Applicant", `${aUser} With ID: ${aUser.id}`)
.addField("Application: ", aReason)
.setFooter("Any aplications that are not taken seriously will be taken a such!");

let applicationchannel = message.guild.channels.find(`name`, "applications");
if(!applicationchannel) return message.channel.send("Couldn't find the applications channel.");

message.delete().catch(O_o=>{});
applicationchannel.send(applyembed);

return;

    }
    module.exports.help = {
        name: "apply"
      }
