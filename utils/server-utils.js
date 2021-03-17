const request = require('superagent');

async function getAllResponses() {
	const response = await request.get(`${process.env.SERVER_URL}/responses`);

	return response.body;
}

module.exports = { getAllResponses };