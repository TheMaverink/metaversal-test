import { useState, useEffect, useRef } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

// export const useIntersectionObserver = (options) => {
//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const observerRef = useRef(null);

//   useEffect(() => {
//     if (observerRef.current) {
//       const observer = new IntersectionObserver(([entry]) => {
//         setIsIntersecting(entry.isIntersecting);
//       }, options);

//       observer.observe(observerRef.current);

//       return () => {
//         observer.disconnect();
//       };
//     }
//   }, [options]);

//   return [observerRef, isIntersecting];
// };
