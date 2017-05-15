import reverseWords, { splitWords, reverse, joinWords } from '../src/reverseWords'
import { expect } from 'chai'

describe('reverseWords', () => {
  it('should split string into array based on delimiter', () => {
    const str = 'what is this backwards?';
    const res = splitWords(str, ' ');
    expect(res).to.deep.equal(['what', 'is', 'this', 'backwards?']);
  });

  it('should reverse an array', () => {
    const str = 'what';
    const res = reverse(str.split('')).join('');
    expect(res).to.equal('tahw');
  });

  it('should turn an array of strings to one string', () => {
    const arr = ['what', 'is'];
    const res = joinWords(arr);
    expect(res).to.equal('what is');
  });

  it('should reverse "what is this backwards?"', () => {
    const str = 'what is this backwards?';
    const res = reverseWords(str);
    expect(res).to.equal('backwards? this is what');
  });
});
