'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('replaces balcklisted words with asterisks', function () {
	expect((0, _2.default)('The name of the NX will be nintendo Switch', ['Switch'])).toBe('The name of the NX will be nintendo ***');
});

test('replaces multible balcklisted words with asterisks', function () {
	expect((0, _2.default)('It will be a Switch, the name switch will be awesome', ['Switch'])).toBe('It will be a ***, the name *** will be awesome');
});