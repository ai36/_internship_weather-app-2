import { cn } from '@utils/';
import IMAGE_NAMES from '@constants/IMAGE_NAMES.js';
import styles from './Logo.module.css';
import {Icon} from "@components/Icon";

export const Logo = ({ className }) => {
  return (
    <a href="/" className={styles['header__logo-wrap']}>
      <Icon name={IMAGE_NAMES.logo} className={styles.logo} />
      <Icon
        name={IMAGE_NAMES.logoSmall}
        className={cn(styles.logoSmall, className)}
      />
    </a>
  );
}
