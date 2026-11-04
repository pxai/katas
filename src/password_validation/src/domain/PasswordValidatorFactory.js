import { PasswordValidatorBuilder } from './PasswordValidatorBuilder.js';

export class PasswordValidatorFactory {
  static validation1() {
    return new PasswordValidatorBuilder()
      .withMoreThan(8)
      .withCapitalLetter()
      .withLowercaseLetter()
      .withNumber()
      .withUnderscore()
      .build();
  }

  static validation2() {
    return new PasswordValidatorBuilder()
      .withMoreThan(6)
      .withCapitalLetter()
      .withLowercaseLetter()
      .withNumber()
      .build();
  }

  static validation3() {
    return new PasswordValidatorBuilder()
      .withMoreThan(16)
      .withCapitalLetter()
      .withLowercaseLetter()
      .withUnderscore()
      .build();
  }

  static validation4() {
    return new PasswordValidatorBuilder()
      .withMoreThan(8)
      .withCapitalLetter()
      .withNumber()
      .withUnderscore()
      .allowingOneFailure()
      .build();
  }

  static create(name) {
    return PasswordValidatorFactory[name]();
  }

  // Every validation of the kata, built in one go.
  static all() {
    return ['validation1', 'validation2', 'validation3', 'validation4'].map((name) => ({
      name,
      validator: PasswordValidatorFactory.create(name)
    }));
  }
}
