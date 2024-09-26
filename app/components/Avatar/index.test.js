import { render, screen, fireEvent } from '@testing-library/react';
import Avatar from './index';

describe('Avatar Component', () => {
  const userId = '1';

  test('renders correctly with default props', () => {
    render(<Avatar userId={userId} />);

    const avatarImage = screen.getByAltText('avatar');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', '/images/avatar/avatar-md.png');
    expect(avatarImage).toHaveAttribute('width', '50');
    expect(avatarImage).toHaveAttribute('height', '50');
  });

  test('renders with custom props', () => {
    render(
      <Avatar
        userId={userId}
        src="/custom/path.png"
        alt="Custom Avatar"
        size={100}
      />
    );

    const avatarImage = screen.getByAltText('Custom Avatar');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', '/custom/path.png');

    const avatarContainer = avatarImage.closest('div');
    expect(avatarContainer).toHaveStyle('width: 100px');
    expect(avatarContainer).toHaveStyle('height: 100px');
  });

  test('applies hover effect', () => {
    render(<Avatar userId={userId} />);

    const avatarImage = screen.getByAltText('avatar');

    expect(avatarImage).toHaveStyle('opacity: 1');

    fireEvent.mouseEnter(avatarImage);
    expect(avatarImage).toHaveStyle('opacity: 0.5');

    fireEvent.mouseLeave(avatarImage);
    expect(avatarImage).toHaveStyle('opacity: 1');
  });

  test('renders as a non-clickable avatar', () => {
    render(<Avatar userId={userId} clickable={false} />);

    const avatarImage = screen.getByAltText('avatar');
    expect(avatarImage).toBeInTheDocument();
  });
});
