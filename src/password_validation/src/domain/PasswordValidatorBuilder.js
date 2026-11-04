import { PasswordValidator } from './PasswordValidator.js';
import { MinimumLengthRule } from './rules/MinimumLengthRule.js';
import { ContainsCapitalLetterRule } from './rules/ContainsCapitalLetterRule.js';
import { ContainsLowercaseLetterRule } from './rules/ContainsLowercaseLetterRule.js';
import { ContainsNumberRule } from './rules/ContainsNumberRule.js';
import { ContainsUnderscoreRule } from './rules/ContainsUnderscoreRule.js';
import { AllRulesMustPass } from './strategies/AllRulesMustPass.js';
import { OneRuleMayFail } from './strategies/OneRuleMayFail.js';

export class PasswordValidatorBuilder {
  constructor() {
    this.rules = [];
    this.strategy = new AllRulesMustPass();
  }

  withMoreThan(characters) {
    return this.withRule(new MinimumLengthRule(characters));
  }

  withCapitalLetter() {
    return this.withRule(new ContainsCapitalLetterRule());
  }

  withLowercaseLetter() {
    return this.withRule(new ContainsLowercaseLetterRule());
  }

  withNumber() {
    return this.withRule(new ContainsNumberRule());
  }

  withUnderscore() {
    return this.withRule(new ContainsUnderscoreRule());
  }

  allowingOneFailure() {
    this.strategy = new OneRuleMayFail();
    return this;
  }

  withRule(rule) {
    this.rules.push(rule);
    return this;
  }

  build() {
    return new PasswordValidator(this.rules, this.strategy);
  }
}
