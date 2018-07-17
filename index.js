//***********************************************************************************************************************************************
// -------------------------------------------
const Discord = require("discord.js")
const fs = require("fs")
// -------------------------------------------
const colors = require("./colors.json")
const botconfig = require("./botconfig.json")
const coins = require("./coins.json")
const xp = require("./xp.json")
// -------------------------------------------
const client = new Discord.Client()
const bot = new Discord.Client()
// -------------------------------------------
bot.commands = new Discord.Collection()
// -------------------------------------------
let cooldown = new Set();
let cdseconds = 5;
//--------------------------------------------
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"))
// -------------------------------------------
//################################
let red = botconfig.red
let orange = botconfig.orange
let yellow = botconfig.yellow
let green = botconfig.green
let blue = botconfig.blue
let indigo = botconfig.indigo
let violet = botconfig.violet
//################################
let black = botconfig.black
let gray = botconfig.gray
let white = botconfig.white
//################################
let pink = botconfig.pink
let brown = botconfig.brown
let maroon = botconfig.maroon
let crimson = botconfig.crimson
let turquoise = botconfig.turquoise
let aqua = botconfig.aqua
let aquamarine = botconfig.aquamarine
let ltblue = botconfig.ltblue
let navy = botconfig.navy
let purple = botconfig.purple
let magenta = botconfig.magenta
//################################
//***********************************************************************************************************************************************
//END OF CONSTANTS AND VARIABLES
//***********************************************************************************************************************************************
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
//***********************************************************************************************************************************************
jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});
//***********************************************************************************************************************************************
//START OF ACTUAL BOT
//***********************************************************************************************************************************************
bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("YeDankDimers", {type: "WATCHING"});

});
//***********************************************************************************************************************************************
bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
//***********************************************************************************************************************************************
//Beginning of coin system
//***********************************************************************************************************************************************
 if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    }
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  })
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField("💸", `${coinAmt} coins added!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }
//***********************************************************************************************************************************************
//End of coin system
//===============================================================================================================================================
//Beginning of XP system
//***********************************************************************************************************************************************
 let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor(purple)
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  })
//***********************************************************************************************************************************************
//End of XP system
//===============================================================================================================================================
//Beginning of cooldown system
//***********************************************************************************************************************************************
 let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("You have to wait 5 seconds between commands.")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }
//***********************************************************************************************************************************************
//End of cooldown system
//===============================================================================================================================================
//Beginning of command handler
//***********************************************************************************************************************************************
 let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
});
//***********************************************************************************************************************************************
//End of command handler
//===============================================================================================================================================
bot.login(process.env.BOT_TOKEN)
//End of index.js
//***********************************************************************************************************************************************
