const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

const responses = require('./responses/responses.js');

client.once('ready', () => {
	console.log('Banana!');
});

client.login(config.token);

client.on('message', message => {
	responses.forEach(item => {
		if (message.content.match(item.regex)) {
			item.response(message);
		}
	});
});