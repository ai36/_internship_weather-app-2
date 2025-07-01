import { useEffect, useRef, useState } from 'react';
import { api } from '@/services';

export const useCityForecast = (params) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const lastAbortController = useRef();

  useEffect(() => {
    const fetchForecast = async (params, signal) => {
      console.log(`Запрошен прогноз погоды для города ${params.name}`);
      setLoading(true);

      try {
        const forecast = await api.getForecast(params, signal);
        const customForecast = { ...forecast, name: params.name };
        console.log('А вот и данные прогноза', customForecast);
        setData(customForecast);
      } catch (err) {
        setError(err);
        console.warn(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (params?.name) {
      if (lastAbortController.current) {
        lastAbortController.current.abort();
      }

      const currentAbortController = new AbortController();
      lastAbortController.current = currentAbortController;
      setLoading(false);
      setError(null);

      fetchForecast(params, currentAbortController.signal);
    }

    return () => {
      if (lastAbortController.current) {
        lastAbortController.current.abort();
      }
    };
  }, [params]);

  return { loading, error, data };
};
