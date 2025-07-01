import IMAGE_NAMES from '@constants/IMAGE_NAMES';
import styles from './CityCard.module.css';
import { Icon } from '@components/Icon';
import { WeatherContext } from '@contexts/WeatherContext';
import { useContext } from 'react';
import { getLocalDateTime } from '@utils';

export const CityCard = () => {
  const { forecast } = useContext(WeatherContext);

  const cityName = forecast?.name ?? '--';

  const localDateTime = getLocalDateTime(forecast?.timezone);
  let localTime, localDate;
  if(localDateTime) {
    [localDate, localTime] = localDateTime;
  } else {
    [localDate, localTime] = ["--, -- --", "--:--"];
  }

  const localTemp = forecast?.main.temp.toString().split(".")[0] ?? "--";
  const localWeather = forecast?.weather[0].description ?? "--";
  const localWeatherIcon = forecast?.weather[0].icon.toString() ?? "dayBrokenClouds";
  const localFeelsLike = forecast?.main.feels_like.toString().split(".")[0] ?? "--";

  return (
    <section className={styles['weather-today']}>
      <div className={styles['weather-today-block']}>
        <p className={styles['weather-today__region']}>{cityName}</p>
        <p className={styles['weather-today__date']}>{localDate}</p>
        <p className={styles['weather-today__time']}>{localTime}</p>
      </div>

      <div className={styles['weather-today-block']}>
        <p className={styles['weather-today__temperature']}>{localTemp}</p>
      </div>

      <div className={styles['weather-today-block']}>
        <div className={styles['weather-today__weather-type']}>
          <Icon
            name={IMAGE_NAMES[localWeatherIcon]}
            className={styles['weather-today__weather-type-img']}
          />
          <p className={styles['weather-today__weather-type-text']}>{localWeather}</p>
        </div>
        <p className={styles['weather-today__weather-feels']}>
          Ощущается как {localFeelsLike}°
        </p>
      </div>
    </section>
  );
};
