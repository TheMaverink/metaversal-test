import { render, screen } from '@testing-library/react';
import ErrorCard from './index';

describe('ErrorCard Component', () => {
  test('renders correctly with an error message', () => {
    const errorMessage = 'An unexpected error has occurred.';
    
    render(<ErrorCard errorMessage={errorMessage} />);
    
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(errorMessage);
    
    const bodyText = screen.getByText(/we're sorry but it's for the test/i);
    expect(bodyText).toBeInTheDocument();
    
    const image = screen.getByAltText('error');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/icons/warning-icon.png');
    expect(image).toHaveAttribute('width', '50');
    expect(image).toHaveAttribute('height', '50');
  });

  test('renders default message correctly', () => {
    render(<ErrorCard errorMessage="Some error occurred." />);
    
    const defaultMessage = screen.getByText(/we're sorry but it's for the test/i);
    expect(defaultMessage).toBeInTheDocument();
  });
});
