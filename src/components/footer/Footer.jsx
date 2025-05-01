import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>
        Проект выполнен в рамках стажировки&nbsp;
        <a
          href='https://preax.ru/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='PREAX'
          title='PREAX'
        >
          PREAX
        </a>
      </p>
    </footer>
  );
};
