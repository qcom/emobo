var config = require('config');

function auth(method) {
	return function(req, res, next) {
		if (config.get('Slack')[method] === req.body.token)
			return next();
		res.statusCode = 401;
		res.end("bad token");
	};
}

module.exports = auth;
