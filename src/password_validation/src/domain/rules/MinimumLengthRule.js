import { Rule } from './Rule.js';

export class MinimumLengthRule extends Rule {
  constructor(minimumLength) {
    super();
    this.minimumLength = minimumLength;
  }

  isSatisfiedBy(password) {
    return password.length > this.minimumLength;
  }

  error() {
    return `Must have more than ${this.minimumLength} characters`;
  }
}
