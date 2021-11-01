//const Discord = import("discord.js");
//const Discord = require('discord.js');
//import Discord from 'discord.js';

//----------------------------
// const { REST } = require('@discordjs/rest');
//const { Routes } = require('discord-api-types/v9');


import {REST} from '@discordjs/rest';
import {Routes} from 'discord-api-types/v9';

// const { REST } = require('@discordjs/rest');
// const { Routes } = require('discord-api-types/v9');

const token = process.env['token']
const CLIENT_ID = process.env['client_id']
const GUILD_ID = process.env['guild_id']

const commands = [{
  name: 'ziz',
  description: 'Replies with yo!'
},{
  name :'hello',
  description : 'Greets!!'
},{
  name: 'count',
  description: 'Gives submisson of last week on Codeforces.'
}]; 

// const content = [{
//   name :'hello',
//   description : 'Greets!!'
// }];

console.log(CLIENT_ID)
const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();


//-------------------------------

//const client = new Discord.Client();
// // import { Client, Intents , MessageEmbed}  from 'discord.js';
// const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUIL  D_MESSAGES] });

// console.log('Hello World!!');

// client.on("ready", () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// });

// client.on("message", msg => {
//   if (msg.content === "Hello") {
//     msg.reply("Hello Friends!!\n You are talking to ketchup.");
//   }
// });
// console.log('Hello!!');

//client.login(process.env.TOKEN);
//client.login(`${TOKEN}`); 
