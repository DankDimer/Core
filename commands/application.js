const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {

    let sembed = new Discord.RichEmbed()
    .setDescription("Application template")
    .setColor(colors.green)
    .addField( "***Template***", "A PM with more information has been sent to you")
    .setFooter("application template")
let aembed = new Discord.RichEmbed()
    .setAuthor(message.author.id)
    .setColor("000000")
    .addField("Requirement 1", "Must take the application seriously (For the server owners out ther you must have an 'applications' channel and exactly that)")
    .addField("Requirement 2", "Must list The following: What role (if you dont know the roles, ask a staff member), how long you have been in the server, why you want that role, and how active you are.")
    .setFooter("Bot was made by DankDimer#2285");

message.channel.send(sembed);
message.author.send(aembed);
return;
    }
    module.exports.help = {
        name: "application"
      }
