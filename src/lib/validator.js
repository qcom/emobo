const MAX_LENGTH = 20;

exports.validChar = (c) => /^[a-zA-z]+$/.test(c);
exports.validLength = (s) => s.length <= MAX_LENGTH;
