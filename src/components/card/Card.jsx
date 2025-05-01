import { Icon, ProgressBar } from '../../components';
import styles from './card.module.css';

export const Card = (props) => {
  const { name, icon, value, designation, min, max, info, changeTime } = props;

  return (
    <li className={`${styles.details__item} ${styles['details-item']}`}>
      <div className={styles['details-item__info-all']}>
        <h3 className={styles['details-item__title']}>{name}</h3>
        <Icon className={styles['details-item__img']} iconName={icon} />
        <div className={styles['details-item__value']}>
          {value} {designation}
        </div>
      </div>
      <div className={styles['details-item__info-custom']}>
        {(name === 'Влажность' || name === 'Видимость') && <ProgressBar current={value}/>}
        {name === 'Давление' && <ProgressBar type='pressure' current={((value-661)>>1)} />}

        <div className={styles['details-item__desc']}>
          {name === 'Влажность' && (
            <span className={styles['details-item__first']}>
              {min} {designation}
            </span>
          )}
          {name === 'Влажность' && (
            <span className={styles['details-item__second']}>
              {max} {designation}
            </span>
          )}
          {info} {changeTime}
        </div>
      </div>
    </li>
  );
};
