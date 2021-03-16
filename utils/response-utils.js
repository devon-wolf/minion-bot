function pickResponse(images) {
	if (images.length < 2) {
		return images[0];
	}
	else {
		const randomNumber = Math.floor(Math.random() * images.length);
		return images[randomNumber];
	}
}

function sendResponse(message, object) {
	message.channel.send(pickResponse(object.images));
}

module.exports = { sendResponse };