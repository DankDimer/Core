const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("🚫 ***You must mention 1 user.***");
    if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("🚫***You may not mute this specific user.***");
    let muterole = message.guild.roles.find(`name`, "[~] Muted")
    //start of createrole
    if(!muterole){
       try{
        muterole = await message.guild.createRole({
            name: "[~] Muted", 
            color: "#000000",
            permissions:[]
        })
        message.guild.channel(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });
       }catch(e){
           console.log(e.stack);
       }
    }
    //end of createrole
    let mutetime = args[1];
    if(!mutetime) return message.reply("🚫***you must put in a form of time(in the form of s/m/h/d).***");

    await (tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> has been muted for ${ms(mutetime)}`);

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted`);
    }, ms(mutetime));
}
    module.exports.help = {
        name: "tempmute"
      }