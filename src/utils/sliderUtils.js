export const formatDayForecast = (data, timezone) => {
  return data?.map(item => {
    const tzDate = new Date(
      item?.dt * 1000 +
        (new Date().getTimezoneOffset() / 60 + timezone) * 60 * 60 * 1000
    );

    return {
      time: tzDate.toLocaleTimeString('ru', { timeStyle: 'short' }),
      icon: item?.weather?.at(0)?.icon,
      temp: Math.round(item?.main?.temp),
    };
  });
};

export const formatWeekForecast = data => {
  const dates = [];
  data?.forEach(item => {
    let time = new Date(item.dt_txt.split(' ').at(0)).toLocaleDateString('ru', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
    });
    time = time.at(0).toUpperCase() + time.slice(1);
    const itemMinTemp = Math.floor(item.main.temp_min);
    const itemMaxTemp = Math.round(item.main.temp_max);
    const icon = item.weather.at(0).icon;
    const day = dates.find(day => day.time === time);

    if (day) {
      if (itemMinTemp < day.minTemp) {
        day.minTemp = itemMinTemp;
      }
      if (itemMaxTemp > day.maxTemp) {
        day.maxTemp = itemMaxTemp;
      }
      if (parseInt(icon) > parseInt(day.icon ?? 0) && !icon.includes('n')) {
        day.icon = icon;
      }
    } else {
      dates.push({
        time,
        minTemp: itemMinTemp,
        maxTemp: itemMaxTemp,
        icon: icon.includes('n') ? null : icon,
      });
    }
  });
  return dates.slice(1);
};
