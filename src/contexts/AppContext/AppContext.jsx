import { createContext, useEffect, useRef, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchMode, setSearchMode] = useState(false);
  const headerRef = useRef(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    if (!searchMode) {
      scrollRef.current =
        window.innerWidth - document.documentElement.clientWidth;
    }
    document.body.style.marginRight =
      (searchMode ? scrollRef.current : 0) + 'px';
  }, [searchMode]);

  return (
    <AppContext.Provider value={{ searchMode, setSearchMode, headerRef }}>
      {children}
    </AppContext.Provider>
  );
};
