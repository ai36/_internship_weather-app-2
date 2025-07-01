import { useEffect, useRef, useState } from 'react';
import { api } from '@services/api';
import { CityNotFoundError } from '@/errors';

export const useCityCoords = (city) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cityFound, setCityFound] = useState({
    lat: null,
    lon: null,
    name: '',
  });
  const lastAbortController = useRef();

  const clearCityFound = () => {
    setCityFound({
      lat: null,
      lon: null,
      name: '',
    });
  };

  useEffect(() => {
    const fetchCoords = async (city, signal) => {
      console.log(`Ищем координаты города ${city}`);
      setLoading(true);

      try {
        const { lat, lon, name } = await api.getCityCoordinates(city, signal);
        setCityFound({ lat, lon, name });
        console.log(`Координаты получены: широта ${lat}, долгота ${lon}`);
      } catch (err) {
        setError(err);
        if (err instanceof CityNotFoundError) {
          setCityFound({ ...cityFound, name: 'Not found' });
        }
        console.warn(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      if (lastAbortController.current) {
        lastAbortController.current.abort();
      }

      const currentAbortController = new AbortController();
      lastAbortController.current = currentAbortController;

      setLoading(false);
      setError(null);
      setCityFound({ lat: null, lon: null, name: '' });

      fetchCoords(city, currentAbortController.signal);
    }

    return () => {
      if (lastAbortController.current) {
        lastAbortController.current.abort();
      }
    };
  }, [city]);

  return { error, loading, cityFound, clearCityFound };
};
