import styles from './Card.module.css';
import { Icon } from '@components/Icon';
import { ProgressBar } from '@components/ProgressBar';

import { WeatherContext } from '@contexts/WeatherContext';
import { useContext } from 'react';
import {
  getSunTime,
  getPressureDescription,
  getVisibilityDescription,
  getWindDirection,
} from '@utils';

export const Card = ({
  name,
  title,
  value,
  measure = '',
  hasProgress,
  addictional,
}) => {
  const { forecast } = useContext(WeatherContext);

  const sunTime = forecast
    ? getSunTime(forecast.sys.sunrise, forecast.sys.sunset, forecast.timezone, forecast.coord.lat)
    : {
        sunriseTime: '--:--',
        timeSinceSunrise: 'Прошло: --:--',
        sunsetTime: '--:--',
        timeUntilSunset: 'Осталось: --:--',
      };

  let direction;

  switch (title) {
    case 'Влажность':
      value = forecast?.main.humidity ?? "--";
      break;
    case 'Давление':
      value = !isNaN((parseInt(forecast?.main.pressure) * 0.75006).toFixed(0))
        ? (parseInt(forecast?.main.pressure) * 0.75006).toFixed(0)
        : "--";
      addictional = getPressureDescription(value);
      break;
    case 'Видимость':
      value = !isNaN((parseInt(forecast?.visibility) / 1000).toFixed(0))
        ? (parseInt(forecast?.visibility) / 1000).toFixed(0)
        : "--";
      if (value > 10) value = 10;
      addictional = getVisibilityDescription(value);
      break;
    case 'Рассвет':
      value = sunTime.sunriseTime;
      addictional = `${sunTime.timeSinceSunrise}`;
      break;
    case 'Закат':
      value = sunTime.sunsetTime;
      addictional = `${sunTime.timeUntilSunset}`;
      break;
    case 'Сила ветра':
      value = forecast?.wind.speed.toFixed(0) ?? "--";
      addictional = getWindDirection(forecast?.wind.deg) ?? '--';
      direction = forecast?.wind.deg;
  }

  let valueWithMeasure = value;
  if (measure) {
    valueWithMeasure += ` ${measure}`;
    if (measure === 'км') {
      value = value * 10;
    }
  }

  let addictionalElement;
  if (addictional) {
    addictionalElement = (
      <div className={styles.comment}>
        <p className={styles.commentText}>{addictional}</p>
      </div>
    );
  } else {
    addictionalElement = (
      <div className={styles.percent}>
        <p className={styles.commentMin}>0%</p>
        <p className={styles.commentMax}>100%</p>
      </div>
    );
  }

  return (
    <li className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div
        style={
          direction
            ? { '--windIconRotate': `calc(${direction}deg - 45deg)` }
            : undefined
        }
      >
        <Icon name={name} className={styles.img} />
      </div>
      <p className={styles.value}>{valueWithMeasure}</p>
      <div className={styles['weather-details-card__visual-degree']}>
        {hasProgress && <ProgressBar value={+value} type={name} />}
        {addictionalElement}
      </div>
    </li>
  );
};
