const request = require('superagent');

const URL = 'https://minion-server.herokuapp.com';

async function getAllResponses() {
	console.log('getting all responses...');
	const response = await request.get(`${URL}/responses`);
	console.log('responses gotten!');
	return response.body;
}

module.exports = { getAllResponses };