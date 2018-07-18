  
  const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client({disableEveryone: true});

  module.exports.run = async (bot, message, args) => {
  
    let bicon = bot.user.displayAvatarURL; 

    let hembed2 = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor(colors.green)
    .addField("***Help***", "A private message with more info has been sent to you.")
    .setFooter("Supernova's botinfo")


    let hembed3 = new Discord.RichEmbed()
    .setTitle("Help", "This bot is my first bot, if there are any problems or errors let me know join my server and let me know: https://discord.gg/8FkW55U")
    .setColor(colors.green)
    .addField(  "***Cmd Info***", "This bot has 18 overall commands and 0 are currently in development. This bot also has ***custom*** join and leave messages. For this function you must make sure that you have a channel called 'welcome_leave' and you must trun off the join messages that discord auto-sends.")
    .setFooter("If a command has `<>` in it then it is required!");
    
    let hembed4 = new Discord.RichEmbed()
    .setTitle("*Fun/Informative commands*")
    .setColor(colors.green)
    .addField(`***${prefix}ping***`, "This command shows you your ping.")
    .addField(`***${prefix}roll***`, "This command will roll you a six sided die, what will you get?")
    .addField(`***${prefix}8ball <question>*** `, "For this command you must ask a full question. The bot picks from an array of multiple differnet answers.")
    .addField(`***${prefix}say <word>***`, "This command will make the bot say whatever you input into it. Use this wisely.")
    .setFooter("Bot is still in development.");
    
    let hembed = new Discord.RichEmbed()
       
       .setDescription("Commands")
       .setThumbnail(bot.user.displayAvatarURL)
       .setColor(colors.blue)
       .addField("Hello!", "Hello " + message.author.username +  " I am Supernova and these are my commands!\n")
       .addField("Command 1:", `***${prefix}roll*** \nThis command will roll a six-sided die for you. What will you get?`)
       .addField("Command 2:", `***${prefix}tempmute <@user#id time (Ex: 1d)>*** \nThis command will temporarily mute a user for a set amount of time.`)
       .addField("Command 3:", `***${prefix}kick <@user#id reason>*** \nThis command will kick the mentioned user and send the kick report to the announcements channel.`)
       .addField("Command 4:", `***${prefix}ban <@user#id reason>*** \nThis command will ban the mentioned user and send the ban report to the announcements channel.`)
       .addField("Command 5:", `***${prefix}report <@user#id reason>*** \nThis command report the mentioned user and send it to the incedents channel.`)
       .addField("Command 6:", `***${prefix}serverinfo*** \nThis command will display the server info (!srvinfo).`)
       .addField("Command 7:", `***${prefix}botinfo*** \nThis command will give you the bot informantion (!botinfo).`)
       .addField("Command 8:", `***${prefix}ping*** \nThis command will show you your ping`)
       .addField("Command 9:", `***${prefix}servers*** \nThis command will give you a list of all my prefered and just in general good servers.`)
       .addField("Command 10:", `***${prefix}coins*** \nThis command lets you see your coins (and yes we do have a coin system)`)
       .addField("Command 11:", `***${prefix}level*** \nThis command will let you see your level, how much xp you have and how much untill the next level`)
       .addField("Command 12:", `***${prefix}application*** \nThis will show you the format for you application. MUST SEE BEFORE YOU APPLY!`)
       .addField("Command 13:", `***${prefix}apply <@yourself#id reason>*** \nThis command will allow you to apply for a role on the server, it will send the application to the applications channel. For more info on what to put do !applications`)
       .addField("Command 14:", `***${prefix}whois <@user#id>*** \nThis command will show you a variety of thing about the user that you mention, such as when they were registered, thier id and much more!`)
       .addField("Command 15:", `***${prefix}8ball <full question>*** \nThis will answer you question that you input, with a variety if different answers.`)
       .addField("Command 16:", `***${prefix}say <Word>*** \nThis will make the bot say whatever you input into it. Use this wisely`)
       .addField("Command 17:", `***${prefix}clear <number>*** \nThis command will bulk delete the amount of messages that you input into the command.`)
       .addField("Command 18:", `***${prefix}setprefix <desired prefix>*** \nThis command will set the bot prefix to any prefix that you want. *Only 1 character is reccomended!*`)
       .addField("Info", "This bot is still in development. Also if a command does not work contact me (DankDimer#2285)")
       .setFooter("Bot was made by DankDimer#2285");
  
       message.author.send(hembed3);
       message.author.send(hembed);
       message.author.send(hembed4);
       message.channel.send(hembed2);
       return;

  }

module.exports.help = {
    name: "help"
  }
