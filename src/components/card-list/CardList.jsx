import { Card } from '../../components';
import { weatherDataObject } from '../../assets/mockData/mockWeatherData.js';
import styles from './cardList.module.css';

export const CardList = () => {
  return (
    <ul className={`${styles['weather-today__details']} ${styles.details}`}>
      {weatherDataObject.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </ul>
  );
};
