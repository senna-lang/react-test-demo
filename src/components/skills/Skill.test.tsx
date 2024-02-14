import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'Javascript'];

  test('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    const listElements = screen.getAllByRole('listitem');
    expect(listElements).toHaveLength(skills.length);
  });

  test('renders Login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', {
      name: 'ログイン',
    });
    expect(loginButton).toBeInTheDocument();
  });

  test('logout button is not rendered', () => {
    render(<Skills skills={skills} />);
    const logoutButton = screen.queryByRole('button', {
      name: 'ログアウト',
    });
    expect(logoutButton).not.toBeInTheDocument();
  });

  test('logout button is eventually rendered', async() => {
    render(<Skills skills={skills} />);
    const logoutButton =await screen.findByRole('button', {
      name: 'ログアウト',
    },);
    expect(logoutButton).toBeInTheDocument();
  });
});
