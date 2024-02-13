import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', () => {
  test('renders correctly', () => {
    render(<Contact />);
    const nameElement = screen.getByRole('textbox', {
      name: 'お名前',
    });
    expect(nameElement).toBeInTheDocument();

    const questionsElement = screen.getByRole('checkbox');
    expect(questionsElement).toBeInTheDocument();

    const nameLabelElement = screen.getByLabelText('お名前');
    expect(nameLabelElement).toBeInTheDocument();

    const namePlaceholderElement = screen.getByPlaceholderText('フルネーム');
    expect(namePlaceholderElement).toBeInTheDocument();

    const paragraphText = screen.getByText('すべての項目が必須項目です。');
    expect(paragraphText).toBeInTheDocument();

    const valueElement = screen.getByDisplayValue('sena');
    expect(valueElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('sample alt');
    expect(imageElement).toBeInTheDocument();
    
    const titleElement = screen.getByTitle('close');
    expect(titleElement).toBeInTheDocument();

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();

  });
});
