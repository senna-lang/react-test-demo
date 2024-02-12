import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', () => {
  test('renders correctly', () => {
    render(<Contact />);
    const nameElement = screen.getByRole('textbox',{
      name:'お名前'
    });
    expect(nameElement).toBeInTheDocument();
    const questionsElement = screen.getByRole('options');
    expect(questionsElement).toBeInTheDocument();
  });
});
