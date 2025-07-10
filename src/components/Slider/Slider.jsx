import { useContext, useEffect, useRef, useState } from 'react';
import { TabBar, Icon, Button } from '../../components';
import { Context, DataCityContext } from '../../context';
import { Storage, sliderScroll } from '../../utils';
import { useForecast } from '../../hooks/useForecast.js';

import styles from './styles.module.css';

const tabList = [
  { text: 'на 24 часа', aria: 'Недельный прогноз' },
  { text: 'на 5 дней', aria: 'Почасовой прогноз' },
];

export const Slider = () => {
  const { searchOpen } = useContext(Context);
  const { cityName, data } = useContext(DataCityContext);
  const style = `${styles.block} ${searchOpen ? 'filter' : ''}`;

  const cityObj = Storage.get('cities').find(
    cityObj => cityObj.name === cityName
  );
  const [toggleTab, setToggleTab] = useState(0);

  const { dayForecast, weekForecast } = useForecast(
    cityObj?.lat,
    cityObj?.lon,
    data?.timezone
  );

  const sliders = [dayForecast, weekForecast];

  const handleToggleTab = index => {
    setToggleTab(index);
  };

  const listRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    if (!listRef.current || !sliders[toggleTab]?.length) return;
    const cleanup = sliderScroll(
      listRef.current,
      `.${styles.item}`,
      leftBtnRef.current,
      rightBtnRef.current,
      currentIndexRef,
    );
    return cleanup;
  }, [toggleTab, cityName, data]);


  useEffect(() => {
    listRef.current.scrollTo({ left: 0, behavior: 'smooth'});
    currentIndexRef.current = 0;
  }, [toggleTab, cityName, data]);

  return (
    <section className={style}>
      <div className={styles.header}>
        <h2 className={styles.title}>Прогноз:</h2>
        <TabBar
          list={tabList}
          handleToggleTab={handleToggleTab}
          activeTab={toggleTab}
        />
      </div>

      <div className={styles.slider}>
        <Button icon='chevron-left' ref={leftBtnRef} />
        <ul className={styles.list} ref={listRef}>
          {sliders[toggleTab]?.map((item, index) => (
            <li key={`${item.time}-${index}`} className={styles.item}>
              <span className={styles.text}>{item.time}</span>
              <Icon
                icon={item.icon}
                className={styles.icon}
                alt='Иконка погоды'
              />
              {item.minTemp || item.maxTemp ? (
                <span className={styles.text}>
                  от {item.minTemp}° до {item.maxTemp}°
                </span>
              ) : (
                <span className={styles.text}>{item.temp}°</span>
              )}
            </li>
          ))}
        </ul>
        <Button ref={rightBtnRef} />
      </div>
    </section>
  );
};
