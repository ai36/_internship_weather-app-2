import { createContext, useState } from 'react';

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cityData, setCityData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        value,
        setValue,
        isLoading,
        setIsLoading,
        weatherData,
        setWeatherData,
        cityData,
        setCityData,
        searchOpen,
        setSearchOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};
