// jest.setup.js
import '@testing-library/jest-dom';

// Mocking next/link
jest.mock('next/link', () => {
    return ({ children }) => {
      return children;
    };
  });
  
  // Mocking next/image
  jest.mock('next/image', () => {
    return ({ src, alt, width, height, style }) => {
      return <img src={src} alt={alt} style={style} width={width} height={height} />;
    };
  });
  