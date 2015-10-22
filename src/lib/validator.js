const MAX_KEY_LENGTH = 20;

exports.isValidChar = (c) => /^[a-zA-z]+$/.test(c);
exports.isValidKeyLength = (s) => s.length <= MAX_KEY_LENGTH;
