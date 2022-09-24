//const { Client, Intents } = require('discord.js');
import { MessageEmbed } from 'discord.js';

import { Client, Intents } from 'discord.js';
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env['token'];
import fetch from 'node-fetch';
import promptSync from 'prompt-sync';
const prompt = promptSync();

//creating embed to store final result
// const newEmbed = new MessageEmbed();

// newEmbed.setTitle('Codeforces submission count of last seven days.');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const codeforcesAccounts = [
  {
    name: "Sanjeev Kumar",
    userid: "krsanjeev196"
  }, {
    name: "Priyanshu Patwa",
    userid: "priyanshu619"
  }, {
    name: "Arohi Jain",
    userid: "roejain"
  }, {
    name: "Rudra",
    userid: "rudra2901"
  }
]

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'hello') {
    await interaction.reply('Hello Friends!!\n You are talking to Ketchup.')
  }
  else if (interaction.commandName === 'count') {

    const newEmbed = new MessageEmbed();

    newEmbed.setTitle('Codeforces submission count of last seven days.');

    for (var j = 0; j < codeforcesAccounts.length; j++) {
      let username = codeforcesAccounts[j].userid;

      const cf_api = `https://codeforces.com/api/user.status?handle=${username}&from=1&count=50`;

      const response = await fetch(cf_api);
      const jsonData = await response.json();
      const lastWeekDate = (Date.now() / 1000) - 604800;

      var count = 0;

      for (var i = 0; i < jsonData.result.length; i++) {
        if (jsonData.result[i].creationTimeSeconds >= lastWeekDate)
          count++;
      }

      newEmbed.addFields(
        { name: `${username}`, value: `${count}` }
      )

    };

    await interaction.reply({ embeds: [newEmbed] });
  }
});

client.login(token);