/* user land dependencies */
var Promise = require('bluebird');
var redis = require('redis');
Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

/* globals */
const PREFIX = 'emobo';
let escapeKey = (key) => `${PREFIX}:${key}`;
let dictionaryKey = escapeKey('dictionary');
let client = redis.createClient();

/* Store.js */
let Store = module.exports = {};

Store.get = (key) => client.hgetAsync(dictionaryKey, key);
Store.getAll = () => client.hgetallAsync(dictionaryKey);
Store.getDigest = () => {
	return Store.getAll().then((emobos) => {
		return Object.keys(emobos)
			.map((key) => `${key}: ${emobos[key]}`)
			.join('\n');
	});
};

Store.set = (key, val) => client.hsetAsync(dictionaryKey, key, val);
Store.unset = (key) => client.hdelAsync(dictionaryKey, key);
