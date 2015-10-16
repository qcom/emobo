function expand(input, dictionary, prefix='$') {

	const MAX_LENGTH = 10;
	let escapeRegExp = (string) => string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	let _valid = (c) => /^[a-zA-z]+$/.test(c);
	let marks = [];

	input.split('').forEach((c, pos) => {
		if (c === prefix) marks.push(pos);
	});

	let keys = [];
	marks.forEach((mark) => {
		let key = '';
		let i = mark + 1;
		while (_valid(input[i]) && key.length <= MAX_LENGTH) {
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
