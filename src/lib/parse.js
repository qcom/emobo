function parse(s) {
	let terms = s.trim().split(' ');

	// f: force write
	var supportedFlags = ['f'];
	var options = {};

	var key = terms[0];
	var val = terms.slice(1).join(' ');

	if (key[0] === '-') {
		// LIMITATIONS...
		// this implementation precludes options from being anything other than
		// boolean flags (pass flag to enable; default behavior is false)
		// they must also be strung together without the luxury of padding spaces
		key.slice(1).split('')
			.filter(flag => ~supportedFlags.indexOf(flag))
			.forEach(flag => options[flag] = true);;

		var {key, val} = parse(val);
	}

	return {key, val, options};
}

module.exports = parse;
