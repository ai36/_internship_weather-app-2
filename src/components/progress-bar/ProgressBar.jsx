import styles from './progressBar.module.css';

export function ProgressBar({ type = 'default', current = "90" }) {
  return (
    <div
      className={`${styles['details-item__range']} ${
        type === 'pressure' && `${styles['details-item__range_pressure']}`
      }`}
      data-min='0'
      data-max='100'
      style={{"--x-range": Math.min(Math.max(current, 0), 100)}}
    >
      <div className={styles['details-item__round']} />
    </div>
  );
}
