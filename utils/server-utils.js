require('dotenv').config();
const request = require('superagent');

async function getAllResponses() {
	console.log('getting all responses...');
	const response = await request.get(`${process.env.SERVER_URL}/responses`);
	console.log('responses gotten!');
	return response.body;
}

module.exports = { getAllResponses };