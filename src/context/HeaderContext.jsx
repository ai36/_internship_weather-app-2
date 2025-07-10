import { createContext, useEffect, useState } from 'react';
import { Storage } from '../utils';

export const HeadContext = createContext();

export const HeaderContext = ({ children }) => {
  const [localData, setLocalData] = useState([]);
  const [dropDownContent, setDropDownContent] = useState(null);

  useEffect(() => {
    setLocalData(Storage.get('cities'));
  }, []);

  return (
    <HeadContext.Provider
      value={{
        localData,
        setLocalData,
        dropDownContent,
        setDropDownContent,
      }}
    >
      {children}
    </HeadContext.Provider>
  );
};
