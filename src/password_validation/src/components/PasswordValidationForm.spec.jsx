import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PasswordValidationForm } from './PasswordValidationForm.jsx';

describe('PasswordValidationForm', () => {
  it('shows the errors of an empty password', () => {
    render(<PasswordValidationForm />);

    expect(screen.getByTestId('verdict')).toHaveTextContent('Invalid password');
    expect(screen.getByText('Must have more than 8 characters')).toBeInTheDocument();
  });

  it('accepts a valid password', async () => {
    render(<PasswordValidationForm />);

    await userEvent.type(screen.getByLabelText('Password'), 'Abcdefg1_');

    expect(screen.getByTestId('verdict')).toHaveTextContent('Valid password');
    expect(screen.getByTestId('errors')).toBeEmptyDOMElement();
  });

  it('lists the reasons why a password is invalid', async () => {
    render(<PasswordValidationForm />);

    await userEvent.type(screen.getByLabelText('Password'), 'abcdefghi');

    expect(screen.getByText('Must contain a capital letter')).toBeInTheDocument();
    expect(screen.getByText('Must contain a number')).toBeInTheDocument();
    expect(screen.getByText('Must contain an underscore')).toBeInTheDocument();
  });

  it('revalidates when another validation is selected', async () => {
    render(<PasswordValidationForm />);

    await userEvent.type(screen.getByLabelText('Password'), 'Abcdefg1');
    expect(screen.getByTestId('verdict')).toHaveTextContent('Invalid password');

    await userEvent.selectOptions(screen.getByLabelText('Validation'), 'validation2');
    expect(screen.getByTestId('verdict')).toHaveTextContent('Valid password');
  });

  it('allows one broken rule with validation 4', async () => {
    render(<PasswordValidationForm />);

    await userEvent.selectOptions(screen.getByLabelText('Validation'), 'validation4');
    await userEvent.type(screen.getByLabelText('Password'), 'Abcdefg12');

    expect(screen.getByTestId('verdict')).toHaveTextContent('Valid password');
  });
});
