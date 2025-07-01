import SLIDER_TYPES from '@constants/SLIDER_TYPES';

import { Tab } from '@components/Tab';
import styles from './TabBar.module.css';

export const TabBar = ({ setActiveSlider, active }) => {
  return (
    <div className={styles['forecast-slider__selection']}>
      <h3 className={styles['forecast-slider__selection-title']}>Прогноз:</h3>
      <Tab
        onClick={() => setActiveSlider(SLIDER_TYPES.forOneDay)}
        isActive={active === SLIDER_TYPES.forOneDay}
      >
        на 24 часа
      </Tab>
      <Tab
        onClick={() => setActiveSlider(SLIDER_TYPES.forFiveDays)}
        isActive={active === SLIDER_TYPES.forFiveDays}
      >
        на 5 дней
      </Tab>
    </div>
  );
}
