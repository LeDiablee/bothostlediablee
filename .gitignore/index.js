const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("Je suis inutile pour l'instant");
    console.log("Le bot a bien été connecte");
});

bot.login("NjYyMzA2OTIwOTcxMTA4MzUz.Xg5ZXw.16HvbKpvsdFNsGtEIYe16eVpzfg");
