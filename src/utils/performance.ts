// Debounce utility to limit function calls
export const debounce = <Args extends unknown[], ReturnValue>(
  func: (...args: Args) => ReturnValue,
  wait: number
) => {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as (...args: Args) => void;
};

// Throttle utility to ensure function calls happen at most once per interval
export const throttle = <Args extends unknown[], ReturnValue>(
  func: (...args: Args) => ReturnValue,
  limit: number
) => {
  let inThrottle = false;
  return ((...args: Args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }) as (...args: Args) => void;
};

// Memoize utility to cache function results
export const memoize = <Args extends unknown[], ReturnValue>(
  func: (...args: Args) => ReturnValue
) => {
  const cache = new Map<string, ReturnValue>();
  return ((...args: Args): ReturnValue => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    const result = func(...args);
    cache.set(key, result);
    return result;
  }) as (...args: Args) => ReturnValue;
};
