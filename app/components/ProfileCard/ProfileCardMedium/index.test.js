import { render, screen } from '@testing-library/react';
import ProfileCardMedium from './index';

describe('ProfileCardMedium Component', () => {
  const mockUser = {
    firstName: 'Jane',
    lastName: 'Doe',
    username: 'janedoe',
    address: { city: 'New York', country: 'USA' },
    posts: [{ id: 1 }, { id: 2 }],
    company: { department: 'Engineering' },
    totalLikes: 25,
  };

  test('renders follow and message buttons', () => {
    render(<ProfileCardMedium user={mockUser} />);

    const followButton = screen.getByRole('button', { name: /Follow/i });
    expect(followButton).toBeInTheDocument();

    const messageButton = screen.getByRole('button', { name: /Message/i });
    expect(messageButton).toBeInTheDocument();
  });
});
