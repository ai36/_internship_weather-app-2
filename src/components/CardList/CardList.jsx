import { Card } from '@components/Card';
import styles from './CardList.module.css';

import cardsData from '../../data/cards-data';

export const CardList = () => {
  return (
    <section>
      <div className={styles.wrap}>
        <ul className={styles.cards} id="id-weather-details-cards">
          {cardsData.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              name={data.name}
              value={data.value}
              measure={data.measure}
              hasProgress={data.hasProgress}
              addictional={data.addictional}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
