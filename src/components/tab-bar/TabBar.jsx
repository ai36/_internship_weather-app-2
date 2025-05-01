import { Tab } from '../../components';
import styles from './tabBar.module.css';
import { useState } from 'react';

export function TabBar() {
    const [forecastRange, setForecastRange] = useState('hours');
    const [activeTab, setActiveTab] = useState('hours');
  
    const handleTabChange = (range) => {
      setForecastRange(range);
      setActiveTab(range);
    };

  return (
    <section className={styles['slider']}>
      <h2 className='visually-hidden'>Прогноз погоды по часам или на 5 дней</h2>
      <nav className={`${styles['slider__menu']} ${styles['menu-slider']}`}>
        <div className={styles['menu-slider__title']}>Прогноз:</div>
        <ul className={styles['menu-slider__list']}>
          <li className={styles['menu-slider__item']}>
            <button
              type='button'
              className={`${styles['menu-slider__link']} ${
                activeTab === 'hours' ? styles['menu-slider__link--active'] : ''
              }`}
              onClick={() => handleTabChange('hours')}
            >
              на 24 часа
            </button>
          </li>
          <li className={styles['menu-slider__item']}>
            <button
              type='button'
              className={`${styles['menu-slider__link']} ${
                activeTab === 'days' ? styles['menu-slider__link--active'] : ''
              }`}
              onClick={() => handleTabChange('days')}
            >
              на 5 дней
            </button>
          </li>
        </ul>
      </nav>
      <Tab forecastRange={forecastRange} />
    </section>
  );
}
