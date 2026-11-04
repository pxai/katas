import { ValidationStrategy } from './ValidationStrategy.js';
import { ValidationResult } from '../ValidationResult.js';

export class AllRulesMustPass extends ValidationStrategy {
  validate(rules, password) {
    return ValidationResult.invalidBecauseOf(
      this.errorsOf(this.brokenRules(rules, password))
    );
  }
}
