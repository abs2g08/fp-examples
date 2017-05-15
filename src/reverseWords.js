/*
  This example shows a functional programming approach
  to reversing words in a string.

  The result will be a reversed string e.g.

  'what is this backwards?' --> 'backwards? this is what'

 */

"use strict"

export const splitWords = (str, del) => str.split(typeof del !== 'undefined' ? del : ' ');

export const reverse = (arr) => arr.reverse();

export const joinWords = (arr, del) => arr.join(typeof del !== 'undefined' ? del : ' ');

const compose = function() {
  const fn = arguments;
  let length = fn.length;

  return function() {
    return (function form(arg) {
      return length ? form(fn[--length].apply(this, arguments)) : arg;
    }).apply(this, arguments);
  };
};

export default compose(joinWords, reverse, splitWords);
