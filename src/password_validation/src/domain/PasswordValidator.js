import { AllRulesMustPass } from './strategies/AllRulesMustPass.js';

export class PasswordValidator {
  constructor(rules, strategy = new AllRulesMustPass()) {
    this.rules = rules;
    this.strategy = strategy;
  }

  isValid(password) {
    return this.validate(password).isValid();
  }

  validate(password) {
    return this.strategy.validate(this.rules, password);
  }
}
