import wordCount, { lower, splitWords, remove } from '../src/wordCount'
import { expect } from 'chai'

describe('wordCount', function() {
  it('should transform string to lower case', () => {
    const str = 'TEST';
    const res = lower(str);
    expect(res).to.deep.equal('test');
  });

  it('should split string into array based on delimiter', () => {
    const str = 'what is this backwards?';
    const res = splitWords(str, ' ');
    expect(res).to.deep.equal(['what', 'is', 'this', 'backwards?']);
  });

  it('should remove specific chars from string', () => {
    const str = 'test! me, now this?';
    const res = remove(str, ['!', '?', ',']);
    expect(res).to.equal('test me now this');
  });

  it('should count the total number of unique words in a string', () => {
    const str = 'how many tests are, in this test! string test?';
    const res = wordCount(str);
    expect(res).to.deep.equal({
      how: 1,
      many: 1,
      tests: 1,
      are: 1,
      in: 1,
      this: 1,
      test: 2,
      string: 1
    });
  });
});
