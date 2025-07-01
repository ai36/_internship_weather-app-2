export function getSunTime(sunrise, sunset, timezone, lat) {
  const isNorth = lat > 0;
  const isPolar = sunrise == 0 || sunset == 0;
  const month = new Date().getUTCMonth() + 1;
  let isPolarDay = null;

  if (isPolar) {
    if (isNorth) {
      isPolarDay = month >= 3 && month <= 9 ? true : false;
    } else {
      isPolarDay = month >= 9 || month <= 3 ? true : false;
    }
  }

  if (isPolarDay !== null) {
    const result = isPolarDay ? 'Полярный день' : 'Полярная ночь';
    return {
      sunriseTime: '--:--',
      timeSinceSunrise: result,
      sunsetTime: '--:--',
      timeUntilSunset: result,
    };
  }

  const sunriseLocal = sunrise + timezone;
  const sunsetLocal = sunset + timezone;

  const formatTime = (ts) => {
    const d = new Date(ts * 1_000);
    return (
      d.getUTCHours().toString().padStart(2, '0') +
      ':' +
      d.getUTCMinutes().toString().padStart(2, '0')
    );
  };

  const nowUTC = Math.floor(Date.now() / 1_000);
  const isDay = nowUTC >= sunrise && nowUTC < sunset;

  const deltaStr = (target, future) => {
    const abs = Math.abs(target - nowUTC);
    const h = Math.floor(abs / 3600)
      .toString()
      .padStart(2, '0');
    const m = Math.floor((abs % 3600) / 60)
      .toString()
      .padStart(2, '0');
    return future ? `осталось: ${h}:${m}` : `прошло: ${h}:${m}`;
  };

  const nextSunrise = nowUTC >= sunrise ? sunrise + 86400 : sunrise;
  const nextSunset = nowUTC >= sunset ? sunset + 86400 : sunset;

  return {
    sunriseTime: formatTime(sunriseLocal),
    timeSinceSunrise: isDay
      ? deltaStr(sunrise, false)
      : deltaStr(nextSunrise, true),
    sunsetTime: formatTime(sunsetLocal),
    timeUntilSunset: isDay
      ? deltaStr(sunset, true)
      : deltaStr(nextSunset, false),
  };
}
