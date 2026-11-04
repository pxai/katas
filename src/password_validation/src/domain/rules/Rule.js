// Base class for every password rule.
// A rule knows how to check itself and how to describe its own failure.
export class Rule {
  isSatisfiedBy(password) {
    throw new Error('A Rule must implement isSatisfiedBy(password)');
  }

  error() {
    throw new Error('A Rule must implement error()');
  }
}
