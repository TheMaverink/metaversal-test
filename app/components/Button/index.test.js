import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button Component', () => {
  test('renders with default props', () => {
    render(<Button label="Default Button" />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Default Button');
    expect(button).toHaveStyle('background: linear-gradient(180deg, #FF0073 -114.9%, #811AB8 -51.51%, #4426D9 100%)'); // default gradient
  });

  test('renders with custom style', () => {
    render(<Button label="Custom Style Button" style={{ backgroundColor: 'red' }} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background-color: red');
  });

  test('changes background on hover for gradient type', () => {
    render(<Button label="Hover Button" backgroundType="gradient" />);
    
    const button = screen.getByRole('button');
    
    expect(button).toHaveStyle('background: linear-gradient(180deg, #FF0073 -114.9%, #811AB8 -51.51%, #4426D9 100%)');
    
    fireEvent.mouseEnter(button);
    expect(button).toHaveStyle('background: linear-gradient(180deg, #FF0073 -85.89%, #811AB8 34.45%, #4426D9 100%)');
    
    fireEvent.mouseLeave(button);
    expect(button).toHaveStyle('background: linear-gradient(180deg, #FF0073 -114.9%, #811AB8 -51.51%, #4426D9 100%)');
  });

  test('changes background on hover for flat type', () => {
    render(<Button label="Flat Hover Button" backgroundType="flat" />);
    
    const button = screen.getByRole('button');
    
    expect(button).toHaveStyle('background: transparent');
    
    fireEvent.mouseEnter(button);
    expect(button).toHaveStyle('background: #ECE9FB');
    
    fireEvent.mouseLeave(button);
    expect(button).toHaveStyle('background: transparent');
  });

  test('handles click event', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
