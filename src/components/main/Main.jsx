import { TabBar, CityCard, CardList } from '../../components';
import styles from './main.module.css';

export const Main = () => {
  return (
    <main>
      <h1 className='visually-hidden'>Прогноз погоды</h1>
      <section className={styles['weather-today']}>
        <CityCard />
        <CardList />
      </section>
      <TabBar />
    </main>
  );
};
