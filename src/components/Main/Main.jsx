import { useContext } from 'react';
import { CityCard, CityList } from '../../components';
import { Context } from '../../context';

import styles from './main.module.css';

export const Main = () => {
  const { searchOpen } = useContext(Context);
  const style = `${styles.main} ${searchOpen ? 'filter' : ''}`;
  return (
    <main className={style}>
      <CityCard />
      <CityList />
    </main>
  );
};
