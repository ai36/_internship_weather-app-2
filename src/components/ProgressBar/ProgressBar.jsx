import styles from './ProgressBar.module.css';

export const ProgressBar = ({ value, type}) => {
  let current = value;
  while (current > 100) {
    current = current / 10;
  }
  return (
    <div className={styles.bar}>
      <div className={styles.circle} style={{ left: `calc(${current}% - 8px` }}></div>
      <div
        className={styles.progress}
        style={{
          mask: `radial-gradient(
          circle at calc(${current}% - 8px + clamp(0.188rem, -0.125rem + 0.78vw, 0.25rem)),
          transparent clamp(0.313rem, 0.78vw, 0.375rem),
          var(--proggress-bar-bg-color) clamp(0.313rem, 0.78vw, 0.375rem),
          var(--proggress-bar-bg-color) clamp(0.313rem, 0.78vw, 0.375rem)
        )`,
          backgroundImage:
            type === 'pressure' &&
            `linear-gradient(
              to right,
              var(--light-color-accent) 0%,
              var(--gray-color) 40%,
              var(--gray-color) 60%,
              var(--light-color-accent) 100%
            )`,
        }}
      ></div>
    </div>
  );
};
