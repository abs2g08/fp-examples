/*
  This example shows a functional programming approach
  to counting the total number of unique words in a string.

  The result will be a collection of words with their respective counts. e.g.

  'how many tests are, in this test! string test?' -->

  { how: 1, many: 1, tests: 1, are: 1, in: 1, this: 1, test: 2, string: 1}

  NOTE: this solution is by no means comprehensive but does demonstrate
        key functionl programming techniques

 */

"use strict"

export const lower = (str) => str.toLowerCase();

export const splitWords = (str, del) => str.split(typeof del !== 'undefined' ? del : ' ');

export const remove = (str, chars) => chars.reduce((prev, curr) => prev.replace(curr, ''), str);

export const uniqueWordCount = (arr) =>
  arr.reduce((prev, curr) => {
    if (typeof prev[curr] !== 'undefined') {
      prev[curr] += 1;
    } else {
      prev[curr] = 1;
    }
    return prev;
  }, {});

export const createWordCountMap = (str) => {
  const stripChars = ['?', '!', ',']; // for example
  return uniqueWordCount(splitWords(remove(lower(str), stripChars)));
}
