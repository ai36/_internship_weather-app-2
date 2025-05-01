import { Icon } from '../../components';
import { useState } from 'react';
import styles from './input.module.css';

export const Input = () => {
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [inputIsEmpty, setInputIsEmpty] = useState(true);

  const handleInputFocus = () => {
    setInputIsFocused(true);
  }

  const handleInputBlur = () => {
    setInputIsFocused(false);
  }

  const handleOnChange = (e) => {
    if(e.target.value) {
      setInputIsEmpty(false);
    } else {
      setInputIsEmpty(true);
    }
  }

  const handleFormReset = () => {
    setInputIsEmpty(true);
    setInputIsFocused(false);
  }

  const handleInputOutput = (e) => {
    console.log(e.target.value);
  }

  return (
    <form className={`${styles['header__search-form']} ${styles['search-form']}`} onSubmit={(e) => e.preventDefault()} onReset={handleFormReset}>
      <input
        className={styles['search-form__input']}
        type='text'
        placeholder='Поиск по городу'
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onChange={handleOnChange}
        onInput={handleInputOutput}
      />
      <button
        className={`${styles['search-form__btn']}`}
        type={inputIsFocused || !inputIsEmpty ? "reset" : "button"}
        >
        <Icon iconName={inputIsFocused || !inputIsEmpty ? "close" : "search"} />
      </button>
    </form>
  );
};
