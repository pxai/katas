import { describe, it, expect } from 'vitest';
import { PasswordValidatorBuilder } from './PasswordValidatorBuilder.js';

describe('PasswordValidatorBuilder', () => {
  it('builds a validator with only the rules it was given', () => {
    const validator = new PasswordValidatorBuilder().withMoreThan(3).build();

    expect(validator.isValid('abcd')).toBe(true);
    expect(validator.isValid('abc')).toBe(false);
  });

  it('builds a validator without rules that accepts anything', () => {
    expect(new PasswordValidatorBuilder().build().isValid('')).toBe(true);
  });

  it('builds a validator that allows one failure', () => {
    const validator = new PasswordValidatorBuilder()
      .withMoreThan(3)
      .withNumber()
      .allowingOneFailure()
      .build();

    expect(validator.isValid('abcd')).toBe(true);
    expect(validator.isValid('ab')).toBe(false);
  });
});
