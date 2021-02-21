const { MessageAttachment } = require('discord.js');

module.exports = [{
	regex:	/banana/ig,
	response: (message) => message.channel.send('https://cdn.discordapp.com/attachments/808589409074937861/808955633255972894/image0.jpg'),
},
{
	regex: /yellow/ig,
	response: (message) => message.channel.send('yelloooooooow'),
},
{
	regex: /old/ig,
	response: (message) => {
		const image = new MessageAttachment('https://cdn.discordapp.com/attachments/808589409074937863/809966385266425886/a43924f9453945829c01b31591f04ea3.png');

		message.channel.send(image);
	},
},
{
	// regex: /exercise/ig,
	// response: (message) => {
	// 	const image = new MessageAttachment();
	// },
},
{
	// regex: /dance/ig,
	// response: (message) => {
	// 	const image = new MessageAttachment('https://tenor.com/view/despicable-me-minions-dance-dancing-disco-gif-4219552');

	// 	message.channel.send(image);
	// },
},
];