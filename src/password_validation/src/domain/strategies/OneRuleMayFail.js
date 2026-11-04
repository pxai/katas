import { ValidationStrategy } from './ValidationStrategy.js';
import { ValidationResult } from '../ValidationResult.js';

export class OneRuleMayFail extends ValidationStrategy {
  validate(rules, password) {
    const broken = this.brokenRules(rules, password);

    if (broken.length <= 1) {
      return ValidationResult.valid();
    }

    return ValidationResult.invalidBecauseOf(this.errorsOf(broken));
  }
}
