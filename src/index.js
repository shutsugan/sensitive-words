
/**
 * blacklistedWords function
 * @param {string} content the sentence that contains the words to be hidden
 * @param {array[string]} words blacklisted words
 * @param {string} hider the chars that will replace the blacklisted words
 * @returns {string} the blacklisted sentence
 */
export const blacklistedWords = (content, words, hider) => (
	content.replace(
		new RegExp(words.join('|'), 'ig'),
		hider
	)
);