import { useState } from 'react';
import { PasswordValidatorFactory } from '../domain/PasswordValidatorFactory.js';

const LABELS = {
  validation1: 'Validation 1 (>8, capital, lowercase, number, underscore)',
  validation2: 'Validation 2 (>6, capital, lowercase, number)',
  validation3: 'Validation 3 (>16, capital, lowercase, underscore)',
  validation4: 'Validation 4 (>8, capital, number, underscore - one may fail)'
};

const VALIDATIONS = PasswordValidatorFactory.all();

export function PasswordValidationForm() {
  const [password, setPassword] = useState('');
  const [validationName, setValidationName] = useState(VALIDATIONS[0].name);

  const selected = VALIDATIONS.find((validation) => validation.name === validationName);
  const result = selected.validator.validate(password);

  return (
    <div>
      <h1>Password validation</h1>

      <label htmlFor="validation">Validation</label>
      <select
        id="validation"
        value={validationName}
        onChange={(event) => setValidationName(event.target.value)}
      >
        {VALIDATIONS.map((validation) => (
          <option key={validation.name} value={validation.name}>
            {LABELS[validation.name]}
          </option>
        ))}
      </select>

      <br />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <p data-testid="verdict">{result.isValid() ? 'Valid password' : 'Invalid password'}</p>

      <ul data-testid="errors">
        {result.errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
  );
}
