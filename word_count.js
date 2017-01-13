/*
  This example shows a functional programming approach
  to counting the total number of unique words in a string.

  The result will be a collection of words with their respective counts. e.g.

  [
    {
      foo: 5
    },
    {
      bar: 2
    },
    {
      test: 1
    }
  ]

  NOTE: this solution is not comprehensive but does demonstrate functionl programming
 */

var lower = (str) => str.toLowerCase();

var split = (str, del = ' ') => str.split(del);

var remove = (str, chars) => chars.reduce((prev, curr) => prev.replace(curr, ''), str);

var wordCount = (arr) =>
  arr.reduce((prev, curr) => {
    if (typeof prev[curr] !== 'undefined') {
      prev[curr] += 1;
    } else {
      prev[curr] = 1;
    }
    return prev;
  }, {});

var createWordCountMap = (str) => {
  var stripChars = ['?', '!'];
  return wordCount(split(remove(lower(str), stripChars)));
}

var string = 'how many tests are in this test! string test?';

console.log(createWordCountMap(string));
