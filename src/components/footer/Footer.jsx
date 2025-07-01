import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-info']}>
        <p className={styles['footer__about-project']}>
          Проект выполнен в рамках стажировки&nbsp;
          <a
            href="https://preax.ru"
            className={styles['preax-link']}
            target="_blank"
            rel="noopener noreferrer"
          >
            PREAX
          </a>
        </p>
      </div>
    </footer>
  );
}
