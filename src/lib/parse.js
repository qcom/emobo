function parse(s) {
	let terms = s.trim().split(' ');

	let key = terms[0];
	let val = terms.slice(1).join(' ');

	return {key, val};
}

module.exports = parse;
