const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client({disableEveryone: true});
const colors = require("./colors.json")

module.exports.run = async (bot, message, args) => {
if(!args[2]) return message.reply("🚫***You must ask a full question.***")
        let replies = ["***Yes***", "***No***", "***I dont know***", "***Maybe***", "***Ask again later***."]
        let result = Math.floor((Math.random() * replies.length))
        let question = args.slice(1).join(" ");

        let ballembed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor(colors.green)
        .addField("Question", question)
        .addField("Answer", replies[result])

        message.channel.send(ballembed);
    }
    module.exports.help = {
        name: "8ball"
      }
