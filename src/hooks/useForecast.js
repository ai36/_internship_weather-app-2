import { useEffect, useState } from 'react';
import { getForecastData } from '../api';
import { formatDayForecast, formatWeekForecast } from '../utils';
import {
  statisticDayData,
  statisticWeekData,
} from '../components/Slider/mock.js';

export const useForecast = (lat, lon, tz) => {
  const [forecast, setForecast] = useState({
    dayForecast: statisticDayData,
    weekForecast: statisticWeekData,
  });

  useEffect(() => {
    const fetchForecast = async () => {
      const forecast = await getForecastData(lat, lon);
      formatWeekForecast(forecast);
      if (lat && lon) {
        setForecast({
          dayForecast: formatDayForecast(forecast?.slice(0, 8), tz / 3600),
          weekForecast: formatWeekForecast(forecast),
        });
      }
    };

    fetchForecast();
  }, [lat, lon, tz]);

  return forecast;
};
