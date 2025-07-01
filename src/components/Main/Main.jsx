import SLIDER_TYPES from '../../constants/SLIDER_TYPES';


import styles from './Main.module.css';

import { useState } from 'react';
import {CityCard} from "@components/CityCard";
import {CardList} from "@components/CardList";
import {TabBar} from "@components/TabBar";
import {Slider} from "@components/Slider";

export const Main = () => {
  const [activeSlider, setActiveSlider] = useState(SLIDER_TYPES.forOneDay);

  return (
    <main>
      <div className={styles.weather}>
        <CityCard />
        <CardList />
      </div>
      <section className={styles['forecast-slider']}>
        <TabBar setActiveSlider={setActiveSlider} active={activeSlider} />
        <Slider activeSlider={activeSlider} />
      </section>
    </main>
  );
}
