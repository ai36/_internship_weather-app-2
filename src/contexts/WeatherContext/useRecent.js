import { useState } from 'react';
import { config } from '@/config';

export const useRecent = () => {
  const [recent, setRecent] = useState(() => {
    return JSON.parse(localStorage.getItem('recent')) || [];
  });

  const addToRecent = (item) => {
    if (!recent.find(({ name }) => name === item.name)) {
      const newRecent = [item, ...recent].slice(0, config.recentSize);
      setRecent(newRecent);
      localStorage.setItem('recent', JSON.stringify(newRecent));
    }
  };

  const clearRecent = () => {
    setRecent([]);
    localStorage.removeItem('recent');
  };

  return { recent, addToRecent, clearRecent };
};
