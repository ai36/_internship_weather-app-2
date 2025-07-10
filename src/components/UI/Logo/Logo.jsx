import { Icon } from '../../../components';

import styles from './logo.module.css';

export const Logo = ({ href, className, ...props }) => {
  return (
    <a
      href={href ?? '/'}
      className={`${styles.logo} ${className}`}
      aria-label={'Логотип'}
      props={props}
    >
      <Icon icon='logo' className={styles.logoIcon} />
      <Icon icon='logo-tablet' className={styles.logoIconTablet} />
    </a>
  );
};
