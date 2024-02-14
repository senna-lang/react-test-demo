import Counter from './Counter';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />);

    const countElement = screen.getByRole('heading');
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', {
      name: 'count up',
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test('renders a count of 0', () => {
    render(<Counter />);

    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });

  test('renders a count after clicking the count up button', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole('button', {
      name: 'count up',
    });
    await user.click(incrementButton);

    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('1');
  });

  test('renders a count 10 after clicking the set button', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const amountInput = screen.getByRole('spinbutton');
    await user.type(amountInput, '5');
    expect(amountInput).toHaveValue(5);

    const setButton = screen.getByRole('button', {
      name: 'Set',
    });
    await user.click(setButton);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('5');
  });
});
