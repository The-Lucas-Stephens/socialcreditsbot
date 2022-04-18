const{Client, Intents}= require('discord.js');
const{token}=require('./config.json');

//create new client instnace

const client = new Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});


//When the client is ready run this code

client.once('ready',() =>{
    console.log('Ready!');
})

client.on('messageCreate', (message) =>{
    if(message.content == "Give me social credits"){
        message.reply("Praise the CCP have 69 social credits")
        message.channel.send("Praise the red sun in the sky!");
    }
})

//login to disocrd with your client token 

client.login(token);