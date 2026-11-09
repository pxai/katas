import isPalindrome from './index';

describe('Palindrome Radar', () => {
  it('should exist the function isPalindrome', () => {
    expect(isPalindrome).toBeDefined();
  });

  it('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('should return true for a single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('should return true for a palindrome string', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('should return true for a palindrome string with spaces and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });
});