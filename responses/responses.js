module.exports = [{
	regex:	/banana/ig,
	response: (message) => message.channel.send('B-A-N-A-N-A'),
},
{
	regex: /yellow/ig,
	response: (message) => message.channel.send('yelloooooooow'),
},
];