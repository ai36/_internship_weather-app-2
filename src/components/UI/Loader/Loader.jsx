import styles from './loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
