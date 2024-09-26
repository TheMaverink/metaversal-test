import { render, screen, fireEvent } from '@testing-library/react';
import PostCard from './index';

describe('PostCard Component', () => {
  const mockProps = {
    firstName: 'Julio',
    lastName: 'Mauro',
    username: 'juliomauro',
    body: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    tags: ['sample', 'post'],
    likes: 10,
    dislikes: 2,
    views: 100,
    userId: '12345',
    redirectToUser: true,
  };

  test('renders user information correctly', () => {
    render(<PostCard {...mockProps} />);

    const nameElement = screen.getByText(/Julio Mauro/i);
    const usernameElement = screen.getByText(/@juliomauro/i);

    expect(nameElement).toBeInTheDocument();
    expect(usernameElement).toBeInTheDocument();
  });

  test('renders tags correctly', () => {
    render(<PostCard {...mockProps} />);

    mockProps.tags.forEach((tag) => {
      const tagElement = screen.getByText(`#${tag}`);
      expect(tagElement).toBeInTheDocument();
    });
  });
});
