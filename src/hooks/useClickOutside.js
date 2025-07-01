import { useEffect } from 'react';

export const useClickOutside = (ref, callback = () => {}, isActive = true) => {
  useEffect(() => {
    if (!ref?.current || !isActive) {
      return;
    }

    const handleClickOutside = (evt) => {
      if (!ref.current.contains(evt.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, callback, isActive]);
};
