import { useEffect, useState } from 'react';

const isBrowser = typeof window !== 'undefined';

const useReducedMotion = (): boolean => {
  const [matches, setMatch] = useState(false);

  useEffect(() => {
    if (!isBrowser) {
      return () => {};
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMatch(mediaQuery.matches);
    mediaQuery.addEventListener('change', () => setMatch(mediaQuery.matches));

    return () => {
      mediaQuery.removeEventListener('change', () =>
        setMatch(mediaQuery.matches)
      );
    };
  }, []);

  return matches;
};

export default useReducedMotion;
