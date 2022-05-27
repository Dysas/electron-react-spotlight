import { useEffect, useState } from 'react';

export default (value: unknown, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const debounce = <Params extends unknown[]>(
  fn: (...args: Params) => any,
  wait: number
) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Params) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
};
