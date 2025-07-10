import { useContext } from 'react';
import { Icon } from '../Icon/Icon';
import { ProgressBar } from '../UI';
import { detailMockData } from './mockData';
import { DataCityContext } from '../../context/DataContext';
import {
  getFormattedTime,
  getLocalDate,
  getPressureDescription,
  getTimeUntilOrAfter,
  getWindDirection,
} from '../../utils/cardsUtils';
import { MockCityList } from './MockCityList';

import styles from './cityList.module.css';

export const CityList = () => {
  const { data } = useContext(DataCityContext);

  if (!data) {
    return <MockCityList />;
  }

  const { main, sys, wind, visibility, timezone } = data;
  const pressure_mmHg = Math.round(main?.pressure * 0.750064);
  const visibility_km = visibility / 1000;
  const precise_visibility_km = visibility_km?.toFixed(1);
  let result_visibility;

  if (Number(precise_visibility_km) === visibility_km) {
    result_visibility = `${visibility_km} км`;
  } else {
    result_visibility = `${precise_visibility_km} км`;
  }

  const sunriseTime = sys?.sunrise * 1000;
  const sunsetTime = sys?.sunset * 1000;

  const sunriseLocalDate = getLocalDate(sunriseTime, timezone * 1000);
  const sunsetLocalDate = getLocalDate(sunsetTime, timezone * 1000);

  return (
    <section className={styles.detail}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.title}>Влажность</h3>
          <Icon
            icon='humidity'
            alt='Влажность иконка'
            className={styles.icon}
          />
          <span className={styles.data}>{`${main?.humidity}%`}</span>
          <div className={styles.barWrapper}>
            <ProgressBar
              type={detailMockData.humidity.type}
              current={main?.humidity}
            />
            <div
              className={`${styles.description} ${styles.descriptionBarVal}`}
            >
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Давление</h3>
          <Icon icon='barometr' alt='Давление иконка' className={styles.icon} />
          <span className={styles.data}>{pressure_mmHg}</span>
          <div className={styles.barWrapper}>
            <ProgressBar
              type={detailMockData.barometr.type}
              current={pressure_mmHg / 10}
            />
            <span className={styles.description}>
              {getPressureDescription(pressure_mmHg)}
            </span>
          </div>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Видимость</h3>
          <Icon
            icon='visibility'
            alt='Видимость иконка'
            className={styles.icon}
          />
          <span className={styles.data}>{result_visibility}</span>
          <div className={styles.barWrapper}>
            <ProgressBar
              type={detailMockData.visibility.type}
              current={(visibility / 10000) * 100}
            />
            <span className={styles.description}>
              {detailMockData.visibility.comment}
            </span>
          </div>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Рассвет</h3>
          <Icon icon='sunrise' alt='Рассвет иконка' className={styles.icon} />
          <span className={styles.data}>
            {getFormattedTime(sunriseLocalDate)}
          </span>
          <span className={styles.description}>
            {getTimeUntilOrAfter(
              getLocalDate(Date.now(), timezone * 1000),
              sunriseLocalDate
            )}
          </span>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Закат</h3>
          <Icon icon='sunset' alt='Закат иконка' className={styles.icon} />
          <span className={styles.data}>
            {getFormattedTime(sunsetLocalDate)}
          </span>
          <span className={styles.description}>
            {getTimeUntilOrAfter(
              getLocalDate(Date.now(), timezone * 1000),
              sunsetLocalDate
            )}
          </span>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Сила ветра</h3>
          <Icon
            icon='direction'
            alt='Сила ветра'
            className={styles.icon}
            rotation={wind?.deg + 180}
          />
          <span className={styles.data}>{`${Math.round(
            wind?.speed
          )} м/с`}</span>
          <span className={styles.description}>
            {getWindDirection(wind?.deg)}
          </span>
        </li>
      </ul>
    </section>
  );
};
