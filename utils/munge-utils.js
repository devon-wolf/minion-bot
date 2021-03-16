// this is where I can add more string-parsing to cut out unwanted triggering behavior

function makeRegex(string) {
	return new RegExp(string, 'gi');
}

module.exports = { makeRegex };