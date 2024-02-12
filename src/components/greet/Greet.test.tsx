import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet', () => {
  test('render is completed', () => {
    render(<Greet />);
    const greetElement = screen.getByText(/hello/i);
    expect(greetElement).toBeInTheDocument();
  });
  test('render greet with name', () => {
    render(<Greet name="Sena" />);
    const greetElement = screen.getByText('Hello Sena');
    expect(greetElement).toBeInTheDocument();
  });
});
