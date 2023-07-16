import { useRef, useEffect } from 'react';

const useOutSideClick = (callback: () => void) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const el = ref?.current;

      if (!el || el.contains(e.target as Node)) {
        return;
      }

      callback();
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [callback, ref]);

  return ref;
};

export default useOutSideClick;
