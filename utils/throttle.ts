/**
 * Throttle function calls
 */
export const throttle = (
  func: () => unknown,
  wait: number = 250
): (() => void) => {
  let waiting = false;

  return () => {
    if (waiting) return;

    waiting = true;

    setTimeout(() => {
      func.apply(this);
      waiting = false;
    }, wait);
  };
};
