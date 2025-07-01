import { useContext } from 'react';
import { WeatherContext } from '@contexts/';
export const useWeatherContext = () => {
  return useContext(WeatherContext);
};
