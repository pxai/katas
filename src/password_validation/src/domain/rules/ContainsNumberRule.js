import { Rule } from './Rule.js';

export class ContainsNumberRule extends Rule {
  isSatisfiedBy(password) {
    return /[0-9]/.test(password);
  }

  error() {
    return 'Must contain a number';
  }
}
