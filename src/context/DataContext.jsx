import { createContext, useState } from 'react';

export const DataCityContext = createContext();

export const DataContext = ({ children }) => {
  const [data, setData] = useState(null);
  const [cityName, setСityName] = useState(null);

  return (
    <DataCityContext.Provider
      value={{
        data,
        cityName,
        setСityName,
        setData,
      }}
    >
      {children}
    </DataCityContext.Provider>
  );
};
