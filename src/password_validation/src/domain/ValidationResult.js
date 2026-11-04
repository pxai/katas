export class ValidationResult {
  constructor(errors) {
    this.errors = errors;
  }

  static valid() {
    return new ValidationResult([]);
  }

  static invalidBecauseOf(errors) {
    return new ValidationResult(errors);
  }

  isValid() {
    return this.errors.length === 0;
  }
}
