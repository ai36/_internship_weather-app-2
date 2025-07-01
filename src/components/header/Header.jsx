import styles from './Header.module.css';
import { WeatherSearch } from '@components/WeatherSearch';
import { Logo } from '@components/Logo';
import { useAppContext } from '@/hooks';
import { cn } from '@utils/';

export const Header = () => {
  const { searchMode, headerRef } = useAppContext();
  return (
    <header
      className={cn(styles.header, { [styles.searchMode]: searchMode })}
      ref={headerRef}
    >
      <Logo className={styles['logo']} />
      <WeatherSearch />
    </header>
  );
};
