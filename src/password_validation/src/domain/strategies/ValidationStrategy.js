// A strategy decides how many broken rules a password may have.
export class ValidationStrategy {
  validate(rules, password) {
    throw new Error('A ValidationStrategy must implement validate(rules, password)');
  }

  brokenRules(rules, password) {
    return rules.filter((rule) => !rule.isSatisfiedBy(password));
  }

  errorsOf(brokenRules) {
    return brokenRules.map((rule) => rule.error());
  }
}
