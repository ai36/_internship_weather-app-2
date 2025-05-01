import { Icon } from '../../components';
import styles from './cityCard.module.css';

export const CityCard = () => {
  return (
    <div className={`${styles['info-weather']}`}>
      <div className={`${styles['info-weather__location']}`}>
        <h2 className={`${styles['info-weather__city']}`}>
          Кременчуг-константиновское
        </h2>
        <p className={`${styles['info-weather__date']}`}>Суббота, 06 января</p>
        <time className={`${styles['info-weather__time']}`} datetime="11:29">11:29</time>
      </div>
      <span className={`${styles['info-weather__degrees']}`}>-7°</span>
      <div className={`${styles['info-weather__short']}`}>
        <div className={`${styles['info-weather__cloud']}`}>
          <Icon className={`${styles['info-weather__icon']}`} iconName="day-broken-clouds" />
          <span>Облачно с прояснениями</span>
        </div>
        <p className={`${styles['info-weather__feels']}`}>Ощущается как -11°</p>
      </div>
    </div>
  );
};
