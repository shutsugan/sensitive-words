'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * blacklistedWords function
 * @param {string} content the sentence that contains the words to be hidden
 * @param {array[string]} words blacklisted words
 * @param {string} hider the chars that will replace the blacklisted words
 * @returns {string} the blacklisted sentence
 */
var blacklistedWords = exports.blacklistedWords = function blacklistedWords(content, words, hider) {
  return content.replace(new RegExp(words.join('|'), 'ig'), hider);
};