const caesar = require('./caesar');

test('Must keep SameCase and punctuation', () => {
  expect(caesar('JLKJL;', 5)).toBe('EGFEG;');
  expect(caesar('abcdefghigklmnopqrstvwxz', 5)).toBe('vwxyzabcdbfghijklmnoqrsu');
  expect(caesar('jobLESS=55,JL;', 5)).toBe('ejwGZNN=55,EG;');
});