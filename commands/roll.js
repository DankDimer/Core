const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rnumber = Math.floor(Math.random()* 6)
    if(rnumber === 1){
        message.channel.send("You rolled a 1!")
    }else if(rnumber === 2){
        message.channel.send("You rolled a 2!")
    }else if(rnumber === 3){
        message.channel.send("You rolled a 3!")
    }else if(rnumber === 4){
        message.channel.send("You rolled a 4!")
    }else if(rnumber === 5){
        message.channel.send("You rolled a 5!")
    }else if(rnumber === 6){
        message.channel.send("You rolled a 6!")
    }else{
        message.channel.send("the dice fell under the table, never to be seen again. Roll again.")
    };
    
};


    
    module.exports.help = {
        name: "roll"
      }