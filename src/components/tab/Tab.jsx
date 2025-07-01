import { cn } from '@utils/';
import styles from './Tab.module.css';

export const Tab = ({ onClick, isActive, children }) => {
  return (
    <div className={styles['forecast-slider__selection-btn-wrap']}>
      <button
        className={cn(styles['forecast-slider__selection-btn'], {
          [styles['forecast-slider__selection-btn--active']]: isActive,
        })}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
