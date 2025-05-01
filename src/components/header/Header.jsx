import { Logo, Input } from '../../components';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Input />
    </header>
  );
};
