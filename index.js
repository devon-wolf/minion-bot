require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const { getAllResponses } = require('./utils/server-utils.js');
const sendResponse = require('./utils/response-utils.js');

let responses = [];

client.once('ready', async () => {
	responses = await getAllResponses();
	console.log('Banana!');
});

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
	if (message.author.bot) return;

	responses.forEach(response => {
		if (message.content.match(response.regex)) {
			sendResponse(message, response);
		}
	});
});