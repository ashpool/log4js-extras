/*jshint undef:false */
var chai = require('chai'),
	expect = chai.expect;

describe('logger', function () {
	describe('#getFilename', function () {
		it('returns 2 last path fragments of the filename', function () {
			var logger = require('../lib/logger')({});
			expect(logger.getFilename(__filename)).to.equal('test/logger.js');
		});
	});
});