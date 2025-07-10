import { useContext } from 'react';
import { Context } from '../../context/AppContext';

import styles from './footer.module.css';

export const Footer = ({ href }) => {
  const { searchOpen } = useContext(Context);
  const style = `${styles.footer} ${searchOpen ? 'filter' : ''}`;
  return (
    <footer className={style}>
      <div>
        Проект выполнен в рамках стажировки{' '}
        <a
          href={href ?? 'https://preax.ru'}
          target='_blank'
          rel='noreferrer'
          className={styles.footerLink}
        >
          {' '}
          PREAX{' '}
        </a>
      </div>
    </footer>
  );
};
