import { describe, it, expect } from 'vitest';
import { PasswordValidatorFactory } from './PasswordValidatorFactory.js';

describe('Iteration 1 - validation 1', () => {
  const validator = PasswordValidatorFactory.validation1();

  it('accepts a password meeting every requirement', () => {
    expect(validator.isValid('Abcdefg1_')).toBe(true);
  });

  it('rejects a short password', () => {
    expect(validator.isValid('Abcde1_')).toBe(false);
  });

  it('rejects a password without a capital letter', () => {
    expect(validator.isValid('abcdefg1_')).toBe(false);
  });

  it('rejects a password without a lowercase letter', () => {
    expect(validator.isValid('ABCDEFG1_')).toBe(false);
  });

  it('rejects a password without a number', () => {
    expect(validator.isValid('Abcdefgh_')).toBe(false);
  });

  it('rejects a password without an underscore', () => {
    expect(validator.isValid('Abcdefg12')).toBe(false);
  });

  it('rejects an empty password', () => {
    expect(validator.isValid('')).toBe(false);
  });
});

describe('Iteration 2 - validation 2', () => {
  const validator = PasswordValidatorFactory.validation2();

  it('accepts a password with more than 6 characters, capital, lowercase and number', () => {
    expect(validator.isValid('Abcdef1')).toBe(true);
  });

  it('does not require an underscore', () => {
    expect(validator.isValid('Abcdefg1')).toBe(true);
  });

  it('rejects a password with 6 characters', () => {
    expect(validator.isValid('Abcde1')).toBe(false);
  });
});

describe('Iteration 2 - validation 3', () => {
  const validator = PasswordValidatorFactory.validation3();

  it('accepts a password with more than 16 characters, capital, lowercase and underscore', () => {
    expect(validator.isValid('Abcdefghijklmnop_')).toBe(true);
  });

  it('rejects a password with 16 characters', () => {
    expect(validator.isValid('Abcdefghijklmn_o')).toBe(false);
  });

  it('does not require a number', () => {
    expect(validator.isValid('Abcdefghijklmnopq_')).toBe(true);
  });
});

describe('Iteration 3 - list of errors', () => {
  const validator = PasswordValidatorFactory.validation1();

  it('returns no errors for a valid password', () => {
    expect(validator.validate('Abcdefg1_').errors).toEqual([]);
  });

  it('returns one error per broken rule', () => {
    expect(validator.validate('abcdefghi').errors).toEqual([
      'Must contain a capital letter',
      'Must contain a number',
      'Must contain an underscore'
    ]);
  });

  it('returns every error for an empty password', () => {
    expect(validator.validate('').errors).toEqual([
      'Must have more than 8 characters',
      'Must contain a capital letter',
      'Must contain a lowercase letter',
      'Must contain a number',
      'Must contain an underscore'
    ]);
  });
});

describe('Iteration 4 - validation 4 allows one failure', () => {
  const validator = PasswordValidatorFactory.validation4();

  it('accepts a password meeting every rule', () => {
    expect(validator.isValid('Abcdefg1_')).toBe(true);
  });

  it('accepts a password breaking only one rule', () => {
    expect(validator.isValid('Abcdefg12')).toBe(true);
  });

  it('rejects a password breaking two rules', () => {
    expect(validator.isValid('abcdefghi')).toBe(false);
  });

  it('reports the broken rules when it fails', () => {
    expect(validator.validate('abcdefghi').errors).toEqual([
      'Must contain a capital letter',
      'Must contain a number',
      'Must contain an underscore'
    ]);
  });
});

describe('PasswordValidatorFactory.create', () => {
  it('creates a validator by name', () => {
    expect(PasswordValidatorFactory.create('validation2').isValid('Abcdef1')).toBe(true);
  });
});

describe('PasswordValidatorFactory.all', () => {
  it('builds every validation of the kata in order', () => {
    expect(PasswordValidatorFactory.all().map((validation) => validation.name)).toEqual([
      'validation1',
      'validation2',
      'validation3',
      'validation4'
    ]);
  });

  it('builds usable validators', () => {
    const validators = PasswordValidatorFactory.all();

    expect(validators[0].validator.isValid('Abcdefg1_')).toBe(true);
    expect(validators[1].validator.isValid('Abcdef1')).toBe(true);
    expect(validators[3].validator.isValid('Abcdefg12')).toBe(true);
  });
});
