var mocha = require('mocha');
var should = require('should');

var expand = require('../lib/expand');

describe('#expand()', function() {

	it('should return input string with references expanded based on the provided dictionary', function() {

		let input = `xxx $a xxx $b xxx`;
		let dictionary = {
			'a': 'foo',
			'b': 'bar'
		};

		let expected = `xxx foo xxx bar xxx`;

		expand(input, dictionary).should.equal(expected);

	});

});
