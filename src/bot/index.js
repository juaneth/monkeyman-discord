const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs'); //npm i fs

//config Collection
const config = require('./config/config.json');
const token = config.token;
const configprefix = config.prefix;

//prefix
const prefix = configprefix;

client.commands = new Discord.Collection();
// Define a function to load commands from a specific given folder
function loadCommandsFromFolder(folder) {
    const commandFiles = fs.readdirSync(folder).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}
// Load commands from folder './commands/testing'
loadCommandsFromFolder('./commands/testing');

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`monke`, { type: 'PLAYING' }) // STREAMING, WATCHING, CUSTOM_STATUS, PLAYING, COMPETING
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    //Help Commands
    if (command === 'ping') {
        client.commands.get('ping').execute(message, args, Discord);
    }
});


client.login(token);