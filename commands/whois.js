const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client({disableEveryone: true});
const colors = require("colors.json")

module.exports.run = async (bot, message, args) => {

    let whoUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
    if(!whoUser){
        return message.channel.send("You must define a user.")
    }
    
let wembed = new Discord.RichEmbed()
.setAuthor(whoUser.user.tag, whoUser.user.avatarURL)
.addField("Account Created", whoUser.user.createdAt, true)
.addField('Joined This Server', message.guild.members.find("id", whoUser.id).joinedAt, true)
.addField("User ID", whoUser.id, true)
.setColor(colors.green)
.setFooter("Searched User");
message.channel.send(wembed);

    }
    module.exports.help = {
        name: "whois"
      }
