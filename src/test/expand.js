var mocha = require('mocha');
var should = require('should');

var expand = require('../lib/expand');

describe('#expand()', function() {

	var dictionary;

	beforeEach(function() {
		dictionary = {
			'a': 'foo',
			'b': 'bar'
		};
	});

	describe('should return input string with embedded references expanded based on the provided dictionary', function() {

		it('should expand references with no pre or post text', function() {
			let input = '$a';
			let expected = 'foo';
			expand(input, dictionary).should.equal(expected);
		});

		it('should expand multiple references with pre and post text', function() {
			let input = `xxx $a xxx $b xxx`;
			let expected = `xxx foo xxx bar xxx`;
			expand(input, dictionary).should.equal(expected);
		});

	});

});
