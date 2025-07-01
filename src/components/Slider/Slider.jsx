import { cn } from '@utils/cn';
import SLIDER_TYPES from '@constants/SLIDER_TYPES';

import styles from './Slider.module.css';

import forecastData from '../../data/forecast-data';
import IMAGE_NAMES from '@constants/IMAGE_NAMES';
import {Icon} from "@components/Icon";

export const Slider = ({ activeSlider }) => {
  return (
    <div className={styles.sliders}>
      <button
        className={cn(
          styles['slider__move-btn'],
          styles['slider__move-btn--left']
        )}
        disabled={true}
      >
        <Icon
          name={IMAGE_NAMES.arrowRight}
          className={styles['slider__move-btn-icon']}
        />
      </button>
      <div className={styles.slider}>
        {activeSlider === SLIDER_TYPES.forOneDay && (
          <ul className={styles.slider__cards}>
            {forecastData.oneDay.map(
              ({ time, imageName, temperature }, index) => {
                return (
                  <li key={index}>
                    <div className={styles['slider__card']}>
                      <span className={styles['slider__card-time']}>
                        {time}
                      </span>
                      <span>
                        <Icon
                          className={styles['slider__card-weather-type']}
                          name={imageName}
                        />
                      </span>
                      <div className={styles['slider__card-temperature']}>
                        {temperature}
                      </div>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        )}
        {activeSlider === SLIDER_TYPES.forFiveDays && (
          <ul className={styles.slider__cards}>
            {forecastData.fiveDays.map(
              (
                {
                  weekday,
                  date,
                  month,
                  temperature_last,
                  temperature_future,
                  imageName,
                },
                index
              ) => {
                return (
                  <li key={index} className={styles['slider__card']}>
                    <div className={styles['slider__card-time']}>
                      <span>{weekday} </span>
                      <span>{date} </span>
                      <span>{month}.</span>{' '}
                    </div>
                    <div>
                      <Icon
                        className={styles['slider__card-weather-type']}
                        name={imageName}
                      />
                    </div>
                    <div className={styles['slider__card-temperature']}>
                      от {temperature_last} до {temperature_future}
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        )}
      </div>
      <button
        className={cn(
          styles['slider__move-btn'],
          styles['slider__move-btn--right']
        )}
        disabled={false}
      >
        <Icon
          name={IMAGE_NAMES.arrowRight}
          className={styles['slider__move-btn-icon']}
        />
      </button>
    </div>
  );
}
