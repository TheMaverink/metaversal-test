import { render, screen } from '@testing-library/react';
import TitleBar from './index';
import { usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('TitleBar Component', () => {
  test('renders back button and title when on profile page', () => {
    usePathname.mockReturnValue('/profile/123'); 
    render(<TitleBar />);

    // Check for back button
    const backButton = screen.getByAltText(/back-button/i);
    expect(backButton).toBeInTheDocument();

    // Check for profile title
    const titleElement = screen.getByText(/Profile/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders title without back button when not on profile page', () => {
    usePathname.mockReturnValue('/feed'); 
    render(<TitleBar />);

    // Check that back button is not present
    const backButton = screen.queryByAltText(/back-button/i);
    expect(backButton).not.toBeInTheDocument();

    // Check for feed title
    const titleElement = screen.getByText(/Feed/i);
    expect(titleElement).toBeInTheDocument();
  });
});
