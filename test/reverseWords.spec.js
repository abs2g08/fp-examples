import reverseWords, { splitWords, reverse, joinWords } from '../reverseWords'
import { expect } from 'chai'

describe('splitWords should split string into array based on delimiter', function() {
  const str = 'what is this backwards?';
  const res = splitWords(str, ' ');
  expect(res).to.deep.equal(['what', 'is', 'this', 'backwards?']);
});

describe('reverse should reverse an array', function() {
  const str = 'what';
  const res = reverse(str.split('')).join('');
  expect(res).to.equal('tahw');
});

describe('joinWords should turn an array of strings to one string', function() {
  const arr = ['what', 'is'];
  const res = joinWords(arr);
  expect(res).to.equal('what is');
});

describe('reverseWords should reverse "what is this backwards?"', function() {
  const str = 'what is this backwards?';
  const res = reverseWords(str);
  expect(res).to.equal('backwards? this is what');
});
