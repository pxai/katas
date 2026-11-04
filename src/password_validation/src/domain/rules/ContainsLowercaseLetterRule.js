import { Rule } from './Rule.js';

export class ContainsLowercaseLetterRule extends Rule {
  isSatisfiedBy(password) {
    return /[a-z]/.test(password);
  }

  error() {
    return 'Must contain a lowercase letter';
  }
}
