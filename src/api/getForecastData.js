export const getForecastData = async (lat, lon) => {
  try {
    if (!lat || !lon) return [];
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&lang=ru`
    );
    const data = await res.json();
    return data?.list;
  } catch (error) {
    throw new Error(error);
  }
};
