//const Discord = import("discord.js");
//const Discord = require('discord.js');
//import Discord from 'discord.js';

//----------------------------
// const { REST } = require('@discordjs/rest');
//const { Routes } = require('discord-api-types/v9');


import {REST} from '@discordjs/rest';
import {Routes} from 'discord-api-types/v9';
import promptSync from 'prompt-sync';

const prompt = promptSync();
//let username = prompt();

const token = process.env['token']
const CLIENT_ID = process.env['client_id']
const GUILD_ID = process.env['guild_id']

//var username;

const commands = [{
  name :'hello',
  description : 'Greets!!'
},{
  name: 'count',
  description: 'Gives submisson of last week on Codeforces.'
}]; 


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

