import styles from './Layout.module.css';
import { useAppContext } from '@/hooks';
import { cn } from '@utils/';

export const Layout = ({ children }) => {
  const { searchMode, headerRef } = useAppContext();

  return (
    <div
      className={cn(
        styles.layout,
        { [styles.searchMode]: searchMode },
        { searchMode: searchMode }
      )}
      style={{
        '--container-padding-top': `${searchMode ? headerRef.current.offsetHeight : 0}px`,
      }}
    >
      <div className={styles.container}>{children}</div>
    </div>
  );
};
