import { createContext, useEffect, useState } from 'react';
import { useCityCoords } from './useCityCoords';
import { useCityForecast } from '@contexts/WeatherContext/useCityForecast';
import { useRecent } from '@contexts/WeatherContext/useRecent';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('Москва');
  const [cityData, setCityData] = useState(null);
  const {
    cityFound,
    loading: coordsLoading,
    clearCityFound,
  } = useCityCoords(city);
  const { data: forecast } = useCityForecast(cityData);
  const { recent, addToRecent, clearRecent } = useRecent();

  useEffect(() => {
    if (cityFound?.lat && cityFound?.lon && cityFound?.name !== 'Not found') {
      setCityData({
        lat: cityFound.lat,
        lon: cityFound.lon,
        name: cityFound.name,
      });
    }
  }, [cityFound]);

  return (
    <WeatherContext.Provider
      value={{
        cityFound,
        clearCityFound,
        coordsLoading,
        recent,
        addToRecent,
        clearRecent,
        setCity,
        setCityData,
        forecast,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
