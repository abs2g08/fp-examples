/*
  This example shows a functional programming approach
  to reversing words in a string.

  The result will be a reversed string e.g.

  'backwards? this is what'

 */

"use strict"

const splitWords = (str, del) => str.split(typeof del !== 'undefined' ? del : ' ');

const reverse = (str) => str.reverse();

const joinWords = (arr, del) => arr.join(typeof del !== 'undefined' ? del : ' ');

const compose = function() {
  const fn = arguments;
  let length = fn.length;

  return function() {
    return (function form(arg) {
      return length ? form(fn[--length].apply(this, arguments)) : arg;
    }).apply(this, arguments);
  };
};

const string = 'what is this backwards?';

const reverseWords = compose(joinWords, reverse, splitWords);

console.log(reverseWords(string));
