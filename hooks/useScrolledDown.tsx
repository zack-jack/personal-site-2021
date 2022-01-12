import { useEffect, useState } from 'react';
import { throttle } from 'utils/throttle';
import { isBrowser } from 'utils/browser';

const useScrolledDown = (): boolean => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const handleScroll = throttle(() => {
    const top = !isBrowser
      ? 0
      : window.pageYOffset || document.documentElement.scrollTop;

    // Prevent duplicate setter calls if already scrolled down and not at the top
    if (top !== 0 && isScrolledDown) return;

    setIsScrolledDown(top !== 0);
  }, 150);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return isScrolledDown;
};

export default useScrolledDown;
