/* core dependencies */
var fs = require('fs');

/* user land dependencies */
var express = require('express');
var bodyParser = require('body-parser');
var Slack = require('slack-api');
var config = require('config');

/* internal dependencies */
var lib = require('./lib');
var Store = lib.Store;

var middleware = require('./middleware');

/* globals */
var app = express();

/* middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// register a combination in the data store
app.route('/combo')
	.post(middleware.auth('combo'))
	.post(function handleCombo(req, res, next) {
		var {key, val, options} = lib.parse(req.body.text);
		Store.get(key).then(function(definition) {
			// options.f = force write
			if (definition && !options.f) {
				return res.end(`
					nice try, trickster;
					${key} is already defined: ${definition}
				`);
			}
			Store.set(key, val).then(function() {
				res.end(`
					emobo added:
					${key} = ${val}
				`);
			});
		});
	});

// expand the provided string with the stored dictionary
app.route('/x')
	.post(middleware.auth('x'))
	.post(function handleX(req, res, next) {
		Store.getAll().then(function(emobos) {
			let source = req.body.text;
			let expanded = lib.expand(source, emobos);

			let channel = req.body.channel_id;
			let payload = {
				token: config.get('Slack.token'),
				channel: channel,
				text: expanded
			};

			Slack.chat.postMessage(payload, function(err, data) {
				if (err) return next(err);
				if (!data.ok) {
					return console.log(arguments);
				}
			});
		});
	});

// furnish and return a digest of all stored emobos
app.route('/emobos')
	.post(middleware.auth('emobos'))
	.post(function handleEmobos(req, res, next) {
		Store.getDigest().then(function(digest) {
			res.end(digest);
		});
	});

	});

app.listen(8001);
