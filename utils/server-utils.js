const request = require('superagent');

const URL = 'https://minion-server.herokuapp.com';

async function getAllResponses() {
	const response = await request.get(`${URL}/responses`);

	return response.body;
}

module.exports = { getAllResponses };