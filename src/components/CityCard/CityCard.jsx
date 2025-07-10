import { useContext, useState, useEffect } from 'react';
import { Icon } from '../Icon/Icon';
import { DataCityContext } from '../../context/DataContext';
import { getFormattedTime, getLocalDate } from '../../utils/cardsUtils';
import { MockCityCard } from './MockCityCard';
import { capitalize } from '../../utils/capitalize.js';

import styles from './cityCard.module.css';

export const CityCard = () => {
  const { data, cityName } = useContext(DataCityContext);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();

    const optionsDate = { weekday: 'long', day: 'numeric', month: 'long' };
    let formattedDate = date?.toLocaleDateString('ru-RU', optionsDate);
    formattedDate =
      formattedDate?.charAt(0).toUpperCase() + formattedDate?.slice(1);

    const formattedTime =
      data && data?.timezone
        ? getFormattedTime(getLocalDate(new Date(), data?.timezone * 1000))
        : '11:39';

    setCurrentDate(formattedDate);
    setCurrentTime(formattedTime);
  }, [data]);

  if (!data) {
    return <MockCityCard />;
  }

  const { main, weather } = data;
  const icon = weather?.[0].icon;
  const description =
    weather?.[0].description?.[0].toUpperCase() +
    weather?.[0].description.slice(1);

  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>{capitalize(cityName)}</h2>
      <span className={styles.day}>{currentDate}</span>
      <span className={styles.time}>{currentTime}</span>
      <span className={styles.degree}>
        <span className={styles.degreeCurrent}>{Math.round(main?.temp)}</span>°
      </span>
      <div className={styles.weather}>
        <Icon icon={icon} className={styles.icon} alt='Иконка погоды' />
        <span>{description}</span>
      </div>
      <span className={styles.feeling}>
        Ощущается как {Math.round(main?.feels_like)}°
      </span>
    </section>
  );
};
