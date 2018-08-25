'use strict';

var _ = require('.');

test('replaces balcklisted words with asterisks', function () {
	expect((0, _.blacklistedWords)('The name of the NX will be nintendo Switch', ['Switch'], '***')).toBe('The name of the NX will be nintendo ***');
});

test('replaces multible balcklisted words with asterisks', function () {
	expect((0, _.blacklistedWords)('It will be a Switch, the name switch will be awesome', ['Switch'], '***')).toBe('It will be a ***, the name *** will be awesome');
});