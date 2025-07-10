import { useContext } from 'react';
import { Logo } from '../UI';
import { getCityData, getWeatherData } from '../../api';
import { WeatherSearch, DropdownContent } from '../../components';
import { HeadContext, DataCityContext, Context } from '../../context';
import { Storage, prepareArray } from '../../utils';

import styles from './header1.module.css';

export const Header = () => {
  const {
    value,
    setValue,
    isLoading,
    setIsLoading,
    setCityData,
    setSearchOpen,
  } = useContext(Context);
  const { setLocalData, setDropDownContent } = useContext(HeadContext);
  const { setData, setСityName } = useContext(DataCityContext);

  const onChooseCity = async (e, cityName, lat, lon) => {
    e.stopPropagation();
    setSearchOpen(false);
    const weatherData = await getWeatherData(lat, lon);
    setCityData(null);
    setСityName(cityName);
    setData(weatherData);
    setValue('');
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (isLoading || !value) return;
    setIsLoading(true);
    setDropDownContent(<DropdownContent title={'Ищем...'} />);
    try {
      const cityData = await getCityData(value);
      if (!cityData.length) {
        setDropDownContent(
          <DropdownContent
            title={'Упс! Город не найден'}
            items={[{ name: 'Попробуйте другое название' }]}
            className={'notFound'}
          />
        );
        return;
      } else {
        setCityData(cityData);
        setСityName(value);
        setDropDownContent(
          <DropdownContent
            title={'Результат поиска'}
            items={[
              {
                name: cityData[0].name,
                lat: cityData[0].lat,
                lon: cityData[0].lon,
              },
            ]}
            className={'item'}
            onChoose={onChooseCity}
          />
        );
      }
      const newCityData = {
        name: cityData[0].name,
        lat: cityData[0].lat,
        lon: cityData[0].lon,
      };

      Storage.put('cities', newCityData);
      setLocalData(prev => prepareArray(newCityData, prev));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log('Отсутствует связь со сторонним сервисом');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header className={`${styles.header}`}>
      <Logo className={styles.logo} />
      <form onSubmit={onSubmit}>
        <WeatherSearch onChooseCity={onChooseCity} />
      </form>
    </header>
  );
};
