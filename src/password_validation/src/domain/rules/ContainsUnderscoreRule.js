import { Rule } from './Rule.js';

export class ContainsUnderscoreRule extends Rule {
  isSatisfiedBy(password) {
    return password.includes('_');
  }

  error() {
    return 'Must contain an underscore';
  }
}
