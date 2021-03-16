require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const { getAllResponses } = require('./utils/server-utils.js');
const { sendResponse } = require('./utils/response-utils.js');
const { makeRegex } = require('./utils/munge-utils.js');

let responses = [];

client.once('ready', async () => {
	const unmappedResponses = await getAllResponses();
	responses = unmappedResponses.map(response => {
		response.regex = makeRegex(response.regex);
		return response;
	});

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