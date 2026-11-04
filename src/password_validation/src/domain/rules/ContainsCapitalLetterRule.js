import { Rule } from './Rule.js';

export class ContainsCapitalLetterRule extends Rule {
  isSatisfiedBy(password) {
    return /[A-Z]/.test(password);
  }

  error() {
    return 'Must contain a capital letter';
  }
}
