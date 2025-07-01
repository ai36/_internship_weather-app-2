import styles from './WeatherSearch.module.css';
import { Input } from '@components/Input';
import validateRussianInput from '@utils/validateRussianInput';
import { useRef, useState } from 'react';
import { useAppContext, useClickOutside, useWeatherContext } from '@/hooks';
import { DropDown } from '@components/DropDown';

export const WeatherSearch = () => {
  const [value, setValue] = useState('');
  const { searchMode, setSearchMode } = useAppContext();
  const ref = useRef(null);
  const containerRef = useRef(null);
  const {
    setCity,
    setCityData,
    addToRecent,
    clearRecent,
    clearCityFound,
    coordsLoading,
    recent,
    cityFound,
  } = useWeatherContext();

  const closeDropdown = () => {
    setSearchMode(false);
  };

  useClickOutside(containerRef, closeDropdown, searchMode);

  const focusHandler = () => {
    setSearchMode(true);
  };

  const inputHandler = (evt) => {
    setValue(evt.target.value);
    const isRussianText = validateRussianInput(evt.target.value);
    if (isRussianText) {
      ref.current.setCustomValidity('');
    } else {
      ref.current.setCustomValidity(
        'Запрос должен быть введён на русском языке'
      );
    }
    if (evt.target.value === '') {
      clearCityFound();
      if (cityFound.name !== '') {
        setCity('');
      }
    }
  };
  
  const clearHandler = (evt) => {
    if (searchMode && !value) {
      setSearchMode(false);
      return;
    }
    evt.preventDefault();
    setValue('');
    clearCityFound();
    if (cityFound.name !== '') {
      setCity('');
    }
  };

  const clickHandler = (value) => {
    addToRecent(value);
    setCityData(value);
    setValue('');
    clearCityFound();
    if (cityFound.name !== '') {
      setCity('');
    }
    setSearchMode(false);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    setCity(value);
  };

  return (
    <div
      className={styles.weatherSearch}
      onFocus={focusHandler}
      ref={containerRef}
    >
      <Input
        value={value}
        onChange={inputHandler}
        onSubmit={submitHandler}
        onReset={clearHandler}
        placeholder="Поиск по городу"
        inputRef={ref}
        active={searchMode}
      />
      {searchMode && (
        <DropDown
          recent={recent}
          loading={coordsLoading}
          cityFound={cityFound}
          onClick={clickHandler}
          onResultClick={addToRecent}
          onClear={clearRecent}
        />
      )}
    </div>
  );
};
