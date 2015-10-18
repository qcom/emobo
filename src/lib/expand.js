function expand(input, dictionary, prefix='$') {

	const MAX_LENGTH = 10;
	let escapeRegExp = (string) => string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	let _validChar = (c) => /^[a-zA-z]+$/.test(c);
	let _validLength = (s) => s.length <= MAX_LENGTH;

	let marks = [];
	input.split('').forEach((c, pos) => {
		if (c === prefix) marks.push(pos);
	});

	let keys = [];
	marks.forEach((mark) => {
		let key = '';
		let i = mark + 1;
		while (input[i] && _validChar(input[i]) && _validLength(key)) {
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
