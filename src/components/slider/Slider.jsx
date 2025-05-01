import { WeatherItem } from "../weather-item/WeatherItem";
import { weatherDataFiveDays, weatherDataTwentyFourHours } from "../../assets/mockData/mockWeatherData";
import styles from "./slider.module.css";

export function Slider({ forecastRange }) {
  const weatherData = forecastRange === 'hours' 
    ? weatherDataTwentyFourHours 
    : weatherDataFiveDays;

  return (
    <>
      <button className={styles['weather-slider__prev-btn']} disabled type="button">
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M16 3L7 12L16 21'
            stroke='#545454'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <ul className={styles['weather-slider__list']}>
        {weatherData.map((item, index) => (
          <WeatherItem key={index} item={item} forecastRange={forecastRange} />
        ))}
      </ul>
      <button className={styles['weather-slider__next-btn']} type="button">
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8 21L17 12L8 3'
            stroke='#545454'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </>
  );
}