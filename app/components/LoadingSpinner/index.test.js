import { render, screen } from '@testing-library/react';
import LoadingSpinner from './index';

describe('LoadingSpinner Component', () => {
  test('renders spinner when isLoading is true', () => {
    render(<LoadingSpinner isLoading={true} withLabel={false} />);

    const spinner = screen.getByAltText('loading-spinner');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute('src', '/images/icons/spinner-icon.png');

    const loadingText = screen.queryByText(/loading/i);
    expect(loadingText).not.toBeInTheDocument();
  });

  test('renders loading text when withLabel is true', () => {
    render(<LoadingSpinner isLoading={true} withLabel={true} />);

    const loadingText = screen.getByText(/loading/i);
    expect(loadingText).toBeInTheDocument();
  });

  test('does not render loading text when withLabel is false', () => {
    render(<LoadingSpinner isLoading={true} withLabel={false} />);

    const loadingText = screen.queryByText(/loading/i);
    expect(loadingText).not.toBeInTheDocument();
  });
});
