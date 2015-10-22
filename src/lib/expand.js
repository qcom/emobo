var validator = require('./validator');

function expand(input, dictionary, prefix='$') {

	let escapeRegExp = (string) => string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");

	let marks = [];
	input.split('').forEach((c, pos) => {
		if (c === prefix) marks.push(pos);
	});

	let keys = [];
	marks.forEach((mark) => {
		let key = '';
		let i = mark + 1;
		while (input[i] && validator.isValidChar(input[i]) && validator.isValidKeyLength(key)) {
			key += input[i++];
		}
		keys.push(key);
	});

	keys.forEach((key) => {
		let re = new RegExp(escapeRegExp(prefix + key), 'g');
		input = input.replace(re, dictionary[key]);
	});

	return input;
}

module.exports = expand;
