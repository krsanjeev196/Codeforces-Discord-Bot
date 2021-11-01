//const { Client, Intents } = require('discord.js');
import {Client, Intents} from 'discord.js';
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env['token'];
//const fetch = require('node-fetch');
import fetch from 'node-fetch';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ziz') {
    await interaction.reply('yo!');
  } else if(interaction.commandName ==='hello')
  {
    await interaction.reply('Hello Friends!!\n You are talking to Ketchup.')
  }
  else if(interaction.commandName ==='count'){
    
    const cf_api = `https://codeforces.com/api/user.status?handle=krsanjeev196&from=1&count=50`;

    const response = await fetch(cf_api);
    const jsonData= await response.json();
    const lastWeekDate = (Date.now() /1000)-604800;
    
    console.log(lastWeekDate);
    console.log(jsonData);

    var count=0;
    
    for(var i=0; i<jsonData.result.length; i++){
      if(jsonData.result[i].creationTimeSeconds >= lastWeekDate)
          count++;
    };
     
    console.log(count);

    const username = 'krsanjeev196';
    await interaction.reply(`${username}\n${count}\n`);


    //await interaction.reply(`${count}\n`);
    //await interaction.reply('This function is not working currentl :(');
  }
});


client.login(token);