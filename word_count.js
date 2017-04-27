/*
  This example shows a functional programming approach
  to counting the total number of unique words in a string.

  The result will be a collection of words with their respective counts. e.g.

  'how many tests are, in this test! string test?' will evaluate to:

  { how: 1, many: 1, tests: 1, are: 1, in: 1, this: 1, test: 2, string: 1}

  NOTE: this solution is not comprehensive but does demonstrate
        key functionl programming techniques

 */

"use strict"

const lower = (str) => str.toLowerCase();

const splitWords = (str, del) => str.split(typeof del !== 'undefined' ? del : ' ');

const remove = (str, chars) => chars.reduce((prev, curr) => prev.replace(curr, ''), str);

const uniqueWordCount = (arr) =>
  arr.reduce((prev, curr) => {
    if (typeof prev[curr] !== 'undefined') {
      prev[curr] += 1;
    } else {
      prev[curr] = 1;
    }
    return prev;
  }, {});

const createWordCountMap = (str) => {
  const stripChars = ['?', '!', ',']; // for example
  return uniqueWordCount(splitWords(remove(lower(str), stripChars)));
}

const string = 'how many tests are, in this test! string test?';

console.log(createWordCountMap(string));
