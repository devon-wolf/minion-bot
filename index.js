const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

const responses = require('./data/responses.js');
const sendResponse = require('./responses/responseUtils.js');

client.once('ready', () => {
	console.log('Banana!');
});

client.login(config.token);

client.on('message', message => {
	responses.forEach(response => {
		if (message.content.match(response.regex)) {
			sendResponse(message, response);
		}
	});
});