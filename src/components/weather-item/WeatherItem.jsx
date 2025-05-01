import { Icon } from '../icon/Icon';
import styles from './weatherItem.module.css';

export function WeatherItem({ item, forecastRange }) {
  return (
    <li
      className={
        forecastRange === 'days'
          ? styles['weather-slider__item-day']
          : styles['weather-slider__item']
      }
    >
      <div className={styles['weather-slider__time']}>
        {forecastRange === 'days' ? (
          <>
            <span>{item.dayWeek}, </span>
            <span>{item.date}</span>
          </>
        ) : (
          item.time
        )}
      </div>
      <Icon className={styles['weather-slider__img']} iconName={item.icon} />
      <div className={styles['weather-slider__temp']}>
        {forecastRange === 'days' ? (
          <>
            <span>от {item.minTemp}°</span>
            <span> до {item.maxTemp}°</span>
          </>
        ) : (
          `${item.temp}°`
        )}
      </div>
    </li>
  );
}
