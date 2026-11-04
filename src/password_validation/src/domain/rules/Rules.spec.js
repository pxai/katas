import { describe, it, expect } from 'vitest';
import { MinimumLengthRule } from './MinimumLengthRule.js';
import { ContainsCapitalLetterRule } from './ContainsCapitalLetterRule.js';
import { ContainsLowercaseLetterRule } from './ContainsLowercaseLetterRule.js';
import { ContainsNumberRule } from './ContainsNumberRule.js';
import { ContainsUnderscoreRule } from './ContainsUnderscoreRule.js';

describe('MinimumLengthRule', () => {
  it('is satisfied when the password is longer than the minimum', () => {
    expect(new MinimumLengthRule(8).isSatisfiedBy('123456789')).toBe(true);
  });

  it('is not satisfied when the password has exactly the minimum length', () => {
    expect(new MinimumLengthRule(8).isSatisfiedBy('12345678')).toBe(false);
  });

  it('describes its own error', () => {
    expect(new MinimumLengthRule(8).error()).toBe('Must have more than 8 characters');
  });
});

describe('ContainsCapitalLetterRule', () => {
  it('is satisfied when there is a capital letter', () => {
    expect(new ContainsCapitalLetterRule().isSatisfiedBy('aBc')).toBe(true);
  });

  it('is not satisfied without a capital letter', () => {
    expect(new ContainsCapitalLetterRule().isSatisfiedBy('abc')).toBe(false);
  });
});

describe('ContainsLowercaseLetterRule', () => {
  it('is satisfied when there is a lowercase letter', () => {
    expect(new ContainsLowercaseLetterRule().isSatisfiedBy('ABc')).toBe(true);
  });

  it('is not satisfied without a lowercase letter', () => {
    expect(new ContainsLowercaseLetterRule().isSatisfiedBy('ABC')).toBe(false);
  });
});

describe('ContainsNumberRule', () => {
  it('is satisfied when there is a number', () => {
    expect(new ContainsNumberRule().isSatisfiedBy('abc1')).toBe(true);
  });

  it('is not satisfied without a number', () => {
    expect(new ContainsNumberRule().isSatisfiedBy('abc')).toBe(false);
  });
});

describe('ContainsUnderscoreRule', () => {
  it('is satisfied when there is an underscore', () => {
    expect(new ContainsUnderscoreRule().isSatisfiedBy('abc_')).toBe(true);
  });

  it('is not satisfied without an underscore', () => {
    expect(new ContainsUnderscoreRule().isSatisfiedBy('abc')).toBe(false);
  });
});
