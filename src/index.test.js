import {blacklistedWords} from '.';

test('replaces balcklisted words with asterisks', () => {
	expect(blacklistedWords(
		'The name of the NX will be nintendo Switch', 
		['Switch'], 
		'***'
	)).toBe('The name of the NX will be nintendo ***');
});

test('replaces multible balcklisted words with asterisks', () => {
	expect(blacklistedWords(
		'It will be a Switch, the name switch will be awesome', 
		['Switch'],
		'***'
	)).toBe('It will be a ***, the name *** will be awesome')
});